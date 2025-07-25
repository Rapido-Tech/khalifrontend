import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { candara, neoteric } from "@/styles/fonts";
import "./globals.css";
import "rc-slider/assets/index.css";
import { Suspense } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AppProvider } from "@/contexts/AppProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${candara.variable} ${neoteric.variable} antialiased`}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <AppProvider>
            <Header />
            {children}
            <Footer />
          </AppProvider>
        </Suspense>
      </body>
    </html>
  );
}
