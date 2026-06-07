"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { X } from "lucide-react"
import { companiesList } from "@/utils/companiesList"
import { saleConfig } from "@/utils/constants"
// import { youTubeMembersList } from "@/utils/youTubeMembersList"
import Image from "next/image"
import Link from "next/link"
import HeroBanner from "@/components/heroBanner/HeroBanner"
import Platforms from "@/components/platforms/Platforms"
import Gallery from "@/components/gallery/Gallery"
import CorporateAppreciation from "@/components/corporateAppreciation/CorporateAppreciation"
// import FAQ from "@/components/faq/FAQ"
import FansFeedback from "@/components/fansFeedback/FansFeedback"
// import YouTubeMembers from "@/components/youTubeMembers/YouTubeMembers"
import AboutMe from "@/components/aboutMe/AboutMe"
import ContactMe from "@/components/contactMe/ContactMe"
// import BrandPartners from "@/components/brandPartners/BrandPartners"
import CollegeVisits from "@/components/collegeVisits/CollegeVisits"
import Certifications from "@/components/certifications/Certifications"
// import FrontendInterviewBanner from "@/components/heroBanner/FrontendInterviewBanner"
// import CohortPricingSection from "@/components/cohortpricing/CohortPricingSection"

export default function Home() {
    const [showPromo, setShowPromo] = useState(false)
    const [todayCompany, setTodayCompany] = useState<{
        name: string
        link: string
        index: number
        dayNumber: number
    } | null>(null)

    useEffect(() => {
        const today = new Date()
        const startRotation = new Date(saleConfig.startRotationDate)

        // Calculate number of days since start
        const diffDays = Math.floor(
            (today.getTime() - startRotation.getTime()) / (1000 * 60 * 60 * 24)
        )

        const totalCompanies = companiesList.length / 2
        const currentIndex = diffDays % totalCompanies

        const name = companiesList[currentIndex * 2]
        const link = companiesList[currentIndex * 2 + 1]

        setTodayCompany({
            name,
            link,
            index: currentIndex + 1, // for Job #1..n
            dayNumber: diffDays + 1, // for Day count
        })

        setShowPromo(true)
    }, [])

    if (!todayCompany) return null

    return (
        <div className='relative'>
            {/* 🎯 Promo Modal */}
            {showPromo && (
                <div className='fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50'>
                    <div className='relative bg-white rounded-2xl shadow-2xl overflow-hidden w-[90%] max-w-2xl animate-fadeIn'>
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
                            className='w-full object-cover max-h-[200px]'
                            width={800}
                            height={300}
                        />

                        {/* Text Section */}
                        <div className='p-6 pt-4 text-center'>
                            {/* Job Counter */}
                            <p className='text-gray-600 text-sm mb-1'>
                                Job #{todayCompany.index} of{" "}
                                {/* {companiesList.length / 2} ( Day{" "} */}
                                {803} ( Day{" "}
                                {todayCompany.dayNumber})
                            </p>

                            <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-3'>
                                {saleConfig.title}
                            </h2>

                            {/* Company Section */}
                            <div className='mb-6 text-center'>
                                <p className='text-gray-900 font-semibold text-lg'>
                                    Company:{" "}
                                    <Link
                                        href={todayCompany.link}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='text-blue-600 hover:underline'
                                    >
                                        {todayCompany.name} — Click here
                                    </Link>
                                </p>
                            </div>

                            {/* Subtitles */}
                            <div className='text-gray-700 text-lg leading-relaxed space-y-2 text-left'>
                                {saleConfig.subtitles.map((item, idx) => (
                                    <p key={idx}>
                                        <Link
                                            href={item.link}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='text-blue-600 hover:underline font-medium'
                                        >
                                            {item.text}
                                        </Link>
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Main content */}
            <HeroBanner />
            {/* <FrontendInterviewBanner />
            <CohortPricingSection/> */}
            <div className='flex-1 pl-6 pr-6 pb-6'>
                <header className='text-center pt-6 px-6 pb-4'>
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className='text-4xl md:text-5xl font-bold mb-4'
                >
                    Trusted by 150K+ learners worldwide. 🚀
                </motion.h1>
            </header>
                {/* <Platforms /> */}
                <Gallery />
                <CollegeVisits />
                <CorporateAppreciation />
                <Certifications />
                {/* <BrandPartners /> */}
                {/* <FAQ /> */}
                {/* <YouTubeMembers sponsors={youTubeMembersList}/> */}
                <FansFeedback />
                <AboutMe />
                <ContactMe /> {/* 👈 Add this at the end */}
            </div>
        </div>
    )
}
