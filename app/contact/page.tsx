"use client"

import type React from "react"

import { motion } from "framer-motion"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { MapPin, Phone, Mail, Clock, ChevronRight, ArrowRight, Building2, Globe } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import contact from '@/public/contact-hero.png'


const offices = [
  {
    city: "Ahmedabad, India",
    address: "4th Floor, Safal Profitaire, A-6, Corporate Rd,",
    location: "opp. AUDA Garden, Satellite, Prahlad Nagar,",
    phone: "+1 212 555 0100",
    email: "ahmedabad@youngturtle.com",
    isPrimary: true,
  }
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    investorType: "",
    message: "",
  })

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault()
  //   // Handle form submission
  //   console.log("Form submitted:", formData)
  // }
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate submission delay
    setTimeout(() => {
      console.log("Form submitted:", formData)
      setIsSubmitting(false)
      alert("Thank you for your inquiry. We will be in touch shortly.")
    }, 1000)
  }

  return (
    <>
      <PageHero
        src={contact.src}
        title="Get in Touch"
        subtitle="We welcome inquiries from institutional investors and qualified individuals"
        variant="dots"
      />

      {/* Contact Form & Info */}
      <SectionWrapper className="py-32 bg-sunbeam-pearl">
        <div className="relative z-20 -mt-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto shadow-2xl rounded-3xl overflow-hidden bg-white ring-1 ring-black/5">
            <div className="grid lg:grid-cols-5">

              {/* 
              LEFT COLUMN: CONTACT FORM (3/5 width)
              Clean, spacious, modern input styling.
            */}
              <div className="lg:col-span-3 p-8 md:p-12 lg:p-16">
                <div className="mb-10">
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-aqua-mist mb-3">
                    <span className="w-8 h-[1px] bg-aqua-mist"></span>
                    Inquiry Form
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl text-abyssal-blue">
                    How can we help?
                  </h2>
                  <p className="mt-4 text-slate-500 leading-relaxed">
                    Please fill out the form below. Our investor relations team typically responds within 24 hours to qualified inquiries.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="group">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2 group-focus-within:text-aqua-mist transition-colors">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-slate-50 border-0 border-b-2 border-slate-200 px-4 py-3 text-abyssal-blue focus:ring-0 focus:bg-white focus:border-aqua-mist transition-all duration-300 placeholder:text-slate-300"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2 group-focus-within:text-aqua-mist transition-colors">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full bg-slate-50 border-0 border-b-2 border-slate-200 px-4 py-3 text-abyssal-blue focus:ring-0 focus:bg-white focus:border-aqua-mist transition-all duration-300 placeholder:text-slate-300"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="group">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2 group-focus-within:text-aqua-mist transition-colors">
                        Organization
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="Company Name"
                        className="w-full bg-slate-50 border-0 border-b-2 border-slate-200 px-4 py-3 text-abyssal-blue focus:ring-0 focus:bg-white focus:border-aqua-mist transition-all duration-300 placeholder:text-slate-300"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2 group-focus-within:text-aqua-mist transition-colors">
                        Investor Type
                      </label>
                      <div className="relative">
                        <select
                          value={formData.investorType}
                          onChange={(e) => setFormData({ ...formData, investorType: e.target.value })}
                          className="w-full bg-slate-50 border-0 border-b-2 border-slate-200 px-4 py-3 text-abyssal-blue focus:ring-0 focus:bg-white focus:border-aqua-mist transition-all duration-300 appearance-none cursor-pointer"
                        >
                          <option value="">Select Category...</option>
                          <option value="institutional">Institutional Investor</option>
                          <option value="family-office">Family Office</option>
                          <option value="accredited">Accredited Individual</option>
                          <option value="consultant">Investment Consultant</option>
                          <option value="other">Other</option>
                        </select>
                        <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none rotate-90" />
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2 group-focus-within:text-aqua-mist transition-colors">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your investment goals..."
                      className="w-full bg-slate-50 border-0 border-b-2 border-slate-200 px-4 py-3 text-abyssal-blue focus:ring-0 focus:bg-white focus:border-aqua-mist transition-all duration-300 resize-none placeholder:text-slate-300"
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#275669] text-white overflow-hidden transition-all duration-300 hover:bg-[#1a4f6e] disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      <span className="relative z-10 text-xs font-bold uppercase tracking-[0.2em]">
                        {isSubmitting ? "Sending..." : "Submit Inquiry"}
                      </span>
                      <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </form>
              </div>

              {/* 
              RIGHT COLUMN: INFO SIDEBAR (2/5 width)
              Dark contrast theme to create a visual break and emphasize direct contact.
            */}
              <div className="lg:col-span-2 bg-[#275669] text-white p-8 md:p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden">
                {/* Decorative Circle */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-teal-900/20 blur-3xl pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-900/20 blur-3xl pointer-events-none"></div>

                <div className="relative z-10 space-y-12">
                  <div>
                    <h3 className="font-serif text-2xl mb-6">Direct Contact</h3>
                    <div className="space-y-6">
                      <a href="mailto:info@youngturtle.com" className="flex items-start gap-4 group">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-aqua-mist transition-colors">
                          <Mail size={18} className="text-white" />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-wider text-white mb-1">General Inquiries</p>
                          <p className="text-lg font-light text-white group-hover:text-aqua-mist transition-colors">info@youngturtle.com</p>
                        </div>
                      </a>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                          <Clock size={18} className="text-white" />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-wider text-white mb-1">Business Hours</p>
                          <p className="text-sm text-white leading-relaxed">
                            Monday - Saturday<br />
                            9:00 AM - 6:00 PM EST
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-white/20">
                    <h3 className="font-serif text-2xl mb-6">Our Offices</h3>
                    <div className=" gap-1">
                      {offices.map((office, idx) => (
                        <div
                          key={idx}
                        >
                          <div className="flex justify-between items-start mb-6">
                            {office.isPrimary && (
                              <span className="px-3 py-1 -ml-3 text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
                                Headquarters
                              </span>
                            )}
                          </div>

                          <h3 className="font-serif text-xl text-abyssal-blue mb-2">{office.city}</h3>

                          <div className="space-y-3 mb-6">
                            <div className="flex items-start gap-3 text-white text-sm">
                              <MapPin size={16} className="mt-0.5 shrink-0 text-aqua-mist" />
                              <span>{office.address}<br />{office.location}</span>
                            </div>
                          </div>
                        </div>
                      ))}

                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </SectionWrapper >

      {/* Disclaimer */}
      < SectionWrapper className="py-16 bg-white" >
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs text-muted-foreground leading-relaxed">
            By submitting this form, you acknowledge that Young Turtle Capital Management may contact you regarding
            investment opportunities. All information will be handled in accordance with our Privacy Policy. Investment
            products are only available to qualified investors.
          </p>
        </div>
      </SectionWrapper >
    </>
  )
}
