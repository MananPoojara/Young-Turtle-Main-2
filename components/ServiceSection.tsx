'use client'
import React, { useState, useEffect, useRef } from 'react'
import { Gem, Minimize2, Mountain, Sun, } from 'lucide-react'
import { NewspaperSection } from './NewspaperSection'
import { motion } from 'framer-motion';


const perspectivesData = [
    {
        id: 1,
        name: 'Ray Dalio',
        title: "There Ain't No Such Thing as a Free Lunch",
        date: 'August 11, 2025',
        content:
            "Diversification remains the closest thing to a 'free lunch' in investing, but even it comes with trade-offs in a world of rising U.S. debt exceeding $37 trillion. Recent analysis from Bridgewater shows that buffered strategies, promising downside protection without full cost, often underperform simpler diversified portfolios empirically, delivering lower risk-adjusted returns over multi-year cycles. Investors chasing complexity for comfort end up paying hidden fees in opportunity costs, as uncorrelated assets like gold—now recommended at 10-15% allocation—provide genuine hedging without illusory guarantees.",
        image: '/perspective-img/RayDalio.jpg',
        slug: 'ray',
    },
    {
        id: 2,
        name: 'John Paulson',
        title: 'The Future of Sustainable Investing',
        date: 'August 8, 2025',
        content:
            "Sustainable investing has shifted from niche to mainstream, with ESG factors now driving $4.9 billion in net inflows to global funds in Q2 2025 alone, reversing earlier outflows. Paulson & Co.'s recent stakes in critical minerals like antimony via Perpetua Resources highlight how companies advancing green supply chains—such as the $425 million-financed Stibnite Gold Project—yield lower volatility and superior long-term performance. Gold mining projects like Donlin Gold, where Paulson acquired a 40% interest in a $1 billion deal, exemplify sustainable practices that align environmental responsibility with robust financial returns amid the energy transition.",
        image: '/perspective-img/JohnPaulson.webp',
        slug: 'john',
    },
    {
        id: 3,
        name: 'Stanley Druckenmiller',
        title: 'Navigating Market Volatility in 2025',
        date: 'August 5, 2025',
        content:
            "2025's market swings, fueled by sticky inflation and slower U.S. growth, underscore the need for high-conviction bets in volatile sectors like biotech, where Duquesne's portfolio allocates 30% to names like Natera (up 48% YTD). Disciplined strategies involve rapid position sizing—exiting Nvidia and Eli Lilly while entering cheaper Magnificent Seven stocks—to capitalize on earnings hand-offs from cyclicals to innovators. Maintaining a long-term view amid 56% portfolio turnover helps mitigate random volatility, echoing Druckenmiller's 30-year streak of positive annual returns through macro hedging.",
        image: '/perspective-img/StanleyDruckenmiller.webp',
        slug: 'stanley',
    },
    {
        id: 4,
        name: 'Jim Simons',
        title: 'The Signal and the Noise: Why Volatility Is Our Friend',
        date: 'August 5, 2025',
        content:
            "Renaissance Technologies' models thrive on reasonable volatility, sifting through historical data for nonrandom anomalous patterns that emerge during turbulent periods like 2025's tariff-induced swings and quant drawdowns. By maintaining market neutrality and diversifying across thousands of small positions in liquid assets—from AI leaders like Palantir and NVIDIA to blue-chips—the firm minimizes drawdown risks while harvesting subtle edges in noise. Long-term success demands continuous adaptation, as signals erode over time; in 2025's environment, this means layering statistical tests on economic drivers to exploit inefficiencies without emotional bias or overexposure.",
        image: '/perspective-img/JamesHarrisSimons.jpg',
        slug: 'jim',
    },
    {
        id: 5,
        name: 'Ken Griffin',
        title: 'Volatility Is the Price of Admission for Superior Returns',
        date: 'August 5, 2025',
        content:
            "Citadel's multi-strategy funds posted gains through H1 2025's volatility—Wellington up 2.5%, tactical trading at 6.1%—by layering hedges and reducing risk swiftly, as seen in the 2020 COVID drawdown. Griffin's view of the U.S. economy on a 'sugar high' from stimulus prompts de-risking via gold ETFs, now outperforming Bitcoin and Nvidia by wide margins, signaling concerns over sovereign debt and inflation above 2026 forecasts. Opportunities arise for those blending equities, quant models, and fixed income to navigate the rally's fragility while preserving capital in uncertain terrain.",
        image: '/perspective-img/kengriffin.jpg',
        slug: 'ken',
    },
]

const valuesData = [
    {
        id: 1,
        title: "Risk & Resilience",
        description: "We don't fear volatility; we harness it. Resilience isn't just about surviving drawdowns—it's about having the conviction to stick to the model when the noise is deafening.",
        icon: Mountain,
    },
    {
        id: 2,
        title: "Long-term Optimism",
        description: "We bet on human ingenuity. While markets fluctuate daily, the trajectory of innovation is upward. We structure our systems to capture this compounding growth over decades.",
        icon: Sun,
    },
    {
        id: 3,
        title: "Power of Simplicity",
        description: "Complexity is a liability. We strip away the unnecessary, believing that the most robust trading signals are often the simplest ones, executed with flawless precision.",
        icon: Minimize2,
    },
    {
        id: 4,
        title: "Relentless Excellence",
        description: "Innovation has no finish line. We are a team of perfectionists, constantly refining our code, data, and infrastructure in a never-ending pursuit of the theoretical limit.",
        icon: Gem,
    }
]
const RevealSection = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1, rootMargin: "50px" }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className}`}
        >
            {children}
        </div>
    );
};

const NODES = [
    { id: 1, x: 850, y: 120 }, // Future (Right)
    { id: 2, x: 680, y: 180 },
    { id: 3, x: 500, y: 100 },
    { id: 4, x: 320, y: 160 },
    { id: 5, x: 150, y: 130 }, // Past (Left)
];

// Define paths to draw. We draw from higher index (right) to lower index (left)
// to visually simulate looking backward.
const PATHS = [
    { start: 0, end: 1 }, // Node 1 -> Node 2
    { start: 1, end: 2 }, // Node 2 -> Node 3
    { start: 2, end: 3 }, // Node 3 -> Node 4
    { start: 3, end: 4 }, // Node 4 -> Node 5
    // Add a couple of subtle cross-connections for geometric depth
    { start: 0, end: 2 },
    { start: 2, end: 4 },
];

const ServiceSection = () => {
    const [activeValueIndex, setActiveValueIndex] = useState(0);

    return (
        <main className='min-h-screen'>
            {/* Hero Section */}
            <section className="relative w-full py-28 overflow-hidden bg-[#275669] flex items-center justify-center border-t border-white/[0.03]">

                {/* Minimal Professional Pattern: Reverse Constellation */}
                <div className="absolute inset-0 w-full h-full pointer-events-none opacity-60">
                    <svg className="w-full h-full" viewBox="0 0 1000 300" preserveAspectRatio="xMidYMid slice">
                        <defs>
                            <linearGradient id="gold-fade" x1="1" y1="0" x2="0" y2="0">
                                <stop offset="0%" stopColor="rgba(251, 191, 36, 0.0)" />
                                <stop offset="50%" stopColor="rgba(251, 191, 36, 0.3)" />
                                <stop offset="100%" stopColor="rgba(251, 191, 36, 0.0)" />
                            </linearGradient>
                        </defs>

                        {/* Draw Lines - Animating from Right (Future) to Left (Past) */}
                        {PATHS.map((path, i) => {
                            const startNode = NODES[path.start];
                            const endNode = NODES[path.end];
                            return (
                                <motion.line
                                    key={`path-${i}`}
                                    x1={startNode.x}
                                    y1={startNode.y}
                                    x2={endNode.x}
                                    y2={endNode.y}
                                    stroke="#fbbf24"
                                    strokeWidth="0.5"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    whileInView={{ pathLength: 1, opacity: 0.3 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{
                                        duration: 2.5,
                                        delay: i * 0.3, // Stagger drawing
                                        ease: "easeInOut"
                                    }}
                                />
                            );
                        })}

                        {/* Nodes - Subtle pulsating dots */}
                        {NODES.map((node, i) => (
                            <motion.g key={`node-${i}`}>
                                {/* Inner Dot */}
                                <motion.circle
                                    cx={node.x}
                                    cy={node.y}
                                    r="2.5"
                                    fill="#fbbf24"
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 0.8, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.2 }}
                                />
                                {/* Outer Glow Ring */}
                                <motion.circle
                                    cx={node.x}
                                    cy={node.y}
                                    r="8"
                                    stroke="#fbbf24"
                                    strokeWidth="0.5"
                                    fill="none"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 0.15, scale: 1.2 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: i * 0.2 + 0.2 }}
                                />
                            </motion.g>
                        ))}
                    </svg>
                </div>

                {/* Content - One Liner */}
                <div className="relative z-20 container mx-auto px-6 text-center">
                    <motion.h2
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                        className="
                        font-serif 
                        text-lg 2xl:text-4xl xl:text-3xl sm:text-xl md:text-2xl lg:text-3xl 
                        text-white
                        font-medium 
                        tracking-wide
                        max-w-5xl mx-auto
                    "
                    >
                        “You can’t connect the dots looking forward; you can only connect them <span className="text-[#fbbf24] font-normal italic">looking backward</span>.”
                    </motion.h2>
                </div>
            </section>

            {/* Core Philosophy */}
            {/* <section className='py-8 sm:py-12 lg:py-16 relative'>
                <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                    <div className='relative rounded-3xl overflow-hidden '>
                        <div className='bg-[#275669] relative z-10 flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-6 sm:gap-8 lg:gap-12 p-6 sm:p-8 lg:p-12 xl:p-16'>
                            <div className='w-full lg:w-64 xl:w-80 lg:flex-shrink-0 text-center lg:text-left flex items-center justify-center lg:justify-start'>
                                <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight'>
                                    Our
                                    <br />
                                    <span className='text-amber-400'>Philosophy</span>
                                </h2>
                            </div>

                            <div className='bg-amber-400 rounded-full w-full h-[3px] lg:w-1 lg:h-auto lg:self-stretch'></div>

                            <div className='w-full lg:flex-1 text-base sm:text-lg text-slate-100/90 leading-relaxed text-center lg:text-left flex items-center'>
                                <p>
                                    <span className='text-amber-400 font-bold'>Young Turtle</span> was built on disciplined science, not speculation. We make data-driven decisions guided by mathematical models, statistical inference, and algorithmic research. Our teams of mathematicians, physicists, and engineers replace traditional finance's intuition with rigorous analysis. We identify market inefficiencies and capture them systematically. We execute with complete dispassion—removing emotion, bias, and ego. Through engineered asymmetric payoff structures, we design systems where expected gains exceed expected losses. Everything we build is transparent, resilient, and mathematically grounded.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <section className="py-24 bg-slate-50 relative">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-3 mb-4">
                            <span className="h-px w-12 bg-[#275669]"></span>
                            <span className="text-[#275669] uppercase tracking-widest text-sm font-semibold">Core DNA</span>
                            <span className="h-px w-12 bg-[#275669]"></span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold font-serif text-[#275669] mb-6">
                            Guiding <span className="text-amber-400">Principles</span>
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed font-light">
                            Our algorithms are complex, but the values driving them are simple. This is the code behind the code.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {valuesData.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <RevealSection key={item.id} delay={index * 100}>
                                    <div className="group relative h-full bg-white rounded-3xl border border-slate-200 p-8 lg:p-10 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-default">

                                        <div className="absolute inset-0 bg-[#275669] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] origin-bottom"></div>

                                        <div className="relative z-10 flex flex-col h-full">

                                            <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-8 group-hover:bg-white/10 group-hover:border-white/20 group-hover:scale-110 transition-all duration-500">
                                                <Icon className="w-8 h-8 text-[#275669] group-hover:text-amber-400 transition-colors duration-500" />
                                            </div>

                                            <h3 className="text-2xl lg:text-3xl font-bold font-serif text-[#275669] mb-4 group-hover:text-white transition-colors duration-500">
                                                {item.title}
                                            </h3>

                                            <p className="text-slate-600 text-lg leading-relaxed group-hover:text-slate-300 transition-colors duration-500">
                                                {item.description}
                                            </p>

                                            <div className="mt-auto pt-8">
                                                <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden group-hover:bg-white/20 transition-colors duration-500">
                                                    <div className="h-full bg-amber-400 w-0 group-hover:w-full transition-all duration-700 ease-out delay-100"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </RevealSection>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Heritage Section (Newspaper) */}
            <section className="bg-white pb-20 pt-8 lg:pb-24 lg:pt-8">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <NewspaperSection />
                </div>
            </section>        </main >
    )
}

export default ServiceSection