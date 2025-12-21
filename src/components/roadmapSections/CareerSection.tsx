"use client"
import TreeNode from "@/components/treeNode/TreeNode"
import { collegeTopics, corporateTopics } from "@/app/roadmap/topics"
import SearchCard from "../searchCard/SearchCard"

export default function CareerSection() {
    return (
        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch'>
            {/* College / Student Section */}
            <section>
                <h2 className='text-xl font-semibold mb-4 text-red-700'>
                    College Job Ready Bootcamp - All Answers in Course
                </h2>
                <div className='h-full flex flex-col'>
                    <SearchCard />
                </div>
                {/* {collegeTopics.map((node, i) => (
                    <TreeNode key={i} node={node} />
                ))}                 */}
            </section>

            {/* Corporate Section */}
            <section>
                <h2 className='text-xl font-semibold mb-4 text-red-700'>
                    Corporate Job Ready Bootcamp
                </h2>
                <div className='h-full flex flex-col'>
                    {corporateTopics.map((node, i) => (
                        <TreeNode key={i} node={node} />
                    ))}
                </div>
            </section>
        </div>
    )
}
