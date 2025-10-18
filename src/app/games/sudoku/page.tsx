"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import {
    sudokuPuzzles4x4,
    sudokuPuzzles5x5,
    sudokuPuzzles6x6,
} from "@/components/sudokuBoards/sudokuPuzzles"
import toast from "react-hot-toast"

const SudokuBoard4x4 = dynamic(
    () => import("@/components/sudokuBoards/sudokuBoard4x4/SudokuBoard4x4")
)
const SudokuBoard5x5 = dynamic(
    () => import("@/components/sudokuBoards/sudokuBoard5x5/SudokuBoard5x5")
)
const SudokuBoard6x6 = dynamic(
    () => import("@/components/sudokuBoards/sudokuBoard6x6/SudokuBoard6x6")
)

type BoardSize = "4x4" | "5x5" | "6x6" | null

export default function SudokuPage() {
    const [selectedSize, setSelectedSize] = useState<BoardSize>(null)
    const [solvedStats, setSolvedStats] = useState({
        "4x4": 0,
        "5x5": 0,
        "6x6": 0,
    })
    const [showFinalModal, setShowFinalModal] = useState(false)

    // 🧠 Handle puzzle solved from any board
    const handlePuzzleSolved = (size: BoardSize) => {
        if (!size) return
        setSolvedStats((prev) => {
            const updated = {
                ...prev,
                [size]: prev[size] + 1,
            }

            // ✅ Check if all puzzles are solved
            const totalPuzzles =
                sudokuPuzzles4x4.length +
                sudokuPuzzles5x5.length +
                sudokuPuzzles6x6.length
            const totalSolved =
                updated["4x4"] + updated["5x5"] + updated["6x6"]

            if (totalSolved === totalPuzzles) {
                setTimeout(() => setShowFinalModal(true), 600)
                toast.success("🎉 Congratulations! You’ve solved all puzzles!")
            }

            return updated
        })
    }

    // 🧩 Render selected board
    const renderBoard = () => {
        switch (selectedSize) {
            case "4x4":
                return (
                    <SudokuBoard4x4
                        onPuzzleSolved={() => handlePuzzleSolved("4x4")}
                    />
                )
            case "5x5":
                return (
                    <SudokuBoard5x5
                        onPuzzleSolved={() => handlePuzzleSolved("5x5")}
                    />
                )
            case "6x6":
                return (
                    <SudokuBoard6x6
                        onPuzzleSolved={() => handlePuzzleSolved("6x6")}
                    />
                )
            default:
                return (
                    <div className='text-gray-500 mt-10 text-center'>
                        👆 Select a Sudoku size and start playing!
                    </div>
                )
        }
    }

    // 🎯 Total puzzles
    const totalPuzzles =
        sudokuPuzzles4x4.length +
        sudokuPuzzles5x5.length +
        sudokuPuzzles6x6.length
    const totalSolved =
        solvedStats["4x4"] + solvedStats["5x5"] + solvedStats["6x6"]

    // 🧮 Individual progress
    const getSizeProgress = (size: BoardSize) => {
        if (size === "4x4")
            return (solvedStats["4x4"] / sudokuPuzzles4x4.length) * 100
        if (size === "5x5")
            return (solvedStats["5x5"] / sudokuPuzzles5x5.length) * 100
        if (size === "6x6")
            return (solvedStats["6x6"] / sudokuPuzzles6x6.length) * 100
        return 0
    }

    const totalProgress = (totalSolved / totalPuzzles) * 100

    return (
        <main className='min-h-screen bg-gray-50 p-6'>
            <h1 className='text-3xl font-bold text-center mb-2'>
                🧩 Sudoku Progress Tracker
            </h1>
            <p className='text-center text-gray-700 mb-6'>
                Solve all puzzles and get{" "}
                <b className='text-green-700'>10% off</b> on your next 1:1
                session! 💡
            </p>

            {/* 📊 Current Board Progress */}
            {selectedSize && (
                <div className='max-w-xl mx-auto mb-4'>
                    <div className='flex justify-between text-sm mb-1 text-gray-700'>
                        <span>
                            {selectedSize} Progress:{" "}
                            <b>
                                {solvedStats[selectedSize]} /{" "}
                                {selectedSize === "4x4"
                                    ? sudokuPuzzles4x4.length
                                    : selectedSize === "5x5"
                                    ? sudokuPuzzles5x5.length
                                    : sudokuPuzzles6x6.length}
                            </b>
                        </span>
                        <span>{Math.floor(getSizeProgress(selectedSize))}%</span>
                    </div>
                    <div className='w-full bg-gray-200 rounded-full h-3 overflow-hidden'>
                        <motion.div
                            className='bg-blue-600 h-3'
                            initial={{ width: 0 }}
                            animate={{
                                width: `${getSizeProgress(selectedSize)}%`,
                            }}
                            transition={{ duration: 0.4 }}
                        />
                    </div>
                </div>
            )}

            {/* 🏆 Total Progress */}
            <div className='max-w-xl mx-auto mb-8'>
                <div className='flex justify-between text-sm mb-1 text-gray-700'>
                    <span>
                        Total Progress:{" "}
                        <b>
                            {totalSolved} / {totalPuzzles}
                        </b>
                    </span>
                    <span>{Math.floor(totalProgress)}%</span>
                </div>
                <div className='w-full bg-gray-200 rounded-full h-3 overflow-hidden'>
                    <motion.div
                        className='bg-green-600 h-3'
                        initial={{ width: 0 }}
                        animate={{ width: `${totalProgress}%` }}
                        transition={{ duration: 0.4 }}
                    />
                </div>
            </div>

            {/* 🔘 Size Selection */}
            <div className='flex flex-wrap justify-center gap-3 mb-8'>
                {(["4x4", "5x5", "6x6"] as BoardSize[]).map((size) => (
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

            {/* 🧠 Board Renderer */}
            <div className='flex justify-center'>{renderBoard()}</div>

            {/* 🎉 Final Discount Modal */}
            {showFinalModal && (
                <div className='fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50'>
                    <div className='bg-white rounded-2xl p-8 max-w-md text-center shadow-lg animate-fadeIn relative'>
                        {/* Close Button */}
                        <button
                            onClick={() => setShowFinalModal(false)}
                            className='absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl'
                        >
                            ✖
                        </button>

                        <h2 className='text-2xl font-bold mb-3'>
                            🎉 Congratulations!
                        </h2>
                        <p className='text-gray-700 mb-4'>
                            You solved <b>all Sudoku puzzles!</b>
                        </p>
                        <p className='text-lg font-semibold text-green-700 mb-6'>
                            Here’s your 10% OFF code:
                        </p>
                        <div className='bg-green-100 border border-green-400 px-4 py-2 rounded-lg text-xl font-mono mb-6'>
                            MBOFF10
                        </div>
                        <div className='flex justify-center gap-4'>
                            <button
                                onClick={() => {
                                    navigator.clipboard.writeText("MBOFF10")
                                    toast.success("Copied to clipboard!")
                                }}
                                className='bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700'
                            >
                                Copy Code
                            </button>
                            <button
                                onClick={() => setShowFinalModal(false)}
                                className='bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600'
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </main>
    )
}
