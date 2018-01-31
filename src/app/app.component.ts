import { Component } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { AddMenuDialogComponent } from './menus/add-menu-dialog/add-menu-dialog.component';
import { UploadService } from './menus/service/upload.service';

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
              private snackBar: MatSnackBar,
              private uploadService: UploadService
              ){}

      openAddMenuDialog() {
      this.dialog.open(AddMenuDialogComponent)
        // .afterClosed()
        // .filter(menu => !!menu)
        // .switchMap(menu => this.uploadService.addListing(listing))
        // .subscribe(result => {
        //   if (result.ok) {
        //     this.openSnackBar();
        //   }
        // });
    }

    openSnackBar() {
      this.snackBar.open('Menu Added', 'CLOSE', {
        duration: 1000
      });
    }

}
