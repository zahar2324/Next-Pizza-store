import type { Metadata } from "next";
import { Geist,  Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});



const nunito = Nunito({
 subsets: ['cyrillic'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: "Pizza shop | Next.js",
  description: "A simple pizza shop application built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${nunito.className} antialiased`}
      >
        <Header/>
        <main className="min-h-100vh">
        {children}
        </main>
        
      </body>
    </html>
  );
}
