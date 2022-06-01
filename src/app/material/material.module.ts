import { NgModule } from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatButtonModule} from '@angular/material/button';
import{MatSidenavModule} from  '@angular/material/sidenav';
import{MatNativeDateModule} from  '@angular/material/core';
import{MatIconModule} from  '@angular/material/icon';
import{MatTableModule} from  '@angular/material/table';
import{MatToolbarModule} from  '@angular/material/toolbar';
import{MatSnackBarModule} from  '@angular/material/snack-bar';
import{MatDatepickerModule} from  '@angular/material/datepicker';
import{MatCardModule} from  '@angular/material/card';
import{MatBadgeModule} from  '@angular/material/badge';
import{MatInputModule} from  '@angular/material/input';
import{MatListModule} from  '@angular/material/list';
import{MatProgressSpinnerModule} from  '@angular/material/progress-spinner';
import{MatGridListModule} from  '@angular/material/grid-list';
import{MatSortModule} from  '@angular/material/sort';
import{MatPaginatorModule} from  '@angular/material/paginator'; 
import{MatChipsModule} from  '@angular/material/chips';
import{MatTooltipModule} from  '@angular/material/tooltip';
import{MatDialogModule} from  '@angular/material/dialog';
import{MatCheckboxModule} from  '@angular/material/checkbox';
import{MatSelectModule} from  '@angular/material/select';
import{MatRadioModule} from  '@angular/material/radio';
import{MatFormFieldModule} from  '@angular/material/form-field';
import{MatAutocompleteModule} from  '@angular/material/autocomplete';
import{MatStepperModule} from  '@angular/material/stepper';
import{MatMenuModule} from  '@angular/material/menu';
import{MatProgressBarModule} from  '@angular/material/progress-bar';



const material = [
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatCheckboxModule,
  MatBadgeModule,
  MatCardModule,
  MatDatepickerModule,
  MatCardModule,
  MatToolbarModule,
  MatSidenavModule,
  MatNativeDateModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatGridListModule,
  MatFormFieldModule,
  MatDialogModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatListModule,
  MatChipsModule,
  MatAutocompleteModule,
  DragDropModule,
  MatStepperModule,
  MatMenuModule,

  
 
  ];


  @NgModule({
    imports: [
      material ],
    exports: [
      material
    ]
  })
export class MaterialModule { }
