"use client"

import React, { useRef, useState, useEffect } from "react"
import Image from "next/image"
import {
    creators,
    type GalleryItem
} from "./GalleryData"
import "./Gallery.css"

function GallerySection({
    title,
    items,
}: {
    title: string
    items: GalleryItem[]
}) {
    const sliderRef = useRef<HTMLDivElement>(null)
    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(0)

    const filteredItems = items.filter((item) => item.visible !== false)
    const loopItems = [...filteredItems, ...filteredItems, ...filteredItems] // repeat 3x for seamless loop

    // ----- Mouse Handlers -----
    const onMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true)
        setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0))
        setScrollLeft(sliderRef.current?.scrollLeft || 0)
    }
    const onMouseUp = () => setIsDragging(false)
    const onMouseLeave = () => setIsDragging(false)
    const onMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !sliderRef.current) return
        e.preventDefault()
        const x = e.pageX - sliderRef.current.offsetLeft
        const walk = (x - startX) * 1.5
        sliderRef.current.scrollLeft = scrollLeft - walk
    }

    // ----- Touch Handlers -----
    const onTouchStart = (e: React.TouchEvent) => {
        setIsDragging(true)
        setStartX(e.touches[0].pageX - (sliderRef.current?.offsetLeft || 0))
        setScrollLeft(sliderRef.current?.scrollLeft || 0)
    }
    const onTouchMove = (e: React.TouchEvent) => {
        if (!isDragging || !sliderRef.current) return
        const x = e.touches[0].pageX - sliderRef.current.offsetLeft
        const walk = (x - startX) * 1.5
        sliderRef.current.scrollLeft = scrollLeft - walk
    }
    const onTouchEnd = () => setIsDragging(false)

    // ----- Infinite Auto Scroll -----
    useEffect(() => {
        if (!sliderRef.current) return
        const slider = sliderRef.current
        const speed = 1
        let rafId: number

        const step = () => {
            if (!isDragging) {
                slider.scrollLeft += speed

                // Reset position to middle clone for seamless loop
                const totalWidth = slider.scrollWidth
                const singleLoopWidth = totalWidth / 3
                if (slider.scrollLeft >= singleLoopWidth * 2) {
                    slider.scrollLeft -= singleLoopWidth
                }
            }
            rafId = requestAnimationFrame(step)
        }

        rafId = requestAnimationFrame(step)
        return () => cancelAnimationFrame(rafId)
    }, [isDragging])

    return (
        <section className='w-full py-10 overflow-hidden'>
            <h1 className='text-2xl sm:text-3xl font-bold mb-4 text-center text-black'>
                {title}
            </h1>
            <div
                ref={sliderRef}
                className='flex gap-4 overflow-x-hidden cursor-grab touch-pan-x'
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
                onMouseLeave={onMouseLeave}
                onMouseMove={onMouseMove}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
                style={{ scrollBehavior: isDragging ? "auto" : "smooth" }}
            >
                {loopItems.map((item, i) => (
                    <div
                        key={i}
                        style={{ width: item?.width || 220 }}
                        className='flex-none bg-white shadow-md rounded-xl p-3 flex flex-col items-center'
                    >
                        <Image
                            src={item.src}
                            alt={item.name}
                            width={item?.width || 220}
                            height={140}
                            className='rounded-lg object-cover'
                        />
                        <div className='mt-2 text-center'>
                            <p className='font-semibold text-black'>{item.name}</p>
                            {item?.description && (
                                <p className='text-sm text-gray-600'>{item.description}</p>
                            )}
                        </div>
                        {item?.logo && (
                            <div className='mt-2'>
                                <Image
                                    src={item.logo}
                                    alt={`${item.name} logo`}
                                    width={80}
                                    height={80}
                                    className='object-contain'
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}



export default function Gallery() {
    return (
        <main className='w-full'>
            <GallerySection title='Badi baat cheet Industry ke logo se' items={creators} />
        </main>
    )
}
