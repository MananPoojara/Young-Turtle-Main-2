'use client'

import { motion } from 'framer-motion'
import { PageHero } from '@/components/page-hero'
import { SectionWrapper } from '@/components/section-wrapper'
import { Award, Users, Globe, Lightbulb } from 'lucide-react'

const values = [
    {
        icon: Award,
        title: 'Excellence',
        description: 'Unwavering commitment to the highest standards in research, execution, and client service.',
    },
    {
        icon: Users,
        title: 'Collaboration',
        description: 'Fostering an environment where diverse perspectives drive innovation and superior outcomes.',
    },
    {
        icon: Globe,
        title: 'Global Perspective',
        description: 'Leveraging worldwide insights while maintaining deep local market expertise.',
    },
    {
        icon: Lightbulb,
        title: 'Innovation',
        description: 'Continuously advancing our methodologies to stay ahead of evolving market dynamics.',
    },
]

const timeline = [
    {
        year: '2009',
        title: 'Foundation',
        description: 'Young Turtle established with a vision to bring institutional-grade quantitative strategies.',
    },
    { year: '2012', title: 'First Billion', description: 'Assets under management surpass $1 billion milestone.' },
    { year: '2016', title: 'Global Expansion', description: 'Opening of offices in London, Singapore, and Hong Kong.' },
    {
        year: '2020',
        title: 'Technology Leadership',
        description: 'Launch of next-generation trading infrastructure and AI capabilities.',
    },
    {
        year: '2024',
        title: 'Continued Growth',
        description: 'Expansion of multi-strategy offerings and institutional partnerships.',
    },
]

export default function AboutPage() {
    return (
        <>
            <PageHero
                title='About Young Turtle'
                subtitle='A legacy of quantitative excellence and institutional trust'
                variant='dots'
            />

            {/* Mission Section */}
            <SectionWrapper className='py-32 bg-sunbeam-pearl'>
                <div className='max-w-7xl mx-auto px-6 lg:px-8'>
                    <div className='grid lg:grid-cols-2 gap-16 items-start'>
                        <div>
                            <span className='text-xs uppercase tracking-[0.3em] text-aqua-mist'>Our Mission</span>
                            <h2 className='mt-4 font-serif text-3xl md:text-4xl text-abyssal-blue text-balance'>
                                Delivering Superior Risk-Adjusted Returns
                            </h2>
                        </div>
                        <div className='space-y-6'>
                            <p className='text-muted-foreground leading-relaxed'>
                                Young Turtle Capital Management is a quantitative investment firm dedicated to
                                generating consistent, risk-adjusted returns for institutional investors through
                                systematic strategies grounded in rigorous research and disciplined execution.
                            </p>
                            <p className='text-muted-foreground leading-relaxed'>
                                Founded on the principles of intellectual curiosity, analytical rigor, and operational
                                excellence, we have built a reputation for navigating complex market environments with
                                precision and foresight.
                            </p>
                            <p className='text-muted-foreground leading-relaxed'>
                                Our name reflects our investment philosophy: the turtle symbolizes patience, longevity,
                                and the wisdom to navigate volatile waters with calm determination.
                            </p>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            {/* Values Section */}
            <SectionWrapper className='py-32 bg-white'>
                <div className='max-w-7xl mx-auto px-6 lg:px-8'>
                    <div className='text-center mb-16'>
                        <span className='text-xs uppercase tracking-[0.3em] text-aqua-mist'>Our Values</span>
                        <h2 className='mt-4 font-serif text-3xl md:text-4xl text-abyssal-blue'>
                            The Principles That Guide Us
                        </h2>
                    </div>
                    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className='text-center group'
                            >
                                <div className='w-16 h-16 mx-auto flex items-center justify-center border border-aqua-mist/30 text-aqua-mist mb-6 group-hover:bg-aqua-mist group-hover:text-white transition-all duration-500'>
                                    <value.icon size={28} strokeWidth={1.5} />
                                </div>
                                <h3 className='font-serif text-xl text-abyssal-blue mb-3'>{value.title}</h3>
                                <p className='text-sm text-muted-foreground leading-relaxed'>{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>

            {/* Timeline Section */}
            <SectionWrapper className='py-32 bg-abyssal-blue'>
                <div className='max-w-7xl mx-auto px-6 lg:px-8'>
                    <div className='text-center mb-16'>
                        <span className='text-xs uppercase tracking-[0.3em] text-aqua-mist'>Our Journey</span>
                        <h2 className='mt-4 font-serif text-3xl md:text-4xl text-sunbeam-pearl'>
                            Milestones of Excellence
                        </h2>
                    </div>

                    <div className='relative'>
                        {/* Timeline line */}
                        <div className='absolute left-1/2 top-0 bottom-0 w-px bg-aqua-mist/30 hidden lg:block' />

                        <div className='space-y-12 lg:space-y-0'>
                            {timeline.map((item, index) => {
                                const isEven = index % 2 === 0
                                return (
                                    <motion.div
                                        key={item.year}
                                        initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className={`relative lg:w-1/2 ${
                                            isEven ? 'lg:pr-16 lg:text-right' : 'lg:pl-16 lg:ml-auto'
                                        }`}
                                    >
                                        {/* marker */}
                                        <div
                                            className={`hidden lg:block absolute top-2 w-3 h-3 rounded-full bg-aqua-mist ${
                                                isEven ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'
                                            }`}
                                            style={{ [isEven ? 'right' : 'left']: '-6px' }}
                                            aria-hidden
                                        />

                                        <div className='bg-[#0D3A54] p-8 border border-aqua-mist/20'>
                                            <span className='font-serif text-3xl text-aqua-mist'>{item.year}</span>
                                            <h3 className='mt-2 font-serif text-xl text-sunbeam-pearl'>{item.title}</h3>
                                            <p className='mt-2 text-sm text-sunbeam-pearl/60'>{item.description}</p>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </>
    )
}
