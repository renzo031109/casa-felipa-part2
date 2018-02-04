import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { GalleryImages } from '../models/galleryImages';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

import { MatSnackBar } from '@angular/material';
import { AngularFireList } from 'angularfire2/database/interfaces';
import { Listing } from '../models/listing';
import { UploadService } from '../service/upload.service';

import { ViewComponent } from '../../menus/view/view.component';
import { MatDialog } from '@angular/material';

import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  menuView: string;

  items: Listing[];

  constructor(private uploadService: UploadService,
    private snackBar: MatSnackBar,
    private router: Router,
    private view: MatDialog) { }

  ngOnInit() {
    this.getView();
  }

  getView() {
    this.uploadService.getItems().subscribe(items => this.items = items);
  }

  deleteMenu(event, item: Listing) {
    this.uploadService.deleteItem(item);
  }


  openView(event, item: Listing) {

    let menuView = this.view.open(ViewComponent, {
      disableClose: true,
    })
    menuView.componentInstance.menuImage = item.image;
    menuView.componentInstance.menuName = item.menuName;
    menuView.componentInstance.menuPrice = item.price;

  }

}
