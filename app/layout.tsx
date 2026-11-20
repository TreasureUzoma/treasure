import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Treasure Uzoma — Product Engineer",
  description: "Treasure builds products from first idea to production.",
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
