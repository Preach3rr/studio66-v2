import type { Metadata } from "next";
import SeoServicePage from "../components/SeoServicePage";

export const metadata: Metadata = {
  title: "Fotograf Botez Bucuresti",
  description:
    "Fotograf botez Bucuresti - Studio66: imagini naturale, cadre de familie si editare premium pentru o amintire completa.",
  alternates: {
    canonical: "/fotograf-botez-bucuresti/",
  },
};

export default function Page() {
  return (
    <SeoServicePage
      eyebrow="SERVICIU LOCAL"
      title="Fotograf Botez Bucuresti"
      intro="Fotografiem botezuri in Bucuresti intr-un stil calm si elegant, cu accent pe emotia familiei, detaliile importante si momentele spontane. Livram un set complet, editat atent, usor de impartasit cu cei dragi."
      highlights={[
        "Acoperire biserica + restaurant",
        "Portrete de familie si cadre spontane",
        "Editare premium, culori naturale",
        "Galerie online usor de distribuit",
      ]}
      locationLine="Disponibil in Bucuresti, Ilfov si imprejurimi."
      ctaText="Cere disponibilitate"
      ctaHref="/#contact"
      faqs={[
        {
          question: "Fotografiati si petrecerea de dupa botez?",
          answer:
            "Da, putem acoperi complet ziua, de la ceremonia religioasa pana la petrecere.",
        },
        {
          question: "Putem primi fotografiile in format print?",
          answer:
            "Da, oferim si optiuni pentru albume sau printuri, in functie de pachetul ales.",
        },
        {
          question: "Lucrati si in weekend?",
          answer:
            "Da, majoritatea evenimentelor sunt in weekend si avem disponibilitate in functie de calendar.",
        },
      ]}
    />
  );
}
