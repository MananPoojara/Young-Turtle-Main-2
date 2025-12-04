'use client'

import { useState, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

interface Perspective {
    id: number
    name: string
    title: string
    date: string
    content: string
    image: string
    slug: string
}

interface PerspectivesCarouselProps {
    perspectives: Perspective[]
}

export function PerspectivesCarousel({ perspectives }: PerspectivesCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const goToPrevious = useCallback(() => {
        setCurrentIndex((prev) => (prev === 0 ? perspectives.length - 1 : prev - 1))
    }, [perspectives.length])

    const goToNext = useCallback(() => {
        setCurrentIndex((prev) => (prev === perspectives.length - 1 ? 0 : prev + 1))
    }, [perspectives.length])

    const current = perspectives[currentIndex]

    return (
        <section className='relative text-[#275669] overflow-hidden py-6 sm:py-8 md:py-10 lg:py-12'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-14 xl:gap-16 items-start'>
                    {/* Left Content Column */}
                    <div className='space-y-4 sm:space-y-5 md:space-y-6 order-2 lg:order-1'>
                        <p className='text-xs sm:text-sm md:text-base font-semibold tracking-wider uppercase'>
                            {current.name}&apos;s Perspectives
                        </p>

                        <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-serif leading-snug sm:leading-tight'>
                            {current.title}
                        </h2>

                        <p className='leading-relaxed text-sm sm:text-base md:text-lg text-[#275669]/90'>
                            {current.content}
                        </p>
                    </div>

                    {/* Right Image Column */}
                    <div className='relative w-full order-1 lg:order-2'>
                        <div className='relative w-full aspect-video sm:aspect-4/3 md:aspect-3/2 lg:aspect-4/3 overflow-hidden rounded-xl sm:rounded-2xl'>
                            <Image
                                src={current.image || '/placeholder.svg'}
                                alt={`${current.name}'s perspective`}
                                className='w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500'
                                fill
                                sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 45vw'
                                priority={currentIndex === 0}
                            />
                        </div>
                    </div>
                </div>

                {/* Navigation Controls */}
                <div className='flex flex-col-reverse sm:flex-row items-center justify-between gap-6 sm:gap-4 mt-8 sm:mt-10 md:mt-12'>
                    {/* Dots Indicator */}
                    <div className='flex gap-2 sm:gap-2.5 flex-wrap justify-center sm:justify-start'>
                        {perspectives.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`transition-all duration-300 rounded-full ${index === currentIndex
                                    ? 'bg-[#275669] w-3 h-2 sm:w-6 sm:h-2'
                                    : 'bg-[#275669]/30 w-2 h-2 hover:bg-[#275669]/50'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Arrow Controls */}
                    <div className='flex gap-2 sm:gap-3'>
                        <button
                            onClick={goToPrevious}
                            className='p-2 sm:p-3 border border-[#275669]/30 hover:bg-[#275669]/10 hover:border-[#275669]/50 transition-all duration-300 rounded-lg'
                            aria-label='Previous perspective'
                        >
                            <ChevronLeft className='w-4 h-4 sm:w-5 sm:h-5' />
                        </button>
                        <button
                            onClick={goToNext}
                            className='p-2 sm:p-3 border border-[#275669]/30 hover:bg-[#275669]/10 hover:border-[#275669]/50 transition-all duration-300 rounded-lg'
                            aria-label='Next perspective'
                        >
                            <ChevronRight className='w-4 h-4 sm:w-5 sm:h-5' />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
