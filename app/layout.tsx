import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thiệp cưới Toản & Dung",
  description: "Ngày vui của Toản và Dung",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="bg-white text-gray-900 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
