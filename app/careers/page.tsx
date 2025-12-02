"use client"

import { motion } from "framer-motion"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { ArrowRight, MapPin } from "lucide-react"

const openings = [
  {
    title: "Quantitative Researcher",
    location: "New York",
    type: "Full-time",
    department: "Research",
    description:
      "Develop and implement systematic trading strategies using advanced statistical and machine learning techniques.",
  },
  {
    title: "Senior Software Engineer",
    location: "London",
    type: "Full-time",
    department: "Technology",
    description:
      "Build high-performance trading systems and data infrastructure supporting our quantitative strategies.",
  },
  {
    title: "Portfolio Manager - Macro",
    location: "Singapore",
    type: "Full-time",
    department: "Investment",
    description: "Lead development and management of systematic macro strategies across Asia-Pacific markets.",
  },
  {
    title: "Risk Analyst",
    location: "New York",
    type: "Full-time",
    department: "Risk",
    description: "Monitor and analyze portfolio risks, develop risk models, and enhance our risk management framework.",
  },
]

const benefits = [
  "Competitive compensation with significant performance-based incentives",
  "Comprehensive health, dental, and vision coverage",
  "Generous retirement contributions",
  "Professional development and continuing education support",
  "Flexible working arrangements",
  "Collaborative, intellectually stimulating environment",
]

export default function CareersPage() {
  return (
    <>
      <PageHero
        title="Join Young Turtle"
        subtitle="Build your career at the forefront of quantitative finance"
        variant="network"
      />

      {/* Why Join Section */}
      <SectionWrapper className="py-32 bg-sunbeam-pearl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-aqua-mist">Why Young Turtle</span>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl text-abyssal-blue text-balance">
                Shape the Future of Quantitative Investing
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                We seek exceptional individuals who combine intellectual curiosity with rigorous analytical skills. At
                Young Turtle, you will work alongside some of the brightest minds in quantitative finance, tackling
                complex challenges with real market impact.
              </p>
            </div>
            <div className="bg-white border border-border p-8">
              <h3 className="font-serif text-xl text-abyssal-blue mb-6">Benefits & Perks</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-aqua-mist mt-2 flex-shrink-0" />
                    {benefit}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Open Positions */}
      <SectionWrapper className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-aqua-mist">Opportunities</span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl text-abyssal-blue">Open Positions</h2>
          </div>

          <div className="space-y-6">
            {openings.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group border border-border hover:border-aqua-mist/50 transition-all duration-500 p-8 bg-sunbeam-pearl"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-xs uppercase tracking-wider text-aqua-mist">{job.department}</span>
                      <span className="text-xs text-muted-foreground">•</span>
                      <span className="text-xs text-muted-foreground">{job.type}</span>
                    </div>
                    <h3 className="font-serif text-xl text-abyssal-blue mb-2">{job.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{job.description}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin size={14} />
                      {job.location}
                    </div>
                  </div>
                  <button className="inline-flex items-center gap-2 px-6 py-3 bg-abyssal-blue text-sunbeam-pearl hover:bg-[#0D3A54] transition-all duration-300 text-sm uppercase tracking-widest whitespace-nowrap group-hover:gap-3">
                    Apply Now
                    <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Contact CTA */}
      <SectionWrapper className="py-24 bg-abyssal-blue">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-sunbeam-pearl">{"Don't See the Right Fit?"}</h2>
          <p className="mt-4 text-sunbeam-pearl/70">
            We are always looking for exceptional talent. Send us your resume and tell us how you can contribute.
          </p>
          <a
            href="mailto:careers@youngturtle.com"
            className="inline-flex items-center gap-2 mt-8 text-aqua-mist hover:text-sunbeam-pearl transition-colors duration-300 text-sm uppercase tracking-widest"
          >
            careers@youngturtle.com
            <ArrowRight size={14} />
          </a>
        </div>
      </SectionWrapper>
    </>
  )
}
