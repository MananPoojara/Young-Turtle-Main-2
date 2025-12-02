"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export const LayoutTextFlip = ({
    text = "With,",
    words = ["Vision", "Understanding", "Clarity", "Agility"],
    duration = 2500,
}: {
    text: string;
    words: string[];
    duration?: number;
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, duration);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex items-baseline gap-1">

            {/* Left static text "With," */}
            <motion.span
                layoutId="subtext"
                className="text-xl md:text-2xl lg:text-3xl font-serif font-light text-white tracking-wide"
            >
                {text}
            </motion.span>

            {/* Gold rotating words */}
            <motion.span
                layout
                className="relative w-fit overflow-hidden 
        text-[#ffb900] font-serif 
        text-3xl md:text-4xl lg:text-5xl font-light tracking-wide"
            >
                <AnimatePresence mode="popLayout">
                    <motion.span
                        key={currentIndex}
                        initial={{ y: -40, filter: "blur(0px)" }}
                        animate={{
                            y: 0,
                            filter: "blur(0px)",
                        }}
                        exit={{ y: 40, filter: "blur(20px)", opacity: 0 }}
                        transition={{
                            duration: 0.55,
                            ease: "easeOut",
                        }}
                        className={cn("inline-block whitespace-nowrap")}
                    >
                        {words[currentIndex]}
                    </motion.span>
                </AnimatePresence>
            </motion.span>

            {/* Static end text ", and Adaptability" */}
            <span className="text-2xl md:text-2xl lg:text-3xl font-serif font-light text-white tracking-wide">
                {currentIndex === words.length - 1 ? "" : ""}
            </span>
        </div>
    );
};
