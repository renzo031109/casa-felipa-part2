import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';
import 'firebase/storage';
import { GalleryImages } from '../models/galleryImages';
import * as firebase from 'firebase';


@Injectable()
export class ListingsService {
  //items: AngularFireList<any[]> = null; //  list of objects
  items: GalleryImages[];

  constructor(private db: AngularFireDatabase) { 

    this.items = this.db.list('/uploads').valueChanges();
  }

  getImages() {
    this.items =this.db.list('/uploads') as AngularFireList<GalleryImages>
    return this.items
  }

  // getImages(): Observable<GalleryImages[]> {
  //   return this.db.list('uploads').valueChanges();
  // }

  // getImage(key: string) {
  //   return firebase.database().ref('uploads/' + key).once('value')
  //   .then((snap) => snap.val());
  // }
}


