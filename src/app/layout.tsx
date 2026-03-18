import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Somraj Laskar | Creative Developer",
  description: "Portfolio of Somraj Laskar - Pursuing B.E. CSE Hons. Information Security",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-black text-zinc-100 antialiased selection:bg-white/20`}>
        <div className="vignette-backdrop"></div>
        <div className="cinematic-backdrop"></div>
        {children}
      </body>
    </html>
  );
}
