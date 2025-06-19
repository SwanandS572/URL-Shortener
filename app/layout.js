import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ZapLink - Your trusted URL shortener",
  description: "ZapLink helps you shorten your long URLs",
  icons: {
    icon: [
      { url: '/images/logo2.png', sizes: '512x512', type: 'image/png' },
      { url: '/images/logo2.png', sizes: '192x192', type: 'image/png' },
      { url: '/images/logo2.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/logo2.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/images/logo2.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo2.png" type="image/png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-purple-50`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
