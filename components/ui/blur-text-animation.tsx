"use client";
import React, { useEffect, useRef, useState, useMemo } from "react";

interface WordData {
    text: string;
    duration: number;
    delay: number;
    blur: number;
    scale?: number;
}

const QUOTES = [
    "We don’t predict the markets. We measure them.",
    "Slow is smooth. Smooth is fast. In markets, discipline always compounds.",
    "Where mathematics meets the market and evidence guides every decision.",
    "Insight is found where data, patience, and discipline intersect.",
    "Progress isn’t defined by speed it’s defined by direction."
];

interface BlurTextAnimationProps {
    className?: string;
    fontSize?: string;
    fontFamily?: string;
    textColor?: string;
    animationDelay?: number;
}

export default function BlurTextAnimation({
    className = "",
<<<<<<< HEAD
    fontSize = "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl",
=======
    fontSize = "text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl",
>>>>>>> c990bd33c578e7d30dc86459ce71e11824d52976
    fontFamily = "Montserrat",
    textColor = "text-white",
    animationDelay = 2300
}: BlurTextAnimationProps) {

    const [quoteIndex, setQuoteIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const animationTimeoutRef = useRef<number | null>(null);
    const resetTimeoutRef = useRef<number | null>(null);

    const text = QUOTES[quoteIndex];

    const textWords = useMemo(() => {
        const splitWords = text.split(" ");
        const totalWords = splitWords.length;

        return splitWords.map((word, index) => {
            const progress = index / totalWords;

            const exponentialDelay = Math.pow(progress, 0.8) * 0.5;
            const baseDelay = index * 0.06;
            const microVariation = (Math.random() - 0.5) * 0.05;

            return {
                text: word,
                duration: 2.2 + Math.cos(index * 0.3) * 0.3,
                delay: baseDelay + exponentialDelay + microVariation,
                blur: 12 + Math.floor(Math.random() * 8),
                scale: 0.9 + Math.sin(index * 0.2) * 0.05
            };
        });
    }, [text]);

    useEffect(() => {
        const startAnimation = () => {
            setTimeout(() => {
                setIsAnimating(true);
            }, 200);

            let maxTime = 0;
            textWords.forEach(word => {
                const totalTime = word.delay + word.duration;
                maxTime = Math.max(maxTime, totalTime);
            });

            animationTimeoutRef.current = window.setTimeout(() => {
                setIsAnimating(false);

                resetTimeoutRef.current = window.setTimeout(() => {
                    setQuoteIndex(prev => (prev + 1) % QUOTES.length);
                }, animationDelay);
            }, (maxTime + 1) * 1000);
        };

        startAnimation();

        return () => {
            if (animationTimeoutRef.current) clearTimeout(animationTimeoutRef.current);
            if (resetTimeoutRef.current) clearTimeout(resetTimeoutRef.current);
        };
    }, [textWords, animationDelay]);

    return (
        <div className={`flex items-center justify-center -mt-20 ${className}`}>
            <div className="text-center max-w-7xl px-8">
                <p className={`${textColor} ${fontSize} ${fontFamily} font-light leading-tight sm:leading-snug md:leading-relaxed tracking-wide`}>
                    {textWords.map((word, index) => (
                        <span
                            key={index}
                            className={`inline-block transition-all ${isAnimating ? "opacity-100" : "opacity-0"}`}
                            style={{
                                transitionDuration: `${word.duration}s`,
                                transitionDelay: `${word.delay}s`,
                                filter: isAnimating
                                    ? "blur(0px) brightness(1)"
                                    : `blur(${word.blur}px) brightness(0.6)`,
                                transform: isAnimating
                                    ? "translateY(0) scale(1) rotateX(0deg)"
                                    : `translateY(20px) scale(${word.scale}) rotateX(-15deg)`,
                                marginRight: "0.35em",
                                willChange: "filter, transform, opacity"
                            }}
                        >
                            {word.text}
                        </span>
                    ))}
                </p>
            </div>
        </div>
    );
}
