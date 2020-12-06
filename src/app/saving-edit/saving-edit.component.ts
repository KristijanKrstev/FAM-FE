import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Saving } from '../models/savings';
import { SavingService } from '../services/saving.service';

@Component({
  selector: 'app-saving-edit',
  templateUrl: './saving-edit.component.html',
  styleUrls: ['./saving-edit.component.css']
})
export class SavingEditComponent implements OnInit {
  
  errors = false;
  saving = {} as Saving;

  constructor(private savingService: SavingService, private router: Router) { }

  ngOnInit(): void {
    this.savingService.getAllSavings().subscribe(
      (data) => { 
        if(data[0]!=null){
          this.saving = data[0];
        }
        else{
          this.saving.id=-1;
        }
      }
    )
  }
  getIntBalance() {
    this.savingService.getInitialBalance(this.saving.id).subscribe(
      () => {
        location.replace('/savingsEdit');
      },
      () => {
        this.errors = true;
      }
    );
  }
  delete(id: number): void {
    if (window.confirm('Are you sure you want to delete this saving?')) {
      this.savingService.delete(id).subscribe(
        () => {
          this.router.navigate(['/savings']);
        }
      );
    }
  }

}
