import type { Metadata } from "next";
import SeoServicePage from "../components/SeoServicePage";

export const metadata: Metadata = {
  title: "Fotograf Nunta Bucuresti",
  description:
    "Fotograf nunta Bucuresti - Studio66: cadre emotionale, editare premium si livrare rapida pentru ziua voastra speciala.",
  alternates: {
    canonical: "/fotograf-nunta-bucuresti/",
  },
};

export default function Page() {
  return (
    <SeoServicePage
      eyebrow="SERVICIU LOCAL"
      title="Fotograf Nunta Bucuresti"
      intro="Oferim fotografie de nunta in Bucuresti cu accent pe emotie reala, lumina curata si storytelling natural. De la pregatiri pana la dansul de final, surprindem momentele care raman cu voi pe viata."
      highlights={[
        "Acoperire completa in ziua nuntii",
        "Cadre naturale si directionare discreta",
        "Editare premium cu tonuri cinematice",
        "Galerie online privata pentru invitati",
      ]}
      locationLine="Disponibil in Bucuresti, Ilfov si deplasari nationale."
      ctaText="Solicita oferta"
      ctaHref="/#contact"
      faqs={[
        {
          question: "Cat timp inainte trebuie facuta rezervarea?",
          answer:
            "Recomandam rezervarea cu 6-12 luni inainte pentru datele populare de weekend.",
        },
        {
          question: "Cate fotografii primim la final?",
          answer:
            "Numarul depinde de durata evenimentului, dar livram un set complet, selectat si editat profesional.",
        },
        {
          question: "Lucrati doar in Bucuresti?",
          answer:
            "Nu. Ne deplasam in toata Romania si in strainatate pentru proiecte speciale.",
        },
      ]}
    />
  );
}
