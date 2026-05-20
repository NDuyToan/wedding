"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "/HILI9532.jpg",
  "/HILI9960.jpg",
  "/HILI9638.jpg",
  "/HILI9999.jpg",
  "/HILI9620.jpg",
  "/HILI9714.jpg",
  "/HILI9761.jpg",
  "/HILI9801.jpg",
  "/HILI9925.jpg",
  "/HILI0026.jpg",
  "/HILI9388.jpg",
  "/HILI9454.jpg",
];

export default function GallerySection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Khoảnh Khắc Của Chúng Tôi
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative aspect-2/3 w-full overflow-hidden rounded-2xl"
            >
              <Image
                src={image}
                alt="Khoảnh khắc cưới"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover object-top duration-300 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
