"use client"
import { useState } from "react"
import CareerSection from "@/components/roadmapSections/CareerSection"
import TechnicalSection from "@/components/roadmapSections/TechnicalSection"
import type { RoadmapCategory } from "./types" // adjust import path as needed

// ✅ Properly typed roadmap
const roadmap: RoadmapCategory[] = [
    {
        category: "Frontend",
        data: [
            {
                title: "HTML & CSS Fundamentals",
                children: [
                    {
                        label: "Intro to HTML",
                        type: "FREE",
                        links: [
                            {
                                type: "text",
                                label: "Article1",
                                url: "https://medium.com/article1",
                            },
                            {
                                type: "video",
                                label: "Video1",
                                url: "https://youtube.com",
                            },
                        ],
                    },
                ],
            },
            {
                title: "JavaScript",
                children: [
                    {
                        label: "Basics",
                        type: "Course",
                    },
                ],
            },
        ],
    },
    {
        category: "Backend",
        data: [
            // {
            //     title: "Node.js Fundamentals",
            //     children: [
            //         {
            //             label: "Intro to Node",
            //             type: "FREE",
            //             links: [
            //                 {
            //                     type: "text",
            //                     label: "ArticleX",
            //                     url: "https://medium.com/articleX",
            //                 },
            //             ],
            //         },
            //     ],
            // },
        ],
    },
]

export default function RoadmapPage() {
    const [activeTab, setActiveTab] = useState<"career" | "technical">("career")
    const [selectedCategory, setSelectedCategory] = useState<string | null>(
        roadmap.length > 0 ? roadmap[0].category : "" // ✅ default to first category
    )

    return (
        <main className='pl-6 pr-6 pb-6 pt-4 max-w-6xl mx-auto'>
            {/* Tab Buttons */}
            <div className='flex justify-center gap-4 mb-8'>
                <button
                    onClick={() => {
                        setActiveTab("career")
                        setSelectedCategory(null)
                    }}
                    className={`px-4 py-2 rounded-lg font-medium transition ${
                        activeTab === "career"
                            ? "bg-blue-600 text-white shadow"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                >
                    Career
                </button>
                <button
                    onClick={() => setActiveTab("technical")}
                    className={`px-4 py-2 rounded-lg font-medium transition ${
                        activeTab === "technical"
                            ? "bg-blue-600 text-white shadow"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                >
                    Technical
                </button>
            </div>

            <h1 className='text-2xl font-bold mb-4 text-center'>
                {`Here are ${
                    activeTab === "technical" ? "FREE articles" : "FREE Videos"
                }, check out course for premium content 🚀`}
            </h1>

            {/* Career Section */}
            {activeTab === "career" && <CareerSection />}

            {/* Technical Section */}
            {activeTab === "technical" && (
                <div>
                    {/* Category Buttons */}
                    <div className='flex flex-wrap justify-center gap-3 mb-6'>
                        {roadmap.map((cat) => (
                            <button
                                key={cat.category}
                                onClick={() =>
                                    setSelectedCategory(
                                        selectedCategory === cat.category
                                            ? null
                                            : cat.category
                                    )
                                }
                                className={`px-4 py-2 rounded-lg font-medium transition border ${
                                    selectedCategory === cat.category
                                        ? "bg-blue-600 text-white border-blue-600"
                                        : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
                                }`}
                            >
                                {cat.category}
                            </button>
                        ))}
                    </div>

                    {/* Selected Category Tree or Fallback */}
                    {selectedCategory &&
                        (() => {
                            const selected = roadmap.find(
                                (c) => c.category === selectedCategory
                            )
                            if (
                                !selected ||
                                !selected.data ||
                                selected.data.length === 0
                            ) {
                                return (
                                    <div className='text-center text-gray-600 py-10 text-lg'>
                                        🚧 Roadmap will come soon...
                                    </div>
                                )
                            }

                            return (
                                <TechnicalSection
                                    title={`${selectedCategory} Roadmap`}
                                    nodes={selected.data}
                                />
                            )
                        })()}
                </div>
            )}
        </main>
    )
}
