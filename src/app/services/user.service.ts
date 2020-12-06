import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UpdateUser } from '../models/update-user';
import { UserPassword } from '../models/user-password';
import { UserRegister } from '../models/user-register';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private tokenStorage: TokenStorageService
  ) { }

  
  header = {
    headers: new HttpHeaders().set(
      'Authorization',
      `${this.tokenStorage.getToken()}`
    ),
  };

  getUserById(id: Number): Observable<UserRegister> {
    return this.http.get<UserRegister>(`api/users/${id}`, this.header);
  }

  updateUser(id: Number,user: UserRegister): Observable<UserRegister> {
    let us: UserRegister = {
      id: user.id,
      name: user.name,
      email: user.email,
      dateOfBirth: user.dateOfBirth,
      accounts: [],
      password: user.password,
      confirmPassword: ''
    };
    return this.http.put<UserRegister>(`api/users/${id}`, us, this.header);
  }

  updatePassword(id: Number,user: UserPassword): Observable<UserRegister> {
    return this.http.put<UserRegister>(`api/users/password/${id}`, user, this.header);
  }

  delete(id: number): Observable<Boolean> {
    return this.http.delete<Boolean>(`api/users/${id}`, this.header);
  }

}
