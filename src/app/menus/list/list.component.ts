import { Component, OnInit } from '@angular/core';

import { GalleryImages } from '../models/galleryImages';
import { ListingsService } from '../service/listings.service';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

import { MatSnackBar } from '@angular/material';
import { AngularFireList } from 'angularfire2/database/interfaces';
import { Listing } from '../models/listing';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  items: Listing[];

  // // menusList: Menus[] = [];
  // // spinnerVisibility = 'block';
  constructor(private uploadService: UploadService,
              private snackBar: MatSnackBar) { }
  // // ngOnInit() {
  // //   this.getMenus();
  // // }
  // // getMenus() {
  // //   this.menuStoreService
  // //     .getMenus()
  // //     .subscribe(response => {
  // //       this.menusList = response;
  // //       this.spinnerVisibility = 'none';
  // //     });
  // // }
  // // openSnackBar() {
  // //   this.snackBar.open('Menu Deleted', 'CLOSE', {
  // //     duration: 1000
  // //   });
  // // }
  // // deniedSnackBar() {
  // //   this.snackBar.open('Failed to connect to server', 'CLOSE', {
  // //     duration: 1000
  // //   });
  // // }
  // constructor(private listingService: ListingsService) { }

  ngOnInit() {
    this.uploadService.getItems().subscribe(items => this.items = items);
    // console.log(this.items);
  }

  // getMenus() {
  //   this.listingService.getMenus().subscribe(menus => this.menusList = menus);
  // }

  // // deleteMenu(id: number) {
  // //   this.menusList = this.menusList.filter(menu => menu.id !== id);
  // //   this.menuStoreService.deleteMenu(id)
  // //     .subscribe(result => {
  // //       if (result.ok) {
  // //         this.openSnackBar();
  // //       } else {
  // //         this.deniedSnackBar();
  // //       }
  // //       this.getMenus();
  // //     });
  // // }
  // deleteMenu(event, menu: GalleryImages){
  //   // this.clearState()
  //   this.listingService.deleteItem(menu);
  // }

}
