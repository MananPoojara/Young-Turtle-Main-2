import React from 'react';
import { motion } from 'framer-motion';

// Tier 1: Senior Leadership
const SENIOR_LEADERSHIP = [
    {
        name: "Dr. Elena Vance",
        role: "Chief Investment Officer",
        bio: "Former lead researcher at Renaissance Technologies. Elena specializes in high-frequency statistical arbitrage and non-linear market dynamics.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"

    },
    {
        name: "James Sterling",
        role: "Head of Quant Strategy",
        bio: "James brings 15 years of experience from Two Sigma, focusing on machine learning infrastructure and predictive signal generation.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"

    },
    {
        name: "Chetan Bhagat",
        role: "Risk Management Director",
        bio: "Previously at Citadel, Sarah architects our proprietary risk engines, ensuring convex payoff profiles across all market conditions.",
        image: "/perspective-img/chetan.png"
    },
    {
        name: "Jitin Gupta",
        role: "CTO & Systems Architect",
        bio: "David engineered low-latency trading systems for HFT firms in Chicago before leading our global infrastructure team.",
        image: "/perspective-img/jitin.png"
    }
];

// Tier 2: Core Team
const CORE_TEAM = [
    {
        name: "Rahul Soni",
        role: "Lead Quantitative Developer",
        bio: "Specializing in C++ low-latency execution engines and distributed computing grids.",
        image: "/perspective-img/rahul.png"
    },
    {
        name: "Yash Darji",
        role: "Macro Strategist",
        bio: "Integrating geopolitical risk factors and monetary policy shifts into our global macro models.",
        image: "/perspective-img/yash.png"
    },
    {
        name: "Viren Radadiya",
        role: "Head of Data Engineering",
        bio: "Architecting petabyte-scale data pipelines for real-time market data ingestion and cleaning.",
        image: "/perspective-img/viren.jpeg"
    },
    {
        name: "Dharmil Virani",
        role: "Software Engineering Lead",
        bio: "Leading our deep learning initiatives, specifically focusing on NLP for sentiment analysis.",
        image: "/perspective-img/dharmil.png"
    },
    {
        name: "Manan Pujara",
        role: "Head of AI Research",
        bio: "Leading our deep learning initiatives, specifically focusing on NLP for sentiment analysis.",
        image: "/perspective-img/Manan.jpeg"
    },
    {
        name: "Marcus Dale",
        role: "Head of Data Engineering",
        bio: "Architecting petabyte-scale data pipelines for real-time market data ingestion and cleaning.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
];

export const Team = () => {
    return (
        <section className="bg-[#f8fafc] py-24 border-t border-slate-100 relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* --- Section 1: Senior Leadership --- */}
                <div className="mb-32">
                    <div className="text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-[#fbbf24] font-bold tracking-[0.2em] uppercase text-xs mb-3 block">
                                Leadership
                            </span>
                            <h2 className="font-serif text-4xl md:text-5xl text-[#275669]">
                                Senior Leadership Team
                            </h2>
                            <div className="w-16 h-1 bg-[#275669]/10 mx-auto mt-6 rounded-full" />
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                        {SENIOR_LEADERSHIP.map((person, index) => (
                            <TeamCard key={index} person={person} index={index} />
                        ))}
                    </div>
                </div>

                {/* --- Divider --- */}
                <div className="flex items-center gap-6 mb-20 opacity-50">
                    <div className="h-[1px] bg-[#275669] flex-grow" />
                    <div className="w-2 h-2 rounded-full bg-[#275669]" />
                    <div className="h-[1px] bg-[#275669] flex-grow" />
                </div>

                {/* --- Section 2: Core Team --- */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <h3 className="font-serif text-3xl text-[#275669] mb-4">
                            Quantitative & Technology Leads
                        </h3>
                        <p className="text-slate-500 max-w-2xl mx-auto">
                            The architects behind our infrastructure and the minds behind our models.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                        {CORE_TEAM.map((person, index) => (
                            <TeamCard key={index} person={person} index={index + 4} />
                        ))}
                    </div>
                </div>

                {/* --- Section 3: Culture & Content Content --- */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative rounded-2xl overflow-hidden bg-[#275669] text-white shadow-2xl"
                >
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#fbbf24] opacity-5 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#fbbf24] opacity-5 rounded-full blur-[80px] pointer-events-none -translate-x-1/3 translate-y-1/3" />

                    <div className="relative z-10 grid lg:grid-cols-2">
                        {/* Left: Text Content */}
                        <div className="p-10 md:p-16 flex flex-col justify-center">
                            <span className="text-[#fbbf24] font-bold tracking-[0.2em] uppercase text-xs mb-6">
                                Our Culture
                            </span>
                            <h3 className="font-serif text-3xl md:text-4xl leading-tight mb-6">
                                Intellectual Honesty &<br />Radical Transparency
                            </h3>
                            <div className="space-y-6 text-slate-300 leading-relaxed font-light">
                                <p>
                                    We are a team of physicists, mathematicians, and engineers who happen to trade markets. Hierarchy here is flat; the best idea always wins, regardless of tenure or title.
                                </p>
                                <p>
                                    Our edge isn't just in our algorithms, but in our ability to debate, dissent, and refine hypotheses without ego. We operate like a research laboratory, where failure is simply a data point on the path to discovery.
                                </p>
                            </div>

                            <div className="mt-10 pt-10 border-t border-white/10 flex items-center gap-8">
                                <div>
                                    <span className="block text-3xl font-serif text-white">40+</span>
                                    <span className="text-xs text-slate-400 uppercase tracking-wider">PhD Researchers</span>
                                </div>
                                <div className="w-[1px] h-10 bg-white/20" />
                                <div>
                                    <span className="block text-3xl font-serif text-white">24/7</span>
                                    <span className="text-xs text-slate-400 uppercase tracking-wider">Market Coverage</span>
                                </div>
                            </div>
                        </div>

                        {/* Right: Visual/Image */}
                        <div className="relative min-h-[400px] lg:min-h-full">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Team collaborating"
                                className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-overlay"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#275669] to-transparent lg:via-[#275669]/50" />
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

const TeamCard = ({ person, index }: { person: any, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="group flex flex-col h-full"
        >
            {/* Image Container with Architectural Accent */}
            <div className="relative mb-8 w-full">
                {/* Decorative Offset Border (Fixed visibility) */}
                <div className="absolute top-3 -right-3 bottom-[-12px] left-3 border border-[#275669]/20 z-0 transition-all duration-300 group-hover:top-2 group-hover:-right-2 group-hover:border-[#fbbf24]/50" />

                {/* Main Image */}
                <div className="relative aspect-[3/4] overflow-hidden bg-slate-200 z-10 shadow-sm">
                    <img
                        src={person.image}
                        alt={person.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                    />
                </div>

                {/* Floating Role Badge (Overlapping Image & Content) */}
                <div className="absolute -bottom-4 left-0 bg-[#275669] py-2 px-4 z-20 shadow-lg">
                    <span className="text-[#fbbf24] text-[10px] font-bold uppercase tracking-[0.2em]">
                        {person.role}
                    </span>
                </div>
            </div>

            {/* Content Block - Always Visible */}
            <div className="pt-2 px-1 flex-grow flex flex-col">
                <h3 className="text-2xl font-serif text-[#275669] mb-3 group-hover:text-[#1a3b4b] transition-colors">
                    {person.name}
                </h3>

                {/* Decorative Line */}
                <div className="w-8 h-[1px] bg-[#fbbf24] mb-4" />

                <p className="text-slate-500 text-sm leading-relaxed font-sans">
                    {person.bio}
                </p>
            </div>
        </motion.div>
    );
};