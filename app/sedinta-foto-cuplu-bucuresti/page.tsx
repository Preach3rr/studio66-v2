import type { Metadata } from "next";
import SeoServicePage from "../components/SeoServicePage";

export const metadata: Metadata = {
  title: "Sedinta Foto Cuplu Bucuresti",
  description:
    "Sedinta foto cuplu Bucuresti - Studio66: cadre naturale, locatii premium si ghidare relaxata pentru imagini memorabile.",
  alternates: {
    canonical: "/sedinta-foto-cuplu-bucuresti/",
  },
};

export default function Page() {
  return (
    <SeoServicePage
      eyebrow="SERVICIU LOCAL"
      title="Sedinta Foto Cuplu Bucuresti"
      intro="Organizam sedinte foto de cuplu in Bucuresti intr-un stil modern si natural. Te ajutam cu directii simple, locatie potrivita si timing bun pentru lumina, astfel incat experienta sa fie relaxata si rezultatul premium."
      highlights={[
        "Locatii urbane sau naturale",
        "Ghidare usoara pentru cadre naturale",
        "Editare premium cu look editorial",
        "Livrare online rapida",
      ]}
      locationLine="Disponibil in Bucuresti si Ilfov, cu optiuni pentru deplasari."
      ctaText="Programeaza sedinta"
      ctaHref="/#contact"
      faqs={[
        {
          question: "Cat dureaza o sedinta foto de cuplu?",
          answer:
            "In general intre 60 si 120 de minute, in functie de locatie si concept.",
        },
        {
          question: "Ne ajutati cu outfit-uri si styling?",
          answer:
            "Da, oferim recomandari simple pentru outfit-uri care se potrivesc locului si luminii.",
        },
        {
          question: "Cand primim fotografiile finale?",
          answer:
            "Livrarea se face de obicei in 5-10 zile lucratoare, in functie de sezon.",
        },
      ]}
    />
  );
}
