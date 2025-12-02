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
  )

  return (
    <>
      <PageHero
        title='Regulatory'
        subtitle='Transparency and compliance are the cornerstones of our relationship with investors.'
        variant='grid'
      />

      <SectionWrapper className='pt-20 lg:py-24'>
        <div className='max-w-5xl mx-auto px-6 lg:px-8'>
          {/* Top Tab Navigation */}
          <div className='flex flex-col md:flex-row bg-white rounded-md shadow-sm border border-border p-1 mb-12'>
            <button
              onClick={() => setActiveTab('disclosure')}
              className={`relative flex-1 flex items-center justify-center gap-3 py-4 px-6 text-sm md:text-base font-semibold transition-all duration-300 rounded-sm
                ${activeTab === 'disclosure'
                  ? 'bg-[#275669]/90 text-white/90'
                  : 'hover:text-brand-dark hover:bg-[#275669]/75 hover:text-white/90'
                }`}
            >
              <FileText size={18} />
              <span>Compliance Documents / Disclosure</span>
              {activeTab === 'disclosure' && (
                <motion.div
                  layoutId='activeTabIndicator'
                  className='absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold mx-6'
                />
              )}
            </button>
            <div className='hidden md:block w-px bg-gray-100 my-3'></div>
            <button
              onClick={() => setActiveTab('complaints')}
              className={`relative flex-1 flex items-center justify-center gap-3 py-4 px-6 text-sm md:text-base font-semibold transition-all duration-300 rounded-sm
                ${activeTab === 'complaints'
                  ? 'bg-[#275669]/90 text-white/90'
                  : 'hover:text-brand-dark hover:bg-[#275669]/75 hover:text-white/90'
                }`}
            >
              <Users size={18} />
              <span>Complaints</span>
              {activeTab === 'complaints' && (
                <motion.div
                  layoutId='activeTabIndicator'
                  className='absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold mx-6'
                />
              )}
            </button>
          </div>

          {/* Content Area */}
          <div className='min-h-[400px]'>
            <AnimatePresence mode='wait'>
              {activeTab === 'disclosure' && (
                <motion.div
                  key='disclosure'
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className='mb-8'>
                    <h2 className='font-serif text-3xl text-abyssal-blue mb-2'>
                      Compliance Documents
                    </h2>
                    <p className='text-gray-500'>
                      Access our latest regulatory filings and disclosure documents.
                    </p>
                  </div>
                  {renderDocumentList(complianceDocs)}
                </motion.div>
              )}

              {activeTab === 'complaints' && (
                <motion.div
                  key='complaints'
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className='bg-white p-8 md:p-10 border border-border shadow-sm rounded-sm'
                >
                  <div className='border-b border-gray-100 pb-6 mb-8'>
                    <h2 className='font-serif text-3xl text-abyssal-blue mb-4'>
                      Grievance Redressal
                    </h2>
                    <p className='text-gray-600 leading-relaxed'>
                      At Young Turtle Capital, we are committed to handling complaints in a timely
                      and effective manner. If you have any concerns or wish to register a
                      complaint, please follow the process outlined below.
                    </p>
                  </div>

                  <div className='space-y-10'>
                    {/* Step 1 */}
                    <div className='relative pl-8 md:pl-0'>
                      <div className='md:hidden absolute left-0 top-1 w-6 h-6 bg-brand-gold text-black rounded-full flex items-center justify-center text-xs font-bold'>
                        1
                      </div>
                      <div className='grid md:grid-cols-[100px_1fr] gap-6'>
                        <div className='hidden md:flex flex-col items-center'>
                          <div className='w-10 h-10 bg-white border-2 border-brand-gold text-brand-gold rounded-full flex items-center justify-center font-bold text-lg mb-2'>
                            1
                          </div>
                          <div className='flex-1 w-px bg-gray-200 border-l border-dashed border-gray-300'></div>
                        </div>
                        <div>
                          <h3 className='text-lg font-bold text-abyssal-blue mb-4'>
                            Contact our Investor Relations Officer
                          </h3>
                          <div className='bg-sunbeam-pearl p-6 rounded-sm border border-border/50'>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-sm text-gray-700'>
                              <div>
                                <span className='block text-xs text-gray-400 uppercase tracking-wider mb-1'>
                                  Name
                                </span>
                                <span className='font-semibold text-base'>
                                  Mr. Anil Ture
                                </span>
                              </div>
                              <div>
                                <span className='block text-xs text-gray-400 uppercase tracking-wider mb-1'>
                                  Designation
                                </span>
                                <span className='font-semibold text-base'>
                                  Head - Operations
                                </span>
                              </div>
                              <div className='md:col-span-2'>
                                <span className='block text-xs text-gray-400 uppercase tracking-wider mb-1'>
                                  Address
                                </span>
                                <span>
                                  B-4, Amerchand Mansion, 16 Madame Cama Road, Colaba,
                                  Mumbai – 400 001
                                </span>
                              </div>
                              <div>
                                <span className='block text-xs text-gray-400 uppercase tracking-wider mb-1'>
                                  Phone
                                </span>
                                <span>+91 22 66171700</span>
                              </div>
                              <div>
                                <span className='block text-xs text-gray-400 uppercase tracking-wider mb-1'>
                                  Email
                                </span>
                                <a
                                  href='mailto:complaints@youngturtle.com'
                                  className='text-brand-gold font-medium hover:underline'
                                >
                                  complaints@youngturtle.com
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className='relative pl-8 md:pl-0'>
                      <div className='md:hidden absolute left-0 top-1 w-6 h-6 bg-brand-gold text-white rounded-full flex items-center justify-center text-xs font-bold'>
                        2
                      </div>
                      <div className='grid md:grid-cols-[100px_1fr] gap-6'>
                        <div className='hidden md:flex flex-col items-center'>
                          <div className='w-10 h-10 bg-white border-2 border-brand-gold text-brand-gold rounded-full flex items-center justify-center font-bold text-lg mb-2'>
                            2
                          </div>
                          <div className='flex-1 w-px bg-gray-200 border-l border-dashed border-gray-300'></div>
                        </div>
                        <div>
                          <h3 className='text-lg font-bold text-abyssal-blue mb-2'>
                            Escalation
                          </h3>
                          <p className='text-gray-600 text-sm leading-relaxed mb-2'>
                            If you are not satisfied with the response received in Step 1,
                            you may escalate the concern with all relevant details to:
                          </p>
                          <a
                            href='mailto:escalations@youngturtle.com'
                            className='inline-flex items-center gap-2 text-brand-gold font-semibold hover:underline'
                          >
                            escalations@youngturtle.com <ChevronRight size={14} />
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className='relative pl-8 md:pl-0'>
                      <div className='md:hidden absolute left-0 top-1 w-6 h-6 bg-brand-gold text-white rounded-full flex items-center justify-center text-xs font-bold'>
                        3
                      </div>
                      <div className='grid md:grid-cols-[100px_1fr] gap-6'>
                        <div className='hidden md:flex flex-col items-center'>
                          <div className='w-10 h-10 bg-white border-2 border-brand-gold text-brand-gold rounded-full flex items-center justify-center font-bold text-lg'>
                            3
                          </div>
                        </div>
                        <div>
                          <h3 className='text-lg font-bold text-abyssal-blue mb-4'>
                            Regulatory Redressal
                          </h3>
                          <p className='text-gray-600 text-sm mb-4'>
                            If the resolution provided does not meet your expectation, you
                            may approach:
                          </p>

                          <div className='grid md:grid-cols-2 gap-4'>
                            <a
                              href='https://scores.gov.in/scores/Welcome.html'
                              className='group block p-4 bg-gray-50 hover:bg-brand-gold/5 border border-transparent hover:border-brand-gold/30 rounded-sm transition-all'
                            >
                              <div className='flex items-start gap-3'>
                                <ShieldAlert className='w-5 h-5 text-brand-gold mt-0.5' />
                                <div>
                                  <span className='font-bold text-brand-dark block mb-1 group-hover:text-brand-gold transition-colors'>
                                    SEBI SCORES
                                  </span>
                                  <span className='text-xs text-gray-500 leading-snug block'>
                                    SEBI Complaints Redressal System. Visit
                                    scores.gov.in or download the mobile app.
                                  </span>
                                </div>
                              </div>
                            </a>

                            <a
                              href='#'
                              className='group block p-4 bg-gray-50 hover:bg-brand-gold/5 border border-transparent hover:border-brand-gold/30 rounded-sm transition-all'
                            >
                              <div className='flex items-start gap-3'>
                                <ShieldAlert className='w-5 h-5 text-brand-gold mt-0.5' />
                                <div>
                                  <span className='font-bold text-brand-dark block mb-1 group-hover:text-brand-gold transition-colors'>
                                    SMART ODR
                                  </span>
                                  <span className='text-xs text-gray-500 leading-snug block'>
                                    Online Dispute Resolution Portal. Can be
                                    initiated at any stage.
                                  </span>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </SectionWrapper>

      {/* Footer-like Policy Links */}
      <div className='bg-brand-dark py-16 mx-16'>
        <div className='max-w-7xl mx-auto px-6 lg:px-8'>
          <h2 className='text-2xl font-serif text-[#275669] font-bold mb-6'>Additional Information</h2>
          <div className='grid md:grid-cols-2 gap-12 text-sm text-gray-400'>
            <div>
              <h4 className='font-bold text-[#275669] mb-3 text-base'>Privacy Policy</h4>
              <p className='leading-relaxed'>
                We collect information you provide directly, such as contact details and investment
                preferences, as well as technical data through cookies and analytics tools. We employ
                industry-standard security measures to protect your information.
              </p>
            </div>
            <div>
              <h4 className='font-bold text-[#275669] mb-3 text-base'>Terms of Use</h4>
              <p className='leading-relaxed'>
                By accessing this website, you agree to these terms of use. The content is provided for
                informational purposes only and should not be construed as investment advice. All
                content on this website is the property of Young Turtle Capital.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}