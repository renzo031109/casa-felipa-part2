import { Component, OnInit } from '@angular/core';

import { GalleryImages } from '../models/galleryImages';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

import { MatSnackBar } from '@angular/material';
import { AngularFireList } from 'angularfire2/database/interfaces';
import { Listing } from '../models/listing';
import { UploadService } from '../service/upload.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  items: Listing[];

  constructor(private uploadService: UploadService,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getView();
  }

  getView() {
    this.uploadService.getItems().subscribe(items => this.items = items);
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


  deleteMenu(event, item: Listing){
    // this.clearState()
    this.uploadService.deleteItem(item);
  }
}
