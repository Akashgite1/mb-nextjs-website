"use client"
import Image from "next/image"
import React from "react"
import "./Gallery.css"

const creators = [
    "/images/gallery/creators/1.png",
    "/images/gallery/creators/1.png",
    "/images/gallery/creators/1.png",
    "/images/gallery/creators/1.png",
    "/images/gallery/creators/1.png",
]

// const subscribers = [
//     "/images/sub1.png",
//     "/images/sub2.png",
//     "/images/sub3.png",
//     "/images/sub4.png",
//     "/images/sub5.png",
// ]

export default function Gallery() {
    return (
        <>
            <h2 className='text-2xl font-bold mt-10 mb-4 text-center'>
                Gallery
            </h2>
            <div className='w-full bg-gray-50 py-10 overflow-hidden'>
                {/* Creators */}
                {/* <h2 className='text-2xl font-bold mb-2 text-center'>
                    Creators
                </h2> */}
                <div className='relative w-full overflow-hidden'>
                    <div className='flex gap-6 animate-scroll'>
                        {[...creators, ...creators].map((src, i) => (
                            <div
                                key={i}
                                className='min-w-[180px] bg-white shadow-md rounded-xl p-2 flex items-center justify-center'
                            >
                                <Image
                                    src={src}
                                    alt='creator'
                                    width={86}
                                    height={56}
                                    className='w-86 h-56 rounded-lg object-cover'
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Subscribers */}
                {/* <h2 className='text-2xl font-bold mt-10 mb-4 text-center'>
                    Subscribers
                </h2> */}
                {/* <div className='relative w-full overflow-hidden'>
                    <div className='flex gap-6 animate-scroll'>
                        {[...subscribers, ...subscribers].map((src, i) => (
                            <div
                                key={i}
                                className='min-w-[180px] bg-white shadow-md rounded-xl p-2 flex items-center justify-center'
                            >
                                <Image
                                    src={src}
                                    alt='subscriber'
                                    width={86}
                                    height={56}
                                    className='w-86 h-56 rounded-lg object-cover'
                                />
                            </div>
                        ))}
                    </div>
                </div> */}
            </div>
        </>
    )
}
