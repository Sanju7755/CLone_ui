'use client'
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../../components/ui/images-slider";

const Loader = () => {
  const points = [
    "Upload PDFs and have direct conversations with your study materials",
    "Academic assistant searches for scientific literature for you",
    "Customize study assistants to meet personalized learning preferences",
    "Achieve foreign language translation and read aloud",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === points.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000); // Change point every 2 seconds

    return () => clearInterval(interval);
  }, [points.length]);

  const images = [
    "https://hub-apac-1.lobeobjects.space/landing/experience/f3s1.webp",
    "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <div className="px-12 flex flex-col space-x-12 lg:flex-row space-y-1 bg-black pb-4">
      <div className="pt-0">
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-white">Master Global Languages: Your Personal Learning Companion</h1>
        {points.map((point, index) => (
          <div key={index} className="flex items-center">
            {index === currentIndex ? (
              // Show loading animation when this point is highlighted
              <div className="loader-ring mr-2 w-4 h-4 border-2 border-t-2 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
            ) : (
              // Show arrow mark when not highlighted
              <span className="mr-2">➜</span>
            )}
            <h3
              className={`transition-all duration-200 ${
                index === currentIndex ? 'text-pink-500 font-semibold text-xl' : 'text-gray-400 text-xl'
              }`}
            >
              {point}
            </h3>
          </div>
        ))}
      </div>
    </div>
      </div>
    <div className="lg:pt-40">
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
        <motion.p className="font-bold bg-black text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">  
        </motion.p>
        
      </motion.div>
    </ImagesSlider>
    </div>
    </div>
    
  );
};

export default Loader;
