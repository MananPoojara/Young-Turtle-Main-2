'use client'

import { motion } from 'framer-motion'
import { TortoiseQuote } from './ui/wavytext'

export default function HeroSection() {
    return (
        <section className='relative w-full h-[90vh] xl:h-[93vh] flex items-center justify-center overflow-hidden bg-[#1a3d4d]'>
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
            <div className='relative  z-20 w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center'>
                <TortoiseQuote />
            </div>
        </section>
    )
}
