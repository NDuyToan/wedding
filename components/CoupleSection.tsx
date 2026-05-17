"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CoupleSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-blue-50 rounded-3xl p-10 text-center shadow-lg"
        >
          <Image
            src="/toan.jpg"
            alt="Toản"
            width={160}
            height={160}
            className="w-40 h-40 rounded-full object-cover object-top mx-auto mb-6"
          />

          <h2 className="text-3xl font-bold mb-4">Chú Rể</h2>

          <p className="text-gray-600 leading-8">
            Cảm ơn bạn đã hiện diện và cùng chúng tôi lưu giữ khoảnh khắc đáng
            nhớ này.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-blue-50 rounded-3xl p-10 text-center shadow-lg"
        >
          <Image
            src="/dung.jpg"
            alt="Dung"
            width={160}
            height={160}
            className="w-40 h-40 rounded-full object-cover object-top mx-auto mb-6"
          />

          <h2 className="text-3xl font-bold mb-4">Cô Dâu</h2>

          <p className="text-gray-600 leading-8">
            Sự yêu thương và lời chúc của bạn là món quà quý giá trong ngày vui
            của chúng tôi.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
