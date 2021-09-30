import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const DEFAULT_LANGUAGE = { code: 'en', name: "English" }
const PREFIX = '/assets/i18n/'
const SUFFIX = '.json'

@Injectable({
  providedIn: 'root'
})
export class TranslateLoaderService {

  private selectedTranslation: Object;

  constructor(private http: HttpClient) { }


  public setInitialLanguage(): Promise<any> {
    return new Promise(resolve => {
      this.loadTranslation(DEFAULT_LANGUAGE.code).subscribe(data => {
        this.selectedTranslation = data;
        resolve(true);
      });
    })
  }

  public changeLanguage(key: string): Promise<any> {
    return new Promise(resolve => {
      this.loadTranslation(key).subscribe(data => {
        this.selectedTranslation = data;
        resolve(this.selectedTranslation);
      });
    })
  }

  private loadTranslation(key: string): Observable<Object> {
    return this.http.get(`${PREFIX}${key}${SUFFIX}`);
  }

  public getSelectedTranslation(): Object {
    return this.selectedTranslation;
  }
}
