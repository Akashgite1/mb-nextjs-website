"use client"

import { useState, useEffect } from "react"
import { saleConfig } from "@/utils/constants"
import Image from "next/image"
import Link from "next/link"
import HeroBanner from "@/components/heroBanner/HeroBanner"
import Platforms from "@/components/platforms/Platforms"
import Gallery from "@/components/gallery/Gallery"
import CorporateAppreciation from "@/components/corporateAppreciation/CorporateAppreciation"
import FAQ from "@/components/faq/FAQ"
import FansFeedback from "@/components/fansFeedback/FansFeedback"
import { X } from "lucide-react" // ✅ lightweight close icon

export default function Home() {
    const [showPromo, setShowPromo] = useState(false)

    useEffect(() => {
        const today = new Date()
        const start = new Date(saleConfig.activeFrom)
        const end = new Date(saleConfig.activeTill)

        // Show promo only within date range
        if (today >= start && today <= end) {
            setShowPromo(true)
        }
    }, [])

    return (
        <div className='relative'>
            {/* 🎯 Modal Promo Banner */}
            {showPromo && (
                <div className='fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50'>
                    <div className='relative bg-white rounded-2xl shadow-2xl overflow-hidden w-[90%] max-w-xl animate-fadeIn'>
                        {/* Close Icon */}
                        <button
                            onClick={() => setShowPromo(false)}
                            className='absolute top-3 right-3 bg-white text-gray-700 hover:text-black rounded-full shadow-md p-1.5 transition transform hover:scale-105'
                            aria-label='Close'
                        >
                            <X size={22} />
                        </button>

                        {/* Image Section */}
                        <Image
                            src={saleConfig.imageUrl}
                            alt='Sale Banner'
                            className='w-full object-cover max-h-[400px]'
                            width={700}
                            height={600}
                        />

                        {/* Text Section */}
                        <div className='p-6 pt-4 text-center'>
                            <h2 className='text-2xl md:text-3xl font-bold text-gray-900'>
                                {saleConfig.title}
                            </h2>
                            <div
                                className='text-gray-700 mt-4 text-lg leading-relaxed text-left md:text-left'
                                dangerouslySetInnerHTML={{
                                    __html: saleConfig.subtitle,
                                }}
                            />

                            {/* Centered Button with Proper Spacing */}
                            <div className='mt-4 flex justify-center'>
                                {" "}
                                <Link
                                    href='https://www.linkedin.com/company/blueyonder/jobs/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition transform hover:scale-105 duration-200'
                                >
                                    Check Jobs Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Main content */}
            <HeroBanner />
            <div className='flex-1 pl-6 pr-6 pb-6'>
                <Platforms />
                <Gallery />
                <CorporateAppreciation />
                <FAQ />
                <FansFeedback />
                {/* <Testimonials /> */}
            </div>
        </div>
    )
}
