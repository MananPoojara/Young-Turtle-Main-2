import React from 'react';
import { motion } from 'framer-motion';

const PHILOSOPHY_POINTS = [
    {
        id: "01",
        title: "Relentless Pattern Recognition",
        description: "We analyze vast datasets to identify recurring market behaviors. By spotting trends before they become obvious, we position ourselves ahead of the curve."
    },
    {
        id: "02",
        title: "Mathematics Over Intuition",
        description: "Gut feelings are often biased and unreliable in high-stakes environments. We rely strictly on probability, statistical models, and quantitative rigor."
    },
    {
        id: "03",
        title: "Exploit, Don't Predict",
        description: "Prediction is a fool's errand in a chaotic system. Instead, we identify structural inefficiencies and systematically exploit them for consistent yield."
    },
    {
        id: "04",
        title: "Scientific Rigor & Testing",
        description: "Every hypothesis is subjected to brutal stress testing. Only strategies that survive historical simulations and forward-testing make it to production."
    },
    {
        id: "05",
        title: "Secrecy + Excellence",
        description: "We operate in silence to protect our edge. Excellence is not just about results, but about maintaining the discipline to keep our methods opaque."
    },
    {
        id: "06",
        title: "Scale with Discipline",
        description: "Growth without structure leads to collapse. We scale our operations only when our infrastructure and risk management protocols are bulletproof."
    }
];

export const OurPhilosophy = () => {
    return (
        <section className="relative bg-[#ffffff] overflow-hidden flex items-center justify-center -mt-20 py-20 min-h-screen">

            {/* Ambient Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#275669] rounded-full opacity-20 animate-pulse" />
                <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-[#275669] rounded-full opacity-10 animate-pulse delay-700" />
            </div>

            <div className="relative z-10 container mx-auto px-6 h-full flex flex-col items-center justify-center">

                {/* --- DESKTOP ORBITAL LAYOUT (lg+) --- 
                    Changed from md:block to lg:block to ensure it only shows when there is enough width.
                    Added scaling classes to fit content on lg and xl screens.
                */}
                <div className="hidden lg:flex items-center justify-center relative w-full h-[750px]">
                    
                    {/* Scaling Wrapper: 
                        scale-75 for lg (1024px)
                        scale-90 for xl (1280px)
                        scale-100 for 2xl (1536px) 
                    */}
                    <div className="relative w-[1000px] h-[750px] scale-[0.75] xl:scale-[0.9] 2xl:scale-100 transition-transform duration-500 origin-center">

                        {/* CENTER SUN: 'OUR PHILOSOPHY' */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10 pointer-events-none">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="relative"
                            >
                                {/* Decorative Central Ring */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-[#275669] rounded-full animate-[spin_60s_linear_infinite] opacity-30" />

                                {/* Main Title */}
                                <h2 className="font-serif text-5xl lg:text-6xl text-[#275669] tracking-tight leading-tight select-none">
                                    Our<br />
                                    <span className="text-[#fbbf24] italic font-light">Philosophy</span>
                                </h2>
                                <div className="w-16 h-1 bg-[#275669] mx-auto mt-4 rounded-full" />
                            </motion.div>
                        </div>

                        {/* ORBITING NODES */}
                        {PHILOSOPHY_POINTS.map((item, index) => {
                            const isRightSide = index < 3;
                            // Increased offsets slightly to accommodate text blocks without crowding
                            const yOffsets = [-240, 0, 240, 240, 0, -240]; 
                            const xOffsets = [380, 480, 380, -380, -480, -380];
                            const x = xOffsets[index];
                            const y = yOffsets[index];

                            return (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, x: 0, y: 0 }}
                                    whileInView={{ opacity: 1, x: x, y: y }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.8,
                                        delay: 0.2 + (index * 0.1),
                                        type: "spring",
                                        stiffness: 50
                                    }}
                                    className="absolute top-1/2 left-1/2 w-80 -mt-6 -ml-40 flex items-center z-20"
                                    style={{
                                        // If right side, content is to the right, connector to left.
                                        justifyContent: isRightSide ? 'flex-start' : 'flex-end',
                                    }}
                                >
                                    {/* Connector Line */}
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: 80 }}
                                        transition={{ delay: 0.8 + (index * 0.1), duration: 0.5 }}
                                        className={`absolute top-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#275669] to-transparent pointer-events-none
                                            ${isRightSide ? '-left-[60px]' : '-right-[60px]'}
                                        `}
                                    />

                                    {/* Static Content Wrapper */}
                                    <div className={`
                                        flex flex-col transition-all duration-300
                                        ${isRightSide ? 'items-start text-left' : 'items-end text-right'}
                                    `}>
                                        <div className="text-[#fbbf24] font-bold font-mono text-sm mb-1 tracking-widest opacity-80">
                                            {item.id}
                                        </div>
                                        
                                        <h3 className="text-xl lg:text-2xl text-[#275669] font-serif font-medium leading-tight mb-3">
                                            {item.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-sm text-slate-500 leading-relaxed font-sans max-w-[260px]">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* --- MOBILE/TABLET STACK LAYOUT (< lg) --- 
                    Visible on all screens smaller than lg (1024px)
                */}
                <div className="lg:hidden flex flex-col gap-10 w-full py-10 relative">

                    {/* Center Line Decoration */}
                    <div className="absolute left-[22px] top-40 bottom-20 w-[1px] bg-[#275669]/30" />

                    <div className="text-center mb-4">
                        <h2 className="font-serif text-4xl text-[#275669]">
                            Our <span className="text-[#fbbf24] italic">Philosophy</span>
                        </h2>
                        <div className="w-16 h-1 bg-[#275669] mx-auto mt-4 rounded-full" />
                    </div>

                    {PHILOSOPHY_POINTS.map((item, index) => (
                        <div key={item.id} className="flex gap-6 items-start pl-1 relative">
                             {/* Dot */}
                            <div className="relative z-10 w-9 h-9 rounded-full border border-[#275669] bg-[#275669] transition-colors duration-300 flex items-center justify-center shrink-0">
                                <div className="w-2 h-2 rounded-full bg-[#fbbf24]" />
                            </div>

                            {/* Text */}
                            <div className="pt-1 pr-4">
                                <span className="text-[#275669] text-xs font-bold tracking-widest mb-1 block">
                                    {item.id}
                                </span>
                                <h3 className="text-2xl text-[#275669] font-serif leading-tight mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed border-l-2 border-[#fbbf24] pl-3 py-1">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};