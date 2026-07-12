import type { Metadata } from "next";
import ShowreelGallery from "../components/ShowreelGallery";

export const metadata: Metadata = {
  title: "Cinematic Storytelling Showreel",
  description:
    "Watch Studio66 cinematic storytelling showreel: wedding films, event highlights and professional 4K videography.",
  alternates: {
    canonical: "/cinematic-storytelling/",
  },
  openGraph: {
    title: "Studio66 Showreel",
    description:
      "Watch Studio66 cinematic storytelling showreel for weddings, events and premium video production.",
    url: "https://studio66photography.ro/cinematic-storytelling/",
    images: [
      {
        url: "/thumbnails/0.jpg",
        width: 1200,
        height: 630,
        alt: "Studio66 Showreel",
      },
    ],
  },
};

export default function Page() {
  return <ShowreelGallery />;
}