'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface PageHeroProps {
    title: string
    subtitle?: string
    variant?: 'grid' | 'dots' | 'lines' | 'lattice' | 'network'
    src?: string // NEW PROP
}

export function PageHero({ title, subtitle, variant = 'grid', src }: PageHeroProps) {
    return (
        <section className="relative py-20 h-[80vh] flex items-center justify-center overflow-hidden">

            {/* --- Background Image (New) --- */}
            {src && (
                <Image
                    src={src}
                    alt="Page Background"
                    fill
                    priority
                    className="object-cover object-center absolute inset-0 z-0"
                />
            )}

            {/* Gradient overlay (unchanged) */}
            <div className="absolute inset-0 bg-[#275669]/70" />

            <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                    className="font-serif text-4xl md:text-5xl lg:text-6xl text-white tracking-wide text-balance"
                >
                    {title}
                </motion.h1>

                {subtitle && (
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                        className="mt-6 text-lg md:text-xl text-white max-w-2xl mx-auto font-light tracking-wide"
                    >
                        {subtitle}
                    </motion.p>
                )}
            </div>

            {/* Bottom fade (unchanged) */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-sunbeam-pearl to-transparent z-20" />
        </section>
    )
}
