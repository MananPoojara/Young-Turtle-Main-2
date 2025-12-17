'use client'

import { Mail, MapPin, Linkedin, Twitter, Facebook, Instagram, Phone, FileText, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className='relative bg-gradient-to-br from-[#275669] via-[#1e4552] to-[#1a3d4a] text-white'>
            {/* decorative top border */}
            <div className='h-1 bg-white' />

            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                {/* TOP – logo + social */}
                <div className='flex flex-col items-start gap-6 border-b border-white/10 py-10 sm:flex-row sm:items-center sm:justify-between'>
                    <div className='space-y-2'>
                        <Image
                            src='/misc-img/logo.png'
                            alt='Young Turtle Logo'
                            width={150}
                            height={150}
                            className='h-10 w-auto object-contain sm:h-12'
                        />
                        <p className='text-xs text-slate-300 sm:text-sm'>The Fusion is The Edge.</p>
                    </div>

                    <div className='flex items-center gap-3'>
                        <span className='hidden text-xs font-semibold uppercase tracking-wider text-slate-400 sm:block'>
                            Follow Us
                        </span>
                        <FooterIcon href='#'>
                            <Instagram size={16} />
                        </FooterIcon>
                        <FooterIcon href='#'>
                            <Linkedin size={16} />
                        </FooterIcon>
                        <FooterIcon href='#'>
                            <Twitter size={16} />
                        </FooterIcon>
                        <FooterIcon href='#'>
                            <Facebook size={16} />
                        </FooterIcon>
                    </div>
                </div>

                {/* MAIN CONTENT: Asymmetrical Grid (3 | 4 | 5) */}
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-y-12 gap-x-8 py-16'>
                    {/* COL 1 & 2: NAVIGATION - EXPLORE & LEGAL side by side on all screens */}
                    <div className='lg:col-span-4 grid grid-cols-2 gap-x-6 gap-y-8'>
                        {/* EXPLORE */}
                        <div>
                            <h4 className='text-sm font-bold uppercase tracking-wider mb-4'>Explore</h4>
                            <ul className='space-y-3'>
                                {['About Us', 'Our Team', 'Methodology', 'Careers'].map((link) => (
                                    <li key={link}>
                                        <a
                                            href='#'
                                            className='group flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors'
                                        >
                                            <span className='h-px w-2 bg-white/30 group-hover:w-4 group-hover:h-[1.5px] group-hover:bg-white transition-all'></span>
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* LEGAL */}
                        <div>
                            <h4 className='text-sm font-bold uppercase tracking-wider mb-4'>Legal</h4>
                            <ul className='space-y-3'>
                                {['Privacy Policy', 'Terms of Use', 'Disclosures', 'Risk Factors'].map((link) => (
                                    <li key={link}>
                                        <a
                                            href='#'
                                            className='text-sm text-slate-300 hover:text-white hover:underline transition-colors'
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* COL 3: CONTACT ACTIONS (3 cols) */}
                    <div className='lg:col-span-3 flex flex-col justify-start gap-4'>
                        <h4 className='text-sm font-bold uppercase tracking-wider mb-2'>Get in Touch</h4>

                        {/* Email Card */}
                        <Link
                            href='mailto:info@youngturtle.ooo'
                            className='group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300'
                        >
                            <div className='h-10 w-10 rounded-full bg-transparent border border-white flex items-center justify-center group-hover:text-white transition-colors'>
                                <Mail size={18} />
                            </div>
                            <div>
                                <p className='text-xs text-slate-400'>Write to us</p>
                                <p className='underline text-sm font-medium text-white group-hover:text-slate-300 transition-colors '>
                                    info@youngturtle.ooo
                                </p>
                            </div>
                            <ArrowUpRight
                                size={16}
                                className='ml-auto opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-slate-400'
                            />
                        </Link>

                        {/* Phone Card */}
                        <div className='group flex flex-col p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300'>
                            <div className='flex items-center gap-5'>
                                <div className='h-10 w-10 rounded-full bg-transparent border border-white flex items-center justify-center group-hover:text-white transition-colors'>
                                    <Phone size={18} />
                                </div>
                                <p className='text-sm text-slate-400'>Call us</p>
                            </div>

                            <div className='space-y-2 pl-14'>
                                <Link
                                    href='tel:+07967776555'
                                    className='underline flex items-center justify-between text-sm font-medium text-white hover:text-slate-300 transition-colors group/phone'
                                >
                                    <span>+079-6777 6555</span>
                                    <ArrowUpRight
                                        size={14}
                                        className='opacity-0 group-hover/phone:opacity-100 transition-opacity'
                                    />
                                </Link>
                                <Link
                                    href='tel:+919429060835'
                                    className='underline flex items-center justify-between text-sm font-medium text-white hover:text-slate-300 transition-colors group/phone'
                                >
                                    <span>+91-94290 60835</span>
                                    <ArrowUpRight
                                        size={14}
                                        className='opacity-0 group-hover/phone:opacity-100 transition-opacity'
                                    />
                                </Link>
                                <Link
                                    href='tel:+918905740815'
                                    className='underline flex items-center justify-between text-sm font-medium text-white hover:text-slate-300 transition-colors group/phone'
                                >
                                    <span>+91-89057 40815</span>
                                    <ArrowUpRight
                                        size={14}
                                        className='opacity-0 group-hover/phone:opacity-100 transition-opacity'
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* COL 4: MAP with FLOATING ADDRESS (5 cols) */}
                    <div className='lg:col-span-5 relative h-[300px] lg:h-auto min-h-[280px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group'>
                        {/* Map Iframe */}
                        <iframe
                            width='100%'
                            height='100%'
                            title='Young Turtle Office Location'
                            className='absolute inset-0 border-0 filter grayscale-[0.3] contrast-125 opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500'
                            loading='lazy'
                            allowFullScreen
                            referrerPolicy='no-referrer-when-downgrade'
                            src='https://maps.google.com/maps?q=Safal+Profitaire,+Prahlad+Nagar,+Ahmedabad&t=&z=15&ie=UTF8&iwloc=&output=embed'
                        ></iframe>

                        {/* Floating Address Card - Glassmorphism */}
                        <div className='z-10 absolute bottom-4 left-4 right-4 bg-slate-900/80 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-lg'>
                            <div className='flex items-start gap-3'>
                                <div className='mt-1 h-6 w-6 rounded-full bg-transparent border border-white flex items-center justify-center shrink-0'>
                                    <MapPin size={14} className='' />
                                </div>
                                <div className='space-y-1'>
                                    <p className='text-xs font-semibold text-white'>Registered Office</p>
                                    <p className='text-[11px] sm:text-xs leading-relaxed text-slate-300'>
                                        4th Floor, Safal Profitaire, A-6, Corporate Rd, opp. AUDA Garden, Satellite,
                                        Prahlad Nagar, Ahmedabad, 380015
                                    </p>
                                    <Link
                                        href='https://maps.app.goo.gl/Eq3CUBqQEbxmaKAc9'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='cursor-pointer transition-all duration-300 hover:bg-white hover:text-slate-900 border border-white p-2 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider mt-2'
                                    >
                                        Get Directions <ArrowUpRight size={10} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* REGULATORY BOX */}
                <div className='border-t border-white/10 py-10'>
                    <div className='space-y-4 rounded-2xl bg-white/5 p-5 text-xs leading-relaxed backdrop-blur sm:p-6 sm:text-sm'>
                        <p className='font-semibold'>Young Turtle LLP</p>
                        <p className='opacity-90'>
                            SEBI Registered CAT-III AIF. Registration and other regulatory details will be updated here.
                            Young Turtle is committed to transparency and investor protection.
                        </p>

                        <div className='grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2'>
                            <div className='space-y-1'>
                                <p className='font-semibold'>Principal Officer</p>
                                <p>Uppma Ginotra</p>
                                <p>
                                    Email:{''}
                                    <a href='mailto:info@youngturtle.ooo' className='underline'>
                                        info@youngturtle.ooo
                                    </a>
                                </p>
                                <p>Phone: +91-9530903324</p>
                            </div>
                            <div className='space-y-1'>
                                <p className='font-semibold'>SEBI Local Office</p>
                                <p>PN-C/7, G Block BKC, Bandra Kurla Complex</p>
                                <p> Bandra East, Mumbai, Maharashtra 400051</p>
                                <p>Tel: +022-26449000</p>
                            </div>
                        </div>

                        <p className='border-t border-white/10 pt-4 text-xs opacity-80'>
                            <strong>Disclaimer:</strong> Read all scheme-related documents carefully before investing.
                            Past performance is not indicative of future returns.
                        </p>
                    </div>
                </div>

                {/* BOTTOM BAR */}
                <div className='flex flex-col items-center gap-3 border-t border-white/10 py-6 text-xs text-slate-400 sm:flex-row sm:justify-between'>
                    <p>© {year} Young Turtle. All rights reserved.</p>
                    <nav className='flex flex-wrap gap-4'>
                        <a href='#' className='hover:text-white'>
                            Terms of Use
                        </a>
                        <a href='#' className='hover:text-white'>
                            Privacy Policy
                        </a>
                        <a href='#' className='hover:text-white'>
                            Disclaimers
                        </a>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

function FooterIcon({ children, href }: { children: React.ReactNode; href: string }) {
    return (
        <Link
            href={href}
            className='grid h-8 w-8 place-items-center rounded-full bg-white/10 text-slate-300 transition-all hover:scale-110 hover:bg-white hover:text-[#275669]'
        >
            {children}
        </Link>
    )
}
