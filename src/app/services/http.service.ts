import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user.model';
import {catchError} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';
  private AUTH_TOKEN = 'auth_token';

  constructor(private http: HttpClient) {
  }

  get(url: string, params?: any): Observable<any> {
    const payload = {params, headers: this.getHeaders()};
    return this.http
      .get(this.baseUrl + url, payload)
      .pipe(catchError(this.errorHandler.bind(this)));
  }

  private errorHandler(resp: any): Observable<never> {
    const error = resp.error;
    const keys = Object.keys(error);
    const key = keys[0];
    let message = error[key];
    if (error[key] instanceof Array) {
      message = error[key][0];
    }
    if (key === 'isTrusted') {
      // this will occur when not connected to internet
    } else {
      message = key + ' : ' + message;
    }
    // call snackbar and show error with message
    return throwError({messages: message, error});
  }

  private getHeaders(): { [a: string]: string | string[] } {
    return {Authorization: `Bearer ${localStorage.getItem(this.AUTH_TOKEN)}`};
  }
}
