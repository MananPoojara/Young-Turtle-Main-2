import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// -- Configuration --
const CYCLE_DURATION = 4000;
const SYSTEM_DURATION = 5500;

type SlideContent = {
    id: number;
    lines: {
        text: string;
        highlight?: boolean;
        main?: boolean;
    }[][];
};

const slides: SlideContent[] = [
    {
        id: 0,
        lines: [
            [
                { text: "Wealth", highlight: false },
                { text: "isn't", highlight: false },
                { text: "created", highlight: false },
                { text: "by", highlight: false },
                { text: "prediction -", highlight: false },
            ],
            [
                { text: "it's", highlight: false },
                { text: "captured", highlight: false },
                { text: "through", highlight: false },
                { text: "Precision", highlight: true },
            ],
        ],
    },
    {
        id: 1,
        lines: [
            [
                { text: "Precision", highlight: true },
                { text: "is", highlight: false },
                { text: "achieved", highlight: false },
            ],
            [
                { text: "by", highlight: false },
                { text: "Consistency", highlight: true },
            ],
        ],
    },
    {
        id: 2,
        lines: [
            [
                { text: "Consistency", highlight: true },
                { text: "comes", highlight: false },
                { text: "from", highlight: false },
            ],
            [
                { text: "System", highlight: true, main: true },
            ],
        ],
    },
];

export const HeroQuote = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const duration = activeSlide === 2 ? SYSTEM_DURATION : CYCLE_DURATION;
        const timer = setTimeout(() => {
            setActiveSlide((prev) => (prev + 1) % slides.length);
        }, duration);
        return () => clearTimeout(timer);
    }, [activeSlide]);

    return (
        <div className="w-full max-w-[95vw] md:max-w-6xl mx-auto flex flex-col items-center justify-center min-h-[500px] perspective-[1000px]">

            {/* Content Area */}
            <div className="relative w-full min-h-[300px] flex items-center justify-center">
                {/* We use popLayout to allow the exiting text to blur out in place while new text blurs in */}
                <AnimatePresence mode="popLayout">
                    <Slide key={activeSlide} content={slides[activeSlide]} />
                </AnimatePresence>
            </div>
        </div>
    );
};

// -- Subcomponents --

const Slide: React.FC<{ content: SlideContent }> = ({ content }) => {
    return (
        <motion.div
            className="flex flex-col items-center justify-center text-center absolute inset-0 m-auto"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
                visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
                exit: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
            }}
        >
            {content.lines.map((line, i) => (
                <LineRow key={i} words={line} isLastLine={i === content.lines.length - 1} />
            ))}
        </motion.div>
    );
};

const LineRow: React.FC<{ words: { text: string; highlight?: boolean; main?: boolean }[], isLastLine: boolean }> = ({ words }) => {
    return (
        <div className="flex flex-wrap justify-center gap-x-[0.35em] md:gap-x-[0.45em] leading-[1.2] py-1 md:py-2">
            {words.map((word, i) => (
                <Word key={i} {...word} />
            ))}
        </div>
    );
};

const Word: React.FC<{ text: string; highlight?: boolean; main?: boolean }> = ({ text, highlight, main }) => {

    // OPTICAL FOCUS ANIMATION
    // No translation (y-movement). Purely blur, scale, and opacity.
    const blurVariants = {
        hidden: {
            filter: "blur(12px)",
            opacity: 0,
            scale: 1.1
        },
        visible: {
            filter: "blur(0px)",
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1.4,
                ease: [0.25, 0.4, 0.25, 1], // Soft easing
            }
        },
        exit: {
            filter: "blur(8px)",
            opacity: 0,
            scale: 0.95,
            transition: {
                duration: 0.8,
                ease: "easeInOut"
            }
        }
    };

    return (
        <motion.span
            variants={blurVariants}
            className={`
        inline-block relative
        ${main
                    ? 'text-4xl 2xl:text-8xl xl:text-7xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter'
                    : 'text-3xl 2xl:text-7xl xl:text-6xl md:text-4xl lg:text-5xl font-light tracking-tight'
                }
        ${highlight ? 'text-[#ffb900]' : 'text-white/90'}
      `}
        >
            {text}
            {/* Add a subtle glow behind main words for depth */}
        </motion.span>
    );
};