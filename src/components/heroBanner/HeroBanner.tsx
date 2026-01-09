"use client"

import { useEffect, useState } from "react"
import { communityData, heroData } from "./heroData"
import Image from "next/image"
import { motion } from "framer-motion"

export default function HeroBanner() {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % heroData.length)
        }, 4000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section className="w-full bg-gradient-to-r from-green-100 to-blue-100">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 pt-12 pb-16">

                {/* LEFT SIDE */}
                <div className="flex-1 space-y-8 pl-4 md:pl-10 text-center md:text-left">


                    {/* HERO TEXT */}
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
                        College to Corporate
                    </h1>

                    <p className="text-lg md:text-2xl font-medium text-gray-800 transition-opacity duration-500">
                        {heroData[index].row1}
                    </p>

                    <p className="text-base md:text-2xl text-gray-600">
                        {heroData[index].row2}
                    </p>

                    {/* 🔥 COMMUNITY MINI CARDS */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        className="flex flex-wrap justify-center md:justify-start gap-4 rounded-full"
                    >
                        {communityData.map((item, idx) => {
                            const Icon = item.icon

                            return (
                                <a
                                    key={idx}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group"
                                >
                                    <div className="flex items-center gap-3 bg-white/90 px-4 py-2 rounded-full shadow-md transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl min-w-[130px]">

                                        {/* ICON OR IMAGE */}
                                        <div className={`text-2xl ${item.color} transition-transform duration-300 group-hover:scale-110`}>
                                            {Icon ? (
                                                <Icon />
                                            ) : item.img ? (
                                                <Image
                                                    src={item.img}
                                                    alt={item.value ?? item.label ?? "icon"}
                                                    width={24}
                                                    height={24}
                                                    className="w-6 h-6 rounded-full object-cover"
                                                />
                                            ) : null}
                                        </div>

                                        {/* TEXT */}
                                        <div className="text-left">
                                            <p className="text-lg font-bold text-gray-900">
                                                {item.value}
                                            </p>
                                            <p className="text-xs text-gray-600">
                                                {item.label}
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                    </motion.div>
                </div>

                {/* RIGHT SIDE */}
                <div className="flex-1 flex justify-center mt-10 md:mt-0 relative">
                    <Image
                        src="/images/creators/manohar_batra.png"
                        alt="Manohar Batra"
                        width={240}
                        height={140}
                        className="w-56 md:w-72 h-auto rounded-lg shadow-lg"
                        priority
                    />

                    <div className="absolute top-2 left-2 md:top-8 md:left-10 bg-white px-2 py-1 md:px-4 md:py-2 rounded-lg shadow-lg text-xs md:text-base">
                        <p className="font-semibold text-black">
                            Sr Cloud Full Stack
                        </p>
                    </div>

                    <div className="absolute bottom-36 right-2 md:right-10 bg-white px-3 py-1 md:px-10 md:py-2 rounded-lg shadow-lg text-xs md:text-base">
                        <p className="font-semibold text-black">11 yrs exp</p>
                    </div>

                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 
                bg-white px-3 md:px-6 py-2 rounded-lg shadow-lg 
                flex items-center justify-center gap-3 md:gap-4 
                w-44 sm:w-56 md:w-72 flex-wrap md:flex-nowrap">

                        <Image
                            src="/images/companyLogos/tcs.jpg"
                            alt="tcs"
                            width={32}
                            height={16}
                            className="md:w-[40px]"
                        />

                        <Image
                            src="/images/companyLogos/qad.jpg"
                            alt="qad"
                            width={56}
                            height={28}
                            className="md:w-[80px]"
                        />

                        <Image
                            src="/images/companyLogos/ibm.jpg"
                            alt="ibm"
                            width={44}
                            height={22}
                            className="md:w-[60px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
