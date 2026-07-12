export type Locale = "ro" | "en" | "da";

type ServiceKey = "wedding-photo" | "wedding-video" | "baptism-photo" | "couple-session";

type FaqItem = {
  question: string;
  answer: string;
};

type LocationSeed = {
  key: string;
  slug: string;
  name: Record<Locale, string>;
  area: Record<Locale, string>;
};

type ServiceSeed = {
  key: ServiceKey;
  slugPrefix: Record<Locale, string>;
  label: Record<Locale, string>;
  eyebrow: Record<Locale, string>;
  ctaText: Record<Locale, string>;
  faqTitle: Record<Locale, string>;
  highlights: Record<Locale, string[]>;
};

export type SeoLandingPage = {
  id: string;
  lang: Locale;
  serviceKey: ServiceKey;
  locationKey: string;
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
  faqs: FaqItem[];
};

const locales: Locale[] = ["ro", "en", "da"];

const services: ServiceSeed[] = [
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
    eyebrow: {
      ro: "SERVICIU LOCAL",
      en: "LOCAL SERVICE",
      da: "LOKAL SERVICE",
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
        "Acoperire completa pentru ziua evenimentului",
        "Cadre naturale si regie discreta",
        "Editare premium cu tonuri cinematice",
        "Galerie online privata pentru familie si invitati",
      ],
      en: [
        "Full-day event coverage",
        "Natural portraits and subtle guidance",
        "Premium editing with cinematic tones",
        "Private online gallery for family and guests",
      ],
      da: [
        "Heldags daekning af jeres bryllup",
        "Naturlige billeder og diskret guidning",
        "Premium redigering med filmisk look",
        "Privat online galleri til familie og gaester",
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
    eyebrow: {
      ro: "SERVICIU LOCAL",
      en: "LOCAL SERVICE",
      da: "LOKAL SERVICE",
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
        "Filmare 4K cu echipament profesional",
        "Cadre dinamice si storytelling emotional",
        "Colorizare cinematica",
        "Highlight film + varianta lunga",
      ],
      en: [
        "4K filming with professional gear",
        "Dynamic shots and emotional storytelling",
        "Cinematic color grading",
        "Highlight film + full-length edit",
      ],
      da: [
        "4K optagelse med professionelt udstyr",
        "Dynamiske klip og foelelsesmaessig fortaelling",
        "Filmatisk color grading",
        "Highlight film + laengere version",
      ],
    },
  },
  {
    key: "baptism-photo",
    slugPrefix: {
      ro: "fotograf-botez",
      en: "christening-photographer",
      da: "daabsfotograf",
    },
    label: {
      ro: "Fotograf Botez",
      en: "Christening Photographer",
      da: "Daabsfotograf",
    },
    eyebrow: {
      ro: "SERVICIU LOCAL",
      en: "LOCAL SERVICE",
      da: "LOKAL SERVICE",
    },
    ctaText: {
      ro: "Verifica disponibilitatea",
      en: "Check availability",
      da: "Tjek ledige datoer",
    },
    faqTitle: {
      ro: "Intrebari frecvente",
      en: "Frequently asked questions",
      da: "Ofte stillede spoergsmaal",
    },
    highlights: {
      ro: [
        "Ceremonie si petrecere acoperite complet",
        "Portrete de familie + cadre spontane",
        "Editare premium, culori naturale",
        "Galerie online usor de distribuit",
      ],
      en: [
        "Complete ceremony and reception coverage",
        "Family portraits and candid moments",
        "Premium editing with natural tones",
        "Easy-to-share online gallery",
      ],
      da: [
        "Komplet daekning af kirke og fest",
        "Familieportraetter og spontane oejeblikke",
        "Premium redigering med naturlige farver",
        "Online galleri der er nemt at dele",
      ],
    },
  },
  {
    key: "couple-session",
    slugPrefix: {
      ro: "sedinta-foto-cuplu",
      en: "couple-photoshoot",
      da: "parfotografering",
    },
    label: {
      ro: "Sedinta Foto Cuplu",
      en: "Couple Photoshoot",
      da: "Parfotografering",
    },
    eyebrow: {
      ro: "SERVICIU LOCAL",
      en: "LOCAL SERVICE",
      da: "LOKAL SERVICE",
    },
    ctaText: {
      ro: "Programeaza sedinta",
      en: "Schedule a session",
      da: "Book en session",
    },
    faqTitle: {
      ro: "Intrebari frecvente",
      en: "Frequently asked questions",
      da: "Ofte stillede spoergsmaal",
    },
    highlights: {
      ro: [
        "Locatii urbane sau naturale",
        "Ghidare relaxata pentru cadre naturale",
        "Editare premium cu look editorial",
        "Livrare online rapida",
      ],
      en: [
        "Urban and nature location options",
        "Relaxed guidance for natural poses",
        "Premium editing with editorial style",
        "Fast online delivery",
      ],
      da: [
        "Lokationer i by eller natur",
        "Afslappet guidning til naturlige billeder",
        "Premium redigering med editorial look",
        "Hurtig online levering",
      ],
    },
  },
];

const locations: LocationSeed[] = [
  {
    key: "bucuresti",
    slug: "bucuresti",
    name: { ro: "Bucuresti", en: "Bucharest", da: "Bukarest" },
    area: {
      ro: "Bucuresti, Ilfov si imprejurimi",
      en: "Bucharest, Ilfov and nearby areas",
      da: "Bukarest, Ilfov og omkringliggende omraader",
    },
  },
  {
    key: "cluj-napoca",
    slug: "cluj-napoca",
    name: { ro: "Cluj-Napoca", en: "Cluj-Napoca", da: "Cluj-Napoca" },
    area: {
      ro: "Cluj-Napoca si zona metropolitana",
      en: "Cluj-Napoca and the metro area",
      da: "Cluj-Napoca og opland",
    },
  },
  {
    key: "timisoara",
    slug: "timisoara",
    name: { ro: "Timisoara", en: "Timisoara", da: "Timisoara" },
    area: {
      ro: "Timisoara si vestul Romaniei",
      en: "Timisoara and western Romania",
      da: "Timisoara og det vestlige Rumenien",
    },
  },
  {
    key: "iasi",
    slug: "iasi",
    name: { ro: "Iasi", en: "Iasi", da: "Iasi" },
    area: {
      ro: "Iasi si Moldova",
      en: "Iasi and Moldova region",
      da: "Iasi og Moldova-regionen",
    },
  },
  {
    key: "constanta",
    slug: "constanta",
    name: { ro: "Constanta", en: "Constanta", da: "Constanta" },
    area: {
      ro: "Constanta si litoral",
      en: "Constanta and the seaside area",
      da: "Constanta og kystomraadet",
    },
  },
  {
    key: "brasov",
    slug: "brasov",
    name: { ro: "Brasov", en: "Brasov", da: "Brasov" },
    area: {
      ro: "Brasov si zona montana",
      en: "Brasov and mountain areas",
      da: "Brasov og bjergomraader",
    },
  },
  {
    key: "sibiu",
    slug: "sibiu",
    name: { ro: "Sibiu", en: "Sibiu", da: "Sibiu" },
    area: {
      ro: "Sibiu si imprejurimi",
      en: "Sibiu and nearby areas",
      da: "Sibiu og omkringliggende omraader",
    },
  },
  {
    key: "oradea",
    slug: "oradea",
    name: { ro: "Oradea", en: "Oradea", da: "Oradea" },
    area: {
      ro: "Oradea si Bihor",
      en: "Oradea and Bihor county",
      da: "Oradea og Bihor",
    },
  },
  {
    key: "horsens",
    slug: "horsens",
    name: { ro: "Horsens", en: "Horsens", da: "Horsens" },
    area: {
      ro: "Horsens, East Jutland si orasele apropiate",
      en: "Horsens, East Jutland and nearby cities",
      da: "Horsens, Oestjylland og naerliggende byer",
    },
  },
  {
    key: "aarhus",
    slug: "aarhus",
    name: { ro: "Aarhus", en: "Aarhus", da: "Aarhus" },
    area: {
      ro: "Aarhus si zona East Jutland",
      en: "Aarhus and East Jutland area",
      da: "Aarhus og Oestjylland",
    },
  },
  {
    key: "vejle",
    slug: "vejle",
    name: { ro: "Vejle", en: "Vejle", da: "Vejle" },
    area: {
      ro: "Vejle si sudul Jutlandei",
      en: "Vejle and southern Jutland",
      da: "Vejle og det sydlige Jylland",
    },
  },
  {
    key: "silkeborg",
    slug: "silkeborg",
    name: { ro: "Silkeborg", en: "Silkeborg", da: "Silkeborg" },
    area: {
      ro: "Silkeborg si zona lacurilor",
      en: "Silkeborg and the lake district",
      da: "Silkeborg og soeomraadet",
    },
  },
  {
    key: "skanderborg",
    slug: "skanderborg",
    name: { ro: "Skanderborg", en: "Skanderborg", da: "Skanderborg" },
    area: {
      ro: "Skanderborg si East Jutland",
      en: "Skanderborg and East Jutland",
      da: "Skanderborg og Oestjylland",
    },
  },
  {
    key: "kolding",
    slug: "kolding",
    name: { ro: "Kolding", en: "Kolding", da: "Kolding" },
    area: {
      ro: "Kolding si regiunea Syddanmark",
      en: "Kolding and Southern Denmark region",
      da: "Kolding og Region Syddanmark",
    },
  },
  {
    key: "odense",
    slug: "odense",
    name: { ro: "Odense", en: "Odense", da: "Odense" },
    area: {
      ro: "Odense si insula Funen",
      en: "Odense and Funen island",
      da: "Odense og Fyn",
    },
  },
  {
    key: "copenhagen",
    slug: "copenhagen",
    name: { ro: "Copenhaga", en: "Copenhagen", da: "Koebenhavn" },
    area: {
      ro: "Copenhaga si zona Sjalland",
      en: "Copenhagen and Zealand area",
      da: "Koebenhavn og Sjaelland",
    },
  },
  {
    key: "aalborg",
    slug: "aalborg",
    name: { ro: "Aalborg", en: "Aalborg", da: "Aalborg" },
    area: {
      ro: "Aalborg si nordul Jutlandei",
      en: "Aalborg and North Jutland",
      da: "Aalborg og Nordjylland",
    },
  },
  {
    key: "esbjerg",
    slug: "esbjerg",
    name: { ro: "Esbjerg", en: "Esbjerg", da: "Esbjerg" },
    area: {
      ro: "Esbjerg si coasta de vest",
      en: "Esbjerg and the west coast",
      da: "Esbjerg og vestkysten",
    },
  },
  {
    key: "randers",
    slug: "randers",
    name: { ro: "Randers", en: "Randers", da: "Randers" },
    area: {
      ro: "Randers si East Jutland",
      en: "Randers and East Jutland",
      da: "Randers og Oestjylland",
    },
  },
  {
    key: "herning",
    slug: "herning",
    name: { ro: "Herning", en: "Herning", da: "Herning" },
    area: {
      ro: "Herning si Midtjylland",
      en: "Herning and Central Jutland",
      da: "Herning og Midtjylland",
    },
  },
  {
    key: "region-midtjylland",
    slug: "region-midtjylland",
    name: { ro: "Regiunea Midtjylland", en: "Central Denmark Region", da: "Region Midtjylland" },
    area: {
      ro: "toata regiunea Midtjylland",
      en: "the full Central Denmark Region",
      da: "hele Region Midtjylland",
    },
  },
  {
    key: "region-syddanmark",
    slug: "region-syddanmark",
    name: { ro: "Regiunea Syddanmark", en: "Region of Southern Denmark", da: "Region Syddanmark" },
    area: {
      ro: "toata regiunea Syddanmark",
      en: "the full Region of Southern Denmark",
      da: "hele Region Syddanmark",
    },
  },
  {
    key: "region-sjaelland",
    slug: "region-sjaelland",
    name: { ro: "Regiunea Sjaelland", en: "Region Zealand", da: "Region Sjaelland" },
    area: {
      ro: "toata regiunea Sjaelland",
      en: "the full Region Zealand",
      da: "hele Region Sjaelland",
    },
  },
];

function buildIntro(lang: Locale, serviceLabel: string, locationName: string, areaText: string): string {
  if (lang === "ro") {
    return `${serviceLabel} in ${locationName} cu stil cinematic, cadre naturale si editare premium. Acoperim ${areaText} pentru evenimente autentice, cu livrare rapida si comunicare clara.`;
  }

  if (lang === "da") {
    return `${serviceLabel} i ${locationName} med filmisk stil, naturlige billeder og premium redigering. Vi dækker ${areaText} med stabil planlaegning, tydelig kommunikation og hurtig levering.`;
  }

  return `${serviceLabel} in ${locationName} with cinematic style, natural storytelling and premium editing. We cover ${areaText} with reliable planning, clear communication and fast delivery.`;
}

function buildDescription(lang: Locale, serviceLabel: string, locationName: string): string {
  if (lang === "ro") {
    return `${serviceLabel} ${locationName} - Studio66 cu imagini premium, storytelling natural si livrare rapida.`;
  }

  if (lang === "da") {
    return `${serviceLabel} ${locationName} - Studio66 med premium billeder, naturlig fortaelling og hurtig levering.`;
  }

  return `${serviceLabel} ${locationName} - Studio66 with premium visuals, natural storytelling and fast delivery.`;
}

function buildLocationLine(lang: Locale, areaText: string): string {
  if (lang === "ro") {
    return `Disponibil in ${areaText}.`;
  }

  if (lang === "da") {
    return `Tilgaengelig i ${areaText}.`;
  }

  return `Available in ${areaText}.`;
}

function buildFaqs(lang: Locale, serviceLabel: string, locationName: string): FaqItem[] {
  if (lang === "ro") {
    return [
      {
        question: `Cu cat timp inainte rezervam pentru ${serviceLabel.toLowerCase()} in ${locationName}?`,
        answer: "Recomandam rezervarea cat mai devreme, ideal cu 6-12 luni inainte pentru weekendurile populare.",
      },
      {
        question: "In cat timp livrati materialele finale?",
        answer: "Termenul variaza in functie de sezon si pachet, dar comunicam clar calendarul de livrare de la inceput.",
      },
      {
        question: "Puteti acoperi si localitati din jur?",
        answer: "Da. Acoperim orasul principal si imprejurimile, cu deplasari extinse in functie de proiect.",
      },
    ];
  }

  if (lang === "da") {
    return [
      {
        question: `Hvor tidligt boer vi booke ${serviceLabel.toLowerCase()} i ${locationName}?`,
        answer: "Vi anbefaler booking saa tidligt som muligt, gerne 6-12 maaneder foer populaere weekenddatoer.",
      },
      {
        question: "Hvor lang tid tager levering af det faerdige materiale?",
        answer: "Leveringstiden afhaenger af saeson og pakke, men vi giver altid en tydelig tidsplan fra start.",
      },
      {
        question: "Daekker I ogsaa byer i naeromraadet?",
        answer: "Ja. Vi arbejder i hovedbyen og omkringliggende omraader, samt laengere koersel ved behov.",
      },
    ];
  }

  return [
    {
      question: `How early should we book ${serviceLabel.toLowerCase()} in ${locationName}?`,
      answer: "We recommend booking as early as possible, ideally 6-12 months ahead for popular weekend dates.",
    },
    {
      question: "How long does final delivery take?",
      answer: "Delivery timing depends on season and package, and we set clear expectations from the start.",
    },
    {
      question: "Do you also cover nearby areas?",
      answer: "Yes. We cover the main city and surrounding towns, with wider travel options when needed.",
    },
  ];
}

const allPages: SeoLandingPage[] = locales.flatMap((lang) =>
  services.flatMap((service) =>
    locations.map((location) => {
      const slug = `${service.slugPrefix[lang]}-${location.slug}`;
      const id = `${service.key}-${location.key}`;
      const title = `${service.label[lang]} ${location.name[lang]}`;
      const description = buildDescription(lang, service.label[lang], location.name[lang]);

      return {
        id,
        lang,
        serviceKey: service.key,
        locationKey: location.key,
        slug,
        path: `/${lang}/${slug}/`,
        canonicalPath: `/${lang}/${slug}/`,
        title,
        description,
        eyebrow: service.eyebrow[lang],
        intro: buildIntro(lang, service.label[lang], location.name[lang], location.area[lang]),
        highlights: service.highlights[lang],
        locationLine: buildLocationLine(lang, location.area[lang]),
        ctaText: service.ctaText[lang],
        ctaHref: "/#contact",
        faqTitle: service.faqTitle[lang],
        faqs: buildFaqs(lang, service.label[lang], location.name[lang]),
      };
    }),
  ),
);

const pageByLangSlug = new Map(allPages.map((page) => [`${page.lang}/${page.slug}`, page]));

const pagesById = new Map<string, SeoLandingPage[]>();
for (const page of allPages) {
  const existing = pagesById.get(page.id);
  if (existing) {
    existing.push(page);
  } else {
    pagesById.set(page.id, [page]);
  }
}

export function getSeoLandingPage(lang: string, slug: string): SeoLandingPage | undefined {
  return pageByLangSlug.get(`${lang}/${slug}`);
}

export function getLanguageAlternates(pageId: string): Partial<Record<Locale, string>> {
  const matches = pagesById.get(pageId) ?? [];
  return matches.reduce<Partial<Record<Locale, string>>>((acc, item) => {
    acc[item.lang] = item.path;
    return acc;
  }, {});
}

export const seoLandingPages = allPages;

export function getRelatedSeoLinks(page: SeoLandingPage, limit = 8): Array<{ label: string; href: string }> {
  const sameLanguagePages = seoLandingPages.filter((item) => item.lang === page.lang && item.slug !== page.slug);

  const sameService = sameLanguagePages.filter((item) => item.serviceKey === page.serviceKey);
  const sameLocation = sameLanguagePages.filter((item) => item.locationKey === page.locationKey);

  const candidates = [...sameService, ...sameLocation];
  const deduped = new Map<string, { label: string; href: string }>();

  for (const item of candidates) {
    if (!deduped.has(item.path)) {
      deduped.set(item.path, { label: item.title, href: item.path });
    }

    if (deduped.size >= limit) {
      break;
    }
  }

  return Array.from(deduped.values());
}

export const featuredSeoLinks: Array<{ label: string; href: string }> = [
  { label: "RO: Fotograf Nunta Bucuresti", href: "/ro/fotograf-nunta-bucuresti/" },
  { label: "RO: Videograf Nunta Cluj-Napoca", href: "/ro/videograf-nunta-cluj-napoca/" },
  { label: "RO: Fotograf Botez Timisoara", href: "/ro/fotograf-botez-timisoara/" },
  { label: "RO: Sedinta Foto Cuplu Brasov", href: "/ro/sedinta-foto-cuplu-brasov/" },
  { label: "EN: Wedding Photographer Horsens", href: "/en/wedding-photographer-horsens/" },
  { label: "EN: Wedding Videographer Aarhus", href: "/en/wedding-videographer-aarhus/" },
  { label: "EN: Christening Photographer Copenhagen", href: "/en/christening-photographer-copenhagen/" },
  { label: "EN: Couple Photoshoot Odense", href: "/en/couple-photoshoot-odense/" },
  { label: "DA: Bryllupsfotograf Horsens", href: "/da/bryllupsfotograf-horsens/" },
  { label: "DA: Bryllupsvideograf Vejle", href: "/da/bryllupsvideograf-vejle/" },
  { label: "DA: Daabsfotograf Koebenhavn", href: "/da/daabsfotograf-copenhagen/" },
  { label: "DA: Parfotografering Silkeborg", href: "/da/parfotografering-silkeborg/" },
];
