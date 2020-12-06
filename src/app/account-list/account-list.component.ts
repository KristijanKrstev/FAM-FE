import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Account } from '../models/account';

@Component({
  selector: 'account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  @Input() accounts: Account[] | undefined;

  ngOnInit(): void {
  }

}
