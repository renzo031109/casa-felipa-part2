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

  constructor(private afs: AngularFirestore,
    private snackBar: MatSnackBar) {

    this.selectedGroup = new BehaviorSubject(null);

    this.items = Observable.combineLatest(
      this.selectedGroup
    ).switchMap(([selected]) =>
      afs.collection('menus', ref => {
        let query: firebase.firestore.Query = ref;
        //when user select category aside from all
        if (selected !== 'All') { query = query.where('group', '==', selected) }
        //when user select all
        else { query.orderBy('menuName', 'asc'); }
        return query;
      }).valueChanges()
    );

    // if (this.category === 'All') {

    // this.itemsCollection = this.afs.collection('menus', ref => ref.orderBy('menuName', 'asc'));

    // } else {

    //   this.itemsCollection = this.afs.collection('menus', ref => ref.where('group', '==', `${this.category}`));
    // }

    // this.items = this.itemsCollection.snapshotChanges().map(changes => {
    //   return changes.map(datas => {
    //     const data = datas.payload.doc.data() as Listing;
    //     data.id = datas.payload.doc.id;
    //     return data;
    //   });
    // });
    // console.log(this.category);

  }


  categoryChange(selected: string | null) {
    this.selectedGroup.next(selected);
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
