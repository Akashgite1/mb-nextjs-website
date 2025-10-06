"use client" // ✅ required because we use framer-motion animations

import { motion } from "framer-motion"
import Image from "next/image"
import {
    FaLinkedin,
    FaYoutube,
    FaInstagram,
    FaUsers,
    FaCode,
    FaMedium,
} from "react-icons/fa"

const platforms = [
    {
        id: 1,
        type: "component",
        icon: <FaLinkedin className='text-blue-700 text-4xl' />,
        title: "LinkedIn",
        followers: "36K Followers",
        description:
            "Summaries of corporate employee experiences, latest news, trends, and tech (React/Next.js + System Design).",
        link: "https://www.linkedin.com/in/manoharbatra/",
        color: "from-blue-50 to-blue-100",
    },
    {
        id: 2,
        type: "component",
        icon: <FaYoutube className='text-red-600 text-4xl' />,
        title: "College to Corporate",
        followers: "94K Followers",
        description:
            "Main channel with deep insights, tutorials, and trending discussions.",
        link: "https://youtube.com/yourchannel",
        color: "from-red-50 to-red-100",
    },
    {
        id: 3,
        type: "component",
        icon: <FaYoutube className='text-red-600 text-4xl' />,
        title: "Code & Tech",
        followers: "1.6K Followers",
        description: "Focused technical coding tutorials & problem-solving.",
        link: "https://youtube.com/yourchannel",
        color: "from-purple-50 to-purple-100",
    },
    {
        id: 4,
        type: "component",
        icon: <FaInstagram className='text-pink-500 text-4xl' />,
        title: "Instagram",
        followers: "4K Followers",
        description:
            "Where I expose influencers and reveal behind-the-scenes truths.",
        link: "https://instagram.com/yourprofile",
        color: "from-pink-50 to-pink-100",
    },
    {
        id: 5,
        type: "component",
        icon: <FaUsers className='text-green-600 text-4xl' />,
        title: "Corporate Coaching",
        followers: "70+ Members",
        description:
            "Unlimited peer guidance and referrals (free but conditions apply).",
        link: "#",
        color: "from-green-50 to-green-100",
    },
    {
        id: 6,
        type: "component",
        icon: <FaCode className='text-purple-600 text-4xl' />,
        title: "Tech Coding Channel",
        followers: "1.6K Followers",
        description: "Focused technical coding tutorials & problem-solving.",
        link: "https://youtube.com/technicalcoding",
        color: "from-purple-50 to-purple-100",
    },
    {
        id: 7,
        type: "component",
        icon: <FaMedium className='text-black text-4xl' />,
        title: "Medium",
        followers: "26 Followers",
        description:
            "Articles and blogs on tech, career, and corporate insights.",
        link: "https://medium.com/@contactmanoharbatra",
        color: "from-gray-50 to-gray-100",
    },
    {
        id: 8,
        type: "image",
        img: "/images/topmate.jpg",
        title: "1:1 Guidance",
        followers: "2k+ Bookings",
        description:
            "Articles and blogs on tech, career, and corporate insights.",
        link: "https://www.topmate.io/manohar",
        color: "from-gray-50 to-gray-100",
    },
]

export default function LandingPage() {
    return (
        <section
            id='home'
            className='min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900'
        >
            <header className='text-center pt-0 pr-10 pb-4 pl-6 px-6'>
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className='text-4xl md:text-5xl font-bold mb-4'
                >
                    Follow Me Based on Your Interest 🚀
                </motion.h2>
                {/* <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Whether you are into tech, corporate insights, or exposing influencers –
          choose where you’d like to connect with me.
        </p> */}
            </header>

            {/* Platforms Grid */}
            <main className='max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-6 pb-16'>
                {platforms.map((p) => (
                    <motion.div
                        key={p.id}
                        whileHover={{ scale: 1.05 }}
                        className={`rounded-2xl shadow-md bg-gradient-to-br ${p.color} p-6 flex flex-col justify-between`}
                    >
                        <div>
                            <div className='flex items-center gap-3 mb-4'>
                                {p.type === "image" ? (
                                    <Image
                                        src={p.img!}
                                        alt={p.title}
                                        width={36}
                                        height={36}
                                        className='rounded-full object-cover'
                                    />
                                ) : (
                                    p.icon
                                )}
                                <h2 className='text-xl font-semibold'>
                                    {p.title}
                                </h2>
                            </div>
                            <p className='text-sm text-gray-600 mb-2 font-semibold'>
                                {p.followers}
                            </p>
                            <p className='text-gray-700 text-sm'>
                                {p.description}
                            </p>
                        </div>
                        <a
                            href={p.link}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='mt-6 inline-block bg-gray-900 text-white px-4 py-2 rounded-xl text-center hover:bg-gray-700 transition'
                        >
                            Click
                        </a>
                    </motion.div>
                ))}
            </main>
        </section>
    )
}
