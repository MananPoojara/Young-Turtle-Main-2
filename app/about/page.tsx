'use client'

import { PageHero } from '@/components/page-hero'
import { SectionWrapper } from '@/components/section-wrapper'
import PeoplePage from '@/components/team'
import Image from 'next/image'
import team from '@/public/misc-img/hired.jpeg'
import About from '@/public/Hero-img/about-hero.png'
import { OurPhilosophy } from '@/components/ui/ourPhilosophy'

export default function AboutPage() {
    return (
        <div className='pt-20'>
            <PageHero
                title='About Young Turtle'
                subtitle='A legacy of quantitative excellence and institutional trust'
            />

            {/* Mission Section */}
            <div id='mission-section'>
                <SectionWrapper className='py-32 bg-sunbeam-pearl'>
                    <div className='max-w-7xl mx-auto px-6 lg:px-8'>
                        <div className='grid lg:grid-cols-2 items-start'>
                            <div>
                                <span className='text-[#275669] text-xs uppercase tracking-[0.3em] text-aqua-mist'>
                                    Our Mission
                                </span>
                                <h2 className='text-[#275669] mt-4 font-serif text-3xl md:text-4xl text-abyssal-blue text-balance'>
                                    Delivering Superior Risk-Adjusted Returns
                                </h2>
                            </div>
                            <div className='space-y-6'>
                                <p className='text-muted-foreground leading-relaxed'>
                                    <b className='text-[#275669]'>Young Turtle LLP</b> is an asset management firm
                                    established by a dedicated team of market analysts, mathematicians, and
                                    statisticians. At Young Turtle, we transform market volatility, uncertainty,
                                    complexity, and ambiguity into vision, understanding, clarity, and adaptability
                                    through our proprietary Quantical Models.
                                </p>
                                <p className='text-muted-foreground leading-relaxed'>
                                    These Quantical Models integrate quantitative analysis with technical analysis,
                                    combining data-driven mathematical modelling with advanced price and volume pattern
                                    recognition to deliver a disciplined and systematic trading framework.
                                </p>
                                <p className='text-muted-foreground leading-relaxed'>
                                    This fusion harnesses the strengths of both disciplines—combining rigorous
                                    statistical validation with behaviour-driven price signals—to refine trade timing,
                                    enhance robustness across diverse market regimes, and elevate risk-adjusted returns
                                    through the seamless integration of mathematical precision and real-market dynamics.
                                </p>
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </div>

            <OurPhilosophy />

            {/* Team Section */}
            <div id='leadership-section'>
                <SectionWrapper className='pt-32 bg-sunbeam-pearl'>
                    <PeoplePage />
                </SectionWrapper>
            </div>

            <SectionWrapper className='px-4 py-20 bg-white'>
                <div className='relative rounded-3xl max-w-6xl mx-auto w-full h-[350px] sm:h-[420px]'>
                    <div className='w-full h-full relative overflow-hidden rounded-3xl'>
                        <Image
                            src={team.src}
                            alt='Community'
                            className='object-cover hover:scale-105 transition-transform duration-1000'
                            fill
                        />

                        <div className='absolute inset-0 bg-[#275669]/40 pointer-events-none'></div>

                        <div className='absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none'>
                            <h2 className='text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4'>
                                Join the Team
                            </h2>

                            <p className='text-lg sm:text-xl text-white/90 mb-6'>Take the first step</p>

                            <button className='px-6 py-3 bg-white text-black font-semibold rounded-full hover:cursor-pointer hover:bg-slate-200 transition pointer-events-auto'>
                                Explore Careers
                            </button>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    )
}
