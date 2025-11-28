"use client"

import { Mail, MapPin, Linkedin, Twitter, Facebook, Instagram, Phone, FileText } from "lucide-react"

export function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="relative bg-gradient-to-br from-[#275669] via-[#1e4552] to-[#1a3d4a] text-white">
            {/* Decorative top border */}
            <div className="h-1 bg-white"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* TOP SECTION - Logo & Social */}
                <div className="pt-16 pb-12 border-b border-white/10">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">

                        {/* Logo & Tagline */}
                        <div className="space-y-3">
                            <img
                                src="/logo.png"
                                alt="Young Turtle Logo"
                                className="h-12 sm:h-14 object-contain"
                            />
                            <p className="text-sm text-slate-300 max-w-xs">
                                Where mathematics meets market intelligence
                            </p>
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3">
                            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-2 hidden sm:block">
                                Follow Us
                            </span>
                            <FooterIcon href="#"><Instagram size={18} /></FooterIcon>
                            <FooterIcon href="#"><Linkedin size={18} /></FooterIcon>
                            <FooterIcon href="#"><Twitter size={18} /></FooterIcon>
                            <FooterIcon href="#"><Facebook size={18} /></FooterIcon>
                        </div>
                    </div>
                </div>

                {/* MAIN GRID */}
                <div className="py-16 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* CONTACT */}
                    <div className="space-y-8">
                        <div>
                            <h4 className="text-base font-bold text-white mb-5 flex items-center gap-2">
                                <div className="h-1 w-8 bg-white rounded-full"></div>
                                Get in Touch
                            </h4>
                            <div className="space-y-4">
                                <a href="mailto:info@youngturtle.in" className="flex items-center gap-3 text-white hover:text-white transition-colors group">
                                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                        <Mail size={18} />
                                    </div>
                                    <span className="text-sm">info@youngturtle.in</span>
                                </a>

                                <a href="tel:+910000000000" className="flex items-center gap-3 text-white hover:text-white transition-colors group">
                                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                        <Phone size={18} />
                                    </div>
                                    <span className="text-sm">+91-0000000000</span>
                                </a>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-start gap-3 text-white">
                                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 mt-1">
                                    <MapPin size={18} />
                                </div>
                                <div className="text-sm leading-relaxed">
                                    <p className="font-medium text-white mb-1">Registered Office</p>
                                    <p>Some Street Name,<br />Bengaluru, Karnataka<br />India – 560001</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* COMPLIANCE DOCS */}
                    <div>
                        <h4 className="text-base font-bold text-white mb-5 flex items-center gap-2">
                            <div className="h-1 w-8 bg-white rounded-full"></div>
                            Compliance
                        </h4>
                        <ul className="space-y-3 text-sm text-slate-300">
                            {[
                                "Disclosure Documents",
                                "Investor Complaints",
                                "Investor Charter",
                                "Performance Reports",
                                "Risk Disclosures",
                            ].map((item) => (
                                <li key={item}>
                                    <a href="#" className="hover:text-white hover:translate-x-1 inline-flex items-center gap-2 transition-all group">
                                        <FileText size={14} className="text-white opacity-60 group-hover:opacity-100" />
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* POLICY DOCS */}
                    <div>
                        <h4 className="text-base font-bold text-white mb-5 flex items-center gap-2">
                            <div className="h-1 w-8 bg-white rounded-full"></div>
                            Policies
                        </h4>
                        <ul className="space-y-3 text-sm text-slate-300">
                            {[
                                "Code of Conduct",
                                "Grievance Redressal",
                                "KYC & AML Policy",
                                "Privacy Policy",
                                "Fee Structure",
                            ].map((item) => (
                                <li key={item}>
                                    <a href="#" className="hover:text-white hover:translate-x-1 inline-flex items-center gap-2 transition-all group">
                                        <FileText size={14} className="text-white opacity-60 group-hover:opacity-100" />
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* QUICK LINKS */}
                    <div>
                        <h4 className="text-base font-bold text-white mb-5 flex items-center gap-2">
                            <div className="h-1 w-8 bg-white rounded-full"></div>
                            Quick Links
                        </h4>
                        <ul className="space-y-3 text-sm text-slate-300">
                            {[
                                { name: "About Us", href: "#" },
                                { name: "Our Team", href: "#" },
                                { name: "Methodology", href: "#" },
                                { name: "Careers", href: "#" },
                                { name: "Contact", href: "#" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <a href={item.href} className="hover:text-white hover:translate-x-1 inline-block transition-all">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* REGULATORY SECTION */}
                <div className="py-12 border-t border-white/10">
                    <div className="bg-white/5 rounded-2xl p-6 sm:p-8 backdrop-blur-sm space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed">

                        <div>
                            <p className="font-semibold text-white mb-2">Young Turtle Investment Advisors LLP (PMS)</p>
                            <p>SEBI Registered Portfolio Manager. Registration and other regulatory details will be updated here. Young Turtle is committed to transparency and investor protection.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                            <div className="space-y-1">
                                <p className="font-semibold text-white">Principal Officer</p>
                                <p>[Name Here]</p>
                                <p>Email: <a href="mailto:compliance@youngturtle.in" className="text-slate-300 hover:text-white">compliance@youngturtle.in</a></p>
                                <p>Phone: +91-0000000000</p>
                            </div>

                            <div className="space-y-1">
                                <p className="font-semibold text-white">SEBI Local Office</p>
                                <p>[Office Name], [Road Name]</p>
                                <p>[Area], Bengaluru 5600xx</p>
                                <p>Tel: +91-080-00000000</p>
                            </div>
                        </div>

                        <p className="pt-4 border-t border-white/10 text-xs">
                            <strong>Disclaimer:</strong> Read all scheme related documents carefully before investing. Past performance is not indicative of future returns. Please consider your specific investment requirements before choosing a scheme.
                        </p>
                    </div>
                </div>

                {/* BOTTOM ROW */}
                <div className="py-8 border-t border-white/10">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
                        <p>© {year} Young Turtle. All rights reserved.</p>

                        <nav className="flex flex-wrap justify-center gap-6">
                            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Disclaimers</a>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    )
}

function FooterIcon({ children, href }: { children: React.ReactNode, href: string }) {
    return (
        <a
            href={href}
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-slate-300 hover:bg-white hover:text-[#275669] transition-all duration-300 hover:scale-110"
        >
            {children}
        </a>
    )
}