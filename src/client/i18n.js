import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from "i18next-http-backend";
import translationTA from './locales/ta/translationTA.json'
import translationEN from './locales/en/translationEN.json'
const resources = {
    ta :{
        translation :translationTA
    },
    en :{
        translation :translationEN
    }
 };

i18n
.use(Backend)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });


export default i18n;