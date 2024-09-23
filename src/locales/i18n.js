"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { defaultLang } from "./config-lang";
import translationEn from "./langs/en.json";
import translationRu from "./langs/ru.json";
import { localStorageAvailable } from "@/utils/storage";

const lng = localStorageAvailable()
  ? localStorage.getItem("i18nextLng")
  : defaultLang.value;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translations: translationEn },
      ru: { translations: translationRu },
    },
    lng,
    fallbackLng: "en",
    debug: false,
    ns: ["translations"],
    defaultNS: "translations",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
