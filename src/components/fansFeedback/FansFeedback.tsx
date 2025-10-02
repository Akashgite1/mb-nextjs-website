// app/page.tsx
"use client"
import Image from "next/image"

export interface IFansFeedback {
  source: string
  img: string
  position: "left" | "middle" | "right"
  width?: number
  height?: number
}

// Example data
const data: IFansFeedback[] = [
  { source: "whatsapp", img: "/images/fansMessages/msg1.jpeg", position: "left"},
  { source: "youtube", img: "/images/fansMessages/msg2.png", position: "middle"},
  { source: "youtube", img: "/images/fansMessages/msg3.png", position: "middle"},
  { source: "youtube", img: "/images/fansMessages/msg4.png", position: "middle"},
  { source: "youtube", img: "/images/fansMessages/msg5.png", position: "middle"},
]

export default function FansFeedback() {
  const leftCol = data.filter((item) => item.position === "left")
  const middleCol = data.filter((item) => item.position === "middle")
  const rightCol = data.filter((item) => item.position === "right")

  return (
    <main className="pt-6 max-w-7xl mx-auto">
        <h2 className='text-2xl font-bold mb-4 text-center text-black'>
                What People Say
            </h2>
      {/* 3 Column Layout */}
      <div className="grid grid-cols-3 gap-4 h-[100vh] overflow-y-auto">
        
        {/* Left column */}
        <div className="flex flex-col gap-4">
          {leftCol.map((item, i) => (
            <div key={i} className="flex w-full">
              <Image
                src={item.img}
                alt={item.source}
                width={800}
                height={item.height || 600}
                className="w-full rounded-lg shadow object-contain"
              />
            </div>
          ))}
        </div>

        {/* Middle column */}
        <div className="flex flex-col gap-4">
          {middleCol.map((item, i) => (
            <div key={i} className="flex w-full">
              <Image
                src={item.img}
                alt={item.source}
                width={800}
                height={item.height || 600}
                className="w-full rounded-lg shadow object-contain"
                style={{ height: item.height ? `${item.height}px` : "auto" }}
              />
            </div>
          ))}
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-4">
          {rightCol.map((item, i) => (
            <div key={i} className="flex w-full">
              <Image
                src={item.img}
                alt={item.source}
                width={800}
                height={item?.height || 600}
                className="w-full rounded-lg shadow object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
