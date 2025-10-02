"use client"
import { useState } from "react"
import CareerSection from "@/components/roadmapSections/CareerSection"
import TechnicalSection from "@/components/roadmapSections/TechnicalSection"

export default function RoadmapPage() {
    const [activeTab, setActiveTab] = useState<"career" | "technical">("career")

    return (
        <main className="pl-6 pr-6 pb-6 pt-4 max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold mb-4 text-center">
                Here are free guidance videos, check out course for premium
                content 🚀
            </h1>

            {/* Tab Buttons */}
            <div className="flex justify-center gap-4 mb-8">
                <button
                    onClick={() => setActiveTab("career")}
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

            {/* Conditional Rendering */}
            {activeTab === "career" ? <CareerSection /> : <TechnicalSection />}
        </main>
    )
}
