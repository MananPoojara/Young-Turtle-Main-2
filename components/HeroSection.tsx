"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutTextFlip } from "./ui/layout-text-flip";

export default function HeroSection() {
    return (
        <section className="relative w-full h-[90vh] xl:h-[93vh] flex items-center overflow-hidden">

            {/* ===== VIDEO BACKGROUND ===== */}
            <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/turtle2_crop.mp4" type="video/mp4" />
            </video>

            {/* DARK OCEAN OVERLAY */}

            {/* ===== CONTENT WRAPPER ===== */}
            <div className="relative z-20 px-6 max-w-7xl sm:mt-2 md:mt-2">

                {/* ===== HEADER: Redefining Market VUCA ===== */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="border-l-4 border-amber-400 pl-5 -mt-50 ml-5"
                >
                    {/* MAIN HEADING */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="font-serif text-white leading-[1.15] tracking-tight 
                       text-4xl md:text-4xl lg:text-8xl xl:text-[6rem]"
                    >
                        Redefining <br />
                        Market <span className="text-[#ffb900]">VUCA</span>
                    </motion.h1>

                    {/* ===== SUBTEXT WITH FLIP ANIMATION ===== */}
                    <div className="flex items-center mt-5 sm:mt-2 md:mt-4 xs:mt-1 gap-1 text-4xl md:text-5xl font-light tracking-wide text-white h-20">
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="font-serif"
                        >
                            With
                        </motion.span>

                        {/* The rotating words inside the header */}
                        <div className="relative">
                            <LayoutTextFlip
                                text="" // we manually show "With" above
                                words={["Vision", "Understanding", "Clarity", "Adaptability"]}
                                duration={2000}
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
