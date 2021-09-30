import { TranslateParserService } from './../translateParser/translate-parser.service';
import { TranslateStoreService } from './../translateStore/translate-store.service';
import { ILanguage } from '../../interfaces/ILanguage';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomTranslateService {

  private selectedTranslation: Object;

  constructor(private translateStore: TranslateStoreService, private translateParser: TranslateParserService) {
    if (!this.selectedTranslation)
      this.selectedTranslation = this.translateStore.getSelectedTranslation();
  }

  public translate(key: string, args?: Object): string {
    if (this.isNullOrEmpty(this.selectedTranslation)) return key;

    const properties = key.split('.');
    let tempTranslation = this.selectedTranslation;
    properties.forEach(p => tempTranslation = tempTranslation[p]);

    if (this.isNullOrEmpty(args)) return tempTranslation.toString();

    return this.translateParser.parseTranslation(tempTranslation.toString(), args);
  }

  public async changeLanguage(key: string): Promise<void> {
    this.selectedTranslation = await this.translateStore.changeLanguage(key);
  }

  private isNullOrEmpty(object: any): boolean {
    return object == null || Object.entries(object).length === 0;
  }

  public getLanguages(): ILanguage[] {
    return this.translateStore.getLanguages();
  }

}
