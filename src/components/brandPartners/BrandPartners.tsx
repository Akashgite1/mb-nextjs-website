"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { brandPartnersList } from "./brandPartnersList";
const partners = brandPartnersList;
export default function BrandPartners () {
  const hasPartners = brandPartnersList && brandPartnersList.length > 0;

  return (
    <motion.section
      className="mt-8 mb-10 p-6 bg-white/80 dark:bg-gray-900/80 shadow-xl rounded-2xl border border-gray-200 dark:border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800 dark:text-gray-100">
        Brand Partners
      </h2>

      {hasPartners ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {partners.map((partner, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="cursor-pointer flex flex-col items-center justify-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md transition"
              onClick={() => window.open(partner.url, "_blank")}
            >
              <div className="relative w-28 h-20 p-3">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain rounded-md"
                />
              </div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                {partner.name}
              </p>
            </motion.div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-400 text-xl italic mt-6">
          Use this space to reach 2 lakh people 🚀
        </p>
      )}
    </motion.section>
  );
}
