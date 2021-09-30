import { TranslateLoaderService } from './../translateLoader/translate-loader.service';
import { Injectable } from '@angular/core';
import { ILanguage } from '../../interfaces/ILanguage';

const LANGUAGES: ILanguage[] = [
  { code: 'en', name: 'English' },
  { code: 'pl', name: 'Polski' },
]

@Injectable({
  providedIn: 'root'
})
export class TranslateStoreService {

  private selectedTranslation: Object;

  constructor(private translateLoader: TranslateLoaderService) {
    this.selectedTranslation = this.translateLoader.getSelectedTranslation();
  }

  public getSelectedTranslation(): Object {
    return this.selectedTranslation;
  }

  public changeLanguage(key: string): Promise<any> {
    return this.translateLoader.changeLanguage(key);
  }

  public getLanguages(): ILanguage[] {
    return LANGUAGES;
  }
}
