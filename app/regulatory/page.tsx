'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FileText, Users, ChevronRight, ShieldAlert } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SectionWrapper } from '@/components/section-wrapper'
import Link from 'next/link'

// Types
type TabID = 'disclosure' | 'complaints'

interface DocumentItem {
    id: string
    title: string
    url: string
}

// Data Content
const complianceDocs: DocumentItem[] = [
    { id: '1', title: 'PMS Investor Charter', url: '#' },
    { id: '2', title: 'PMS Disclosure Document', url: '#' },
    { id: '3', title: 'PMS Complaints Disclosure', url: '#' },
    { id: '4', title: 'AIF Stewardship Code', url: '#' },
    { id: '5', title: 'AIF Stewardship Code Compliance Disclosure', url: '#' },
    { id: '6', title: 'PMS Fee Calculator Tool', url: '#' },
    { id: '7', title: 'Payment via UPI for PMS Accounts', url: '#' },
]

export default function RegulatoryPage() {
    const [activeTab, setActiveTab] = useState<TabID>('disclosure')

    const renderDocumentList = (documents: DocumentItem[]) => (
        <div className='grid gap-4'>
            {documents.map((doc, index) => (
                <motion.div
                    key={doc.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className='group flex items-center justify-between p-6 bg-white border border-border hover:border-brand-gold/50 hover:shadow-lg transition-all duration-300 rounded-sm'
                >
                    <div className='flex items-center gap-4'>
                        <div className='flex-shrink-0 w-10 h-10 rounded-full bg-sunbeam-pearl flex items-center justify-center text-brand-gold transition-colors duration-300'>
                            <FileText size={20} />
                        </div>
                        <span className='text-brand-dark font-medium text-lg'>{doc.title}</span>
                    </div>
                    <div className='flex items-center gap-3'>
                        <Link
                            href={doc.url}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='relative bg-white px-4 py-2 text-[#275669] font-medium text-md transition-colors duration-200 group/btn inline-block'
                        >
                            <span className='relative pb-1.5'>
                                View PDF
                                <div className='absolute bottom-0 left-0 h-[2px] bg-[#275669] transition-all duration-300 ease-in-out w-0 group-hover/btn:w-full' />
                            </span>
                        </Link>
                        <Link
                            href={doc.url}
                            download
                            className='relative bg-white px-4 py-2 text-[#275669] font-medium text-md transition-colors duration-200 group/btn inline-block'
                        >
                            <span className='relative pb-1.5'>
                                Download PDF
                                <div className='mt-1 absolute bottom-0 left-0 h-[2px] bg-[#275669] transition-all duration-300 ease-in-out w-0 group-hover/btn:w-full' />
                            </span>
                        </Link>
                    </div>
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
        </>
    )
}
