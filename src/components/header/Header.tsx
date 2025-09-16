"use client" // Needed for smooth scrolling

export default function Header() {
    const scrollToSection = (id: string) => {
        const section = document.getElementById(id)
        if (section) {
            section.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <header className='sticky top-[40px] z-40 bg-blue-600 text-white pr-4 pl-4 pt-2 pb-2 flex justify-between items-center'>
            <h1 className='text-xl font-bold'>Manohar Batra</h1>
            <nav className='space-x-6'>
                {/* <button
                    onClick={() => scrollToSection("home")}
                    className='hover:underline cursor-pointer'
                >
                    Home
                </button> */}
                {/* <button
                    onClick={() => scrollToSection("testimonials")}
                    className='hover:underline cursor-pointer'
                >
                    Testimonials
                </button> */}
                {/* <button
                    onClick={() => scrollToSection("playlists")}
                    className='hover:underline cursor-pointer'
                >
                    Playlists
                </button> */}
                {/* <button
                    onClick={() => scrollToSection("confessions")}
                    className='hover:underline cursor-pointer'
                >
                    Confessions
                </button> */}
            </nav>
        </header>
    )
}
