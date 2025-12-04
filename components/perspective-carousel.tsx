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
        <section className='relative text-[#275669] overflow-hidden py-8 md:py-8'>
            <div className='max-w-7xl mx-auto px-6'>
                <div className='grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-16 items-start'>
                    {/* Left Content Column */}
                    <div className='space-y-6'>
                        <p className='font-semibold tracking-wide'>{current.name}&apos;s Perspectives</p>

                        <h2 className='text-xl md:text-2xl lg:text-3xl font-serif leading-tight'>{current.title}</h2>

                        <p className='leading-relaxed text-base md:text-lg'>{current.content}</p>
                    </div>

                    {/* Right Image Column */}
                    <div className='relative w-full'>
                        <div className='relative w-full h-full my-3 aspect-4/3 overflow-hidden'>
                            <Image
                                src={current.image || '/placeholder.svg'}
                                alt={`${current.name}'s perspective`}
                                className='rounded-2xl object-cover grayscale hover:grayscale-0 transition-all'
                                fill
                            />
                        </div>
                    </div>
                </div>

                {/* Navigation Controls */}
                <div className='flex items-center justify-between'>
                    {/* Dots Indicator */}
                    <div className='flex gap-2'>
                        {perspectives.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
                                    ? 'bg-[#275669] w-6'
                                    : 'bg-[#275669]/30 hover:bg-[#275669]/50'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Arrow Controls */}
                    <div className='flex gap-2'>
                        <button
                            onClick={goToPrevious}
                            className='p-3 border border-[#275669]/30 hover:bg-[#275669]/10 transition-colors'
                            aria-label='Previous perspective'
                        >
                            <ChevronLeft className='w-5 h-5' />
                        </button>
                        <button
                            onClick={goToNext}
                            className='p-3 border border-[#275669]/30 hover:bg-[#275669]/10 transition-colors'
                            aria-label='Next perspective'
                        >
                            <ChevronRight className='w-5 h-5' />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
