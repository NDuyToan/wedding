"use client";

import { motion } from "framer-motion";

const events = [
  {
    time: "26.05",
    title: "Ngày vui bên nhà nữ",
  },
  {
    time: "09:00",
    title: "Lễ thành hôn tại tư gia nhà nam",
  },
  {
    time: "10:30",
    title: "Tiệc chung vui tại Sân Bóng Cồn Độ",
  },
];

export default function TimelineSection() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Lịch Trình Ngày Cưới
        </h2>

        <div className="space-y-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md p-6 flex justify-between items-center"
            >
              <span className="text-blue-500 font-bold text-lg">
                {event.time}
              </span>

              <span className="font-medium">{event.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
