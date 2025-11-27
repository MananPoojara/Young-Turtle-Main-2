import React from 'react'
import BlurTextAnimation from './ui/blur-text-animation'

const HeroSection = () => {
    return (
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            {/* Video Background */}
            <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-contain scale-100"
            >
                <source src="/turtle.mp4" type="video/mp4" />
            </video>


            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl">
                <BlurTextAnimation text="We don’t predict the markets. We measure them" className="bg-transparent" />
            </div>
        </section>
    )
}

export default HeroSection