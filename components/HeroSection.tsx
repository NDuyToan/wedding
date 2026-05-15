"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="min-h-screen gradient-bg flex items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="uppercase tracking-[6px] text-pink-500 mb-4 text-sm md:text-base">
          Wedding Invitation
        </p>

        <h1 className="text-5xl md:text-8xl font-bold text-gray-800 mb-6">
          Toản & Dung
        </h1>

        <p className="text-gray-600 text-lg md:text-2xl mb-8">
          We are getting married
        </p>

        <div className="floating inline-block">
          <div className="bg-pink-500 text-white px-8 py-4 rounded-full shadow-lg">
            27.05.2026
          </div>
        </div>
      </motion.div>
    </section>
  );
}
