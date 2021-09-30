import { TranslateLoaderService } from './core/customTranslate/services/translateLoader/translate-loader.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private customTranslateLoader: TranslateLoaderService) {
    this.initializeApp();
  }

  private initializeApp() {
    this.customTranslateLoader.setInitialLanguage();
  }
}
