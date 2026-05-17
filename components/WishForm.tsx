"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
const WISHES_TABLE = "wishes";

type Wish = {
  id: string;
  name: string;
  message: string;
  createdAt: string | null;
};

type WishRow = {
  id: string;
  name: string;
  message: string;
  created_at: string | null;
};

function mapWish(row: WishRow): Wish {
  return {
    id: row.id,
    name: row.name,
    message: row.message,
    createdAt: row.created_at,
  };
}

function formatWishDate(value: string | null) {
  if (!value) {
    return "";
  }

  return new Intl.DateTimeFormat("vi-VN", {
    hour: "2-digit",
    minute: "2-digit",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date(value));
}

function getSupabaseHeaders() {
  if (!SUPABASE_KEY) {
    throw new Error("Thiếu NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY");
  }

  return {
    apikey: SUPABASE_KEY,
    authorization: `Bearer ${SUPABASE_KEY}`,
    "content-type": "application/json",
  };
}

function getSupabaseEndpoint(query = "") {
  if (!SUPABASE_URL) {
    throw new Error("Thiếu NEXT_PUBLIC_SUPABASE_URL");
  }

  return `${SUPABASE_URL}/rest/v1/${WISHES_TABLE}${query}`;
}

export default function WishForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const loadWishes = async () => {
      try {
        const response = await fetch(
          getSupabaseEndpoint("?select=id,name,message,created_at&order=created_at.desc"),
          {
            headers: getSupabaseHeaders(),
          },
        );

        if (!response.ok) {
          throw new Error("Không thể tải sổ lời chúc");
        }

        const rows = (await response.json()) as WishRow[];
        setWishes(rows.map(mapWish));
      } catch {
        setErrorMessage("Chưa tải được lời chúc. Vui lòng thử lại sau.");
      } finally {
        setIsLoading(false);
      }
    };

    void loadWishes();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedMessage) {
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch(
        getSupabaseEndpoint("?select=id,name,message,created_at"),
        {
          method: "POST",
          headers: {
            ...getSupabaseHeaders(),
            prefer: "return=representation",
          },
          body: JSON.stringify({
            name: trimmedName,
            message: trimmedMessage,
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Không thể gửi lời chúc");
      }

      const rows = (await response.json()) as WishRow[];
      const newWish = rows[0];

      if (newWish) {
        setWishes((currentWishes) => [mapWish(newWish), ...currentWishes]);
      }

      setName("");
      setMessage("");
    } catch {
      setErrorMessage("Chưa gửi được lời chúc. Vui lòng thử lại sau.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 px-6 bg-blue-50">
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
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
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
                maxLength={100}
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-4 outline-none focus:border-blue-500"
              />

              <textarea
                placeholder="Lời chúc gửi đến cô dâu chú rể"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                maxLength={500}
                rows={5}
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-4 outline-none focus:border-blue-500"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white py-4 rounded-xl font-semibold transition"
              >
                {isSubmitting ? "Đang gửi..." : "Gửi lời chúc"}
              </button>

              {errorMessage && (
                <p className="text-sm leading-6 text-red-500">{errorMessage}</p>
              )}
            </div>
          </form>

          <div className="flex h-[620px] flex-col bg-white rounded-3xl shadow-xl p-8 md:p-10">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
                  Sổ lời chúc
                </p>
              </div>
            </div>

            <div className="min-h-0 flex-1 space-y-4 overflow-y-auto pr-2">
              {isLoading ? (
                <p className="rounded-2xl bg-blue-50 p-5 text-gray-600">
                  Đang tải lời chúc...
                </p>
              ) : wishes.length === 0 ? (
                <p className="rounded-2xl bg-blue-50 p-5 text-gray-600">
                  Chưa có lời chúc nào. Hãy là người đầu tiên gửi lời chúc đến
                  cô dâu chú rể.
                </p>
              ) : (
                wishes.map((wish) => (
                  <article key={wish.id} className="rounded-2xl bg-blue-50 p-5">
                    <div className="mb-3 flex items-center justify-between gap-4">
                      <h4 className="font-bold text-gray-900">{wish.name}</h4>
                      <time className="shrink-0 text-xs text-gray-500">
                        {formatWishDate(wish.createdAt)}
                      </time>
                    </div>
                    <p className="leading-7 text-gray-600">{wish.message}</p>
                  </article>
                ))
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
