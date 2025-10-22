"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { technicalCourses } from "./TechnicalCoursesGridData"
import CategoryCardsGrid from "../categoryCardsGrid/CategoryCardsGrid"
import TechnicalCoursesSection from "../roadmapSections/TechnicalCoursesSection"

export default function TechnicalCoursesGrid() {
    const [selectedTestimonials, setSelectedTestimonials] = useState<
        { name: string; src: string; width?: number; height?: number }[] | null
    >(null)

    return (
        <section className='min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900 px-6 py-4'>
            <header className='text-center mb-6'>
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className='text-2xl md:text-3xl font-bold mb-2'
                >
                    Technical Courses 🚀
                </motion.h1>
                <p className='text-gray-600 text-lg'>
                    Learn the exact skills companies are hiring for in 2025.
                </p>
            </header>

            <TechnicalCoursesSection />
            {/* Reusable Grid Component */}
            <CategoryCardsGrid
                data={technicalCourses}
                onOpenTestimonials={(t) => setSelectedTestimonials(t)}
            />

            {/* Testimonials modal */}
            {selectedTestimonials && (
                <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>
                    <div className='bg-white rounded-lg p-6 w-[90%] md:w-[80%] max-h-[80vh] overflow-y-auto relative'>
                        <button
                            className='absolute top-3 right-3 text-gray-600 hover:text-black'
                            onClick={() => setSelectedTestimonials(null)}
                        >
                            ✕
                        </button>
                        <h2 className='text-lg font-bold mb-6'>Testimonials</h2>

                        <div className='flex flex-wrap gap-4 justify-center'>
                            {selectedTestimonials.map((t, i) => (
                                <div
                                    key={i}
                                    style={{
                                        width: t.width
                                            ? `${t.width}px`
                                            : "450px",
                                        height: t.height
                                            ? `${t.height}px`
                                            : "100px",
                                    }}
                                    className='relative bg-gray-100 rounded-lg overflow-hidden flex-shrink-0'
                                >
                                    <Image
                                        src={t.src}
                                        alt={t.name}
                                        fill
                                        className='object-contain'
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}
