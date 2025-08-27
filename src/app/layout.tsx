import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StructuredData from "@/components/structured-data";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  preload: true,
  variable: '--font-inter', // CSS variable
})


export const metadata: Metadata = {
  metadataBase: new URL('https://yourdigitalagency.com'),
  title: {
    default: "Digital Agency - Built by Great Teams",
    template: "%s | Digital Agency"
  },
  description: "We are a leading digital agency that builds exceptional digital experiences for great teams. Specializing in web development, design, and digital transformation.",
  keywords: ["digital agency", "web development", "design", "digital transformation", "great teams", "web design"],
  authors: [{ name: "Digital Agency Team" }],
  creator: "Digital Agency",
  publisher: "Digital Agency",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdigitalagency.com",
    siteName: "Digital Agency",
    title: "Digital Agency - Built by Great Teams",
    description: "We are a leading digital agency that builds exceptional digital experiences for great teams.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Digital Agency - Built by Great Teams",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Agency - Built by Great Teams",
    description: "We are a leading digital agency that builds exceptional digital experiences for great teams.",
    images: ["/og-image.jpg"],
    creator: "@digitalagency",
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
        className={`${inter.variable} antialiased min-h-screen bg-background text-foreground dark:bg-black dark:text-white`}
      >
        <div className="relative flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
