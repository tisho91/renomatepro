'use client'
import React, { useCallback, useEffect, useState } from 'react';
import { Header } from "@/components/landing/layout/Header";
import { Footer } from "@/components/landing/layout/Footer";
import { HeroSection } from "@/components/landing/sections/HeroSection";
import { FeaturesSection } from "@/components/landing/sections/FeaturesSection";
import { TestimonialSection } from "@/components/landing/sections/TestimonialSection";
import { RolesSection } from "@/components/landing/sections/RolesSection";
import { FinalCTASection } from "@/components/landing/sections/FinalCTASection";


export const Landing = () => {



    return (
        <div className={`min-h-screen bg-main font-sans transition-colors duration-500`}>
            <Header />

            <main className="pt-24">

                <HeroSection/>
            {/*    /!* 2. FEATURES *!/*/}
                <FeaturesSection/>

            {/*    /!* 3. SOCIAL PROOF *!/*/}
                <TestimonialSection/>

            {/*    /!* 4. ROLE SELECTION *!/*/}
                <RolesSection/>

            {/*    /!* 6. FINAL CTA (SIMPLIFIED) *!/*/}
                <FinalCTASection/>
            </main>

            <Footer />
        </div>
    );
};

