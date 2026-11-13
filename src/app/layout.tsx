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

const siteUrl = "https://sbnfreestyler.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: "%s | SBN Freestyler",
  },
  description:
    "Sinan Basim is a football freestyler based in Doha, Qatar, available for live performances, corporate events, sports events and brand activations.",
  applicationName: "SBN Freestyler",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "SBN Freestyler",
    title: "Football Freestyler Qatar | Sinan Basim",
    description:
      "Book Sinan Basim, a football freestyler based in Doha, Qatar, for live performances, corporate events, sports events and brand activations.",
    locale: "en_QA",
    images: [
      {
        url: "/images/hero-sea-kick.jpg",
        width: 1200,
        height: 630,
        alt: "Sinan Basim performing football freestyle in Qatar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Football Freestyler Qatar | Sinan Basim",
    description:
      "Football freestyle performances in Qatar for events, brands and sports activations. Enquire to book Sinan Basim.",
    images: ["/images/hero-sea-kick.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
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
