"use client"

import Image from "next/image"
import React from "react"
import "./Gallery.css"
import {
  creators,
  course_members,
  corporate_events,
  achievements_Awards,
  special_People,
  type GalleryItem,
} from "./pageData"

function GallerySection({
  title,
  items,
}: {
  title: string
  items: GalleryItem[]
}) {
  return (
    <section className="w-full py-10 overflow-hidden">
      <h2 className="text-2xl font-bold mb-4 text-center text-black">{title}</h2>
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll gap-4 min-w-max">
          {items.map((item, i) => (
            <div
              key={i}
              style={{ width: item.width || 200 }} // ✅ only width changes
              className="flex-none bg-white shadow-md rounded-xl p-3 flex flex-col items-center"
            >
              {/* Main Image (height fixed) */}
              <Image
                src={item.src}
                alt={item.name}
                width={item.width || 200}
                height={140} // ✅ fixed height
                className="rounded-lg object-cover"
              />

              {/* Name + Description */}
              <div className="mt-2 text-center">
                <p className="font-semibold text-black">{item.name}</p>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>

              {/* Company Logo */}
              <div className="mt-2">
                <Image
                  src={item.logo}
                  alt={`${item.name} logo`}
                  width={80}  // Increased from 50 to 80
                  height={80} // Increased from 50 to 80
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function GalleryPage() {
  return (
    <main className="w-full p-6">
      <h1 className="text-3xl font-bold mt-10 mb-8 text-center text-black">
        Image Gallery
      </h1>

      <GallerySection title="Creators" items={creators} />
      <GallerySection title="Course Members" items={course_members} />
      <GallerySection title="Corporate Events" items={corporate_events} />
      <GallerySection title="Special Mentions" items={achievements_Awards} />
      <GallerySection
        title="Meet At Random Places In India"
        items={special_People}
      />
    </main>
  )
}
