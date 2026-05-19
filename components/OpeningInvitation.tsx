"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function OpeningInvitation() {
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleOpen = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.55;
      void audioRef.current.play();
    }

    setIsOpen(true);
  };

  return (
    <>
      <audio ref={audioRef} src="/wedding-music.mp3" loop preload="auto" />

      <AnimatePresence>
        {!isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#3d5963]/75 px-5 backdrop-blur-sm"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <motion.button
              type="button"
              onClick={handleOpen}
              className="group relative w-full max-w-[360px] cursor-pointer border-0 bg-transparent p-0 text-left"
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -24, scale: 1.04 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              aria-label="Chạm để mở thiệp cưới"
            >
              <span className="absolute -inset-8 rounded-full bg-[#e2e7ec]/20 blur-3xl" />
              <span className="relative block rounded-[10px] border border-white/70 bg-[#f9f9f9] p-4 shadow-2xl shadow-black/30">
                <span className="block rounded-[8px] border border-[#cbd7dd]/80 p-8 text-center">
                  <span className="mb-7 block text-[11px] font-medium uppercase tracking-[0.5em] text-[#8eaeba]">
                    Thiệp Mời Cưới
                  </span>
                  <span className="wedding-script block text-5xl leading-none text-[#8eaeba]">
                    Toản & Dung
                  </span>
                  <span className="mx-auto my-7 block h-px w-24 bg-[#cbd7dd]" />
                  <span className="block text-sm uppercase tracking-[0.38em] text-stone-500">
                    chạm để mở
                  </span>
                </span>
              </span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
