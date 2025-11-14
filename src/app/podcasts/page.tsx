"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaChevronDown } from "react-icons/fa"
import Image from "next/image"
import { podcastsData } from "./podcastsData"

/* --- helper: get youtube id from id or different url forms --- */
function getYouTubeId(input?: string) {
  if (!input) return null
  const idOnlyRegex = /^[A-Za-z0-9_-]{6,}$/ // loosely matches ids
  if (idOnlyRegex.test(input)) return input

  // common URL patterns (watch?v=, youtu.be/, embed/, shorts/)
  const regex =
    /(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{6,})/
  const match = input.match(regex)
  return match ? match[1] : null
}

/* --- helper: returns best thumbnail URL (try maxres then fallback to hq) --- */
function youtubeThumbUrls(videoId: string) {
  return {
    max: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
    hq: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
  }
}

/* --- YouTube thumbnail component (grid cell friendly) --- */
function YouTubeThumb({
  idOrUrl,
  title,
  openOnClick = true,
  link,
  width = 320,
  height = 180,
  className = "",
}: {
  idOrUrl: string
  title?: string
  openOnClick?: boolean
  link?: string
  width?: number
  height?: number
  className?: string
}) {
  const videoId = getYouTubeId(idOrUrl)
  const fallbackImage = "/placeholder-video.png"
  const { max, hq } = videoId ? youtubeThumbUrls(videoId) : { max: fallbackImage, hq: fallbackImage }

  const [src, setSrc] = useState<string>(max)

  useEffect(() => {
    setSrc(max)
  }, [max])

  const openTarget = link || (videoId ? `https://www.youtube.com/watch?v=${videoId}` : undefined)

  if (!videoId) {
    return (
      <div
        className={`w-full h-[180px] bg-gray-200 flex items-center justify-center rounded-md ${className}`}
        aria-label="No preview available"
      >
        <div className="text-sm text-gray-600">No preview</div>
      </div>
    )
  }

  return (
    <a
      href={openOnClick ? openTarget : undefined}
      target={openOnClick ? "_blank" : undefined}
      rel={openOnClick ? "noreferrer" : undefined}
      onClick={(e) => {
        if (!openOnClick) e.preventDefault()
      }}
      className={`block w-full rounded-md overflow-hidden group ${className}`}
      aria-label={title || "Open video on YouTube"}
    >
      <div className="relative w-full h-[180px] bg-black">
        <Image
          src={src}
          alt={title || "YouTube thumbnail"}
          className="object-cover transition-transform group-hover:scale-105 w-full h-full"
          width={width}
          height={height}
          sizes="(max-width: 640px) 100vw, 320px"
          onError={() => {
            // fallback if maxres doesn't exist
            if (src !== hq) setSrc(hq)
            else setSrc(fallbackImage)
          }}
        />

        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-12 h-12 rounded-full bg-black/60 flex items-center justify-center transform transition group-hover:scale-105">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M8 5v14l11-7L8 5z" fill="white"></path>
            </svg>
          </div>
        </div>

        {/* small YouTube label (optional) */}
        <div className="absolute bottom-2 right-2 text-white text-[10px] bg-black/40 px-2 py-0.5 rounded">
          YouTube
        </div>
      </div>
    </a>
  )
}

/* --- Main PodcastsSection component (thumbnails in 3-column grid) --- */
export default function PodcastsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const categories = ["All", ...Array.from(new Set(podcastsData.map((p) => p.mainHeader)))]
  const filtered =
    selectedCategory === "All"
      ? podcastsData
      : podcastsData.filter((s) => s.mainHeader === selectedCategory)

  useEffect(() => {
    if (selectedCategory !== "All") setExpandedSection(selectedCategory)
    else setExpandedSection(null)
  }, [selectedCategory])

  // grid cell dimensions (keep these in sync with YouTubeThumb height)
  const thumbWidth = 320
  const thumbHeight = 180

  return (
    <div className="max-w-5xl mx-auto">
      {/* Category Buttons */}
      <div className="flex gap-3 flex-wrap justify-center mb-6 mt-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-md text-sm font-medium border transition ${
              selectedCategory === category
                ? "bg-blue-600 text-white border-blue-600 shadow"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Accordions */}
      <div className="grid grid-cols-1 gap-0">
        {filtered.map((section) => {
          const isOpen = expandedSection === section.mainHeader
          return (
            <div key={section.mainHeader} className="mb-4 border rounded-lg overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 bg-gray-50">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-lg">
                    {section.mainHeader} {" ("}
                    {section.rowData.length}
                    {")"}
                  </span>
                </div>

                <button
                  aria-expanded={isOpen}
                  onClick={() => setExpandedSection(isOpen ? null : section.mainHeader)}
                  className="p-2 rounded hover:bg-gray-100"
                >
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 280, damping: 30 }}
                  >
                    <FaChevronDown className="w-4 h-4" />
                  </motion.span>
                </button>
              </div>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="p-4 border-t bg-white"
                  >
                    <div className="mb-4">
                      {/* 3-column grid for thumbnails (responsive) */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {section.rowData?.map((item, idx) => (
                          <div key={idx} className="w-full">
                            <div className="mb-2 text-sm font-medium line-clamp-2">{item.title}</div>
                            <YouTubeThumb
                              idOrUrl={item.youtubeId}
                              title={item.title}
                              link={item.link}
                              width={thumbWidth}
                              height={thumbHeight}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </div>
  )
}
