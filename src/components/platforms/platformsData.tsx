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
                img: "/images/course_banner/corporate_course.png",
                icon: <FaUsers className='text-red-600 text-4xl' />,
                title: "Corporate Coaching + Whatsapp",
                followers: "110+ Members",
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
                id: 2,
                type: "image",
                img: "/images/course_banner/companiess_list.png",
                title: "200+ Companies Hiring now!!",
                followers: "4k+ Bookings",
                description:
                    "800+ Companies List (inclding Remote) where my subscribers are placed at 50+ LPA packages too",
                link: "https://topmate.io/manohar_batra/1627184",
                color: "from-green-50 to-green-100",
                price: 99,
                oldPrice: 499,
            },
            // {
            //     id: 3,
            //     type: "image",
            //     img: "/images/course_banner/know_your_worth.png",
            //     title: "Know Your Worth",
            //     followers: "1k+ Bookings",
            //     description:
            //         "Real Salary Insights of IT Employees",
            //     link: "https://topmate.io/manohar_batra/1801807",
            //     color: "from-green-50 to-green-100",
            //     price: 99,
            //     oldPrice: 499,
            // },
        ],
    },
    {
        label: "Most Popular Downloads",
        items: [
            // {
            //     id: 1,
            //     type: "image",
            //     img: "/images/course_banner/companyWise.png",
            //     title: "100% Genuine Company wise Frontend Interview Q&A",
            //     followers: "1k+ Bookings",
            //     description:
            //         "100% Genuine Interview Q&A shared by my subscribers from 50+ companies",
            //     link: "https://collegetocorporate.akamai.net.in/new-courses/4-unlimited-companies-wise-frontend-interview-qna",
            //     color: "from-green-50 to-green-100",
            //     price: 99,
            //     oldPrice: 1999,
            // },
            // {
            //     id: 2,
            //     type: "image",
            //     img: "/images/course_banner/frontend.png",
            //     title: "JS/React/DSA/System Design 100% Interview Ready",
            //     followers: "500+ Bookings",
            //     description:
            //         "Important Topics with detailed explanation",
            //     link: "https://topmate.io/manohar_batra/1587369",
            //     color: "from-green-50 to-green-100",
            //     price: 99,
            //     oldPrice: 499,
            // },
            {
                id: 3,
                type: "image",
                img: "/images/course_banner/backend.png",
                title: "100% Interview Ready",
                followers: "800+ Bookings",
                description:
                    "1:1 Guidance or Mock Interview on Java, Springboot, Kafka, System Design, and career.",
                link: "https://topmate.io/manohar_batra/1751070",
                color: "from-green-50 to-green-100",
                price: 199,
                oldPrice: 499,
            },
        ],
    },
]
