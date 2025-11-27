"use client"

import { Mail, MapPin, Linkedin, Twitter, Facebook, Youtube, Instagram } from "lucide-react"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-[#0f1b2d] text-slate-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP ROW — LOGO LEFT & SOCIAL ICONS RIGHT */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-14 mt-6">

          {/* Replaced Text with Your Logo */}
          <div>
            <img 
              src="/logo.png" 
              alt="Young Turtle Logo" 
              className="h-14 md:h-16 object-contain"
            />
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-slate-300">
            <FooterIcon><Instagram size={17} /></FooterIcon>
            <FooterIcon><Linkedin size={17} /></FooterIcon>
            <FooterIcon><Twitter size={17} /></FooterIcon>
            <FooterIcon><Facebook size={17} /></FooterIcon>
            <FooterIcon><Youtube size={17} /></FooterIcon>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* CONTACT */}
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-semibold tracking-[0.26em] text-slate-400 uppercase">
                Get in Touch
              </h4>
              <div className="mt-4 flex items-center gap-3 text-slate-200">
                <Mail size={16} className="shrink-0" />
                <a href="mailto:info@youngturtle.in" className="hover:text-white">
                  info@youngturtle.in
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold tracking-[0.26em] text-slate-400 uppercase">
                Address
              </h4>
              <div className="mt-4 flex items-start gap-3 text-slate-300">
                <MapPin size={16} className="shrink-0 mt-1" />
                <p className="text-sm leading-relaxed">
                  Young Turtle, Some Street Name,<br />
                  Bengaluru, Karnataka, India – 560001
                </p>
              </div>
            </div>
          </div>

          {/* COMPLIANCE DOCS */}
          <div>
            <h4 className="text-sm font-semibold tracking-[0.26em] text-slate-400 uppercase mb-4">
              Compliance Documents
            </h4>
            <div className="space-y-2 text-sm text-slate-300">
              {[
                "Disclosure Documents",
                "Statement of Investor Complaints",
                "Investor Charter",
                "PMS Performance Reports",
              ].map((item) => (
                <a key={item} href="#" className="block hover:text-white">{item}</a>
              ))}
            </div>
          </div>

          {/* POLICY DOCS */}
          <div>
            <h4 className="text-sm font-semibold tracking-[0.26em] text-slate-400 uppercase mb-4">
              Policy Documents
            </h4>
            <div className="space-y-2 text-sm text-slate-300">
              {[
                "Code of Conduct",
                "Grievance Redressal Policy",
                "KYC & AML Policy",
                "Privacy Policy",
                "PMS Fee Structure",
              ].map((item) => (
                <a key={item} href="#" className="block hover:text-white">{item}</a>
              ))}
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="h-px w-full bg-slate-700 mb-10"></div>

        {/* REGULATORY SECTION */}
        <div className="space-y-6 text-xs text-slate-400 leading-relaxed mb-12">
          <p>
            <span className="font-semibold text-slate-300">Young Turtle Investment Advisors LLP (PMS)</span> – 
            SEBI Registered Portfolio Manager. Registration and other regulatory details will be updated here.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <p>
              <span className="font-semibold text-slate-300">Principal Officer:</span> [Name Here]<br />
              Email: <a href="mailto:compliance@youngturtle.in" className="hover:text-white">compliance@youngturtle.in</a><br />
              Phone: +91-0000000000
            </p>

            <p>
              <span className="font-semibold text-slate-300">SEBI Local Office:</span> <br />
              [Office Name], [Road Name],<br />
              [Area], Bengaluru 5600xx<br />
              Telephone: +91-080-00000000
            </p>
          </div>

          <p>
            Young Turtle is committed to transparency and investor protection. Read all scheme related documents before investing.
          </p>
        </div>

        {/* BOTTOM ROW */}
        <div className="border-t border-slate-800 pt-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
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

function FooterIcon({ children }: { children: React.ReactNode }) {
  return (
    <a
      href="#"
      className="w-9 h-9 rounded-full border border-slate-600 flex items-center justify-center text-slate-300 hover:bg-white hover:text-black transition-all"
    >
      {children}
    </a>
  )
}
