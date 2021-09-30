import { ILanguage } from '../../core/customTranslate/interfaces/ILanguage';
import { CustomTranslateService } from '../../core/customTranslate/services/customTranslate/custom-translate.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private languages: ILanguage[];

  constructor(private customTranslate: CustomTranslateService, private router: Router) { }

  ngOnInit() {
    this.languages = this.customTranslate.getLanguages();
  }

  private changeLanguage(event: CustomEvent): void {
    const newLanguage: ILanguage = event.detail.value;
    this.customTranslate.changeLanguage(newLanguage.code);
  }

  private testTranslation(): void {
    alert(this.customTranslate.translate('alert.alertTest'));
  }

  private navigateToTestPage(): void {
    this.router.navigateByUrl('/test');
  }

}
