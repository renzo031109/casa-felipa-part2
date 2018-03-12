import { Component, OnInit, EventEmitter } from '@angular/core';

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
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  sortedPrice:string;
  showSpinner: boolean = true;

  user: Observable<firebase.User>;
  menuView: string;
  items: Listing[];
  $sortPrice:string;

  categories = [
    'All',    
    'ALA-CARTE',
    'APPETIZER',
    'BBQ',
    'DRINKS',
    'EXTRAS',
    'SILOG'
  ];

  prices = [
    'Low to High',
    'High to Low'
  ];

  text = "&nbsp;&nbsp";

  selectedCategory: string = this.categories[0];

  constructor(private dataService: DataService,
    private dataFilterService: DataFilterService,
    private snackBar: MatSnackBar,
    private router: Router,
    private view: MatDialog,
    private authenticationService: AuthenticationService) { }



  ngOnInit() {
    this.getView();
    this.user = this.authenticationService.authUser();
  }

    // Select filter data in data service
    categoryChange(selectedCategory) {
      this.dataFilterService.categoryChange(selectedCategory);
    }

    sortedPriceEvent(sortedPrice) {
      if(sortedPrice === 'Low to High') {
        this.$sortPrice = 'asc';
    } else {
        this.$sortPrice = 'dsc'
    }
      this.dataFilterService.sortedPriceEvent(this.$sortPrice);
    }    


  getView() {
    this.dataFilterService.getItems().subscribe(items => this.items = items);    
    this.dataService.getItems().subscribe(() => this.showSpinner = false);
  }

  // deleteMenu(event, item: Listing) {
  //   this.dataService.deleteItem(item);
  // }

  openView(event, item: Listing) {
    let menuView = this.view.open(ViewComponent);
    menuView.componentInstance.menuImage = item.image;
    menuView.componentInstance.menuName = item.menuName;
    menuView.componentInstance.menuPrice = item.price;
    menuView.componentInstance.menuPromos = item.promos;
  }

}
