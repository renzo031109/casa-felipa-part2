import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatFormField } from '@angular/material';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  constructor(private viewImage: MatDialogRef<ViewComponent>) { }

  ngOnInit() {
  }

}
