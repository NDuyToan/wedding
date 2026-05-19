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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://wedding.nguyenduytoan.io.vn";
const siteTitle = "Thiệp cưới Toản & Dung";
const siteDescription =
  "Trân trọng kính mời bạn đến chung vui trong ngày cưới của Toản và Dung. Xem thông tin lễ cưới, lịch trình, album ảnh và gửi lời chúc tại đây.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteTitle}`,
  },
  description: siteDescription,
  applicationName: siteTitle,
  authors: [{ name: "Toản & Dung" }],
  creator: "Toản & Dung",
  publisher: "Toản & Dung",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "/",
    siteName: siteTitle,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Thiệp cưới Toản và Dung",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
