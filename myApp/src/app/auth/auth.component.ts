import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  authForm: FormGroup
  constructor(private fb: FormBuilder) {
    this.authForm = this.fb.group({
      'username': ['', Validators.required],
      'email': ['', Validators.required],
      'phone': ['', Validators.required],
      'password': ['', Validators.required]
    })
   }

  ngOnInit() {
  }
  authUser() {
    console.log(this.authForm.value);
  }
}
