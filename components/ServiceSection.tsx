'use client'
import React from 'react'
import AnimatedTestimonialsDemo from './animated-testimonials-demo'

const items = [
    {
        title: 'Data-Driven Decisions',
        desc: "Every signal backed by years of market data and rigorous statistical analysis. We don't predict markets—we measure them with mathematical precision.",
        color: 'from-blue-500 to-cyan-500',
    },
    {
        title: 'Risk-First Approach',
        desc: 'Capital preservation is our foundation. We prioritize protecting your investments before pursuing profit opportunities through systematic risk management.',
        color: 'from-emerald-500 to-teal-500',
    },
    {
        title: 'Complete Transparency',
        desc: 'You understand exactly why we make specific recommendations. Our models are explainable, our reasoning is clear, and our track record is verifiable.',
        color: 'from-amber-500 to-orange-500',
    },
]

const ServiceSection = () => {
    return (
        <main className='min-h-screen bg-gradient-to-b from-slate-50 to-white'>
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

            {/* Badge */}
            <div className='text-center pt-16'>
                <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-[#275669] mb-6'>Our Philosophy</h2>
                <div className='w-75 h-1 bg-[#275669] mx-auto mb-4 -mt-1 rounded-full'></div>
            </div>

            {/* Core Philosophy */}
            <section className='py-16 relative bg-gradient-to-b from-white to-slate-50'>
                <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                    {/* Single Card Container */}
                    <div className='relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 shadow-2xl'>
                        {/* Background Image */}
                        <div className='absolute inset-0'>
                            {/* Overlay */}
                            <div className='absolute inset-0 bg-[#275669]'></div>
                        </div>

                        {/* Content */}
                        <div className='relative z-10 p-8 sm:p-12 lg:p-16'>
                            {/* Title */}
                            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-2xl'>
                                By Experts. For You.
                            </h2>

                            {/* Description */}
                            <p className='text-base sm:text-lg text-slate-200 leading-relaxed mb-12 max-w-3xl'>
                                Young Turtle was founded by mathematicians and engineers who have experienced the core
                                challenges of quantitative trading—limited technology, fragmented research, and a lack
                                of precision. With deep expertise in mathematics and finance, we&apos;re building
                                algorithms that are rigorous, transparent, and powerful. Through strong mathematical
                                models, clear analytics, and advanced infrastructure, we provide a trusted foundation
                                for systematic trading to thrive.
                            </p>

                            {/* Three Pillars Grid */}
                            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8'>
                                {items.map((item, i) => (
                                    <div
                                        key={i}
                                        className='group p-6 lg:p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300'
                                    >
                                        <div className='flex items-center gap-3 mb-4'>
                                            <span
                                                className={`h-1.5 w-12 rounded-full bg-gradient-to-r ${item.color}`}
                                            ></span>
                                            <span className='text-xs font-semibold text-slate-300 uppercase tracking-wider'>
                                                Pillar {i + 1}
                                            </span>
                                        </div>

                                        <h3 className='text-xl lg:text-2xl font-bold text-white mb-3'>{item.title}</h3>

                                        <p className='text-sm lg:text-base text-slate-300 leading-relaxed'>
                                            {item.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <AnimatedTestimonialsDemo />
        </main>
    )
}

export default ServiceSection