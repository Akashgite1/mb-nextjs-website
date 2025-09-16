"use client"

import Image from "next/image"
import React from "react"
import "./Gallery.css"


const creators = [
    "/gallery/1.png",
    "/gallery/1.png",
    "/gallery/1.png",
    "/gallery/1.png",
]

const course_members = [
    "/gallery/1.png",
    "/gallery/1.png",
    "/gallery/1.png",
    "/gallery/1.png",
]

const corporate_events = [
    "/gallery/1.png",
    "/gallery/1.png",
    "/gallery/1.png",
    "/gallery/1.png",
]

const achievements_Awards = [
    "/gallery/1.png",
    "/gallery/1.png",
    "/gallery/1.png",
    "/gallery/1.png",
]

const special_People = [
    "/gallery/1.png",
    "/gallery/1.png",
    "/gallery/1.png",
    "/gallery/1.png",
]

function GallerySection({
  title,
  items,
}: {
  title: string
  items: string[]
}) {

  // Duplicate the items array twice for seamless scroll
  const scrollItems = [...items, ...items];

  return (
    <section className="w-full py-10 overflow-hidden">
      <h2 className="text-2xl font-bold mb-4 text-center text-black">{title}</h2>
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll gap-2 min-w-max">
          {scrollItems.map((src, i) => (
            <div
              key={i}
              className="flex-none min-w-[180px] bg-white shadow-md rounded-xl p-2 flex items-center justify-center"
            >
              <Image
                src={src}
                alt={title}
                width={200}
                height={120}
                className="rounded-lg object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function GalleryPage() {
    return (
        <main className="w-flex p-6">
            <h1 className="text-3xl font-bold mt-10 mb-8 text-center text-black">
               Image Gallery
            </h1>

            <GallerySection title="Creators" items={creators} />
            <GallerySection title="Course Members" items={course_members} />
            <GallerySection title="Corporate Events" items={corporate_events} />
            <GallerySection title="Special Mentions" items={achievements_Awards} />
            <GallerySection title=" Meet At Random Places In India" items={special_People} />

        </main>
    )
}
