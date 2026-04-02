// pageData.tsx
export interface GalleryItem {
    src: string
    name: string
    description?: string
    logo?: string
    width?: number
    height?: number
    visible?: boolean
}

export const testimonials: GalleryItem[] = [
    {
        src: "/images/testimonials/pic1.png",
        name: "Testimonial 1",
        width: 200,
    },
    {
        src: "/images/testimonials/pic7.png",
        name: "Testimonial 7",
        width: 200,
    },
    {
        src: "/images/testimonials/pic2.png",
        name: "Testimonial 2",
        width: 400,
    },  
    {
        src: "/images/testimonials/pic3.png",
        name: "Testimonial 3",
        width: 400
    },
    {
        src: "/images/testimonials/pic4.png",
        name: "Testimonial 4",
        width: 400,
    },
    {
        src: "/images/testimonials/pic5.png",
        name: "Testimonial 5",
        width: 400,
    },
    {
        src: "/images/testimonials/pic6.png",
        name: "Testimonial 6",
        width: 400,
    },
    {
        src: "/images/testimonials/pic8.png",
        name: "Testimonial 8",
        width: 400,
    },
]
