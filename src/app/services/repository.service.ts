import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {combineLatest, Observable} from 'rxjs';
import {UserListAddAction, UserListRequestAction, UserListSuccessAction,} from '../actions/user.action';
import {User} from '../models/user.model';
import {getUserById, getUserLoaded, getUserLoading, getUsers, RootReducerState,} from '../reducers';
import {ApiService} from './api.service';
import {take} from 'rxjs/operators';

/*
 * This custom service made to maintain Single Responsibility Principle
 * Which in the long run helps to achieve InterfaceSegregation + DI
 * To follow SOLID Design Principle in Development!!
 * NOTE: For Future Task have to follow principles to maintain
 * Scalability and Extensibility of your Applicaiton
 */

type GetUserListType = {
  loading$: Observable<boolean>;
  getAllUsers: Observable<User[]>;
};

@Injectable({
  providedIn: 'root',
})
export class RepositoryService {
  constructor(
    private store: Store<RootReducerState>,
    private apiServiceCall: ApiService
  ) {
  }

  /**
   * getUserList
   */

  public getUserList(force: boolean = false): GetUserListType {
    const loading$: Observable<boolean> = this.store.select(getUserLoading);
    const loaded$: Observable<boolean> = this.store.select(getUserLoaded);
    const getAllUsers: Observable<User[]> = this.store.select(getUsers);
    // combine the latest subcriable users
    // reduce [only intial load] the data fetching from API
    combineLatest([loading$, loaded$]).subscribe((data: [boolean, boolean]) => {
      if ((!data[0] && !data[1]) || force) {
        this.store.dispatch(new UserListRequestAction());
        this.apiServiceCall.getAllUsers().subscribe((users: User[]) => {
          this.store.dispatch(new UserListSuccessAction({data: users}));
        });
      }
    });
    return {loading$, getAllUsers};
  }

  /**
   * getUserById
   */
  public getUserById(id: number, force: boolean = false): Observable<User> {
    const user$ = this.store.select(state => getUserById(state, id));
    user$.pipe(take(1)).subscribe(res => {
      if (force || !res) {
        this.store.dispatch(new UserListAddAction());
        return this.apiServiceCall.getUserById(id);
      }
      return res;
    });
    return user$;
  }
}