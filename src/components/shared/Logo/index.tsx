import { Aperture } from "lucide-react";
import React from "react";
import { useTranslations } from "next-intl";

export const Logo = () => {
    const t = useTranslations();
    return (
        <div className={`flex items-center font-extrabold text-2xl tracking-tight dark:text-white text-gray-900`}>
            <Aperture className="w-6 h-6 mr-1 text-cyan-400" />
            {t('brand.name')}<span className={`dark:text-gray-400 text-gray-500`}>Pro</span>
        </div>
    );
};