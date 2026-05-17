"use client";

import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
  "https://images.unsplash.com/photo-1520854221256-17451cc331bf",
  "https://images.unsplash.com/photo-1519741497674-611481863552",
  "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8",
];

export default function GallerySection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Khoảnh Khắc Của Chúng Tôi</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt="Khoảnh khắc cưới"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-2xl h-56 w-full object-cover hover:scale-105 duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
