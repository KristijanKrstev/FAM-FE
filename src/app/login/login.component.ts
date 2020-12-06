import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../models/user-login';
import { UserRegister } from '../models/user-register';
import { AuthService } from '../services/auth-service.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  showErrorMessage = false;
  showForgotPassword = false;
  model = {} as UserLogin;
  user = {} as UserRegister;

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.authService.login(this.model).subscribe(
      (data) => {
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data.user);

        location.replace('/accounts');
      },
      () => {
        this.showErrorMessage = true;
        this.model.password = '';
      }
    );
  }

  forgotPassword() {
    this.showForgotPassword = !this.showForgotPassword;
  }

}
