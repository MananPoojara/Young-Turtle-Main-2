'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { PageHero } from '@/components/page-hero'
import { SectionWrapper } from '@/components/section-wrapper'
import React, { useState } from 'react'
import careers from '@/public/Hero-img/career-hero.jpg'
import Image from 'next/image'
import { ArrowRight, MapPin } from 'lucide-react'

// ===== BENEFITS =====
const benefitsList = [
    { text: 'Competitive compensation with performance incentives' },
    { text: 'Comprehensive health, dental, and vision coverage' },
    { text: 'Generous retirement contributions & matching' },
    { text: 'Professional development & education support' },
    { text: 'Flexible working arrangements & remote options' },
    { text: 'Collaborative, intellectually stimulating environment' },
]

// ===== JOB OPENINGS =====
type Opening = {
    id: number
    title: string
    location: string
    type: string
    department: string
    description: string
    tags: string[]
}

const openings: Opening[] = [
    {
        id: 1,
        title: 'Quantitative Researcher',
        location: 'New York',
        type: 'Full-time',
        department: 'Research',
        description:
            'Develop and implement systematic trading strategies using advanced statistical and machine learning techniques.',
        tags: ['Python', 'C++', 'ML'],
    },
    {
        id: 2,
        title: 'Senior Software Engineer',
        location: 'London',
        type: 'Full-time',
        department: 'Technology',
        description:
            'Build high-performance trading systems and data infrastructure supporting our quantitative strategies.',
        tags: ['Low Latency', 'Rust', 'Distributed Systems'],
    },
    {
        id: 3,
        title: 'Portfolio Manager - Macro',
        location: 'Singapore',
        type: 'Full-time',
        department: 'Investment',
        description: 'Lead development and management of systematic macro strategies across Asia-Pacific markets.',
        tags: ['Alpha Generation', 'Risk Mgmt'],
    },
    {
        id: 4,
        title: 'Risk Analyst',
        location: 'New York',
        type: 'Full-time',
        department: 'Risk',
        description:
            'Monitor and analyze portfolio risks, develop risk models, and enhance our risk management framework.',
        tags: ['SQL', 'Tableau', 'Modeling'],
    },
    {
        id: 5,
        title: 'Data Engineer',
        location: 'Remote',
        type: 'Full-time',
        department: 'Technology',
        description: 'Architect and maintain the data pipelines that fuel our research engine.',
        tags: ['ETL', 'Big Data', 'Cloud'],
    },
]

// =======================================
//              PAGE COMPONENT
// =======================================
export default function CareersPage() {
    const departments = ['All', ...Array.from(new Set(openings.map((o) => o.department)))]
    const [selectedDept, setSelectedDept] = useState('All')

    const filteredOpenings = selectedDept === 'All' ? openings : openings.filter((o) => o.department === selectedDept)

    return (
        <div className='pt-20'>
            {/* HERO */}
            <PageHero title='Join Young Turtle' subtitle='Build your career at the forefront of quantitative finance' />

            {/* WHY YOUNG TURTLE */}
            <SectionWrapper className='py-24 lg:py-32 relative overflow-hidden'>
                <div className='absolute top-0 left-0 w-64 h-64 bg-aqua-mist/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2' />

                <div className='max-w-7xl mx-auto px-6 lg:px-8 relative z-10'>
                    <div className='grid lg:grid-cols-12 gap-16 items-start'>
                        {/* LEFT SIDE CONTENT */}
                        <div className='lg:col-span-5 sticky top-24'>
                            <motion.span
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className='inline-block py-1 px-3 text-[12px] uppercase tracking-[0.2em] text-[#275669] font-semibold mb-6'
                            >
                                Why Young Turtle
                            </motion.span>

                            <h2 className='font-serif text-4xl md:text-5xl text-abyssal-blue leading-tight'>
                                Where intellect meets{' '}
                                <span className='text-transparent bg-clip-text bg-gradient-to-r from-abyssal-blue to-aqua-mist/80'>
                                    impact.
                                </span>
                            </h2>

                            <p className='mt-8 text-muted-foreground leading-relaxed text-lg font-light'>
                                We seek exceptional individuals who combine intellectual curiosity with rigorous
                                analytical skills. At Young Turtle, you won&apos;t just analyze the market—you’ll help
                                shape its future alongside some of the brightest minds in quantitative finance.
                            </p>
                        </div>

                        {/* RIGHT SIDE – BENEFITS GRID */}
                        <div className='lg:col-span-7'>
                            <h3 className='font-serif text-2xl text-abyssal-blue mb-8 flex items-center gap-3'>
                                <span className='w-8 h-1 rounded-2xl bg-[#275669]'></span>
                                Benefits & Perks
                            </h3>

                            <div className='grid md:grid-cols-2 gap-4'>
                                {benefitsList.map((benefit, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ y: -5 }}
                                        className='p-6 bg-white border border-border rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group'
                                    >
                                        <p className='flex items-start gap-5 text-sm text-abyssal-blue/80 font-medium leading-relaxed'>
                                            <svg className='w-4 h-4 mt-2 shrink-0' fill='#275669' viewBox='0 0 20 20'>
                                                <path d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z' />
                                            </svg>{' '}
                                            <span>{benefit.text}</span>
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            {/* FILTERED POSITIONS (INTERACTIVE GRID) */}
            <SectionWrapper className='py-32 bg-white'>
                <div className='max-w-7xl mx-auto px-6 lg:px-8'>
                    {/* Filters */}
                    <div className='flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8'>
                        <div>
                            <span className='text-xs uppercase tracking-[0.3em] text-[#275669] font-bold'>
                                Opportunities
                            </span>
                            <h2 className='mt-4 font-serif text-4xl text-abyssal-blue'>Open Positions</h2>
                        </div>

                        <div className='flex flex-wrap gap-2 '>
                            {departments.map((dept) => (
                                <button
                                    key={dept}
                                    onClick={() => setSelectedDept(dept)}
                                    className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider transition-all duration-300 border cursor-pointer 
                    ${
                        selectedDept === dept
                            ? 'bg-[#275669] text-white border-[#275669]'
                            : 'bg-transparent text-muted-foreground border-border hover:bg-[#275669] hover:text-[#ffffff]'
                    }`}
                                >
                                    {dept}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Filtered Results */}
                    <motion.div layout className='grid gap-4'>
                        <AnimatePresence mode='popLayout'>
                            {filteredOpenings.map((job) => (
                                <motion.div
                                    layout
                                    key={job.id}
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.98 }}
                                    transition={{ duration: 0.2 }}
                                    className='group relative bg-sunbeam-pearl border border-border p-6 md:p-8 hover:border-aqua-mist/50 transition-colors duration-300 overflow-hidden'
                                >
                                    <div className='absolute left-0 top-0 bottom-0 w-1 bg-abyssal-blue scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top' />

                                    <div className='flex flex-col md:flex-row md:items-center justify-between gap-6'>
                                        <div className='flex-1'>
                                            <div className='flex items-center gap-3 mb-3'>
                                                <span className='px-2 py-1 bg-white border border-border text-[10px] uppercase tracking-wider text-abyssal-blue font-semibold'>
                                                    {job.department}
                                                </span>
                                                <span className='text-xs text-muted-foreground'>{job.type}</span>
                                            </div>

                                            <h3 className='font-serif text-2xl text-abyssal-blue mb-2 group-hover:text-[#275669] group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-abyssal-blue group-hover:to-aqua-mist transition-all duration-300'>
                                                {job.title}
                                            </h3>

                                            <p className='text-sm text-muted-foreground mb-4'>{job.description}</p>

                                            <div className='flex flex-wrap items-center gap-4'>
                                                <div className='flex items-center gap-1.5 text-xs font-medium text-abyssal-blue/70'>
                                                    <MapPin size={12} className='text-aqua-mist' />
                                                    {job.location}
                                                </div>
                                                {job.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className='text-[10px] text-muted-foreground bg-black/5 px-2 py-0.5 rounded'
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className='flex items-center'>
                                            <button className='relative overflow-hidden pl-6 pr-12 py-3 bg-[#275669] text-white text-xs uppercase tracking-widest transition-all duration-300 group/btn cursor-pointer'>
                                                <span className='relative z-10'>Apply Now</span>
                                                <div className='absolute inset-0 bg-aqua-mist w-full h-full -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300 ease-out z-0 opacity-20' />
                                                <ArrowRight
                                                    size={16}
                                                    className='absolute right-4 top-1/2 -translate-y-1/2 text-aqua-mist group-hover/btn:right-3 transition-all duration-300'
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        {filteredOpenings.length === 0 && (
                            <div className='text-center py-20 border border-dashed border-border'>
                                <p className='text-muted-foreground'>No openings found in this department.</p>
                                <button
                                    onClick={() => setSelectedDept('All')}
                                    className='mt-4 text-abyssal-blue underline text-sm'
                                >
                                    Clear filters
                                </button>
                            </div>
                        )}
                    </motion.div>
                </div>
            </SectionWrapper>

            {/* CONTACT CTA */}
            <SectionWrapper className='py-24 bg-abyssal-blue relative overflow-hidden'>
                <div className='absolute inset-0 opacity-10 pointer-events-none'>
                    <div className='h-px w-full bg-aqua-mist top-10 absolute'></div>
                    <div className='h-px w-full bg-aqua-mist bottom-10 absolute'></div>
                    <div className='w-px h-full bg-aqua-mist left-10 absolute'></div>
                    <div className='w-px h-full bg-aqua-mist right-10 absolute'></div>
                </div>

                <div className='max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className='font-serif text-4xl md:text-5xl text-sunbeam-pearl mb-6'>
                            Don&apos;t See the Right Fit?
                        </h2>
                        <p className='text-lg text-sunbeam-pearl/70 mb-10 max-w-xl mx-auto font-light'>
                            We are always lookingfor exceptional talent. If you believe you can contribute to our
                            mission, we want to hear from you.
                        </p>

                        <a
                            href='mailto:careers@youngturtle.com'
                            className='inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-aqua-mist text-aqua-mist hover:bg-[#275669] hover:text-white transition-all duration-300 text-sm uppercase tracking-widest'
                        >
                            Email Your Resume
                            <ArrowRight size={16} />
                        </a>
                    </motion.div>
                </div>
            </SectionWrapper>
        </div>
    )
}
