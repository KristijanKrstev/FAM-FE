import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from '../models/transaction';

@Component({
  selector: 'transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  
  @Input() transactions: Transaction[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
