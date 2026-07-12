import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://studio66photography.ro"),
  title: {
    default: "Studio66 Photography | Weddings, Events, Portraits, Real Estate",
    template: "%s | Studio66 Photography",
  },
  description:
    "Studio66 Photography offers premium wedding, baptism, event, portrait, real estate and commercial photo-video services in Romania and Denmark.",
  keywords: [
    "wedding photographer Romania",
    "wedding videographer Romania",
    "fotograf nunta Bucuresti",
    "videograf nunta",
    "baptism photography",
    "event photography",
    "real estate photography",
    "commercial photography",
    "Studio66 Photography",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: ["/favicon.png"],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    url: "https://studio66photography.ro/",
    siteName: "Studio66 Photography",
    title: "Studio66 Photography | Weddings, Events, Portraits, Real Estate",
    description:
      "Premium photography and cinematic videography for weddings, baptisms, events, portraits, real estate and commercial projects.",
    images: [
      {
        url: "/logo/studio66-social.png",
        width: 1200,
        height: 630,
        alt: "Studio66 Photography",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio66 Photography",
    description:
      "Premium photography and cinematic videography for weddings, baptisms, events, portraits, real estate and commercial projects.",
    images: ["/logo/studio66-social.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Studio66 Photography",
  image: "https://studio66photography.ro/logo/studio66-social.png",
  url: "https://studio66photography.ro",
  telephone: "+4550172284",
  email: "studio66.photographer@gmail.com",
  areaServed: ["Romania", "Denmark"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bucuresti",
    addressCountry: "RO",
  },
  sameAs: [
    "https://www.facebook.com/silviu0serban",
    "https://www.instagram.com/___studio66___?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="scroll-smooth"
    >
      <body
        className="premium-bg bg-[#090909] text-white antialiased"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}
