'use client'

import { AnimatedTestimonials } from '@/components/ui/animated-testimonial'

export default function AnimatedTestimonialsDemo() {
    const testimonials = [
        {
            quote: "Risk comes from not knowing what you're doing.",
            name: 'Warren Buffett',
            src: '/warren-buffet.jpeg',
        },
        {
            quote: "I know where I'm getting out before I get in.",
            name: 'Bruce Kovner',
            src: '/bruce-kovner.jpeg',
        },
        {
            quote: 'Learn to take losses. The most important thing in making money is not letting your losses get out of hand.',
            name: 'Marty Schwartz',
            src: '/marty-schwartz.jpeg',
        },
        {
            quote: 'The best investors do not target return; they focus first on risk, and only then decide whether the projected return justifies taking each particular risk.',
            name: 'Seth Klarman',
            src: '/seth-klarman.jpeg',
        },
        {
            quote: 'Markets are never wrong - opinions often are.',
            name: 'Jesse Livermore',
            src: '/jesse-livermore.jpeg',
        },
    ]

    return <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
}
