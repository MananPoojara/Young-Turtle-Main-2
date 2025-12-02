'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/strategies', label: 'Strategies' },
    { href: '/people', label: 'People' },
    { href: '/careers', label: 'Careers' },
    { href: '/regulatory', label: 'Regulatory' },
    { href: '/contact', label: 'Contact' },
]

function NavLink({ href, label, isActive }: { href: string; label: string; isActive: boolean }) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div className='relative' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <Link
                href={href}
                className='block text-sm uppercase tracking-wide font-semibold transition-colors duration-300 pb-2'
                style={{
                    color: isActive || isHovered ? '#ffb900' : '#ffffff',
                }}
            >
                {label}
            </Link>
            <div
                className='absolute bottom-0 left-0 h-[2px] transition-all duration-300'
                style={{
                    backgroundColor: '#ffb900',
                    width: isActive || isHovered ? '100%' : '0%',
                }}
            />
        </div>
    )
}

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const pathname = usePathname()

    return (
        <>
            <header className='fixed top-0 left-0 right-0 z-50 bg-[#275669] shadow-lg'>
                <nav className='max-w-7xl mx-auto px-6 lg:px-8'>
                    <div className='flex items-center justify-between h-20'>
                        {/* Logo */}
                        <Link href='/' className='flex items-center gap-3'>
                            <Image src='/logo.png' alt='YT-Logo' width={160} height={160} />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className='hidden lg:flex items-center gap-8'>
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.href}
                                    href={link.href}
                                    label={link.label}
                                    isActive={pathname === link.href}
                                />
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className='lg:hidden p-2 text-white'
                            aria-label='Toggle menu'
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </nav>
            </header>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className='fixed inset-0 z-40 pt-20 lg:hidden'>
                    <nav className='flex flex-col justify-start items-start px-12 gap-1 py-12 bg-[#275669] w-full h-[60vh]'>
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className='text-xl tracking-wide uppercase font-light py-4 transition-colors duration-300'
                                    style={{
                                        color: isActive ? '#ffb900' : '#ffffff',
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.color = '#ffb900')}
                                    onMouseLeave={(e) =>
                                        (e.currentTarget.style.color = isActive ? '#ffb900' : '#ffffff')
                                    }
                                >
                                    {link.label}
                                </Link>
                            )
                        })}
                    </nav>
                </div>
            )}
        </>
    )
}
