"use client" // ✅ required because we use framer-motion animations

import { useState } from "react"
import { motion } from "framer-motion"
import { categories } from "./platformsData"
import Image from "next/image"
import CategoryCardsGrid from "../categoryCardsGrid/CategoryCardsGrid"

export default function Platforms() {
    const [selectedTestimonials, setSelectedTestimonials] = useState<
        | {
            name: string
            src: string
            width?: number
            height?: number | undefined
        }[]
        | null
    >(null)

    return (
        <section
            id='home'
            className='min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900'
        >
            <header className='text-center pt-6 px-6 pb-4'>
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className='text-4xl md:text-5xl font-bold mb-4'
                >
                    Trusted by 150K+ learners worldwide. 🚀
                </motion.h1>
            </header>

            {/* Reusable Grid Component */}
            <CategoryCardsGrid
                data={categories}
                onOpenTestimonials={(t) => setSelectedTestimonials(t)}
            />

            {/* Modal */}
            {selectedTestimonials && (
                <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>
                    <div className='bg-white rounded-lg p-6 w-[90%] md:w-[80%] max-h-[80vh] overflow-y-auto relative'>
                        {/* Close */}
                        <button
                            className='absolute top-3 right-3 text-gray-600 hover:text-black'
                            onClick={() => setSelectedTestimonials(null)}
                        >
                            ✕
                        </button>

                        <h2 className='text-lg font-bold mb-6'>Testimonials</h2>

                        {/* Flex container for images */}
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
                                        fill // makes Image fill the parent div
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
