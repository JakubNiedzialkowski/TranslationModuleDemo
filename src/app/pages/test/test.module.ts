import { CustomPipesModule } from '../../core/customTranslate/modules/custom-pipes/custom-pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestPageRoutingModule } from './test-routing.module';

import { TestPage } from './test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestPageRoutingModule,
    CustomPipesModule
  ],
  declarations: [TestPage]
})
export class TestPageModule { }
