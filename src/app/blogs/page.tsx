"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
    FaFacebook,
    FaTwitter,
    FaChevronDown,
    FaExternalLinkAlt,
} from "react-icons/fa"
import { blogsData } from "./blogsData"
import { IblogsData } from "./types"
import Link from "next/link"

function RenderIcon({ name }: { name?: string }) {
    switch (name) {
        case "facebook":
            return <FaFacebook className='w-4 h-4' />
        case "twitter":
            return <FaTwitter className='w-4 h-4' />
        default:
            return <FaExternalLinkAlt className='w-4 h-4' />
    }
}

export default function BlogsPage() {
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [expandedSection, setExpandedSection] = useState<string | null>(null)

    const categories = [
        "All",
        ...new Set(blogsData.map((item) => item.mainHeader)),
    ]

    const filtered =
        selectedCategory === "All"
            ? blogsData
            : blogsData.filter((s) => s.mainHeader === selectedCategory)

    // ✅ Auto-open accordion for non-All category
    useEffect(() => {
        if (selectedCategory !== "All") {
            setExpandedSection(selectedCategory)
        } else {
            setExpandedSection(null)
        }
    }, [selectedCategory])

    return (
        <div className='max-w-5xl mx-auto p-6'>
            <h1 className='text-4xl font-bold mb-2 text-center'>
                Interview Question Blogs
            </h1>
            <h3 className='text-xl font-bold mb-2 text-center'>
                Detailed explanation of each topic and interview questions is in
                the{" "}
                <Link href='/courses' className='text-blue-600 hover:underline'>
                    course
                </Link>
            </h3>

            {/* Category Buttons */}
            <div className='flex gap-3 flex-wrap justify-center mb-8'>
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
            {filtered.map((section: IblogsData) => {
                const isOpen = expandedSection === section.mainHeader

                return (
                    <div
                        key={section.mainHeader}
                        className='mb-4 border rounded-lg overflow-hidden'
                    >
                        <div className='flex items-center justify-between px-4 py-3 bg-gray-50'>
                            <div className='flex items-center gap-3'>
                                <span className='font-semibold text-lg'>
                                    {section.mainHeader} {" ("}
                                    {section.rowData.length}
                                    {")"}
                                </span>

                                {section.externalLinks?.length > 0 && (
                                    <div className='flex items-center gap-2'>
                                        {section.externalLinks.map(
                                            (link, idx) => (
                                                <a
                                                    key={idx}
                                                    href={link?.href || "#"}
                                                    target='_blank'
                                                    rel='noreferrer'
                                                    className='p-1 rounded hover:bg-gray-100'
                                                    title={link?.href || ""}
                                                >
                                                    <RenderIcon
                                                        name={link?.icon}
                                                    />
                                                </a>
                                            )
                                        )}
                                    </div>
                                )}
                            </div>

                            <button
                                aria-expanded={isOpen}
                                onClick={() =>
                                    setExpandedSection(
                                        isOpen ? null : section.mainHeader
                                    )
                                }
                                className='p-2 rounded hover:bg-gray-100'
                            >
                                <motion.span
                                    animate={{ rotate: isOpen ? 180 : 0 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 280,
                                        damping: 30,
                                    }}
                                >
                                    <FaChevronDown className='w-4 h-4' />
                                </motion.span>
                            </button>
                        </div>

                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className='p-4 border-t bg-white'
                                >
                                    <table className='min-w-full border text-sm'>
                                        <thead className='bg-gray-100'>
                                            <tr>
                                                <th className='px-4 py-2 text-left'>
                                                    Company
                                                </th>
                                                <th className='px-4 py-2 text-left'>
                                                    Link
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {section.rowData?.map(
                                                (row, index) => (
                                                    <tr
                                                        key={index}
                                                        className='border-t hover:bg-gray-50 transition'
                                                    >
                                                        <td className='px-4 py-2'>
                                                            {row.company}
                                                        </td>
                                                        <td className='px-4 py-2 text-blue-600 underline'>
                                                            <a
                                                                href={row.link}
                                                                target='_blank'
                                                                rel='noreferrer'
                                                            >
                                                                {row.link}
                                                            </a>
                                                        </td>
                                                    </tr>
                                                )
                                            )}
                                        </tbody>
                                    </table>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )
            })}
        </div>
    )
}
