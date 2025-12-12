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
        <>
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


        </>
    )
}