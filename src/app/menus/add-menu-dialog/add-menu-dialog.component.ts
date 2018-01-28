import { Component, OnInit, OnChanges } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { MatFormFieldModule } from '@angular/material/form-field';

import { Listing } from '../models/listing';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-add-menu-dialog',
  templateUrl: './add-menu-dialog.component.html',
  styleUrls: ['./add-menu-dialog.component.scss']
})
export class AddMenuDialogComponent implements OnInit,OnChanges {

  // selectedFiles: FileList;
  // // currentUpload: Upload;
  // progress: {percentage: number} = {percentage: 0}

  menuName: string;
  description: string;
  group: string;
  price: number;
  image: any;
  button: boolean = false;


  constructor(private dialogRef: MatDialogRef<AddMenuDialogComponent>,
    private uploadService: UploadService) { }

  ngOnInit() {


  }

  ngOnChanges(){

  }



  // detectFiles(event) {
  //     this.selectedFiles = event.target.files;
  // }

  // uploadSingle() {
  //   const file = this.selectedFiles.item(0);
  //   this.currentUpload = new Upload(file);
  //   this.upSvc.pushUpload(this.currentUpload, this.progress);
  //   console.log(this.currentUpload);
  // }

  onSubmit() {
    let listing = {
      menuName: this.menuName,
      description: this.description,
      group: this.group,
      price: this.price
    };    
    console.log(listing);
    this.uploadService.addListing(listing);

  }

}
