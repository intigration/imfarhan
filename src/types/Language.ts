export type Locale = 'en' | 'ur';

export type Translations = {
  [key in Locale]: {
    [key: string]: string;
  };
};

export interface LanguageMeta {
  name: string;
  flag: string;
  code: Locale;
  text: Translations[Locale];
}
