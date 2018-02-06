import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppMaterialModule } from './app-material.module';

import { AppComponent } from './app.component';
import { MenusContainerComponent } from './menus/menus-container.component';
import { MasterDetailComponent } from './menus/master-detail/master-detail.component';
import { ListComponent } from './menus/list/list.component';
import { AddMenuDialogComponent } from './menus/add-menu-dialog/add-menu-dialog.component';
import { UserRegistrationComponent } from './menus/user-registration/user-registration.component';
import { LoginComponent } from './login/login.component';
import { ViewComponent } from './menus/view/view.component';

import { RouterModule, Routes } from '@angular/router';

import { UploadService } from './menus/service/upload.service';
import { AuthenticationService } from './menus/service/authentication.service';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';



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
    MenusContainerComponent,
    LoginComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppMaterialModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [UploadService, AuthenticationService, ListComponent],
  bootstrap: [AppComponent],
  entryComponents: [AddMenuDialogComponent, LoginComponent, ViewComponent]
})
export class AppModule {
}
