// import Gallery from "@/components/gallery/Gallery"
import Platforms from "@/components/platforms/Platforms"
// import Testimonials from "@/components/testimonials/Testimonials"
import FAQ from "@/components/faq/FAQ"
import HeroBanner from "@/components/heroBanner/HeroBanner"
import Gallery from "@/components/gallery/Gallery"
import CorporateAppreciation from "@/components/corporateAppreciation/CorporateAppreciation"
import FansFeedback from "@/components/fansFeedback/FansFeedback"

export default function Home() {
    return (
        <div>
            <HeroBanner />
            <div className="flex-1 pl-6 pr-6 pb-6 ">
            <Platforms />
            <Gallery />
            <CorporateAppreciation />
            <FAQ />
            <FansFeedback />
            {/* <Testimonials /> */}
            </div>
        </div>
    )
}
