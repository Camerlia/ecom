import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"
import "./globals.css";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wishful App",
  description: "Shop the latest 2025 fashion trends! Wishful App brings you personalized style, from **Athleisure** to **Oversized** fits and **Sustainable Clothing**. Download now for exclusive sales & your perfect outfit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="mx-auto p-4 sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
          <Navbar />
          {children}
          <Footer />
          <ToastContainer />
        </div>
      </body>
    </html>
  );
}
