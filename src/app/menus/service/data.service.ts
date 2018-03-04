import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import * as firebase from 'firebase';
import { Listing } from '../models/listing';
import 'firebase/storage';
import { Observable } from 'rxjs/Observable';

import { MatSnackBar } from '@angular/material';

@Injectable()
export class DataService {

  itemsCollection: AngularFirestoreCollection<Listing>;
  items: Observable<Listing[]>;
  itemDoc: AngularFirestoreDocument<Listing>;

  private basePath = 'menus';

  constructor(private afs: AngularFirestore,
    private snackBar: MatSnackBar) {

    this.itemsCollection = this.afs.collection('menus', ref => ref.orderBy('menuName', 'asc'));

    this.items = this.itemsCollection.snapshotChanges().map(changes => {
      return changes.map(datas => {
        const data = datas.payload.doc.data() as Listing;
        data.id = datas.payload.doc.id;
        return data;
      });
    });
  }

  getItems() {
    return this.items;
  }

  deleteItem(item: Listing, imgName: string) {

    this.itemDoc = this.afs.doc(`/${this.basePath}/${item}`);
    this.itemDoc.delete();

    // Points to the root reference
    let storageRef = firebase.storage().ref();
    // Points to 'images'
    let imagesRef = storageRef.child(`/${this.basePath}/${imgName}`);
    // console.log("success",imagesRef);
    // Delete the file
    imagesRef.delete().then(function () {
      // console.log("success", imagesRef);
    }).catch(function (error) {
      // Uh-oh, an error occurred!
    });

    this.openSnackBarDel()
  }

  openSnackBarDel() {
    this.snackBar.open('Menu deleted successfully', 'CLOSE', {
      panelClass: ['snack-bar-color'],
      duration: 4000
    });
  }



}
