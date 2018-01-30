import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { MenuStoreService } from './menus/menus-store.service';
import { MenusContainerComponent } from './menus/menus-container.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppMaterialModule } from './app-material.module';

import { MasterDetailComponent } from './menus/master-detail/master-detail.component';
import { ListComponent } from './menus/list/list.component';
import { AddMenuDialogComponent } from './menus/add-menu-dialog/add-menu-dialog.component';
import { UserRegistrationComponent } from './menus/user-registration/user-registration.component';

import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { UploadService } from 'app/menus/upload.service';

import { AngularFirestoreModule } from 'angularfire2/firestore';

// import { HttpClientModule } from '@angular/common/http'; 


const routes: Routes = [
  {path: '', redirectTo: 'menus', pathMatch: 'full'},
  {path: 'menus', component: MenusContainerComponent },
  {path: 'registration', component: UserRegistrationComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MasterDetailComponent,
    ListComponent,
    AddMenuDialogComponent,
    UserRegistrationComponent,
    MenusContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    // HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppMaterialModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ],
  providers: [MenuStoreService, UploadService],
  bootstrap: [AppComponent],
  entryComponents: [AddMenuDialogComponent]
})
export class AppModule {
}
