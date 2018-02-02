import { NgModule } from '@angular/core';
import {
  MatSidenavModule,
  MatListModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatTabsModule,
  MatCardModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatDialogModule,
  MatSelectModule,
  MatRadioModule,
  MatCheckboxModule,
  MatSlideToggleModule,
  MatProgressBarModule,
  MatFormFieldModule,  

} from '@angular/material';

const MATERIAL_MODULES = [
  MatSidenavModule,
  MatListModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatTabsModule,
  MatCardModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatDialogModule,
  MatSelectModule,
  MatRadioModule,
  MatCheckboxModule,
  MatSlideToggleModule,
  MatProgressBarModule,
  MatFormFieldModule 
];

@NgModule({
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES
})

export class AppMaterialModule { }