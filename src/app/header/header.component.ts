import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  id = null;

  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.id = this.tokenStorage.getUser().id;
    }
  }
  
  Logout() {
    if (window.confirm('Do you want to log out?')) {
      window.sessionStorage.clear();
      location.replace('/login');
    }
  }

}
