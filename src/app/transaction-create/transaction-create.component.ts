import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transaction } from '../models/transaction';
import { AccountService } from '../services/account.service';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'transaction-create',
  templateUrl: './transaction-create.component.html',
  styleUrls: ['./transaction-create.component.css']
})
export class TransactionCreateComponent implements OnInit {


  errors = false;
  transaction = {} as Transaction;
  allAccounts = [];

  constructor(private transactionService: TransactionService, private router: Router, private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.getAllAccounts().subscribe(
      (data) => {
        this.allAccounts = data;
      }
    );
  }

  onSubmit() {
    this.transactionService.createTransaction(this.transaction).subscribe(
      () => {
        this.router.navigate(['/transactions']);
      },
      () => {
        this.errors = true;
      }
    );
  }

}