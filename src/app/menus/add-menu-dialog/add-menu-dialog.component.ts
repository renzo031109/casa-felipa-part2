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

private categories = [
    'Appetizer',
    'Drinks',
    'Silog',
    'Soup'
];

  menuName: string;
  description: string;
  group: string;
  price: number;
  image: any;

  constructor(public dialogRef: MatDialogRef<AddMenuDialogComponent>,
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
    this.uploadService.addListing(listing);

  }

}
