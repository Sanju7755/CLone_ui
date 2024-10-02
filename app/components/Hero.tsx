'use client'
import React from 'react';
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Particles from "@/components/magicui/particles";
import { LogoThree } from '@lobehub/ui';
import { LogoThreeProps, StoryBook, useControls, useCreateStore } from '@lobehub/ui';
import Link from 'next/link';

export const HeroSection: React.FC = () => {
    const store = useCreateStore();
    const control: LogoThreeProps | any = useControls(
        {
            size: {
                max: 640,
                min: 24,
                step: 1,
                value: 200,
            },
        },
        { store },
    );
    const { theme } = useTheme();
    const [color, setColor] = useState("#ffffff");

    useEffect(() => {
        setColor(theme === "dark" ? "#ffffff" : "#ffffff");
    }, [theme]);

    return (
        <section className="bg-gradient-to-t from-purple-800 to-black flex flex-col justify-center items-center relative  h-[500px] w-full overflow-hidden md:shadow-xl min-h-screen">
            <Particles
                className="absolute inset-0"
                quantity={100}
                ease={80}
                color={color}
                refresh
            />
            <div>
             <Link legacyBehavior href="/blog/knowledge-base">
                <a style={{ marginBottom: '16px' }} className="block">
                    <div
                        className="flex items-center justify-center space-x-2 px-4 py-2 bg-black rounded-full w-fit mx-auto shadow mt-10"
                        style={{ backgroundColor: '#181818' }} 
                    >
                        <div
                            style={{ background: '#ffcb47', color: '#000' }}
                            className="flex justify-center items-center px-2 py-1 rounded"
                        >
                            News
                        </div>
                        <div className="text-neutral-100 text-center text-sm font-medium whitespace-nowrap overflow-hidden">
                            LobeChat Knowledge Base Launch — From Now On, Every Step Counts
                        </div>
                        <span role="img">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                                fill="transparent"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-arrow-right text-neutral-100"
                            >
                                <path d="M5 12h14" />
                                <path d="m12 5 7 7-7 7" />
                            </svg>
                        </span>
                    </div>
                </a>
            </Link>
            </div>
            <div className="mt-4 justify-center text-center align-middle ">
                <h1 className=" top-1 text-4xl lg:text-5xl font-bold text-white text-center pl-2">LobeChat
                    <sup className="relative text-yellow-400 text-[0.4em] border-[1px] border-solid mx-3 border-yellow-400 bg-[rgba(255,203,71,0.1)] rounded-md px-2  mt-5 font-[500]">
                        Cloud
                    </sup>
                </h1>
                <div className="mt-4 text-5xl lg:text-9xl text-center font-[900] text-white font-harmony px-2">
                    <h1>Built for you</h1>
                </div>
                <div className="mt-4 text-5xl lg:text-9xl text-center font-[1500] text-white font-harmony px-1">
                    <h1>the Super Individual </h1>
                </div>
                <div className="mt-3 lg:mt-3 text-center text-white font-[300]">
                    <p className="px-14 lg:px-20 mt-10 text-[16px] lg:text-[20px] font-[300]">
                    Engineer Assistant functionalities tailored to your private desires, tackle challenges, boost productivity, and navigate the frontier of workflow in LobeChat.
                    </p>
                    <div className="absolute bottom-44 right-0 mt-4 mr-8 cu"><LogoThree/></div>
                    
                </div>
                <button className="mt-6 bg-white text-black font-medium py-3 px-20 rounded-md hover:bg-blue-700 text-lg cursor-move">
                    Get Started
                </button>
            </div>
            <Particles
                className="absolute inset-0"
                quantity={100}
                ease={80}
                color={color}
                refresh
            />
        </section>
    );
};
