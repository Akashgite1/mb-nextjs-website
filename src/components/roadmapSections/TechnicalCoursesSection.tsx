"use client"

import { roadmapData } from "./roadmapData"
import { FaLinkedin } from "react-icons/fa"

export default function TechnicalCoursesSection() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="px-4 py-2 border-b">Course Name</th>
            <th className="px-4 py-2 border-b">Author</th>
            <th className="px-4 py-2 border-b">Need Guidance?</th>
            <th className="px-4 py-2 border-b">Link</th>
          </tr>
        </thead>
        <tbody>
          {roadmapData.technicalCourses.map((course, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              {/* Course Name + Testimonials / Success Stories */}
              <td className="px-4 py-2">
                <div className="flex flex-col gap-1">
                  <span className="font-medium">{course.name}</span>
                  <div className="flex gap-3 text-sm">
                    {course.testimonials && (
                      <a
                        href={course.testimonials}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                      >
                        Testimonials
                      </a>
                    )}
                    {course.successStories && (
                      <a
                        href={course.successStories}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                      >
                        Success Stories
                      </a>
                    )}
                  </div>
                </div>
              </td>

              {/* Author + LinkedIn */}
              <td className="px-4 py-2">
                <div className="flex items-center gap-2">
                  <span>{course.author || "—"}</span>
                  {course.linkedIn && (
                    <a
                      href={course.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600"
                      title="View LinkedIn"
                    >
                      <FaLinkedin size={18} />
                    </a>
                  )}
                </div>
              </td>

              {/* Connect for Guidance */}
              <td className="px-4 py-2">
                {course.connect ? (
                  <a
                    href={course.connect}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    Connect
                  </a>
                ) : (
                  "—"
                )}
              </td>

              {/* Course Link */}
              <td className="px-4 py-2">
                <a
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  View Course
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
