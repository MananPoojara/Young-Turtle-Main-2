import React from 'react'
import {
    Brain,
    Database,
    Zap,
    CheckCircle,
    TrendingUp,
    Shield,
    LineChart,
    BarChart3,
    Target,
    Sparkles,
    Users,
} from 'lucide-react'
import office from '../public/office.jpeg'
import Image from 'next/image'
import poster1 from '../public/person.jpeg'
import poster2 from '../public/uptrend.jpeg'
import poster3 from '../public/teamwork.jpeg'
import team from '../public/hired.jpeg'

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

const items2 = [
    {
        icon: Brain,
        title: 'Intelligent Analysis',
        desc: 'Our machine learning models identify market patterns and anomalies that human analysis might miss.',
        bgColor: 'bg-[#275669]',
    },
    {
        icon: Database,
        title: 'Comprehensive Data',
        desc: 'We aggregate price data, volume information, and macroeconomic indicators for holistic market view.',
        bgColor: 'bg-[#275669]',
    },
    {
        icon: Zap,
        title: 'Real-Time Execution',
        desc: 'Instant signal generation with millisecond latency ensures you capture market opportunities.',
        bgColor: 'bg-[#275669]',
    },
    {
        icon: TrendingUp,
        title: 'Continuous Optimization',
        desc: 'Our algorithms learn and evolve with market conditions through constant backtesting.',
        bgColor: 'bg-[#275669]',
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

                <div className='mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10'>
                    <div className='max-w-3xl mx-auto text-center'>
                        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-light tracking-wide text-white mb-4'>
                            Where Mathematics Meets
                            <span className='block pb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-400 mt-1'>
                                Market Intelligence
                            </span>
                        </h1>

                        <p className='text-base sm:text-lg text-slate-200 leading-relaxed'>
                            Young Turtle is a technology-driven, multi-strategy quantitative trading firm operating in
                            global financial markets. We&apos;re a Math and Technology company—scientists and engineers
                            working as a unified team to solve complex problems in the dynamic world of finance.
                        </p>
                    </div>
                </div>
            </section>

            {/* Badge */}
            <div className='text-center pt-16'>
                <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-[#275669] mb-6'>Our Philosophy</h2>
                <div className='w-85 h-1 bg-[#275669] mx-auto mb-4 -mt-1 rounded-full'></div>
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

            {/* Methodology Section */}
            <section className='py-20 sm:py-24 bg-gradient-to-b from-slate-50 to-white -mt-20'>
                <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                    {/* Header */}
                    <div className='text-center mb-16'>
                        <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-[#275669] mb-6'>
                            Our Methodology
                        </h2>
                        <div className='w-85 h-1 bg-[#275669] mx-auto mb-4 -mt-1 rounded-full'></div>
                        <p className='text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto'>
                            We employ a comprehensive approach that integrates multiple analytical frameworks to
                            identify high-probability trading opportunities.
                        </p>
                    </div>

                    {/* Card Grid */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                        {items2.map((item, i) => (
                            <div
                                key={i}
                                className={`group p-8 rounded-2xl ${item.bgColor} border-2 border-transparent`}
                            >
                                {/* Icon */}
                                <div
                                    className={`h-14 w-14 rounded-xl bg-gradient-to-br flex items-center justify-center mb-6 group-hover:scale-110 `}
                                >
                                    <item.icon className='h-7 w-7 text-white' strokeWidth={2} />
                                </div>

                                {/* Content */}
                                <h3 className='text-xl font-bold text-white mb-3 leading-tight'>{item.title}</h3>
                                <p className='text-white leading-relaxed text-sm'>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className='px-4 py-20 bg-white'>
                <div className='relative rounded-3xl overflow-hidden max-w-6xl mx-auto'>
                    {/* Image */}
                    <img src={team.src} alt='Community' className='w-full h-[350px] sm:h-[420px] object-cover' />

                    {/* Overlay */}
                    <div className='absolute inset-0 bg-[#275669]/40'></div>

                    {/* Center Content */}
                    <div className='absolute inset-0 flex flex-col items-center justify-center text-center px-6'>
                        <h2 className='text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4'>Join the Team</h2>

                        <p className='text-lg sm:text-xl text-white/90 mb-6'>Take the first step</p>

                        <button className='px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-slate-200 transition'>
                            Explore Careers
                        </button>
                    </div>
                </div>
            </section>

            {/* Who We Are */}
            <section className='py-20 sm:py-32 bg-[#275669] relative overflow-hidden'>
                <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 '>
                    {/* Header with badge */}
                    <div className='text-center mb-12 -mt-10'>
                        <div className='inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-white shadow-sm mb-6'>
                            <span className='text-sm font-semibold text-[#275669] uppercase tracking-wider'>
                                Who We Are
                            </span>
                        </div>
                        <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4'>Young Turtle</h2>
                    </div>

                    {/* Top 5 Grid - Visual Cards */}
                    <div className='grid grid-cols-2 md:grid-cols-5 gap-4 mb-4'>
                        {/* Card 1 - Image: Laptop/Analysis */}
                        <div className='col-span-1 aspect-square rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105'>
                            <img src={poster1.src} alt='Data Analysis' className='w-full h-full object-cover' />
                        </div>

                        {/* Card 2 - Image: Abstract/Flow (Wide) */}
                        <div className='col-span-1 aspect-square rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105'>
                            <img src={poster2.src} alt='Market Flow' className='w-full h-full object-cover' />
                        </div>

                        {/* Card 3 - Icon: Chart Bars */}
                        <div className='col-span-1 aspect-square rounded-3xl bg-white shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-105'>
                            <div className='flex flex-col items-center gap-2'>
                                <div className='h-3 w-16 bg-[#275669] rounded-full'></div>
                                <div className='h-3 w-20 bg-[#275669] rounded-full'></div>
                                <div className='h-3 w-12 bg-[#275669] rounded-full'></div>
                            </div>
                        </div>

                        {/* Card 4 - Icon: Growth Chart */}
                        <div className='col-span-1 aspect-square rounded-3xl bg-white shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-105'>
                            <TrendingUp className='h-16 w-16 text-[#275669]' strokeWidth={2} />
                        </div>

                        {/* Card 5 - Image: Team/Person */}
                        <div className='col-span-2 md:col-span-1 aspect-square rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105'>
                            <img src={poster3.src} alt='Team Collaboration' className='w-full h-full object-cover' />
                        </div>
                    </div>

                    {/* Bottom 3 Grid - Content Cards */}
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        {/* Card 1 */}
                        <div className='p-8 rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-300'>
                            <h3 className='text-2xl font-bold text-[#275669] mb-4'>Quantitative Excellence</h3>
                            <p className='text-slate-600 leading-relaxed'>
                                A technology-driven, multi-strategy quantitative trading firm. We&apos;re scientists and
                                engineers united by mathematics, solving complex problems in the dynamic world of
                                finance.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className='p-8 rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-300'>
                            <h3 className='text-2xl font-bold text-[#275669] mb-4'>Statistical Edge</h3>
                            <p className='text-slate-600 leading-relaxed'>
                                Our algorithms trade across equities, futures, options, currencies, and
                                commodities—seeking market inefficiencies through rigorous mathematical and statistical
                                models.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className='p-8 rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-300'>
                            <h3 className='text-2xl font-bold text-[#275669] mb-4'>Data-Driven Discovery</h3>
                            <p className='text-slate-600 leading-relaxed'>
                                We seek mathematicians, software engineers, and academics to help us uncover hidden
                                connections in financial data and push the boundaries of quantitative research.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Results & Metrics */}
            <section className='py-20 sm:py-24'>
                <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                    <h2 className='text-3xl sm:text-4xl font-bold text-[#275669] text-center mb-16'>
                        Results & Performance Metrics
                    </h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                        {[
                            {
                                metric: '95%',
                                label: 'Signal Accuracy',
                                subtext: 'Verified across 100+ signals',
                                gradient: 'from-emerald-500 to-teal-500',
                            },
                            {
                                metric: '24/7',
                                label: 'Market Monitoring',
                                subtext: 'Continuous analysis and alerts',
                                gradient: 'from-blue-500 to-cyan-500',
                            },
                            {
                                metric: '10,000+',
                                label: 'Active Traders',
                                subtext: 'Using Young Turtle daily',
                                gradient: 'from-purple-500 to-pink-500',
                            },
                            {
                                metric: '3.2:1',
                                label: 'Avg Risk-Reward',
                                subtext: 'Target to stop-loss ratio',
                                gradient: 'from-amber-500 to-orange-500',
                            },
                        ].map((stat, i) => (
                            <div key={i} className='group relative'>
                                <div className='absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl'></div>
                                <div className='relative p-8 rounded-2xl bg-white border-2 border-slate-200 hover:border-[#275669] transition-all duration-300 hover:shadow-xl text-center'>
                                    <div
                                        className={`text-4xl sm:text-5xl font-bold bg-gradient-to-br ${stat.gradient} text-transparent bg-clip-text mb-3`}
                                    >
                                        {stat.metric}
                                    </div>
                                    <p className='font-semibold text-slate-900 mb-2'>{stat.label}</p>
                                    <p className='text-sm text-slate-600'>{stat.subtext}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ServiceSection
