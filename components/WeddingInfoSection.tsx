"use client";

import { motion } from "framer-motion";
import { Navigation } from "lucide-react";

const families = [
  {
    label: "Nhà Nam",
    parents: ["Ông Nguyễn Duy Tứ", "Bà Hồ Thị Tâm"],
    address: "Thôn Thu Thừ, xã Trường Ninh, Quảng Trị",
  },
  {
    label: "Nhà Nữ",
    parents: ["Ông Trương Văn Danh", "Bà Nguyễn Thị Tuyết"],
    address: "Xóm Vĩnh Thành, xã Tiên Đồng, Nghệ An",
  },
];

const weddingDays = [
  {
    label: "Nhà Nữ",
    date: "Thứ Ba, 26.05.2026",
    time: "Ngày vui bên gia đình cô dâu",
    place: "Tư gia nhà nữ",
    mapUrl: "https://goo.gl/maps/wypav7zmNijA7qd9A",
  },
  {
    label: "Nhà Nam",
    date: "Thứ Tư, 27.05.2026",
    time: "Hôn lễ lúc 09:00, tiệc chung vui lúc 10:30",
    place: "Sân Bóng Cồn Độ, thôn Thu Thừ, xã Trường Ninh, Quảng Trị",
    mapUrl: "https://goo.gl/maps/2VB27mBendNEVVcU8",
  },
];

const weekDays = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];

type CalendarCell =
  | {
      type: "blank";
      key: string;
    }
  | {
      type: "day";
      key: string;
      day: number;
      highlight: boolean;
    };

const calendarCells: CalendarCell[] = [
  ...Array.from({ length: 4 }, (_, index) => ({
    type: "blank" as const,
    key: `blank-${index}`,
  })),
  ...Array.from({ length: 31 }, (_, index) => {
    const day = index + 1;

    return {
      type: "day" as const,
      key: `day-${day}`,
      day,
      highlight: day === 26 || day === 27,
    };
  }),
];

export default function WeddingInfoSection() {
  return (
    <section className="bg-[#eff6ff] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.38em] text-blue-400">
            Trân trọng kính mời
          </p>
          <h2 className="text-4xl font-bold text-stone-800 md:text-5xl">
            Thông Tin Lễ Cưới
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.08fr]">
          <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
              {families.map((family, index) => (
                <motion.div
                  key={family.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="border border-blue-100 bg-white p-7 shadow-sm"
                >
                  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-blue-500">
                    {family.label}
                  </p>
                  <div className="space-y-2 text-lg font-semibold text-stone-800">
                    {family.parents.map((parent) => (
                      <p key={parent}>{parent}</p>
                    ))}
                  </div>
                  <p className="mt-4 leading-7 text-stone-600">
                    {family.address}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              viewport={{ once: true }}
              className="border border-blue-100 bg-white p-7 shadow-sm"
            >
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-blue-500">
                Cô dâu & chú rể
              </p>
              <p className="wedding-script text-5xl leading-tight text-[#2563eb]">
                Nguyễn Duy Toản
              </p>
              <p className="my-3 text-sm uppercase tracking-[0.4em] text-stone-400">
                cùng
              </p>
              <p className="wedding-script text-5xl leading-tight text-[#2563eb]">
                Trương Thị Dung
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            viewport={{ once: true }}
            className="border border-blue-100 bg-white p-6 shadow-sm md:p-8"
          >
            <div className="mb-8 flex flex-col gap-3 text-center md:flex-row md:items-end md:justify-between md:text-left">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.34em] text-blue-500">
                  Tháng 05 - 2026
                </p>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-2 text-center">
              {weekDays.map((day) => (
                <div
                  key={day}
                  className="py-2 text-xs font-bold uppercase tracking-[0.18em] text-stone-400"
                >
                  {day}
                </div>
              ))}

              {calendarCells.map((cell) => (
                <div
                  key={cell.key}
                  className="relative flex aspect-square items-center justify-center overflow-hidden border border-blue-50 bg-[#f8fbff] text-sm font-semibold text-stone-600"
                >
                  {cell.type === "day" && (
                    <>
                      {cell.highlight && (
                        <span className="absolute text-5xl leading-none text-blue-400">
                          ♥
                        </span>
                      )}
                      <span
                        className={
                          cell.highlight
                            ? "relative z-10 text-base font-bold text-white"
                            : "relative z-10"
                        }
                      >
                        {cell.day}
                      </span>
                    </>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {weddingDays.map((event) => (
                <div key={event.label} className="border border-blue-100 p-5">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.28em] text-blue-500">
                    {event.label}
                  </p>
                  <p className="font-semibold text-stone-800">{event.date}</p>
                  <p className="mt-2 text-sm leading-6 text-stone-600">
                    {event.time}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-stone-500">
                    {event.place}
                  </p>
                  <a
                    href={event.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-500 transition hover:text-blue-600"
                  >
                    Mở Google Maps
                    <Navigation size={16} />
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
