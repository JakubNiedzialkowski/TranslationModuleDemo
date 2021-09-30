import { CustomTranslateService } from '../custom-translate.service';

export function customTranslateFactory(provider: CustomTranslateService) {
  return () => provider.setInitialLanguage();
}