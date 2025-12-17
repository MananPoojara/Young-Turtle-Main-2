<<<<<<< HEAD
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { PageHero } from '@/components/page-hero'
import { SectionWrapper } from '@/components/section-wrapper'
import React, { useState } from 'react'
import careers from '@/public/Hero-img/career-hero.jpg'
import Image from 'next/image'
import { ArrowRight, MapPin } from 'lucide-react'

// ===== BENEFITS =====
const benefitsList = [
    { text: 'Competitive compensation with performance incentives' },
    { text: 'Comprehensive health, dental, and vision coverage' },
    { text: 'Generous retirement contributions & matching' },
    { text: 'Professional development & education support' },
    { text: 'Flexible working arrangements & remote options' },
    { text: 'Collaborative, intellectually stimulating environment' },
]
=======
"use client"
import React, { useState, ChangeEvent, FormEvent } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, MapPin, X, Upload, CheckCircle2, Loader2, Quote } from "lucide-react"
import { PageHero } from "@/components/page-hero"

// --- Local SectionWrapper to avoid extra file ---
const SectionWrapper = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={className}>{children}</section>
);
>>>>>>> 0d9a738f6b5c1daeb2db304b6c255711b53346fd

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
    id: 3,
    title: "Senior Research Analyst",
    location: "Ahmedabad, India",
    type: "Full-time",
    department: "Technology",
  },
  {
    id: 4,
    title: "Junior Research Analyst",
    location: "Ahmedabad, India",
    type: "Full-time",
    department: "Technology",
  },
  {
    id: 5,
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
    const departments = ['All', ...Array.from(new Set(openings.map((o) => o.department)))]
    const [selectedDept, setSelectedDept] = useState('All')

<<<<<<< HEAD
    const filteredOpenings = selectedDept === 'All' ? openings : openings.filter((o) => o.department === selectedDept)
=======
  // --- Modal & Form State ---
  const [selectedJob, setSelectedJob] = useState<Opening | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cv: null as File | null,
  })

  const filteredOpenings =
    selectedDept === "All"
      ? openings
      : openings.filter((o) => o.department === selectedDept)
>>>>>>> 0d9a738f6b5c1daeb2db304b6c255711b53346fd

  // --- Handlers ---
  const handleApplyClick = (job: Opening) => {
    setSelectedJob(job)
    setIsSuccess(false)
    setFormData({ name: "", email: "", phone: "", cv: null })
  }

  const handleCloseModal = () => {
    setSelectedJob(null)
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, cv: e.target.files![0] }))
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    console.log("Submitting application...", {
      job: selectedJob?.title,
      ...formData
    })

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Reset and show success
    setIsSubmitting(false)
    setIsSuccess(true)
  }

  return (
    <>
      {/* HERO */}
      <PageHero
        title="Join Young Turtle"
        subtitle="Build your career at the forefront of quantitative finance"
      />

<<<<<<< HEAD
            {/* WHY YOUNG TURTLE */}
            <SectionWrapper className='py-24 lg:py-32 relative overflow-hidden'>
                <div className='absolute top-0 left-0 w-64 h-64 bg-aqua-mist/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2' />

                <div className='max-w-7xl mx-auto px-6 lg:px-8 relative z-10'>
                    <div className='grid lg:grid-cols-12 gap-16 items-start'>
                        {/* LEFT SIDE CONTENT */}
                        <div className='lg:col-span-5 sticky top-24'>
                            <motion.span
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className='inline-block py-1 px-3 text-[12px] uppercase tracking-[0.2em] text-[#275669] font-semibold mb-6'
                            >
                                Why Young Turtle
                            </motion.span>

                            <h2 className='font-serif text-4xl md:text-5xl text-abyssal-blue leading-tight'>
                                Where intellect meets{' '}
                                <span className='text-transparent bg-clip-text bg-gradient-to-r from-abyssal-blue to-aqua-mist/80'>
                                    impact.
                                </span>
                            </h2>

              <h2 className="font-serif text-4xl md:text-5xl text-abyssal-blue leading-tight">
                Where intellect meets{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-abyssal-blue to-aqua-mist/80">
                  impact.
                </span>
              </h2>

              <p className="mt-8 text-muted-foreground leading-relaxed text-lg font-light">
                We seek exceptional individuals who combine intellectual curiosity with rigorous analytical skills.
                At Young Turtle, you won’t just analyze the market—you’ll help shape its future alongside some of the
                brightest minds in quantitative finance.
              </p>

              <div className="mt-10 flex gap-4">
                <div className="flex -space-x-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-sunbeam-pearl bg-gray-200 overflow-hidden">
                      <img src={`https://picsum.photos/100/100?random=${i}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>

                <div className="flex flex-col justify-center">
                  <span className="text-abyssal-blue font-bold">150+</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wide">Global Experts</span>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE – BENEFITS GRID */}
            <div className="lg:col-span-7">
              <h3 className="font-serif text-2xl text-abyssal-blue mb-8 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-[#275669]"></span>
                Benefits & Perks
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                {benefitsList.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="p-6 bg-white border border-border rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-aqua-mist/10 flex items-center justify-center text-[#275669] group-hover:bg-transparent group-hover:text-aqua-mist transition-colors duration-300 mb-4">
                      <benefit.icon size={20} />
                    </div>
                    <p className="text-sm text-abyssal-blue/80 font-medium leading-relaxed">
                      {benefit.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
=======
      {/* STEVE JOBS QUOTE SECTION - Re-adding for better flow */}
      <SectionWrapper className="py-24 bg-white overflow-hidden relative">
        <div className="absolute top-10 left-10 opacity-5">
          <Quote size={120} className="text-[#275669]" />
        </div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-1 bg-[#fbbf24] mx-auto mb-8 rounded-full" />
            <h2 className="font-serif text-3xl md:text-5xl text-[#275669] leading-tight mb-8 font-medium">
              "Great things in business are never done by one person. <br className="hidden md:block" />They're done by a <span className="text-[#fbbf24] italic">team of people</span>."
            </h2>
          </motion.div>
>>>>>>> 0d9a738f6b5c1daeb2db304b6c255711b53346fd
        </div>
      </SectionWrapper>

      {/* FILTERED POSITIONS (INTERACTIVE GRID) */}
      <SectionWrapper className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Filters */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#fbbf24] font-bold">Opportunities</span>
              <h2 className="mt-4 font-serif text-4xl text-[#275669]">Open Positions</h2>
            </div>

            <div className="flex flex-wrap gap-2 ">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider transition-all duration-300 border cursor-pointer 
                    ${selectedDept === dept
                      ? "bg-[#275669] text-white border-[#275669] shadow-lg"
                      : "bg-white text-gray-500 border-gray-200 hover:bg-[#275669] hover:text-[#ffffff] hover:border-[#275669]"
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
                  className="group relative bg-white border border-gray-200 p-6 md:p-8 hover:border-[#275669]/50 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl rounded-lg"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#275669] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-slate-100 rounded text-[10px] uppercase tracking-wider text-[#275669] font-bold">
                          {job.department}
                        </span>
                        <span className="text-xs text-gray-400">{job.type}</span>
                      </div>

                      <h3 className="font-serif text-2xl text-[#275669] mb-2 group-hover:text-[#275669] transition-colors duration-300">
                        {job.title}
                      </h3>

                      <div className="flex flex-wrap items-center gap-4">
                        <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500">
                          <MapPin size={12} className="text-[#275669]" />
                          {job.location}
                        </div>
                      </div>
                    </div>

<<<<<<< HEAD
                    {/* Filtered Results */}
                    <motion.div layout className='grid gap-4'>
                        <AnimatePresence mode='popLayout'>
                            {filteredOpenings.map((job) => (
                                <motion.div
                                    layout
                                    key={job.id}
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.98 }}
                                    transition={{ duration: 0.2 }}
                                    className='group relative bg-sunbeam-pearl border border-border p-6 md:p-8 hover:border-aqua-mist/50 transition-colors duration-300 overflow-hidden'
                                >
                                    <div className='absolute left-0 top-0 bottom-0 w-1 bg-abyssal-blue scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top' />

                                    <div className='flex flex-col md:flex-row md:items-center justify-between gap-6'>
                                        <div className='flex-1'>
                                            <div className='flex items-center gap-3 mb-3'>
                                                <span className='px-2 py-1 bg-white border border-border text-[10px] uppercase tracking-wider text-abyssal-blue font-semibold'>
                                                    {job.department}
                                                </span>
                                                <span className='text-xs text-muted-foreground'>{job.type}</span>
                                            </div>
=======
                    <div className="flex items-center">
                      <button
                        onClick={() => handleApplyClick(job)}
                        className="relative overflow-hidden pl-6 pr-12 py-3.5 bg-[#275669] text-white text-xs uppercase tracking-widest transition-all duration-300 group/btn cursor-pointer rounded-sm hover:shadow-lg"
                      >
                        <span className="relative z-10 font-bold">Apply Now</span>
                        <div className="absolute inset-0 bg-[#fbbf24] w-full h-full -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300 ease-out z-0" />
                        <ArrowRight size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#ffffff] group-hover/btn:text-[#275669] group-hover/btn:right-3 transition-all duration-300 z-10" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {filteredOpenings.length === 0 && (
              <div className="text-center py-20 border border-dashed border-gray-200 rounded-lg bg-gray-50/50">
                <p className="text-gray-400">No openings found in this department.</p>
                <button
                  onClick={() => setSelectedDept("All")}
                  className="mt-4 text-[#275669] underline text-sm hover:text-[#fbbf24]"
                >
                  Clear filters
                </button>
              </div>
            )}
          </motion.div>
>>>>>>> 0d9a738f6b5c1daeb2db304b6c255711b53346fd

                                            <h3 className='font-serif text-2xl text-abyssal-blue mb-2 group-hover:text-[#275669] group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-abyssal-blue group-hover:to-aqua-mist transition-all duration-300'>
                                                {job.title}
                                            </h3>

                                            <p className='text-sm text-muted-foreground mb-4'>{job.description}</p>

                                            <div className='flex flex-wrap items-center gap-4'>
                                                <div className='flex items-center gap-1.5 text-xs font-medium text-abyssal-blue/70'>
                                                    <MapPin size={12} className='text-aqua-mist' />
                                                    {job.location}
                                                </div>
                                                {job.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className='text-[10px] text-muted-foreground bg-black/5 px-2 py-0.5 rounded'
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className='flex items-center'>
                                            <button className='relative overflow-hidden pl-6 pr-12 py-3 bg-[#275669] text-white text-xs uppercase tracking-widest transition-all duration-300 group/btn cursor-pointer'>
                                                <span className='relative z-10'>Apply Now</span>
                                                <div className='absolute inset-0 bg-aqua-mist w-full h-full -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300 ease-out z-0 opacity-20' />
                                                <ArrowRight
                                                    size={16}
                                                    className='absolute right-4 top-1/2 -translate-y-1/2 text-aqua-mist group-hover/btn:right-3 transition-all duration-300'
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        {filteredOpenings.length === 0 && (
                            <div className='text-center py-20 border border-dashed border-border'>
                                <p className='text-muted-foreground'>No openings found in this department.</p>
                                <button
                                    onClick={() => setSelectedDept('All')}
                                    className='mt-4 text-abyssal-blue underline text-sm'
                                >
                                    Clear filters
                                </button>
                            </div>
                        )}
                    </motion.div>
                </div>
            </SectionWrapper>

            {/* CONTACT CTA */}
            <SectionWrapper className='py-24 bg-abyssal-blue relative overflow-hidden'>
                <div className='absolute inset-0 opacity-10 pointer-events-none'>
                    <div className='h-px w-full bg-aqua-mist top-10 absolute'></div>
                    <div className='h-px w-full bg-aqua-mist bottom-10 absolute'></div>
                    <div className='w-px h-full bg-aqua-mist left-10 absolute'></div>
                    <div className='w-px h-full bg-aqua-mist right-10 absolute'></div>
                </div>

                <div className='max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className='font-serif text-4xl md:text-5xl text-sunbeam-pearl mb-6'>
                            Don&apos;t See the Right Fit?
                        </h2>
                        <p className='text-lg text-sunbeam-pearl/70 mb-10 max-w-xl mx-auto font-light'>
                            We are always lookingfor exceptional talent. If you believe you can contribute to our
                            mission, we want to hear from you.
                        </p>

                        <a
                            href='mailto:careers@youngturtle.com'
                            className='inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-aqua-mist text-aqua-mist hover:bg-[#275669] hover:text-white transition-all duration-300 text-sm uppercase tracking-widest'
                        >
                            Email Your Resume
                            <ArrowRight size={16} />
                        </a>
                    </motion.div>
                </div>
            </SectionWrapper>
        </div>
<<<<<<< HEAD
        </>
    )
}
=======
      </SectionWrapper>

      {/* CONTACT CTA */}
      <SectionWrapper className="py-24 bg-[#ffffff] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-5xl text-[#275669] mb-6">
              Don't See the Right Fit?
            </h2>
            <p className="text-lg text-[#275669]/70 mb-10 max-w-xl mx-auto font-light">
              We are always looking for exceptional talent. If you believe you can contribute to our mission, we want to hear from you.
            </p>

            <a
              href="mailto:career@youngturtle.ooo"
              className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-[#275669] text-[#275669] hover:bg-[#275669] hover:text-[#ffffff] hover:border-white transition-all duration-300 text-sm uppercase tracking-widest font-bold rounded-full"
            >
              Email Your Resume
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="absolute inset-0 bg-[#0f242e]/80 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              className="relative w-full max-w-lg bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Header */}
              <div className="px-8 pt-10 pb-6 bg-gradient-to-br from-[#275669] to-[#1e4352] text-white relative">
                <div className="absolute top-0 right-0 p-4">
                  <button
                    onClick={handleCloseModal}
                    className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white"
                  >
                    <X size={18} />
                  </button>
                </div>

                <span className="inline-block px-2 py-1 bg-[#fbbf24] text-[#275669] text-[10px] font-bold tracking-widest uppercase rounded mb-3">
                  {selectedJob.department}
                </span>
                <h3 className="font-serif text-3xl leading-none mb-2">{selectedJob.title}</h3>
                <div className="flex items-center text-white/60 text-sm">
                  <MapPin size={14} className="mr-1" />
                  {selectedJob.location}
                </div>
              </div>

              {/* Form Content */}
              <div className="px-8 py-8 overflow-y-auto bg-white custom-scrollbar">
                {!isSuccess ? (
                  <form onSubmit={handleSubmit} className="space-y-5">

                    <div className="space-y-4">
                      <div className="relative">
                        <input
                          required
                          type="text"
                          name="name"
                          id="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="peer w-full px-4 py-3 bg-slate-50 border-2 border-transparent rounded-lg focus:bg-white focus:border-[#275669] outline-none transition-all placeholder-transparent text-gray-800"
                          placeholder="Full Name"
                        />
                        <label htmlFor="name" className="absolute left-4 -top-2.5 bg-white px-1 text-xs font-bold text-[#275669] transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-[#275669] peer-focus:text-xs peer-focus:bg-white">
                          Full Name
                        </label>
                      </div>

                      <div className="relative">
                        <input
                          required
                          type="email"
                          name="email"
                          id="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="peer w-full px-4 py-3 bg-slate-50 border-2 border-transparent rounded-lg focus:bg-white focus:border-[#275669] outline-none transition-all placeholder-transparent text-gray-800"
                          placeholder="Email Address"
                        />
                        <label htmlFor="email" className="absolute left-4 -top-2.5 bg-white px-1 text-xs font-bold text-[#275669] transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-[#275669] peer-focus:text-xs peer-focus:bg-white">
                          Email Address
                        </label>
                      </div>

                      <div className="relative">
                        <input
                          required
                          type="tel"
                          name="phone"
                          id="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="peer w-full px-4 py-3 bg-slate-50 border-2 border-transparent rounded-lg focus:bg-white focus:border-[#275669] outline-none transition-all placeholder-transparent text-gray-800"
                          placeholder="Phone Number"
                        />
                        <label htmlFor="phone" className="absolute left-4 -top-2.5 bg-white px-1 text-xs font-bold text-[#275669] transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-[#275669] peer-focus:text-xs peer-focus:bg-white">
                          Phone Number
                        </label>
                      </div>
                    </div>

                    <div>
                      <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                        Resume / CV
                      </span>
                      <div className="relative group">
                        <input
                          required
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          id="file-upload"
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        />
                        <div className={`border-2 border-dashed rounded-xl ${formData.cv ? 'border-[#2dd4bf] bg-[#2dd4bf]/5' : 'border-gray-200 bg-slate-50'} p-8 flex flex-col items-center justify-center text-center transition-all group-hover:border-[#275669]/50 group-hover:bg-white`}>
                          {formData.cv ? (
                            <div className="flex flex-col items-center animate-in fade-in zoom-in duration-300">
                              <div className="w-12 h-12 rounded-full bg-[#2dd4bf]/20 flex items-center justify-center mb-2">
                                <CheckCircle2 className="text-[#275669]" size={24} />
                              </div>
                              <span className="text-sm font-bold text-[#275669]">{formData.cv.name}</span>
                              <span className="text-[10px] text-gray-500 mt-1 uppercase tracking-wide">Click to replace</span>
                            </div>
                          ) : (
                            <>
                              <Upload className="text-gray-400 mb-3 group-hover:text-[#275669] transition-colors" size={28} />
                              <span className="text-sm text-gray-600 font-medium block mb-1">Upload your resume</span>
                              <span className="text-[10px] text-gray-400">PDF, DOCX up to 10MB</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-[#275669] text-white font-bold text-sm uppercase tracking-[0.15em] rounded-lg hover:bg-[#1e4352] hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-4"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="animate-spin" size={18} />
                          Processing...
                        </>
                      ) : (
                        "Submit Application"
                      )}
                    </button>

                    <p className="text-[10px] text-gray-400 text-center">
                      Your information is secure and encrypted.
                    </p>
                  </form>
                ) : (
                  <div className="flex flex-col items-center justify-center py-10 text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center shadow-sm">
                      <CheckCircle2 className="text-green-600 w-10 h-10" />
                    </div>
                    <div>
                      <h4 className="text-3xl font-serif text-[#275669] mb-2">Received!</h4>
                      <p className="text-gray-500 text-sm max-w-[260px] mx-auto leading-relaxed">
                        Thanks <strong>{formData.name}</strong>, we've got your details. Good luck!
                      </p>
                    </div>

                    <button
                      onClick={handleCloseModal}
                      className="px-8 py-3 bg-gray-100 text-[#275669] font-bold text-xs uppercase tracking-widest rounded-full hover:bg-gray-200 transition-colors"
                    >
                      Close Window
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
>>>>>>> 0d9a738f6b5c1daeb2db304b6c255711b53346fd
