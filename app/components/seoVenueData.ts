import type { Locale } from "./seoLandingData";

type VenueServiceKey = "wedding-photo" | "wedding-video";

type VenueFaq = {
  question: string;
  answer: string;
};

type VenueServiceSeed = {
  key: VenueServiceKey;
  slugPrefix: Record<Locale, string>;
  label: Record<Locale, string>;
  ctaText: Record<Locale, string>;
  highlights: Record<Locale, string[]>;
  faqTitle: Record<Locale, string>;
};

type VenueSeed = {
  key: string;
  slug: string;
  name: Record<Locale, string>;
  city: Record<Locale, string>;
};

export type SeoVenuePage = {
  id: string;
  lang: Locale;
  slug: string;
  path: string;
  canonicalPath: string;
  title: string;
  description: string;
  eyebrow: string;
  intro: string;
  highlights: string[];
  locationLine: string;
  ctaText: string;
  ctaHref: string;
  faqTitle: string;
  faqs: VenueFaq[];
};

const locales: Locale[] = ["ro", "en", "da"];

const venueServices: VenueServiceSeed[] = [
  {
    key: "wedding-photo",
    slugPrefix: {
      ro: "fotograf-nunta",
      en: "wedding-photographer",
      da: "bryllupsfotograf",
    },
    label: {
      ro: "Fotograf Nunta",
      en: "Wedding Photographer",
      da: "Bryllupsfotograf",
    },
    ctaText: {
      ro: "Solicita oferta",
      en: "Request an offer",
      da: "Faa et tilbud",
    },
    faqTitle: {
      ro: "Intrebari frecvente",
      en: "Frequently asked questions",
      da: "Ofte stillede spoergsmaal",
    },
    highlights: {
      ro: [
        "Acoperire completa la locatie",
        "Cadre naturale pentru ceremonie si receptie",
        "Editare premium cu look cinematic",
        "Galerie online privata",
      ],
      en: [
        "Full on-site wedding coverage",
        "Natural moments from ceremony and reception",
        "Premium cinematic editing",
        "Private online gallery",
      ],
      da: [
        "Komplet bryllupsdaekning pa lokation",
        "Naturlige billeder fra ceremoni og fest",
        "Premium redigering med filmisk look",
        "Privat online galleri",
      ],
    },
  },
  {
    key: "wedding-video",
    slugPrefix: {
      ro: "videograf-nunta",
      en: "wedding-videographer",
      da: "bryllupsvideograf",
    },
    label: {
      ro: "Videograf Nunta",
      en: "Wedding Videographer",
      da: "Bryllupsvideograf",
    },
    ctaText: {
      ro: "Rezerva data",
      en: "Book your date",
      da: "Book jeres dato",
    },
    faqTitle: {
      ro: "Intrebari frecvente",
      en: "Frequently asked questions",
      da: "Ofte stillede spoergsmaal",
    },
    highlights: {
      ro: [
        "Filmare 4K multi-camera",
        "Storytelling emotional adaptat locatiei",
        "Colorizare cinematica",
        "Highlight + film complet",
      ],
      en: [
        "4K multi-camera filming",
        "Emotional storytelling tailored to the venue",
        "Cinematic color grading",
        "Highlight + full film",
      ],
      da: [
        "4K multi-kamera optagelse",
        "Foelelsesmaessig fortaelling tilpasset lokationen",
        "Filmatisk color grading",
        "Highlight + fuld film",
      ],
    },
  },
];

const venues: VenueSeed[] = [
  {
    key: "horsens-city-hall",
    slug: "horsens-city-hall",
    name: { ro: "Horsens City Hall", en: "Horsens City Hall", da: "Horsens Radhus" },
    city: { ro: "Horsens", en: "Horsens", da: "Horsens" },
  },
  {
    key: "fangel-kro",
    slug: "fangel-kro",
    name: { ro: "Fangel Kro", en: "Fangel Kro", da: "Fangel Kro" },
    city: { ro: "Odense", en: "Odense", da: "Odense" },
  },
  {
    key: "aarhus-city-hall",
    slug: "aarhus-city-hall",
    name: { ro: "Aarhus City Hall", en: "Aarhus City Hall", da: "Aarhus Radhus" },
    city: { ro: "Aarhus", en: "Aarhus", da: "Aarhus" },
  },
  {
    key: "vejle-fjord",
    slug: "vejle-fjord",
    name: { ro: "Vejle Fjord Venue", en: "Vejle Fjord Venue", da: "Vejle Fjord Venue" },
    city: { ro: "Vejle", en: "Vejle", da: "Vejle" },
  },
  {
    key: "silkeborg-lakeside",
    slug: "silkeborg-lakeside",
    name: { ro: "Silkeborg Lakeside", en: "Silkeborg Lakeside", da: "Silkeborg Lakeside" },
    city: { ro: "Silkeborg", en: "Silkeborg", da: "Silkeborg" },
  },
  {
    key: "copenhagen-city-hall",
    slug: "copenhagen-city-hall",
    name: { ro: "Copenhagen City Hall", en: "Copenhagen City Hall", da: "Koebenhavns Radhus" },
    city: { ro: "Copenhaga", en: "Copenhagen", da: "Koebenhavn" },
  },
  {
    key: "koldinghus",
    slug: "koldinghus",
    name: { ro: "Koldinghus", en: "Koldinghus", da: "Koldinghus" },
    city: { ro: "Kolding", en: "Kolding", da: "Kolding" },
  },
  {
    key: "aalborg-waterfront",
    slug: "aalborg-waterfront",
    name: { ro: "Aalborg Waterfront", en: "Aalborg Waterfront", da: "Aalborg Waterfront" },
    city: { ro: "Aalborg", en: "Aalborg", da: "Aalborg" },
  },
  {
    key: "bucharest-athenee",
    slug: "bucharest-athenee",
    name: { ro: "Ateneul Roman", en: "Romanian Athenaeum Area", da: "Ateneum-omradet" },
    city: { ro: "Bucuresti", en: "Bucharest", da: "Bukarest" },
  },
  {
    key: "cluj-central-park",
    slug: "cluj-central-park",
    name: { ro: "Parcul Central Cluj", en: "Cluj Central Park", da: "Cluj Central Park" },
    city: { ro: "Cluj-Napoca", en: "Cluj-Napoca", da: "Cluj-Napoca" },
  },
];

function getEyebrow(lang: Locale): string {
  if (lang === "ro") {
    return "VENUE SPECIAL";
  }

  if (lang === "da") {
    return "LOKATION SPECIAL";
  }

  return "VENUE SPECIAL";
}

function buildDescription(lang: Locale, label: string, venueName: string, cityName: string): string {
  if (lang === "ro") {
    return `${label} pentru ${venueName}, ${cityName} - Studio66 cu imagini premium si livrare rapida.`;
  }

  if (lang === "da") {
    return `${label} til ${venueName}, ${cityName} - Studio66 med premium billeder og hurtig levering.`;
  }

  return `${label} for ${venueName}, ${cityName} - Studio66 with premium visuals and fast delivery.`;
}

function buildIntro(lang: Locale, label: string, venueName: string, cityName: string): string {
  if (lang === "ro") {
    return `${label} pentru ${venueName} in ${cityName}. Ne adaptam ritmului locatiei, luminii si programului, pentru rezultate naturale, elegante si consistente.`;
  }

  if (lang === "da") {
    return `${label} til ${venueName} i ${cityName}. Vi tilpasser os lokationens rytme, lys og program for at levere naturlige og elegante resultater.`;
  }

  return `${label} for ${venueName} in ${cityName}. We adapt to the venue timeline, lighting and flow to deliver natural, elegant and consistent results.`;
}

function buildLocationLine(lang: Locale, venueName: string, cityName: string): string {
  if (lang === "ro") {
    return `Disponibil pentru ${venueName} in ${cityName} si locatii similare din apropiere.`;
  }

  if (lang === "da") {
    return `Tilgaengelig for ${venueName} i ${cityName} samt lignende lokationer i naeromraadet.`;
  }

  return `Available for ${venueName} in ${cityName} and similar nearby venues.`;
}

function buildFaqs(lang: Locale, label: string, venueName: string): VenueFaq[] {
  if (lang === "ro") {
    return [
      {
        question: `Ati mai filmat sau fotografiat la ${venueName}?`,
        answer: "Da, lucram frecvent in locatii premium si venim pregatiti cu plan pentru lumina, timeline si cadre-cheie.",
      },
      {
        question: `Cum organizam programul pentru ${label.toLowerCase()}?`,
        answer: "Stabilim in avans momentele importante si recomandam intervalele optime pentru cadrele de impact.",
      },
      {
        question: "Oferiti pachete personalizate pentru locatie?",
        answer: "Da. Configuram pachetele in functie de tipul evenimentului, durata si cerintele venue-ului.",
      },
    ];
  }

  if (lang === "da") {
    return [
      {
        question: `Har I arbejdet ved ${venueName} foer?`,
        answer: "Ja, vi arbejder ofte i premium lokationer og kommer med en klar plan for lys, tidslinje og noeglebilleder.",
      },
      {
        question: `Hvordan planlaegger vi tidslinjen for ${label.toLowerCase()}?`,
        answer: "Vi afstemmer de vigtigste oejeblikke pa forhånd og foreslar de bedste tidspunkter til billeder og film.",
      },
      {
        question: "Tilbyder I fleksible pakker til venue-events?",
        answer: "Ja. Vi tilpasser pakken efter eventtype, varighed og venue-krav.",
      },
    ];
  }

  return [
    {
      question: `Have you worked at ${venueName} before?`,
      answer: "Yes, we regularly shoot at premium venues and arrive with a clear plan for light, timeline and key moments.",
    },
    {
      question: `How do we plan the timeline for ${label.toLowerCase()}?`,
      answer: "We align all key moments in advance and suggest the best timing for high-impact photos and video.",
    },
    {
      question: "Do you offer flexible venue packages?",
      answer: "Yes. We tailor each package to your event type, duration and venue requirements.",
    },
  ];
}

export const seoVenuePages: SeoVenuePage[] = locales.flatMap((lang) =>
  venueServices.flatMap((service) =>
    venues.map((venue) => {
      const slug = `${service.slugPrefix[lang]}-${venue.slug}`;
      const id = `${service.key}-${venue.key}`;
      const title = `${service.label[lang]} ${venue.name[lang]} ${venue.city[lang]}`;

      return {
        id,
        lang,
        slug,
        path: `/${lang}/venue/${slug}/`,
        canonicalPath: `/${lang}/venue/${slug}/`,
        title,
        description: buildDescription(lang, service.label[lang], venue.name[lang], venue.city[lang]),
        eyebrow: getEyebrow(lang),
        intro: buildIntro(lang, service.label[lang], venue.name[lang], venue.city[lang]),
        highlights: service.highlights[lang],
        locationLine: buildLocationLine(lang, venue.name[lang], venue.city[lang]),
        ctaText: service.ctaText[lang],
        ctaHref: "/#contact",
        faqTitle: service.faqTitle[lang],
        faqs: buildFaqs(lang, service.label[lang], venue.name[lang]),
      };
    }),
  ),
);

const venueByLangSlug = new Map(seoVenuePages.map((page) => [`${page.lang}/${page.slug}`, page]));

const venueById = new Map<string, SeoVenuePage[]>();
for (const page of seoVenuePages) {
  const existing = venueById.get(page.id);
  if (existing) {
    existing.push(page);
  } else {
    venueById.set(page.id, [page]);
  }
}

export function getSeoVenuePage(lang: string, slug: string): SeoVenuePage | undefined {
  return venueByLangSlug.get(`${lang}/${slug}`);
}

export function getVenueLanguageAlternates(pageId: string): Partial<Record<Locale, string>> {
  const matches = venueById.get(pageId) ?? [];
  return matches.reduce<Partial<Record<Locale, string>>>((acc, item) => {
    acc[item.lang] = item.path;
    return acc;
  }, {});
}

export function getRelatedVenueLinks(page: SeoVenuePage, limit = 8): Array<{ label: string; href: string }> {
  return seoVenuePages
    .filter((item) => item.lang === page.lang && item.slug !== page.slug)
    .slice(0, limit)
    .map((item) => ({
      label: item.title,
      href: item.path,
    }));
}

export const featuredVenueLinks: Array<{ label: string; href: string }> = [
  { label: "EN: Wedding Photographer Horsens City Hall", href: "/en/venue/wedding-photographer-horsens-city-hall/" },
  { label: "DA: Bryllupsfotograf Horsens Radhus", href: "/da/venue/bryllupsfotograf-horsens-city-hall/" },
  { label: "EN: Wedding Videographer Copenhagen City Hall", href: "/en/venue/wedding-videographer-copenhagen-city-hall/" },
  { label: "DA: Bryllupsvideograf Koebenhavns Radhus", href: "/da/venue/bryllupsvideograf-copenhagen-city-hall/" },
  { label: "RO: Fotograf Nunta Ateneul Roman", href: "/ro/venue/fotograf-nunta-bucharest-athenee/" },
  { label: "RO: Videograf Nunta Cluj Central Park", href: "/ro/venue/videograf-nunta-cluj-central-park/" },
];
