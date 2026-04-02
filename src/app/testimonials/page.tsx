import Image from "next/image"
import { testimonials } from "./pageData"

export default function TestimonialsPage() {
    return (
        <main className='min-h-screen p-6 bg-slate-50'>
            <section className='mx-auto max-w-6xl'>
                <h1 className='text-3xl font-bold text-center text-blue-900 mb-6'>
                    Testimonials
                </h1>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {testimonials.map((image) => (
                        <div
                            key={image.src}
                            className='overflow-hidden rounded-xl bg-white shadow-md flex justify-center items-center'
                        >
                            <Image
                                src={image.src}
                                alt={`Testimonials screenshot ${image.name}`}
                                width={image.width || 1200}
                                height={image.height || 800}
                                className='w-full h-auto object-contain transition-transform duration-300 hover:scale-105'
                            />
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}