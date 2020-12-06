import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Account } from '../models/account';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'account-search',
  templateUrl: './account-search.component.html',
  styleUrls: ['./account-search.component.css']
})
export class AccountSearchComponent implements OnInit {

  constructor(
    private accountService: AccountService,
  ) { }
  
  accounts$: Observable<Account[]> | undefined;
  private searchTerm = new BehaviorSubject<string>('');

  ngOnInit(): void {
    this.accounts$ = this.searchTerm.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.accountService.getAccountsByName(term))
    );
  }

  search(term: string): void {
    this.searchTerm.next(term);
  }

}
