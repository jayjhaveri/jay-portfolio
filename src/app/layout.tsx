import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import './globals.css'
import Navbar from './components/navbar'
import Footer from "./components/footer";

export const metadata = {
  title: 'Jay Jhaveri',
  description: 'Engineering intelligent solutions by blending mobile, AI, and automation.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800 antialiased">
        <div className="max-w-5xl mx-auto px-6">
          <Navbar />
          <main className="max-w-5xl mx-auto px-6">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}