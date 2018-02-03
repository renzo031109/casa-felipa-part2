import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatFormField } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userLogin: MatDialogRef<LoginComponent>) { }

  ngOnInit() {
  }

}
