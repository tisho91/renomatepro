import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { Logo } from "@/components/shared/Logo";
import { Menu, UserPlus, X } from "lucide-react";
import dynamic from "next/dynamic";
import { useThemeMode } from "@/hooks/useThemeMode";
import { useLanguageMode } from "@/hooks/useLanguageMode";

const ToggleTheme = dynamic(() => import('@/components/shared/ToggleTheme'), { ssr: false })

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const t = useTranslations();

    const scrollToSection = () =>{}

    const { toggleLanguage, locale } = useLanguageMode()
    const handleScrollAndClose = () =>{}

    const baseClasses = 'fixed top-0 left-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-100 dark:border-gray-800';

    const linkClasses =  'text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition font-medium text-sm tracking-wide cursor-pointer';

    const loginBtnClasses =
         'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium text-sm transition px-4 py-2';

    const ctaBtnClasses = 'bg-cyan-500 text-white px-5 py-2.5 rounded-xl shadow-lg hover:bg-cyan-600 transition duration-300 font-bold text-sm ml-2';


    const { isDark } = useThemeMode()
    const langButtonClasses = 'text-gray-600 hover:text-gray-900 bg-gray-200 hover:bg-gray-300 border border-gray-300 dark:text-gray-400 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700  dark:border-gray-700';

    return (
        <header className={baseClasses}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                <Logo  />

                <nav className="hidden md:flex items-center space-x-8">
                    <a onClick={(e) => { e.preventDefault(); scrollToSection('features'); }} className={linkClasses}>{t('nav.features')}</a>
                    <a onClick={(e) => { e.preventDefault(); scrollToSection('roles'); }} className={linkClasses}>{t('nav.pros')}</a>

                    <div className="flex items-center space-x-3 ml-4 pl-4 border-l border-gray-700/20">
                        <ToggleTheme/>
                        <button onClick={toggleLanguage} className={`${langButtonClasses} transition px-3 py-1.5 rounded-lg text-xs font-bold`}>
                            {locale.toUpperCase()}
                        </button>
                    </div>

                    <div className="flex items-center ml-6">
                        <a href="#" className={loginBtnClasses} onClick={(e) => e.preventDefault()}>
                            {t('nav.login')}
                        </a>
                        <a href="#final-cta" onClick={(e) => { e.preventDefault(); scrollToSection('final-cta'); }} className={ctaBtnClasses}>
                            {t('nav.register')}
                        </a>
                    </div>
                </nav>

                <div className="md:hidden flex items-center">
                    <button onClick={toggleLanguage} className={`mr-2 ${langButtonClasses} transition px-2 py-1 rounded-lg text-xs font-bold`}>
                        {locale.toUpperCase()}
                    </button>
                    <button onClick={() => setIsOpen(!isOpen)} className={`p-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className={`md:hidden ${isDark ? 'bg-gray-900' : 'bg-white'} border-t ${isDark ? 'border-gray-800' : 'border-gray-100'} p-4 absolute w-full z-50 shadow-2xl`}>
                    <div className="flex justify-between items-center mb-4">
                        <span className={`text-sm font-bold ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Menu</span>
                        <ToggleTheme/>
                    </div>
                    <nav className="flex flex-col space-y-3">
                        <a onClick={(e) => { e.preventDefault(); handleScrollAndClose('features'); }} className={`text-lg font-medium ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>{t('nav.features')}</a>
                        <a onClick={(e) => { e.preventDefault(); handleScrollAndClose('roles'); }} className={`text-lg font-medium ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>{t('nav.pros')}</a>
                        <div className="border-t border-gray-700/20 my-2"></div>
                        <a className={`text-lg font-medium ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>{t('nav.login')}</a>
                        <a onClick={(e) => { e.preventDefault(); handleScrollAndClose('final-cta'); }} className="bg-cyan-500 text-white text-center py-3 rounded-xl font-bold mt-2 flex justify-center items-center gap-2">
                            <UserPlus className="w-5 h-5" /> {t('nav.register')}
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
};

