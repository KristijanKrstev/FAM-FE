import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserPassword } from '../models/user-password';
import { UserRegister } from '../models/user-register';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent implements OnInit {

  error = false;
  user: UserRegister;
  model = {} as UserPassword;

  constructor(
    private tokenStorage: TokenStorageService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = this.tokenStorage.getUser();
  }

  onSubmit() {
    this.error = false;
    if (this.model.password.length < 8 || this.model.password != this.model.confirmPassword) {
      this.error = true;
    }
    else{
      this.userService.updatePassword(this.user.id,this.model).subscribe(
        (data) => {
          this.user = data;
          this.tokenStorage.saveUser(data);
        }
      );
      this.router.navigate(['/user']);
    }
  }

}
