import {useTranslation} from 'react-i18next';

export function useAppTranslation() {
  const {t, i18n} = useTranslation();

  return {
    translate: t,
    translateActions: i18n,
  };
}
