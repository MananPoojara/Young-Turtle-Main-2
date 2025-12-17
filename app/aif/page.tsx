'use client'
import { PageHero } from '@/components/page-hero'
import React from 'react'
import { SectionWrapper } from '@/components/section-wrapper'
import { AnimatePresence, motion } from 'framer-motion'
import aif from '@/public/misc-img/new-fund-opration.jpg'

interface Product {
    id: string
    title: string
    category: string
    description: string
}

const products: Product[] = [
    {
        id: '1',
        title: 'Young Turtle Leaders of Tomorrow',
        category: 'AIF CAT-III',
        description:
            'Aims at capital appreciation over the long run by investing in listed equities and selectively (upto 10% of the portfolio) in PIPES/IPOs/QIPs.',
    },
    {
        id: '2',
        title: 'Young Turtle Emerging Leaders',
        category: 'AIF CAT-III',
        description:
            'A Mid and Smallcap focused fund that bets on ethical entrepreneurs and management teams with robust and tested business models which should benefit from broader economic recovery.',
    },
    {
        id: '3',
        title: 'Emerging Leaders Series 2',
        category: 'AIF CAT-III',
        description:
            'Building on the success of Series 1, this fund continues to focus on high-growth mid-market opportunities with a disciplined approach to risk management and ethical governance.',
    },
    {
        id: '4',
        title: 'Long Term Ventures Fund',
        category: 'AIF CAT-III',
        description:
            'Capitalizing on a multi-year growth cycle. We expect strong earnings recovery across sectors over the next 3-5 years. We are enthused by opportunities in the small and midcap space.',
    },
    {
        id: '5',
        title: 'Smart Alpha 250 Fund',
        category: 'AIF CAT-III',
        description:
            'Aims to deliver long-term capital appreciation through a meticulously designed strategy, predominately focusing on listed large and mid-cap investments.',
    },
]
const page = () => {
    return (
        <div className='pt-20'>
            <PageHero
                title='Alternative Investment Funds'
                subtitle='Build your career at the forefront of quantitative finance'
            />

            <section className='relative w-full py-24 bg-[#ffffff] flex flex-col items-center border-t border-white/[0.03]'>
                {/* Ambient Background Glow */}
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-[#275669] opacity-10 blur-[120px] rounded-full pointer-events-none' />

                {/* Header Section */}
                <div className='relative z-10 text-center mb-16 px-6 max-w-4xl mx-auto'>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className='font-serif text-3xl md:text-5xl text-[#275669] mb-6 tracking-tight'
                    >
                        Operational <span className='text-[#fbbf24]'>Structure</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className='space-y-4'
                    >
                        <h3 className='font-serif text-xl md:text-2xl text-[#275669] italic font-light'>
                            A rigorous framework ensuring transparency and alignment.
                        </h3>
                        <p className='font-sans text-[#275669] text-sm md:text-base tracking-wide leading-relaxed max-w-2xl mx-auto'>
                            Our ecosystem integrates Investors, Sponsors, and Trustees with absolute precision, creating
                            a seamless flow from contribution to realization.
                        </p>
                    </motion.div>
                </div>

                {/* Image Section */}
                <motion.div
                    className='relative z-10 w-full max-w-6xl px-4 md:px-8'
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    {/* Image Container with Glass/Glow Effect */}
                    <div
                        className='
                    relative rounded-lg overflow-hidden
                    border border-[#fbbf24]/20
                    bg-[#275669]/10 backdrop-blur-sm
                    shadow-[0_0_40px_rgba(251,191,36,0.05)]
                    p-2 md:p-4
                '
                    >
                        <img
                            src={aif.src}
                            onError={(e) => {
                                e.currentTarget.src =
                                    "https://placehold.co/1200x800/0b222d/fbbf24?text=Place+'fund_structure.png'+in+root+folder"
                            }}
                            alt='Young Turtle Fund Structure Flowchart'
                            className='w-full h-auto rounded shadow-lg'
                        />

                        {/* Corner Accents for technical/precision look */}
                        <div className='absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#fbbf24] rounded-tl-md' />
                        <div className='absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#fbbf24] rounded-tr-md' />
                        <div className='absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#fbbf24] rounded-bl-md' />
                        <div className='absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#fbbf24] rounded-br-md' />
                    </div>
                </motion.div>
            </section>

            <div className='min-h-screen bg-deep-teal text-[#275669] selection:bg-rich-gold selection:text-deep-teal font-sans'>
                <SectionWrapper className='py-24 px-6 md:px-12 max-w-6xl mx-auto'>
                    <header className='mb-24 md:mb-32'>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className='border-l-2 border-rich-gold pl-6 md:pl-8'
                        >
                            <span className='text-[#275669] text-xl font-bold tracking-[0.25em] uppercase block mb-2'>
                                Our Products & Services
                            </span>
                        </motion.div>
                    </header>

                    {/* The List: Structural & Clean */}
                    <div className='flex flex-col'>
                        {products.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className='group relative border-t border-black py-16 md:py-20 first:border-t-0'
                            >
                                <div className='grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-8 items-baseline'>
                                    {/* 01. Numbering */}
                                    <div className='md:col-span-2'>
                                        <span className='font-serif text-4xl md:text-5xl text-[#275669] group-hover:text-rich-gold transition-colors duration-500'>
                                            0{index + 1}
                                        </span>
                                    </div>

                                    {/* 02. Title & Category */}
                                    <div className='md:col-span-4'>
                                        <h3 className='font-serif text-2xl md:text-3xl text-[#275669] mb-2 leading-tight group-hover:text-rich-gold transition-colors duration-300'>
                                            {product.title}
                                        </h3>
                                        <span className='inline-block text-xs font-medium tracking-wider text-[#275669] uppercase'>
                                            {product.category}
                                        </span>
                                    </div>

                                    {/* 03. Description */}
                                    <div className='md:col-span-4'>
                                        <p className='text-lg text-[#275669] leading-relaxed font-light'>
                                            {product.description}
                                        </p>
                                    </div>

                                    {/* 04. Action */}
                                    <div className='md:col-span-2 flex justify-start md:justify-end mt-4 md:mt-0'>
                                        <button className='flex items-center gap-3 px-6 py-2 border border-[#275669] text-rich-gold text-xs font-bold uppercase tracking-widest hover:bg-[#275669] hover:text-white transition-all cursor-pointer duration-300'>
                                            Read More
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </SectionWrapper>
            </div>
        </div>
    )
}

export default page
