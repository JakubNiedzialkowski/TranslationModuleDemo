import { CustomTranslateService } from './../../services/customTranslate/custom-translate.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customTranslate',
  pure : false
})
export class CustomTranslatePipe implements PipeTransform {

  constructor(private customTranslation: CustomTranslateService) {
  }

  transform(value: string, ...args: Object[]): string {
    return this.customTranslation.translate(value, ...args);
  }

}
