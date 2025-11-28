"use client"

import Link from "next/link"
import { Equal, X } from "lucide-react"
import { Button } from "../components/ui/liquid-glass-button"
import React from "react"
import { cn } from "../lib/utils"
import logo from "../public/logo.png"

const menuItems = [
    { name: "Home", href: "#link" },
    { name: "About Us", href: "#link" },
    { name: "Careers", href: "#link" },
    { name: "Contact Us", href: "#link" },
]

export const Header = () => {
    const [menuState, setMenuState] = React.useState(false)

    return (
        <header>
            <nav
                data-state={menuState && "active"}
                className="fixed top-0 left-0 w-full z-50 px-2 bg-[#275669] backdrop-blur-lg shadow-sm"
            >
                <div className="mx-auto max-w-8xl px-8 py-4 lg:px-16 flex items-center justify-between">
                    {/* LOGO - LEFT */}
                    <Link href="/" aria-label="home" className="flex gap-2 items-center z-10">
                        <img
                            src={logo.src}
                            alt="Young Turtle Logo"
                            className="h-16 w-auto object-contain"
                        />
                    </Link>

                    {/* DESKTOP MENU - CENTER */}
                    <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
                        <ul className="flex gap-10 text-2xl">
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        href={item.href}
                                        className="text-white hover:text-white/80 duration-150 font-medium"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* BUTTONS - RIGHT (Desktop) */}
                    <div className="hidden lg:flex gap-3 items-center">
                        <Button asChild variant="outline" size="lg">
                            <Link href="#">
                                <span className="text-2xl">Login</span>
                            </Link>
                        </Button>

                        <Button asChild size="lg">
                            <Link href="#">
                                <span className="text-white text-2xl">Sign Up</span>
                            </Link>
                        </Button>
                    </div>

                    {/* MOBILE MENU BUTTON */}
                    <button
                        onClick={() => setMenuState(!menuState)}
                        aria-label={menuState ? "Close Menu" : "Open Menu"}
                        className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
                    >
                        <Equal className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-7 duration-200 text-white" />
                        <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-7 -rotate-180 scale-0 opacity-0 duration-200 text-white" />
                    </button>

                    {/* MOBILE PANEL */}
                    <div className="in-data-[state=active]:block lg:hidden mb-6 hidden w-full absolute top-full left-0 mt-2 px-4">
                        <div className="bg-[#1e3f4d] rounded-3xl border border-white/20 p-6 shadow-2xl">
                            {/* Mobile menu items */}
                            <ul className="space-y-6 text-lg mb-6">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            className="text-white hover:text-white/80 duration-150 block font-medium"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            {/* Mobile Buttons */}
                            <div className="flex flex-col space-y-3">
                                <Button asChild variant="outline" size="default">
                                    <Link href="#">
                                        <span className="text-[18px]">Login</span>
                                    </Link>
                                </Button>

                                <Button asChild size="default">
                                    <Link href="#">
                                        <span className="text-white text-[18px]">Sign Up</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header