import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import * as firebase from 'firebase';
import { Listing } from '../models/listing';
import 'firebase/storage';
import { Observable } from 'rxjs/Observable';

import { MatSnackBar } from '@angular/material';

@Injectable()
export class DataFilterService {

  itemsCollection: AngularFirestoreCollection<Listing>;
  items: Observable<Listing[]>;
  itemDoc: AngularFirestoreDocument<Listing>;

  private basePath = 'menus';
  private category: string = 'All';

  constructor(private afs: AngularFirestore,
    private snackBar: MatSnackBar) {

      if (this.category === 'All') {

      this.itemsCollection = this.afs.collection('menus', ref => ref.orderBy('menuName', 'asc'));

      } else {

        this.itemsCollection = this.afs.collection('menus', ref => ref.where('group', '==', `${this.category}`));
      }

      this.items = this.itemsCollection.snapshotChanges().map(changes => {
        return changes.map(datas => {
          const data = datas.payload.doc.data() as Listing;
          data.id = datas.payload.doc.id;
          return data;
        });
      });
      console.log(this.category);
  }

  categoryChange(selectedCategory) {
    this.category = selectedCategory;
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
