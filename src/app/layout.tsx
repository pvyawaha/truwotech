import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "TruwoTech - Engineering Tomorrow's Technology",
    template: "%s | TruwoTech",
  },
  description:
    "TruwoTech delivers cutting-edge solutions in drones, electric vehicles, electric water sports, embedded systems, IoT, and AI at the edge. Engineering the future of connected technology.",
  keywords: [
    "drones",
    "electric vehicles",
    "EV",
    "electric water sports",
    "embedded systems",
    "IoT",
    "AI at the edge",
    "edge computing",
    "product development",
    "hardware engineering",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
