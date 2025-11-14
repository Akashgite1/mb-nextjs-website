"use client"

import { useState } from "react"

interface LinkItem {
    label: string
    url?: string
}

interface Node {
    title: string
    links?: LinkItem[]
    children?: Node[]
}

export default function TreeNode({ node }: { node: Node }) {
    const [open, setOpen] = useState(true)

    return (
        <div className='ml-4'>
            <div
                className='cursor-pointer font-semibold flex items-center text-black'
                onClick={() => setOpen(!open)}
            >
                <span className='mr-1'>{open ? "▾" : "▸"}</span>
                {node.title}
            </div>

            {open && (
                <div className='ml-4 mt-1 space-y-1'>
                    {node.links?.map((link) => (
                        <div key={link.url} className='ml-4 text-black-600'>
                            {link.label}
                        </div>
                    ))}

                    {node.children?.map((child, idx) => (
                        <TreeNode key={idx} node={child} />
                    ))}
                </div>
            )}
        </div>
    )
}
