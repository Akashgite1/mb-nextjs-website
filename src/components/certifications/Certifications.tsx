"use client"

import React, { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { certifications, type CertificationsItem } from "./certificationsData"

function CertificationsSection({
    title,
    items,
}: {
    title: string
    items: CertificationsItem[]
}) {
    const sliderRef = useRef<HTMLDivElement>(null)
    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(0)
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
    const [selectedIssuer, setSelectedIssuer] = useState<string>("All")

    const issuers = [
        "All",
        ...new Set(items.map((item) => item.issuer)),
    ]

    const filteredItems =
        selectedIssuer === "All"
            ? items.filter((item) => item.visible !== false)
            : items.filter(
                  (item) =>
                      item.visible !== false && item.issuer === selectedIssuer,
              )
    const loopItems = [...filteredItems, ...filteredItems, ...filteredItems] // repeat 3x for seamless loop

    // ----- Mouse Handlers -----
    const onMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true)
        setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0))
        setScrollLeft(sliderRef.current?.scrollLeft || 0)
    }
    const onMouseUp = () => setIsDragging(false)
    const onMouseLeave = () => setIsDragging(false)
    const onMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !sliderRef.current) return
        e.preventDefault()
        const x = e.pageX - sliderRef.current.offsetLeft
        const walk = (x - startX) * 1.5
        sliderRef.current.scrollLeft = scrollLeft - walk
    }

    // ----- Touch Handlers -----
    const onTouchStart = (e: React.TouchEvent) => {
        setIsDragging(true)
        setStartX(e.touches[0].pageX - (sliderRef.current?.offsetLeft || 0))
        setScrollLeft(sliderRef.current?.scrollLeft || 0)
    }
    const onTouchMove = (e: React.TouchEvent) => {
        if (!isDragging || !sliderRef.current) return
        const x = e.touches[0].pageX - sliderRef.current.offsetLeft
        const walk = (x - startX) * 1.5
        sliderRef.current.scrollLeft = scrollLeft - walk
    }
    const onTouchEnd = () => setIsDragging(false)

    const handleNext = () => {
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex + 1) % filteredItems.length)
        }
    }

    const handlePrev = () => {
        if (selectedIndex !== null) {
            setSelectedIndex(
                (selectedIndex - 1 + filteredItems.length) %
                    filteredItems.length,
            )
        }
    }

    // Keyboard navigation for modal
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
    }, [selectedIndex])

    const scroll = (direction: "left" | "right") => {
        if (!sliderRef.current) return

        const scrollAmount = 260 // card width + gap
        sliderRef.current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        })
    }

    return (
        <section className='w-full py-10 overflow-hidden'>
            <div className='flex flex-col md:flex-row justify-center items-center gap-4 mb-6'>
                <h1 className='text-2xl sm:text-3xl font-bold text-black text-center'>
                    {title}
                </h1>

                <select
                    value={selectedIssuer}
                    onChange={(e) => {
                        setSelectedIssuer(e.target.value)
                        setSelectedIndex(null)
                    }}
                    className='border border-gray-400 rounded-lg px-3 py-2 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                >
                    {issuers.map((issuer) => (
                        <option key={issuer} value={issuer}>
                            {issuer}
                        </option>
                    ))}
                </select>
            </div>

            <div className='relative'>
                {/* LEFT BUTTON */}
                <button
                    onClick={() => scroll("left")}
                    className='absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full px-3 py-2'
                >
                    ◀
                </button>

                {/* SLIDER */}
                <div
                    ref={sliderRef}
                    className='flex gap-4 overflow-x-hidden cursor-grab touch-pan-x'
                    onMouseDown={onMouseDown}
                    onMouseUp={onMouseUp}
                    onMouseLeave={onMouseLeave}
                    onMouseMove={onMouseMove}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                    // style={{ scrollBehavior: isDragging ? "auto" : "smooth" }}
                >
                    {loopItems.map((item, i) => (
                        <div
                            key={i}
                            style={{ width: item?.width || 220 }}
                            className='flex-none bg-white shadow-md rounded-xl p-1 flex flex-col items-center cursor-pointer'
                            onClick={() => setSelectedIndex(i % filteredItems.length)}
                            title='Click to see full image'
                            aria-label={`Click to see full image for ${item.name}`}
                        >
                            <Image
                                src={item.src}
                                alt={item.name}
                                width={item?.width || 220}
                                height={140}
                                className='rounded-lg object-cover'
                            />
                        </div>
                    ))}
                    {/* RIGHT BUTTON */}
                    <button
                        onClick={() => scroll("right")}
                        className='absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full px-3 py-2'
                    >
                        ▶
                    </button>
                </div>
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
                                src={filteredItems[selectedIndex].src}
                                alt={filteredItems[selectedIndex].name}
                                width={800}
                                height={600}
                                className='w-full h-auto rounded-lg object-contain'
                            />

                            {/* Info Bar */}
                            <div className='bg-white p-4 mt-3 rounded-lg shadow-md'>
                                <h3 className='font-semibold text-gray-800'>
                                    {filteredItems[selectedIndex].name}
                                </h3>
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
        </section>
    )
}

export default function Certifications() {
    return (
        <main className='w-full'>
            <CertificationsSection
                title='Certifications'
                items={certifications}
            />
        </main>
    )
}
