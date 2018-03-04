import { Component, OnInit, OnChanges} from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

import { MatSnackBar } from '@angular/material';
import { AngularFireList } from 'angularfire2/database/interfaces';
import { Listing } from '../models/listing';

import { UploadService } from '../service/upload.service';
import { AuthenticationService } from '../service/authentication.service';
import { DataService } from '../service/data.service';
import { DataFilterService } from '../service/data-filter.service';

import { ViewComponent } from '../../menus/view/view.component';
import { MatDialog } from '@angular/material';

import { Router } from '@angular/router';


@Component({
  selector: 'app-master-file-list',
  templateUrl: './master-file-list.component.html',
  styleUrls: ['./master-file-list.component.scss']
})
export class MasterFileListComponent implements OnInit{


  user: Observable<firebase.User>;

  menuView: string;

  items: Listing[];

  categories = [
    'All',
    'Appetizer',
    'Drinks',
    'Silog',
    'Soup'
];

selectedCategory: string = this.categories[0];

  constructor(private dataService: DataService,
              private dataFilterService: DataFilterService,
              private snackBar: MatSnackBar,
              private router: Router,
              private view: MatDialog,
              private authenticationService: AuthenticationService) { }

// Select filter data in data service
    categoryChange(selectedCategory) {

    this.dataFilterService.categoryChange(selectedCategory);

  }

  ngOnInit() {  
    this.user = this.authenticationService.authUser();
    this.getView();
  }

  getView() {
    this.dataService.getItems().subscribe(items => this.items = items);
  }

  deleteMenu(event, item: Listing, imgName) {
    this.dataService.deleteItem(item, imgName);
    // console.log("menu name is :", imgName);
  }

  openView(event, item: Listing) {
    let menuView = this.view.open(ViewComponent);
    menuView.componentInstance.menuImage = item.image;
    menuView.componentInstance.menuName = item.menuName;
    menuView.componentInstance.menuPrice = item.price;
  }

}
