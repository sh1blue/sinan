import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import SiteChrome from "@/components/SiteChrome";
import { site } from "@/data/site";

const display = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: `${site.name} | ${site.tagline}`,
  description:
    "Sinan Basim (Sbn Freestyler) — football freestyler and content creator based in Doha, Qatar. FIFA World Cup & AFC Asian Cup Fan Zone performer, 22M+ view content, available for hire.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} font-body antialiased`}>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}

