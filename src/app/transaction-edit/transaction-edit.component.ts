import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Transaction } from '../models/transaction';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'transaction-edit',
  templateUrl: './transaction-edit.component.html',
  styleUrls: ['./transaction-edit.component.css']
})
export class TransactionEditComponent implements OnInit {

  errors = false;
  transaction = {} as Transaction;

  constructor(
    private transactionService: TransactionService,
    private router: ActivatedRoute,
    private routerLink: Router,
    private location: Location) { }



  id = this.router.paramMap.pipe(map((paramMap) => paramMap.get('id')!));

  ngOnInit(): void {
    this.id.pipe(switchMap((id) => this.transactionService.getTransactions(+id))).subscribe(
      (data) => {
        this.transaction = data;
      },
      (error) => {
        console.log('Error subs ', error);
      }
    );
  }

  onSubmit() {
    this.transactionService.updateTransaction(this.transaction.id, this.transaction).subscribe(
      () => {
        this.routerLink.navigate(['/transactions']);
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
    if (window.confirm('Are you sure you want to delete this transaction?')) {
      this.transactionService.delete(id).subscribe(
        () => {
          this.routerLink.navigate(['/transactions']);
        }
      );
    }
  }
}