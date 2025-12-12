"use client"

import { motion, AnimatePresence } from "framer-motion"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { ArrowRight, BookOpen, Clock, Heart, MapPin, ShieldCheck, TrendingUp, Users, X, Upload, CheckCircle2, Loader2 } from "lucide-react"
import React, { useState, ChangeEvent, FormEvent } from "react"
import careers from '@/public/Hero-img/career-hero.jpg'

// ===== BENEFITS =====
const benefitsList = [
  { icon: TrendingUp, text: "Competitive compensation with performance incentives" },
  { icon: Heart, text: "Comprehensive health, dental, and vision coverage" },
  { icon: ShieldCheck, text: "Generous retirement contributions & matching" },
  { icon: BookOpen, text: "Professional development & education support" },
  { icon: Clock, text: "Flexible working arrangements & remote options" },
  { icon: Users, text: "Collaborative, intellectually stimulating environment" },
]

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
  const departments = ["All", ...Array.from(new Set(openings.map(o => o.department)))]
  const [selectedDept, setSelectedDept] = useState("All")

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

    // Simulate API call to career@youngturtle.ooo
    console.log("Submitting application to career@youngturtle.ooo", {
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

      {/* WHY YOUNG TURTLE */}
      <SectionWrapper className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-aqua-mist/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-start">

            {/* LEFT SIDE CONTENT */}
            <div className="lg:col-span-5 sticky top-24">
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-block py-1 px-3 border border-aqua-mist/40 rounded-full text-[10px] uppercase tracking-[0.2em] text-abyssal-blue font-semibold mb-6"
              >
                Why Young Turtle
              </motion.span>

              <h2 className="font-serif text-4xl md:text-5xl text-abyssal-blue leading-tight">
                Where intellect meets{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-abyssal-blue to-aqua-mist/80">
                  impact.
                </span>
              </h2>

              <p className="mt-8 text-muted-foreground leading-relaxed text-lg font-light">
                We seek exceptional individuals who combine intellectual curiosity with rigorous analytical skills.
                At Young Turtle, you won't just analyze the market—you'll help shape its future alongside some of the
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
        </div>
      </SectionWrapper>



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
                      <button 
                        onClick={() => handleApplyClick(job)}
                        className="relative overflow-hidden pl-6 pr-12 py-3 bg-[#275669] text-white text-xs uppercase tracking-widest transition-all duration-300 group/btn cursor-pointer"
                      >
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
              href="mailto:career@youngturtle.ooo"
              className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-aqua-mist text-aqua-mist hover:bg-[#275669] hover:text-white transition-all duration-300 text-sm uppercase tracking-widest"
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              className="relative w-full max-w-md bg-white shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Header */}
              <div className="px-8 pt-8 pb-6 bg-[#1a3a47] text-white flex justify-between items-start">
                <div>
                  <span className="text-[#5db3c9] text-[10px] font-semibold tracking-[0.15em] uppercase mb-2 block">
                    APPLYING FOR
                  </span>
                  <h3 className="font-serif text-3xl leading-tight">{selectedJob.title}</h3>
                  <p className="text-sm text-white/50 mt-2">{selectedJob.location}</p>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="p-1 hover:bg-white/10 rounded transition-colors -mt-1"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Form Content */}
              <div className="px-8 py-8 overflow-y-auto bg-white">
                {!isSuccess ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-[11px] font-bold text-gray-900 uppercase tracking-[0.1em] mb-3">
                        Full Name
                      </label>
                      <input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3.5 bg-white border border-gray-300 focus:border-[#5db3c9] focus:ring-2 focus:ring-[#5db3c9]/20 outline-none transition-all placeholder:text-gray-400 text-[15px]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-gray-900 uppercase tracking-[0.1em] mb-3">
                        Email Address
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3.5 bg-white border border-gray-300 focus:border-[#5db3c9] focus:ring-2 focus:ring-[#5db3c9]/20 outline-none transition-all placeholder:text-gray-400 text-[15px]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-gray-900 uppercase tracking-[0.1em] mb-3">
                        Phone Number
                      </label>
                      <input
                        required
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3.5 bg-white border border-gray-300 focus:border-[#5db3c9] focus:ring-2 focus:ring-[#5db3c9]/20 outline-none transition-all placeholder:text-gray-400 text-[15px]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-gray-900 uppercase tracking-[0.1em] mb-3">
                        Upload CV / Resume
                      </label>
                      <div className="relative group">
                        <input
                          required
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          id="file-upload"
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        />
                        <div className={`border-2 border-dashed ${formData.cv ? 'border-[#5db3c9] bg-[#5db3c9]/5' : 'border-gray-300'} p-8 flex flex-col items-center justify-center text-center transition-all group-hover:border-[#5db3c9]/60`}>
                          {formData.cv ? (
                             <>
                               <CheckCircle2 className="text-[#5db3c9] mb-2" size={28} />
                               <span className="text-sm font-medium text-gray-900">{formData.cv.name}</span>
                               <span className="text-xs text-gray-500 mt-1.5">Click to change</span>
                             </>
                          ) : (
                            <>
                              <Upload className="text-gray-400 mb-3 group-hover:text-[#5db3c9] transition-colors" size={28} />
                              <span className="text-sm text-gray-900 font-medium block mb-1">Click to upload or drag and drop</span>
                              <span className="text-xs text-gray-500">PDF, DOCX up to 10MB</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-[#2c5f6f] text-white font-semibold text-sm uppercase tracking-[0.15em] hover:bg-[#234852] transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-6"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="animate-spin" size={18} />
                          SENDING...
                        </>
                      ) : (
                        "SUBMIT APPLICATION"
                      )}
                    </button>
                    
                    <p className="text-[11px] text-gray-500 text-center mt-4">
                      By submitting, you agree to our privacy policy.
                    </p>
                  </form>
                ) : (
                  <div className="flex flex-col items-center justify-center py-10 text-center space-y-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-2">
                      <CheckCircle2 className="text-green-600 w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-serif text-abyssal-blue">Application Received!</h4>
                    <p className="text-muted-foreground max-w-xs">
                      Thank you, {formData.name}. We have received your application for <strong>{selectedJob.title}</strong>.
                    </p>
                    <p className="text-xs text-muted-foreground pt-4 border-t border-border w-full">
                       A confirmation email has been sent to career@youngturtle.ooo
                    </p>
                    <button
                      onClick={handleCloseModal}
                      className="mt-6 px-6 py-2 border border-border text-abyssal-blue text-xs uppercase tracking-widest hover:bg-sunbeam-pearl transition-colors"
                    >
                      Close
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