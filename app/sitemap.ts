import type { MetadataRoute } from "next";
import { seoLandingPages } from "./components/seoLandingData";
import { seoVenuePages } from "./components/seoVenueData";

const baseUrl = "https://studio66photography.ro";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const corePages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      changeFrequency: "weekly",
      priority: 1,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/cinematic-storytelling/`,
      changeFrequency: "weekly",
      priority: 0.8,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/fotograf-nunta-bucuresti/`,
      changeFrequency: "weekly",
      priority: 0.9,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/videograf-nunta-bucuresti/`,
      changeFrequency: "weekly",
      priority: 0.9,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/fotograf-botez-bucuresti/`,
      changeFrequency: "weekly",
      priority: 0.8,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sedinta-foto-cuplu-bucuresti/`,
      changeFrequency: "weekly",
      priority: 0.8,
      lastModified: new Date(),
    },
  ];

  const localizedPages: MetadataRoute.Sitemap = seoLandingPages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    changeFrequency: "weekly",
    priority: 0.8,
    lastModified: new Date(),
  }));

  const venuePages: MetadataRoute.Sitemap = seoVenuePages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    changeFrequency: "weekly",
    priority: 0.75,
    lastModified: new Date(),
  }));

  return [...corePages, ...localizedPages, ...venuePages];
}
