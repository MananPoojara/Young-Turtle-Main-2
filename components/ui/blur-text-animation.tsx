'use client'
import React, { useEffect, useState } from 'react'

interface WordData {
    text: string
    duration: number
    delay: number
    blur: number
    scale?: number
}

interface BlurTextAnimationProps {
    className?: string
    fontSize?: string
    fontFamily?: string
    textColor?: string
}

export default function BlurTextAnimation({
    className = '',
    fontSize = 'text-4xl md:text-4xl lg:text-4xl xl:text-5xl tracking-wide',
    fontFamily = 'font-serif',
    textColor = 'text-white',
}: BlurTextAnimationProps) {
    const [isAnimating, setIsAnimating] = useState(false)
    const [showSubText, setShowSubText] = useState(false)
    const [textWords, setTextWords] = useState<WordData[]>([])

    const mainText = 'Redefining Market VUCA'
    const subTextParts = [
        'With, ',
        <i style={{ color: '#ffb900' }} key='i1'>
            Volatility
        </i>,
        ', ',
        <i style={{ color: '#ffb900' }} key='i2'>
            Understanding
        </i>,
        ', ',
        <i style={{ color: '#ffb900' }} key='i3'>
            Clarity
        </i>,
        ', and ',
        <i style={{ color: '#ffb900' }} key='i4'>
            Adaptibility
        </i>,
    ]

    // Animate main text words
    useEffect(() => {
        const splitWords = mainText.split(' ')
        const totalWords = splitWords.length

        const words = splitWords.map((word, index) => {
            const progress = index / totalWords
            const exponentialDelay = Math.pow(progress, 0.8) * 0.5
            const baseDelay = index * 0.06
            const microVariation = (Math.random() - 0.5) * 0.05

            return {
                text: word,
                duration: 2.2 + Math.cos(index * 0.3) * 0.3,
                delay: baseDelay + exponentialDelay + microVariation,
                blur: 12 + Math.floor(Math.random() * 8),
                scale: 0.9 + Math.sin(index * 0.2) * 0.05,
            }
        })

        const id = window.setTimeout(() => setTextWords(words), 0)

        // Start main text animation
        const animationTimeout = window.setTimeout(() => {
            setIsAnimating(true)

            // Show subtext after main animation completes
            const maxTime = Math.max(...words.map((w) => w.delay + w.duration))
            window.setTimeout(() => setShowSubText(true), maxTime * 1000 - 500)
        }, 200)

        return () => {
            clearTimeout(id)
            clearTimeout(animationTimeout)
        }
    }, [])

    return (
        <div className={`w-full ${className} p-0`}>
            <div className='max-w-full'>
                {/* Main animated text */}
                <p
                    className={`${textColor} ${fontSize} ${fontFamily} font-light leading-tight sm:leading-snug md:leading-relaxed tracking-wide`}
                >
                    {textWords.map((word, index) => (
                        <span
                            key={index}
                            className={`inline-block transition-all ${isAnimating ? 'opacity-100' : 'opacity-0'}`}
                            style={{
                                transitionDuration: `${word.duration}s`,
                                transitionDelay: `${word.delay}s`,
                                filter: isAnimating
                                    ? 'blur(0px) brightness(1)'
                                    : `blur(${word.blur}px) brightness(0.6)`,
                                transform: isAnimating
                                    ? 'translateY(0) scale(1) rotateX(0deg)'
                                    : `translateY(20px) scale(${word.scale}) rotateX(-15deg)`,
                                marginRight: '0.35em',
                                willChange: 'filter, transform, opacity',
                            }}
                        >
                            {word.text}
                        </span>
                    ))}
                </p>

                {/* Sub text fades in after main text */}
                <p
                    className={`text-xl mt-4 ${fontFamily} font-light duration-1000`}
                    style={{
                        opacity: showSubText ? 1 : 0,
                        color: 'white',
                    }}
                >
                    {subTextParts.map((part, index) => (
                        <React.Fragment key={index}>{part}</React.Fragment>
                    ))}
                </p>
            </div>
        </div>
    )
}
