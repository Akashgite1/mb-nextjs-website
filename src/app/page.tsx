import Gallery from "@/components/gallery/Gallery"
import Platforms from "@/components/platforms/Platforms"
import Testimonials from "@/components/testimonials/Testimonials"
import FAQ from "@/components/faq/FAQ"

export default function Home() {
    return (
        <div>
            <Platforms />
            <Gallery />
            <Testimonials />
            <FAQ />
        </div>
    )
}
