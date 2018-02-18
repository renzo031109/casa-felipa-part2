import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {
  countries: Array<object> = [
    {code: 'PH', name: 'Philippines'},
    {code: 'CA', name: 'Canada'},
    {code: 'SW', name: 'Switzerland'},
    {code: 'IN', name: 'India'},
    {code: 'UK', name: 'United Kingdom'},
    {code: 'US', name: 'Canada'}
  ];

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
