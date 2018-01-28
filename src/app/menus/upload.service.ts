import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Listing } from './models/listing';
import 'firebase/storage';
import { GalleryImages } from 'app/menus/models/galleryImages';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UploadService {
  
  private basePath = '/uploads';
  private listing: Observable<GalleryImages[]>;
  // private gallery: Observable<GalleryImages[]>;

  constructor(private db: AngularFireDatabase) { }

  addListing(listing) {
    let storageRef = firebase.storage().ref();
     for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
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
    this.db.list(`${this.basePath}/`).push(listing);
    console.log('File saved!: ' + listing.image);
  }
}
