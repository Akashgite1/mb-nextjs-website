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
    src: "/images/corporate/sufiya_khan.PNG",
    name: "Sufiya Khan",
    description: "Associate Partner - Front End Exp",
    logo: "/images/companyLogos/ibm.jpg",
    width: 230,
  },
  {
    src: "/images/corporate/amit_prashant.jpeg",
    name: "Prashant + Amit",
    description: "Senior Project Managers",
    logo: "/images/companyLogos/qad.jpg"
  },
  {
    src: "/images/creators/striver.jpeg",
    name: "Raj Vikramaditya",
  },
]