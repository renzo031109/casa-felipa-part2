import { Component } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { MenuStoreService } from './menus';
import { AddMenuDialogComponent } from './menus/add-menu-dialog/add-menu-dialog.component';

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
              private menuStoreService: MenuStoreService){}

      openAddMenuDialog() {
      this.dialog.open(AddMenuDialogComponent)
        .afterClosed()
        .filter(menu => !!menu)
        .switchMap(menu => this.menuStoreService.addMenu(menu))
        .subscribe(result => {
          if (result.ok) {
            this.openSnackBar();
          }
        });
    }

    openSnackBar() {
      this.snackBar.open('Menu Added', 'CLOSE', {
        duration: 1000
      });
    }

}
