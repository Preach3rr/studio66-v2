"use client";

import { motion } from "framer-motion";
import {
  Camera,
  Video,
  Sparkles,
  Plane
} from "lucide-react";

const items = [
  {
    icon: Camera,
    title: "Professional Photography",
    text: "Every image is carefully composed, edited and delivered in premium quality."
  },
  {
    icon: Video,
    title: "Cinematic Videography",
    text: "Beautiful storytelling through smooth cinematic films in stunning 4K."
  },
  {
    icon: Plane,
    title: "Drone Coverage",
    text: "Unique aerial perspectives that make every project unforgettable."
  },
  {
    icon: Sparkles,
    title: "Luxury Editing",
    text: "Professional retouching and color grading inspired by editorial photography."
  }
];

export default function WhyUs() {
  return (
    <section className="site-section"
      style={{
        padding: "150px 8%",
        background: "#070707",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
          textAlign: "center",
          color: "#fff",
          fontSize: "60px",
          fontWeight: 800,
          marginBottom: "25px",
        }}
      >
        Why Studio66?
      </motion.h2>

      <p
        style={{
          textAlign: "center",
          color: "#bdbdbd",
          maxWidth: "720px",
          margin: "0 auto 90px",
          fontSize: "18px",
        }}
      >
        We combine creativity, technology and emotion to deliver timeless memories.
      </p>

      <div className="mobile-stack-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "35px",
        }}
      >
        {items.map((item, index) => {

          const Icon = item.icon;

          return (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * .15,
              }}
              whileHover={{
                y: -12,
              }}
              className="mobile-card"
              style={{
                background: "#101010",
                border: "1px solid rgba(201,165,90,.18)",
                borderRadius: "22px",
                padding: "45px",
              }}
            >
              <Icon
                size={46}
                color="#C9A55A"
                style={{
                  marginBottom: "28px",
                }}
              />

              <h3
                style={{
                  color: "#fff",
                  fontSize: "30px",
                  marginBottom: "18px",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#bdbdbd",
                  lineHeight: 1.8,
                }}
              >
                {item.text}
              </p>

            </motion.div>

          );

        })}
      </div>

    </section>
  );
}
