import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';

interface PageHeroProps {
    title: string;
    subtitle?: string;
    src?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
    title,
    subtitle,
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // --- Configuration ---
        const particleCount = 60;
        const particles: any[] = [];

        // Lorenz Attractor Constants
        const SIGMA = 10;
        const RHO = 28;
        const BETA = 8 / 3;
        const DT = 0.006;

        // Interaction State
        let rotationX = 0;
        let rotationY = 0;
        let targetRotationX = 0;
        let targetRotationY = 0;

        // Initialize Particles
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: (Math.random() - 0.5) * 20,
                y: (Math.random() - 0.5) * 20,
                z: (Math.random() - 0.5) * 20 + 25,
                color: Math.random() > 0.4 ? '#ffffff' : '#fbbf24', // White or Amber
                history: []
            });
        }

        const resize = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = container.clientWidth * dpr;
            canvas.height = container.clientHeight * dpr;
            ctx.scale(dpr, dpr);
            canvas.style.width = `${container.clientWidth}px`;
            canvas.style.height = `${container.clientHeight}px`;
        };
        window.addEventListener('resize', resize);
        resize();

        const handleMouseMove = (e: MouseEvent) => {
            const { innerWidth, innerHeight } = window;
            targetRotationY = (e.clientX / innerWidth - 0.5) * 2;
            targetRotationX = (e.clientY / innerHeight - 0.5) * 2;
        };
        window.addEventListener('mousemove', handleMouseMove);

        let animationFrameId: number;

        // --- Animation Loop ---
        const animate = () => {
            const width = container.clientWidth;
            const height = container.clientHeight;

            // Trail Effect: Fade out previous frame using semi-transparent background
            ctx.fillStyle = 'rgba(39, 86, 105, 0.15)'; // #275669 with opacity
            ctx.fillRect(0, 0, width, height);

            // Smooth rotation
            rotationX += (targetRotationX - rotationX) * 0.02;
            rotationY += (targetRotationY - rotationY) * 0.02;

            const cx = width / 2;
            const cy = height / 2;
            const scale = Math.min(width, height) / 45;

            particles.forEach((p) => {
                // 1. Lorenz Attractor Equations
                const dx = (SIGMA * (p.y - p.x)) * DT;
                const dy = (p.x * (RHO - p.z) - p.y) * DT;
                const dz = (p.x * p.y - BETA * p.z) * DT;

                p.x += dx;
                p.y += dy;
                p.z += dz;

                // 2. 3D Rotation
                let x1 = p.x * Math.cos(rotationY) - p.z * Math.sin(rotationY);
                let z1 = p.z * Math.cos(rotationY) + p.x * Math.sin(rotationY);
                let y1 = p.y;

                let y2 = y1 * Math.cos(rotationX) - z1 * Math.sin(rotationX);
                let z2 = z1 * Math.cos(rotationX) + y1 * Math.sin(rotationX);
                let x2 = x1;

                // 3. Projection
                const x2d = cx + x2 * scale;
                const y2d = cy + y2 * scale;

                // 4. Draw
                ctx.beginPath();
                if (p.history.length > 0) {
                    ctx.moveTo(p.history[p.history.length - 1].x, p.history[p.history.length - 1].y);
                    ctx.lineTo(x2d, y2d);
                } else {
                    ctx.fillRect(x2d, y2d, 1, 1);
                }

                ctx.strokeStyle = p.color;
                ctx.lineWidth = 1.5;
                ctx.lineCap = 'round';
                ctx.stroke();

                p.history.push({ x: x2d, y: y2d });
                if (p.history.length > 8) p.history.shift();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();
        setIsLoaded(true);

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <section ref={containerRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#275669]">
            <canvas
                ref={canvasRef}
                className={`absolute inset-0 z-0 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            />

            {/* Gradient Overlay for Text Readability and Vignette */}
            <div className="absolute inset-0 z-10 bg-radial-gradient pointer-events-none" />

            <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
                {/* Title Animation */}
                <h1 className="text-5xl sm:text-7xl md:text-8xl font-serif font-medium text-white mb-6 tracking-tight leading-tight opacity-0 animate-[fadeInUp_1s_ease-out_forwards_0.2s] mix-blend-overlay">
                    {title}
                </h1>

                {/* Subtitle Animation */}
                {subtitle && (
                    <p className="text-lg sm:text-2xl text-[#a5c0cc] font-light max-w-3xl mx-auto leading-relaxed opacity-0 animate-[fadeInUp_1s_ease-out_forwards_0.5s]">
                        {subtitle}
                    </p>
                )}
            </div>

            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20 opacity-0 animate-[fadeIn_1s_ease-out_forwards_1.5s]">
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">Scroll</span>
                <ArrowDown className="w-5 h-5 text-[#fbbf24] animate-bounce" />
            </div>

            <style>{`
                .bg-radial-gradient {
                    background: radial-gradient(circle at center, transparent 20%, rgba(39, 86, 105, 0.4) 60%, rgba(39, 86, 105, 1) 100%);
                }
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
            `}</style>
        </section>
    );
};