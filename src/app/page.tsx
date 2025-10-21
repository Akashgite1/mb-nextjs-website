"use client"


import { useState, useEffect } from "react"
import Image from "next/image"
import { saleConfig } from "@/utils/constants"
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
                            className='absolute top-3 right-3 text-gray-600 hover:text-black transition'
                            aria-label='Close'
                        >
                            <X size={24} />
                        </button>


                        {/* Image Section */}
                        <Image
                            src={saleConfig.imageUrl}
                            alt='Sale Banner'
                            className='w-full object-contain max-h-[500px]'
                            width={600}
                            height={800}
                        />


                        {/* Text Section */}
                        <div className='p-6 text-center'>
                            <h2 className='text-2xl md:text-3xl font-bold text-gray-900'>
                                {saleConfig.title}
                            </h2>
                            <div
                                className='text-gray-700 mt-4 text-lg leading-relaxed text-left md:text-left'
                                dangerouslySetInnerHTML={{
                                    __html: saleConfig.subtitle,
                                }}
                            />
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
