"use client"

import { motion } from "framer-motion"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"

const leadership = [
  {
    name: "Dr. Eleanor Chen",
    role: "Chief Executive Officer",
    bio: "Former Head of Quantitative Strategies at Goldman Sachs. PhD in Applied Mathematics from MIT.",
    image: "/professional-woman-executive-portrait-corporate.jpg",
  },
  {
    name: "Marcus Webb",
    role: "Chief Investment Officer",
    bio: "20+ years in systematic trading. Previously Portfolio Manager at Two Sigma.",
    image: "/professional-man-executive-portrait-corporate.jpg",
  },
  {
    name: "Dr. Raj Patel",
    role: "Head of Research",
    bio: "Former Tenured Professor at Princeton. Pioneer in machine learning applications for finance.",
    image: "/professional-man-researcher-portrait-corporate.jpg",
  },
  {
    name: "Sarah Lindqvist",
    role: "Chief Risk Officer",
    bio: "15 years in risk management. Previously at Bridgewater Associates.",
    image: "/professional-woman-executive-portrait-corporate.jpg",
  },
]

const teamStats = [
  { value: "42", label: "Investment Professionals" },
  { value: "18", label: "PhDs on Staff" },
  { value: "12", label: "Nationalities" },
  { value: "15+", label: "Avg. Years Experience" },
]

export default function PeoplePage() {
  return (
    <>
      <PageHero title="Meet Our Team" subtitle="World-class talent driving quantitative innovation" variant="dots" />

      {/* Team Stats */}
      <SectionWrapper className="py-20 bg-abyssal-blue">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {teamStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-serif text-4xl md:text-5xl text-aqua-mist">{stat.value}</div>
                <div className="mt-2 text-xs uppercase tracking-widest text-sunbeam-pearl/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Leadership Section */}
      <SectionWrapper className="py-32 bg-sunbeam-pearl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-xs uppercase tracking-[0.3em] text-aqua-mist">Leadership</span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl text-abyssal-blue">Senior Leadership Team</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((person, index) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-muted mb-6">
                  <img
                    src={person.image || "/placeholder.svg"}
                    alt={person.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-abyssal-blue/20 group-hover:bg-transparent transition-all duration-500" />
                </div>
                <h3 className="font-serif text-xl text-abyssal-blue">{person.name}</h3>
                <p className="text-sm text-aqua-mist uppercase tracking-wider mt-1">{person.role}</p>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{person.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Culture Section */}
      <SectionWrapper className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-aqua-mist">Our Culture</span>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl text-abyssal-blue text-balance">
                Where Brilliant Minds Converge
              </h2>
              <div className="mt-8 space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  At Young Turtle, we foster an intellectually rigorous environment where curiosity is encouraged and
                  innovation is celebrated. Our flat organizational structure promotes collaboration across disciplines.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We believe the best ideas can come from anyone, and we provide the resources and autonomy for our team
                  members to pursue groundbreaking research.
                </p>
              </div>
            </div>
            <div className="relative aspect-video bg-muted">
              <img src="/modern-office-collaboration-meeting-professional.jpg" alt="Team collaboration" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
