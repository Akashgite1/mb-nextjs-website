// import Gallery from "@/components/gallery/Gallery"
import Platforms from "@/components/platforms/Platforms"
import Testimonials from "@/components/testimonials/Testimonials"
import FAQ from "@/components/faq/FAQ"
import HeroBanner from "@/components/heroBanner/HeroBanner"
import Gallery from "@/components/gallery/Gallery"

export default function Home() {
    return (
        <div>
            <HeroBanner />
            <Platforms />
            <Gallery />
            <Testimonials />
            <FAQ />
        </div>
    )
}
