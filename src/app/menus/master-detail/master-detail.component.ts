import { Component, OnInit } from '@angular/core';
import { Menus } from '../menus';
import { MenuStoreService } from '../menus-store.service';

@Component({
  selector: 'app-master-detail',
  templateUrl: './master-detail.component.html',
  styleUrls: ['./master-detail.component.scss']
})
export class MasterDetailComponent implements OnInit {

  menusList: Menus[] = [];
  selectedMenu: Menus;
  constructor(private menuStoreService: MenuStoreService) {
  }

  ngOnInit() {
    this.menuStoreService
      .getMenus()
      .subscribe(response => this.menusList = response);
  }


}
