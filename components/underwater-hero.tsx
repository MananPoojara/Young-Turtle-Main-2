'use client'

import { motion } from 'framer-motion'
import { useRef, useEffect } from 'react'

export function UnderwaterHero() {
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.75 // 0.5 = half speed, 2 = double speed
        }
    }, [])
    return (
        <div className='absolute inset-0 overflow-hidden'>
            {/* Background video */}
            <video
                ref={videoRef}
                className='absolute inset-0 w-full h-full object-cover'
                src='/turtle2_crop.mp4' // ⬅️ put your video file here
                autoPlay
                muted
                loop
                playsInline
            />

            {/* A soft overlay for readability (optional) */}
            <div className='absolute inset-0 bg-abyssal-blue/75 mix-blend-multiply' />

            {/* Optional subtle noise texture */}
            <motion.div
                className='absolute inset-0 opacity-10 pointer-events-none'
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.02' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    backgroundSize: '400px 400px',
                }}
                animate={{ backgroundPosition: ['0px 0px', '400px 400px'] }}
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            />

            {/* Bottom fade */}
            <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-sunbeam-pearl to-transparent' />
        </div>
    )
}
