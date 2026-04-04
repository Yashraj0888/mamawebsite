import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RD Vidyapith | Empowering Students for Academic Excellence",
  description: "Coaching for IIT-JEE, NEET, Foundation & Commerce in India. Experienced faculty, small batches, and top ranks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} ${inter.variable} font-sans antialiased text-slate-800 bg-slate-50 selection:bg-blue-200`}
      >
        {children}
      </body>
    </html>
  );
}
