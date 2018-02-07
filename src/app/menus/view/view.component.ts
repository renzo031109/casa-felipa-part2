import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef, MatFormField } from '@angular/material';
import { Listing } from '../models/listing';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  menuImage: string ='';
  menuName: string = '';
  menuPrice: number = 0;

  
  constructor(public viewImage: MatDialogRef<ViewComponent>) { }


  ngOnInit() {
  }

  // menuViewImage(menu: string) {
  //   this.menu = menu;
  // }
}
