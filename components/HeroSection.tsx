'use client'

import { motion } from 'framer-motion'
import { TortoiseQuote } from './ui/tortoise-text-animation'

export default function HeroSection() {
    return (
        <section className='relative w-full h-[90vh] xl:h-[93vh] flex items-center justify-center overflow-hidden bg-[#1a3d4d]'>
            {/* Gradient overlay for depth */}
            <div className='absolute inset-0 bg-gradient-to-b from-[#275669]/80 via-[#1a3d4d]/60 to-[#0f2832]/90' />

            {/* Subtle animated background glow */}
            <div className='absolute inset-0 overflow-hidden'>
                <motion.div
                    className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[120px]'
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: 'easeInOut',
                    }}
                />
            </div>

            {/* Video background */}
            <video
                autoPlay
                muted
                loop
                playsInline
                preload='metadata'
                className='absolute inset-0 w-full h-full object-cover opacity-40'
            >
                <source src='/turtle2_crop.mp4' type='video/mp4' />
            </video>

            {/* Content */}
            <div className='relative z-20 w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center'>
                <TortoiseQuote />
            </div>
        </section>
    )
}
