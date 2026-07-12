import type { ReactNode } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  highlights: string[];
  locationLine: string;
  ctaText: string;
  ctaHref: string;
  faqs: FaqItem[];
  faqTitle?: string;
  children?: ReactNode;
};

export default function SeoServicePage({
  eyebrow,
  title,
  intro,
  highlights,
  locationLine,
  ctaText,
  ctaHref,
  faqs,
  faqTitle = "Intrebari frecvente",
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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  );
}
