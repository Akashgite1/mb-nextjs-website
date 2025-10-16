"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"

export default function GamesPage() {
    const router = useRouter()

    const games = [
        {
            id: "sudoku",
            title: "Sudoku",
            image: "/images/games/sudoku.png",
            description: "Solve Sudoku puzzles",
            path: "/games/sudoku",
        },
        {
            id: "crossword",
            title: "Crossword",
            image: "/images/games/crossword.png", // updated path to match actual image location
            description: "Classic word puzzle fun",
            path: "/games/crossword",
        },
        {
            id: "puzzle",
            title: "Jigsaw Puzzle",
            image: "/images/games/puzzle.png",
            description: "Assemble pieces to reveal the picture",
            path: "/games/jigsaw",
        },
    ]

    return (
        <main className="min-h-screen bg-gray-50 py-10 px-4">
            <h1 className="text-3xl font-bold text-center mb-8">
            🕹️ Choose a Game
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {games.map((game) => (
                <div
                key={game.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg cursor-pointer overflow-hidden transition"
                onClick={() => router.push(game.path)}
                >
                <div className="relative w-full h-48">
                    <Image
                    src={game.image}
                    alt={game.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain hover:scale-105 transition-transform duration-300"
                    priority
                    />
                </div>
                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-1">
                    {game.title}
                    </h2>
                    <p className="text-gray-600 text-sm">
                    {game.description}
                    </p>
                </div>
                </div>
            ))}
            </div>
        </main>
    )
}
