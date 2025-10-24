import {
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaMedium,
    FaUsers,
    FaWhatsapp,
    FaYoutube,
} from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { PlatformCategory } from "./types"

export const categories: PlatformCategory[] = [
    {
        label: "FREE Content",
        items: [
            {
                id: 1,
                type: "component",
                icon: <FaYoutube className='text-red-600 text-4xl' />,
                title: "College to Corporate",
                followers: "97K+ Followers",
                description:
                    "Listen Career and Salary insights, Corporate News and Growth Tips.",
                link: "https://www.youtube.com/@ManoharBatra/playlists",
                color: "from-red-50 to-red-100",
                testimonials: [
                    {
                        name: "msg1",
                        src: "/images/fansMessages/msg2.png",
                    },
                    {
                        name: "msg1",
                        src: "/images/fansMessages/msg3.png",
                        height: 100,
                    },
                    {
                        name: "msg1",
                        src: "/images/fansMessages/msg4.png",
                    },
                    {
                        name: "msg1",
                        src: "/images/fansMessages/msg5.png",
                    },
                ],
            },
            {
                id: 2,
                type: "component",
                icon: <FaYoutube className='text-red-600 text-4xl' />,
                title: "Code & Tech",
                followers: "1.7K+ Followers",
                description:
                    "Focused technical coding tutorials & problem-solving.",
                link: "https://www.youtube.com/@RoadToCodeWithMB",
                color: "from-purple-50 to-purple-100",
                testimonials: [
                    {
                        name: "msg6",
                        src: "/images/fansMessages/msg6.jpg",
                    },
                ],
            },
            {
                id: 3,
                type: "component",
                icon: <FaLinkedin className='text-blue-700 text-4xl' />,
                title: "LinkedIn",
                followers: "36K+ Followers",
                description:
                    "Summaries of corporate employee experiences, latest news, trends, and tech (React/Next.js + System Design).",
                link: "https://www.linkedin.com/in/manoharbatra/",
                color: "from-blue-50 to-blue-100",
                testimonials: [
                    {
                        name: "linkedinmsg1",
                        src: "/images/fansMessages/linkedinmsg1.png",
                        width: 400,
                        height: 100,
                    },
                    {
                        name: "linkedinmsg2",
                        src: "/images/fansMessages/linkedinmsg2.png",
                        width: 400,
                        height: 100,
                    },
                    {
                        name: "linkedinmsg3",
                        src: "/images/fansMessages/linkedinmsg3.png",
                        width: 400,
                        height: 130,
                    },
                    {
                        name: "linkedinmsg4",
                        src: "/images/fansMessages/linkedinmsg4.png",
                        width: 400,
                        height: 130,
                    },
                ],
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
                testimonials: [
                    {
                        name: "insta1",
                        src: "/images/fansMessages/insta/insta1.jpeg",
                        height: 250,
                    },
                ],
            },
            // … more socials
        ],
    },
    {
        label: "1:1 Guidance & Career Coaching - Manohar Batra",
        items: [
            {
                id: 1,
                type: "image",
                img: "/images/topmate.jpg",
                title: "Career Guidance",
                followers: "2k+ Bookings",
                description:
                    "1:1 Guidance on Career Growth, Politics, Job Switch and Multiple Job Offers.",
                link: "https://www.topmate.io/manohar",
                color: "from-blue-50 to-blue-100",
                testimonials: [
                    {
                        name: "topmatemsg1",
                        src: "/images/fansMessages/topmatemsg1.png",
                        width: 400,
                        height: 230,
                    },
                    {
                        name: "topmatemsg2",
                        src: "/images/fansMessages/topmatemsg2.png",
                        width: 400,
                        height: 230,
                    },
                    {
                        name: "topmatemsg3",
                        src: "/images/fansMessages/topmatemsg3.png",
                        width: 400,
                        height: 230,
                    },
                    {
                        name: "topmatemsg5",
                        src: "/images/fansMessages/topmatemsg5.png",
                        width: 400,
                        height: 230,
                    },
                    {
                        name: "topmatemsg4",
                        src: "/images/fansMessages/topmatemsg4.png",
                        width: 400,
                        height: 150,
                    },
                    {
                        name: "topmatemsg6",
                        src: "/images/fansMessages/topmatemsg6.png",
                        width: 400,
                        height: 150,
                    },
                ],
            },
            {
                id: 2,
                type: "component",
                icon: <FaUsers className='text-red-600 text-4xl' />,
                title: "Corporate Coaching + Whatsapp",
                followers: "80+ Members",
                description:
                    "Career growth, salary insights, referrals - Whatsapp group",
                link: "https://collegetocorporate.akamai.net.in/new-courses/2-working-professionals-career-guide",
                color: "from-red-50 to-red-100",
                testimonials: [
                    {
                        name: "coursemsg1",
                        src: "/images/fansMessages/coursemsg1.png",
                    },
                    {
                        name: "coursemsg2",
                        src: "/images/fansMessages/coursemsg2.png",
                        width: 400,
                        height: 180,
                    },
                ],
            },
            {
                id: 3,
                type: "component",
                icon: <FaUsers className='text-red-600 text-4xl' />,
                title: "College Coaching + Whatsapp",
                followers: "2+ Members",
                description:
                    "Jobs, Genuine Group guidance - Whatsapp group",
                link: "https://collegetocorporate.akamai.net.in/new-courses/1-college-students-career-guide",
                color: "from-red-50 to-red-100",
            },
            {
                id: 3,
                type: "image",
                img: "/images/topmate.jpg",
                title: "700+ Companies Hiring now!!",
                followers: "4k+ Bookings",
                description:
                    "700+ Companies List (inclding Remote) where my subscribers are placed at 50+ LPA packages too",
                link: "https://www.topmate.io/manohar",
                color: "from-yellow-50 to-yellow-100",
                testimonials: [
                    {
                        name: "feedbackcompanieslist1",
                        src: "/images/fansMessages/feedbackcompanieslist1.png",
                    },
                    {
                        name: "feedbackcompanieslist1",
                        src: "/images/fansMessages/feedbackcompanieslist1.png",
                        width: 400,
                        height: 180,
                    },
                ],
            },
        ],
    },
    {
        label: "1:1 Technical Guidance",
        items: [
            {
                id: 1,
                type: "image",
                img: "/images/topmate.jpg",
                title: "1:1 in Frontend (React.js)",
                followers: "10+ Bookings",
                description:
                    "1:1 Guidance or Mock Interview on React + System Design",
                link: "https://topmate.io/manohar_batra/1584098",
                color: "from-green-50 to-green-100",
            },
            {
                id: 2,
                type: "image",
                img: "/images/topmate.jpg",
                title: "1:1 in Java Backend",
                followers: "70+ Bookings",
                description:
                    "1:1 Guidance or Mock Interview on Java, Springboot, Kafka, System Design, and career.",
                link: "https://topmate.io/naveen_metta",
                color: "from-green-50 to-green-100",
            },
        ],
    },
    {
        label: "All Technical Courses - FREE and PAID",
        items: [
            {
                id: 1,
                type: "component",
                icon: <FaUsers className='text-red-600 text-4xl' />,
                title: "Check all Interview Ready Courses",
                followers: "2.5k+ Bookings",
                description:
                    "Check out different tech stack covered - Interview Questions",
                link: "/courses",
                color: "from-red-50 to-red-100",
            },
            {
                id: 2,
                type: "component",
                icon: <FaUsers className='text-red-600 text-4xl' />,
                title: "Credly - My Technical Certifications",
                followers: "",
                description:
                    "Check out my all technical certifications on different tech stacks",
                link: "https://www.credly.com/users/manohar-batra/badges",
                color: "from-pink-50 to-pink-100",
            }
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
                followers: "370+ Members",
                description:
                    "Latest Updates & IT News + Real Employees Experiences",
                link: "https://chat.whatsapp.com/LfsYDSr4rBL3TA8Y11Vc4V",
                color: "from-green-50 to-green-100",
            },
            {
                id: 2,
                type: "component",
                icon: <FaXTwitter className='text-black text-4xl' />,
                title: "Twitter",
                followers: "169+ Members",
                description: "My feelings in 280 characters",
                link: "https://x.com/manohar_batra",
                color: "from-blue-50 to-blue-100",
            },
            {
                id: 2,
                type: "component",
                icon: <FaGithub className='text-black text-4xl' />,
                title: "Github",
                followers: "63+ Members",
                description: "React, Machine Coding Rounds, Projects",
                link: "https://github.com/manoharbatra",
                color: "from-red-50 to-red-100",
            },
            {
                id: 4,
                type: "component",
                icon: <FaMedium className='text-black text-4xl' />,
                title: "Medium",
                followers: "40+ Followers",
                description:
                    "Articles on React.js System Design, Frontend - Detailed Topic and Interview Questions",
                link: "https://medium.com/@contactmanoharbatra",
                color: "from-gray-50 to-gray-100",
            },
        ],
    },
]
