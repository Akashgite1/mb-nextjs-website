export interface CertificationsItem {
  src: string
  name: string
  issuer: string
  width?: number
  height?: number
  visible?: boolean
}

export const certifications: CertificationsItem[] = [
  {
    src: "/images/certifications/GH-300.png",
    name: "GH-300: Github Copilot",
    issuer: "Microsoft",
    width: 300,
    height: 250,
  },
  {
    src: "/images/certifications/AI-900.png",
    name: "AI-900: Azure AI Fundamentals",
    issuer: "Microsoft",
    width: 300,
    height: 250,
  },
  {
    src: "/images/certifications/AZ-900.png",
    name: "AZ-900: Azure Fundamentals",
    issuer: "Microsoft",
    width: 300,
    height: 250,
  },
]
