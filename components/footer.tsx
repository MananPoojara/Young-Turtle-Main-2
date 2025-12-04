'use client'

import { Mail, MapPin, Linkedin, Twitter, Facebook, Instagram, Phone, FileText } from 'lucide-react'
import Image from 'next/image'

export function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="relative bg-gradient-to-br from-[#275669] via-[#1e4552] to-[#1a3d4a] text-white">
            {/* decorative top border */}
            <div className="h-1 bg-white" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* TOP – logo + social */}
                <div className="flex flex-col items-start gap-6 border-b border-white/10 py-10 sm:flex-row sm:items-center sm:justify-between">
                    <div className="space-y-2">
                        <Image
                            src="/logo.png"
                            alt="Young Turtle Logo"
                            width={150}
                            height={150}
                            className="h-10 w-auto object-contain sm:h-12"
                        />
                        <p className="text-xs text-slate-300 sm:text-sm">The Fusion is The Edge.</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="hidden text-xs font-semibold uppercase tracking-wider text-slate-400 sm:block">
                            Follow Us
                        </span>
                        <FooterIcon href="#"><Instagram size={16} /></FooterIcon>
                        <FooterIcon href="#"><Linkedin size={16} /></FooterIcon>
                        <FooterIcon href="#"><Twitter size={16} /></FooterIcon>
                        <FooterIcon href="#"><Facebook size={16} /></FooterIcon>
                    </div>
                </div>

                {/* MAIN GRID – 4 cols → 2 cols → 1 col */}
                <div className="grid grid-cols-1 gap-10 border-white/10 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
                    {/* CONTACT */}
                    <div className="space-y-6">
                        <h4 className="flex items-center gap-2 text-sm font-bold">
                            <span className="h-1 w-6 rounded-full bg-white" />
                            Get in Touch
                        </h4>

                        <a href="mailto:info@youngturtle.in" className="flex items-center gap-3 text-sm hover:text-white">
                            <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/10">
                                <Mail size={16} />
                            </span>
                            info@youngturtle.in
                        </a>

                        <a href="tel:+910000000000" className="flex items-center gap-3 text-sm hover:text-white">
                            <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/10">
                                <Phone size={16} />
                            </span>
                            +91-0000000000
                        </a>

                        <div className="flex items-start gap-3 text-sm">
                            <span className="mt-1 grid h-8 w-8 place-items-center rounded-lg bg-white/10 shrink-0">
                                <MapPin size={16} />
                            </span>
                            <div>
                                <p className="font-medium">Registered Office</p>
                                <p className="opacity-90">
                                    4th Floor, Safal Profitaire, A-6, Corporate Rd, opp. AUDA Garden, Satellite,
                                    Prahlad Nagar, Ahmedabad, Gujarat, India – 380015
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* COMPLIANCE */}
                    <div>
                        <h4 className="mb-4 flex items-center gap-2 text-sm font-bold">
                            <span className="h-1 w-6 rounded-full bg-white" />
                            Compliance
                        </h4>
                        <ul className="space-y-2 text-xs sm:text-sm">
                            {['Disclosure Documents', 'Investor Complaints', 'Investor Charter', 'Performance Reports', 'Risk Disclosures'].map((t) => (
                                <li key={t}>
                                    <a href="#" className="inline-flex items-center gap-2 hover:text-white">
                                        <FileText size={14} className="opacity-60" /> {t}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* POLICIES */}
                    <div>
                        <h4 className="mb-4 flex items-center gap-2 text-sm font-bold">
                            <span className="h-1 w-6 rounded-full bg-white" />
                            Policies
                        </h4>
                        <ul className="space-y-2 text-xs sm:text-sm">
                            {['Code of Conduct', 'Grievance Redressal', 'KYC & AML Policy', 'Privacy Policy', 'Fee Structure'].map((t) => (
                                <li key={t}>
                                    <a href="#" className="inline-flex items-center gap-2 hover:text-white">
                                        <FileText size={14} className="opacity-60" /> {t}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* QUICK LINKS */}
                    <div>
                        <h4 className="mb-4 flex items-center gap-2 text-sm font-bold">
                            <span className="h-1 w-6 rounded-full bg-white" />
                            Quick Links
                        </h4>
                        <ul className="space-y-2 text-xs sm:text-sm">
                            {['About Us', 'Our Team', 'Methodology', 'Careers', 'Contact'].map((l) => (
                                <li key={l}>
                                    <a href="#" className="hover:text-white">{l}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* REGULATORY BOX */}
                <div className="border-t border-white/10 py-10">
                    <div className="space-y-4 rounded-2xl bg-white/5 p-5 text-xs leading-relaxed backdrop-blur sm:p-6 sm:text-sm">
                        <p className="font-semibold">Young Turtle Investment Advisors LLP (PMS)</p>
                        <p className="opacity-90">
                            SEBI Registered Portfolio Manager. Registration and other regulatory details will be updated here.
                            Young Turtle is committed to transparency and investor protection.
                        </p>

                        <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2">
                            <div className="space-y-1">
                                <p className="font-semibold">Principal Officer</p>
                                <p>[Name Here]</p>
                                <p>
                                    Email:{' '}
                                    <a href="mailto:compliance@youngturtle.in" className="underline">
                                        compliance@youngturtle.ooo
                                    </a>
                                </p>
                                <p>Phone: +91-0000000000</p>
                            </div>
                            <div className="space-y-1">
                                <p className="font-semibold">SEBI Local Office</p>
                                <p>[Office Name], [Road Name]</p>
                                <p>[Area], Bengaluru 5600xx</p>
                                <p>Tel: +91-080-00000000</p>
                            </div>
                        </div>

                        <p className="border-t border-white/10 pt-4 text-xs opacity-80">
                            <strong>Disclaimer:</strong> Read all scheme-related documents carefully before investing.
                            Past performance is not indicative of future returns.
                        </p>
                    </div>
                </div>

                {/* BOTTOM BAR */}
                <div className="flex flex-col items-center gap-3 border-t border-white/10 py-6 text-xs text-slate-400 sm:flex-row sm:justify-between">
                    <p>© {year} Young Turtle. All rights reserved.</p>
                    <nav className="flex flex-wrap gap-4">
                        <a href="#" className="hover:text-white">Terms of Use</a>
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Disclaimers</a>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

function FooterIcon({ children, href }: { children: React.ReactNode; href: string }) {
    return (
        <a
            href={href}
            className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-slate-300 transition-all hover:scale-110 hover:bg-white hover:text-[#275669]"
        >
            {children}
        </a>
    )
}
