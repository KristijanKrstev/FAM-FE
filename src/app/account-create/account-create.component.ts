import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../models/account';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.css']
})
export class AccountCreateComponent implements OnInit {

  errors = false;
  account = {} as Account;

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.accountService.createAccount(this.account).subscribe(
      () => {
        this.router.navigate(['/accounts']);
      },
      () => {
        this.errors = true;
      }
    );
  }

}
