"use client"

import { motion } from "framer-motion"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { Shield, FileText, Lock, Scale } from "lucide-react"

const complianceAreas = [
  {
    icon: Shield,
    title: "Regulatory Framework",
    description:
      "Young Turtle Capital Management is registered with the Securities and Exchange Commission (SEC) as an investment adviser and complies with all applicable federal and state regulations.",
  },
  {
    icon: FileText,
    title: "Disclosure Documents",
    description:
      "Our Form ADV and other regulatory filings are available upon request. We maintain full transparency with regulators and clients regarding our operations and investment practices.",
  },
  {
    icon: Lock,
    title: "Data Protection",
    description:
      "We implement robust cybersecurity measures and data protection protocols in compliance with applicable privacy regulations including GDPR and CCPA.",
  },
  {
    icon: Scale,
    title: "Fiduciary Duty",
    description:
      "As a registered investment adviser, we maintain a fiduciary duty to our clients, placing their interests first in all advisory activities.",
  },
]

export default function RegulatoryPage() {
  return (
    <>
      <PageHero
        title="Compliance & Governance"
        subtitle="Committed to the highest standards of regulatory compliance"
        variant="grid"
      />

      {/* Compliance Overview */}
      <SectionWrapper className="py-32 bg-sunbeam-pearl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {complianceAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-border p-10"
              >
                <div className="w-14 h-14 flex items-center justify-center border border-aqua-mist/30 text-aqua-mist mb-6">
                  <area.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl text-abyssal-blue mb-4">{area.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Important Disclosures */}
      <SectionWrapper className="py-32 bg-white" >
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-abyssal-blue text-center mb-12">Important Disclosures</h2>
          <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
            <div>
              <h3 className="font-serif text-lg text-abyssal-blue mb-3">Investment Risks</h3>
              <p>
                All investments involve risk, including the potential loss of principal. Past performance does not
                guarantee future results. The value of investments and the income derived from them can go down as well
                as up.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg text-abyssal-blue mb-3">Qualified Investors</h3>
              <p>
                Young Turtle&apos;s investment products are offered only to qualified institutional buyers, accredited
                investors, and other eligible investors as defined by applicable securities laws.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg text-abyssal-blue mb-3">No Guarantee</h3>
              <p>
                Nothing on this website constitutes an offer, solicitation, or recommendation to buy or sell any
                security or investment product. Investment decisions should be made based on careful consideration of
                all risks and in consultation with qualified professionals.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Privacy Policy */}
      <SectionWrapper className="py-32 bg-sunbeam-pearl">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-abyssal-blue text-center mb-12">Privacy Policy</h2>
          <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
            <p>
              Young Turtle Capital Management is committed to protecting your privacy and personal information. This
              policy outlines how we collect, use, and safeguard your data.
            </p>
            <div>
              <h3 className="font-serif text-lg text-abyssal-blue mb-3">Information Collection</h3>
              <p>
                We collect information you provide directly, such as contact details and investment preferences, as well
                as technical data through cookies and analytics tools.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg text-abyssal-blue mb-3">Data Security</h3>
              <p>
                We employ industry-standard security measures to protect your information, including encryption, access
                controls, and regular security assessments.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Terms */}
      <SectionWrapper className="py-32 bg-white" >
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-abyssal-blue text-center mb-12">Terms of Use</h2>
          <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
            <p>
              By accessing this website, you agree to these terms of use. The content is provided for informational
              purposes only and should not be construed as investment advice.
            </p>
            <div>
              <h3 className="font-serif text-lg text-abyssal-blue mb-3">Intellectual Property</h3>
              <p>
                All content on this website, including text, graphics, logos, and software, is the property of Young
                Turtle Capital Management and protected by intellectual property laws.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg text-abyssal-blue mb-3">Limitation of Liability</h3>
              <p>
                Young Turtle shall not be liable for any damages arising from use of this website or reliance on any
                information provided herein.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
