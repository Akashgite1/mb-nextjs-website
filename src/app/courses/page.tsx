import CareerSection from "@/components/roadmapSections/CareerSection"
import SearchCard from "@/components/searchCard/SearchCard"
import TechnicalCoursesGrid from "@/components/technicalCoursesGrid/TechnicalCoursesGrid"

export default function TechnicalCoursesPage() {
    return (
        <>
            <main className='pb-6 pt-4 w-9/10 mx-auto'>
                <CareerSection />
                <SearchCard />
            </main>
            <TechnicalCoursesGrid />
        </>
    )
}
