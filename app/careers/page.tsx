"use client"

import { motion, AnimatePresence } from "framer-motion"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { ArrowRight, BookOpen, Clock, Heart, MapPin, ShieldCheck, TrendingUp, Users } from "lucide-react"
import React, { useState } from "react"
import careers from '@/public/Hero-img/career-hero.jpg'
import team from '@/public/misc-img/hired.jpeg'
import Image from "next/image"



// ===== JOB OPENINGS =====
type Opening = {
  id: number
  title: string
  location: string
  type: string
  department: string
}

const openings: Opening[] = [
  {
    id: 1,
    title: "Quantitative Researcher",
    location: "Ahmedabad, India",
    type: "Full-time",
    department: "Research",

  },
  {
    id: 2,
    title: "Senior Software Engineer",
    location: "Ahmedabad, India",
    type: "Full-time",
    department: "Technology",

  },
  {
    id: 2,
    title: "Senior Research Analyst",
    location: "Ahmedabad, India",
    type: "Full-time",
    department: "Technology",

  },
  {
    id: 2,
    title: "Junior Research Analyst",
    location: "Ahmedabad, India",
    type: "Full-time",
    department: "Technology",

  },
  {
    id: 4,
    title: "Risk Analyst",
    location: "Ahmedabad, India",
    type: "Full-time",
    department: "Risk",

  },
]

// =======================================
//              PAGE COMPONENT
// =======================================
export default function CareersPage() {
  const departments = ["All", ...Array.from(new Set(openings.map(o => o.department)))]
  const [selectedDept, setSelectedDept] = useState("All")

  const filteredOpenings =
    selectedDept === "All"
      ? openings
      : openings.filter((o) => o.department === selectedDept)

  return (
    <>
      {/* HERO */}
      <PageHero
        title="Join Young Turtle"
        subtitle="“The people who are crazy enough to think they can change the world are the ones who do.”"
      />




      {/* FILTERED POSITIONS (INTERACTIVE GRID) */}
      <SectionWrapper className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Filters */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-aqua-mist font-bold">Opportunities</span>
              <h2 className="mt-4 font-serif text-4xl text-abyssal-blue">Open Positions</h2>
            </div>

            <div className="flex flex-wrap gap-2 ">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider transition-all duration-300 border cursor-pointer 
                    ${selectedDept === dept
                      ? "bg-[#275669] text-white border-[#275669]"
                      : "bg-transparent text-muted-foreground border-border hover:bg-[#275669] hover:text-[#ffffff]"
                    }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Filtered Results */}
          <motion.div layout className="grid gap-4">
            <AnimatePresence mode="popLayout">
              {filteredOpenings.map((job) => (
                <motion.div
                  layout
                  key={job.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="group relative bg-sunbeam-pearl border border-border p-6 md:p-8 hover:border-aqua-mist/50 transition-colors duration-300 overflow-hidden"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-abyssal-blue scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-2 py-1 bg-white border border-border text-[10px] uppercase tracking-wider text-abyssal-blue font-semibold">
                          {job.department}
                        </span>
                        <span className="text-xs text-muted-foreground">{job.type}</span>
                      </div>

                      <h3 className="font-serif text-2xl text-abyssal-blue mb-2 group-hover:text-[#275669] group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-abyssal-blue group-hover:to-aqua-mist transition-all duration-300">
                        {job.title}
                      </h3>

                      <div className="flex flex-wrap items-center gap-4">
                        <div className="flex items-center gap-1.5 text-xs font-medium text-abyssal-blue/70">
                          <MapPin size={12} className="text-aqua-mist" />
                          {job.location}
                        </div>

                      </div>
                    </div>

                    <div className="flex items-center">
                      <button className="relative overflow-hidden pl-6 pr-12 py-3 bg-[#275669] text-white text-xs uppercase tracking-widest transition-all duration-300 group/btn cursor-pointer">
                        <span className="relative z-10">Apply Now</span>
                        <div className="absolute inset-0 bg-aqua-mist w-full h-full -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300 ease-out z-0 opacity-20" />
                        <ArrowRight size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-aqua-mist group-hover/btn:right-3 transition-all duration-300" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {filteredOpenings.length === 0 && (
              <div className="text-center py-20 border border-dashed border-border">
                <p className="text-muted-foreground">No openings found in this department.</p>
                <button
                  onClick={() => setSelectedDept("All")}
                  className="mt-4 text-abyssal-blue underline text-sm"
                >
                  Clear filters
                </button>
              </div>
            )}
          </motion.div>

        </div>
      </SectionWrapper>

      {/* CONTACT CTA */}
      <SectionWrapper className="py-24 bg-abyssal-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="h-px w-full bg-aqua-mist top-10 absolute"></div>
          <div className="h-px w-full bg-aqua-mist bottom-10 absolute"></div>
          <div className="w-px h-full bg-aqua-mist left-10 absolute"></div>
          <div className="w-px h-full bg-aqua-mist right-10 absolute"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-5xl text-sunbeam-pearl mb-6">
              Don't See the Right Fit?
            </h2>
            <p className="text-lg text-sunbeam-pearl/70 mb-10 max-w-xl mx-auto font-light">
              We are always lookingfor exceptional talent. If you believe you can contribute to our mission, we want to hear from you.
            </p>

            <a
              href="mailto:careers@youngturtle.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-aqua-mist text-aqua-mist hover:bg-[#275669] hover:text-white transition-all duration-300 text-sm uppercase tracking-widest"
            >
              Email Your Resume
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </SectionWrapper>

    </>
  )
}
