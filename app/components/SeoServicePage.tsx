import type { ReactNode } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

type RelatedLink = {
  label: string;
  href: string;
};

type BreadcrumbItem = {
  name: string;
  item: string;
};

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  description?: string;
  highlights: string[];
  locationLine: string;
  ctaText: string;
  ctaHref: string;
  faqs: FaqItem[];
  faqTitle?: string;
  relatedTitle?: string;
  relatedLinks?: RelatedLink[];
  breadcrumbs?: BreadcrumbItem[];
  children?: ReactNode;
};

export default function SeoServicePage({
  eyebrow,
  title,
  intro,
  description = "",
  highlights,
  locationLine,
  ctaText,
  ctaHref,
  faqs,
  faqTitle = "Intrebari frecvente",
  relatedTitle,
  relatedLinks,
  breadcrumbs,
  children,
}: Props) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    description,
    areaServed: locationLine,
    provider: {
      "@type": "ProfessionalService",
      name: "Studio66 Photography",
      url: "https://studio66photography.ro",
    },
  };

  const breadcrumbSchema = breadcrumbs
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: crumb.name,
          item: `https://studio66photography.ro${crumb.item}`,
        })),
      }
    : null;

  return (
    <main style={{ background: "#070707", color: "#fff", minHeight: "100vh", padding: "120px 7%" }}>
      <section style={{ maxWidth: "980px", margin: "0 auto" }}>
        <p style={{ color: "#C9A55A", letterSpacing: ".38em", fontWeight: 600, marginBottom: "16px" }}>{eyebrow}</p>
        <h1 style={{ fontSize: "clamp(36px, 6vw, 64px)", lineHeight: 1.05, marginBottom: "22px" }}>{title}</h1>
        <p style={{ color: "#d0d0d0", fontSize: "18px", lineHeight: 1.8, marginBottom: "20px" }}>{intro}</p>
        <p style={{ color: "#E8CB8B", marginBottom: "34px" }}>{locationLine}</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "14px", marginBottom: "38px" }}>
          {highlights.map((item) => (
            <div key={item} style={{ border: "1px solid rgba(201,165,90,.24)", borderRadius: "12px", padding: "14px 16px", background: "rgba(255,255,255,.02)" }}>
              {item}
            </div>
          ))}
        </div>

        <a href={ctaHref} style={{ display: "inline-block", padding: "14px 24px", borderRadius: "999px", border: "1px solid #C9A55A", color: "#C9A55A", textDecoration: "none", fontWeight: 700, letterSpacing: ".06em" }}>
          {ctaText}
        </a>
      </section>

      {children}

      <section style={{ maxWidth: "980px", margin: "72px auto 0" }}>
        <h2 style={{ fontSize: "clamp(30px, 4vw, 44px)", marginBottom: "24px" }}>{faqTitle}</h2>
        <div style={{ display: "grid", gap: "14px" }}>
          {faqs.map((faq) => (
            <article key={faq.question} style={{ border: "1px solid rgba(201,165,90,.2)", borderRadius: "14px", padding: "18px", background: "#101010" }}>
              <h3 style={{ fontSize: "21px", marginBottom: "10px" }}>{faq.question}</h3>
              <p style={{ color: "#cfcfcf", lineHeight: 1.75 }}>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      {relatedLinks && relatedLinks.length > 0 && (
        <section style={{ maxWidth: "980px", margin: "64px auto 0" }}>
          <h2 style={{ fontSize: "clamp(28px, 3.8vw, 40px)", marginBottom: "18px" }}>
            {relatedTitle ?? "Related searches"}
          </h2>
          <div style={{ display: "grid", gap: "10px" }}>
            {relatedLinks.map((link) => (
              <a key={link.href} href={link.href} style={{ color: "#d8d8d8", textDecoration: "none", border: "1px solid rgba(201,165,90,.2)", borderRadius: "10px", padding: "12px 14px", background: "rgba(255,255,255,.015)" }}>
                {link.label}
              </a>
            ))}
          </div>
        </section>
      )}

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {breadcrumbSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />}
    </main>
  );
}
