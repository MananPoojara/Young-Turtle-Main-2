"use client"
import Link from "next/link"
import { Mail, Linkedin, Twitter } from "lucide-react"

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="border-t border-border text-primary-foreground text-black bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center gap-2 font-bold text-lg mb-4">
                            <span>Young Turtle</span>
                        </div>
                        <p className="text-sm opacity-75">
                            Professional financial analysis and trading insights for informed decision-making.
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-semibold mb-4">Services</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/services" className="opacity-75 hover:opacity-100 transition-opacity">
                                    Market Analysis
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="opacity-75 hover:opacity-100 transition-opacity">
                                    Trading Signals
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="opacity-75 hover:opacity-100 transition-opacity">
                                    Portfolio Insights
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="opacity-75 hover:opacity-100 transition-opacity">
                                    Risk Assessment
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/about" className="opacity-75 hover:opacity-100 transition-opacity">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/approach" className="opacity-75 hover:opacity-100 transition-opacity">
                                    Our Approach
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="opacity-75 hover:opacity-100 transition-opacity">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <a href="#" className="opacity-75 hover:opacity-100 transition-opacity">
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="font-semibold mb-4">Connect</h4>
                        <div className="flex gap-4">
                            <a href="mailto:info@youngturtle.com" className="hover:text-accent transition-colors">
                                <Mail size={20} />
                            </a>
                            <a href="#" className="hover:text-accent transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="hover:text-accent transition-colors">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-primary-foreground/20 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-75">
                        <p>&copy; {currentYear} Young Turtle. All rights reserved.</p>
                        <p>Professional financial analysis platform.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
