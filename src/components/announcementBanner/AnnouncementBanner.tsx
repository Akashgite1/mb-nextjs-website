"use client"
import React from "react"

const messages = [
    "🚀 New project launching soon!",
    "📢 Check out my latest courses.",
    "✨ Feel free to reach out for collaborations.",
]

export default function AnnouncementBanner() {
    const visible = true

    if (!visible) return null
    return visible ? (
        <div className='sticky top-0 z-40 bg-yellow-600 text-white overflow-hidden py-2'>
            <div className='whitespace-nowrap animate-marquee flex gap-16'>
                {messages.map((msg, i) => (
                    <span key={i} className='font-medium'>
                        {msg}
                    </span>
                ))}
                {/* duplicate set for seamless loop */}
                {messages.map((msg, i) => (
                    <span key={`dup-${i}`} className='font-medium'>
                        {msg}
                    </span>
                ))}
            </div>
        </div>
    ) : null
}
