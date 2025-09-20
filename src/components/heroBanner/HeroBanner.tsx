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
                <div className='flex-1 space-y-4 pl-10'>
                    <h1 className='text-5xl font-bold text-gray-900'>
                        College to Corporate
                    </h1>
                    <h2 className='text-3xl text-gray-700 ml-2'>
                        by{" "}
                        <span className='font-semibold text-4xl'>
                            Manohar Batra
                        </span>
                    </h2>

                    {/* Rotating Text */}
                    <p className='ml-2 text-2xl font-medium text-gray-800 transition-opacity duration-500'>
                        {heroData[index].row1}
                    </p>
                    <p className='ml-2 text-2xl text-gray-600'>
                        {heroData[index].row2}
                    </p>
                    <p className='ml-2 text-xl text-gray-600'>
                        {heroData[index].row3}
                    </p>

                    {/* CTA */}
                    {/* <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
            Explore Courses
          </button> */}
                </div>

                {/* Right Side */}
                <div className='flex-1 flex justify-center mt-8 md:mt-0 relative'>
                    <Image
                        src='/images/creators/manohar_batra.png'
                        alt='Manohar Batra'
                        width={240}
                        height={140}
                        className='w-72 h-auto rounded-lg shadow-lg'
                        priority
                    />

                    {/* Badges */}
                    <div className='absolute top-8 left-10 bg-white px-4 py-2 rounded-lg shadow-lg'>
                        <p className='font-semibold'>Sr Cloud Full Stack</p>
                    </div>
                    <div className='absolute bottom-38 right-15 bg-white px-10 py-2 rounded-lg shadow-lg'>
                        <p className='font-semibold'>11 yrs exp</p>
                    </div>

                    {/* Logos */}

                    <div className='absolute bottom-2 right-20 bg-white px-6 py-2 rounded-lg shadow-lg flex gap-16 items-center'>
                        <Image
                            src='/images/companyLogos/tcs.jpg'
                            alt='tcs'
                            width={80}
                            height={10}
                            className='rounded-lg object-cover'
                        />
                        <Image
                            src='/images/companyLogos/qad.jpg'
                            alt='tcs'
                            width={100}
                            height={40}
                            className='rounded-lg object-cover'
                        />
                        <Image
                            src='/images/companyLogos/ibm.jpg'
                            alt='tcs'
                            width={80}
                            height={20}
                            className='rounded-lg object-cover'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
