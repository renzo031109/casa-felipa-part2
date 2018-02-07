import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

import { MatSnackBar } from '@angular/material';
import { AngularFireList } from 'angularfire2/database/interfaces';
import { Listing } from '../models/listing';

import { UploadService } from '../service/upload.service';
import { AuthenticationService } from '../service/authentication.service';

import { ViewComponent } from '../../menus/view/view.component';
import { MatDialog } from '@angular/material';

import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  user: Observable<firebase.User>;
  // hide: boolean;
  menuView: string;

  items: Listing[];

  constructor(private uploadService: UploadService,
              private snackBar: MatSnackBar,
              private router: Router,
              private view: MatDialog,
              private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.getView();
    this.user = this.authenticationService.authUser();
  }

  getView() {
    this.uploadService.getItems().subscribe(items => this.items = items);
  }

  deleteMenu(event, item: Listing) {
    this.uploadService.deleteItem(item);
  }


  openView(event, item: Listing) {
    let menuView = this.view.open(ViewComponent);
    menuView.componentInstance.menuImage = item.image;
    menuView.componentInstance.menuName = item.menuName;
    menuView.componentInstance.menuPrice = item.price;
  }

}
