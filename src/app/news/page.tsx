"use client"
import React from "react"
import { newsData } from "./newsData"

export default function CorporateNews() {
    return (
        <section className='max-w-6xl mx-auto p-6'>
            <h1 className='text-3xl font-bold text-gray-900 mb-6'>
                Corporate News
            </h1>

            <div className='space-y-12'>
                {newsData.map((item, index) => (
                    <div
                        key={index}
                        className='grid grid-cols-1 md:grid-cols-2 gap-8 items-start'
                    >
                        {/* Left Side: News Content */}
                        <div className='space-y-4'>
                            <p className='text-gray-500'>{item.date}</p>
                            <h2 className='text-2xl font-semibold text-gray-800'>
                                {item.title}
                            </h2>
                            <p className='text-gray-700'>{item.description}</p>

                            {item.videos && item.videos.length > 0 && (
                                <div>
                                    <h3 className='font-medium text-gray-600 mb-2'>
                                        Related Links:
                                    </h3>
                                    <ul className='list-disc list-inside space-y-1'>
                                        {item?.videos?.length > 0 &&
                                            item.videos.map(
                                                (video, vidIndex) => (
                                                    <li key={vidIndex}>
                                                        <a
                                                            href={video?.link}
                                                            target='_blank'
                                                            rel='noopener noreferrer'
                                                            className='text-blue-600 hover:underline'
                                                        >
                                                            {video?.title}
                                                        </a>
                                                    </li>
                                                )
                                            )}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Right Side: YouTube Embed */}
                        {item.youtubeEmbed && (
                            <div className='w-80 h-50 rounded-lg shadow-lg overflow-hidden'>
                                <iframe
                                    width='100%'
                                    height='100%'
                                    src={item.youtubeEmbed}
                                    title={`YouTube video ${index + 1}`}
                                    frameBorder='0'
                                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                    allowFullScreen
                                ></iframe>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}
