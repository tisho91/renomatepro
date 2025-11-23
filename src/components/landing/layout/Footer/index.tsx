import { Logo } from "@/components/shared/Logo";
import React from "react";
import { useTranslations } from "next-intl";
import { useThemeMode } from "@/hooks/useThemeMode";

export const Footer = () =>{
    const t = useTranslations();
    const { isDark } = useThemeMode();
    const textMuted = isDark ? 'text-gray-400' : 'text-gray-500';


    return (
        <footer className={`py-12 border-t ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-100'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                <Logo />
                <p className={`text-sm mt-4 md:mt-0 ${textMuted}`}>
                    &copy; 2025 {t('brand.name')}Pro. {t('footer.copyright')}
                </p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="#" className={`text-sm ${textMuted} hover:text-cyan-500`}>{t('footer.privacy')}</a>
                    <a href="#" className={`text-sm ${textMuted} hover:text-cyan-500`}>{t('footer.terms')}</a>
                </div>
            </div>
        </footer>
    )
}