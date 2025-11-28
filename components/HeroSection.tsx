import React from 'react'
import BlurTextAnimation from './ui/blur-text-animation'

const HeroSection = () => {
    return (
        <section className="relative w-full  h-screen flex items-center justify-center overflow-hidden">
            {/* Video Background */}
            <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/turtle2_crop.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>


            {/* Overlay */}
<<<<<<< HEAD
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-4 sm:px-6 md:px-8 lg:px- w-[210%]">
=======
            <div className="absolute inset-0 bg-[#275669]/20 lg:bg-[#275669]/20"></div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-4 sm:px-4 md:px-4 lg:px-12 w-[110%]">
>>>>>>> c990bd33c578e7d30dc86459ce71e11824d52976
                <BlurTextAnimation className="bg-transparent" />
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