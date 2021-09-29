import { ILanguage } from './../interfaces/ILanguage';
import { CustomTranslateService } from './../services/customTranslate/custom-translate.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private languages:ILanguage[];

  constructor(private customTranslate:CustomTranslateService) {}

  ngOnInit(){
    this.languages = this.customTranslate.getLanguages();
  }

  private changeLanguage(event: CustomEvent): void {
    let newLanguage:ILanguage = event.detail.value;
    this.customTranslate.changeLanguage(newLanguage.code);
  }

  private testTranslation(): void{
    alert(this.customTranslate.translate('alert.alertTest'));
  }

}
