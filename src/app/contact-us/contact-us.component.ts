import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  email:string;

  genders: Array<string> = [
    'male',
    'Female',
    'Other'
  ];

  submitUserForm(value: Object) {
    console.log(value)
  }

  constructor() { }

  ngOnInit() {
  }

}