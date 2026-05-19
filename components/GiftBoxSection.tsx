"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Check, Copy, Download, Gift, X } from "lucide-react";

const accounts = [
  {
    role: "Chú rể",
    name: "Nguyễn Duy Toản",
    bank: "Vietcombank",
    accountNumber: "0041000263628",
    image: "/tk_toan.jpeg",
    fileName: "tai-khoan-nguyen-duy-toan.jpeg",
  },
  {
    role: "Cô dâu",
    name: "Trương Thị Dung",
    bank: "MB Bank",
    accountNumber: "85847144201996",
    image: "/tk_dung.jpg",
    fileName: "tai-khoan-truong-thi-dung.jpg",
  },
];

export default function GiftBoxSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);

  const handleCopy = async (accountNumber: string) => {
    await navigator.clipboard.writeText(accountNumber);
    setCopiedAccount(accountNumber);
    window.setTimeout(() => setCopiedAccount(null), 1800);
  };

  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <motion.button
          type="button"
          onClick={() => setIsOpen(true)}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto flex max-w-md cursor-pointer flex-col items-center border border-[#e2e7ec] bg-[#ffffff] px-7 py-8 text-center shadow-sm transition hover:border-[#cbd7dd] hover:bg-[#f9f9f9] hover:shadow-xl"
        >
          <span className="mb-5 flex size-14 items-center justify-center rounded-full bg-[#8eaeba] text-white shadow-lg shadow-[#e2e7ec]">
            <Gift size={26} />
          </span>
          <span className="text-sm font-semibold uppercase tracking-[0.32em] text-[#8eaeba]">
            Mở hộp mừng cưới
          </span>
          <span className="mt-4 text-sm leading-7 text-stone-600">
            Gửi gắm yêu thương và những lời chúc tốt đẹp nhất đến cô dâu, chú rể
          </span>
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/60 px-4 py-8 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Thông tin hộp mừng cưới"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto bg-white p-5 shadow-2xl md:p-8"
            >
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="absolute right-4 top-4 z-10 flex size-10 items-center justify-center rounded-full bg-[#f9f9f9] text-[#8eaeba] transition hover:bg-[#e2e7ec]"
                aria-label="Đóng hộp mừng cưới"
              >
                <X size={20} />
              </button>

              <div className="mb-7 pr-12">
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#8eaeba]">
                  Hộp mừng cưới
                </p>
                <h3 className="mt-3 text-2xl font-bold text-stone-800 xl:text-3xl">
                  Thông Tin Tài Khoản
                </h3>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {accounts.map((account) => {
                  const isCopied = copiedAccount === account.accountNumber;

                  return (
                    <article
                      key={account.accountNumber}
                      className="border border-[#e2e7ec] bg-[#ffffff] p-5"
                    >
                      <div className="relative mx-auto aspect-[3/4] w-full max-w-[260px] bg-[#f9f9f9]">
                        <Image
                          src={account.image}
                          alt={`Mã QR tài khoản ${account.name}`}
                          fill
                          sizes="260px"
                          className="object-contain"
                        />
                      </div>

                      <div className="mt-5">
                        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-[#8eaeba]">
                          {account.role}
                        </p>
                        <h4 className="text-xl font-bold text-stone-800">
                          {account.name}
                        </h4>

                        <div className="mt-4 space-y-2 text-sm text-stone-600">
                          <p>
                            <span className="font-semibold text-stone-800">
                              Ngân hàng:
                            </span>{" "}
                            {account.bank}
                          </p>
                          <p>
                            <span className="font-semibold text-stone-800">
                              Số tài khoản:
                            </span>{" "}
                            <span className="font-bold tracking-[0.1em] text-[#567d8c]">
                              {account.accountNumber}
                            </span>
                          </p>
                        </div>

                        <div className="mt-5 grid gap-3 sm:grid-cols-2">
                          <button
                            type="button"
                            onClick={() =>
                              void handleCopy(account.accountNumber)
                            }
                            className="inline-flex items-center justify-center gap-2 bg-[#8eaeba] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#567d8c]"
                          >
                            {isCopied ? (
                              <Check size={18} />
                            ) : (
                              <Copy size={18} />
                            )}
                            {isCopied ? "Đã copy" : "Copy STK"}
                          </button>

                          <a
                            href={account.image}
                            download={account.fileName}
                            className="inline-flex items-center justify-center gap-2 border border-[#cbd7dd] px-4 py-3 text-sm font-semibold text-[#567d8c] transition hover:border-[#8eaeba] hover:bg-[#f9f9f9]"
                          >
                            <Download size={18} />
                            Tải ảnh QR
                          </a>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
