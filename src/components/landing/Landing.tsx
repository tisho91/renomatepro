'use client'
import React from 'react';
import { Header } from "@/components/landing/layout/Header";
import { Footer } from "@/components/landing/layout/Footer";
import { HeroSection } from "@/components/landing/sections/HeroSection";
import { FeaturesSection } from "@/components/landing/sections/FeaturesSection";
import { TestimonialSection } from "@/components/landing/sections/TestimonialSection";
import { RolesSection } from "@/components/landing/sections/RolesSection";
import { FinalCTASection } from "@/components/landing/sections/FinalCTASection";
import { useScrollToElement } from "@/hooks/useScrollToElement";


export const Landing = () => {

    const { ref: featuresRef, scrollTo: scrollToFeatures } = useScrollToElement();
    const { ref: rolesRef, scrollTo: scrollToRoles } = useScrollToElement();
    const { ref: finalCTARef, scrollTo: scrollToFinalCta } = useScrollToElement();
    const { ref: testimonialsRef, scrollTo: scrollToTestimonials } = useScrollToElement();
    const scrollHandlers = { scrollToFeatures, scrollToRoles, scrollToFinalCta, scrollToTestimonials }
    return (
        <div className={`min-h-screen bg-main font-sans transition-colors duration-500`}>
            <Header scrollHandlers={scrollHandlers}/>

            <main className="pt-24">
                <HeroSection/>
                <FeaturesSection ref={featuresRef}/>
                <TestimonialSection ref={testimonialsRef}/>
                <RolesSection scrollToFinalCta={scrollToFinalCta} ref={rolesRef}/>
                <FinalCTASection ref={finalCTARef}/>
            </main>

            <Footer/>
        </div>
    );
};

