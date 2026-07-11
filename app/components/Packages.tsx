"use client";

import { motion } from "framer-motion";
import Contact from "./Contact";

const packages = [
  {
    title: "Photography",

    description:
      "Professional photography for weddings, events, portraits and baptisms.",
    features: [
      "High Resolution Photos",
      "Professional Editing",
      "Online Gallery",
      "Fast Delivery",
    ],
  },
  {
    title: "Photo + Video",

    description:
      "Complete cinematic coverage with professional editing and drone footage.",
    featured: true,
    features: [
      "Photography",
      "4K Video",
      "Drone Included",
      "Color Grading",
      "Highlight Film",
    ],
  },
  {
    title: "Commercial",
    price: "Custom Quote",
    description:
      "Real estate, business promotion, products and social media content.",
    features: [
      "Commercial License",
      "4K Delivery",
      "Drone Available",
      "Fast Turnaround",
    ],
  },
];

export default function Packages() {
  return (
    <section id="pricing" className="site-section"
      style={{
        background: "#090909",
        padding: "150px 8%",
      }}
    >
      <div className="mobile-stack-grid"
        style={{
          textAlign: "center",
          marginBottom: "90px",
        }}
      >
        <p
          style={{
            color: "#C9A55A",
            letterSpacing: ".4em",
            marginBottom: "15px",
          }}
        >
          PACKAGES
        </p>

        <h2
          style={{
            color: "#fff",
            fontSize: "58px",
            fontWeight: 800,
          }}
        >
          Choose Your Experience
        </h2>

      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))",
          gap: "35px",
        }}
      >
        {packages.map((pkg, index) => (
          <motion.div
            key={pkg.title}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.15,
            }}
            whileHover={{
              y: -12,
            }}
            className="mobile-card"
            style={{
              background: pkg.featured ? "#111" : "#101010",
              border: pkg.featured
                ? "2px solid #C9A55A"
                : "1px solid rgba(201,165,90,.18)",
              borderRadius: "24px",
              padding: "45px",
            }}
          >
            {pkg.featured && (
              <div
                style={{
                  color: "#111",
                  background: "#C9A55A",
                  display: "inline-block",
                  padding: "6px 18px",
                  borderRadius: "999px",
                  fontWeight: 700,
                  marginBottom: "20px",
                }}
              >
                MOST POPULAR
              </div>
            )}

            <h3
              style={{
                color: "#fff",
                fontSize: "34px",
                marginBottom: "15px",
              }}
            >
              {pkg.title}
            </h3>

            <h4
              style={{
                color: "#C9A55A",
                fontSize: "30px",
                marginBottom: "25px",
              }}
            >
              {pkg.price}
            </h4>

            <p
              style={{
                color: "#bdbdbd",
                lineHeight: 1.8,
                marginBottom: "30px",
              }}
            >
              {pkg.description}
            </p>

            {pkg.features.map((feature) => (
              <p
                key={feature}
                style={{
                  color: "#ddd",
                  marginBottom: "14px",
                }}
              >
                ✓ {feature}
              </p>
            ))}

            <a
              href="#contact"
              style={{
                marginTop: "35px",
                width: "100%",
                padding: "18px",
                border: "none",
                cursor: "pointer",
                display: "block",
                textAlign: "center",
                textDecoration: "none",
                borderRadius: "8px",
                background:
                  "linear-gradient(135deg,#FFF7E2,#E8C26B,#B9832D)",
                color: "#111",
                fontWeight: 700,
              }}
            >
              GET A QUOTE
            </a>
          </motion.div>
        ))}
      </div>

      <Contact />
    </section>
  );
}
