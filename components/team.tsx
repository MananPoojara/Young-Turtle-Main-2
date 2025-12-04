'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/section-wrapper'
import Image from 'next/image'

const leadership = [
    {
        name: 'Dr. Eleanor Chen',
        role: 'Chief Executive Officer',
        bio: 'Former Head of Quantitative Strategies at Goldman Sachs. PhD in Applied Mathematics from MIT.',
        image: '/misc-img/professional-woman-executive-portrait-corporate.jpg',
    },
    {
        name: 'Marcus Webb',
        role: 'Chief Investment Officer',
        bio: '20+ years in systematic trading. Previously Portfolio Manager at Two Sigma.',
        image: '/misc-img/professional-man-executive-portrait-corporate.jpg',
    },
    {
        name: 'Dr. Raj Patel',
        role: 'Head of Research',
        bio: 'Former Tenured Professor at Princeton. Pioneer in machine learning applications for finance.',
        image: '/misc-img/professional-man-researcher-portrait-corporate.jpg',
    },
    {
        name: 'Sarah Lindqvist',
        role: 'Chief Risk Officer',
        bio: '15 years in risk management. Previously at Bridgewater Associates.',
        image: '/misc-img/professional-woman-executive-portrait-corporate.jpg',
    },
]

export default function PeoplePage() {
    return (
        <>
            {/* Leadership Section */}
            <SectionWrapper className='bg-sunbeam-pearl'>
                <div className='max-w-7xl mx-auto px-6 lg:px-8'>
                    <div className='text-center mb-20'>
                        <span className='text-[#275669] text-xs uppercase tracking-[0.3em] text-aqua-mist font-bold'>
                            Leadership
                        </span>
                        <h2 className='text-[#275669] mt-4 font-serif text-3xl md:text-4xl text-abyssal-blue'>
                            Senior Leadership Team
                        </h2>
                    </div>

                    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 w-full h-full '>
                        {leadership.map((person, index) => (
                            <motion.div
                                key={person.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className='group relative aspect-3/4 overflow-hidden rounded-xl bg-muted shadow-lg'
                            >
                                <Image
                                    src={person.image}
                                    alt={person.name}
                                    className='object-cover transition-transform duration-700 group-hover:scale-110'
                                    fill
                                />

                                {/* Overlay: #275669 with opacity, gradient bottom to top */}
                                <div className='absolute inset-0 bg-linear-to-t from-[#275669]/90 via-[#275669]/20 to-[#275669]/15 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out flex flex-col justify-end p-6'>
                                    {/* Content Container - slides up slightly on hover */}
                                    <div className='transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100'>
                                        <h3 className='font-serif text-xl text-white font-medium tracking-wide'>
                                            {person.name}
                                        </h3>
                                        <p className='text-xs text-white/90 uppercase tracking-widest mt-1 font-semibold'>
                                            {person.role}
                                        </p>
                                        <p className='text-sm text-white/80 mt-3 leading-relaxed border-t border-white/20 pt-3'>
                                            {person.bio}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>

            {/* Culture Section */}
            <SectionWrapper className='py-32 bg-white'>
                <div className='max-w-7xl mx-auto px-6 lg:px-8'>
                    <div className='grid lg:grid-cols-2 gap-16 items-center'>
                        <div>
                            <span className='text-[#275669] text-xs uppercase tracking-[0.3em] text-aqua-mist font-bold'>
                                Our Culture
                            </span>
                            <h2 className='text-[#275669] mt-4 font-serif text-3xl md:text-4xl text-abyssal-blue text-balance'>
                                Where Brilliant Minds Converge
                            </h2>
                            <div className='mt-8 space-y-6'>
                                <p className='text-muted-foreground leading-relaxed'>
                                    At Young Turtle, we foster an intellectually rigorous environment where curiosity is
                                    encouraged and innovation is celebrated. Our flat organizational structure promotes
                                    collaboration across disciplines.
                                </p>
                                <p className='text-muted-foreground leading-relaxed'>
                                    We believe the best ideas can come from anyone, and we provide the resources and
                                    autonomy for our team members to pursue groundbreaking research.
                                </p>
                            </div>
                        </div>
                        <div className='w-full h-full relative aspect-video bg-muted rounded-xl overflow-hidden shadow-2xl'>
                            <Image
                                src='/misc-img/modern-office-collaboration-meeting-professional.jpg'
                                alt='Team collaboration'
                                className='object-cover hover:scale-105 transition-transform duration-1000'
                                fill
                            /> 
                            
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </>
    )
}