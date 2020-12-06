import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Work } from '../models/work';
import { WorkService } from '../services/work.service';

@Component({
  selector: 'work-edit',
  templateUrl: './work-edit.component.html',
  styleUrls: ['./work-edit.component.css']
})
export class WorkEditComponent implements OnInit {
  
  errors = false;
  work = {} as Work;

  constructor(
    private workService: WorkService,
    private router: ActivatedRoute,
    private routerLink: Router,
    private location: Location
  ) { }

  
  id = this.router.paramMap.pipe(map((paramMap) => paramMap.get('id')!));

  ngOnInit(): void {
    this.id.pipe(switchMap((id) => this.workService.getWorks(+id))).subscribe(
      (data) => {
        this.work = data;
      },
      (error) => {
        console.log('Error subs ', error);
      }
    );
  }

  onSubmit() {
    this.workService.updateWork(this.work.id, this.work).subscribe(
      () => {
        this.routerLink.navigate(['/works']);
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
    if (window.confirm('Are you sure you want to delete this works?')) {
      this.workService.delete(id).subscribe();
      this.routerLink.navigate(['/works']);
    }
  }

}
