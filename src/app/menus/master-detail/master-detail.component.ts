import { Component, OnInit, OnChanges } from '@angular/core';
import { Listing } from '../models/listing';

import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList } from 'angularfire2/database/interfaces';

import { UploadService } from '../service/upload.service';
import { DataService } from '../service/data.service';

import { ViewComponent } from '../../menus/view/view.component';
import { MatDialog } from '@angular/material';
import { MatSidenav } from "@angular/material";

@Component({
  selector: 'app-master-detail',
  templateUrl: './master-detail.component.html',
  styleUrls: ['./master-detail.component.scss']
})
export class MasterDetailComponent implements OnInit {

  menuView: string;
  showSpinner: boolean = true;
  
  items: Listing[] = [];
  selectedMenu: Listing;  
 
  constructor(private dataService: DataService,
    private view: MatDialog) {
      this.getView();
     }

  ngOnInit() {    
    this.getView();
  }

  ngOnChanges() {
    this.getView();
  }

  getView() {
    this.dataService.getItems().subscribe(items => this.items = items);
    this.dataService.getItems().subscribe(() => this.showSpinner = false);
  }

  openView(event, selectedItem: Listing) {
    let menuView = this.view.open(ViewComponent);
    menuView.componentInstance.menuImage = selectedItem.image;
    menuView.componentInstance.menuName = selectedItem.menuName;
    menuView.componentInstance.menuPrice = selectedItem.price;
    menuView.componentInstance.menuPromos = selectedItem.promos;
    console.log(selectedItem);
  }

}
