import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddSaving } from '../models/add-saving';
import { Saving } from '../models/savings';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SavingService {

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

  getAllSavings(): Observable<Saving[]>{
    return this.http.get<Saving[]>(`api/savings`, this.header);
  }

  createSaving(saving: AddSaving): Observable<Saving>{  
    return this.http.post<Saving>(`api/savings`,saving, this.header);
  }

  getSaving(id: number): Observable<Saving>{
    return this.http.get<Saving>(`api/savings/${id}`, this.header);
  }

  delete(id: number): Observable<Boolean> {
    return this.http.delete<Boolean>(`api/savings/${id}`, this.header);
  }

  getInitialBalance(id: number): Observable<Boolean>{
    return this.http.get<Boolean>(`api/savings/initialBalance/${id}`, this.header);
  }

}
