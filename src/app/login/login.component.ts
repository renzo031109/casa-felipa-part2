import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatFormField } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthenticationService } from 'app/menus/service/authentication.service';
import { Router } from '@angular/router';
import { ListComponent } from '../menus/list/list.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  errorMsg: string;

  constructor(public userLogin: MatDialogRef<LoginComponent>,
              private authenticationService: AuthenticationService,
              private router: Router,
              private listComponent: ListComponent) { }

  ngOnInit() {
  }

  signIn(Loginform) {
      
    this.authenticationService.login({email: this.email, password: this.password})
      .then( (success) => {
        this.router.navigate(['menus']);
        // let menuView = this.listComponent;
        // menuView.hide = false;        
      })
      .catch(error => this.errorMsg = error.message);
     
  }

}
