import type { MetadataRoute } from "next";
import {
  getLanguageAlternates,
  seoLandingPages,
} from "./components/seoLandingData";
import {
  getVenueLanguageAlternates,
  seoVenuePages,
} from "./components/seoVenueData";

const baseUrl = "https://studio66photography.ro";

const homeImages = [
  "/images/hero-web/hero1.webp",
  "/images/about-studio66-couple.png",
  ...Array.from({ length: 24 }, (_, index) => `/portfolio-web/Weddings/${index + 1}.webp`),
  ...Array.from({ length: 15 }, (_, index) => `/portfolio-web/Christenings/${index + 1}.webp`),
  ...Array.from({ length: 8 }, (_, index) => `/portfolio-web/Events/${index + 1}.webp`),
  ...Array.from({ length: 4 }, (_, index) => `/portfolio-web/Portraits/${index + 1}.webp`),
].map((path) => `${baseUrl}${path}`);

function absoluteLanguageAlternates(alternates: Record<string, string>) {
  return Object.fromEntries(
    Object.entries(alternates).map(([language, path]) => [language, `${baseUrl}${path}`]),
  );
}

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const corePages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      changeFrequency: "weekly",
      priority: 1,
      lastModified: new Date(),
      images: homeImages,
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
    alternates: {
      languages: absoluteLanguageAlternates(getLanguageAlternates(page.id)),
    },
    changeFrequency: "weekly",
    priority: 0.8,
    lastModified: new Date(),
  }));

  const venuePages: MetadataRoute.Sitemap = seoVenuePages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    alternates: {
      languages: absoluteLanguageAlternates(getVenueLanguageAlternates(page.id)),
    },
    changeFrequency: "weekly",
    priority: 0.75,
    lastModified: new Date(),
  }));

  return [...corePages, ...localizedPages, ...venuePages];
}
