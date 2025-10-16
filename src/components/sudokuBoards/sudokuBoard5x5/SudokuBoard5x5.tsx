"use client"
import React, { useState } from "react"
import toast from "react-hot-toast"

// 5×5 Sudoku puzzles (0 = empty cell)
const sudokuPuzzles5x5: number[][][] = [
    [
        [0, 2, 3, 0, 5],
        [5, 0, 0, 3, 0],
        [0, 3, 0, 0, 4],
        [0, 0, 1, 0, 0],
        [4, 0, 0, 2, 0],
    ],
    [
        [1, 0, 0, 4, 0],
        [0, 0, 5, 0, 3],
        [0, 4, 0, 0, 0],
        [0, 0, 2, 0, 5],
        [5, 0, 0, 3, 0],
    ],
    [
        [0, 0, 2, 0, 0],
        [4, 0, 0, 1, 0],
        [0, 1, 0, 0, 2],
        [0, 0, 0, 0, 3],
        [0, 5, 0, 2, 0],
    ],
]
export default function SudokuBoard5x5() {
    const [puzzleIndex, setPuzzleIndex] = useState(0)
    const [board, setBoard] = useState(
        sudokuPuzzles5x5[puzzleIndex].map((row) => [...row])
    )
    const [showModal, setShowModal] = useState(false)
    const [time, setTime] = useState(0)
    const [isActive, setIsActive] = useState(true)

    // Timer effect
    React.useEffect(() => {
        let intervalId: NodeJS.Timeout

        if (isActive) {
            intervalId = setInterval(() => {
                setTime((prevTime) => prevTime + 1)
            }, 1000)
        }

        return () => {
            if (intervalId) {
                clearInterval(intervalId)
            }
        }
    }, [isActive])

    // Format time to MM:SS
    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
    }

    const handleChange = (row: number, col: number, value: string) => {
        if (/^[1-5]?$/.test(value)) {
            const newBoard = board.map((r) => [...r])
            newBoard[row][col] = value === "" ? 0 : parseInt(value, 10)
            setBoard(newBoard)
        }
    }

    const checkSolution = () => {
        const valid = validateSudoku5x5(board)
        const complete = board.every((row) => row.every((n) => n >= 1 && n <= 5))

        if (valid && complete) {
            setIsActive(false)
            setShowModal(true)
        } else if (valid) {
            toast("✅ Looks good so far… keep going!", { icon: "🧠" })
        } else {
            toast.error("❌ There's a mistake somewhere.")
        }
    }

    const loadNextPuzzle = () => {
        const nextIndex = puzzleIndex + 1
        if (nextIndex < sudokuPuzzles5x5.length) {
            setPuzzleIndex(nextIndex)
            setBoard(sudokuPuzzles5x5[nextIndex].map((row) => [...row]))
            setTime(0)
            setIsActive(true)
        }
    }

    const resetBoard = () => {
        setBoard(sudokuPuzzles5x5[puzzleIndex].map((row) => [...row]))
        setTime(0)
        setIsActive(true)
        toast("♻️ Board reset!")
    }

    return (
        <>
            <div className='flex flex-col items-center mt-10'>
                <h1 className='text-3xl font-bold mb-4'>
                    🧠 5×5 Sudoku #{puzzleIndex + 1}
                </h1>
                <div className='text-xl font-mono mb-4'>⏱️ {formatTime(time)}</div>

                <div className='grid grid-cols-5 gap-[2px] border-4 border-black'>
                    {/* Rest of the component remains the same */}
                    {board.map((row, rowIndex) =>
                        row.map((cell, colIndex) => (
                            <input
                                key={`${rowIndex}-${colIndex}`}
                                className={`w-14 h-14 text-center text-xl border border-gray-400 ${
                                    sudokuPuzzles5x5[puzzleIndex][rowIndex][
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
                                    sudokuPuzzles5x5[puzzleIndex][rowIndex][
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

            {showModal && (
                <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
                    <div className='bg-white rounded-2xl p-8 max-w-md text-center shadow-lg animate-fadeIn'>
                        <h2 className='text-2xl font-bold mb-3'>
                            🎉 Sudoku Solved!
                        </h2>
                        <p className='text-gray-700 mb-2'>
                            Time: {formatTime(time)}
                        </p>
                        {puzzleIndex === sudokuPuzzles5x5.length - 1 ? (
                            <p className='text-gray-700 mb-6'>
                                Congrats! You solved <b>all puzzles</b> 👑
                            </p>
                        ) : (
                            <p className='text-gray-700 mb-6'>
                                Great job! Ready for the next one?
                            </p>
                        )}

                        <div className='flex justify-center gap-4'>
                            {puzzleIndex !== sudokuPuzzles5x5.length - 1 && (
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

// ✅ Validation for 5×5
function validateSudoku5x5(board: number[][]) {
    const isValidSet = (nums: number[]) => {
        const filtered = nums.filter((n) => n !== 0)
        return new Set(filtered).size === filtered.length
    }

    // Rows and Columns
    for (let i = 0; i < 5; i++) {
        const row = board[i]
        const col = board.map((r) => r[i])
        if (!isValidSet(row) || !isValidSet(col)) return false
    }

    return true
}
