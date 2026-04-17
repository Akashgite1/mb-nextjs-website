"use client"

import { useState } from "react"
import Image from "next/image"

type Event = {
    id: number
    title: string
    description: string
    image: string
    speaker: string
    date: string
    time: string
    registrations: number
    link?: string
    eventImages?: string[] // for future use
    testimonials?: string[] // Array of testimonial image paths
}

const events: Event[] = [
    {
        id: 3,
        title: "Masterclass #3 - How LinkedIn Can Help with LifeTime Job Security",
        description:
            "Exploring job security and career stability for professionals in their 30s and beyond.",
        image: "/images/events/linkedInJobSecurity.png",
        speaker: "Manohar Batra",
        date: "2026-04-18",
        time: "11:00 AM",
        registrations: 0,
        link: "https://topmate.io/manohar/2050710",
    },
    // {
    //     id: 3,
    //     title: "Masterclass #3 - Career Growth & Corporate Politics",
    //     description:
    //         "Exploring career growth opportunities and corporate politics in the technology industry.",
    //     image: "/images/events/corporateGrowth.png",
    //     speaker: "Manohar Batra",
    //     date: "2026-04-11",
    //     time: "11:00 AM",
    //     registrations: 0,
    //     link: "https://topmate.io/manohar",
    // },
    {
        id: 2,
        title: "Masterclass #2 - Impact of AI on IT Jobs",
        description:
            "Exploring the impact of artificial intelligence on the information technology job market.",
        image: "/images/events/jobMarket1.png",
        speaker: "Manohar Batra",
        date: "2026-04-04",
        time: "11:00 AM",
        registrations: 37,
        link: "https://topmate.io/manohar",
        eventImages: [
            "/images/events/masterclass2/pic1.png"
        ],
        testimonials: [
            "/images/testimonials/mc2-1.png",
            "/images/testimonials/mc2-2.png",
            "/images/testimonials/mc2-3.png",
            "/images/testimonials/mc2-4.png"
        ],
    },
    {
        id: 1,
        title: "Masterclass #1 - Job Switch Workshop",
        description:
            "A workshop on transitioning careers and switching jobs successfully.",
        image: "/images/events/jobSwitch3.png",
        speaker: "Manohar Batra",
        date: "2026-03-28",
        time: "11:00 AM",
        registrations: 39,
        link: "https://topmate.io/manohar",
        eventImages: [
            "/images/events/masterclass1/session1.png",
            "/images/events/masterclass1/session2.png",
        ],
        testimonials: [
            "/images/testimonials/mc1-1.png",
            "/images/testimonials/mc1-2.png",
            "/images/testimonials/mc1-3.png",
        ],
    },
]

export default function EventsPage() {
    const [activeTab, setActiveTab] = useState<"past" | "future">("future")
    const [selectedImages, setSelectedImages] = useState<string[] | null>(null)
    const [modalTitle, setModalTitle] = useState<string | null>(null)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const now = new Date()

    const pastEvents = events.filter((event) => new Date(event.date) < now)
    const futureEvents = events.filter((event) => new Date(event.date) >= now)

    const displayedEvents = activeTab === "past" ? pastEvents : futureEvents

    const handleClick = (event: Event, isPast: boolean) => {
        if (event.eventImages && event.eventImages.length > 0) {
            setSelectedImages(event.eventImages)
            setModalTitle("Event Images")
            setCurrentImageIndex(0)
            return
        }

        if (event.link) {
            window.open(event.link, "_blank") // open recording / registration link
        } else {
            // fallback (future use)
            alert(
                isPast
                    ? "Recording not available yet"
                    : "Register flow coming soon",
            )
        }
    }

    const handleTestimonialClick = (event: Event) => {
        if (event.testimonials && event.testimonials.length > 0) {
            setSelectedImages(event.testimonials)
            setModalTitle("Testimonials")
            setCurrentImageIndex(0)
        }
    }

    const closeModal = () => {
        setSelectedImages(null)
        setModalTitle(null)
        setCurrentImageIndex(0)
    }

    const showPrevImage = () => {
        if (!selectedImages) return
        setCurrentImageIndex(
            (currentImageIndex - 1 + selectedImages.length) % selectedImages.length,
        )
    }

    const showNextImage = () => {
        if (!selectedImages) return
        setCurrentImageIndex((currentImageIndex + 1) % selectedImages.length)
    }

    return (
        <div className='container mx-auto px-4 py-8'>
            <div className='mb-6 flex items-center gap-2'>
                <h1 className='text-3xl font-bold'>
                    Events (Past Events recordings are found in Job Switch Course)
                </h1>
                <a
                    href='https://topmate.io/manohar/1964588'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-3xl font-bold text-blue-700 hover:text-blue-700 hover:underline'
                >
                    Link
                </a>
            </div>

            {/* Tabs */}
            <div className='flex space-x-4 mb-6'>
                <button
                    onClick={() => setActiveTab("past")}
                    className={`px-4 py-2 rounded ${
                        activeTab === "past"
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200 text-gray-700"
                    }`}
                >
                    Past Events
                </button>

                <button
                    onClick={() => setActiveTab("future")}
                    className={`px-4 py-2 rounded ${
                        activeTab === "future"
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200 text-gray-700"
                    }`}
                >
                    Future Events
                </button>
            </div>

            {/* Cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {displayedEvents.map((event) => {
                    const isPast = new Date(event.date) < now
                    const hasImages = (event.eventImages?.length ?? 0) > 0

                    return (
                        <div
                            key={event.id}
                            className='bg-white shadow-md rounded-lg overflow-hidden'
                        >
                            <Image
                                src={event.image}
                                alt={event.title}
                                width={400}
                                height={200}
                                className='w-full h-60 object-cover'
                            />

                            <div className='p-5'>
                                <h3 className='text-lg font-semibold mb-2'>
                                    {event.title}
                                </h3>

                                <p className='text-gray-500 text-sm mb-3'>
                                    Speaker: {event.speaker}
                                </p>

                                <div className='flex items-center justify-between gap-3'>
                                    <p className='text-gray-700 text-sm'>
                                        Starts on: {event.time}, {event.date}
                                    </p>

                                    {event.testimonials && event.testimonials.length > 0 && (
                                        <button
                                            onClick={() => handleTestimonialClick(event)}
                                            className='px-1 rounded-lg font-small text-white bg-indigo-600 hover:bg-indigo-700'
                                        >
                                            Testimonials
                                        </button>
                                    )}
                                </div>

                                <div className='flex items-center justify-between mt-4 gap-3'>
                                    <span className='text-sm text-gray-500'>
                                        👥 {event.registrations} Registered
                                    </span>

                                    <button
                                        onClick={() =>
                                            handleClick(event, isPast)
                                        }
                                        className={`px-5 py-2 rounded-lg font-medium text-white ${
                                            hasImages
                                                ? "bg-purple-600 hover:bg-purple-700"
                                                : isPast
                                                ? "bg-gray-700 hover:bg-gray-800"
                                                : "bg-teal-600 hover:bg-teal-700"
                                        }`}
                                    >
                                        {hasImages
                                            ? "View Images"
                                            : isPast
                                            ? "Watch Recording"
                                            : "Register Now"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {selectedImages && (
                <div className='fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4'>
                    <div className='relative w-full max-w-4xl'>
                        <div className='mb-3 flex items-center justify-between rounded-t-2xl bg-white px-4 py-3'>
                            <h2 className='text-lg font-semibold text-gray-800'>
                                {modalTitle}
                            </h2>
                            <button
                                onClick={closeModal}
                                className='bg-black/70 p-2 rounded-full text-white hover:bg-black/90'
                                aria-label='Close image modal'
                            >
                                ✕
                            </button>
                        </div>

                        <Image
                            src={selectedImages[currentImageIndex]}
                            alt={`${modalTitle} ${currentImageIndex + 1}`}
                            width={900}
                            height={600}
                            className='w-full h-auto rounded-b-2xl object-contain bg-white'
                        />

                        {selectedImages.length > 1 && (
                            <>
                                <button
                                    onClick={showPrevImage}
                                    className='absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 p-3 rounded-full text-white hover:bg-black/90'
                                    aria-label='Previous image'
                                >
                                    ◀
                                </button>

                                <button
                                    onClick={showNextImage}
                                    className='absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 p-3 rounded-full text-white hover:bg-black/90'
                                    aria-label='Next image'
                                >
                                    ▶
                                </button>
                            </>
                        )}

                        <div className='mt-3 rounded-b-2xl bg-white p-4 text-center'>
                            <p className='text-sm text-gray-700'>
                                {currentImageIndex + 1} of {selectedImages.length}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
