'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

export function OtherUnderwaterHero() {
    const [mounted, setMounted] = useState(false)
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        setMounted(true)
    }, [])

    // Canvas-based underwater effect with light rays
    useEffect(() => {
        if (!mounted || !canvasRef.current) return

        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resize()
        window.addEventListener('resize', resize)

        let animationId: number
        let time = 0

        const animate = () => {
            time += 0.005
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Deep ocean gradient
            const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
            gradient.addColorStop(0, '#0A2F45')
            gradient.addColorStop(0.5, '#0D3A54')
            gradient.addColorStop(1, '#061E2E')
            ctx.fillStyle = gradient
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            // Volumetric light rays
            ctx.save()
            for (let i = 0; i < 6; i++) {
                const x = canvas.width * (0.2 + i * 0.12)
                const rayGradient = ctx.createLinearGradient(x, 0, x + 100, canvas.height)
                rayGradient.addColorStop(0, 'rgba(77, 167, 179, 0.08)')
                rayGradient.addColorStop(0.5, 'rgba(77, 167, 179, 0.03)')
                rayGradient.addColorStop(1, 'rgba(77, 167, 179, 0)')

                ctx.fillStyle = rayGradient
                ctx.beginPath()
                ctx.moveTo(x - 20 + Math.sin(time + i) * 10, 0)
                ctx.lineTo(x + 80 + Math.sin(time + i) * 10, 0)
                ctx.lineTo(x + 200 + Math.sin(time + i) * 20, canvas.height)
                ctx.lineTo(x - 100 + Math.sin(time + i) * 20, canvas.height)
                ctx.closePath()
                ctx.fill()
            }
            ctx.restore()

            // Floating particles (plankton effect)
            ctx.save()
            for (let i = 0; i < 30; i++) {
                const px = (Math.sin(time * 0.3 + i * 0.5) * 0.5 + 0.5) * canvas.width
                const py = (((time * 0.05 + i * 0.1) % 1.2) - 0.1) * canvas.height
                const size = 1 + Math.sin(time + i) * 0.5
                const alpha = 0.2 + Math.sin(time * 0.5 + i) * 0.1

                ctx.beginPath()
                ctx.arc(px, py, size, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(77, 167, 179, ${alpha})`
                ctx.fill()
            }
            ctx.restore()

            animationId = requestAnimationFrame(animate)
        }

        animate()

        return () => {
            window.removeEventListener('resize', resize)
            cancelAnimationFrame(animationId)
        }
    }, [mounted])

    if (!mounted) {
        return <div className='absolute inset-0 bg-gradient-to-b from-abyssal-blue via-[#0D3A54] to-[#061E2E]' />
    }

    return (
        <div className='absolute inset-0 overflow-hidden'>
            <canvas ref={canvasRef} className='absolute inset-0 w-full h-full' />

            {/* Animated turtle silhouette */}
            <motion.div
                className='absolute w-48 h-32 md:w-72 md:h-48 opacity-20'
                initial={{ x: '-20%', y: '80%' }}
                animate={{ x: '120%', y: '-20%' }}
                transition={{
                    duration: 45,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: 'linear',
                }}
            >
                <svg viewBox='0 0 200 120' className='w-full h-full'>
                    <motion.g
                        animate={{ y: [-5, 5, -5] }}
                        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
                    >
                        {/* Turtle shell */}
                        <ellipse cx='100' cy='60' rx='50' ry='35' fill='#4DA7B3' fillOpacity='0.6' />
                        {/* Head */}
                        <ellipse cx='160' cy='55' rx='15' ry='10' fill='#4DA7B3' fillOpacity='0.5' />
                        {/* Front flippers */}
                        <motion.ellipse
                            cx='130'
                            cy='45'
                            rx='25'
                            ry='8'
                            fill='#4DA7B3'
                            fillOpacity='0.5'
                            animate={{ rotate: [-10, 10, -10] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
                            style={{ transformOrigin: '110px 50px' }}
                        />
                        <motion.ellipse
                            cx='130'
                            cy='75'
                            rx='25'
                            ry='8'
                            fill='#4DA7B3'
                            fillOpacity='0.5'
                            animate={{ rotate: [10, -10, 10] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
                            style={{ transformOrigin: '110px 70px' }}
                        />
                        {/* Back flippers */}
                        <ellipse cx='55' cy='50' rx='15' ry='6' fill='#4DA7B3' fillOpacity='0.4' />
                        <ellipse cx='55' cy='70' rx='15' ry='6' fill='#4DA7B3' fillOpacity='0.4' />
                        {/* Shell pattern */}
                        <path
                            d='M80 40 Q100 30 120 40 M70 55 Q100 45 130 55 M75 70 Q100 60 125 70 M85 82 Q100 75 115 82'
                            stroke='#4DA7B3'
                            strokeWidth='1'
                            strokeOpacity='0.3'
                            fill='none'
                        />
                    </motion.g>
                </svg>
            </motion.div>

            {/* Subtle caustics overlay */}
            <motion.div
                className='absolute inset-0 opacity-5'
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.02' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    backgroundSize: '400px 400px',
                }}
                animate={{
                    backgroundPosition: ['0px 0px', '400px 400px'],
                }}
                transition={{
                    duration: 60,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: 'linear',
                }}
            />
        </div>
    )
}
