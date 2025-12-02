'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'

const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/strategies', label: 'Strategies' },

    // separator → dropdown comes here
    { href: '#', label: 'Products', isDropdown: true },

    { href: '/people', label: 'People' },
    { href: '/careers', label: 'Careers' },
    { href: '/regulatory', label: 'Regulatory' },
    { href: '/contact', label: 'Contact' },
]

/* -------------------------------------------
    NAV ITEM (WITH GOLD UNDERLINE + HOVER LOGIC)
--------------------------------------------- */
function NavItem({
    href,
    label,
    isActive
}: {
    href: string
    label: string
    isActive: boolean
}) {
    const [hovered, setHovered] = useState(false)

    return (
        <div
            className="relative"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Link
                href={href}
                className="block text-sm uppercase tracking-wide font-semibold pb-2 transition-colors duration-300"
                style={{
                    color: isActive || hovered ? '#ffb900' : '#ffffff',
                }}
            >
                {label}
            </Link>

            <div
                className="absolute bottom-0 left-0 h-[2px] bg-[#ffb900] transition-all duration-300 ease-out"
                style={{
                    width: isActive || hovered ? '100%' : '0%',
                }}
            />
        </div>
    )
}

/* -------------------------------------------
    MAIN NAVBAR
--------------------------------------------- */
export default function Header() {
    const pathname = usePathname()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isProductOpen, setIsProductOpen] = useState(false)
    const [isMobileProductOpen, setIsMobileProductOpen] = useState(false)

    useEffect(() => {
        if (window.innerWidth >= 1024) setIsMobileMenuOpen(false)
    }, [])

    const isActive = (href: string) => pathname === href

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 bg-[#275669] shadow-lg">
                <nav className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">

                        {/* LOGO */}
                        <Link href="/" className="flex items-center gap-3">
                            <Image src="/logo.png" alt="YT-Logo" width={160} height={160} />
                        </Link>

                        {/* DESKTOP NAVIGATION */}
                        <div className="hidden lg:flex items-center gap-8">

                            {/* First 2 links */}
                            {navLinks.slice(0, 2).map((link) => (
                                <NavItem
                                    key={link.href}
                                    href={link.href}
                                    label={link.label}
                                    isActive={isActive(link.href)}
                                />
                            ))}

                            {/* PRODUCTS DROPDOWN */}
                            <div
                                className="relative"
                                onMouseEnter={() => setIsProductOpen(true)}
                                onMouseLeave={() => setIsProductOpen(false)}
                            >
                                {/* Trigger */}
                                <button
                                    className="flex items-center gap-1 text-sm uppercase tracking-wide font-semibold pb-2 transition-colors duration-300"
                                    style={{
                                        color: isProductOpen ? '#ffb900' : '#ffffff',
                                    }}
                                >
                                    Products
                                    <ChevronDown
                                        size={16}
                                        className={`transition-transform duration-300 ${isProductOpen ? 'rotate-180' : ''}`}
                                        style={{
                                            color: isProductOpen ? '#ffb900' : '#ffffff',
                                        }}
                                    />
                                </button>

                                {/* underline */}
                                <div
                                    className="absolute bottom-0 left-0 h-[2px] bg-[#ffb900] transition-all duration-300 ease-out"
                                    style={{
                                        width: isProductOpen ? '100%' : '0%',
                                    }}
                                />

                                {/* Dropdown menu */}
                                <AnimatePresence>
                                    {isProductOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full mt-2 left-0 w-72 bg-white shadow-xl rounded-sm border border-gray-200 overflow-hidden z-50"
                                        >
                                            <div className="py-2">

                                                {/* AIF */}
                                                <Link
                                                    href="/aif"
                                                    className="block px-6 py-4 hover:bg-gray-50 group"
                                                >
                                                    <div className="flex items-center justify-between mb-1">
                                                        <span className="text-[#275669] font-semibold transition-colors group-hover:text-[#ffb900]">
                                                            AIF
                                                        </span>
                                                        <ChevronRight
                                                            size={14}
                                                            className="text-gray-400 transition-colors group-hover:text-[#ffb900]"
                                                        />
                                                    </div>
                                                    <p className="text-xs text-gray-600 transition-colors group-hover:text-[#ffb900]">
                                                        Alternative Investment Funds
                                                    </p>
                                                </Link>

                                                <div className="h-px bg-gray-100 mx-6" />

                                                {/* PMS */}
                                                <Link
                                                    href="/pms"
                                                    className="block px-6 py-4 hover:bg-gray-50 group"
                                                >
                                                    <div className="flex items-center justify-between mb-1">
                                                        <span className="text-[#275669] font-semibold transition-colors group-hover:text-[#ffb900]">
                                                            Investment Solutions
                                                        </span>
                                                        <ChevronRight
                                                            size={14}
                                                            className="text-gray-400 transition-colors group-hover:text-[#ffb900]"
                                                        />
                                                    </div>
                                                </Link>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Remaining nav links */}
                            {navLinks.slice(3).map((link) => (
                                <NavItem
                                    key={link.href}
                                    href={link.href}
                                    label={link.label}
                                    isActive={isActive(link.href)}
                                />
                            ))}
                        </div>

                        {/* MOBILE MENU BUTTON */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 text-white"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </nav>
            </header>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="fixed inset-0 z-40 pt-20 lg:hidden bg-[#275669] overflow-hidden"
                    >
                        <nav className="px-12 py-12 space-y-6">

                            {/* About / Strategies */}
                            {navLinks.slice(0, 2).map(link => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block text-xl uppercase font-light py-3"
                                    style={{ color: isActive(link.href) ? '#ffb900' : '#ffffff' }}
                                >
                                    {link.label}
                                </Link>
                            ))}

                            {/* PRODUCTS (MOBILE) */}
                            <div>
                                <button
                                    onClick={() => setIsMobileProductOpen(!isMobileProductOpen)}
                                    className="flex items-center justify-between text-xl uppercase font-light w-full py-3 text-white"
                                >
                                    Products
                                    <ChevronDown
                                        size={20}
                                        className={`transition-transform ${isMobileProductOpen ? 'rotate-180' : ''}`}
                                    />
                                </button>

                                <AnimatePresence>
                                    {isMobileProductOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -5 }}
                                            className="pl-4 space-y-4 mt-2"
                                        >
                                            <Link href="/aif" className="block text-white text-lg">
                                                AIF
                                                <span className="text-xs block">Alternative Investment Funds</span>
                                            </Link>
                                            <Link href="/pms" className="block text-white text-lg">
                                                PMS
                                                <span className="text-xs block">Portfolio Management Services</span>
                                            </Link>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* People, Careers, Regulatory, Contact */}
                            {navLinks.slice(3).map(link => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block text-xl uppercase font-light py-3"
                                    style={{ color: isActive(link.href) ? '#ffb900' : '#ffffff' }}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
