import type { Metadata } from "next";
import SeoServicePage from "../components/SeoServicePage";

export const metadata: Metadata = {
  title: "Videograf Nunta Bucuresti",
  description:
    "Videograf nunta Bucuresti - Studio66: filmare 4K, cadre cinematice si montaj emotional pentru povestea voastra.",
  alternates: {
    canonical: "/videograf-nunta-bucuresti/",
  },
};

export default function Page() {
  return (
    <SeoServicePage
      eyebrow="SERVICIU LOCAL"
      title="Videograf Nunta Bucuresti"
      intro="Realizam filme de nunta in Bucuresti cu stil cinematic: ritm bun, sunet clar, colorizare premium si momente autentice. Rezultatul final este un film pe care il retraiesti cu aceeasi emotie ani la rand."
      highlights={[
        "Filmari 4K cu echipament profesional",
        "Cadre dinamice si secvente emotionale",
        "Colorizare cinematica",
        "Highlight film + varianta lunga",
      ]}
      locationLine="Disponibil in Bucuresti, Ilfov si deplasari nationale."
      ctaText="Rezerva data"
      ctaHref="/#contact"
      faqs={[
        {
          question: "Cat dureaza livrarea filmului final?",
          answer:
            "In functie de sezon si complexitate, livrarea se face in general intre 4 si 10 saptamani.",
        },
        {
          question: "Primim si teaser scurt pentru social media?",
          answer:
            "Da, putem include pachete cu teaser vertical si highlight scurt optimizat pentru social media.",
        },
        {
          question: "Filmati si ceremonia civila sau religioasa separat?",
          answer:
            "Da, acoperim complet ziua, inclusiv momentele separate, in functie de programul vostru.",
        },
      ]}
    />
  );
}
