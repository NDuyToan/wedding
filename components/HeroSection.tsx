"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 text-center text-white">
      <Image
        src="/wedding-hero-bg.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-[#1e3a8a]/20 to-black/55" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2),transparent_48%)]" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto max-w-5xl"
      >
        <p className="mb-5 text-xs font-medium uppercase tracking-[0.6em] text-blue-100 md:text-sm">
          Thiệp Mời Cưới
        </p>

        <h1 className="wedding-script mb-6 text-6xl leading-none text-white drop-shadow-2xl md:text-9xl">
          Toản & Dung
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-lg font-light tracking-[0.22em] text-blue-50 md:text-2xl">
          Trân trọng kính mời bạn đến chung vui cùng chúng tôi
        </p>

        <div className="floating inline-block">
          <div className="border border-white/60 bg-white/20 px-8 py-4 text-sm font-semibold uppercase tracking-[0.32em] text-white shadow-2xl backdrop-blur-md md:text-base">
            27.05.2026
          </div>
        </div>
      </motion.div>
    </section>
  );
}
