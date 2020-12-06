import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '../models/account';
import { AccountService } from '../services/account.service';
import { map, switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.css']
})
export class AccountEditComponent implements OnInit {

  errors = false;
  account = {} as Account;

  constructor(
    private accountService: AccountService,
    private router: ActivatedRoute,
    private routerLink: Router,
    private location: Location
  ) { }

  id = this.router.paramMap.pipe(map((paramMap) => paramMap.get('id')!));

  ngOnInit(): void {
    this.id.pipe(switchMap((id) => this.accountService.getAccount(+id))).subscribe(
      (data) => {
        this.account = data;
      },
      (error) => {
        console.log('Error subs ', error);
      }
    );
  }

  onSubmit() {
    this.accountService.updateAccount(this.account.id, this.account).subscribe(
      () => {
        this.routerLink.navigate(['/accounts']);
      },
      () => {
        this.errors = true;
      }
    );
  }

  goBack(): void {
    this.location.back();
  }

  delete(id: number): void {
    if (window.confirm('Are you sure you want to delete this account?')) {
      this.accountService.delete(id).subscribe(
        () => {
          this.routerLink.navigate(['/accounts']);
        }
      );
    }
  }

}
