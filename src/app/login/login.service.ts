import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface ILoginStatus {
  loggedIn: boolean;
  username: string;
}

interface LoginResponse {
  token: string;
  username: string;
  name: string;
  id: string;
}


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  dataUrl = 'http://localhost:3003/api/login';
  loginStatus = {
    loggedIn: false,
    username: null
  };
  requestStatus = 'n/a';

  getLoginStatus(): ILoginStatus {
    return this.loginStatus;
  }

  handleLoginError(error: HttpErrorResponse) {
    return throwError('Oopsie woopsie');
  }

  login(username: string, password: string) {
    console.log('begin login');
    const requestData = { username, password };
    const response = this.http.post<LoginResponse>(this.dataUrl, requestData).pipe(
      catchError(this.handleLoginError)
    );

    response.subscribe((responseData: LoginResponse) =>
      console.log('response', responseData));

  }
}
