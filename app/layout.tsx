import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import type { Viewport } from "next";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "Check",
  description: "Minimalist Checklist",
  openGraph: {
    title: "Check",
    description: "Minimalist Checklist",
    locale: "en",
    type: "website",
    siteName: "Check",
    url: "https://minimalist-checklist.vercel.app",
    images: [
      {
        url: "https://i.ibb.co/LxPxzMj/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Minimalist Checklist",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
