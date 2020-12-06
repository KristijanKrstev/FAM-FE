import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from '../models/user-login';
import { UserRegister } from '../models/user-register';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient
  ) {}

  login(user: UserLogin): Observable<any> {
    return this.http.post<UserLogin>('api/users/login', user);
  }

  register(user: UserRegister): Observable<UserRegister> {
    return this.http.post<UserRegister>('api/users/register', user);
  }
}