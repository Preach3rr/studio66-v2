"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "500+",
    title: "Projects Completed",
  },
  {
    number: "150+",
    title: "Happy Clients",
  },
  {
    number: "8+",
    title: "Years Experience",
  },
  {
    number: "100%",
    title: "Client Satisfaction",
  },
];

export default function Stats() {
  return (
    <section className="site-section"
      style={{
        background: "#0b0b0b",
        padding: "120px 8%",
      }}
    >
      <div className="stats-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "40px",
          textAlign: "center",
        }}
      >
        {stats.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
          >
            <h2
              style={{
                fontSize: "64px",
                color: "#C9A55A",
                fontWeight: 800,
                marginBottom: "12px",
              }}
            >
              {item.number}
            </h2>

            <p
              style={{
                color: "#d6d6d6",
                fontSize: "18px",
                letterSpacing: ".05em",
              }}
            >
              {item.title}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
