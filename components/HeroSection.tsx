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
            <div className='absolute inset-0 bg-[#275669]/20'></div>

            {/* Content */}
            <div className='relative z-10 px-4 sm:px-4 md:px-4 lg:px-12 w-[110%]'>
                <BlurTextAnimation />
                {/* Buttons */}
                {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300 transform hover:scale-105">
                        Get Started
                    </button>

                    <button className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-semibold rounded-lg transition duration-300 transform hover:scale-105">
                        Learn More
                    </button>
                </div> */}
            </div>
        </section>
    )
}

export default HeroSection
