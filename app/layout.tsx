import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { meta } from "@/lib/meta";

export const metadata: Metadata = {
  metadataBase: new URL(meta.contact.website),
  title: "Treasure Uzoma — Product Engineer",
  description:
    "A minimal portfolio of Treasure Uzoma, a product engineer building thoughtful web products from idea to production. Explore the full portfolio at idolo.dev.",
  keywords: [
    "Treasure Uzoma",
    "product engineer",
    "full-stack developer",
    "web applications",
    "product development",
  ],
  authors: [{ name: "Treasure Uzoma", url: meta.contact.website }],
  creator: "Treasure Uzoma",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Treasure Uzoma",
    title: "Treasure Uzoma — Product Engineer",
    description:
      "A minimal portfolio of Treasure Uzoma, a product engineer. Explore the full portfolio at idolo.dev.",
    images: [
      {
        url: "/images/avatar.png",
        alt: "Treasure Uzoma",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Treasure Uzoma — Product Engineer",
    description:
      "A minimal portfolio of Treasure Uzoma, a product engineer. Explore the full portfolio at idolo.dev.",
    images: ["/images/avatar.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const clashDisplay = localFont({
  src: "../public/fonts/ClashDisplay-Variable.woff2",
  variable: "--font-clash-display",
  weight: "100 900",
  display: "swap",
});

export const switzer = localFont({
  src: "../public/fonts/Switzer-Variable.woff2",
  variable: "--font-switzer",
  weight: "100 900",
  display: "swap",
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body
        className={`${clashDisplay.variable} ${switzer.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
