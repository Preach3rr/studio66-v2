"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Camera, Heart, Sparkles } from "lucide-react";
import { useState } from "react";

const values = [
  { icon: Heart, title: "Real moments", text: "We look for the glances, laughter and quiet details that make every celebration feel unmistakably yours." },
  { icon: Camera, title: "A refined visual language", text: "From natural light to careful composition and colour, every frame is edited with a timeless, editorial finish." },
  { icon: Sparkles, title: "A relaxed experience", text: "We guide when it helps and step back when the moment deserves to unfold naturally, so you can stay present." },
];

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="site-section"
      style={{
        background: "#0a0a0a",
        padding: "150px 8%",
      }}
    >
      <div className="about-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "90px",
          alignItems: "center",
        }}
      >
        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p
            style={{
              color: "#C9A55A",
              letterSpacing: ".45em",
              marginBottom: "18px",
            }}
          >
            ABOUT STUDIO66
          </p>

          <h2
            style={{
              color: "#fff",
              fontSize: "58px",
              fontWeight: 800,
              marginBottom: "30px",
            }}
          >
            We Don&apos;t Just Take Photos.
          </h2>

          <button
            type="button"
            aria-expanded={isExpanded}
            aria-controls="about-description"
            onClick={() => setIsExpanded((expanded) => !expanded)}
            style={{
              marginTop: "45px",
              padding: "20px 55px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              display: "inline-block",
              background:
                "linear-gradient(135deg,#FFF8E1,#E9C46A,#B9832D)",
              color: "#111",
              fontWeight: 700,
            }}
          >
            {isExpanded ? "SHOW LESS" : "LEARN MORE"}
          </button>
        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="about-image"
          style={{
            position: "relative",
            height: "700px",
            borderRadius: "24px",
            overflow: "hidden",
          }}
        >
          <Image
            src="/images/about-studio66-couple.png"
            alt="Newly married couple walking together at golden hour"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            id="about-description"
            initial={{ height: 0, opacity: 0, y: -20 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -20 }}
            transition={{ duration: 0.55, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div style={{ borderTop: "1px solid rgba(201,165,90,.2)", marginTop: "75px", paddingTop: "75px" }}>
              <div style={{ maxWidth: "840px", margin: "0 auto", textAlign: "center" }}>
                <p style={{ color: "#C9A55A", letterSpacing: ".42em", fontWeight: 600, marginBottom: "18px" }}>THE STUDIO66 APPROACH</p>
                <h2 style={{ color: "#fff", fontSize: "clamp(36px,4vw,58px)", lineHeight: 1.08, fontWeight: 800, marginBottom: "28px" }}>Your story, honestly told.</h2>
                <p style={{ color: "#bdbdbd", fontSize: "18px", lineHeight: 1.9 }}>Studio66 creates photography and cinematic films for people who want to remember more than how an event looked. We preserve its atmosphere: the anticipation before a wedding ceremony, the hands that hold a newborn, the energy of a room and the small details that pass too quickly.</p>
                <p style={{ color: "#bdbdbd", fontSize: "18px", lineHeight: 1.9, marginTop: "22px" }}>Based between Denmark and Romania, we bring a calm, personal process to weddings, baptisms, portraits, events and commercial projects. The result is a gallery and film that still feels true years from now.</p>
              </div>
              <div className="mobile-stack-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "28px", maxWidth: "1180px", margin: "70px auto 0" }}>
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return <motion.div key={value.title} className="mobile-card" initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + index * 0.1 }} style={{ padding: "36px", border: "1px solid rgba(201,165,90,.2)", borderRadius: "18px", background: "#111" }}>
                    <Icon color="#C9A55A" size={36} style={{ marginBottom: "22px" }} />
                    <h3 style={{ color: "#fff", fontSize: "25px", marginBottom: "14px" }}>{value.title}</h3>
                    <p style={{ color: "#bdbdbd", lineHeight: 1.8 }}>{value.text}</p>
                  </motion.div>;
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
