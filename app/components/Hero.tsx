"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import HeroBackground from "./HeroBackground";

export default function Hero() {
  return (
    <section className="hero-section relative h-screen overflow-hidden">

      {/* Background */}

     <HeroBackground />

      {/* Overlay */}

<div
  className="absolute inset-0"
  style={{
    background:
      "linear-gradient(115deg, rgba(255,255,255,0.03) 0%, transparent 35%, transparent 65%, rgba(255,255,255,0.02) 100%)",
    mixBlendMode: "soft-light",
    pointerEvents: "none",
  }}
/>
      <div className="absolute inset-0 bg-black/55" style={{ pointerEvents: "none" }} />

      {/* Vignette */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(201,165,90,.12) 0%, rgba(0,0,0,.15) 45%, rgba(0,0,0,.86) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Glow */}

      <motion.div
        animate={{
          opacity: [0.45, 0.9, 0.45],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 h-[950px] w-[950px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(201,165,90,.16) 0%, transparent 70%)",
          filter: "blur(70px)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}

      <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: "20px" }}
        >
          <Image
            src="/logo/studio66.png"
            alt="Studio66 emblem"
            width={210}
            height={154}
            priority
            className="h-auto w-[140px] sm:w-[170px] md:w-[190px]"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="hero-eyebrow"
          style={{
            color: "#C9A55A",
            letterSpacing: ".55em",
            fontWeight: 600,
            fontSize: "14px",
            marginBottom: "30px",
          }}
        >
          STUDIO66 PHOTOGRAPHY
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-title hero-shadow"
          style={{
            fontWeight: 800,
            fontSize: "clamp(82px,8vw,122px)",
            lineHeight: ".95",
            maxWidth: "1000px",
          }}
        >
          Capturing Moments.
          <br />
          Creating Memories.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: .4 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: .3 }}
          className="gold-divider"
          style={{
            width: "180px",
            marginTop: "42px",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .7 }}
          className="hero-actions"
          style={{
            display: "flex",
            gap: "30px",
            marginTop: "46px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.04,
              y: -4,
            }}
            whileTap={{ scale: .98 }}
            className="hero-action"
            style={{
              position: "relative",
              overflow: "hidden",
              padding: "20px 58px",
              borderRadius: "4px",
              border: "1px solid rgba(255,255,255,.18)",
              background:
                "linear-gradient(135deg,#FFFCEB 0%,#F7E09E 18%,#E4BB60 38%,#B7812D 65%,#FFF2C7 100%)",
              color: "#111",
              fontWeight: 700,
              letterSpacing: ".18em",
              boxShadow:
                "0 18px 45px rgba(201,165,90,.35)",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            BOOK NOW →
          </motion.a>

          <motion.a
            href="#portfolio"
            whileHover={{
              scale: 1.04,
              y: -4,
            }}
            whileTap={{ scale: .98 }}
            className="hero-action"
            style={{
              padding: "20px 58px",
              borderRadius: "4px",
              border: "1px solid rgba(201,165,90,.75)",
              background: "rgba(0,0,0,.15)",
              backdropFilter: "blur(12px)",
              color: "#E8CB8B",
              fontWeight: 700,
              letterSpacing: ".18em",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            VIEW PORTFOLIO →
          </motion.a>
        </motion.div>

      </div>

    </section>
  );
}
