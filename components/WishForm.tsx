"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function WishForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 px-6 bg-pink-50">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl p-10"
        >
          <h2 className="text-4xl font-bold text-center mb-10">
            Gửi Lời Chúc
          </h2>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                placeholder="Tên của bạn"
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-4 outline-none focus:border-pink-500"
              />

              <textarea
                placeholder="Lời chúc gửi đến cô dâu chú rể"
                rows={5}
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-4 outline-none focus:border-pink-500"
              />

              <button
                type="submit"
                className="w-full bg-pink-500 hover:bg-pink-600 text-white py-4 rounded-xl font-semibold transition"
              >
                Gửi lời chúc
              </button>
            </form>
          ) : (
            <div className="text-center py-10">
              <h3 className="text-3xl font-bold text-pink-500 mb-4">
                Cảm ơn bạn
              </h3>

              <p className="text-gray-600">
                Lời chúc của bạn đã được gửi thành công.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
