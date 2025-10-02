"use client"
import TreeNode from "@/components/treeNode/TreeNode"
import { collegeTopics, corporateTopics, podcastTopics } from "@/app/roadmap/topics"

export default function CareerSection() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {/* College / Student Section */}
            <section>
                <h2 className='text-xl font-semibold mb-4 text-red-700'>
                    College / Student
                </h2>
                {collegeTopics.map((node, i) => (
                    <TreeNode key={i} node={node} />
                ))}
            </section>

            {/* Corporate Section */}
            <section>
                <h2 className='text-xl font-semibold mb-4 text-green-700'>
                    Working Professionals
                </h2>
                {corporateTopics.map((node, i) => (
                    <TreeNode key={i} node={node} />
                ))}
            </section>

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
