import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductInterface } from './home'
import { element } from 'protractor';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  product: any = []
  constructor() {
  }

  ngOnInit() {
    const newArray = []
    for (let i = 0; i <= 5; i++) {
      const obj = {
        id: i,
        name: 'Neha' + i
      }
      newArray.push(obj)
    }
    newArray.forEach((element, index) => {
      if (index === 2) {
        // tslint:disable-next-line:prefer-const
        let person;
        // ----- Case 1 -------
        // person = Object.create(element); // Neha , Deepa
        // ----- Case 2 -------
        // person = element // Deepa , Deepa
        // ----- Case 3 -------
         person =  new Object(); // Neha , Deepa
        // ----- Case 4 -------
         Object.assign(person, element) // Neha, Deepa // Use in conjugation with : person =  new Object()
         person.name = 'Deepa'
        console.log(element.name)
        console.log(person.name)
      }
    });

  }

}
