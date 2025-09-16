import React, { useState } from "react"
import Image from "next/image"
const profiles = [
    {
        id: 1,
        name: "John Doe",
        photo: "/images/placedStudents/user1.jpg",
        companyLogo: "/images/google.png",
    },
    {
        id: 2,
        name: "Jane Smith",
        photo: "/images/placedStudents/user2.jpg",
        companyLogo: "/images/microsoft.png",
    },
    {
        id: 3,
        name: "David Lee",
        photo: "/images/placedStudents/user3.jpg",
        companyLogo: "/images/amazon.png",
    },
]

export default function ProfileCardCarousel() {
    const [index, setIndex] = useState(0)

    const prev = () => {
        setIndex((prevIndex) =>
            prevIndex === 0 ? profiles.length - 1 : prevIndex - 1
        )
    }

    const next = () => {
        setIndex((prevIndex) =>
            prevIndex === profiles.length - 1 ? 0 : prevIndex + 1
        )
    }

    const profile = profiles[index]

    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
            <div className='bg-white shadow-lg rounded-2xl p-6 w-80 flex flex-col items-center text-center'>
                {/* Round Photo */}
                <Image
                    src={profile.photo}
                    alt={profile.name}
                    width={28}
                    height={28}
                    className='rounded-full object-cover border-4 border-blue-500 shadow-md'
                />

                {/* Name */}
                <h2 className='mt-4 text-xl font-semibold text-gray-800'>
                    {profile.name}
                </h2>

                {/* Company Logo */}
                <img
                    src={profile.companyLogo}
                    alt='Company Logo'
                    className='mt-3 w-20 h-20 object-contain'
                />

                {/* Buttons */}
                <div className='flex justify-between w-full mt-6'>
                    <button
                        onClick={prev}
                        className='px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg shadow'
                    >
                        ◀ Prev
                    </button>
                    <button
                        onClick={next}
                        className='px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded-lg shadow'
                    >
                        Next ▶
                    </button>
                </div>
            </div>
        </div>
    )
}
