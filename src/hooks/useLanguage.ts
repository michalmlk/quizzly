import { useTranslation } from 'react-i18next';

export type Language = 'en' | 'pl';

export const useLanguage = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language as Language;
  return {
    currentLanguage,
  };
};
