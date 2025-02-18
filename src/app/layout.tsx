import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ASTRIX",
  description: "Exploring the outer edges of possibility. Beyond limits, beyond time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0F1117] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
} 