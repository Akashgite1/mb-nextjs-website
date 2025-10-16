"use client"

import { useState } from "react"
import dynamic from "next/dynamic"

// ✅ Lazy load board components to optimize bundle size
const SudokuBoard4x4 = dynamic(() => import("@/components/sudokuBoards/sudokuBoard4x4/SudokuBoard4x4"))
const SudokuBoard5x5 = dynamic(() => import("@/components/sudokuBoards/sudokuBoard5x5/SudokuBoard5x5"))
// const SudokuBoard9x9 = dynamic(() => import("@/components/sudokuBoards/sudokuBoard9x9/SudokuBoard9x9"))

type BoardSize = "2x2" | "3x3" | "4x4" | "5x5" | "6x6" | "7x7" | "8x8" | "9x9" | null

export default function SudokuPage() {
    const [selectedSize, setSelectedSize] = useState<BoardSize>(null)

    // const sizes: BoardSize[] = ["2x2", "3x3", "4x4", "5x5", "6x6", "7x7", "8x8", "9x9"]
    const sizes: BoardSize[] = ["4x4"]

    const renderBoard = () => {
        switch (selectedSize) {
            case "4x4":
                return <SudokuBoard4x4 />
            case "5x5":
                return <SudokuBoard5x5 />
            // case "9x9":
            //     return <SudokuBoard9x9 />
            default:
                return (
                    <div className="text-gray-500 mt-10 text-center">
                        👆 Select a Sudoku size to start playing
                    </div>
                )
        }
    }

    return (
        <main className="min-h-screen bg-gray-50 p-6">
            <h1 className="text-3xl font-bold text-center mb-6">🧩 Sudoku</h1>

            {/* Tag Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
                {sizes.map((size) => (
                    <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition 
                        ${
                            selectedSize === size
                                ? "bg-blue-600 text-white"
                                : "bg-gray-200 hover:bg-blue-100"
                        }`}
                    >
                        {size}
                    </button>
                ))}
            </div>

            {/* Board Renderer */}
            <div className="flex justify-center">{renderBoard()}</div>
        </main>
    )
}
