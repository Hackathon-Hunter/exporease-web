"use client"

import React from 'react';

import NavbarMain from '@/components/NavbarMain';
import Hero from "./partial/Hero"
import Features from "./partial/Features"
import Analytics from "./partial/Analytics"
import Testimonial from "./partial/Testimonial"
import Join from "./partial/Join"
import Footer from "./partial/Footer"
import Brand from "./partial/Brand"

const LandingPage: React.FC = () => {
    return (
        <div className="flex flex-col lg:gap-[96px] md:gap-[64px] w-full">
            <NavbarMain />
            <Hero />
            <Features />
            <Analytics />
            <Testimonial />
            <Join />
            <Footer />
            <Brand />
        </div>
    )
}

export default LandingPage;