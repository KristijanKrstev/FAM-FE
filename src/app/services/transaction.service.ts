import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from '../models/transaction';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

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

  getAllTransactions(): Observable<Transaction[]>{
    return this.http.get<Transaction[]>(`api/transactions`, this.header);
  }

  createTransaction(transaction: Transaction): Observable<Transaction>{  
    return this.http.post<Transaction>(`api/transactions`,transaction, this.header);
  }

  updateTransaction(id: number, transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(`api/transactions/${id}`, transaction, this.header);
  }

  getTransactions(id: number): Observable<Transaction>{
    return this.http.get<Transaction>(`api/transactions/${id}`, this.header);
  }

  getTransactionsByName(term: string): Observable<Transaction[]> {
    if (term.trim() == '') return this.getAllTransactions();
    return this.http.get<Transaction[]>(`api/transactions/find/${term}`, this.header);
  }

  delete(id: number): Observable<Boolean> {
    return this.http.delete<Boolean>(`api/transactions/${id}`, this.header);
  }

}
