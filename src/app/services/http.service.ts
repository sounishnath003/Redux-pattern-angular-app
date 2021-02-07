import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IResp, User } from '../models/user.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private baseUrl = 'https://reqres.in/api';
  private AUTH_TOKEN = 'auth_token';

  constructor(private http: HttpClient) {}

  get(url: string, params?: any): Observable<User[]> {
    const payload = { params, headers: this.getHeaders() };
    return this.http
      .get(this.baseUrl + url, payload)
      .pipe(map((resp: IResp) => resp.data as User[]));
  }

  private getHeaders(): { [a: string]: string | string[] } {
    return { Authorization: `Bearer ${localStorage.getItem(this.AUTH_TOKEN)}` };
  }
}