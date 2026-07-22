import type { Metadata } from "next";
import { Aleo, DM_Sans } from "next/font/google";
import "./globals.css";

const aleo = Aleo({
  variable: "--font-aleo-serif",
  subsets: ["latin"],
})

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "211 Wealth Branding Guide",
  description: "Branding guidelines made for the non profit organization 211 Wealth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${aleo.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="w-screen min-h-full flex flex-col bg-brand-white overflow-x-hidden">{children}</body>
    </html>
  );
}
