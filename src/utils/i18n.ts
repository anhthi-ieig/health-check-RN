import { getLocales } from 'expo-localization';
import { I18n } from 'i18n-js';

import { enLang } from '../locales/en';
import { vnLang } from '../locales/vn';
import { Locale } from '../common/constants';

export const getDeviceLanguage = (): string => getLocales()[0].languageCode || Locale.EN;

export const initI18n = (locale: string = getDeviceLanguage()) => {
  const _i18n = new I18n({
    [Locale.EN]: enLang,
    [Locale.VN]: vnLang,
  });
  _i18n.locale = locale;
  _i18n.enableFallback = true;

  i18n = _i18n;
  localeKey = Object.keys(enLang).reduce(
    (acc, item: string) => {
      acc[item] = item;
      return acc;
    },
    {} as Record<string, string>,
  );
};

export let localeKey: Record<keyof typeof enLang, string>;
export let i18n: I18n;
