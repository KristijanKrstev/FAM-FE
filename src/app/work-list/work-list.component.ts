import { Component, Input, OnInit } from '@angular/core';
import { Work } from '../models/work';

@Component({
  selector: 'work-list',
  templateUrl: './work-list.component.html',
  styleUrls: ['./work-list.component.css']
})
export class WorkListComponent implements OnInit {
  
  @Input() works: Work[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
