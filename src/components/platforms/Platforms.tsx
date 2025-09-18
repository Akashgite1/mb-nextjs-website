"use client" // ✅ required because we use framer-motion animations

import { motion } from "framer-motion"
import { categories } from "./platformsData"
import Image from "next/image"


export default function Platforms() {
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
                    Trusted by 130K+ learners worldwide. 🚀
                </motion.h1>
            </header>

            <div className='max-w-8xl mx-auto pb-20 space-y-12'>
                {categories.map((cat) => (
                    <div key={cat.label}>
                        {/* Category Heading */}
                        <h2 className='text-2xl font-bold mb-6'>{cat.label}</h2>

                        {/* Category Grid */}
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                            {cat.items.map((p) => (
                                <motion.div
                                    key={p.id}
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
                                            {p.followers}
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
        </section>
    )
}
