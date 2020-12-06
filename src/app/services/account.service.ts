import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../models/account';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

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

  getAllAccounts(): Observable<Account[]>{
    return this.http.get<Account[]>(`api/accounts`, this.header);
  }

  createAccount(account: Account): Observable<Account>{  
    return this.http.post<Account>(`api/accounts`,account, this.header);
  }

  updateAccount(id: number, account: Account): Observable<Account> {
    return this.http.post<Account>(`api/accounts/${id}`, account, this.header);
  }

  getAccount(id: number): Observable<Account>{
    return this.http.get<Account>(`api/accounts/${id}`, this.header);
  }

  getAccountsByName(term: string): Observable<Account[]> {
    if (term.trim() == '') return this.getAllAccounts();
    return this.http.get<Account[]>(`api/accounts/find/${term}`, this.header);
  }

  delete(id: number): Observable<Boolean> {
    return this.http.delete<Boolean>(`api/accounts/${id}`, this.header);
  }

}
