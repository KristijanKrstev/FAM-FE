import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Work } from '../models/work';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class WorkService {

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

  getAllWorks(): Observable<Work[]>{
    return this.http.get<Work[]>(`api/works`, this.header);
  }

  createWork(work: Work): Observable<Work>{  
    return this.http.post<Work>(`api/works`,work, this.header);
  }

  updateWork(id: number, work: Work): Observable<Work> {
    return this.http.post<Work>(`api/works/${id}`, work, this.header);
  }

  getWorks(id: number): Observable<Work>{
    return this.http.get<Work>(`api/works/${id}`, this.header);
  }

  getWorksByName(term: string): Observable<Work[]> {
    if (term.trim() == '') return this.getAllWorks();
    return this.http.get<Work[]>(`api/works/find/${term}`, this.header);
  }

  delete(id: number): Observable<Boolean> {
    return this.http.delete<Boolean>(`api/works/${id}`, this.header);
  }

}
