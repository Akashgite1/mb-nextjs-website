"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// ✅ JSON array of gallery items (added organization key)
const galleryItems = [
    {
        img: "/images/corporate/awards/rob_wood.jpeg",
        date: "2025-10-15",
        title: "Rob Wood",
        description: "SWE & App Arch Director",
        logo: "/images/companyLogos/pepsico.jpg",
        organization: "PepsiCo",
    },
    {
        img: "/images/corporate/awards/tarun1.jpeg",
        date: "2025-10-15",
        title: "Tarun Kapoor",
        description: "Project Manager",
        logo: "/images/companyLogos/ibm.jpg",
        organization: "IBM",
    },
    {
        img: "/images/corporate/awards/matt_brown.jpeg",
        date: "2025-10-14",
        title: "Matt Brown",
        description: "Client Partner | Delivery Executive",
        logo: "/images/companyLogos/ibm.jpg",
        organization: "IBM",
    },
    {
        img: "/images/corporate/awards/shoaib_iqbal.jpeg",
        date: "2025-07-17",
        title: "Shoiab Iqbal",
        description: "Associate Partner | Enterprise Architect",
        logo: "/images/companyLogos/ibm.jpg",
        organization: "IBM",
    },
]

export default function CorporateAppreciation() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
    const [selectedOrg, setSelectedOrg] = useState<string>("All")

    // ✅ Get unique organization names for dropdown
    const organizations = [
        "All",
        ...new Set(galleryItems.map((item) => item.organization)),
    ]

    // ✅ Filter items based on selected organization
    const filteredItems =
        selectedOrg === "All"
            ? galleryItems
            : galleryItems.filter((item) => item.organization === selectedOrg)

    const handleNext = () => {
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex + 1) % filteredItems.length)
        }
    }

    const handlePrev = () => {
        if (selectedIndex !== null) {
            setSelectedIndex(
                (selectedIndex - 1 + filteredItems.length) %
                    filteredItems.length
            )
        }
    }

    // ✅ Keyboard navigation for modal
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedIndex === null) return

            if (e.key === "ArrowRight") {
                handleNext()
            } else if (e.key === "ArrowLeft") {
                handlePrev()
            } else if (e.key === "Escape") {
                setSelectedIndex(null)
            }
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => {
            window.removeEventListener("keydown", handleKeyDown)
        }
    }, [selectedIndex, handleNext, handlePrev])

    return (
        <div className='my-10'>
            {/* ✅ Centered Title + Dropdown in one row */}
            <div className='flex flex-col md:flex-row justify-center items-center gap-4 mb-6'>
                <h1 className='text-2xl sm:text-3xl font-bold text-black text-center'>
                    Corporate Appreciations &amp; Awards
                </h1>

                <select
                    value={selectedOrg}
                    onChange={(e) => {
                        setSelectedOrg(e.target.value)
                        setSelectedIndex(null) // close modal if open
                    }}
                    className='border border-gray-400 rounded-lg px-3 py-2 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                >
                    {organizations.map((org) => (
                        <option key={org} value={org}>
                            {org}
                        </option>
                    ))}
                </select>
            </div>

            {/* Image grid */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4'>
                {filteredItems.map((item, index) => (
                    <div
                        key={item.img}
                        className='relative cursor-pointer overflow-hidden rounded-xl shadow-sm hover:shadow-md transition border border-black group'
                        onClick={() => setSelectedIndex(index)}
                    >
                        <Image
                            src={item.img}
                            alt={item.title}
                            width={200}
                            height={200}
                            className='object-cover w-full h-32'
                        />
                        {/* Hover overlay */}
                        <div
                            className='
                absolute inset-0 
                bg-black/60 
                text-white 
                flex items-center justify-center 
                opacity-0 
                group-hover:opacity-100 
                transition-opacity 
                text-xs sm:text-sm
              '
                        >
                            Click to see full image
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedIndex !== null && filteredItems[selectedIndex] && (
                    <motion.div
                        className='fixed inset-0 bg-black/80 flex items-center justify-center z-50'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className='relative max-w-4xl w-full px-4'>
                            <Image
                                src={filteredItems[selectedIndex].img}
                                alt={filteredItems[selectedIndex].title}
                                width={800}
                                height={600}
                                className='w-full h-auto rounded-lg object-contain'
                            />

                            {/* Info Bar */}
                            <div className='bg-white p-4 mt-3 rounded-lg shadow-md flex items-start gap-3'>
                                <div className='flex-shrink-0 w-10 h-10 relative'>
                                    <Image
                                        src={filteredItems[selectedIndex].logo}
                                        alt={`${filteredItems[selectedIndex].title} logo`}
                                        fill
                                        className='object-contain'
                                    />
                                </div>
                                <div>
                                    <h3 className='font-semibold text-gray-800'>
                                        {filteredItems[selectedIndex].title}
                                    </h3>
                                    <p className='text-sm text-gray-600'>
                                        {
                                            filteredItems[selectedIndex]
                                                .description
                                        }
                                    </p>
                                </div>
                            </div>

                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedIndex(null)}
                                className='absolute top-2 right-2 bg-black/60 p-2 rounded-full text-white hover:bg-black/80'
                            >
                                <X size={22} />
                            </button>

                            {/* Prev Button */}
                            <button
                                onClick={handlePrev}
                                className='absolute top-1/2 -left-3 transform -translate-y-1/2 bg-black/60 p-2 rounded-full text-white hover:bg-black/80'
                            >
                                <ChevronLeft size={24} />
                            </button>

                            {/* Next Button */}
                            <button
                                onClick={handleNext}
                                className='absolute top-1/2 -right-3 transform -translate-y-1/2 bg-black/60 p-2 rounded-full text-white hover:bg-black/80'
                            >
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
