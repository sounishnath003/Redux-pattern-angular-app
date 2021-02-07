import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {User} from '../models/user.model';
import {Observable, Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpService: HttpService) {
  }

  public getAllUsers(): Observable<User[]> {
    return this.httpService.get('/users');
  }
}
