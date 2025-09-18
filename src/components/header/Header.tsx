"use client" // Needed for smooth scrolling
import Link from "next/link"

export default function Header() {
    return (
        <header className='sticky top-[40px] z-40 bg-blue-600 text-white pr-4 pl-4 pt-2 pb-2 flex justify-between items-center'>
            <h1 className="text-xl font-bold">
        <Link href="/" className="hover:underline">
          Manohar Batra
        </Link>
      </h1>
        </header>
    )
}
