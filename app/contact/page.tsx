"use client"

import type React from "react"

import { motion } from "framer-motion"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useState } from "react"

const offices = [
  {
    city: "Ahmedabad, India",
    address: "4th Floor, Safal Profitaire, A-6, Corporate Rd,",
    location: "opp. AUDA Garden, Satellite, Prahlad Nagar,",
    phone: "+1 212 555 0100",
    isPrimary: true,
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    investorType: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <>
      <PageHero
        title="Get in Touch"
        subtitle="We welcome inquiries from institutional investors and qualified individuals"
        variant="dots"
      />

      {/* Contact Form & Info */}
      <SectionWrapper className="py-32 bg-sunbeam-pearl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-aqua-mist">Contact Us</span>
              <h2 className="mt-4 font-serif text-3xl text-abyssal-blue mb-8">Send an Inquiry</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-border focus:border-aqua-mist focus:outline-none transition-colors text-abyssal-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-border focus:border-aqua-mist focus:outline-none transition-colors text-abyssal-blue"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
                      Organization
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-border focus:border-aqua-mist focus:outline-none transition-colors text-abyssal-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
                      Investor Type
                    </label>
                    <select
                      value={formData.investorType}
                      onChange={(e) => setFormData({ ...formData, investorType: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-border focus:border-aqua-mist focus:outline-none transition-colors text-abyssal-blue"
                    >
                      <option value="">Select...</option>
                      <option value="institutional">Institutional Investor</option>
                      <option value="family-office">Family Office</option>
                      <option value="accredited">Accredited Individual</option>
                      <option value="consultant">Investment Consultant</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Message *</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-border focus:border-aqua-mist focus:outline-none transition-colors text-abyssal-blue resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="px-10 py-4 bg-[#275669] text-white hover:bg-[#0D3A54] transition-all duration-300 text-sm uppercase tracking-widest"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-aqua-mist">Information</span>
              <h2 className="mt-4 font-serif text-3xl text-abyssal-blue mb-8">Get in Touch</h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <Mail size={20} className="text-aqua-mist mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground">General Inquiries</p>
                    <a
                      href="mailto:info@youngturtle.com"
                      className="text-abyssal-blue hover:text-aqua-mist transition-colors"
                    >
                      info@youngturtle.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock size={20} className="text-aqua-mist mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground">Business Hours</p>
                    <p className="text-abyssal-blue">Monday - Friday, 9:00 AM - 6:00 PM EST</p>
                  </div>
                </div>
              </div>

              <h3 className="font-serif text-xl text-abyssal-blue mb-6">Global Offices</h3>
              <div className="space-y-6">
                {offices.map((office) => (
                  <motion.div
                    key={office.city}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`p-6 border ${office.isPrimary ? "border-aqua-mist bg-white" : "border-border bg-white/50"}`}
                  >
                    <div className="flex items-start gap-4">
                      <MapPin size={20} className="text-aqua-mist mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-serif text-lg text-abyssal-blue mb-1">
                          {office.city}
                          {office.isPrimary && (
                            <span className="ml-2 text-xs uppercase tracking-wider text-aqua-mist">Headquarters</span>
                          )}
                        </h4>
                        <p className="text-sm text-muted-foreground">{office.address}</p>
                        <p className="text-sm text-muted-foreground">{office.location}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Phone size={14} className="text-aqua-mist" />
                          <a
                            href={`tel:${office.phone}`}
                            className="text-sm text-abyssal-blue hover:text-aqua-mist transition-colors"
                          >
                            {office.phone}
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Disclaimer */}
      <SectionWrapper className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs text-muted-foreground leading-relaxed">
            By submitting this form, you acknowledge that Young Turtle Capital Management may contact you regarding
            investment opportunities. All information will be handled in accordance with our Privacy Policy. Investment
            products are only available to qualified investors.
          </p>
        </div>
      </SectionWrapper>
    </>
  )
}
