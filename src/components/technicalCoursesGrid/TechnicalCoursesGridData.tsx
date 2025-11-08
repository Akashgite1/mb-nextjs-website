import { FaUsers } from "react-icons/fa"
import { PlatformCategory } from "@/components/platforms/types"

export const technicalCourses: PlatformCategory[] = [
    {
        label: "",
        items: [
            {
                id: 1,
                type: "image",
                img: "/images/topmate.jpg",
                title: "Check how much IT Engineers are earning",
                followers: "2+ Bookings",
                description:
                    "Know Your Worth - Check Real Salaries of IT Engineers",
                link: "https://topmate.io/manohar_batra/1801807",
                color: "from-purple-50 to-purple-100",
            },
            {
                id: 2,
                type: "image",
                img: "/images/techLogos/reactJS.png",
                title: "Frontend 100% Interview Ready- Combo",
                followers: "2.5k+ Bookings",
                description:
                    "React, System Design, DSA - Interview Questions + Topics + Real Resumes for reference",
                link: "https://topmate.io/manohar_batra/1587369",
                color: "from-yellow-50 to-yellow-100",
            },
             {
                id: 3,
                type: "image",
                img: "/images/techLogos/java.jpg",
                title: "Java Backend 100% Interview Ready",
                followers: "70+ Followers",
                description:
                    "Java, Springboot, Kafka - Detailed Articles and Interview Questions + Real Resumes for reference",
                link: "https://topmate.io/manohar_batra/1751070",
                color: "from-yellow-50 to-yellow-100",
            },
            {
                id: 4,
                type: "image",
                img: "/images/techLogos/reactJS.png",
                title: "System Design Interview Ready",
                followers: "2.5k+ Bookings",
                description:
                    "React, System Design, DSA - Interview Questions + Topics + Real Resumes for reference",
                link: "https://topmate.io/manohar_batra/1587369?utm_source=public_profile&utm_campaign=manohar_batra",
                color: "from-yellow-50 to-yellow-100",
            },
            {
                id: 5,
                type: "component",
                icon: <FaUsers className='text-red-600 text-4xl' />,
                title: "DSA for FREE",
                followers: "100+ Followers",
                description: "Practise DSA with Manish",
                link: "https://manishdsa.netlify.app/",
                color: "from-purple-50 to-purple-100",
            },
            {
                id: 6,
                type: "image",
                img: "/images/topmate.jpg",
                title: "FREE - College Students Interview Questions",
                followers: "2k+ Bookings",
                description:
                    "Interview Prep for Top 15 Service-Based Companies",
                link: "https://topmate.io/manohar_batra/1623127",
                color: "from-purple-50 to-purple-100",
            },
            {
                id: 7,
                type: "image",
                img: "/images/topmate.jpg",
                title: "Resume Template - FREE",
                followers: "1k+ Bookings",
                description:
                    "Resume Template (Overleaf) for Software Engineers",
                link: "https://topmate.io/manohar/1776869?utm_source=public_profile&utm_campaign=manohar",
                color: "from-purple-50 to-purple-100",
            },
        ],
    },
]
