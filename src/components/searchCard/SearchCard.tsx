"use client"

import { useMemo, useState } from "react"
import { collegeQnA } from "@/components/faq/faqData"

export default function SearchCard() {
    const [query, setQuery] = useState("")

    type CollegeSection = {
        title: string
        data: { question: string }[]
    }

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase()
        // if no query, return all sections
        if (!q) return collegeQnA as CollegeSection[]

        // filter questions within each section
        return (collegeQnA as CollegeSection[])
            .map((section) => ({
                ...section,
                data: section.data.filter((d) => d.question.toLowerCase().includes(q)),
            }))
            .filter((s) => s.data && s.data.length > 0)
    }, [query])

    return (
        <section className="w-full">
            {/* Search bar */}
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search questions..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>

            {/* Questions list with section grouping and dot bullets */}
            <div className="space-y-4">
                {filtered.length === 0 ? (
                    <p className="text-gray-500 text-center">No questions found.</p>
                ) : (
                    filtered.map((section, sIdx) => (
                        <div key={sIdx} className="bg-white border rounded-2xl p-4 shadow-sm">
                            <h4 className="font-semibold text-gray-900 mb-3">{section.title}</h4>
                            <ul className="space-y-3">
                                {section.data.map((d, qIdx) => (
                                    <li key={qIdx} className="flex gap-3 items-start">
                                        <span className="mt-1 h-3 w-3 rounded-full bg-blue-600 flex-shrink-0" aria-hidden></span>
                                        <span className="text-gray-800">{d.question}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))
                )}
            </div>
        </section>
    )
}
