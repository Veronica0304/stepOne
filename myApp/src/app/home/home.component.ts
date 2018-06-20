import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  testForm: FormGroup
  constructor(
    private fb: FormBuilder
  ) {

    this.testForm = this.fb.group({
      'username' : ['', Validators.required],
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    })

  }

  ngOnInit() {
  }
  submitForm() {
    const credentials = this.testForm.value;
    // tslint:disable-next-line:forin
    for (const key in credentials) {
      console.log(credentials[key]);
    }
  }

}
