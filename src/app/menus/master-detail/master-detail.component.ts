import { Component, OnInit, OnChanges } from '@angular/core';
import { Listing } from '../models/listing';

import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList } from 'angularfire2/database/interfaces';

import { UploadService } from '../service/upload.service';
import { DataService } from '../service/data.service';

import { ViewComponent } from '../../menus/view/view.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-master-detail',
  templateUrl: './master-detail.component.html',
  styleUrls: ['./master-detail.component.scss']
})
export class MasterDetailComponent implements OnInit {
  menuView: string;

  items: Listing[] = [];
  selectedMenu: Listing;  
 
  constructor(private dataService: DataService,
    private view: MatDialog) {
      this.getView();
     }

  ngOnInit() {    
  }

  ngOnChanges() {
    this.getView();
  }

  getView() {
    this.dataService.getItems().subscribe(items => this.items = items);
  }

  openView(event, selectedItem: Listing) {
    let menuView = this.view.open(ViewComponent);
    menuView.componentInstance.menuImage = selectedItem.image;
    menuView.componentInstance.menuName = selectedItem.menuName;
    menuView.componentInstance.menuPrice = selectedItem.price;
    console.log(selectedItem);
  }

}
