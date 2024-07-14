import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { default as farmDataEN, default as translationEN } from './locales/translation-en.json';
import { default as farmDataHI, default as translationHI } from './locales/translation-hi.json';

const resources = {
  en: {
    translation: translationEN,
    farmData: farmDataEN,
  },
  hi: {
    translation: translationHI,
    farmData: farmDataHI,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('i18nextLng') || 'en', 
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, 
  },
});

export default i18n;
