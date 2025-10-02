/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useState, useEffect } from "react"
import { topics } from "./TechData"

// ---------- Accordion ----------
function Accordion({
    length,
    title,
    children,
    globalExpand, // comes from parent expand/collapse all
}: {
    length: number
    title: string
    children: React.ReactNode
    globalExpand: boolean | null
}) {
    const [isOpen, setIsOpen] = useState(false)

    // whenever globalExpand changes, override local state
    useEffect(() => {
        if (globalExpand !== null) {
            setIsOpen(globalExpand)
        }
    }, [globalExpand])

    return (
        <div className="border rounded-lg mb-4 overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center px-4 py-3 text-left text-lg font-semibold bg-gray-100 hover:bg-gray-200"
            >
                {title} {""} {length ? `(${length})` : ""}
                <span
                    className={`transform transition-transform ${
                        isOpen ? "rotate-180" : "rotate-0"
                    }`}
                >
                    ▼
                </span>
            </button>
            <div
                className={`transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}
            >
                <div className="p-4">{children}</div>
            </div>
        </div>
    )
}

// ---------- DataTable ----------
function DataTable({ rows }: { rows: any[] }) {
    const [expandedRow, setExpandedRow] = useState<number | null>(null)

    return (
        <table className="w-full border-collapse border border-gray-300">
            <thead>
                <tr className="bg-gray-200">
                    <th className="border border-gray-300 px-4 py-2 w-12">#</th>
                    <th className="border border-gray-300 px-4 py-2">Title</th>
                    <th className="border border-gray-300 px-4 py-2">Links</th>
                    <th className="border border-gray-300 px-4 py-2 w-12"></th>
                </tr>
            </thead>
            <tbody>
                {rows.map((row, idx) => (
                    <>
                        <tr key={idx} className="hover:bg-gray-50">
                            <td className="border px-4 py-2 text-center">
                                {idx + 1}
                            </td>
                            <td className="border px-4 py-2">{row.title}</td>
                            <td className="border px-4 py-2">
                                <div className="flex gap-2">
                                    {row.links?.map(
                                        (
                                            link: { label: string; url: string },
                                            li: number
                                        ) => (
                                            <a
                                                key={li}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 underline"
                                            >
                                                {link.label}
                                            </a>
                                        )
                                    )}
                                </div>
                            </td>
                            <td className="border px-4 py-2 text-center">
                                {row.rowData && (
                                    <button
                                        onClick={() =>
                                            setExpandedRow(
                                                expandedRow === idx
                                                    ? null
                                                    : idx
                                            )
                                        }
                                        className={`transform transition-transform ${
                                            expandedRow === idx
                                                ? "rotate-180"
                                                : "rotate-0"
                                        }`}
                                    >
                                        ▼
                                    </button>
                                )}
                            </td>
                        </tr>

                        {row.rowData && (
                            <tr>
                                <td colSpan={4} className="p-0">
                                    <div
                                        className={`transition-all duration-500 ease-in-out ${
                                            expandedRow === idx
                                                ? "max-h-screen opacity-100"
                                                : "max-h-0 opacity-0"
                                        } overflow-hidden`}
                                    >
                                        <div className="p-4 bg-gray-50">
                                            <DataTable rows={row.rowData} />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </>
                ))}
            </tbody>
        </table>
    )
}

// ---------- Technical Section ----------
export default function TechnicalSection() {
    const [allExpanded, setAllExpanded] = useState<boolean | null>(null)

    return (
        <div>
            {/* Expand/Collapse toggle */}
            <div className="flex items-center justify-end mb-4 gap-2">
                <span className="font-medium">Expand/Collapse all sections</span>
                <button
                    onClick={() =>
                        setAllExpanded(
                            allExpanded === true ? false : true
                        )
                    }
                    className={`w-8 h-8 rounded-full flex items-center justify-center border transition ${
                        allExpanded
                            ? "bg-blue-600 text-white border-blue-600"
                            : "bg-gray-200 text-gray-600 border-gray-300"
                    }`}
                >
                    ▼
                </button>
            </div>

            {topics.map((topic, i) => (
                <Accordion
                    key={i}
                    length={topic.rowData?.length}
                    title={topic.title}
                    globalExpand={allExpanded}
                >
                    <DataTable rows={topic.rowData} />
                </Accordion>
            ))}
        </div>
    )
}
