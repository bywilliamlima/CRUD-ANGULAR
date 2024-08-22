import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { CategoryPipe } from './pipes/category.pipe';
import { ComfimationDialogComponent } from './components/error-dialog/comfimation-dialog/comfimation-dialog.component';



@NgModule({
  declarations: [

    ErrorDialogComponent,
     CategoryPipe,
     ComfimationDialogComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports:[ErrorDialogComponent,CategoryPipe,ComfimationDialogComponent]
})
export class SharedModule { }
