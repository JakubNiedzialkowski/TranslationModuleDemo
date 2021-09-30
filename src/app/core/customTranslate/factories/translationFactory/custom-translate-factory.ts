import { TranslateLoaderService } from './../../services/translateLoader/translate-loader.service';

export function customTranslateFactory(provider: TranslateLoaderService) {
  return () => provider.setInitialLanguage();
}