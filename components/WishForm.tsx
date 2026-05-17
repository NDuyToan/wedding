"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Wish = {
  id: string;
  name: string;
  message: string;
  createdAt: string;
};

const defaultWishes: Wish[] = [
  {
    id: "default-1",
    name: "Gia đình thân mến",
    message:
      "Chúc Toản và Dung luôn yêu thương, đồng hành và có thật nhiều ngày tháng bình an bên nhau.",
    createdAt: "Lời chúc đầu tiên",
  },
];

export default function WishForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [wishes, setWishes] = useState<Wish[]>(() => {
    if (typeof window === "undefined") {
      return defaultWishes;
    }

    const savedWishes = window.localStorage.getItem("wedding-wishes");

    if (!savedWishes) {
      return defaultWishes;
    }

    try {
      return JSON.parse(savedWishes) as Wish[];
    } catch {
      return defaultWishes;
    }
  });

  useEffect(() => {
    window.localStorage.setItem("wedding-wishes", JSON.stringify(wishes));
  }, [wishes]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedMessage) {
      return;
    }

    const newWish: Wish = {
      id: crypto.randomUUID(),
      name: trimmedName,
      message: trimmedMessage,
      createdAt: new Intl.DateTimeFormat("vi-VN", {
        hour: "2-digit",
        minute: "2-digit",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }).format(new Date()),
    };

    setWishes((currentWishes) => [newWish, ...currentWishes]);
    setName("");
    setMessage("");
  };

  return (
    <section className="py-24 px-6 bg-pink-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Gửi Lời Chúc</h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-10"
          >
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-pink-500">
                Lời chúc của bạn
              </p>
              <p className="mt-3 text-gray-600 leading-7">
                Hãy để lại vài lời yêu thương cho cô dâu và chú rể.
              </p>
            </div>

            <div className="space-y-6">
              <input
                type="text"
                placeholder="Tên của bạn"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-4 outline-none focus:border-pink-500"
              />

              <textarea
                placeholder="Lời chúc gửi đến cô dâu chú rể"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
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
            </div>
          </form>

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-pink-500">
                  Sổ lời chúc
                </p>
                <h3 className="mt-3 text-2xl font-bold text-gray-900">
                  {wishes.length} lời chúc
                </h3>
              </div>
            </div>

            <div className="max-h-[520px] space-y-4 overflow-y-auto pr-2">
              {wishes.map((wish) => (
                <article key={wish.id} className="rounded-2xl bg-pink-50 p-5">
                  <div className="mb-3 flex items-center justify-between gap-4">
                    <h4 className="font-bold text-gray-900">{wish.name}</h4>
                    <time className="shrink-0 text-xs text-gray-500">
                      {wish.createdAt}
                    </time>
                  </div>
                  <p className="leading-7 text-gray-600">{wish.message}</p>
                </article>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
