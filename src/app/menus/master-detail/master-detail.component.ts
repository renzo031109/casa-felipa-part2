import { Component, OnInit } from '@angular/core';
import { Listing } from '../models/listing';

import { GalleryImages } from '../models/galleryImages';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList } from 'angularfire2/database/interfaces';

import { UploadService } from '../service/upload.service';

@Component({
  selector: 'app-master-detail',
  templateUrl: './master-detail.component.html',
  styleUrls: ['./master-detail.component.scss']
})
export class MasterDetailComponent implements OnInit {

  items: Listing[] = [];
  selectedMenu: Listing;

  constructor(private uploadService: UploadService) { }

  ngOnInit() {
    this.getView();
  }

  getView() {
    this.uploadService.getItems().subscribe(items => this.items = items);
  }

  // menusList: Menus[] = [];
  // selectedMenu: Menus;

  // constructor(private menuStoreService: MenuStoreService) {
  // }

  // ngOnInit() {
  //   // this.menuStoreService
  //   //   .getMenus()
  //   //   .subscribe(response => this.menusList = response);
  // }

  ////
  // menusList: AngularFireList<GalleryImages[]>;

  // constructor(private listingService: ListingsService) { }
 
  // ngOnInit() {
  //   this.getMenus();
  //   console.log(this.menusList);
  // }

  // getMenus() {
  //   this.menusList = this.listingService.getImages();      
  // }


}
