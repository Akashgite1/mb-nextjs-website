"use client"
import TreeNode from "@/components/treeNode/TreeNode"
import { podcastTopics } from "@/app/roadmap/topics"

export default function PodcastsSection() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {/* Podcast Section */}
            <section>
                <h2 className='text-xl font-semibold mb-4 text-red-700'>
                    Podcasts
                </h2>
                {podcastTopics.map((node, i) => (
                    <TreeNode key={i} node={node} />
                ))}
            </section>
        </div>
    )
}
