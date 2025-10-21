"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Sponsor {
  displayName: string;
  profileImageUrl: string;
}

interface SponsorsWallProps {
  sponsors: Sponsor[];
}

export default function SponsorsWall({ sponsors }: SponsorsWallProps) {
  const total = sponsors.length;

  return (
    <div className="relative flex flex-col items-center text-center bg-white py-8 h-[400px] md:h-[450px]">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
        Thank you for your support — #{total}{" "}
        {total === 1 ? "member" : "members"}
      </h2>

      {/* Scrollable Sponsors List */}
      <div
        className="
          flex flex-wrap justify-center gap-6 md:gap-8 
          overflow-y-auto overflow-x-hidden  /* ✅ Disable horizontal scroll */
          px-4 py-2 
          scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100
          w-full relative
        "
      >
        {sponsors.map((sponsor, index) => (
          <motion.div
            key={index}
            className="relative group"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          >
            {/* Avatar */}
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-blue-500 shadow-lg">
              <Image
                src={sponsor.profileImageUrl}
                alt={sponsor.displayName}
                width={96}
                height={96}
                unoptimized
                className="object-cover w-full h-full"
              />
            </div>

            {/* Tooltip (Hover Name) */}
            <div
              className="
                absolute -bottom-6 left-1/2 -translate-x-1/2 
                bg-gray-800 text-white text-xs md:text-sm px-3 py-1 rounded-lg 
                opacity-0 group-hover:opacity-100 
                transition-all duration-300 whitespace-nowrap
                z-50 shadow-md pointer-events-none
              "
            >
              {sponsor.displayName}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
