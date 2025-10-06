"use client"

import React, { useState } from "react"
import { ChevronRight, ChevronDown, ExternalLink, Youtube } from "lucide-react"

// =====================
// Types
// =====================
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

interface TechnicalSectionProps {
  /** Optional heading shown above the tree */
  title?: string
  /** All sections (nodes) for a single category */
  nodes: RoadmapNode[]
}

interface TreeNodeProps {
  node: RoadmapNode
  level: number
  isRoot?: boolean
}

// =====================
// TechnicalSection (single header, multiple sections)
// =====================
export default function TechnicalSection({nodes }: TechnicalSectionProps) {
  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      {/* <h1 className="text-3xl font-bold mb-6">{title}</h1> */}
      <div className="border border-gray-300 rounded-md divide-y">
        {nodes.map((section, index) => (
          <TreeNode key={index} node={section} level={0} isRoot />
        ))}
      </div>
    </div>
  )
}

// =====================
// TreeNode
// =====================
function TreeNode({ node, level, isRoot = false }: TreeNodeProps) {
  const [expanded, setExpanded] = useState(true)
  const hasChildren = !!(node.children && node.children.length > 0)

  return (
    <div className="border-t border-gray-200 first:border-t-0">
      <div
        className="grid grid-cols-[300px_120px_1fr] items-center py-2 cursor-pointer border-b border-gray-200 hover:bg-gray-50 transition"
        onClick={() => hasChildren && setExpanded(!expanded)}
      >
        {/* Label + toggle (first column, indented) */}
        <div className="flex items-center gap-2" style={{ paddingLeft: `${level * 20}px` }}>
          {hasChildren ? (
            <span className="transition-transform">
              {expanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </span>
          ) : (
            <span className="w-4" />
          )}

          <span className={`${isRoot ? "font-bold" : "font-medium"} text-base`}>
            {node.title || node.label}
          </span>
        </div>

        {/* Type (second column) */}
        <div>
          {node.type && (
            <span
              className={`text-xs font-semibold px-2 py-1 rounded-full ${
                node.type === "FREE" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
              }`}
            >
              {node.type}
            </span>
          )}
        </div>

        {/* Links (third column) */}
        <div className="flex flex-wrap gap-2">
          {node.links?.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1 text-sm underline ${
                link.type === "video" ? "text-red-600" : "text-blue-600"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {link.type === "video" ? <Youtube className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Children */}
      {hasChildren && (
        <div className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${expanded ? "max-h-[1000px]" : "max-h-0"}`}>
          {node.children!.map((child, idx) => (
            <TreeNode key={idx} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  )
}

/*
USAGE in RoadmapPage (TypeScript):

import TechnicalSection, { RoadmapNode } from "@/components/roadmapSections/TechnicalSection"

// Typed category shape
interface RoadmapCategory { category: string; data: RoadmapNode[] }

const roadmap: RoadmapCategory[] = [
  {
    category: "Frontend",
    data: [
      { title: "HTML & CSS Fundamentals", children: [{ label: "Intro to HTML", type: "FREE" }] },
      { title: "JavaScript", children: [{ label: "Basics", type: "Course" }] },
    ],
  },
]

// When a category is selected:
<TechnicalSection title={`${selectedCategory} Roadmap`} nodes={roadmap.find(c => c.category === selectedCategory)!.data} />

// This renders ONE header per category and multiple sections underneath without duplication.
*/