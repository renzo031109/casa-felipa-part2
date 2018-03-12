import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    this.router.navigateByUrl('menus');
    console.log(value)
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // sendMessage() {

  // }

}