"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import TreeNode from "../treeNode/TreeNode"
import { corporateTopics } from "@/app/roadmap/topics"

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
    color?: string
    link: string
    img?: string
    testimonials?: Testimonial[]
    isFree?: boolean
    price?: number
    oldPrice?: number
    techStack?: string[]
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
    const [activeItem, setActiveItem] = useState<Item | null>(null)

    return (
        <>
            <div className='max-w-8xl mx-auto pb-10 space-y-14'>
                {data.map((cat) => (
                    <div key={cat.label}>
                        <h2 className='text-2xl font-bold mb-6'>{cat.label}</h2>

                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                            {cat.items.map((p, index) => (
                                <motion.div
                                    key={`${cat.label}-${p.id}-${index}`}
                                    whileHover={{ scale: 1.04 }}
                                    className='bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden flex flex-col'
                                >
                                    {p.img && (
                                        <div className='relative w-full aspect-[16/9] overflow-hidden'>
                                            <Image
                                                src={p.img}
                                                alt={p.title}
                                                fill
                                                className='object-cover'
                                                sizes='(max-width: 768px) 100vw, 33vw'
                                            />
                                        </div>
                                    )}

                                    {/* Content */}
                                    <div className='p-4 flex flex-col flex-1'>
                                        <h4 className='text-lg font-semibold'>
                                            {p.title}
                                        </h4>

                                        {/* Followers + View details */}
                                        <div className='flex justify-between items-center text-sm'>
                                            <span className='text-gray-600'>
                                                {p.followers}
                                            </span>

                                            <button
                                                onClick={() => setActiveItem(p)}
                                                className='text-primary underline font-medium'
                                            >
                                                View details
                                            </button>
                                        </div>

                                        {/* Pricing */}
                                        <div>
                                            {p.isFree ? (
                                                <span className='text-green-600 font-semibold'>
                                                    FREE
                                                </span>
                                            ) : (
                                                <div className='flex items-center gap-2'>
                                                    {p.price && (
                                                        <span className='text-lg font-semibold text-black'>
                                                            ₹{p.price}
                                                        </span>
                                                    )}
                                                    {p.oldPrice && (
                                                        <span className='text-sm line-through text-gray-400'>
                                                            ₹{p.oldPrice}
                                                        </span>
                                                    )}
                                                </div>
                                            )}
                                        </div>

                                        <div className='flex-1' />

                                        {/* CTA */}
                                        {p.link.startsWith("http") ? (
                                            <a
                                                href={p.link}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                            >
                                                <button className='w-full mt-4 rounded-lg py-3 bg-slate-900 text-white hover:bg-slate-800 transition'>
                                                    Click Here
                                                </button>
                                            </a>
                                        ) : (
                                            <Link href={p.link}>
                                                <button className='w-full mt-4 rounded-lg py-3 bg-slate-900 text-white hover:bg-slate-800 transition'>
                                                    Click Here
                                                </button>
                                            </Link>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* 🔥 MODAL */}
            {activeItem && (
                <div className='fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4'>
                    <div className='bg-white max-w-lg w-full rounded-2xl p-6 relative max-h-[80vh] overflow-auto'>
                        {/* Close */}
                        <button
                            onClick={() => setActiveItem(null)}
                            className='absolute top-3 right-3 text-xl'
                        >
                            ❌
                        </button>

                        {corporateTopics.map((node, i) => (
                            <TreeNode key={i} node={node} />
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}
