import { FeatureCard } from "@/components/shared/FeatureCard";
import React from "react";
import { Hammer, Layers, ShoppingCart, TrendingUp } from "lucide-react";
import { useTranslations } from "next-intl";


 

export const FeaturesSection = () => {
    const t = useTranslations();
    const featureData = [
        { icon: <Layers />, title: t('features.planning.title'), description: t('features.planning.description') },
        { icon: <ShoppingCart />, title: t('features.shop.title'), description: t('features.shop.description') },
        { icon: <Hammer />, title: t('features.pros.title'), description: t('features.pros.description') },
        { icon: <TrendingUp />, title: t('features.control.title'), description: t('features.control.description') },
    ];
    return (
        <section id="features" className={`py-24 lg:py-32 bg-sec`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className={`text-3xl sm:text-4xl font-extrabold mb-6 text-main`}>{t('features.heading')}</h2>
                    <p className={`text-xl text-muted max-w-3xl mx-auto`}>{t('features.subheading')}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featureData.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    )
}