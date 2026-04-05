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
  title: "RD Vidyapeeth | Best Coaching for IIT-JEE, NEET & Foundation in Greater Noida West",
  description: "Accelerate your academic success with RD Vidyapeeth. Expert coaching for IIT-JEE, NEET, Classes 7th-12th Foundation & Commerce. Greater Noida's top-rated faculty led by Rajnish Kumar Singh & Dharmendra Kumar Pandey. Enroll today!",
  keywords: [
    "RD Vidyapeeth",
    "RD Vidyapeeth Noida",
    "Best JEE coaching in Greater Noida West",
    "Top NEET institute in Noida",
    "Foundation classes Classes 7 to 10 Noida",
    "IIT-JEE preparation Greater Noida",
    "Commerce coaching 11th 12th Greater Noida West",
    "Rajnish Kumar Singh faculty",
    "Dharmendra Kumar Pandey expert",
  ],
  authors: [{ name: "RD Vidyapeeth Team" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://rdvidyapeeth.com",
    title: "RD Vidyapeeth | Top Coaching Institute for JEE & NEET",
    description: "Premium academic coaching with over 20 years of expertise. Join Greater Noida's best faculty for IIT-JEE, NEET, and Foundation programs.",
    siteName: "RD Vidyapeeth",
    images: [
      {
        url: "/images/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "RD Vidyapeeth Leadership",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RD Vidyapeeth | Greater Noida West's Best Coaching",
    description: "Lead your way to top ranks in JEE and NEET with our expert mentorship.",
    images: ["/images/logo.jpeg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/images/logo.jpeg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
