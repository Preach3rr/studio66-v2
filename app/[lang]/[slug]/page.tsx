import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SeoServicePage from "../../components/SeoServicePage";
import {
  getLanguageAlternates,
  getSeoLandingPage,
  seoLandingPages,
} from "../../components/seoLandingData";

type Params = {
  lang: string;
  slug: string;
};

export function generateStaticParams() {
  return seoLandingPages.map((page) => ({
    lang: page.lang,
    slug: page.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const page = getSeoLandingPage(lang, slug);

  if (!page) {
    return {};
  }

  const languageAlternates = getLanguageAlternates(page.id);

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: page.canonicalPath,
      languages: languageAlternates,
    },
    openGraph: {
      type: "website",
      title: page.title,
      description: page.description,
      url: page.canonicalPath,
      locale: lang === "ro" ? "ro_RO" : lang === "da" ? "da_DK" : "en_US",
      images: [
        {
          url: "/logo/studio66.png",
          width: 1200,
          height: 630,
          alt: page.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: ["/logo/studio66.png"],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<Params>;
}) {
  const { lang, slug } = await params;
  const page = getSeoLandingPage(lang, slug);

  if (!page) {
    notFound();
  }

  return (
    <SeoServicePage
      eyebrow={page.eyebrow}
      title={page.title}
      intro={page.intro}
      highlights={page.highlights}
      locationLine={page.locationLine}
      ctaText={page.ctaText}
      ctaHref={page.ctaHref}
      faqs={page.faqs}
      faqTitle={page.faqTitle}
    />
  );
}
