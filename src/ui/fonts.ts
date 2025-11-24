import {  Inter, Inter_Tight } from 'next/font/google';



export const inter = Inter({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-inter",
});

export const interTight = Inter_Tight({
    subsets: ["latin"],
    weight: ["600", "700", "800"],
    variable: "--font-inter-tight",
});

export const fontClassNames = `${inter.className} ${interTight.className}`