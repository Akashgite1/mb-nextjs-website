"use client"
import React from "react"

const messages = [
    "🚀 Check FAQ - added Corporate Gyaan!",
    "📢 Added 500+ companies in Sheet - Buy it now.",
    "✨ Talk 1:1 on personal queries.",
    "✨ Make use of course members whatsapp group for referrals",
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
