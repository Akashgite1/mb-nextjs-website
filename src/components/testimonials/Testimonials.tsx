"use client"
import Image from "next/image"
import React from "react"

type Testimonial = {
    text: string
    name: string
    logo: string
}

const testimonials: Testimonial[] = [
    {
        text: "I had a great time speaking with Manohar Sir about all the concerns I had regarding my career. He was truly kind and took the time to answer all my questions with great patience, helping me develop the right mindset and a clear roadmap for the future. Thank you so much, Manohar Sir—I'm looking forward to speaking with you again very soon.",
        name: "Nikhil Munj",
        logo: "/images/companies/google.png",
    },
    {
        text: "Manohar was quite helpful in resolving an issue related to PF. His guidance and experience was really helpful and straight to the point.",
        name: "Sarah",
        logo: "/images/companies/microsoft.png",
    },
    {
        text: "He listen to you with patiance and gives your practical advice. Definitely recommended for critical scenario related job/career",
        name: "Arjun Mehta",
        logo: "/images/companies/amazon.png",
    },
    {
        text: "Me as College student got helped in making wise decission for oncampus company placement policy.",
        name: "Priya Sharma",
        logo: "/images/companies/meta.png",
    },
    {
        text: "Thanks to the insights, they were not only practical but also deeply personalized to my goals and strengths. Thanks to your guidance, I gained clarity on my career path and learned valuable strategies",
        name: "Rahul",
        logo: "/images/companies/microsoft.png",
    },
    {
        text: "Share real life insights, roadmaps and his personal experience which could be really helpful. Great practical knowledge on the IT industry and shared some great advices as well",
        name: "Arjun",
        logo: "/images/companies/amazon.png",
    },
]

export default function Testimonials() {
    return (
        <>
            <h2 className='text-2xl font-bold mt-10 mb-4 text-center'>
                Testimonials
            </h2>
            <div className='w-full max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6 h-[600px] overflow-y-auto space-y-6'>
                {testimonials.map((t, i) => (
                    <div
                        key={i}
                        className='border-b pb-4 last:border-b-0 last:pb-0 flex flex-col gap-3'
                    >
                        <p className='text-gray-700 text-base leading-relaxed'>
                            “{t.text}”
                        </p>
                        <div className='flex items-center gap-3'>
                            <span className='font-semibold text-gray-900'>
                                {t.name}
                            </span>
                            {/* <Image
                                src={t.logo}
                                alt={`${t.name} company logo`}
                                width={80}
                                height={40}
                                className='h-8 object-contain'
                            /> */}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
