import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegister } from '../models/user-register';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  
  error = false;
  model: UserRegister = this.tokenStorage.getUser();

  constructor(
    private tokenStorage: TokenStorageService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.error = false;
    this.userService.updateUser(this.model.id,this.model).subscribe(
      (data) => {
        this.model = data;
        this.tokenStorage.saveUser(data);
        location.replace('/accounts');
      },
      () => {
        this.error = true;
      }
    );
  }

  delete(id: number) {
    if (window.confirm('Are you sure you want to delete your account?')) {
      this.userService.delete(id).subscribe(
        () => {
          window.sessionStorage.clear();
          location.replace('/login');
        },
        () => {
          window.alert(
            'You are creator of some gyms. You need first delete them!'
          );
          this.error = true;
        }
      );
    }
  }

}
