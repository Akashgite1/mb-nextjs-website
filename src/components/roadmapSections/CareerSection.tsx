"use client"
import TreeNode from "@/components/treeNode/TreeNode"
import { collegeTopics, corporateTopics } from "@/app/roadmap/topics"
import SearchCard from "../searchCard/SearchCard"
import { collegeQnA } from "@/components/faq/faqData"
import { corporateQnA } from "@/components/faq/faqData"

export default function CareerSection() {
    return (
        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch'>
            {/* College / Student Section */}
            <section>
                <h2 className='text-xl font-semibold mb-4 text-red-700'>
                    College Job Ready Bootcamp - All Answers in Course
                </h2>
                <div className='h-full flex flex-col'>
                    <SearchCard sections={collegeQnA} />
                </div>
                {/* {collegeTopics.map((node, i) => (
                    <TreeNode key={i} node={node} />
                ))}                 */}
            </section>

            {/* Corporate Section */}
            <section>
                <h2 className='text-xl font-semibold mb-4 text-red-700'>
                    Corporate Job Ready Bootcamp
                    <a
                        href="https://collegetocorporate.akamai.net.in/new-courses/2-working-professionals-career-guide"
                        className="ml-2 text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Enroll Now
                    </a>
                </h2>
                <div className='h-full flex flex-col'>
                    {corporateTopics.map((node, i) => (
                        <TreeNode key={i} node={node} />
                    ))}
                    <div className='my-4'>
                        <SearchCard sections={corporateQnA} />
                    </div>
                </div>
            </section>
        </div>
    )
}
