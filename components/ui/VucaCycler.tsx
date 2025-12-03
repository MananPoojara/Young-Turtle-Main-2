"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


const WORDS = [
    { text: "Vision", color: "text-amber-400" },
    { text: "Understanding", color: "text-amber-400" },
    { text: "Clarity", color: "text-amber-400" },
    { text: "Adaptability", color: "text-amber-400" },
];

export const VucaCycler = () => {
    const [visibleCount, setVisibleCount] = useState(0);
    const [isResetting, setIsResetting] = useState(false);

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;

        if (isResetting) {
            // Pause briefly after showing all, then reset
            timeout = setTimeout(() => {
                setVisibleCount(0);
                setIsResetting(false);
            }, 2000); // How long the full sentence stays visible
        } else {
            if (visibleCount < WORDS.length) {
                timeout = setTimeout(() => {
                    setVisibleCount((prev) => prev + 1);
                }, 800);
            } else {
                setIsResetting(true);
            }
        }

        return () => clearTimeout(timeout);
    }, [visibleCount, isResetting]);

    return (
        <span className="inline-flex flex-wrap gap-x-2 gap-y-1">
            <AnimatePresence mode="wait">
                {WORDS.map((word, index) => {
                    const isVisible = index < visibleCount;
                    const isLast = index === WORDS.length - 1;

                    return (
                        isVisible && (
                            <motion.span
                                key={word.text}
                                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, y: -10, filter: "blur(5px)" }}
                                transition={{
                                    duration: 0.6,
                                    ease: "easeOut",
                                }}
                                className={`font-medium tracking-wide ${word.color}`}
                            >
                                {word.text}
                                {!isLast && <span className="text-white opacity-80">,</span>}
                            </motion.span>
                        )
                    );
                })}
            </AnimatePresence>

        </span>
    );
};