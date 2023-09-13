import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import pt_br from './languages/pt_br.json';
import en from './languages/en.json';
import es from './languages/es.json';

export const resources = {
  pt_br: pt_br,
  en: en,
  es: es,
} as const;

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'pt_br',
  resources,
  react: {
    useSuspense: false,
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
