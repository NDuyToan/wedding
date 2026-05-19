import "./globals.css";
import type { Metadata } from "next";
import { Bellota_Text, Marmelad, Oooh_Baby, Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin", "vietnamese"],
  variable: "--font-open-sans",
  display: "swap",
});

const marmelad = Marmelad({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-marmelad",
  display: "swap",
});

const ooohBaby = Oooh_Baby({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-oooh-baby",
  display: "swap",
});

const bellotaText = Bellota_Text({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-bellota-text",
  display: "swap",
});

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
    <html
      lang="vi"
      className={`${openSans.variable} ${marmelad.variable} ${ooohBaby.variable} ${bellotaText.variable}`}
    >
      <body className="bg-white text-gray-900 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
