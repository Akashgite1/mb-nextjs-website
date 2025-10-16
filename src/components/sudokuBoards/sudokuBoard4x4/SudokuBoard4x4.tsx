"use client"
import React, { useState } from "react"
import toast from "react-hot-toast"

const sudokuPuzzles: number[][][] = [
    [
        [1, 0, 0, 4],
        [0, 4, 0, 0],
        [0, 0, 2, 3],
        [2, 3, 4, 0],
    ],
    [
        [0, 2, 3, 0],
        [3, 0, 0, 2],
        [0, 0, 0, 1],
        [2, 1, 4, 0],
    ],
    [
        [0, 0, 4, 1],
        [1, 0, 0, 0],
        [0, 0, 0, 3],
        [4, 3, 1, 0],
    ],
]

export default function SudokuBoard4x4() {
    const [puzzleIndex, setPuzzleIndex] = useState(0)
    const [board, setBoard] = useState(
        sudokuPuzzles[puzzleIndex].map((row) => [...row])
    )
    const [showModal, setShowModal] = useState(false) // 👈 for centered popup

    const handleChange = (row: number, col: number, value: string) => {
        if (/^[1-4]?$/.test(value)) {
            const newBoard = board.map((r) => [...r])
            newBoard[row][col] = value === "" ? 0 : parseInt(value, 10)
            setBoard(newBoard)
        }
    }

    const checkSolution = () => {
        const valid = validateSudoku4x4(board)
        const complete = board.every((row) =>
            row.every((n) => n >= 1 && n <= 4)
        )

        if (valid && complete) {
            const isLast = puzzleIndex === sudokuPuzzles.length - 1
            if (isLast) {
                setShowModal(true)
            } else {
                setShowModal(true)
            }
        } else if (valid) {
            toast("✅ Looks good so far… keep going!", { icon: "🧠" })
        } else {
            toast.error("❌ There’s a mistake somewhere.")
        }
    }

    const loadNextPuzzle = () => {
        const nextIndex = puzzleIndex + 1
        if (nextIndex < sudokuPuzzles.length) {
            setPuzzleIndex(nextIndex)
            setBoard(sudokuPuzzles[nextIndex].map((row) => [...row]))
        }
    }

    const resetBoard = () => {
        setBoard(sudokuPuzzles[puzzleIndex].map((row) => [...row]))
        toast("♻️ Board reset!")
    }

    return (
        <>
            {/* Main Sudoku UI */}
            <div className='flex flex-col items-center mt-10'>
                <h1 className='text-3xl font-bold mb-4'>
                    🧩 Easy 4×4 Sudoku #{puzzleIndex + 1}
                </h1>

                <div className='grid grid-cols-4 gap-[2px] border-4 border-black'>
                    {board.map((row, rowIndex) =>
                        row.map((cell, colIndex) => (
                            <input
                                key={`${rowIndex}-${colIndex}`}
                                className={`w-14 h-14 text-center text-xl border border-gray-400 ${
                                    sudokuPuzzles[puzzleIndex][rowIndex][
                                        colIndex
                                    ] !== 0
                                        ? "bg-gray-200 font-bold"
                                        : ""
                                }`}
                                value={cell === 0 ? "" : cell}
                                onChange={(e) =>
                                    handleChange(
                                        rowIndex,
                                        colIndex,
                                        e.target.value
                                    )
                                }
                                disabled={
                                    sudokuPuzzles[puzzleIndex][rowIndex][
                                        colIndex
                                    ] !== 0
                                }
                            />
                        ))
                    )}
                </div>

                <div className='mt-4 flex gap-4'>
                    <button
                        onClick={checkSolution}
                        className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'
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

            {/* ✅ Centered Modal */}
            {showModal && (
                <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
                    <div className='bg-white rounded-2xl p-8 max-w-md text-center shadow-lg animate-fadeIn'>
                        <h2 className='text-2xl font-bold mb-3'>
                            🎉 Sudoku Solved!
                        </h2>
                        {puzzleIndex === sudokuPuzzles.length - 1 ? (
                            <p className='text-gray-700 mb-6'>
                                Congrats! You have solved <b>all puzzles</b> 👑
                            </p>
                        ) : (
                            <p className='text-gray-700 mb-6'>
                                Great job! Ready for the next puzzle?
                            </p>
                        )}

                        <div className='flex justify-center gap-4'>
                            {puzzleIndex !== sudokuPuzzles.length - 1 && (
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

// ✅ Sudoku validation
function validateSudoku4x4(board: number[][]) {
    const isValidSet = (nums: number[]) => {
        const filtered = nums.filter((n) => n !== 0)
        return new Set(filtered).size === filtered.length
    }

    // Check rows and columns
    for (let i = 0; i < 4; i++) {
        const row = board[i]
        const col = board.map((r) => r[i])
        if (!isValidSet(row) || !isValidSet(col)) return false
    }

    // Check 2x2 subgrids
    for (let boxRow = 0; boxRow < 2; boxRow++) {
        for (let boxCol = 0; boxCol < 2; boxCol++) {
            const box: number[] = []
            for (let i = 0; i < 2; i++) {
                for (let j = 0; j < 2; j++) {
                    box.push(board[boxRow * 2 + i][boxCol * 2 + j])
                }
            }
            if (!isValidSet(box)) return false
        }
    }

    return true
}
