import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  authForm: FormGroup
  authType: String = ''
  constructor(private fb: FormBuilder, private route: ActivatedRoute) {
    this.authForm = this.fb.group({
      'username': ['', Validators.required],
      'email': ['', Validators.required],
      'phone': ['', Validators.required],
      'password': ['', Validators.required]
    })
  }

  ngOnInit() {
    this.route.url.subscribe(data => {
      this.authType = data[data.length - 1].path
    })
  }
  authUser() {
    console.log(this.authForm.value);
  }
}
