import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-carousel',
  templateUrl: './menu-carousel.component.html',
  styleUrls: ['./menu-carousel.component.scss']
})
export class MenuCarouselComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  welcomeBtn() {
    this.router.navigateByUrl('menus');
  }

}
