import { useLocaleContext } from "@/providers/IntlProvider";

export const useLanguageMode = () => {
    const { locale, setLocale } = useLocaleContext();

    const toggleLanguage = () => {
       const locale = localStorage.getItem("locale");
        const newLang = locale === 'en' ? 'bg' : 'en';
        localStorage.setItem("locale", newLang);
        setLocale(newLang); // smooth client change
    };

    return {
        locale,
        toggleLanguage,
    };
}