import { TranslateLoaderService } from './core/customTranslate/services/translateLoader/translate-loader.service';
import { TranslateStoreService } from './core/customTranslate/services/translateStore/translate-store.service';
import { CustomTranslateService } from './core/customTranslate/services/customTranslate/custom-translate.service';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { customTranslateFactory } from './core/customTranslate/factories/translationFactory/custom-translate-factory';
import { CustomPipesModule } from './core/customTranslate/modules/custom-pipes/custom-pipes.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, CustomPipesModule],
  providers: [
    CustomTranslateService,
    TranslateStoreService,
    TranslateLoaderService,
    {provide: APP_INITIALIZER, useFactory:customTranslateFactory, deps:[TranslateLoaderService], multi: true,}, 
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
