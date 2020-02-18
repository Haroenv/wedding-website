import { useState, useEffect } from 'react';
import * as Translations from './translations';

/**
 * @typedef {import('./translations').TranslationKey} TranslationKey
 * @typedef {typeof import('./translations').Dutch} Dutch
 * @typedef {(key: TranslationKey) => Dutch[TranslationKey]} GetText
 */

/**
 * @param defaultLanguage {import('./translations').Language}
 */
export function useLanguage(defaultLanguage) {
  const [language, setLanguage] = useState(defaultLanguage);
  /**
   * @param {import('./translations').TranslationKey} key
   */
  const getText = key => Translations.getTranslation(language, key);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () =>
    language === 'en' ? setLanguage('nl') : setLanguage('en');

  return { getText, language, toggleLanguage };
}
