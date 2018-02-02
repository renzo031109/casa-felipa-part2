import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';

import { UploadService } from './menus/service/upload.service';

import { AddMenuDialogComponent } from './menus/add-menu-dialog/add-menu-dialog.component';
import { LoginComponent } from './login/login.component';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  links = [
    { name: 'Menus', path: 'menus' },
    { name: 'Registration', path: 'registration' }
  ];

  constructor(private dialog: MatDialog,
    private uploadService: UploadService
  ) { }

  openAddMenuDialog() {
    this.dialog.open(AddMenuDialogComponent)

  }

  openUserLogin() {
    this.dialog.open(LoginComponent)
  }



}
