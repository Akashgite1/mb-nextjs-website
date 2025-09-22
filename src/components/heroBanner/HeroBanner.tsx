"use client"
import { useEffect, useState } from "react"
import { heroData } from "./heroData"
import Image from "next/image"

export default function HeroBanner() {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % heroData.length)
        }, 4000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section className='w-full bg-gradient-to-r from-green-100 to-blue-100 mb-10'>
            <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6'>
                {/* Left Side */}
                <div className='flex-1 space-y-4 pl-4 md:pl-10 text-center md:text-left'>
                    <h1 className='text-3xl md:text-5xl font-bold text-gray-900'>
                        College to Corporate
                    </h1>
                    <h2 className='text-2xl md:text-3xl text-gray-700'>
                        by{" "}
                        <span className='font-semibold text-3xl md:text-4xl'>
                            Manohar Batra
                        </span>
                    </h2>

                    {/* Rotating Text */}
                    <p className='text-lg md:text-2xl font-medium text-gray-800 transition-opacity duration-500'>
                        {heroData[index].row1}
                    </p>
                    <p className='text-base md:text-2xl text-gray-600'>
                        {heroData[index].row2}
                    </p>
                    <p className='text-sm md:text-xl text-gray-600'>
                        {heroData[index].row3}
                    </p>
                </div>

                {/* Right Side */}
                <div className='flex-1 flex justify-center mt-8 md:mt-0 relative'>
                    <Image
                        src='/images/creators/manohar_batra.png'
                        alt='Manohar Batra'
                        width={240}
                        height={140}
                        className='w-56 md:w-72 h-auto rounded-lg shadow-lg'
                        priority
                    />

                    {/* Badges */}
                    <div className='absolute top-2 left-2 md:top-8 md:left-10 bg-white px-2 py-1 md:px-4 md:py-2 rounded-lg shadow-lg text-xs md:text-base'>
                        <p className='font-semibold text-black'>Sr Cloud Full Stack</p>
                    </div>
                    <div className='absolute bottom-38 right-2 md:bottom-36 md:right-10 bg-white px-3 py-1 md:px-10 md:py-2 rounded-lg shadow-lg text-xs md:text-base'>
                        <p className='font-semibold text-black'>11 yrs exp</p>
                    </div>

                    {/* Logos */}
                    <div className='absolute bottom-2 left-1/2 -translate-x-1/2 bg-white px-3 md:px-6 py-2 rounded-lg shadow-lg flex flex-wrap gap-4 md:gap-4 items-center justify-center max-w-[90%]'>
                        <Image
                            src='/images/companyLogos/tcs.jpg'
                            alt='tcs'
                            width={60}
                            height={10}
                            className='rounded-lg object-cover'
                        />
                        <Image
                            src='/images/companyLogos/qad.jpg'
                            alt='qad'
                            width={80}
                            height={40}
                            className='rounded-lg object-cover'
                        />
                        <Image
                            src='/images/companyLogos/ibm.jpg'
                            alt='ibm'
                            width={60}
                            height={20}
                            className='rounded-lg object-cover'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
