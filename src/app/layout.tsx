import type { Metadata } from "next";
import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Header from "@/componets/Header";
import Footer from "@/componets/Footer";

const notoSerifBengali = Noto_Serif_Bengali({
  variable: "--font-noto-serif-bengali",
  subsets: ["latin", "bengali"],
});

export const metadata: Metadata = {
  title: "বাজার দর",
  description: "বাংলাদেশের নিত্যপ্রয়োজনীয় পণ্যের বাজারদর দেখুন।",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="bn"
      data-theme="light"
      className={`${notoSerifBengali.variable} ${notoSerifBengali.className} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-linear-to-t from-white via-green-50 to-green-50/50">
        <Header />

        <main className="flex-1">{children}</main>

        <Footer />

        <Toaster position="top-center" />
      </body>
    </html>
  );
}