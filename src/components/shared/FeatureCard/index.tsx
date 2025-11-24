import React, { ReactElement, SVGProps } from "react";
import { useThemeMode } from "@/hooks/useThemeMode";


type FeatureCardProps = {
    title: string;
    description: string;
    icon: ReactElement<SVGProps<SVGSVGElement>>;
}

export const FeatureCard = ({ icon, title, description }:FeatureCardProps) => {
    const { isDark } = useThemeMode()
    const cardClasses = isDark
        ? "bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-700 hover:border-cyan-500/50 transition duration-300 transform hover:-translate-y-1"
        : "bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:border-cyan-200 transition duration-300 transform hover:-translate-y-1";

    return (
        <div className={cardClasses}>
            <div className="mb-5 p-3 bg-cyan-500/10 rounded-xl inline-block">
                {React.cloneElement(icon, { className: 'w-8 h-8 text-cyan-500' })}
            </div>
            <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>{description}</p>
        </div>
    ); 
}; 