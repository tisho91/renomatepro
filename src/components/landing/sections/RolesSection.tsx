import { Briefcase, CheckCircle, ShieldCheck, ShoppingCart } from "lucide-react";
import React, { ForwardedRef } from "react";
import { useThemeMode } from "@/hooks/useThemeMode";
import { useTranslations } from "next-intl";

type RolesSectionProps = {
    scrollToFinalCta: ()=> void
}

export const RolesSection = React.forwardRef(({ scrollToFinalCta }:RolesSectionProps , ref: ForwardedRef<HTMLElement>) => {
    const t = useTranslations();
    const { isDark } = useThemeMode();

    return (
        <section id="roles" className={`py-24 lg:py-32 bg-sec relative overflow-hidden`} ref={ref}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className={`text-3xl sm:text-4xl font-extrabold mb-4 text-main`}>{t('roles.heading')}</h2>
                    <p className={`text-xl text-muted`}>{t('roles.subheading')}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Homeowner Card */}
                    <div
                        className={`group relative p-10 rounded-3xl border transition-all duration-300 hover:shadow-2xl ${isDark ? 'bg-gray-900 border-gray-700 hover:border-cyan-500/30' : 'bg-white border-gray-100 hover:border-cyan-200'}`}>
                        <div
                            className="absolute top-0 right-0 bg-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">
                            DIY & MANAGE
                        </div>
                        <div
                            className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <ShoppingCart className="w-8 h-8 text-cyan-600"/>
                        </div>
                        <h3 className={`text-3xl font-bold mb-2 text-main`}>{t('cta.homeowner.heading')}</h3>
                        <p className={`text-lg text-muted mb-8`}>{t('cta.homeowner.subtitle')}</p>

                        <ul className="space-y-4 mb-10">
                            {[t('cta.homeowner.list1'), t('cta.homeowner.list2'), t('cta.homeowner.list3')].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0"/>
                                    <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <button onClick={scrollToFinalCta}
                                className="w-full py-4 rounded-xl border-2 border-cyan-500 text-cyan-500 font-bold hover:bg-cyan-500 hover:text-white transition-colors cursor-pointer">
                            {t('cta.homeowner.button')}
                        </button>
                    </div>

                    {/* Pro Card */}
                    <div
                        className={`group relative p-10 rounded-3xl border transition-all duration-300 hover:shadow-2xl ${isDark ? 'bg-gray-800 border-gray-600 hover:border-cyan-400/30' : 'bg-gray-50 border-gray-200 hover:border-gray-300'}`}>
                        <div
                            className="w-16 h-16 bg-gray-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Briefcase className="w-8 h-8 text-white"/>
                        </div>
                        <h3 className={`text-3xl font-bold mb-2 text-main`}>{t('cta.pro.heading')}</h3>
                        <p className={`text-lg text-muted mb-8`}>{t('cta.pro.subtitle')}</p>

                        <ul className="space-y-4 mb-10">
                            {[t('cta.pro.list1'), t('cta.pro.list2'), t('cta.pro.list3')].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <ShieldCheck className="w-5 h-5 text-gray-400 flex-shrink-0"/>
                                    <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <button onClick={scrollToFinalCta}
                                className={`w-full py-4 rounded-xl font-bold transition-colors ${isDark ? 'bg-white text-gray-900 hover:bg-gray-200' : 'bg-gray-900 text-white hover:bg-gray-800'} cursor-pointer`}>
                            {t('cta.pro.button')}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
});

RolesSection.displayName = 'RolesSection';