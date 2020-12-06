import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(
    private http: HttpClient,
    private tokenStorage: TokenStorageService
  ) {}

  header = {
    headers: new HttpHeaders().set(
      'Authorization',
      `${this.tokenStorage.getToken()}`
    ),
  };

  PostMessage(input: any) {
    console.log(input);
    return this.http.post(`api/contact`, input, this.header);
  }
}
