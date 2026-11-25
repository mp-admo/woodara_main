import en from "./en";
import id from "./id";
import ru from "./ru";

export const translations = {
    en,
    id,
    ru,
};

export type Language = keyof typeof translations;

export const languageCodes = Object.keys(translations) as Language[];

// Language switcher data: the name is shown to screen readers, the flag in the dropdown
export const languages: Record<Language, { label: string; flag: string }> = {
    en: { label: "English", flag: "/flags/round/united-kingdom.png" },
    id: { label: "Bahasa Indonesia", flag: "/flags/round/Indonesia.png" },
    ru: { label: "Русский", flag: "/flags/round/russia.png" },
};
