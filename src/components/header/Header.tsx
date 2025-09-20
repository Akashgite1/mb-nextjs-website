"use client" // Needed for smooth scrolling
import Link from "next/link"

export default function Header() {
    return (
        <header className="sticky top-[40px] z-40 bg-blue-600 text-white pr-4 pl-4 pt-2 pb-2 flex justify-between items-center">
            {/* Left side */}
            <h1 className="text-xl font-bold">
                <Link href="/" className="hover:underline">
                    Manohar Batra
                </Link>
            </h1>

            {/* Right side */}
            <nav className="flex gap-3">
                <Link 
                    href="/gallery" 
                    className="bg-white text-blue-600 font-medium px-3 py-1 rounded hover:bg-gray-200 transition"
                >
                    Gallery
                </Link>
                <Link 
                    href="/faq" 
                    className="bg-white text-blue-600 font-medium px-3 py-1 rounded hover:bg-gray-200 transition"
                >
                    FAQ
                </Link>
                <Link 
                    href="/upcomingEvents" 
                    className="bg-white text-blue-600 font-medium px-3 py-1 rounded hover:bg-gray-200 transition"
                >
                    Upcoming Events
                </Link>
            </nav>
        </header>
    )
}
