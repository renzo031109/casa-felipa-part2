import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './service/authentication.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'menus-container',
  template: `
    <mat-tab-group color="accent">
      <mat-tab label="Menu Detailed List">
          <div fxFlex class="master-detail-container">
            <app-master-detail fxFlex></app-master-detail>
          </div>
        </mat-tab>
      <mat-tab label="Menu Gallery">
        <div fxFlex class="menus-list-container">
          <app-list fxFlex></app-list>
        </div>
      </mat-tab>
      <mat-tab *ngIf="(user | async)?.uid" label="Master File">
      <div fxFlex class="menus-list-container">
        <app-master-file-list fxFlex></app-master-file-list>
      </div>
    </mat-tab>
    <mat-tab *ngIf="(user | async)?.uid" label="Master File">
    <div fxFlex class="menus-list-container">
    <app-menu-carousel></app-menu-carousel>
    </div>
    </mat-tab>
    </mat-tab-group>
  `,
  styles: [`
    .master-detail-container {
      height: calc(100vh - 113px);
      overflow: hidden;
      padding: 1rem;
    }

    .menus-list-container {
      height: 100%;
      padding: 1rem;
      overflow-x: hidden;
      overflow-y: auto;
    }
  `]
})
export class MenusContainerComponent implements OnInit {

  user: Observable<firebase.User>;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {  
    this.user = this.authenticationService.authUser();
  }

  
}
