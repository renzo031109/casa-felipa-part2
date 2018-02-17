import { Injectable, EventEmitter } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import * as firebase from 'firebase';
import { Listing } from '../models/listing';
import 'firebase/storage';
import { Observable } from 'rxjs/Observable';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/combineLatest';

import { MatSnackBar } from '@angular/material';

@Injectable()
export class DataFilterService {

  itemsCollection: AngularFirestoreCollection<Listing>;
  items: Observable<Listing[]>;
  itemDoc: AngularFirestoreDocument<Listing>;

  private basePath = 'menus';
  selectedGroup: BehaviorSubject<string | null>;
  sortedPricing: BehaviorSubject<string | null>;

  $sortPrice:string;

  constructor(private afs: AngularFirestore,
    private snackBar: MatSnackBar) {

    this.selectedGroup = new BehaviorSubject('All');
    this.sortedPricing = new BehaviorSubject('asc');

    this.items = Observable.combineLatest(
      this.selectedGroup
    ).switchMap(([selected]) =>
      afs.collection('menus', ref => {
        let query: firebase.firestore.Query = ref;
        //when user select category aside from all
        if (selected !== 'All') { query = query.where('group', '==', selected)}
        //when user select all
        else { query.orderBy('menuName', 'asc'); }
        return query;
      }).valueChanges()
    );

  }

  // filter on category
  categoryChange(selected: string | null) {
    this.selectedGroup.next(selected);
  }

  // sort price high and low
  sortedPriceEvent(sortedPrice: string | null) {
    
    if(sortedPrice === 'Low to High') {
        this.$sortPrice = 'asc';
    } else {
        this.$sortPrice = 'dsc'
    }
    this.sortedPricing.next(this.$sortPrice);
    console.log(this.$sortPrice);
  }

  getItems() {
    return this.items;
  }

  deleteItem(item: Listing) {
    this.itemDoc = this.afs.doc(`/${this.basePath}/${item}`);
    this.itemDoc.delete();
    this.openSnackBarDel()
  }

  openSnackBarDel() {
    this.snackBar.open('Menu deleted successfully', 'CLOSE', {
      panelClass: ['snack-bar-color'],
      duration: 4000
    });
  }



}
