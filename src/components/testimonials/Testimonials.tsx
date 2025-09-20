"use client"
import React from "react"
import { testimonials } from "./testimonialsData"
// import Image from "next/image"

export default function Testimonials() {
    return (
        <>
            <h2 className='text-2xl font-bold mt-10 mb-4 text-center text-black'>
                Testimonials
            </h2>
            <div className='w-full max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6 h-[400px] overflow-y-auto space-y-6'>
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
