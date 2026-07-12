"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { studio66BlurDataURL } from "./imagePlaceholders";

export default function Cinematic() {
  return (
    <section
      className="cinematic-section relative overflow-hidden"
      style={{
        height: "90vh",
      }}
    >
      <Image
        src="/images/hero.jpg"
        alt="Studio66"
        fill
        sizes="100vw"
        loading="lazy"
        decoding="async"
        placeholder="blur"
        blurDataURL={studio66BlurDataURL}
        className="object-cover"
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,.65), rgba(0,0,0,.45), rgba(0,0,0,.85))",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="cinematic-content absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
      >
        <p
          style={{
            color: "#C9A55A",
            letterSpacing: ".5em",
            marginBottom: "24px",
          }}
        >
          CINEMATIC STORYTELLING
        </p>

        <h2
          style={{
            color: "#fff",
            fontSize: "clamp(60px,7vw,110px)",
            fontWeight: 800,
            lineHeight: ".95",
            maxWidth: "1100px",
          }}
        >
          Every Frame
          <br />
          Has A Story
        </h2>

        <p
          style={{
            color: "#d8d8d8",
            maxWidth: "700px",
            marginTop: "35px",
            lineHeight: 1.8,
            fontSize: "19px",
          }}
        >
          We create timeless films and photographs that preserve emotions,
          details and unforgettable memories.
        </p>

      <Link href="/cinematic-storytelling" className="inline-block" style={{
            marginTop: "55px",
            padding: "22px 60px",
            borderRadius: "4px",
            border: "1px solid rgba(255,255,255,.2)",
            background:
              "linear-gradient(135deg,#FFF9E8,#EBC96D,#B9842D)",
            color: "#111",
            fontWeight: 700,
            cursor: "pointer",
            display: "inline-block",
            textDecoration: "none",
          }}>
          WATCH SHOWREEL
        </Link>
      </motion.div>
    </section>
  );
}
