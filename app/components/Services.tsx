"use client";

import { Camera, Heart, Building2, Video, Plane, ImageIcon } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Camera,
    title: "Photography",
    text: "Professional photography for every important moment."
  },
  {
    icon: Heart,
    title: "Weddings",
    text: "Luxury wedding photography & cinematic storytelling."
  },
  {
    icon: Video,
    title: "Videography",
    text: "4K cinematic films with professional editing."
  },
  {
    icon: Building2,
    title: "Real Estate",
    text: "Interior, exterior & drone photography."
  },
  {
    icon: Plane,
    title: "Drone",
    text: "Aerial cinematic footage for every project."
  },
  {
    icon: ImageIcon,
    title: "Editing",
    text: "Professional retouching and color grading."
  }
];

export default function Services() {
  return (
    <section id="services" className="site-section"
      style={{
        background: "#090909",
        padding: "140px 8%",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
          color: "#fff",
          textAlign: "center",
          fontSize: "56px",
          fontWeight: 800,
          marginBottom: "18px",
        }}
      >
        Our Services
      </motion.h2>

      <p
        style={{
          textAlign: "center",
          color: "#bdbdbd",
          maxWidth: "700px",
          margin: "0 auto 80px",
          fontSize: "18px",
        }}
      >
        Premium photography and cinematic videography tailored to every client.
      </p>

      <div className="mobile-stack-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "35px",
        }}
      >
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="mobile-card"
              style={{
                background: "#111",
                border: "1px solid rgba(201,165,90,.18)",
                borderRadius: "18px",
                padding: "45px",
              }}
            >
              <Icon
                size={42}
                color="#C9A55A"
                style={{
                  marginBottom: "28px",
                }}
              />

              <h3
                style={{
                  color: "#fff",
                  fontSize: "28px",
                  marginBottom: "18px",
                }}
              >
                {service.title}
              </h3>

              <p
                style={{
                  color: "#b8b8b8",
                  lineHeight: 1.8,
                }}
              >
                {service.text}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
