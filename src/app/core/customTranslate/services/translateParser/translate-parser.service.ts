import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateParserService {

  constructor() { }

  public parseTranslation(trasnlationString: string, args: Object): string {
    Object.keys(args).forEach(key => {
      trasnlationString = trasnlationString.replace(`{{${key}}}`, args[key].toString());
    });
    return trasnlationString;
  }
}
