import { makeStaticProps } from "../lib/getStatic"
import store from "../store/store"

type Locale = "el" | "en";
const isLocale = (lang: string): lang is Locale => {
  switch (lang as Locale) {
    case "el":
    case "en":
      return true;
    default:
      return false;
  }
};

type Translation = {
  [key in Key]: string | null;
};

type Languages = {
  [key in Locale]: Translation;
};

type Fallbacks = {
  [key in Locale]?: Locale;
};
const fallbacks: Fallbacks = {
  el: "en"
};

type Key =
| "title"
| "logo"
| "home"
| "bio"
| "photos"
| "videos"
| "events"
| "contact"
| "email"
| "phone"
| "changeLanguage"

const en: Translation = {
  title: "Apostolos Pagonis - Cello | Official site",
  logo: "Apostolos Pagonis | Cello",
  home: "Home",
  bio: "Bio",
  photos: "Photos",
  videos: "Videos",
  events: "Events",
  contact: "Contact",
  email: "Email",
  phone: "Phone",
  changeLanguage: "Other languages"
};

const el: Translation = {
  title: "Απόστολος Παγώνης | Cello",
  logo: "Απόστολος Παγώνης | Cello",
  home: "Αρχική",
  bio: "Βιογραφικό",
  photos: "Φωτογραφίες",
  videos: "Βίντεο",
  events: "Ατζέντα", // εκδηλώσεις
  contact: "Επικοινωνία",
  email: "Ηλεκρονικό ταχυδρομείο",
  phone: "Τηλέφωνο",
  changeLanguage: "Αλλαγή γλώσσας"
};

const languages: Languages = {
  en,
  el
};

const __translate = (locale: Locale, key: Key): string => {
  const t = languages[locale][key];

  if (t !== null) return t;

  const f = fallbacks[locale];

  if (f === undefined) return key;

  return __translate(f, key);
};

// Fill in nulls
for (const [locale, translation] of Object.entries(languages)) {
  for (const key of Object.keys(translation)) {
    translation[key as Key] = __translate(locale as Locale, key as Key);
  }
}

export default function translate(key: Key) {
  const lang = store.lang;

  if (!isLocale(lang)) {
    const defLang = makeStaticProps()().props.locale;
    if (!isLocale(defLang)) return "invalid locale";
    return languages[defLang][key] ?? "";
  }
  return languages[lang][key] ?? "";
}