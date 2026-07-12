"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { studio66BlurDataURL } from "./imagePlaceholders";

const photos = [
  {
    image: "/portfolio/Weddings/1.jpg",
    title: "Wedding Stories",
    subtitle: "Luxury Wedding Photography",
  },
  {
    image: "/portfolio/Portraits/1.jpg",
    title: "Portrait Sessions",
    subtitle: "Natural & Editorial Portraits",
  },
  {
    image: "/portfolio/Events/1.jpg",
    title: "Events",
    subtitle: "Capturing Every Emotion",
  },
];

export default function FeaturedGallery() {
  return (
    <section className="site-section featured-section"
      style={{
        background: "#090909",
        padding: "170px 8%",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
          textAlign: "center",
          marginBottom: "90px",
        }}
      >
        <p
          style={{
            color: "#C9A55A",
            letterSpacing: ".45em",
            marginBottom: "18px",
          }}
        >
          FEATURED WORK
        </p>

        <h2
          style={{
            color: "#fff",
            fontSize: "60px",
            fontWeight: 800,
          }}
        >
          Selected Projects
        </h2>
      </motion.div>

      <div
        style={{
          display: "grid",
          gap: "45px",
        }}
      >
        {photos.map((photo, index) => (
          <motion.a
            href="#portfolio"
            key={photo.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ scale: 1.01 }}
            className="featured-card"
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "24px",
              height: "700px",
              display: "block",
              textDecoration: "none",
            }}
          >
            <Image
              src={photo.image}
              alt={photo.title}
              fill
              sizes="100vw"
              loading="lazy"
              decoding="async"
              placeholder="blur"
              blurDataURL={studio66BlurDataURL}
              className="object-cover transition duration-700 hover:scale-110"
            />

            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,.88), rgba(0,0,0,.15))",
              }}
            />

            <div
              className="featured-copy"
              style={{
                position: "absolute",
                left: "60px",
                bottom: "60px",
              }}
            >
              <p
                style={{
                  color: "#C9A55A",
                  letterSpacing: ".3em",
                  marginBottom: "12px",
                }}
              >
                {photo.subtitle}
              </p>

              <h3
                style={{
                  color: "#fff",
                  fontSize: "52px",
                  fontWeight: 800,
                }}
              >
                {photo.title}
              </h3>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
