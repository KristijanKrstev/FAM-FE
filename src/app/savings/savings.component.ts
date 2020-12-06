import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Saving } from '../models/savings';
import { SavingService } from '../services/saving.service';

@Component({
  selector: 'savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.css']
})
export class SavingsComponent implements OnInit {

  
  errors = false;
  saving = {} as Saving;

  constructor(private savingService: SavingService, private router: Router) { }

  ngOnInit(): void {
    this.savingService.getAllSavings().subscribe(
      (data) => { 
        if(data[0]!=null){
          this.saving = data[0];
        }
      }
    )
  }

  onSubmit() {
    this.savingService.createSaving(this.saving).subscribe(
      () => {
        this.router.navigate(['/savingsEdit']);
      },
      () => {
        this.errors = true;
      }
    );
  }

}
