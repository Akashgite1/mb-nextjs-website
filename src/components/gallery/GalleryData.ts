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
    src: "/images/creators/ajay_suneja.jpeg",
    name: "Ajay Suneja"
  },
  {
    src: "/images/creators/piyush.jpeg",
    name: "Piyush - Roadside Coder",
  },
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
    logo: "/images/companyLogos/ibm.jpg"
  },
  {
    src: "/images/creators/striver.jpeg",
    name: "Raj Vikramaditya",
  },
]

export const special_momemts: GalleryItem[] = [
  {
    src: "/images/specialMomemts/topmate_cover_page.png",
    name: "Topmate Official Page",
    description: "Featured on official page",
    width: 320,
  },
]

export const corporate_contacts: GalleryItem[] = [
  
  {
    src: "/images/corporate/prasanna.jpeg",
    name: "Prasanna M Sridhara",
    description: "Associate Partner Digital & iX PAL - Distribution Sector",
    logo: "/images/companyLogos/ibm.jpg",
    width: 300,
  },
  {
    src: "/images/corporate/prasanna.jpeg",
    name: "Prasanna M Sridhara",
    description: "Associate Partner Digital & iX PAL - Distribution Sector",
    logo: "/images/companyLogos/ibm.jpg",
    width: 300,
  },
]
