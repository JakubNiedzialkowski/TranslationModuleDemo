import { CustomTranslateService } from './core/customTranslate/services/customTranslate/custom-translate.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private customTranslate: CustomTranslateService) {
    this.initializeApp();
  }

  private initializeApp(){
    this.customTranslate.setInitialLanguage();
  }
}
