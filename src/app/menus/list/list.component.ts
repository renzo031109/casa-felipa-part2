import { Component } from '@angular/core';
import { Menus } from '../Menus';
import { MenuStoreService } from '../menus-store.service';


import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {



  // menusList: Menus[] = [];
  // spinnerVisibility = 'block';

  // constructor(private menuStoreService: MenuStoreService,
  //             private snackBar: MatSnackBar) { }

  // ngOnInit() {
  //   this.getMenus();
  // }

  // getMenus() {
  //   this.menuStoreService
  //     .getMenus()
  //     .subscribe(response => {
  //       this.menusList = response;
  //       this.spinnerVisibility = 'none';
  //     });
  // }

  // openSnackBar() {
  //   this.snackBar.open('Menu Deleted', 'CLOSE', {
  //     duration: 1000
  //   });
  // }

  // deniedSnackBar() {
  //   this.snackBar.open('Failed to connect to server', 'CLOSE', {
  //     duration: 1000
  //   });
  // }


  // deleteMenu(id: number) {
  //   this.menusList = this.menusList.filter(menu => menu.id !== id);
  //   this.menuStoreService.deleteMenu(id)
  //     .subscribe(result => {
  //       if (result.ok) {
  //         this.openSnackBar();
  //       } else {
  //         this.deniedSnackBar();
  //       }
  //       this.getMenus();
  //     });
  // }


}
