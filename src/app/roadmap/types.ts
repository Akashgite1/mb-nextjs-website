export type LinkType = "text" | "video"
export type ContentType = "FREE" | "Course"

export interface RoadmapLink {
  type: LinkType
  label: string
  url: string
}

export interface RoadmapNode {
  title?: string
  label?: string
  type?: ContentType
  links?: RoadmapLink[]
  children?: RoadmapNode[]
}

export interface RoadmapCategory {
  category: string
  data: RoadmapNode[]
}
