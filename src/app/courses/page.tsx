import CareerSection from "@/components/roadmapSections/CareerSection"
import TechnicalCoursesGrid from "@/components/technicalCoursesGrid/TechnicalCoursesGrid"

export default function TechnicalCoursesPage() {
    return (
        <>
            <main className='pl-26 pr-6 pb-6 pt-4 max-w-5xl mx-auto'>
                <CareerSection />
            </main>
            <TechnicalCoursesGrid />
        </>
    )
}
