import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { Logo } from "@/components/shared/Logo";
import { Menu, UserPlus, X } from "lucide-react";
import dynamic from "next/dynamic";
import { useThemeMode } from "@/hooks/useThemeMode";
import { useLanguageMode } from "@/hooks/useLanguageMode";

const ToggleTheme = dynamic(() => import('@/components/shared/ToggleTheme'), { ssr: false })

type ScrollHandlerFunction = () => void;

type HeaderProps = {
    scrollHandlers: {
        scrollToFeatures: ScrollHandlerFunction;
        scrollToRoles: ScrollHandlerFunction;
        scrollToFinalCta: ScrollHandlerFunction;
        scrollToTestimonials: ScrollHandlerFunction;
    }
};

export const Header = ({ scrollHandlers }: HeaderProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const t = useTranslations();
    const { scrollToFeatures, scrollToRoles,scrollToFinalCta  } = scrollHandlers

    const { toggleLanguage, locale } = useLanguageMode()

    const handleScrollAndClose = (callback:ScrollHandlerFunction) => {
        setIsOpen(false);
        callback();
    }
    const baseClasses = 'fixed top-0 left-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-100 dark:border-gray-800';

    const linkClasses =  'text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition font-medium text-sm tracking-wide cursor-pointer';

    const loginBtnClasses =
         'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium text-sm transition px-4 py-2 cursor-pointer';

    const ctaBtnClasses = 'bg-cyan-500 text-white px-5 py-2.5 rounded-xl shadow-lg hover:bg-cyan-600 transition duration-300 font-bold text-sm ml-2 cursor-pointer';


    const { isDark } = useThemeMode()
    const langButtonClasses = 'text-gray-600 hover:text-gray-900 bg-gray-200 hover:bg-gray-300 border border-gray-300 dark:text-gray-400 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700  dark:border-gray-700';

    return (
        <header className={baseClasses}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                <Logo  />

                <nav className="hidden md:flex items-center space-x-8">
                    <button onClick={scrollToFeatures} className={linkClasses}>{t('nav.features')}</button>
                    <button onClick={scrollToRoles} className={linkClasses}>{t('nav.pros')}</button>

                    <div className="flex items-center space-x-3 ml-4 pl-4 border-l border-gray-700/20">
                        <ToggleTheme/>
                        <button onClick={toggleLanguage} className={`${langButtonClasses} transition px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer`}>
                            {locale.toUpperCase()}
                        </button>
                    </div>

                    <div className="flex items-center ml-6">
                        <button  className={loginBtnClasses} onClick={()=>{}}>
                            {t('nav.login')}
                        </button>
                        <button  onClick={scrollToFinalCta} className={ctaBtnClasses}>
                            {t('nav.register')}
                        </button>
                    </div>
                </nav>

                <div className="md:hidden flex items-center">
                    <button onClick={toggleLanguage} className={`mr-2 ${langButtonClasses} transition px-2 py-1 rounded-lg text-xs font-bold cursor-pointer`}>
                        {locale.toUpperCase()}
                    </button>
                    <button onClick={() => setIsOpen(prev => !prev)} className={`p-2 ${isDark ? 'text-gray-300' : 'text-gray-700'} cursor-pointer`}>
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
                        <button onClick={() => {  handleScrollAndClose(scrollToFeatures); }} className={`text-lg cursor-pointer font-medium ${isDark ? 'text-gray-300' : 'text-gray-800'}`} >{t('nav.features')}</button>
                        <button onClick={() => {  handleScrollAndClose(scrollToRoles); }} className={`text-lg cursor-pointer font-medium ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>{t('nav.pros')}</button>
                        <div className="border-t border-gray-700/20 my-2"></div>
                        <button className={`text-lg cursor-pointer font-medium ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>{t('nav.login')}</button>
                        <button onClick={() => {  handleScrollAndClose(scrollToFinalCta); }} className="bg-cyan-500 cursor-pointer text-white text-center py-3 rounded-xl font-bold mt-2 flex justify-center items-center gap-2">
                            <UserPlus className="w-5 h-5" /> {t('nav.register')}
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
};

