import { ILanguage } from './../../interfaces/ILanguage';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

const DEFAULT_LANGUAGE = { code:'en', name:"English"}
const PREFIX = '/assets/i18n/'
const SUFFIX = '.json'
const LANGUAGES: ILanguage[] = [
  { code: 'en', name: 'English' },
  { code: 'pl', name: 'Polski' },
]

@Injectable({
  providedIn: 'root'
})
export class CustomTranslateService {

  private selectedTranslation: Object;

  constructor(private http: HttpClient) {}

  public translate(key:string, args?:Object): string{
    let properties = key.split('.');
    let temp = this.selectedTranslation;
    if(temp){
      properties.forEach(p => temp = temp[p]);
      if(args){
        Object.keys(args).forEach(key => {
          temp = temp.toString().replace(`{{${key}}}`, args[key].toString());
        });
      }
      return temp.toString();
    }
    return key;
  }

  public changeLanguage(key:string): void{
    this.loadTranslation(key).subscribe(data =>{
      this.selectedTranslation = data;
    },
    error => alert(this.translate('alert.translationError')));
  }

  public setInitialLanguage(): Promise<any>{
    return new Promise((resolve, reject) =>{
      this.loadTranslation(DEFAULT_LANGUAGE.code).subscribe(data =>{
        this.selectedTranslation = data;
        resolve(true);
      });
    })
  }

  private loadTranslation(key:string): Observable<Object>{
    return this.http.get(`${PREFIX}${key}${SUFFIX}`);
  }

  public getLanguages(): ILanguage[]{
    return LANGUAGES;
  }

}
