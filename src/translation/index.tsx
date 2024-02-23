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
| "personal_projects"
| "email"
| "phone"
| "changeLanguage"
| "bioText"

const en: Translation = {
  title: "Apostolos Pagonis - Cello | Official site",
  logo: "Apostolos Pagonis | Cello",
  home: "Home",
  bio: "Bio",
  photos: "Photos",
  videos: "Videos",
  events: "Events",
  contact: "Contact",
  personal_projects: "Artistic Products and Projects",
  email: "Email",
  phone: "Phone",
  changeLanguage: "Other languages",
  bioText: `Apostolos Pagonis was born in Athens, Greece in 1992. In  June of 2013 he received the Diploma in Cello from Philippos Nakas Conservatory in Athens. In September of 2015 he started his Bachelor studies in the Conservatorium of Utrecht  HKU , in the Netherlands with the specialization of Classical Cello ( Prof. Ran Varon) where he graduated Cum Laude in August of 2019.|
  
  In the course of his studies he followed multiple Masterclasses on Cello performance, chamber music and orchestra ( Michel Strauss, Gary Hoffman, Marcio Carneiro, Jeroen Den Herder).|
  
  He has performed Solo, with Chamber music groups and orchestras in venues in Greece, The Netherlands, Turkey, Belgium, Germany and France.|
  He has participated in festivals like the Sound of Music Festival, Aurora festival, Emmy Verhey Festival, Festival Valder Aa and Delphoi festival|
  Currently he is in the course of obtaining his Master of Music Degree with the specialization of Cello performance from Hanze, Prins Claus Conservatoire, Groningen ( Prof. Jan Ype-Nota)
  `
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
  personal_projects: "Προσωπικά Projects",
  email: "Ηλεκρονικό ταχυδρομείο",
  phone: "Τηλέφωνο",
  changeLanguage: "Αλλαγή γλώσσας",
  bioText: null
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