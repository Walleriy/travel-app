import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEng from './locales/en/translation.json'
import translationEng2 from './locales/en/ns.json'
import translationUkr from './locales/ua/translation.json'
import translationUkr2 from './locales/ua/ns.json'
import translationRus from './locales/ru/translation.json'
import translationBel from './locales/be/translation.json'

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: true,
        detection: {
            order: ['queryString', 'cookie'],
            cache: ['cookie']
        },
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                translations: translationEng,
                ns: translationEng2
            },
            ua: {
                translations: translationUkr,
                ns: translationUkr2
            },
            ru: {
                translations: translationRus
            },
            be: {
                translations: translationBel
            },
        }
    });


export default i18n;