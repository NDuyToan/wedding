import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wedding Invitation",
  description: "Our Wedding Day",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
