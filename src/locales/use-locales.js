"use client";

import { useCallback } from "react";
import { useTranslation } from "react-i18next";

import { allLangs, defaultLang } from "./config-lang";
import { localStorageAvailable } from "@/utils/storage";

export function useLocales() {
  const storageAvailable = localStorageAvailable();
  const langStorage = storageAvailable
    ? localStorage.getItem("i18nextLng")
    : defaultLang.value;

  const currentLang =
    allLangs.find((lang) => lang.value === langStorage) || defaultLang;

  return {
    allLangs,
    currentLang,
  };
}

export function useTranslate() {
  const { t, i18n, ready } = useTranslation();

  const onChangeLang = useCallback(
    (newlang) => {
      i18n.changeLanguage(newlang);
    },
    [i18n]
  );

  return {
    t,
    i18n,
    ready,
    onChangeLang,
  };
}
