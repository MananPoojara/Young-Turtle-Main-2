'use client'

import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

type Testimonial = {
    quote: string
    name: string
    src: string
}

export const AnimatedTestimonials = ({
    testimonials,
    autoplay = false,
}: {
    testimonials: Testimonial[]
    autoplay?: boolean
}) => {
    const [active, setActive] = useState(0)

    const handleNext = () => {
        setActive((prev) => (prev + 1) % testimonials.length)
    }

    const handlePrev = () => {
        setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    const isActive = (index: number) => index === active

    useEffect(() => {
        if (autoplay) {
            const interval = setInterval(handleNext, 5000)
            return () => clearInterval(interval)
        }
    }, [autoplay])

    const randomRotateY = () => Math.floor(Math.random() * 21) - 10

    return (
        <div className='mx-auto max-w-full px-4 py-12 font-sans antialiased sm:max-w-sm md:max-w-4xl md:px-8 lg:px-12'>
            <div className='relative grid grid-cols-1 gap-8 md:grid-cols-2'>
                {/* Image stack */}
                <div className='w-full'>
                    <div className='relative h-80 w-full overflow-hidden sm:h-96 md:h-[400px]'>
                        <AnimatePresence>
                            {testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={testimonial.src}
                                    initial={{
                                        opacity: 0,
                                        scale: 0.9,
                                        z: -100,
                                        rotate: randomRotateY(),
                                    }}
                                    animate={{
                                        opacity: isActive(index) ? 1 : 0.7,
                                        scale: isActive(index) ? 1 : 0.95,
                                        z: isActive(index) ? 0 : -100,
                                        rotate: isActive(index) ? 0 : randomRotateY(),
                                        zIndex: isActive(index) ? 40 : testimonials.length + 2 - index,
                                        y: isActive(index) ? [0, -80, 0] : 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        scale: 0.9,
                                        z: 100,
                                        rotate: randomRotateY(),
                                    }}
                                    transition={{
                                        duration: 0.4,
                                        ease: 'easeInOut',
                                    }}
                                    className='absolute inset-0 h-full w-full rounded-3xl object-cover object-center'
                                >
                                    <Image
                                        src={testimonial.src}
                                        alt={testimonial.name}
                                        fill
                                        draggable={false}
                                        className='rounded-3xl object-cover object-center'
                                    />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Text + controls */}
                <div className='flex flex-col justify-between py-4 text-[#275669]'>
                    <motion.div
                        key={active}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                    >
                        <motion.p className='italic mt-6 mb-6 text-xl'>
                            <span className='font-bold'>&quot;&nbsp;</span>
                            {testimonials[active].quote.split(' ').map((word, index) => (
                                <motion.span
                                    key={index}
                                    initial={{
                                        filter: 'blur(10px)',
                                        opacity: 0,
                                        y: 5,
                                    }}
                                    animate={{
                                        filter: 'blur(0px)',
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        duration: 0.2,
                                        ease: 'easeInOut',
                                        delay: 0.02 * index,
                                    }}
                                    className='inline-block'
                                >
                                    {word}&nbsp;
                                </motion.span>
                            ))}
                            <span className='font-bold'>&quot;</span>
                        </motion.p>
                        <h3 className='text-xl font-bold sm:text-2xl'>-&nbsp;{testimonials[active].name}</h3>
                    </motion.div>

                    <div className='flex gap-4 pt-10 md:pt-0'>
                        <button
                            onClick={handlePrev}
                            className='group/button flex h-7 w-7 items-center justify-center rounded-full bg-[#275669]'
                        >
                            <IconArrowLeft className='h-5 w-5 text-[#ffffff] transition-transform duration-300 group-hover/button:rotate-12' />
                        </button>
                        <button
                            onClick={handleNext}
                            className='group/button flex h-7 w-7 items-center justify-center rounded-full bg-[#275669]'
                        >
                            <IconArrowRight className='h-5 w-5 text-[#ffffff] transition-transform duration-300 group-hover/button:-rotate-12' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
