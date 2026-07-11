"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    name: "Emma & Daniel",
    text: "Studio66 captured every emotion perfectly. The photos exceeded all our expectations.",
  },
  {
    name: "Michael Jensen",
    text: "Professional from start to finish. The video quality and editing were absolutely incredible.",
  },
  {
    name: "Sophia Larsen",
    text: "Amazing communication, beautiful colors and fantastic attention to detail.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="site-section"
      style={{
        background: "#090909",
        padding: "140px 8%",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#fff",
          fontSize: "58px",
          fontWeight: 800,
          marginBottom: "18px",
        }}
      >
        What Clients Say
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#bcbcbc",
          fontSize: "18px",
          marginBottom: "80px",
        }}
      >
        Every project tells a different story.
      </p>

      <div className="mobile-stack-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))",
          gap: "35px",
        }}
      >
        {reviews.map((review, index) => (
          <motion.div
            key={review.name}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            whileHover={{
              y: -10,
            }}
            className="mobile-card"
            style={{
              background: "#111",
              border: "1px solid rgba(201,165,90,.18)",
              borderRadius: "18px",
              padding: "45px",
            }}
          >
            <div
              style={{
                color: "#C9A55A",
                fontSize: "42px",
                marginBottom: "20px",
              }}
            >
              ★★★★★
            </div>

            <p
              style={{
                color: "#ddd",
                lineHeight: 1.9,
                marginBottom: "28px",
              }}
            >
              {review.text}
            </p>

            <h3
              style={{
                color: "#fff",
                fontSize: "22px",
              }}
            >
              {review.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
