"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";


export function HeroScroll() {
    return (
        <div className="bg-gradient-to-t from-black to-purple-800 flex flex-col overflow-hidden">
            <ContainerScroll
            >
                
                <video
                    src="https://hub-apac-1.lobeobjects.space/landing/3.webm" // Replace with your video link
                    height={720}
                    width={1400}
                    className="mx-auto rounded-2xl object-cover h-full object-left-top"
                    autoPlay
                    loop
                    muted
                    playsInline
                    draggable={false}
                />
                
            </ContainerScroll>
            
        </div>
    );
}