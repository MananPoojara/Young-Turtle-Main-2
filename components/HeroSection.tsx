"use client";
import React from "react";
import { motion } from "framer-motion";
import { VucaCycler } from "../components/ui/VucaCycler";

export default function HeroSection() {
    return (
        <section className="relative w-full h-[90vh] xl:h-[93vh] flex items-center overflow-hidden bg-[#275669]">
            {/* ===== VIDEO BACKGROUND ===== */}
            <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover opacity-60"
            >
                {/* Fallback to a dark gradient if video fails or while loading */}
                <source src="/turtle2_crop.mp4" type="video/mp4" />
            </video>

            {/* ===== CONTENT WRAPPER ===== */}
            <div className="relative z-20 px-6 w-full xl:max-w-7xl 2xl:max-w-7xl mx-auto flex flex-col justify-center h-full 2xl:-mt-60 xl:-mt-30 -mt-80 md:-mt-90 lg:-mt-10">
                {/* ===== HEADER: Redefining Market VUCA ===== */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="py-2 sm:ml-4 lg:ml-10 xl:ml-2 2xl:-ml-60 "
                >
                    {/* MAIN HEADING */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="font-serif text-white leading-[1.1] tracking-tight 
                       text-[2.75rem] md:text-6xl lg:text-7xl xl:text-[4rem] 2xl:text-[6rem] mb-1"
                    >
                        Redefining <br />
                        Market <span className="text-amber-400">VUCA</span>
                    </motion.h1>

                    {/* DYNAMIC SUBTITLE */}
                    <motion.h6
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="font-serif text-white leading-relaxed tracking-wide 
                       text-sm sm:text-xl md:text-xl lg:text-3xl xl:text-[1.00rem] 2xl:text-[2.25rem] flex flex-wrap gap-2 items-center"
                    >
                        <span className="opacity-90">With</span>
                        <VucaCycler />
                    </motion.h6>
                </motion.div>
            </div>
        </section >
    );
}