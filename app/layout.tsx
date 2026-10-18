import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const sans = Manrope({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "AgentDesk",
  description: "Reviews aur social media, AI drafts + approval ke saath.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${sans.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
