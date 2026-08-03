import type { Metadata } from "next";
import { Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";

const montserrat = Montserrat({
  display: "optional",
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nguyen Ngoc Dung — Frontend Developer",
  description: "Frontend Developer with 3+ years of experience in React/TypeScript, real-time systems, and complex data visualization.",
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='12' r='2.1' fill='%2361DAFB'/%3E%3Cg stroke='%2361DAFB' stroke-width='1.2' fill='none'%3E%3Cellipse cx='12' cy='12' rx='10' ry='4.2'/%3E%3Cellipse cx='12' cy='12' rx='10' ry='4.2' transform='rotate(60 12 12)'/%3E%3Cellipse cx='12' cy='12' rx='10' ry='4.2' transform='rotate(120 12 12)'/%3E%3C/g%3E%3C/svg%3E",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${geistMono.variable} antialiased`}
    >
      <body className="bg-zinc-950 text-zinc-50 overflow-x-hidden">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
