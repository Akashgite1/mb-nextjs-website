"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function AboutMe() {
    return (
        <section
            className='relative mx-auto max-w-7xl rounded-3xl border border-gray-200 shadow-[0_10px_30px_rgba(0,0,0,0.08)] bg-white px-6 md:px-12 py-16 flex flex-col md:flex-row items-center justify-between gap-12 transition-transform duration-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)]'
            aria-labelledby='about-me-title'
        >
            {/* Left: Text content */}
            <motion.div
                className='flex-1 space-y-6'
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2
                    id='about-me-title'
                    className='text-4xl font-bold text-gray-900 mb-4'
                >
                    About Me
                </h2>
                <p className='text-lg leading-relaxed text-gray-600'>
                    Hi, I’m{" "}
                    <span className='font-semibold text-indigo-500'>
                        Manohar Batra
                    </span>
                    , — an AI Frontend Architect focused
                    on building next-generation user experiences by combining
                    scalable frontend architecture with AI-driven capabilities.
                    With over a decade of experience in React and UI systems, I
                    design intelligent, adaptive interfaces that integrate LLMs,
                    automation, and real-time decisioning into modern web
                    applications. 
                </p>
                <p className='text-lg leading-relaxed text-gray-600'>
                    I also mentor aspiring engineers through
                    CollegeToCorporate, helping them navigate careers in the
                    evolving AI-first tech landscape.
                </p>
            </motion.div>

            {/* Right: Photo with animated SVG border */}
            <motion.div
                className='relative flex justify-center items-center flex-shrink-0'
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className='relative w-72 h-72 rounded-3xl overflow-hidden shadow-lg'>
                    {/* Animated border using SVG */}
                    <svg
                        className='absolute inset-0 w-full h-full animated-border pointer-events-none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <defs>
                            <linearGradient
                                id='borderGradient'
                                x1='0%'
                                y1='0%'
                                x2='100%'
                                y2='0%'
                            >
                                <stop offset='0%' stopColor='#60a5fa' />
                                <stop offset='50%' stopColor='#818cf8' />
                                <stop offset='100%' stopColor='#7dd3fc' />
                            </linearGradient>
                        </defs>
                        <rect
                            x='1.5'
                            y='1.5'
                            width='calc(100% - 3px)'
                            height='calc(100% - 3px)'
                            rx='22'
                            ry='22'
                            stroke='url(#borderGradient)'
                            strokeWidth='3'
                            fill='transparent'
                            strokeDasharray='1200'
                            strokeDashoffset='1200'
                        >
                            <animate
                                attributeName='stroke-dashoffset'
                                from='1200'
                                to='0'
                                dur='6s'
                                repeatCount='indefinite'
                                keyTimes='0;0.98;1'
                                values='1200;0;0'
                            />
                        </rect>
                    </svg>

                    <Image
                        src='/images/creators/manohar_batra.png' // 🔁 replace with your image path
                        alt='Manohar Batra'
                        // fill
                        width={240}
                        height={140}
                        className='w-56 md:w-72 object-cover rounded-3xl'
                        // priority
                    />
                </div>
            </motion.div>
        </section>
    )
}
