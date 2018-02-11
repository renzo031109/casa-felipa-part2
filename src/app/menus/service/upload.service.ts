import { Injectable } from '@angular/core';
// import { AngularFireList, AngularFireObject } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import * as firebase from 'firebase';
import { Listing } from '../models/listing';
import 'firebase/storage';
import { Observable } from 'rxjs/Observable';

import { MatSnackBar } from '@angular/material';

@Injectable()
export class UploadService {

  itemsCollection: AngularFirestoreCollection<Listing>;

  private basePath = 'menus';

  constructor(private afs: AngularFirestore,
    private snackBar: MatSnackBar) {

    this.itemsCollection = this.afs.collection('menus', ref => ref.orderBy('menuName', 'asc'));

  }

  addListing(listing) {
    let storageRef = firebase.storage().ref();
    for (let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]) {
      let path = `/${this.basePath}/${selectedFile.name}`;
      let uploadTask = storageRef.child(path).put(selectedFile);

      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        // three observers
        // 1.) state_changed observer
        (snapshot) => {
          // upload in progress
          // upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
          // console.log(upload.progress);
        },
        // 2.) error observer
        (error) => {
          // upload failed
          console.log(error);
        },
        // 3.) success observer
        (): any => {
          listing.image = uploadTask.snapshot.downloadURL;
          // listing.imgName = listing.file.name;
          this.saveFileData(listing);
          console.log(listing);
        }
      );
    }
  }
  private saveFileData(listing) {  
    this.itemsCollection.add(listing);
    console.log('File saved!: ' + listing.image);
    this.openSnackBarAdd();
  }

  openSnackBarAdd() {
    this.snackBar.open('Menu added successfully', 'CLOSE', {
      panelClass: ['snack-bar-color'],
      duration: 4000
    });
  }

}
