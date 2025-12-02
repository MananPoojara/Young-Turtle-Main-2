'use client'

import { motion } from 'framer-motion'
import { OtherUnderwaterHero } from './animation-hero-bg'
// import { AnimatedGrid } from './animated-grid'

interface PageHeroProps {
    title: string
    subtitle?: string
    variant?: 'grid' | 'dots' | 'lines' | 'lattice' | 'network'
}

export function PageHero({ title, subtitle, variant = 'grid' }: PageHeroProps) {
    return (
        <section className='relative py-20 h-[80vh] flex items-center justify-center bg-abyssal-blue overflow-hidden'>
            <OtherUnderwaterHero />

            {/* Gradient overlay */}
            <div className='absolute inset-0 bg-gradient-to-b from-abyssal-blue/50 via-transparent to-abyssal-blue/80' />

            <div className='relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center'>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                    className='font-serif text-4xl md:text-5xl lg:text-6xl text-white tracking-wide text-balance'
                >
                    {title}
                </motion.h1>
                {subtitle && (
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                        className='mt-6 text-lg md:text-xl text-white max-w-2xl mx-auto font-light tracking-wide'
                    >
                        {subtitle}
                    </motion.p>
                )}
            </div>

            {/* Bottom fade */}
            <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-sunbeam-pearl to-transparent' />
        </section>
    )
}
