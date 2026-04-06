"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaChevronDown } from "react-icons/fa"
import Image from "next/image"
import { podcastsData } from "./podcastsData"

/* --- helper: get youtube id --- */
function getYouTubeId(input?: string) {
    if (!input) return null
    const idOnlyRegex = /^[A-Za-z0-9_-]{6,}$/
    if (idOnlyRegex.test(input)) return input

    const regex =
        /(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{6,})/
    const match = input.match(regex)
    return match ? match[1] : null
}

/* --- helper: thumbnail urls --- */
function youtubeThumbUrls(videoId: string) {
    return {
        max: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
        hq: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
    }
}

/* --- YouTube thumbnail --- */
function YouTubeThumb({
    idOrUrl,
    title,
    openOnClick = true,
    link,
    width = 320,
    height = 180,
}: {
    idOrUrl: string
    title?: string
    openOnClick?: boolean
    link?: string
    width?: number
    height?: number
}) {
    const videoId = getYouTubeId(idOrUrl)
    const fallbackImage = "/placeholder-video.png"
    const { max, hq } = videoId
        ? youtubeThumbUrls(videoId)
        : { max: fallbackImage, hq: fallbackImage }

    const [src, setSrc] = useState<string>(max)

    useEffect(() => {
        setSrc(max)
    }, [max])

    const openTarget =
        link ||
        (videoId ? `https://www.youtube.com/watch?v=${videoId}` : undefined)

    if (!videoId) {
        return (
            <div className='w-full h-[180px] bg-gray-200 flex items-center justify-center rounded-md'>
                <div className='text-sm text-gray-600'>No preview</div>
            </div>
        )
    }

    return (
        <a
            href={openOnClick ? openTarget : undefined}
            target='_blank'
            rel='noreferrer'
            className='block w-full rounded-md overflow-hidden group'
        >
            <div className='relative w-full h-[180px] bg-black'>
                <Image
                    src={src}
                    alt={title || "YouTube thumbnail"}
                    className='object-cover w-full h-full group-hover:scale-105 transition'
                    width={width}
                    height={height}
                    onError={() => {
                        if (src !== hq) setSrc(hq)
                        else setSrc(fallbackImage)
                    }}
                />

                {/* Play button */}
                <div className='absolute inset-0 flex items-center justify-center'>
                    <div className='w-12 h-12 bg-black/60 rounded-full flex items-center justify-center'>
                        ▶
                    </div>
                </div>
            </div>
        </a>
    )
}

/* --- MAIN COMPONENT --- */
export default function PodcastsPage() {
    const [selectedCategory, setSelectedCategory] = useState("All")

    // ✅ multiple expanded sections
    const [expandedSections, setExpandedSections] = useState<string[]>(
        podcastsData.map((s) => s.mainHeader),
    )

    const categories = [
        "All",
        ...Array.from(new Set(podcastsData.map((p) => p.mainHeader))),
    ]

    const filtered =
        selectedCategory === "All"
            ? podcastsData
            : podcastsData.filter((s) => s.mainHeader === selectedCategory)

    /* ✅ handle category change */
    useEffect(() => {
        if (selectedCategory !== "All") {
            setExpandedSections([selectedCategory])
        } else {
            // expand all again when back to "All"
            setExpandedSections(podcastsData.map((s) => s.mainHeader))
        }
    }, [selectedCategory])

    return (
        <div className='max-w-5xl mx-auto'>
            {/* Category Buttons */}
            <div className='flex gap-3 flex-wrap justify-center mb-6 mt-4'>
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-md text-sm font-medium border ${
                            selectedCategory === category
                                ? "bg-blue-600 text-white"
                                : "bg-white text-gray-700"
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* ✅ Expand / Collapse All Button */}
            <div className='flex justify-center mb-4'>
                <button
                    onClick={() => {
                        if (expandedSections.length === filtered.length) {
                            setExpandedSections([]) // collapse all
                        } else {
                            setExpandedSections(
                                filtered.map((s) => s.mainHeader),
                            ) // expand all
                        }
                    }}
                    className='px-5 py-2 rounded-md bg-black text-white text-sm hover:bg-gray-800'
                >
                    {expandedSections.length === filtered.length
                        ? "Collapse All"
                        : "Expand All"}
                </button>
            </div>

            {/* Accordions */}
            <div>
                {filtered.map((section) => {
                    const isOpen = expandedSections.includes(section.mainHeader)

                    return (
                        <div
                            key={section.mainHeader}
                            className='mb-4 border rounded-lg overflow-hidden'
                        >
                            {/* Header */}
                            <div className='flex justify-between items-center px-4 py-3 bg-gray-50'>
                                <span className='font-semibold'>
                                    {section.mainHeader} (
                                    {section.rowData.length})
                                </span>

                                <button
                                    onClick={() => {
                                        setExpandedSections((prev) =>
                                            isOpen
                                                ? prev.filter(
                                                      (s) =>
                                                          s !==
                                                          section.mainHeader,
                                                  )
                                                : [...prev, section.mainHeader],
                                        )
                                    }}
                                >
                                    <motion.span
                                        animate={{ rotate: isOpen ? 180 : 0 }}
                                    >
                                        <FaChevronDown />
                                    </motion.span>
                                </button>
                            </div>

                            {/* Content */}
                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className='p-4 border-t'
                                    >
                                        {/* ✅ 4 items per row */}
                                        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
                                            {section.rowData.map(
                                                (item, idx) => (
                                                    <div key={idx}>
                                                        <div className='text-sm mb-2 line-clamp-2'>
                                                            {item.title}
                                                        </div>

                                                        <YouTubeThumb
                                                            idOrUrl={
                                                                item.youtubeId
                                                            }
                                                            title={item.title}
                                                            link={item.link}
                                                        />
                                                    </div>
                                                ),
                                            )}
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
