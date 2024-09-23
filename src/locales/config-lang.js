"use client";

import { EnglishFlag, RussianFlag } from "@/assets/svgs";
// date fns
import { enUS as enUSAdapter, ru as ruAdapter } from "date-fns/locale";

export const allLangs = [
  {
    label: "English",
    value: "en",
    adapterLocale: enUSAdapter,
    icon: <EnglishFlag />,
    numberFormat: {
      code: "en-US",
      currency: "USD",
    },
  },
  {
    label: "Russian",
    value: "ru",
    adapterLocale: ruAdapter,
    icon: <RussianFlag />,
    numberFormat: {
      code: "ru-RU",
      currency: "RUB",
    },
  },
];

export const defaultLang = allLangs[0]; // English
