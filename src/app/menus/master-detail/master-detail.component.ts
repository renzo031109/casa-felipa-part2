import { Component, OnInit } from '@angular/core';
// import { Menus } from '../menus';
// import { MenuStoreService } from '../menus-store.service';

import { GalleryImages } from '../models/galleryImages';
import { ListingsService } from '../service/listings.service';
// import { UploadService } from '../upload.service';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList } from 'angularfire2/database/interfaces';

@Component({
  selector: 'app-master-detail',
  templateUrl: './master-detail.component.html',
  styleUrls: ['./master-detail.component.scss']
})
export class MasterDetailComponent implements OnInit {

  // menusList: Menus[] = [];
  // selectedMenu: Menus;

  // constructor(private menuStoreService: MenuStoreService) {
  // }

  // ngOnInit() {
  //   this.menuStoreService
  //     .getMenus()
  //     .subscribe(response => this.menusList = response);
  // }

  menusList: AngularFireList<GalleryImages[]>;

  constructor(private listingService: ListingsService) { }
 
  ngOnInit() {
    this.getMenus();
    console.log(this.menusList);
  }

  getMenus() {
    this.menusList = this.listingService.getImages();      
  }


}
