'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'

// Right-side simple links (Regulatory first, then Careers, Contact)
const navLinks = [
    { href: '/regulatory', label: 'Regulatory' },
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Contact' },
]

function NavItem({ href, label, isActive }: { href: string; label: string; isActive: boolean }) {
    const [hovered, setHovered] = useState(false)

    return (
        <div className='relative' onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <Link
                href={href}
                className='block text-sm uppercase tracking-wide font-semibold pb-2 transition-colors duration-300'
                style={{
                    color: isActive || hovered ? '#ffb900' : '#ffffff',
                }}
            >
                {label}
            </Link>

            <div
                className='absolute bottom-0 left-0 h-[2px] bg-[#ffb900] transition-all duration-300 ease-out'
                style={{
                    width: isActive || hovered ? '100%' : '0%',
                }}
            />
        </div>
    )
}

export default function Header() {
    const pathname = usePathname()
    const router = useRouter()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isProductOpen, setIsProductOpen] = useState(false)
    const [isAboutOpen, setIsAboutOpen] = useState(false)
    const [isMobileProductOpen, setIsMobileProductOpen] = useState(false)
    const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsMobileMenuOpen(false)
            }
        }

        // Check on mount
        handleResize()

        // Add event listener for window resize
        window.addEventListener('resize', handleResize)

        // Cleanup
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const isActive = (href: string) => pathname === href

    // About is active on /about and /people (Team)
    const isAboutActive = pathname === '/about' || pathname === '/people'

    // Smooth scroll handler for About page sections
    const handleAboutSectionClick = (e: React.MouseEvent, sectionId: string) => {
        e.preventDefault()
        setIsAboutOpen(false)

        if (pathname === '/about') {
            // Already on about page, just scroll
            const element = document.getElementById(sectionId)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
        } else {
            // Navigate to about page first, then scroll
            router.push('/about')
            setTimeout(() => {
                const element = document.getElementById(sectionId)
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
            }, 100)
        }
    }

    // Mobile smooth scroll handler
    const handleMobileAboutSectionClick = (e: React.MouseEvent, sectionId: string) => {
        e.preventDefault()
        setIsMobileMenuOpen(false)
        setIsMobileAboutOpen(false)

        if (pathname === '/about') {
            // Already on about page, just scroll
            const element = document.getElementById(sectionId)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
        } else {
            // Navigate to about page first, then scroll
            router.push('/about')
            setTimeout(() => {
                const element = document.getElementById(sectionId)
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
            }, 100)
        }
    }

    return (
        <>
            <header className='fixed top-0 left-0 right-0 z-50 bg-[#275669] shadow-lg'>
                <nav className='ml-auto px-6 lg:px-8'>
                    <div className='flex justify-between h-20'>
                        <div className='flex items-center'>
                            <Image src='/logo.png' alt='YT-Logo' width={200} height={200} />
                        </div>

                        {/* DESKTOP NAVIGATION */}
                        <div className='hidden lg:flex items-center gap-8'>
                            {/* HOME */}
                            <NavItem href='/' label='Home' isActive={isActive('/')} />

                            {/* ABOUT DROPDOWN */}
                            <div
                                className='relative'
                                onMouseEnter={() => setIsAboutOpen(true)}
                                onMouseLeave={() => setIsAboutOpen(false)}
                            >
                                <button
                                    className='flex items-center gap-1 text-sm uppercase tracking-wide font-semibold pb-2 transition-colors duration-300'
                                    style={{
                                        color: isAboutOpen || isAboutActive ? '#ffb900' : '#ffffff',
                                    }}
                                >
                                    About
                                    <ChevronDown
                                        size={16}
                                        className={`transition-transform duration-300 ${isAboutOpen ? 'rotate-180' : ''
                                            }`}
                                        style={{
                                            color: isAboutOpen || isAboutActive ? '#ffb900' : '#ffffff',
                                        }}
                                    />
                                </button>

                                {/* underline */}
                                <div
                                    className='absolute bottom-0 left-0 h-[2px] bg-[#ffb900] transition-all duration-300 ease-out'
                                    style={{
                                        width: isAboutOpen || isAboutActive ? '100%' : '0%',
                                    }}
                                />

                                {/* ABOUT DROPDOWN MENU */}
                                <AnimatePresence>
                                    {isAboutOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.2 }}
                                            className='absolute top-full mt-2 left-0 w-72 bg-white shadow-xl rounded-sm border border-gray-200 overflow-hidden z-50'
                                        >
                                            <div className='py-2'>
                                                {/* WHO WE ARE -> scroll to mission section */}
                                                <a
                                                    href='#mission-section'
                                                    onClick={(e) => handleAboutSectionClick(e, 'mission-section')}
                                                    className='block px-6 py-4 hover:bg-gray-50 group cursor-pointer'
                                                >
                                                    <div className='flex items-center justify-between mb-1'>
                                                        <span className='text-[#275669] font-semibold transition-colors group-hover:text-[#ffb900]'>
                                                            Who We Are
                                                        </span>
                                                        <ChevronRight
                                                            size={14}
                                                            className='text-gray-400 transition-colors group-hover:text-[#ffb900]'
                                                        />
                                                    </div>
                                                    <p className='text-xs text-gray-600 transition-colors group-hover:text-[#ffb900]'>
                                                        Our philosophy, vision and values
                                                    </p>
                                                </a>

                                                <div className='h-px bg-gray-100 mx-6' />

                                                {/* TEAM -> scroll to leadership section */}
                                                <a
                                                    href='#leadership-section'
                                                    onClick={(e) => handleAboutSectionClick(e, 'leadership-section')}
                                                    className='block px-6 py-4 hover:bg-gray-50 group cursor-pointer'
                                                >
                                                    <div className='flex items-center justify-between mb-1'>
                                                        <span className='text-[#275669] font-semibold transition-colors group-hover:text-[#ffb900]'>
                                                            Team
                                                        </span>
                                                        <ChevronRight
                                                            size={14}
                                                            className='text-gray-400 transition-colors group-hover:text-[#ffb900]'
                                                        />
                                                    </div>
                                                    <p className='text-xs text-gray-600 transition-colors group-hover:text-[#ffb900]'>
                                                        Investment and leadership team
                                                    </p>
                                                </a>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* PRODUCTS DROPDOWN */}
                            <div
                                className='relative'
                                onMouseEnter={() => setIsProductOpen(true)}
                                onMouseLeave={() => setIsProductOpen(false)}
                            >
                                <button
                                    className='flex items-center gap-1 text-sm uppercase tracking-wide font-semibold pb-2 transition-colors duration-300'
                                    style={{
                                        color: isProductOpen ? '#ffb900' : '#ffffff',
                                    }}
                                >
                                    Products
                                    <ChevronDown
                                        size={16}
                                        className={`transition-transform duration-300 ${isProductOpen ? 'rotate-180' : ''
                                            }`}
                                        style={{
                                            color: isProductOpen ? '#ffb900' : '#ffffff',
                                        }}
                                    />
                                </button>

                                {/* underline */}
                                <div
                                    className='absolute bottom-0 left-0 h-[2px] bg-[#ffb900] transition-all duration-300 ease-out'
                                    style={{
                                        width: isProductOpen ? '100%' : '0%',
                                    }}
                                />

                                {/* PRODUCTS DROPDOWN MENU */}
                                <AnimatePresence>
                                    {isProductOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.2 }}
                                            className='absolute top-full mt-2 left-0 w-72 bg-white shadow-xl rounded-sm border border-gray-200 overflow-hidden z-50'
                                        >
                                            <div className='py-2'>
                                                {/* AIF */}
                                                <Link href='/aif' className='block px-6 py-4 hover:bg-gray-50 group'>
                                                    <div className='flex items-center justify-between mb-1'>
                                                        <span className='text-[#275669] font-semibold transition-colors group-hover:text-[#ffb900]'>
                                                            AIF
                                                        </span>
                                                        <ChevronRight
                                                            size={14}
                                                            className='text-gray-400 transition-colors group-hover:text-[#ffb900]'
                                                        />
                                                    </div>
                                                    <p className='text-xs text-gray-600 transition-colors group-hover:text-[#ffb900]'>
                                                        Alternative Investment Funds
                                                    </p>
                                                </Link>

                                                <div className='h-px bg-gray-100 mx-6' />

                                                {/* PMS / Investment Solutions */}
                                                <Link href='/pms' className='block px-6 py-4 hover:bg-gray-50 group'>
                                                    <div className='flex items-center justify-between mb-1'>
                                                        <span className='text-[#275669] font-semibold transition-colors group-hover:text-[#ffb900]'>
                                                            Investment Solutions
                                                        </span>
                                                        <ChevronRight
                                                            size={14}
                                                            className='text-gray-400 transition-colors group-hover:text-[#ffb900]'
                                                        />
                                                    </div>
                                                </Link>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* REGULATORY → CAREERS → CONTACT */}
                            {navLinks.map((link) => (
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
                            className='lg:hidden p-2 text-white'
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
                        className='fixed inset-0 z-40 pt-16 lg:hidden bg-[#275669] overflow-y-auto overflow-x-hidden max-h-[calc(100vh-64px)]'
                    >
                        <nav className='px-4 py-6 sm:px-6 md:px-8 space-y-3 sm:space-y-4'>
                            {/* Home */}
                            <Link
                                href='/'
                                onClick={() => setIsMobileMenuOpen(false)}
                                className='block text-base sm:text-lg md:text-xl uppercase font-light py-2 sm:py-3 transition-colors duration-200'
                                style={{ color: isActive('/') ? '#ffb900' : '#ffffff' }}
                            >
                                Home
                            </Link>

                            {/* ABOUT (MOBILE) */}
                            <div>
                                <button
                                    onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                                    className='flex items-center justify-between text-base sm:text-lg md:text-xl uppercase font-light w-full py-2 sm:py-3 text-white hover:text-[#ffb900] transition-colors duration-200'
                                >
                                    About
                                    <ChevronDown
                                        size={18}
                                        className={`flex-shrink-0 transition-transform duration-300 ${isMobileAboutOpen ? 'rotate-180' : ''}`}
                                    />
                                </button>

                                <AnimatePresence>
                                    {isMobileAboutOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -5 }}
                                            className='pl-4 sm:pl-6 space-y-3 mt-2'
                                        >
                                            <a
                                                href='#mission-section'
                                                className='block text-white text-sm sm:text-base cursor-pointer hover:text-[#ffb900] transition-colors duration-200'
                                                onClick={(e) => handleMobileAboutSectionClick(e, 'mission-section')}
                                            >
                                                <span className='font-light'>Who We Are</span>
                                                <span className='text-xs sm:text-sm block text-gray-200'>Our philosophy, vision and values</span>
                                            </a>
                                            <a
                                                href='#leadership-section'
                                                className='block text-white text-sm sm:text-base cursor-pointer hover:text-[#ffb900] transition-colors duration-200'
                                                onClick={(e) => handleMobileAboutSectionClick(e, 'leadership-section')}
                                            >
                                                <span className='font-light'>Team</span>
                                                <span className='text-xs sm:text-sm block text-gray-200'>Investment and leadership team</span>
                                            </a>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* PRODUCTS (MOBILE) */}
                            <div>
                                <button
                                    onClick={() => setIsMobileProductOpen(!isMobileProductOpen)}
                                    className='flex items-center justify-between text-base sm:text-lg md:text-xl uppercase font-light w-full py-2 sm:py-3 text-white hover:text-[#ffb900] transition-colors duration-200'
                                >
                                    Products
                                    <ChevronDown
                                        size={18}
                                        className={`flex-shrink-0 transition-transform duration-300 ${isMobileProductOpen ? 'rotate-180' : ''}`}
                                    />
                                </button>

                                <AnimatePresence>
                                    {isMobileProductOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -5 }}
                                            className='pl-4 sm:pl-6 space-y-3 mt-2'
                                        >
                                            <Link
                                                href='/aif'
                                                className='block text-white text-sm sm:text-base hover:text-[#ffb900] transition-colors duration-200'
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                <span className='font-light'>AIF</span>
                                                <span className='text-xs sm:text-sm block text-gray-200'>Alternative Investment Funds</span>
                                            </Link>
                                            <Link
                                                href='/pms'
                                                className='block text-white text-sm sm:text-base hover:text-[#ffb900] transition-colors duration-200'
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                <span className='font-light'>PMS</span>
                                                <span className='text-xs sm:text-sm block text-gray-200'>Portfolio Management Services</span>
                                            </Link>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* REGULATORY → CAREERS → CONTACT */}
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className='block text-base sm:text-lg md:text-xl uppercase font-light py-2 sm:py-3 hover:text-[#ffb900] transition-colors duration-200'
                                    style={{
                                        color: isActive(link.href) ? '#ffb900' : '#ffffff',
                                    }}
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