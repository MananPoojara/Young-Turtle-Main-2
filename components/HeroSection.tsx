import React from 'react'
import BlurTextAnimation from './ui/blur-text-animation'

const HeroSection = () => {
    return (
        <section className='relative w-full h-[90vh] flex items-start justify-center py-30 overflow-hidden'>
            {/* Video Background */}
            <video
                autoPlay
                muted
                loop
                playsInline
                preload='metadata'
                className='absolute inset-0 w-full h-full object-cover'
            >
                <source src='/turtle2_crop.mp4' type='video/mp4' />
                Your browser does not support the video tag.
            </video>

            {/* Overlay */}
            <div className='absolute inset-0 bg-[#275669]/20 z-10'></div>

            {/* Content */}
            <div className='relative z-20 px-4 sm:px-4 md:px-4 lg:px-12 w-[110%]'>
                <BlurTextAnimation />
            </div>
        </section>
    )
}

export default HeroSection