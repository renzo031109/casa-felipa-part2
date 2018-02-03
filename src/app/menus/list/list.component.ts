import { Component, OnInit } from '@angular/core';

import { GalleryImages } from '../models/galleryImages';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

import { MatSnackBar } from '@angular/material';
import { AngularFireList } from 'angularfire2/database/interfaces';
import { Listing } from '../models/listing';
import { UploadService } from '../service/upload.service';

import { ViewComponent } from '../../menus/view/view.component';

import { Router } from '@angular/router';

import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

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

  deleteMenu(event, item: Listing){
    // this.clearState()
    this.uploadService.deleteItem(item);
  }

  // viewImage() {
  //   this.router.navigateByUrl('view');
  // }

  openView(event, item: Listing) {
    this.view.open(ViewComponent);
    console.log(item);
  }

}
