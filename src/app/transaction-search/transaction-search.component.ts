import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Transaction } from '../models/transaction';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'transaction-search',
  templateUrl: './transaction-search.component.html',
  styleUrls: ['./transaction-search.component.css']
})
export class TransactionSearchComponent implements OnInit {

  constructor(private transactionService: TransactionService) { }

  transactions$: Observable<Transaction[]> | undefined;
  private searchTerm = new BehaviorSubject<string>('');
  
  ngOnInit(): void {
    this.transactions$ = this.searchTerm.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.transactionService.getTransactionsByName(term))
    );
  }

  search(term: string): void {
    this.searchTerm.next(term);
  }

}
