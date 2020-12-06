import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegister } from '../models/user-register';
import { AuthService } from '../services/auth-service.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  today = Date.now();
  showErrorMessage = false;
  errorMessage: string;
  model = { accounts: [] } as UserRegister;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    let date = new Date();
    if (this.model.password.length < 8) {
      this.showErrorMessage = true;
      this.errorMessage = `Password must be at least 8 characters`;
      return;
    } else if (this.model.password != this.model.confirmPassword) {
      this.showErrorMessage = true;
      this.errorMessage = `Passwords must match`;
      return;
    } else if (new Date(this.model.dateOfBirth) >= date) {
      this.showErrorMessage = true;
      this.errorMessage = `You can't be born in the future`;
      return;
    }

    this.authService.register(this.model).subscribe(
      () => {
        this.router.navigate(['/login']);
      },
      (error) => {
        this.showErrorMessage = true;

        if (typeof error.error === 'string') {
          this.errorMessage = error.error;
        } else {
          this.errorMessage = 'User exist';
        }
      }
    );
  }

}
