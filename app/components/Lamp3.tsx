"use client";
import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import ChatBox from "@/components/ChatBox2";
import ChatBox2 from "@/components/ChatBox2";

export function Lamp3() {

    const [message, setMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    };
    return (
        <div>
            <LampContainer>
                <motion.h1
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="mt-4 bg-gradient-to-br from-slate-300 to-slate-500 py-2 bg-clip-text text-center font-harmony text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                >
                    User-Centric Community Engagement
                </motion.h1>
            </LampContainer>
            <div className="flex  space-x-3 bg-black p-4 w-full mx-auto">
               <ChatBox2/>  
            </div>   
        </div>

    );
}
