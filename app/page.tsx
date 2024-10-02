'use client'
import { HeroSection } from '@/app/components/Hero';
import Footer from '@/app/components/footer';
import React from "react";
import { ToolsSec } from './components/tools';
import { Cards } from './components/Cards';
import { Lamp } from './components/Lamp';
import Chat from './components/Chat';
import MarqueeDemo from '../app/components/Marquee';
import Spot from './components/Spot';
import Marq2 from './components/Marq2';
import GradientButt from './components/GradientButt';
import Loader from './components/Loader';
import { Imgslide } from './components/Imgslide';
import Powered from './components/Powered';
import Trust from './components/Powered2';
import { Lamp2 } from './components/Lamp2';
import { Lamp3 } from './components/Lamp3';
import { HeroScroll } from './components/HeroScroll';
import Features from './components/Features';

const Home: React.FC = () => {
    return (
        <div>   
            <HeroSection />
            <HeroScroll/>
            <ToolsSec/>
            <Cards/>
            <Powered/>
            <Lamp/>
            <Chat/>
            <MarqueeDemo/>
            <Spot/>
            <GradientButt/>
            <Lamp2/>
            <Loader/>
            <Marq2/>
            <Lamp3/>
            <Trust/>
            <Features/>            
            <Footer />
        </div>
    );
};

export default Home;
