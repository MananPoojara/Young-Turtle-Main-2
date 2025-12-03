import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, Variants } from 'framer-motion'

export const TortoiseQuote = () => {
    // We use a key to force a complete re-render of the animation cycle
    const [cycleKey, setCycleKey] = useState(0)

    useEffect(() => {
        // Timeline:
        // 0s - 1.5s: Preamble waves in
        // 1.5s - 4.5s: Keywords appear one by one
        // 4.5s - 6.5s: Hold full text
        // 6.5s - 7.5s: Fade out (handled by AnimatePresence exit)
        const cycleDuration = 7500

        const timer = setTimeout(() => {
            setCycleKey((prev) => prev + 1)
        }, cycleDuration)

        return () => clearTimeout(timer)
    }, [cycleKey])

    const preambleWords = "In trading, the turtle isn't just slow it is".split(' ')

    // The specific sequence requested
    const keywordSequence = [
        { text: 'patient,', color: 'text-amber-400', size: 'text-4xl md:text-6xl' },
        { text: 'persistent,', color: 'text-amber-400', size: 'text-4xl md:text-6xl' },
        { text: 'and', color: 'text-white opacity-80', size: 'text-2xl md:text-4xl' }, // Smaller connector
        { text: 'precise.', color: 'text-amber-400', size: 'text-4xl md:text-6xl' },
    ]

    // Parent container to coordinate stagger
    const container: Variants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12, // Ripple effect speed for preamble
                delayChildren: 0.2,
            },
        },
        exit: {
            opacity: 0,
            filter: 'blur(10px)',
            scale: 0.95,
            transition: { duration: 0.8, ease: 'easeInOut' },
        },
    }

    // Preamble word animation (The "Wavy" effect)
    const preambleVariant: Variants = {
        hidden: { opacity: 0, y: 20, rotateX: 45 },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: { type: 'spring', stiffness: 50, damping: 20 },
        },
    }

    // Keywords appear one by one after the preamble finishes
    // We manually calculate delay based on index to ensure precise timing control distinct from the preamble stagger
    const keywordContainer: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.6, // Slower stagger for the keywords
                delayChildren: 1.5, // Wait for preamble to finish
            },
        },
    }

    const keywordVariant: Variants = {
        hidden: { opacity: 0, y: 30, scale: 0.8, filter: 'blur(8px)' },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: 'blur(0px)',
            transition: { type: 'spring', stiffness: 40, damping: 12 },
        },
    }

    return (
        <div className='min-h-[300px] flex flex-col justify-center items-center'>
            <AnimatePresence mode='wait'>
                <motion.div
                    key={cycleKey}
                    variants={container}
                    initial='hidden'
                    animate='visible'
                    exit='exit'
                    className='flex flex-col items-center gap-6'
                >
                    {/* === PREAMBLE LINE === */}
                    <div className='flex flex-wrap justify-center gap-x-2 px-4'>
                        {preambleWords.map((word, i) => (
                            <motion.span
                                key={`pre-${i}`}
                                variants={preambleVariant}
                                className='text-white/90 text-lg md:text-2xl font-serif italic tracking-wide'
                            >
                                {word}
                            </motion.span>
                        ))}
                    </div>

                    {/* === KEYWORDS SEQUENCE === */}
                    <motion.div
                        variants={keywordContainer}
                        className='flex flex-wrap justify-center items-baseline gap-x-3 gap-y-2 max-w-5xl px-4'
                    >
                        {keywordSequence.map((item, i) => (
                            <motion.span
                                key={`key-${i}`}
                                variants={keywordVariant}
                                className={`font-serif font-bold tracking-tight ${item.color} ${item.size}`}
                                style={{ textShadow: '0 10px 30px rgba(0,0,0,0.3)' }}
                            >
                                {item.text}
                            </motion.span>
                        ))}
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}