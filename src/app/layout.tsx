import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Mustafa Acar - KBB ve Estetik Cerrah",
  description: "Dr. Mustafa Acar ile burun estetiği, kulak burun boğaz tedavileri ve estetik cerrahide uzman hekimlik hizmetleri. Rinoplasti, KBB tedavileri ve ameliyatsız estetik uygulamalar.",
  keywords: "burun estetiği, rinoplasti, KBB, kulak burun boğaz, estetik cerrah, Dr. Mustafa Acar, uyku apnesi, septoplasti, dolgu, botoks",
  authors: [{ name: "Dr. Mustafa Acar" }],
  creator: "Dr. Mustafa Acar",
  publisher: "Dr. Mustafa Acar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Dr. Mustafa Acar - KBB ve Estetik Cerrah",
    description: "Burun estetiği, KBB tedavileri ve estetik cerrahide uzman hekimlik hizmetleri",
    type: "website",
    locale: "tr_TR",
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
    <html lang="tr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
