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

export const creators: GalleryItem[] = [
    {
        src: "/images/creators/sumit_goyal.jpeg",
        name: "Sumit Goyal",
    },
    {
        src: "/images/creators/ajay_suneja.jpeg",
        name: "Ajay Suneja",
    },
    {
        src: "/images/creators/piyush.jpeg",
        name: "Piyush - Roadside Coder",
    },
    {
        src: "/images/creators/striver.jpeg",
        name: "Raj Vikramaditya",
    },
    {
        src: "/images/creators/harkirat.jpeg",
        name: "Harkirat",
    },
    {
        src: "/images/creators/ayushi_sharma.jpeg",
        name: "Ayushi Sharma",
    },
    {
        src: "/images/creators/saumya_sriv.jpeg",
        name: "Saumya",
    },
]

export const course_members: GalleryItem[] = [
    {
        src: "/images/corporateCourseMembers/shubham_kumar.jpeg",
        name: "Shubham Kumar",
        description: "Security Engineer",
        logo: "/images/companyLogos/iksula.png",
        width: 190,
    },
    {
        src: "/images/corporateCourseMembers/apekhit_sonawane.jpg",
        name: "Apekhit Sonawane",
        description: "UI Developer",
        logo: "/images/companyLogos/iksula.png",
    },
    {
        src: "/images/corporateCourseMembers/om_sharma.jpg",
        name: "Om Sharma",
        description: ".NET Full Stack Developer",
        logo: "/images/companyLogos/McGraw-Hill.png",
    },
    {
        src: "/images/corporateCourseMembers/manish_goyal.jpeg",
        name: "Manish Goyal",
        description: "SDE-2 Backend Developer",
        logo: "/images/companyLogos/linkedin.png",
        height: 100,
    },
]


// export const corporate_events: GalleryItem[] = [
//   {
//     src: "/images/corporateCourseMembers/shubham_kumar.jpeg",
//     name: "Shubham Kumar",
//     description: "Security Engineer at Google",
//     logo: "/imeages/companyLogos/buzzClan.png"
//   },
// ]

export const special_momemts: GalleryItem[] = [
    {
        src: "/images/specialMomemts/topmate_cover_page.png",
        name: "Topmate Official Page",
        description: "Featured on official page",
        width: 400,
    },
]

export const random_places: GalleryItem[] = [
    {
        src: "/images/randomPlaces/vrindavan1.jpeg",
        name: "Vrindavan",
        // description: "Featured on official page",
        width: 280,
    },
    {
        src: "/images/randomPlaces/vrindavan2.jpeg",
        name: "Vrindavan",
        // description: "Featured on official page",
        // width: 320,
    },
    {
        src: "/images/randomPlaces/manekshaw1.jpeg",
        name: "Manekshaw Center, Delhi",
        description: "27-Sep-2025",
        width: 320,
    },
    {
        src: "/images/randomPlaces/1.jpeg",
        name: "Hyderabad, Telangana",
        description: "16-Sep-2025",
        // width: 320,
    },
    {
        src: "/images/randomPlaces/shubham_1.jpeg",
        name: "Shubham - Manekshaw Center, Delhi",
        description: "16-Sep-2025",
        // width: 320,
    },
]

export const company_events: GalleryItem[] = [
    {
        src: "/images/companyEvents/hyd-1.jpeg",
        name: "Hyderabad, Telangana",
        description: "18-July-2025 Event by Pepsico/IBM",
        width: 240,
    },
    {
        src: "/images/companyEvents/manekshaw_delhi1.jpeg",
        name: "Manekshaw Center, Delhi",
        description: "27-Sep-2025 Event by IBM",
        width: 240,
    },
    {
        src: "/images/companyEvents/manekshaw_delhi2.jpeg",
        name: "Manekshaw Center, Delhi",
        description: "27-Sep-2025 Event by IBM",
        width: 240,
    },
]

export const corporate_contacts: GalleryItem[] = [
    {
        src: "/images/corporate/prasanna.jpeg",
        name: "Prasanna M Sridhara",
        description: "Associate Partner Digital & iX PAL - Distribution Sector",
        logo: "/images/companyLogos/ibm.jpg",
        width: 280,
    },
    {
        src: "/images/corporate/amit_prashant.jpeg",
        name: "Prashant + Amit",
        description: "Senior Project Managers",
        logo: "/images/companyLogos/qad.jpg",
    },
]
