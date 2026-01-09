"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

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
      <div className="max-w-8xl mx-auto pb-10 space-y-14">
        {data.map((cat) => (
          <div key={cat.label}>
            <h2 className="text-2xl font-bold mb-6">{cat.label}</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {cat.items.map((p, index) => (
                <motion.div
                  key={`${cat.label}-${p.id}-${index}`}
                  whileHover={{ scale: 1.04 }}
                  className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden flex flex-col"
                >
                  {p.img && (
                    <div className="relative w-full aspect-[16/9] overflow-hidden">
                      <Image
                        src={p.img}
                        alt={p.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="text-lg font-semibold">{p.title}</h3>

                    {/* Followers + View details */}
                    <div className="flex justify-between items-center text-sm mt-1">
                      <span className="text-gray-600">{p.followers}</span>

                      <button
                        onClick={() => setActiveItem(p)}
                        className="text-primary underline font-medium"
                      >
                        View details
                      </button>
                    </div>

                    {/* Pricing */}
                    <div className="mt-2">
                      {p.isFree ? (
                        <span className="text-green-600 font-semibold">
                          FREE
                        </span>
                      ) : (
                        <div className="flex items-center gap-2">
                          {p.price && (
                            <span className="text-lg font-semibold text-black">
                              ₹{p.price}
                            </span>
                          )}
                          {p.oldPrice && (
                            <span className="text-sm line-through text-gray-400">
                              ₹{p.oldPrice}
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="flex-1" />

                    {/* CTA */}
                    {p.link.startsWith("http") ? (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="w-full mt-4 rounded-lg py-3 bg-slate-900 text-white hover:bg-slate-800 transition">
                          Enroll Now
                        </button>
                      </a>
                    ) : (
                      <Link href={p.link}>
                        <button className="w-full mt-4 rounded-lg py-3 bg-slate-900 text-white hover:bg-slate-800 transition">
                          Enroll Now
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
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
          <div className="bg-white max-w-lg w-full rounded-2xl p-6 relative">
            {/* Close */}
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-3 right-3 text-xl"
            >
              ❌
            </button>

            <h3 className="text-xl font-semibold mb-2">
              {activeItem.title}
            </h3>

            <p className="text-gray-600 mb-4">
              {activeItem.description}
            </p>

            {activeItem.techStack && activeItem.techStack.length > 0 && (
              <>
                <h4 className="font-semibold mb-2">Tech Stack</h4>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                  {activeItem.techStack.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
