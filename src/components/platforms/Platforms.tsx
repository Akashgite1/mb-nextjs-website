"use client" // ✅ required because we use framer-motion animations

import { useState } from "react"
import { motion } from "framer-motion"
import { categories } from "./platformsData"
import Image from "next/image"

export default function Platforms() {
    const [selectedTestimonials, setSelectedTestimonials] = useState<
        { name: string; src: string; width?: number, height?: number | undefined }[] | null
    >(null)

    return (
        <section
            id='home'
            className='min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900'
        >
            <header className='text-center pt-0 pr-10 pb-4 pl-6 px-6'>
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className='text-4xl md:text-5xl font-bold mb-4'
                >
                    Trusted by 150K+ learners worldwide. 🚀
                </motion.h1>
            </header>

            <div className='max-w-8xl mx-auto pb-20 space-y-12'>
                {categories.map((cat) => (
                    <div key={cat.label}>
                        {/* Category Heading */}
                        <h2 className='text-2xl font-bold mb-6'>{cat.label}</h2>

                        {/* Category Grid */}
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                            {cat.items.map((p, index) => (
                                <motion.div
                                    key={`${cat.label}-${p.id}-${index}`}
                                    whileHover={{ scale: 1.05 }}
                                    className={`rounded-2xl shadow-md bg-gradient-to-br ${p.color} p-6 flex flex-col justify-between`}
                                >
                                    <div>
                                        <div className='flex items-center gap-3 mb-4'>
                                            {p.type === "image" && p.img ? (
                                                <Image
                                                    src={p.img}
                                                    alt={p.title}
                                                    width={36}
                                                    height={36}
                                                    className='rounded-full object-cover'
                                                />
                                            ) : (
                                                p.icon
                                            )}
                                            <h3 className='text-x font-semibold'>
                                                {p.title}
                                            </h3>
                                        </div>
                                        <p className='text-sm text-gray-600 mb-2 font-semibold'>
                                            {p.followers}{" "}
                                            {p?.testimonials &&
                                                p?.testimonials.length > 0 && (
                                                    <button
                                                        onClick={() =>
                                                            setSelectedTestimonials(
                                                                p.testimonials!
                                                            )
                                                        }
                                                        className='text-blue-600 underline ml-1'
                                                    >
                                                        (Testimonials)
                                                    </button>
                                                )}
                                        </p>
                                        <p className='text-gray-700 text-sm'>
                                            {p.description}
                                        </p>
                                    </div>

                                    <a
                                        href={p.link}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='mt-6 inline-block bg-gray-900 text-white px-4 py-2 rounded-xl text-center hover:bg-gray-700 transition'
                                    >
                                        Click
                                    </a>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

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
