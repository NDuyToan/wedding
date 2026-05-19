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
          className="bg-[#f9f9f9] rounded-3xl p-10 text-center shadow-lg"
        >
          <Image
            src="/toan.jpg"
            alt="Toản"
            width={160}
            height={160}
            className="w-40 h-40 rounded-full object-cover object-top mx-auto mb-6"
          />

          <h2 className="text-3xl font-bold mb-4">Duy Toản</h2>

          <p className="text-gray-600 leading-8">
            Xin chào mọi người! Mình là Toản — một chàng kỹ sư phần mềm yêu
            thích công nghệ, sống chân thành và khá ít nói. Mình tin rằng trong
            cuộc sống cũng như trong lập trình, sự kiên nhẫn và chân thành luôn
            là nền tảng quan trọng nhất. Với mình, gia đình giống như “hệ thống
            ổn định” để mỗi ngày đều có nơi quay về, yêu thương và sẻ chia.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#f9f9f9] rounded-3xl p-10 text-center shadow-lg"
        >
          <Image
            src="/dung.jpg"
            alt="Dung"
            width={160}
            height={160}
            className="w-40 h-40 rounded-full object-cover object-top mx-auto mb-6"
          />

          <h2 className="text-3xl font-bold mb-4">Trương Dung</h2>

          <p className="text-gray-600 leading-8">
            Còn mình là Dung — một cô nàng kiểm thử phần mềm nhẹ nhàng và giàu
            tình cảm. Nếu anh ấy thích xây dựng mọi thứ từ những dòng code, thì
            mình lại thích chăm chút để mọi điều trở nên trọn vẹn hơn. Mình luôn
            trân trọng những điều giản dị, sự quan tâm chân thành và những
            khoảnh khắc bình yên bên gia đình.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
