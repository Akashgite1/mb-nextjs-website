"use client"
import React from "react"

const messages = [
    "🚀 Check FAQ - added Corporate Gyaan!",
    "📢 Added 700+ companies which are hiring - Buy it now.",
    "✨ Buy any Course (React or Java or Corporate/College Coaching) and Get Real Resumes for FREE as reference.",
    "✨ Make use of course members whatsapp group for referrals",
]

export default function AnnouncementBanner() {
    const visible = true

    if (!visible) return null
    return visible ? (
        <div className='sticky top-0 z-40 bg-amber-100 text-black overflow-hidden py-2'>
            
            {/* Scrolling content */}
                <div className='whitespace-nowrap animate-[marquee_30s_linear_infinite] flex gap-16'>
                    {messages.map((msg, i) => (
                        <span key={i} className='font-medium'>
                            {msg}
                        </span>
                    ))}
                    {messages.map((msg, i) => (
                        <span key={`dup-${i}`} className='font-medium'>
                            {msg}
                        </span>
                    ))}
                </div>
        </div>
    ) : null
}
