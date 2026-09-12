import { useState } from "react"
import logo from "../assets/logo-text.png"
import hamburger from "../assets/hamburger.png"

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">

                {/* Desktop Navbar */}
                <div className="hidden h-16 items-center justify-between lg:flex">

                    {/* Logo */}
                    <a href="#home">
                        <img
                            src={logo}
                            alt="Dev Stack Logo"
                            className="w-[135px] object-contain"
                        />
                    </a>

                    {/* Desktop Menu */}
                    <div className="flex items-center gap-8">
                        <a
                            href="#home"
                            className="font-medium text-pink-500 transition hover:text-pink-600"
                        >
                            Home
                        </a>

                        <a
                            href="#technologies"
                            className="font-medium text-slate-700 transition hover:text-pink-500"
                        >
                            Technologies
                        </a>

                        <a
                            href="#projects"
                            className="font-medium text-slate-700 transition hover:text-pink-500"
                        >
                            Projects
                        </a>

                        <a
                            href="#about"
                            className="font-medium text-slate-700 transition hover:text-pink-500"
                        >
                            About
                        </a>

                        <a
                            href="#contact"
                            className="font-medium text-slate-700 transition hover:text-pink-500"
                        >
                            Contact
                        </a>
                    </div>

                    {/* Desktop Buttons */}
                    <div className="flex items-center gap-4">
                        <button className="text-sm font-medium text-slate-800 transition hover:text-pink-500">
                            Sign In
                        </button>

                        <button className="brand-gradient-bg rounded-full px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90">
                            Sign Up
                        </button>
                    </div>
                </div>

                {/* Mobile Navbar */}
                <div className="grid h-16 grid-cols-[1fr_auto_1fr] items-center lg:hidden">

                    {/* Hamburger */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="justify-self-start rounded-md p-2"
                        aria-label="Toggle navigation menu"
                    >
                        <img
                            src={hamburger}
                            alt="Menu"
                            className="h-5 w-5 object-contain"
                        />
                    </button>

                    {/* Center Logo */}
                    <a href="#home" className="justify-self-center">
                        <img
                            src={logo}
                            alt="Dev Stack Logo"
                            className="w-[105px] object-contain sm:w-[120px]"
                        />
                    </a>

                    {/* Mobile Right Buttons */}
                    <div className="flex items-center gap-1.5 justify-self-end">
                        <button className="text-[11px] font-medium text-slate-800 sm:text-xs">
                            Sign In
                        </button>

                        <button className="brand-gradient-bg rounded-full px-3 py-2 text-[11px] font-semibold text-white sm:text-xs">
                            Sign Up
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown */}
                {menuOpen && (
                    <div className="border-t border-slate-100 bg-white py-4 lg:hidden">
                        <div className="flex flex-col gap-4">

                            <a
                                href="#home"
                                onClick={() => setMenuOpen(false)}
                                className="font-medium text-pink-500"
                            >
                                Home
                            </a>

                            <a
                                href="#technologies"
                                onClick={() => setMenuOpen(false)}
                                className="font-medium text-slate-700"
                            >
                                Technologies
                            </a>

                            <a
                                href="#projects"
                                onClick={() => setMenuOpen(false)}
                                className="font-medium text-slate-700"
                            >
                                Projects
                            </a>

                            <a
                                href="#about"
                                onClick={() => setMenuOpen(false)}
                                className="font-medium text-slate-700"
                            >
                                About
                            </a>

                            <a
                                href="#contact"
                                onClick={() => setMenuOpen(false)}
                                className="font-medium text-slate-700"
                            >
                                Contact
                            </a>

                        </div>
                    </div>
                )}

            </div>
        </nav>
    )
}

export default Navbar