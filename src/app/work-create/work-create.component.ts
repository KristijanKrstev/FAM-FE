import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Work } from '../models/work';
import { WorkService } from '../services/work.service';

@Component({
  selector: 'work-create',
  templateUrl: './work-create.component.html',
  styleUrls: ['./work-create.component.css']
})
export class WorkCreateComponent implements OnInit {
  
  errors = false;
  work = {} as Work;

  constructor(private workService: WorkService, private router: Router) { }

  ngOnInit(): void {
  }
  
  onSubmit() {
    this.workService.createWork(this.work).subscribe(
      () => {
        this.router.navigate(['/works']);
      },
      () => {
        this.errors = true;
      }
    );
  }

}
