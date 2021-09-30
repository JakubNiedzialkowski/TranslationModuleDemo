import { ILanguage } from './../../interfaces/ILanguage';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const DEFAULT_LANGUAGE = { code: 'en', name: "English" }
const PREFIX = '/assets/i18n/'
const SUFFIX = '.json'
const LANGUAGES: ILanguage[] = [
  { code: 'en', name: 'English' },
  { code: 'pl', name: 'Polski' },
]
const TRANSLATION_ERROR = 'alert.translationError'

@Injectable({
  providedIn: 'root'
})
export class CustomTranslateService {

  private selectedTranslation: Object;

  constructor(private http: HttpClient) {}

  public translate(key: string, args?: Object): string {
    if(this.isNullOrEmpty(this.selectedTranslation)) return key;

    const properties = key.split('.');
    let tempTranslation = this.selectedTranslation;
    properties.forEach(p => tempTranslation = tempTranslation[p]);

    if (this.isNullOrEmpty(args)) return tempTranslation.toString();

    return this.parseTranslation(tempTranslation.toString(), args);
  }

  private parseTranslation(trasnlationString:string, args: Object): string{
    Object.keys(args).forEach(key => {
      trasnlationString = trasnlationString.replace(`{{${key}}}`, args[key].toString());
    });
    return trasnlationString;
  }

  public setInitialLanguage(): Promise<any> {
    return new Promise(resolve => {
      this.loadTranslation(DEFAULT_LANGUAGE.code).subscribe(data => {
        this.selectedTranslation = data;
        resolve(true);
      });
    })
  }
  
  public changeLanguage(key: string): void {
    this.loadTranslation(key).subscribe(data => {
      this.selectedTranslation = data;
    },
    error => alert(this.translate(TRANSLATION_ERROR)));
  }

  private loadTranslation(key: string): Observable<Object> {
    return this.http.get(`${PREFIX}${key}${SUFFIX}`);
  }

  private isNullOrEmpty(object: any): boolean{
    return object == null || Object.entries(object).length === 0;
  }

  public getLanguages(): ILanguage[] {
    return LANGUAGES;
  }

}
