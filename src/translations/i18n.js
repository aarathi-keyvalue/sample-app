import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// import { TRANSLATIONS_ZH } from "./zh/translations";
import { TRANSLATIONS_EN } from "./en/translation";
import { TRANSLATIONS_HI } from "./hi/translation";
import { TRANSLATIONS_SP } from "./sp/translation";

// const getUserLanguage = () => window.navigator.userLanguage || window.navigator.language;
// console.log("HEEEEE", getUserLanguage());
const langDetectorOptions = {
  // order and from where user language should be detected
  order: ["cookie", "localStorage", "navigator"],

  // keys or params to lookup language from
  lookupCookie: "locale",
  lookupLocalStorage: "locale",

  // cache user language on
  caches: ["localStorage", "cookie"],
  excludeCacheFor: ["cimode"], // languages to not persist (cookie, localStorage)

  // only detect languages that are in the whitelist
  checkWhitelist: true,
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    whitelist: ['en', 'hi', 'sp'], 
    resources: {
      en: {
        translation: TRANSLATIONS_EN,
      },
      hi: {
        translation: TRANSLATIONS_HI,
      },
      sp: {
        translation: TRANSLATIONS_SP,
      },
    },
  });

i18n.changeLanguage("sp");
