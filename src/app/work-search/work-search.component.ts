import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Work } from '../models/work';
import { WorkService } from '../services/work.service';

@Component({
  selector: 'work-search',
  templateUrl: './work-search.component.html',
  styleUrls: ['./work-search.component.css']
})
export class WorkSearchComponent implements OnInit {

  constructor(
    private workService: WorkService
  ) { }

  works$: Observable<Work[]> | undefined;
  private searchTerm = new BehaviorSubject<string>('');

  ngOnInit(): void {
    this.works$ = this.searchTerm.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.workService.getWorksByName(term))
    );
  }

  search(term: string): void {
    this.searchTerm.next(term);
  }

}
