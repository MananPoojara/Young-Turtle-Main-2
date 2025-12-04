'use client'

import { useState, useCallback, useRef, useEffect } from 'react'
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
    const trackRef = useRef<HTMLDivElement | null>(null)
    const touchStartX = useRef<number | null>(null)
    const touchDeltaX = useRef<number>(0)

    const goToPrevious = useCallback(() => {
        setCurrentIndex((prev) => (prev === 0 ? perspectives.length - 1 : prev - 1))
    }, [perspectives.length])

    const goToNext = useCallback(() => {
        setCurrentIndex((prev) => (prev === perspectives.length - 1 ? 0 : prev + 1))
    }, [perspectives.length])

    // Keyboard navigation
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') goToPrevious()
            if (e.key === 'ArrowRight') goToNext()
        }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [goToNext, goToPrevious])

    // Touch / swipe handlers for mobile
    useEffect(() => {
        const el = trackRef.current
        if (!el) return

        const onTouchStart = (ev: TouchEvent) => {
            touchStartX.current = ev.touches[0].clientX
            touchDeltaX.current = 0
        }
        const onTouchMove = (ev: TouchEvent) => {
            if (touchStartX.current == null) return
            touchDeltaX.current = ev.touches[0].clientX - touchStartX.current
        }
        const onTouchEnd = () => {
            if (touchStartX.current == null) return
            const threshold = 50 // px to consider as swipe
            if (touchDeltaX.current > threshold) {
                goToPrevious()
            } else if (touchDeltaX.current < -threshold) {
                goToNext()
            }
            touchStartX.current = null
            touchDeltaX.current = 0
        }

        el.addEventListener('touchstart', onTouchStart, { passive: true })
        el.addEventListener('touchmove', onTouchMove, { passive: true })
        el.addEventListener('touchend', onTouchEnd)

        return () => {
            el.removeEventListener('touchstart', onTouchStart)
            el.removeEventListener('touchmove', onTouchMove)
            el.removeEventListener('touchend', onTouchEnd)
        }
    }, [goToNext, goToPrevious])

    const current = perspectives[currentIndex]

    return (
        <section
            className="relative text-[#275669] overflow-hidden py-8 md:py-12"
            aria-roledescription="carousel"
            aria-label="Perspectives carousel"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Layout: stack on small screens, two-column on xl and up */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Content Column */}
                    <div className="lg:col-span-6 order-2 lg:order-1">
                        <div className="space-y-4 sm:space-y-6">
                            <p className="font-semibold tracking-wide text-sm sm:text-base">{current.name}'s Perspectives</p>

                            <h2 className="text-lg sm:text-2xl md:text-3xl font-serif leading-tight">{current.title}</h2>

                            <p className="leading-relaxed text-sm sm:text-base md:text-lg text-justify">{current.content}</p>

                            {/* Optional meta / date */}
                            {current.date && <p className="text-xs text-[#275669]/70">{current.date}</p>}
                        </div>
                    </div>

                    {/* Right Image Column */}
                    <div className="lg:col-span-6 order-1 lg:order-2">
                        <div
                            ref={trackRef}
                            className="w-full rounded-2xl overflow-hidden bg-gray-50 relative shadow-sm"
                            role="group"
                            aria-roledescription="slide"
                            aria-label={`${current.title}`}
                        >
                            {/* Use responsive aspect ratios and heights: small screens show more height */}
                            <div className="w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[4/3] lg:aspect-[4/3] relative">
                                <Image
                                    src={current.image || '/placeholder.svg'}
                                    alt={`${current.name}'s perspective`}
                                    className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all"
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    priority={false}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-t border-[#275669]/10" />

                {/* Navigation Controls */}
                <div className="flex items-center justify-between gap-4">
                    {/* Dots Indicator */}
                    <div className="flex items-center gap-2" role="tablist" aria-label="Slides">
                        {perspectives.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`transition-all rounded-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#275669]/30 ${index === currentIndex ? 'bg-[#275669] w-6 h-2 rounded-full' : 'bg-[#275669]/30 w-2 h-2'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                                aria-current={index === currentIndex}
                            />
                        ))}
                    </div>

                    {/* Arrow Controls */}
                    <div className="flex gap-2">
                        <button
                            onClick={goToPrevious}
                            className="p-2 sm:p-3 border border-[#275669]/30 hover:bg-[#275669]/10 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#275669]/30"
                            aria-label="Previous perspective"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={goToNext}
                            className="p-2 sm:p-3 border border-[#275669]/30 hover:bg-[#275669]/10 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#275669]/30"
                            aria-label="Next perspective"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
