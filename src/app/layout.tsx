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
  title: 'Jay Jhaveri Portfolio',
  description: 'Senior Software Engineer specializing in AI-driven mobile development',
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
          {children}
          <Footer /> {/* 👈 Add this Footer below all page content */}
        </div>
      </body>
    </html>
  )
}