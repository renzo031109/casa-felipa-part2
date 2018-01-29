import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { GalleryImages } from '../models/galleryImages';


@Injectable()
export class ListingsService {
  menusCollection: AngularFirestoreCollection<GalleryImages>;
  menus: Observable<GalleryImages[]>;
  menuDoc: AngularFirestoreDocument<GalleryImages>;

  constructor(private afs: AngularFirestore) {
    this.menusCollection = this.afs.collection('menus', ref => ref.orderBy('name', 'asc'));

    this.menus = this.menusCollection.snapshotChanges().map(changes => {
      return changes.map( datas => {
        const data = datas.payload.doc.data() as GalleryImages;
        data.id = datas.payload.doc.id;
        return data;
      });
    });
  }

  getMenus() {
    return this.menus;
  }

  addMenu(menu: DataType) {
    this.menusCollection.add(menu);
  }

  deleteItem(menu: DataType) {
    this.menuDoc = this.afs.doc(`menus/${menu}`);
    this.menuDoc.delete();
  }



  // getImages(): Observable<GalleryImages[]> {
  //   return this.db.list('uploads').valueChanges();
  // }

  // getImage(key: string) {
  //   return firebase.database().ref('uploads/' + key).once('value')
  //   .then((snap) => snap.val());
  // }
}


