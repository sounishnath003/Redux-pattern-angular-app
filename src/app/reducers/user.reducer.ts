import {User} from '../models/user.model';
import {Action} from '../actions';
import {USER_DELETE, USER_LIST_REQUEST} from '../actions/user.action';
import {StoreUtility} from '../utils/store.utility';

/*
* Mainly reducers take 2 params
* function reducer(state:State<any>, actions: enum[]) : State<any> { ... }
* Any action contains 2 things in it.
*   1. type: SwitchCase to determine which action is requested to be execute...
*   2. Payload: data which we are going to send as overhead to the performed action.
* */

export interface UserReducerState {
  loading: boolean;
  loaded: boolean;
  error: boolean;
  entities: { [id: number]: User };
  ids: number[];
}

// defining my InitialUserState<UserReducerState>
const initialUserState: UserReducerState = {
  loaded: false,
  loading: false,
  error: false,
  entities: {},
  ids: []
};

// implementing required reducer-function
export function UserReducer(state: UserReducerState = initialUserState, action: Action): UserReducerState {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return {...state, loading: true};
    case USER_DELETE:
      const id: number = action.payload.id;
      const newIds: number[] = state.ids.filter((idx: number) => idx !== id);
      const newEntries = StoreUtility.removeKey(state.entities, id);
      return {
        ...state,
        ...{
          ids: newIds,
          entities: newEntries
        }
      }
        ;
    default:
      return state;
  }
}
