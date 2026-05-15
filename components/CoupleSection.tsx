"use client";

import { motion } from "framer-motion";

export default function CoupleSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-pink-50 rounded-3xl p-10 text-center shadow-lg"
        >
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
            alt="groom"
            className="w-40 h-40 rounded-full object-cover mx-auto mb-6"
          />

          <h2 className="text-3xl font-bold mb-4">The Groom</h2>

          <p className="text-gray-600 leading-8">
            A beautiful love story begins with two hearts becoming one.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-pink-50 rounded-3xl p-10 text-center shadow-lg"
        >
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
            alt="bride"
            className="w-40 h-40 rounded-full object-cover mx-auto mb-6"
          />

          <h2 className="text-3xl font-bold mb-4">The Bride</h2>

          <p className="text-gray-600 leading-8">
            Together we create memories that last forever.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
