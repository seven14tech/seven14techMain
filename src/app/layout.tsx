import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Seven14Tech | Premium Web & Desktop Development",
    template: "%s | Seven14Tech",
  },
  description: "Seven14Tech is a creative agency specializing in premium web design, SEO growth, and desktop application development. We build digital experiences that matter.",
  keywords: ["Web Development", "Desktop Apps", "SEO", "Creative Agency", "Next.js", "React", "Design"],
  authors: [{ name: "Seven14Tech Team" }],
  creator: "Seven14Tech",
  publisher: "Seven14Tech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Seven14Tech | Premium Web & Desktop Development",
    description: "Building digital experiences that matter. Expert web and desktop development services.",
    url: "https://seven14tech.com", // Replace with actual domain
    siteName: "Seven14Tech",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seven14Tech",
    description: "Premium Web & Desktop Development",
    creator: "@seven14tech",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
