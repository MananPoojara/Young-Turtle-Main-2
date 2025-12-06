'use client'
import React, { useState } from 'react'

import AnimatedTestimonialsDemo from './animated-testimonials-demo'
import { PerspectivesCarousel } from './perspective-carousel'
import { Activity, ArrowRight, Gem, Minimize2, Minus, Mountain, Plus, ShieldCheck, Sun, TrendingUp } from 'lucide-react'
import { NewspaperSection } from './NewspaperSection'

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
        title: 'Risk & Resilience',
        description:
            "We don't fear volatility; we harness it. Resilience isn't just about surviving drawdowns—it's about having the conviction to stick to the model when the noise is deafening.",
        icon: Mountain,
    },
    {
        id: 2,
        title: 'Long-term Optimism',
        description:
            'We bet on human ingenuity. While markets fluctuate daily, the trajectory of innovation is upward. We structure our systems to capture this compounding growth over decades.',
        icon: Sun,
    },
    {
        id: 3,
        title: 'Power of Simplicity',
        description:
            'Complexity is a liability. We strip away the unnecessary, believing that the most robust trading signals are often the simplest ones, executed with flawless precision.',
        icon: Minimize2,
    },
    {
        id: 4,
        title: 'Relentless Excellence',
        description:
            'Innovation has no finish line. We are a team of perfectionists, constantly refining our code, data, and infrastructure in a never-ending pursuit of the theoretical limit.',
        icon: Gem,
    },
]

const ServiceSection = () => {
    const [activeValueIndex, setActiveValueIndex] = useState(0)

    return (
        <main className='min-h-screen'>
            {/* Hero Section */}
            <section className='relative py-12 sm:py-16 overflow-hidden bg-gradient-to-br from-[#275669] via-[#2d6a7f] to-[#1e4552]'>
                <div className='absolute inset-0 w-full h-full'></div>
                <div className='absolute inset-0 bg-[#275669]'></div>

                <div className='mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10'>
                    <div className='max-w-3xl mx-auto text-center'>
                        <h1 className='text-2xl sm:text-3xl lg:text-4xl font-light tracking-wide text-white mb-4'>
                            <span className='block pb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-400 mt-1'>
                                Precision Over Pace
                            </span>
                        </h1>

                        <p className='text-base sm:text-lg text-slate-200 leading-relaxed'>
                            Our name isn&apos;t incidental. In a world racing toward short-term noise, we build
                            deliberate quant systems—strategies that measure thoroughly, validate rigorously, and
                            execute precisely. We&apos;re not trying to be the hare. We&apos;re engineering a better
                            tortoise.
                        </p>
                    </div>
                </div>
            </section>
            {/* Core Philosophy */}
            <section className='py-8 sm:py-12 lg:py-16 relative'>
                <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                    <div className='relative rounded-3xl overflow-hidden '>
                        {/* Philosophy Section */}
                        <div className='bg-[#275669] relative z-10 flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-6 sm:gap-8 lg:gap-12 p-6 sm:p-8 lg:p-12 xl:p-16'>
                            {/* Left Section - Title */}
                            <div className='w-full lg:w-64 xl:w-80 lg:flex-shrink-0 text-center lg:text-left flex items-center justify-center lg:justify-start'>
                                <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight'>
                                    Our
                                    <br />
                                    <span className='text-amber-400'>Philosophy</span>
                                </h2>
                            </div>

                            {/* Divider */}
                            <div className='bg-amber-400 rounded-full w-full h-[3px] lg:w-1 lg:h-auto lg:self-stretch'></div>

                            {/* Right Section - Content */}
                            <div className='w-full lg:flex-1 text-base sm:text-lg text-slate-100/90 leading-relaxed text-center lg:text-left flex items-center'>
                                <p>
                                    <span className='text-amber-400 font-bold'>Young Turtle</span> was built on the
                                    belief that enduring performance comes from <b>disciplined science</b> , not
                                    speculation. Our foundation rests on <b>data-driven decision making</b>, where{' '}
                                    <b>mathematical models, statistical inference</b>, and <b>algorithmic research</b>{' '}
                                    guide every action. We assemble teams of{' '}
                                    <b>mathematicians, physicists, engineers, and computational thinkers</b> whose
                                    collective rigor replaces the intuition and guesswork of traditional finance. Our
                                    research focuses on identifying <b>subtle market anomalies</b> the small, temporary
                                    inefficiencies that can be <b>systematically captured</b> with precision. We execute
                                    our strategies with <b>complete dispassion</b>, removing emotion, bias, and ego to
                                    maintain consistency across all market environments. Through deliberately engineered{' '}
                                    <b>asymmetric payoff structures</b>, we design systems where the{' '}
                                    <b>expected gain meaningfully exceeds the expected loss</b>. This philosophy defines
                                    everything we build: transparent, resilient, and mathematically grounded
                                    infrastructure that empowers modern systematic trading to thrive.
                                </p>
                            </div>
                        </div>

                        {/* Mission Section 
                        <div className=' relative z-10 flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-6 sm:gap-8 lg:gap-12 p-6 sm:p-8 lg:p-12 xl:p-16'>
                            <div className='w-full lg:w-64 xl:w-80 lg:flex-shrink-0 text-center lg:text-left flex items-center justify-center lg:justify-start'>
                                <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight'>
                                    <span className='text-[#275669]'>Our</span>
                                    <br />
                                    <span className='text-amber-400'>Mission</span>
                                </h2>
                            </div>

                            <div className='bg-amber-400 rounded-full w-full h-[3px] lg:w-1 lg:h-auto lg:self-stretch'></div>

                            <div className='w-full lg:flex-1 text-[#275669] text-base sm:text-lg leading-relaxed text-center lg:text-left space-y-4 flex items-center'>
                                <div className='space-y-4'>
                                    <p>
                                        <span className='text-amber-400'>We</span> strive to generate superior risk-adjusted
                                        returns for our investors by harnessing advanced mathematical models, cutting-edge
                                        technology, and rigorous scientific research to identify and exploit persistent
                                        market inefficiencies.
                                    </p>
                                    <p>
                                        In an era of unprecedented data velocity and complexity, we remain committed to
                                        intellectual honesty, continuous innovation, and disciplined execution—delivering
                                        alpha through quantifiable edge while upholding the highest standards of integrity
                                        and transparency.
                                    </p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
            <section className='py-24 bg-white relative'>
                <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 '>
                    <div className='flex flex-col lg:flex-row gap-12 lg:gap-24'>
                        {/* Left Side: Sticky Header */}
                        <div className='w-full lg:w-1/3 lg:sticky lg:top-32 lg:self-start mb-8 lg:mb-0'>
                            <div className='inline-flex items-center gap-3 mb-4'>
                                <span className='h-px w-12 bg-[#275669]'></span>
                                <span className='text-[#275669] uppercase tracking-widest text-sm font-semibold'>
                                    Core Value
                                </span>
                            </div>
                            <h2 className='text-4xl lg:text-5xl font-bold font-serif text-[#275669] mb-6'>
                                Guiding <span className='text-amber-400'>Principles</span>
                            </h2>
                            <p className='text-lg text-slate-600 leading-relaxed font-light mb-8'>
                                Our algorithms are complex, but the values driving them are simple. This is the code
                                behind the code.
                            </p>

                            {/* Decorative Element on Desktop */}
                            <div className='hidden lg:block w-32 h-32 opacity-10 rounded-full border-2 border-[#275669] border-dashed animate-spin-slow'></div>
                        </div>

                        {/* Right Side: Vertical Accordion */}
                        <div className='w-full lg:w-2/3 flex flex-col gap-3'>
                            {valuesData.map((item, index) => {
                                const isActive = activeValueIndex === index
                                const Icon = item.icon

                                return (
                                    <div
                                        key={item.id}
                                        onMouseEnter={() => setActiveValueIndex(index)}
                                        className={`
                                          relative overflow-hidden rounded-2xl transition-all duration-500 ease-in-out cursor-default
                                          border 
                                          ${
                                              isActive
                                                  ? 'bg-[#275669] border-[#275669] shadow-xl scale-[1.02] z-10'
                                                  : 'bg-white border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                                          }
                                       `}
                                    >
                                        {/* Row Header (Visible always, changes style) */}
                                        <div
                                            className='relative z-10 flex items-center justify-between p-6 sm:px-8 cursor-pointer'
                                            onClick={() => setActiveValueIndex(index)}
                                        >
                                            <div className='flex items-center gap-6'>
                                                <span
                                                    className={`text-xl font-serif font-bold transition-colors duration-300 ${
                                                        isActive ? 'text-amber-400' : 'text-slate-300'
                                                    }`}
                                                >
                                                    0{index + 1}
                                                </span>
                                                <h3
                                                    className={`text-xl font-bold transition-colors duration-300 ${
                                                        isActive ? 'text-white' : 'text-slate-700'
                                                    }`}
                                                >
                                                    {item.title}
                                                </h3>
                                            </div>
                                            {/* Status Icon */}
                                            <div
                                                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                                                    isActive ? 'bg-amber-400 rotate-90' : 'bg-slate-100'
                                                }`}
                                            >
                                                {isActive ? (
                                                    <Minus className='w-4 h-4 text-[#275669]' />
                                                ) : (
                                                    <Plus className='w-4 h-4 text-slate-400' />
                                                )}
                                            </div>
                                        </div>

                                        {/* Expanded Content (Animate max-height) */}
                                        <div
                                            className={`
                                            relative z-10 overflow-hidden transition-all duration-500 ease-in-out
                                            ${isActive ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}
                                        `}
                                        >
                                            <div className='px-8 pb-8 pt-0 pl-20'>
                                                <p className='text-slate-300 text-lg leading-relaxed border-l-2 border-amber-400/30 pl-6'>
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Background Decorative Icon (Only visible when active) */}
                                        <Icon
                                            className={`
                                            absolute -bottom-8 -right-8 w-64 h-64 text-white/5 pointer-events-none transition-opacity duration-700
                                            ${isActive ? 'opacity-100' : 'opacity-0'}
                                        `}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
            {/* Heritage Section (Newspaper) */}
            <section className='bg-slate-50 pb-20 pt-8 lg:pb-24 lg:pt-8'>
                <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                    <NewspaperSection />
                </div>
            </section>{' '}
        </main>
    )
}

export default ServiceSection
