"use client";
import React from "react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser, IconChevronDown } from "@tabler/icons-react";
import Link from "next/link";
import Particles from "@/components/magicui/particles";

export function FloatingNavDemo() {
    const { theme } = useTheme();
    const [color, setColor] = useState("#ffffff");

    useEffect(() => {
        setColor(theme === "dark" ? "#ffffff" : "#ffffff");
    }, [theme]);
    const navItems = [
        {
            name:
                    <img
                        alt="LobeHub"
                        title="Home"
                        src="https://camo.githubusercontent.com/9f8009259566b4b14c758bf0c1b1fd98126fa0204e3383c88da90937feeb2cf1/68747470733a2f2f72656769737472792e6e706d6d6972726f722e636f6d2f406c6f62656875622f6173736574732d6c6f676f2f312e302e302f66696c65732f6173736574732f6c6f676f2d33642e77656270"
                        width={36}
                        height={36}
                        className="block"
                    />,
            link: "/home"
        },
        {
            name: "Features",
            link: "/features",
            icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white"/>,
        },
        {
            name: "Pricing",
            link: "/pricing",
            icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white"/>,
        },
        {
            name: <p className="mb-3">Market <span className="text-3xl">⌄</span></p>,
            link: "/market",
            icon: (
                <div className="flex items-center">
                    <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white"/>
                    <IconChevronDown className="h-4 w-4 ml-1 text-neutral-500 dark:text-white" />
                </div>
            ),
        },
        {
            name: "Docs",
            link: "/docs",
            icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Blog",
            link: "/blog",
            icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                >
                    <path d="M5 8l6 6" />
                    <path d="M4 14l6-6 2-3" />
                    <path d="M2 5h12" />
                    <path d="M7 2h1" />
                    <path d="m22 22-5-10-5 10" />
                    <path d="M14 18h6" />
                </svg>
            ),
            link: "#", // Placeholder, add link if necessary
        },
        {
            name: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                >
                    <path
                        d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
                    />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
            ),
            link: "https://github.com/lobehub/lobe-chat",
        },
    ];

    return (
        <div className="relative w-full">
            <FloatingNav navItems={navItems} />
            <Particles
                className="absolute inset-0"
                quantity={100}
                ease={80}
                color={color}
                refresh
            />
        </div>
    );
}


