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

export const categories: PlatformCategory[] =
    [
        {
            label: "All Technical Courses - FREE and PAID",
            items: [

                 // Paid Course dummy item
                {
                    id: 1,
                    type: "image",
                    title: "React Interview Prep",
                    img: "/images/course_banner/javascript-free.jpeg",
                    followers: "80+ Members",
                    description: "Last minute interview prep for React & JS",
                    techStack: ["React", "JavaScript", "System Design"],
                    price: 999,
                    oldPrice: 1399,
                    link: "https://example.com",
                    color: "from-blue-50 to-blue-100",
                },

                // Free
                // {
                //     id: 2,
                //     type: "image",
                //     title: "Git Basics",
                //     followers: "120+ Members",
                //     description: "Learn Git from scratch",
                //     isFree: true,
                //     link: "/courses/git",
                // }

                // {
                //     id: 1,
                //     type: "component",
                //     icon: <FaUsers className='text-red-600 text-4xl' />,
                //     title: "Check all Interview Ready Courses",
                //     followers: "2.5k+ Bookings",
                //     description:
                //         "Check out different tech stack covered - Interview Questions",
                //     link: "/courses",
                //     color: "from-red-50 to-red-100",
                // },
                {
                    id: 1,
                    type: "image",
                    img: "/images/course_banner/javascript-free.jpeg",
                    title: "Resume Template - FREE",
                    followers: "1k+ Bookings",
                    description:
                        "Resume Template (Overleaf) for Software Engineers",
                    link: "https://topmate.io/manohar/1776869?utm_source=public_profile&utm_campaign=manohar",
                    color: "from-purple-50 to-purple-100",
                },
                {
                    id: 2,
                    type: "image",
                    img: "/images/course_banner/javascript-free.jpeg",
                    title: "Frontend 100% Interview Ready- Combo",
                    followers: "250+ Followers",
                    description:
                        "React, System Design, DSA - Interview Questions + Topics + Real Resumes for reference",
                    link: "https://topmate.io/manohar_batra/1587369",
                    color: "from-yellow-50 to-yellow-100",
                    price: 250,
                    oldPrice: 400,
                },
                {
                    id: 3,
                    type: "image",
                    img: "/images/course_banner/javascript-free.jpeg",
                    title: "Java Backend 100% Interview Ready",
                    followers: "70+ Followers",
                    description:
                        "Java, Springboot, Kafka - Detailed Articles and Interview Questions + Real Resumes for reference",
                    link: "https://topmate.io/manohar_batra/1751070",
                    color: "from-yellow-50 to-yellow-100",
                    price: 150,
                    oldPrice: 300,
                },
                // {
                //     id: 4,
                //     type: "image",
                //     img: "/images/techLogos/reactJS.png",
                //     title: "System Design Interview Ready",
                //     followers: "2.5k+ Bookings",
                //     description:
                //         "React, System Design, DSA - Interview Questions + Topics + Real Resumes for reference",
                //     link: "https://topmate.io/manohar_batra/1587369?utm_source=public_profile&utm_campaign=manohar_batra",
                //     color: "from-yellow-50 to-yellow-100",
                // },
                {
                    id: 5,
                    type: "component",
                    img: "/images/course_banner/javascript-free.jpeg",
                    title: "DSA - FREE",
                    followers: "100+ Followers",
                    description: "Practise DSA with Manish",
                    link: "https://manishdsa.netlify.app/",
                    color: "from-purple-50 to-purple-100",
                },
                {
                    id: 6,
                    type: "image",
                    img: "/images/course_banner/javascript-free.jpeg",
                    title: "College - Service Based Interview - FREE",
                    followers: "2k+ Bookings",
                    description:
                        "Interview Prep for Top 15 Service-Based Companies",
                    link: "https://topmate.io/manohar_batra/1623127?utm_source=public_profile&utm_campaign=manohar_batra",
                    color: "from-purple-50 to-purple-100",
                },
                {
                    id: 7,
                    type: "component",
                    img: "/images/course_banner/javascript-free.jpeg",
                    title: "Credly - My Technical Certifications",
                    followers: "",
                    description:
                        "Check out my all technical certifications on different tech stacks",
                    link: "https://www.credly.com/users/manohar-batra/badges",
                    color: "from-pink-50 to-pink-100",

                },

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
                    img: "/images/topmate.jpg",
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
                    img: "/images/topmate.jpg",
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
                    title: "800+ Companies Hiring now!!",
                    followers: "4k+ Bookings",
                    description:
                        "800+ Companies List (inclding Remote) where my subscribers are placed at 50+ LPA packages too",
                    link: "https://www.topmate.io/manohar",
                    color: "from-yellow-50 to-yellow-100",
                    testimonials: [
                        {
                            name: "feedbackcompanieslist1",
                            src: "/images/fansMessages/feedbackcompanieslist1.png",
                            width: 400,
                            height: 250,
                        },
                        {
                            name: "feedbackcompanieslist1",
                            src: "/images/fansMessages/feedbackcompanieslist2.png",
                            width: 400,
                            height: 180,
                        },
                    ],
                },
                {
                    id: 4,
                    type: "image",
                    img: "/images/topmate.jpg",
                    title: "Know YOur Worth",
                    followers: "10 Bookings",
                    description:
                        "Real Salary Insights of IT Employees",
                    link: "https://topmate.io/manohar_batra/1801807",
                    color: "from-yellow-50 to-yellow-100",

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
                    price: 500,
                    oldPrice: 1000,
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
                    price: 499,
                    oldPrice: 600,
                },
            ],
        },

        // {
        //     label: "Community & Engagement",
        //     items: [
        //         {
        //             id: 1,
        //             type: "component",
        //             icon: <FaWhatsapp className='text-black text-4xl' />,
        //             title: "Whatsapp",
        //             followers: "370+ Members",
        //             description:
        //                 "Latest Updates & IT News + Real Employees Experiences",
        //             link: "https://chat.whatsapp.com/LfsYDSr4rBL3TA8Y11Vc4V",
        //             color: "from-green-50 to-green-100",
        //         },
        //         {
        //             id: 2,
        //             type: "component",
        //             icon: <FaXTwitter className='text-black text-4xl' />,
        //             title: "Twitter",
        //             followers: "169+ Members",
        //             description: "My feelings in 280 characters",
        //             link: "https://x.com/manohar_batra",
        //             color: "from-blue-50 to-blue-100",
        //         },
        //         {
        //             id: 2,
        //             type: "component",
        //             icon: <FaGithub className='text-black text-4xl' />,
        //             title: "Github",
        //             followers: "63+ Members",
        //             description: "React, Machine Coding Rounds, Projects",
        //             link: "https://github.com/manoharbatra",
        //             color: "from-red-50 to-red-100",
        //         },
        //         {
        //             id: 4,
        //             type: "component",
        //             img: "",
        //             title: "Medium",
        //             followers: "40+ Followers",
        //             description:
        //                 "Articles on React.js System Design, Frontend - Detailed Topic and Interview Questions",
        //             link: "https://medium.com/@contactmanoharbatra",
        //             color: "from-gray-50 to-gray-100",
        //         },
        //     ],
        // },
    ]
