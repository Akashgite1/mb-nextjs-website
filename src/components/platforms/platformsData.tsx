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
        label: "No 1 Corporate Course",
        items: [
            {
                id: 1,
                type: "component",
                img: "/images/course_banner/corporate.png",
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
            }
        ],
    },
    {
        label: "Most Downloads",
        items: [
            {
                id: 1,
                type: "image",
                img: "/images/course_banner/companies_list.jpeg",
                title: "800+ Companies Hiring now!!",
                followers: "4k+ Bookings",
                description:
                    "800+ Companies List (inclding Remote) where my subscribers are placed at 50+ LPA packages too",
                link: "https://topmate.io/manohar/1612811",
                color: "from-green-50 to-green-100",
                price: 199,
                oldPrice: 499,
            },
            // {
            //     id: 2,
            //     type: "image",
            //     img: "/images/topmate.jpg",
            //     title: "Self Paced Frontend Course",
            //     followers: "200+ Bookings",
            //     description:
            //         "1:1 Guidance or Mock Interview on React + System Design",
            //     link: "https://topmate.io/manohar_batra/1584098",
            //     color: "from-green-50 to-green-100",
            //     price: 250,
            //     oldPrice: 750,
            // },
            // {
            //     id: 3,
            //     type: "image",
            //     img: "/images/topmate.jpg",
            //     title: "Self Paced Java Backend Course",
            //     followers: "100+ Bookings",
            //     description:
            //         "1:1 Guidance or Mock Interview on Java, Springboot, Kafka, System Design, and career.",
            //     link: "https://topmate.io/naveen_metta",
            //     color: "from-green-50 to-green-100",
            //     price: 250,
            //     oldPrice: 750,
            // },
        ],
    },
]
