"use client"
import React, { useState, useEffect, useRef } from "react"
import toast from "react-hot-toast"
import { sudokuPuzzles6x6 as puzzles } from "../sudokuPuzzles"

interface SudokuBoard6x6Props {
    onPuzzleSolved?: (timeTaken: number, puzzleIndex: number) => void
}

export default function SudokuBoard6x6({ onPuzzleSolved }: SudokuBoard6x6Props) {
    const levelSize = 6
    const [puzzleIndex, setPuzzleIndex] = useState(0)
    const [board, setBoard] = useState(() => puzzles[0].map((r) => [...r]))
    const [selectedCell, setSelectedCell] = useState<[number, number] | null>(null)
    const [showModal, setShowModal] = useState(false)

    // 🕒 Timer
    const [seconds, setSeconds] = useState(0)
    const [finalTime, setFinalTime] = useState<number | null>(null)
    const timerRef = useRef<NodeJS.Timeout | null>(null)

    // Start/reset timer whenever puzzle changes
    useEffect(() => {
        if (timerRef.current) clearInterval(timerRef.current)
        setSeconds(0)
        setFinalTime(null)
        timerRef.current = setInterval(() => setSeconds((s) => s + 1), 1000)
        return () => {
            if (timerRef.current) clearInterval(timerRef.current)
        }
    }, [puzzleIndex])

    const formatTime = (secs: number) => {
        const m = Math.floor(secs / 60)
        const s = secs % 60
        return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`
    }

    const handleChange = (row: number, col: number, value: number) => {
        if (value >= 0 && value <= levelSize) {
            const newBoard = board.map((r) => [...r])
            newBoard[row][col] = value
            setBoard(newBoard)
        }
    }

    const handleNumberClick = (num: number) => {
        if (!selectedCell) return
        const [row, col] = selectedCell
        if (puzzles[puzzleIndex][row][col] !== 0) return // preset cell not editable

        const currentValue = board[row][col]
        handleChange(row, col, currentValue === num ? 0 : num)
    }

    const checkSolution = () => {
        const valid = validateSudoku6x6(board)
        const complete = board.every((row) => row.every((n) => n >= 1 && n <= levelSize))

        if (valid && complete) {
            if (timerRef.current) clearInterval(timerRef.current)

            // ⏱ Freeze final time
            setFinalTime(seconds)

            // 🔔 Notify parent
            onPuzzleSolved?.(seconds, puzzleIndex)

            // 🎉 Show modal
            setShowModal(true)
        } else if (valid) {
            toast("✅ Looks good so far… keep going!", { icon: "🧠" })
        } else {
            toast.error("❌ There’s a mistake somewhere.")
        }
    }

    const loadNextPuzzle = () => {
        const nextIndex = puzzleIndex + 1
        if (nextIndex < puzzles.length) {
            setPuzzleIndex(nextIndex)
            setBoard(puzzles[nextIndex].map((r) => [...r]))
            setSelectedCell(null)
        }
    }

    const resetBoard = () => {
        setBoard(puzzles[puzzleIndex].map((r) => [...r]))
        setSelectedCell(null)
        setSeconds(0)
        setFinalTime(null)
        toast("♻️ Board reset!")
    }

    return (
        <>
            <div className='flex flex-col items-center mt-10'>
                <h1 className='text-3xl font-bold mb-2'>
                    🧩 6×6 Sudoku #{puzzleIndex + 1}
                </h1>
                <div className='text-gray-600 mb-4 text-lg'>
                    Time:{" "}
                    <span className='font-mono'>
                        {finalTime !== null ? formatTime(finalTime) : formatTime(seconds)}
                    </span>
                </div>

                {/* Sudoku Grid */}
                <div className='grid grid-cols-6 gap-[2px] border-4 border-black'>
                    {board.map((row, rowIndex) =>
                        row.map((cell, colIndex) => {
                            const isPreset = puzzles[puzzleIndex][rowIndex][colIndex] !== 0
                            const isSelected =
                                selectedCell &&
                                selectedCell[0] === rowIndex &&
                                selectedCell[1] === colIndex
                            return (
                                <div
                                    key={`${rowIndex}-${colIndex}`}
                                    onClick={() => !isPreset && setSelectedCell([rowIndex, colIndex])}
                                    className={`w-12 h-12 flex items-center justify-center border text-lg cursor-pointer select-none 
                                        ${isPreset ? "bg-gray-200 font-bold" : "bg-white"}
                                        ${isSelected ? "outline-2 outline-blue-500" : ""}`}
                                >
                                    {cell !== 0 ? cell : ""}
                                </div>
                            )
                        })
                    )}
                </div>

                {/* 🔢 Number Buttons */}
                <div className='mt-4 flex gap-2 flex-wrap justify-center'>
                    {Array.from({ length: levelSize }, (_, i) => i + 1).map((num) => (
                        <button
                            key={num}
                            onClick={() => handleNumberClick(num)}
                            className='w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded hover:bg-blue-700 text-lg font-semibold'
                        >
                            {num}
                        </button>
                    ))}
                </div>

                {/* Actions */}
                <div className='mt-4 flex gap-4'>
                    <button
                        onClick={checkSolution}
                        className='bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700'
                    >
                        Check
                    </button>
                    <button
                        onClick={resetBoard}
                        className='bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600'
                    >
                        Reset
                    </button>
                </div>
            </div>

            {/* 🎉 Solved Modal */}
            {showModal && (
                <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
                    <div className='bg-white rounded-2xl p-8 max-w-md text-center shadow-lg animate-fadeIn'>
                        <h2 className='text-2xl font-bold mb-3'>🎉 Sudoku Solved!</h2>
                        <p className='text-gray-700 mb-6'>
                            Time taken:{" "}
                            <b className='font-mono text-lg'>
                                {formatTime(finalTime ?? seconds)}
                            </b>
                        </p>
                        <div className='flex justify-center gap-4'>
                            {puzzleIndex !== puzzles.length - 1 && (
                                <button
                                    onClick={() => {
                                        setShowModal(false)
                                        loadNextPuzzle()
                                    }}
                                    className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'
                                >
                                    Continue ➡️
                                </button>
                            )}
                            <button
                                onClick={() => setShowModal(false)}
                                className='bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600'
                            >
                                Close ✖️
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

// ✅ Validation for 6×6 (rows, columns, and 3×2 subgrids)
function validateSudoku6x6(board: number[][]) {
    const isValidSet = (nums: number[]) => {
        const filtered = nums.filter((n) => n !== 0)
        return new Set(filtered).size === filtered.length
    }

    for (let i = 0; i < 6; i++) {
        const row = board[i]
        const col = board.map((r) => r[i])
        if (!isValidSet(row) || !isValidSet(col)) return false
    }

    // 3×2 subgrids
    for (let boxRow = 0; boxRow < 3; boxRow++) {
        for (let boxCol = 0; boxCol < 2; boxCol++) {
            const box: number[] = []
            for (let i = 0; i < 2; i++) {
                for (let j = 0; j < 3; j++) {
                    box.push(board[boxRow * 2 + i][boxCol * 3 + j])
                }
            }
            if (!isValidSet(box)) return false
        }
    }

    return true
}
