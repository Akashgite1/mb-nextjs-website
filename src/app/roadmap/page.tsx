/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState } from "react"
import CareerSection from "@/components/roadmapSections/CareerSection"
import TechnicalCoursesSection from "@/components/roadmapSections/TechnicalCoursesSection"
import PodcastsSection from "@/components/roadmapSections/PodcastsSection"

export default function RoadmapPage() {
  const [activeTab, setActiveTab] = useState<"career" | "podcasts" | "technical">("career")

  return (
    <main className="pl-6 pr-6 pb-6 pt-4 max-w-6xl mx-auto">
      {/* <h1 className="text-2xl font-bold mb-4 text-center">
        {activeTab === "technical"
          ? "Technical Courses 🚀"
          : activeTab === "podcasts"
          ? "Top Podcasts 🎧"
          : "Career Growth Resources 🎯"}
      </h1> */}

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-8">
        {[
          { key: "career", label: "Career" }, 
          { key: "podcasts", label: "Podcasts" },
          { key: "technical", label: "Technical Courses" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key as any)}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              activeTab === tab.key
                ? "bg-blue-600 text-white shadow"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTab === "career" && <CareerSection />}
      {activeTab === "podcasts" && <PodcastsSection />}
      {activeTab === "technical" && <TechnicalCoursesSection />}
    </main>
  )
}
