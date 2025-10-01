"use client"
import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react" // icons for hamburger

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="sticky top-[40px] z-40 bg-blue-600 text-white px-4 py-2 flex justify-between items-center">
            {/* Left side */}
            <h1 className="text-xl font-bold">
                <Link href="/" className="hover:underline">
                    Manohar Batra
                </Link>
            </h1>

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-3">
                {["Gallery", "FAQ", "Roadmap", "News"].map((item) => (
                    <Link
                        key={item}
                        href={`/${item.toLowerCase()}`}
                        className="bg-white text-blue-600 font-medium px-3 py-1 rounded-2xl hover:bg-gray-200 transition flex justify-center items-center text-center"
                    >
                        {item}
                    </Link>
                ))}
            </nav>

            {/* Mobile Hamburger */}
            <button
                className="md:hidden"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
            >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="absolute top-full right-0 bg-blue-600 w-full flex flex-col items-center md:hidden shadow-lg">
                    {["Gallery", "FAQ", "Roadmap", "News"].map((item) => (
                        <Link
                            key={item}
                            href={`/${item.toLowerCase()}`}
                            className="w-full text-center px-4 py-3 border-b border-blue-500 hover:bg-blue-700"
                            onClick={() => setIsOpen(false)}
                        >
                            {item}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    )
}
