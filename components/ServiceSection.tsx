'use client'
import React from 'react'
import AnimatedTestimonialsDemo from './animated-testimonials-demo'
// import { PerspectivesCarousel } from './perspective-carousel'

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

const ServiceSection = () => {
    return (
        <main className='min-h-screen'>
            {/* Hero Section */}
            <section className='relative py-12 sm:py-16 overflow-hidden bg-gradient-to-br from-[#275669] via-[#2d6a7f] to-[#1e4552]'>
                <div className='absolute inset-0 w-full h-full'></div>

                {/* Overlay */}
                <div className='absolute inset-0 bg-[#275669]'></div>

                <div className='mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10 '>
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
            <section className='py-16 2xl:py-8 relative'>
                <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                    {/* Single Card Container */}
                    <div className='relative rounded-3xl overflow-hidden shadow-2xl'>
                        {/* Content */}
                        <div className='bg-[#275669] relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 p-8 sm:p-12 lg:p-16'>
                            {/* Left Section */}
                            <div className='w-full lg:w-64 xl:w-80 lg:flex-shrink-0 text-center lg:text-left flex items-center justify-center lg:justify-start'>
                                <h2 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 leading-tight'>
                                    Our
                                    <br />
                                    <span className='text-amber-400'>Philosophy</span>
                                </h2>

                                {/* Underline */}
                            </div>
                            <div
                                className='
        bg-amber-400 rounded-full
        w-full h-[3px]
        lg:w-1 lg:h-auto lg:self-stretch
        lg:mx-0
        '
                            ></div>
                            {/* Right Section */}
                            <div className='w-full lg:flex-1 text-base sm:text-lg text-slate-200/90 leading-relaxed text-center lg:text-left flex items-center'>
                                <p>
                                    <span className='text-amber-400'>Young Turtle</span> was founded by mathematicians
                                    and engineers who have experienced the core challenges of quantitative
                                    trading—limited technology, fragmented research, and a lack of precision. With deep
                                    expertise in mathematics and finance, we&apos;re building algorithms that are
                                    rigorous, transparent, and powerful. Through strong mathematical models, clear
                                    analytics, and advanced infrastructure, we provide a trusted foundation for
                                    systematic trading to thrive.
                                </p>
                            </div>
                        </div>

                        <div className='relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 p-8 sm:p-12 lg:p-16'>
                            {/* Left Section */}
                            <div className='w-full lg:w-64 xl:w-80 lg:flex-shrink-0 text-center lg:text-left flex items-center justify-center lg:justify-start'>
                                <h2 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 leading-tight'>
                                    <span className='text-[#275669]'>Our</span>
                                    <br />
                                    <span className='text-amber-400'>Mission</span>
                                </h2>
                            </div>
                            {/* Underline */}
                            <div
                                className='
        bg-amber-400 rounded-full
        w-full h-[3px]
        lg:w-1 lg:h-auto lg:self-stretch
        lg:mx-0
        '
                            ></div>
                            {/* Right Section */}
                            <div className='text-[#275669] w-full lg:flex-1 text-base sm:text-lg leading-relaxed text-center lg:text-left flex items-center'>
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
                    </div>
                </div>
            </section>

            <AnimatedTestimonialsDemo />
            {/* <PerspectivesCarousel perspectives={perspectivesData} /> */}
        </main>
    )
}

export default ServiceSection
