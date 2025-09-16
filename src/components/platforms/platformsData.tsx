import {
    FaInstagram,
    FaLinkedin,
    FaMedium,
    FaUsers,
    FaWhatsapp,
    FaYoutube,
} from "react-icons/fa"
import { PlatformCategory } from "./types"

export const categories: PlatformCategory[] = [
    {
        label: "Socials",
        items: [
            {
                id: 1,
                type: "component",
                icon: <FaYoutube className='text-red-600 text-4xl' />,
                title: "College to Corporate",
                followers: "94K Followers",
                description:
                    "Main channel with deep insights, tutorials, and trending discussions.",
                link: "https://www.youtube.com/@ManoharBatra/playlists",
                color: "from-red-50 to-red-100",
            },
            {
                id: 2,
                type: "component",
                icon: <FaYoutube className='text-red-600 text-4xl' />,
                title: "Road to Code",
                followers: "1.6K Followers",
                description:
                    "Focused technical coding tutorials & problem-solving.",
                link: "https://www.youtube.com/@RoadToCodeWithMB",
                color: "from-purple-50 to-purple-100",
            },
            {
                id: 3,
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
                id: 4,
                type: "component",
                icon: <FaInstagram className='text-pink-500 text-4xl' />,
                title: "Instagram",
                followers: "4K Followers",
                description:
                    "Where I expose influencers and reveal behind-the-scenes truths.",
                link: "https://www.instagram.com/career.manoharbatrayt",
                color: "from-pink-50 to-pink-100",
            },
            // … more socials
        ],
    },
    {
        label: "Courses & 1:1 Guidance",
        items: [
            {
                id: 1,
                type: "component",
                icon: <FaUsers className='text-red-600 text-4xl' />,
                title: "Corporate Coaching + Whatsapp",
                followers: "80 Members",
                description:
                    "Raw content with whatsapp group support for career growth, referrals, and interview prep.",
                link: "https://collegetocorporate.akamai.net.in/new-courses/2-working-professionals-career-guide",
                color: "from-red-50 to-red-100",
            },
            {
                id: 2,
                type: "component",
                icon: <FaUsers className='text-red-600 text-4xl' />,
                title: "College Coaching + Whatsapp",
                followers: "2 Members",
                description:
                    "Raw content with whatsapp group support for career growth, referrals, and interview prep.",
                link: "https://collegetocorporate.akamai.net.in/new-courses/1-college-students-career-guide",
                color: "from-red-50 to-red-100",
            },
            {
                id: 3,
                type: "image",
                img: "/images/topmate.jpg",
                title: "1:1 Guidance",
                followers: "2k+ Bookings",
                description:
                    "1:1 Guidance on frontend, career, and corporate insights.",
                link: "https://www.topmate.io/manohar",
                color: "from-blue-50 to-blue-100",
            },
        ],
    },
    {
        label: "Self-Paced e-Docs",
        items: [
            {
                id: 1,
                type: "image",
                img: "/images/topmate.jpg",
                title: "GenAI Full Stack Self Paced",
                followers: "1k+ Bookings",
                description: "Frontend, React, System Design, GenAI",
                link: "https://topmate.io/manohar_batra/1587369?utm_source=public_profile&utm_campaign=manohar_batra",
                color: "from-blue-50 to-blue-100",
            },
            {
                id: 2,
                type: "image",
                img: "/images/topmate.jpg",
                title: "Trusted Companies List",
                followers: "2k+ Bookings",
                description:
                    "Companies List where my subscribers are placed at good packages",
                link: "https://www.topmate.io/manohar",
                color: "from-blue-50 to-blue-100",
            },
            {
                id: 3,
                type: "image",
                img: "/images/topmate.jpg",
                title: "College Students - Interview Pkg - FREE",
                followers: "2k+ Bookings",
                description:
                    "Interview Prep for Top 15 Service-Based Companies",
                link: "https://topmate.io/manohar_batra/1623127?utm_source=public_profile&utm_campaign=manohar_batra",
                color: "from-blue-50 to-blue-100",
            },
            {
                id: 4,
                type: "component",
                icon: <FaMedium className='text-black text-4xl' />,
                title: "Medium",
                followers: "25+ Followers",
                description:
                    "Articles and blogs on React.js System Design, Frontend",
                link: "https://medium.com/@contactmanoharbatra",
                color: "from-gray-50 to-gray-100",
            },
            // e-docs platforms
        ],
    },
    {
        label: "Community & Engagement",
        items: [
            {
                id: 1,
                type: "component",
                icon: <FaWhatsapp className='text-black text-4xl' />,
                title: "Whatsapp",
                followers: "200+ Members",
                description:
                    "Latest IT News + Real Employees Experiences",
                link: "https://chat.whatsapp.com/LfsYDSr4rBL3TA8Y11Vc4V",
                color: "from-green-50 to-green-100",
            },
        ],
    },
]
