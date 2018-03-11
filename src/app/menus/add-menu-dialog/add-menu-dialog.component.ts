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

categories = [
    'All',
    'ALA-CARTE',
    'APPETIZER',
    'BBQ',
    'DRINKS',
    'EXTRAS',
    'SILOG'
];

  menuName: string;
  description: string;
  promos: string;
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
      promos: this.promos,
      group: this.group,
      price: this.price
    };
    this.uploadService.addListing(listing);
  }
}
