import { CustomTranslateService } from './services/customTranslate/custom-translate.service';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { customTranslateFactory } from './services/customTranslate/translationFactory/custom-translate-factory';
import { CustomPipesModule } from './modules/custom-pipes/custom-pipes.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, CustomPipesModule],
  providers: [CustomTranslateService, 
  {provide: APP_INITIALIZER, useFactory:customTranslateFactory, deps:[CustomTranslateService], multi: true,}, 
  { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
