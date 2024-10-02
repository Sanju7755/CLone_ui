'use client';
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";

const Loader2 = () => {
    const points = [
        "Easily search for information and organize materials using search plugins",
        "Multiple drawing plugins provide the best drawing models for article illustrations",
        "Generate copy with a single click and pair it with exquisite illustrations",
        "Quickly regenerate content to meet your requirements",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === points.length - 1 ? 0 : prevIndex + 1
            );
        }, 6000); // Change point every 6 seconds

        return () => clearInterval(interval);
    }, [points.length]);

    const images = [
        "https://hub-apac-1.lobeobjects.space/landing/experience/f1s1.webp",
        "https://hub-apac-1.lobeobjects.space/landing/experience/f1s2.webp",
        "https://hub-apac-1.lobeobjects.space/landing/experience/f1s3.webp",
        "https://hub-apac-1.lobeobjects.space/landing/experience/f1s4.webp"
    ];

    return (
        <div className="flex flex-col lg:flex-row bg-black min-h-screen ">


            <div className="flex flex-col justify-center items-start ml-80  lg:w-1/2 ">
                <h1 className="text-3xl font-bold text-white mb-14">From Concept to Visuals: Your Personal Editor
                            </h1>
                {points.map((point, index) => (
                    <div key={index} className="flex items-center">
                        {index === currentIndex ? (
                            // Show loading animation when this point is highlighted
                            <div
                                className="loader-ring mr-2 w-4 h-4 border-2 border-t-2 border-customGreen border-t-transparent rounded-full animate-spin"></div>
                        ) : (
                            // Show arrow mark when not highlighted
                            <span className="mr-2">➜</span>
                        )}
                        <h3
                            className={`transition-all duration-200 ${
                                index === currentIndex ? 'text-customGreen font-semibold text-xl' : 'text-gray-400 text-xl'
                            }`}
                        >
                            {point}
                        </h3>
                    </div>
                ))}
            </div>
            <div className="lg:w-1/2 flex items-center justify-center lg:pt-12 mr-80">
                <ImagesSlider className="h-[40rem]" images={images}>
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: -80,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.6,
                        }}
                        className="z-50 flex flex-col justify-center items-center bg-black"
                    >
                        <motion.p
                            className="font-bold bg-black text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                            {/* Add your desired text here if needed */}
                        </motion.p>
                    </motion.div>
                </ImagesSlider>
            </div>
        </div>
    );
};

export default Loader2;
