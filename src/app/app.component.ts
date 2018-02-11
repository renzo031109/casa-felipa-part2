import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { UploadService } from './menus/service/upload.service';

import { AddMenuDialogComponent } from './menus/add-menu-dialog/add-menu-dialog.component';
import { LoginComponent } from './login/login.component';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';

import { AuthenticationService } from './menus/service/authentication.service';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { ListComponent } from 'app/menus/list/list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: Observable<firebase.User>;

  links = [
    { name: 'Menus', path: 'menus' },
    { name: 'Registration', path: 'registration' }
  ];

  constructor(private dialog: MatDialog,
              private uploadService: UploadService,
              private authenticationService: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
    this.user = this.authenticationService.authUser();
  }

  openAddMenuDialog() {
    this.dialog.open(AddMenuDialogComponent);

  }

  openUserLogin() {
    this.dialog.open(LoginComponent);
  }

  logOut() {
    this.authenticationService.logout().then(onResolve => this.router.navigate['/']);

  }

}
