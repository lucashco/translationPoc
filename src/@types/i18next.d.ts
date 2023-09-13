import {resources} from '../global/translate/i18n';

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: (typeof resources)['pt_br'];
  }
}
