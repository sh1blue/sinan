import type { MetadataRoute } from "next";

const siteUrl = "https://sbnfreestyler.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: siteUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/football-freestyler-doha`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/about-us`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/contact-us`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/commercial-brands`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/recent-work`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    {
      url: `${siteUrl}/freestyle-football-hire/corporate-events`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/freestyle-football-hire/product-activations`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/freestyle-football-hire/sports-events`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/freestyle-football-hire/weddings-birthdays`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
