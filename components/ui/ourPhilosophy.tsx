// import React from 'react';
// import { motion } from 'framer-motion';

// const PHILOSOPHY_POINTS = [
//     {
//         id: "01",
//         title: "Relentless Pattern Recognition",
//         content: "We believe markets aren't random—they're patterns waiting to be decoded. Like Jim Simons and Renaissance Technologies, we obsessively search for hidden signals in data that others overlook, transforming noise into actionable intelligence."
//     },
//     {
//         id: "02",
//         title: "Mathematics Over Intuition",
//         content: "Gut feelings lose to algorithms. We build systematic, quantifiable approaches grounded in rigorous analysis rather than emotional decision-making. The numbers don't lie; they reveal truth."
//     },
//     {
//         id: "03",
//         title: "Exploit, Don't Predict",
//         content: "We don't forecast the future—we identify temporary mispricings and inefficiencies that already exist. Small, repeatable edges compound into extraordinary returns."
//     },
//     {
//         id: "04",
//         title: "Scientific Rigor & Testing",
//         content: "Every hypothesis is tested. Every strategy is backtested and stress-tested. We operate like physicists in a laboratory, not philosophers in an armchair."
//     },
//     {
//         id: "05",
//         title: "Secrecy + Excellence",
//         content: "Our best ideas stay private. We compete through superior execution and innovation, not through broadcasting our methods. Silence is strategic."
//     },
//     {
//         id: "06",
//         title: "Scale with Discipline",
//         content: "Growth without losing our edge. We expand carefully, ensuring our systematic approach remains effective as capital increases."
//     }
// ];

// export const OurPhilosophy = () => {
//     return (
//         // Changed main background to Teal #275669 to be 'not dark' relative to black, but colorful
//         <section className="relative w-full py-24 md:py-32 bg-[#275669] overflow-hidden">

//             {/* Background Decoration: Gold Circular Gradients */}
//             <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#fbbf24] opacity-10 rounded-full blur-[120px] pointer-events-none" />
//             <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#fbbf24] opacity-5 rounded-full blur-[100px] pointer-events-none" />

//             <div className="relative z-10 max-w-7xl mx-auto px-6">

//                 {/* Header */}
//                 <div className="mb-20">
//                     <motion.div
//                         initial={{ opacity: 0, x: -20 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         className="flex items-center gap-4 mb-4"
//                     >
//                         <div className="h-[2px] w-12 bg-[#fbbf24]" />
//                         <span className="text-[#fbbf24] font-bold tracking-[0.2em] uppercase text-sm">Core Principles</span>
//                     </motion.div>

//                     <motion.h2
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ delay: 0.1 }}
//                         className="font-serif text-4xl md:text-6xl text-white font-medium"
//                     >
//                         Our Philosophy
//                     </motion.h2>
//                 </div>

//                 {/* Grid - Using White cards for high contrast (Light Mode within Teal) */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {PHILOSOPHY_POINTS.map((item, index) => (
//                         <Card key={item.id} item={item} index={index} />
//                     ))}
//                 </div>

//             </div>
//         </section>
//     );
// };

// const Card = ({ item, index }: { item: any, index: number }) => {
//     return (
//         <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
//             className="group relative h-full"
//         >
//             {/* 
//                 Card Container:
//                 White Background
//                 Hover Effect: Slight lift and shadow increase
//             */}
//             <div className="
//                 relative h-full
//                 bg-white
//                 p-8
//                 rounded-sm
//                 shadow-[0_10px_30px_rgba(0,0,0,0.1)]
//                 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]
//                 group-hover:-translate-y-2
//                 transition-all duration-300
//                 overflow-hidden
//             ">

//                 {/* Top Accent Line (Teal by default, Gold on hover) */}
//                 <div className="absolute top-0 left-0 w-full h-1 bg-[#275669] group-hover:bg-[#fbbf24] transition-colors duration-300" />

//                 {/* Content */}
//                 <div className="relative z-10">
//                     {/* Number Circle */}
//                     <div className="mb-6 flex items-center justify-between">
//                         <div className="
//                             w-12 h-12 
//                             rounded-full 
//                             border-2 border-[#275669]/10 
//                             flex items-center justify-center
//                             text-[#275669] font-bold font-serif text-lg
//                             group-hover:border-[#fbbf24] group-hover:bg-[#fbbf24] group-hover:text-white
//                             transition-all duration-300
//                         ">
//                             {item.id}
//                         </div>

//                         {/* Subtle decorative icon */}
//                         <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-4 group-hover:translate-x-0">
//                             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2">
//                                 <path d="M5 12h14M12 5l7 7-7 7" />
//                             </svg>
//                         </div>
//                     </div>

//                     <h3 className="text-2xl font-serif text-[#275669] mb-4 leading-tight group-hover:text-black transition-colors duration-300">
//                         {item.title}
//                     </h3>

//                     <p className="text-[#5b727d] font-sans text-sm md:text-base leading-relaxed">
//                         {item.content}
//                     </p>
//                 </div>

//                 {/* Background Watermark Number (Big & Subtle) */}
//                 <span className="
//                     absolute -bottom-8 -right-4 
//                     text-[140px] leading-none font-serif font-bold 
//                     text-[#f1f5f9] 
//                     group-hover:text-[#fffbeb]
//                     z-0 pointer-events-none transition-colors duration-300
//                 ">
//                     {item.id}
//                 </span>

//             </div>
//         </motion.div>
//     );
// };




// SECOND THEME 

import React from 'react';
import { motion } from 'framer-motion';

const PHILOSOPHY_POINTS = [
    { id: "01", title: "Relentless Pattern Recognition" },
    { id: "02", title: "Mathematics Over Intuition" },
    { id: "03", title: "Exploit, Don't Predict" },
    { id: "04", title: "Scientific Rigor & Testing" },
    { id: "05", title: "Secrecy + Excellence" },
    { id: "06", title: "Scale with Discipline" }
];

export const OurPhilosophy = () => {
    return (
        <section className="relative  bg-[#ffffff] overflow-hidden flex items-center justify-center py-20">

            {/* Ambient Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#275669] rounded-full opacity-20 animate-pulse" />
                <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-[#275669] rounded-full opacity-10 animate-pulse delay-700" />
            </div>

            <div className="relative z-10 container mx-auto px-6 h-full flex flex-col items-center justify-center">

                {/* --- DESKTOP ORBITAL LAYOUT (md+) --- */}
                <div className="hidden md:block relative w-[800px] h-[600px]">

                    {/* CENTER SUN: 'OUR PHILOSOPHY' */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-20">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative"
                        >
                            {/* Decorative Central Ring */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-[#275669] rounded-full animate-[spin_60s_linear_infinite]" />

                            {/* Main Title */}
                            <h2 className="font-serif text-5xl lg:text-6xl text-[#275669] tracking-tight leading-tight">
                                Our<br />
                                <span className="text-[#fbbf24] italic font-light">Philosophy</span>
                            </h2>
                            <div className="w-16 h-1 bg-[#275669] mx-auto mt-4 rounded-full" />
                        </motion.div>
                    </div>

                    {/* ORBITING NODES */}
                    {PHILOSOPHY_POINTS.map((item, index) => {
                        // Calculate positions based on 6 items distributed in an ellipse
                        // 3 on left, 3 on right for readability

                        // Right Side (0, 1, 2) | Left Side (3, 4, 5)
                        const isRightSide = index < 3;

                        // Vertical Spread
                        // 0 & 5: Top
                        // 1 & 4: Middle
                        // 2 & 3: Bottom
                        const yOffsets = [-200, 0, 200, 200, 0, -200];
                        const xOffsets = [350, 420, 350, -350, -420, -350];

                        const x = xOffsets[index];
                        const y = yOffsets[index];

                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, x: 0, y: 0 }} // Start from center
                                whileInView={{ opacity: 1, x: x, y: y }} // Explode outwards
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.2 + (index * 0.1),
                                    type: "spring",
                                    stiffness: 50
                                }}
                                className="absolute top-1/2 left-1/2 w-64 -mt-6 -ml-32 flex items-center"
                                style={{
                                    justifyContent: isRightSide ? 'flex-start' : 'flex-end',
                                    textAlign: isRightSide ? 'left' : 'right'
                                }}
                            >
                                {/* Connector Line (Visual only) */}
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: 80 }}
                                    transition={{ delay: 0.8 + (index * 0.1), duration: 0.5 }}
                                    className={`absolute top-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#275669] to-transparent
                                        ${isRightSide ? '-left-[80px]' : '-right-[80px]'}
                                    `}
                                />

                                {/* Node Content */}
                                <div className={`flex flex-col ${isRightSide ? 'items-start' : 'items-end'}`}>
                                    <div className="text-[#fbbf24] font-bold font-mono text-sm mb-1 tracking-widest opacity-80">
                                        {item.id}
                                    </div>
                                    <h3 className="text-xl lg:text-2xl text-[#275669] font-serif font-medium leading-tight">
                                        {item.title}
                                    </h3>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* --- MOBILE STACK LAYOUT (< md) --- */}
                <div className="md:hidden flex flex-col gap-12 w-full py-10 relative">

                    {/* Center Line */}
                    <div className="absolute left-[22px] top-40 bottom-20 w-[1px] bg-[#275669]" />

                    <div className="text-center mb-8">
                        <h2 className="font-serif text-4xl text-[#275669]">
                            Our <span className="text-[#fbbf24] italic">Philosophy</span>
                        </h2>
                        <div className="w-16 h-1 bg-[#275669] mx-auto mt-4 rounded-full" />

                    </div>

                    {PHILOSOPHY_POINTS.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex gap-6 items-start pl-1 relative"
                        >
                            {/* Dot */}
                            <div className="relative z-10 w-9 h-9 rounded-full bg-[#275669] border border-[#275669] flex items-center justify-center shrink-0">
                                <div className="w-2 h-2 bg-[#fbbf24] rounded-full" />
                            </div>

                            {/* Text */}
                            <div className="pt-1">
                                <span className="text-[#275669] text-xs font-bold tracking-widest mb-1 block">
                                    {item.id}
                                </span>
                                <h3 className="text-2xl text-[#275669] font-serif leading-tight">
                                    {item.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};
