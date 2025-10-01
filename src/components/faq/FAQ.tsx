"use client"
import { useMemo, useState } from "react"
import Link from "next/link"
import { faqData } from "./faqData"

export default function FAQ() {
    const [search, setSearch] = useState("")
    const [category, setCategory] = useState("All")

    // compute categories during render, memoized for perf
    const categories = useMemo(
        () => ["All", ...Array.from(new Set(faqData.map((f) => f.category)))],
        []
    )

    const filteredFaqs = useMemo(() => {
        return faqData.filter((item) => {
            const matchesSearch =
                item.question.toLowerCase().includes(search.toLowerCase()) ||
                item.answer.toLowerCase().includes(search.toLowerCase())
            const matchesCategory =
                category === "All" || item.category === category
            return matchesSearch && matchesCategory
        })
    }, [search, category])

    return (
        <section id='faq' className='mx-auto'>
            {/* Header */}
            <div className='flex flex-col md:flex-row justify-center md:justify-between items-center gap-3 mb-8 text-center md:text-left'>
                <h2 className='text-2xl sm:text-3xl font-bold text-black'>
                    Frequently Asked Questions with Solutions
                </h2>
                <Link
                    href='/faq'
                    className='bg-blue-600 text-white font-medium px-6 py-2 rounded-full hover:bg-blue-700 transition shadow-md hover:shadow-lg'
                >
                    View all FAQs
                </Link>
            </div>

            {/* Search + Category Filter */}
            <div className='flex flex-col md:flex-row gap-3 md:gap-4 mb-6'>
                <input
                    type='text'
                    placeholder='Search questions...'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className='w-full md:flex-1 border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-400'
                />

                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className='w-full md:w-auto border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-400'
                >
                    {categories.map((cat) => (
                        <option key={cat} value={cat}>
                            {cat}
                        </option>
                    ))}
                </select>
            </div>

            {/* FAQ List */}
            <div className='space-y-6 max-h-[800px] overflow-y-auto'>
                {filteredFaqs.length > 0 ? (
                    filteredFaqs.map((faq, index) => (
                        <div
                            key={index}
                            className='border rounded-lg p-4 shadow-sm bg-white'
                        >
                            <h3 className='font-semibold text-base sm:text-lg text-black'>
                                {faq.question}
                            </h3>
                            <p className='text-gray-700 mt-2 text-sm sm:text-base'>
                                {faq.answer}
                            </p>
                            {faq.videos?.length ? (
                                <div className='mt-3'>
                                    <div className='flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4'>
                                        <h3 className='font-medium text-sm sm:text-base text-gray-600'>
                                            Related Links:
                                        </h3>
                                        {faq.videos.map((video, vidIndex) => (
                                            <a
                                                key={vidIndex}
                                                href={video.link}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className='text-blue-600 hover:underline text-sm sm:text-base'
                                            >
                                                {video.title}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    ))
                ) : (
                    <p className='text-gray-500 text-center'>
                        No results found.
                    </p>
                )}
            </div>
        </section>
    )
}
