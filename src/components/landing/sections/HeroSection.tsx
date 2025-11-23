import {CheckCircle, House, Zap} from "lucide-react";
import {RocketIcon} from "@/components/shared/RocketIcon";
import React from "react";
import {useTranslations} from "next-intl";
import {useThemeMode} from "@/hooks/useThemeMode";

export const HeroSection = () => {
    const t = useTranslations()
    const {isDark} = useThemeMode();
    const scrollToSection = ()=>{}
    const heroGradient =
        'radial-gradient(circle at 15% 25%, rgba(6,182,212,0.08) 0%, rgba(255,255,255,0) 50%) dark:radial-gradient(circle at 15% 25%, rgba(6,182,212,0.15) 0%, rgba(17,24,39,0) 50%)';

    return (
        <section className={`relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-48 bg-white dark:bg-gray-900`}>
            <div className="absolute inset-0 z-0" style={{backgroundImage: heroGradient}}></div>

            <div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16">

                <div className="lg:w-1/2 text-center lg:text-left">
                    <div
                        className={`inline-flex items-center px-4 py-1.5 rounded-full border dark:border-cyan-500/30 dark:bg-cyan-500/10 dark:text-cyan-400' border-cyan-200 bg-cyan-50 text-cyan-700 text-xs font-bold tracking-wide mb-6`}>
                        <Zap className="w-3 h-3 mr-2"/> {t('hero.tagline')}
                    </div>

                    <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6 text-main`}>
                        {t('hero.title.part1')} <span
                        className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">{t('hero.title.part2')}</span>
                    </h1>

                    <p className={`text-xl text-muted mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed`}>
                        {t('hero.subtitle')}
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                        <button onClick={() => scrollToSection('final-cta')}
                                className="bg-cyan-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-cyan-500/20 hover:bg-cyan-600 hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2">
                            <RocketIcon/> {t('hero.cta.start')}
                        </button>
                        <button onClick={() => scrollToSection('features')}
                                className={`px-8 py-4 rounded-xl font-bold text-lg border-2 ${isDark ? 'border-gray-700 text-white hover:bg-gray-800' : 'border-gray-200 text-gray-700 hover:bg-gray-50'} transition-all duration-200`}>
                            {t('hero.cta.features')}
                        </button>
                    </div>
                </div>

                {/* Hero Visual (Floating Card) */}
                <div className="lg:w-1/2 w-full relative perspective-1000">
                    <div
                        className={`relative z-10 p-8 rounded-3xl ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} border shadow-2xl transform rotate-2 hover:rotate-0 transition duration-700`}>
                        <div
                            className="flex justify-between items-center mb-8 border-b border-dashed border-gray-200/20 pb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                                    <House className="w-5 h-5 text-cyan-500"/>
                                </div>
                                <div>
                                    <p className={`text-xs font-bold text-muted`}>{t('hero.project_status')}</p>
                                    <p className={`font-bold text-main`}>Varna, Center</p>
                                </div>
                            </div>
                            <span className="bg-green-500/10 text-green-500 px-3 py-1 rounded-full text-xs font-bold">IN PROGRESS</span>
                        </div>

                        <div className="space-y-4">
                            <div
                                className={`p-4 rounded-xl ${isDark ? 'bg-gray-900' : 'bg-gray-50'} flex items-center justify-between`}>
                                <span className={`text-sm font-medium text-muted`}>Select Floor Tiles</span>
                                <CheckCircle className="w-5 h-5 text-green-500"/>
                            </div>
                            <div
                                className={`p-4 rounded-xl ${isDark ? 'bg-gray-900' : 'bg-gray-50'} flex items-center justify-between border-l-4 border-cyan-500`}>
                                <span className={`text-sm font-bold text-main`}>Order Bathroom Sink</span>
                                <span className="text-xs font-bold text-cyan-500">COMPARE 3 PRICES</span>
                            </div>
                        </div>

                        <div className="mt-8">
                            <div className="flex justify-between text-sm mb-2">
                                <span className={'textMuted'}>{t('hero.budget_title')}</span>
                                <span className={`font-bold text-main`}>2,400 / 5,000 BGN</span>
                            </div>
                            <div className="w-full bg-gray-200/20 rounded-full h-2">
                                <div className="bg-cyan-500 h-2 rounded-full w-1/2"></div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Background Blob */}
                    <div
                        className="absolute -top-10 -right-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl -z-10"></div>
                </div>
            </div>
        </section>
    )
}