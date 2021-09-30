import { CustomTranslatePipe } from '../../pipes/customTranslate/custom-translate.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    CustomTranslatePipe
  ],
  exports: [
    CustomTranslatePipe
  ],
  imports: [
    CommonModule
  ]
})
export class CustomPipesModule { }
