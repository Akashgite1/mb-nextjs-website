"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

interface Testimonial {
    name: string
    src: string
    width?: number
    height?: number
}

interface Item {
    id: number
    type: "image" | "component"
    title: string
    followers: string
    description: string
    color: string
    link: string
    img?: string
    icon?: React.ReactNode
    testimonials?: Testimonial[]
}

interface Category {
    label: string
    items: Item[]
}

interface CategoryCardsGridProps {
    data: Category[]
    onOpenTestimonials: (testimonials: Testimonial[]) => void
}

export default function CategoryCardsGrid({
    data,
    onOpenTestimonials,
}: CategoryCardsGridProps) {
    return (
        <div className='max-w-8xl mx-auto pb-8 space-y-12'>
            {data.map((cat) => (
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
                                    {/* Image or Icon */}
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
                                        <h3 className='text-lg font-semibold'>
                                            {p.title}
                                        </h3>
                                    </div>

                                    {/* Followers & Testimonials */}
                                    <p className='text-sm text-gray-600 mb-2 font-semibold'>
                                        {p.followers}{" "}
                                        {p.testimonials?.length ? (
                                            <button
                                                onClick={() =>
                                                    onOpenTestimonials(
                                                        p.testimonials!
                                                    )
                                                }
                                                className='text-blue-600 underline ml-1'
                                            >
                                                (Testimonials)
                                            </button>
                                        ) : null}
                                    </p>

                                    <p className='text-gray-700 text-sm line-clamp-3 min-h-[4.5rem]'>
                                        {p.description}
                                    </p>
                                </div>

                                {/* Link — internal vs external */}
                                {p.link.startsWith("http") ? (
                                    <a
                                        href={p.link}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='bg-gray-900 text-white px-4 py-2 rounded-xl text-center hover:bg-gray-700 transition'
                                    >
                                        Click
                                    </a>
                                ) : (
                                    <Link
                                        href={p.link}
                                        className='bg-gray-900 text-white px-4 py-2 rounded-xl text-center hover:bg-gray-700 transition'
                                    >
                                        Click
                                    </Link>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}
