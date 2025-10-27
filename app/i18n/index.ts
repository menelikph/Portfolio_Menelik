import es from './locales/es.json';
import en from './locales/en.json';

export type Locale = 'en' | 'es';

export const locales: Locale[] = ['en', 'es'];

export const defaultLocale: Locale = 'en';

export const dictionaries = {
  en,
  es,
};

export const getDictionary = (locale: Locale) => {
  return dictionaries[locale] || dictionaries[defaultLocale];
};

export const getLocaleDisplayName = (locale: Locale): string => {
  const names: Record<Locale, string> = {
    en: 'English',
    es: 'Español',
  };
  return names[locale];
};