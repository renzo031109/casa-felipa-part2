import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { MatFormFieldModule } from '@angular/material/form-field';

import { Listing } from '../models/listing';
import { UploadService } from '../service/upload.service';

@Component({
  selector: 'app-add-menu-dialog',
  templateUrl: './add-menu-dialog.component.html',
  styleUrls: ['./add-menu-dialog.component.scss']
})
export class AddMenuDialogComponent implements OnInit {

  menuName: string;
  description: string;
  group: string;
  price: number;
  image: any;

  constructor(private dialogRef: MatDialogRef<AddMenuDialogComponent>,
    private uploadService: UploadService) { }

  ngOnInit() {

  }
 
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
