
"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { NextIntlClientProvider } from "next-intl";

export type LocaleContextType = {
    locale: string;
    setLocale: (_loc: string) => void;
};

const LocaleContext = createContext<LocaleContextType | null>(null);

export function useLocaleContext() {
    const ctx = useContext(LocaleContext);
    if (!ctx) throw new Error("useLocaleContext must be used inside IntlProvider");
    return ctx;
}

export default function IntlProvider({ children }: { children: React.ReactNode }) {
    const [locale, setLocale] = useState("en");
    const [messages, setMessages] = useState<Record<string, string> | null>(null);

    useEffect(() => {
        const saved = localStorage.getItem("locale") || "en";
        setLocale(saved);
    }, []);

    useEffect(() => {
        import(`../../messages/${locale}.json`)
            .then((mod) => {
                setMessages(mod.default)
            });
    }, [locale]);

    if (!messages) return null; // small splash screen can be added

    return (
        <LocaleContext.Provider value={{ locale, setLocale }}>
            <NextIntlClientProvider locale={locale} messages={messages}>
                {children}
            </NextIntlClientProvider>
        </LocaleContext.Provider>
    );
}
