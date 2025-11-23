import { ArrowUpRight, Bolt } from "lucide-react";
import React from "react";
import { useTranslations } from "next-intl";
import { useThemeMode } from "@/hooks/useThemeMode";

export const FinalCTASection = () => {
    const t = useTranslations();
    const { isDark } = useThemeMode();
    return (
        <section id="final-cta" className={`py-24 text-center bg-main`}>
            <div className="max-w-4xl mx-auto px-4">
                <div
                    className={`inline-block p-4 rounded-full ${isDark ? 'bg-cyan-900/30' : 'bg-cyan-50'} mb-6`}>
                    <Bolt className="w-8 h-8 text-cyan-500"/>
                </div>
                <h2 className={`text-4xl sm:text-5xl font-extrabold mb-6 text-main`}>{t('final_cta.heading')}</h2>
                <p className={`text-xl text-muted mb-12`}>{t('final_cta.subheading')}</p>

                <button
                    className="bg-cyan-500 text-white px-12 py-5 rounded-2xl text-xl font-bold shadow-2xl shadow-cyan-500/40 hover:bg-cyan-600 hover:scale-105 transition-all duration-300 mb-6 flex items-center justify-center gap-3 mx-auto">
                    <ArrowUpRight className='w-6 h-6'/> {t('final_cta.button')}
                </button>

                <div className="flex items-center justify-center gap-2 text-sm">
                    <span className={'text-muted'}>{t('final_cta.login_prompt')}</span>
                    <a href="#"
                       className="text-cyan-500 font-bold hover:underline">{t('final_cta.login_link')}</a>
                </div>
            </div>
        </section>

    )
}