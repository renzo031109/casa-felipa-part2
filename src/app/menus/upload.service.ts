import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Upload } from './models/upload';

@Injectable()
export class UploadService {

  private basePath: string = '/uploads';
  uploads: AngularFireList<Upload[]>;

  constructor(private db: AngularFireDatabase) { }

  pushUpload(uploads: Upload, progress: {percentage: number}) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${uploads.file.name}`).put(uploads.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) =>  {
        // upload in progress
        const snap = snapshot as firebase.storage.UploadTaskSnapshot;
        progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100); 
      },
      (error) => {
        // upload failed
        console.log(error);
      },
      () => {
        // upload success
        uploads.url = uploadTask.snapshot.downloadURL;
        uploads.name = uploads.file.name;
        // upload.menuName = upload.menuName;
        // upload.description = upload.description;
        this.saveFileData(uploads);
      }
    );
  }
  // Writes the file details to the realtime db
  private saveFileData(uploads: Upload) {
    this.db.list(`${this.basePath}/`).push(uploads);
  }
}
