import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  FormData: FormGroup;

  constructor(
    private builder: FormBuilder,
    private contact: ContactService,
    private router: Router
  ) {}

  ngOnInit() {
    this.FormData = this.builder.group({
      fullName: new FormControl('', [Validators.required]),
      email: new FormControl('', [
        Validators.compose([Validators.required, Validators.email]),
      ]),
      comment: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(FormData) {
    this.contact.PostMessage(FormData).subscribe(
      () => {
        window.alert('The email was sent successfully');
        this.router.navigate(['/home']);
      },
      () => {
        window.alert('Error. Please try again');
      }
    );
  }
}
