"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Lightbox from "./Lightbox";
import {
  portfolioImages,
  type PortfolioCategory,
} from "./portfolioData";

type Category = "all" | PortfolioCategory;

const INITIAL_IMAGE_COUNT = 15;

const categories = [
  "all",
  "weddings",
  "christenings",
  "events",
  "portraits",
  "real-estate",
  "commercial",
] as const;

export default function Portfolio() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("all");
  const [showAll, setShowAll] = useState(false);

  const filteredImages =
    activeCategory === "all"
      ? portfolioImages
      : portfolioImages.filter(
          (img) => img.category === activeCategory
        );
  const visibleImages = showAll
    ? filteredImages
    : filteredImages.slice(0, INITIAL_IMAGE_COUNT);

  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(
      (prev) => (prev + 1) % filteredImages.length
    );
  };

  const prev = () => {
    setCurrent(
      (prev) =>
        (prev - 1 + filteredImages.length) %
        filteredImages.length
    );
  };

  return (
    <>
      <section
        id="portfolio"
        className="site-section portfolio-section"
        style={{
          background: "#070707",
          padding: "150px 7%",
        }}
      >
        <div className="portfolio-heading"
          style={{
            textAlign: "center",
            marginBottom: "70px",
          }}
        >
          <p
            style={{
              color: "#C9A55A",
              letterSpacing: ".45em",
              marginBottom: "18px",
              fontWeight: 600,
            }}
          >
            PORTFOLIO
          </p>

          <h2
            style={{
              color: "#fff",
              fontSize: "58px",
              fontWeight: 800,
              marginBottom: "22px",
            }}
          >
            Selected Work
          </h2>

          <p
            style={{
              color: "#BDBDBD",
              fontSize: "18px",
            }}
          >
            Explore our latest photography projects.
          </p>
        </div>

        <div className="portfolio-filters"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "34px",
            marginBottom: "70px",
            flexWrap: "wrap",
          }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setShowAll(false);
              }}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color:
                  activeCategory === category
                    ? "#C9A55A"
                    : "#FFFFFF",
                fontWeight: 600,
                letterSpacing: ".18em",
                fontSize: "14px",
                textTransform: "uppercase",
                transition: ".3s",
              }}
            >
              {category.replace("-", " ")}
            </button>
          ))}
        </div>

        <div
          style={{
            position: "relative",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.35 }}
              className="portfolio-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(360px,1fr))",
                gap: "28px",
              }}
            >
            {visibleImages.map((image, index) => (
              <motion.div
                key={image.src}
                className="portfolio-card"
                whileHover={{
                  y: -8,
                }}
                transition={{
                  duration: 0.3,
                }}
                onClick={() => {
                  setCurrent(index);
                  setOpen(true);
                }}
                style={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "22px",
                  aspectRatio: "4 / 5",
                  cursor: "pointer",
                  boxShadow: "0 20px 50px rgba(0,0,0,.35)",
                }}
              >
                <Image
                  src={image.src}
                  alt=""
                  fill
                  sizes="(max-width: 767px) 86vw, (max-width: 1200px) 43vw, 29vw"
                  className="object-cover transition duration-700 hover:scale-105"
                />

                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,.18), transparent)",
                    opacity: 0,
                    transition: "opacity .35s ease",
                  }}
                  className="hover:opacity-100"
                />

              </motion.div>
            ))}
            </motion.div>
          </AnimatePresence>

        </div>

        {filteredImages.length > INITIAL_IMAGE_COUNT && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "56px",
            }}
          >
            <button
              onClick={() => setShowAll((current) => !current)}
              style={{
                background: "none",
                border: "1px solid #C9A55A",
                borderRadius: "999px",
                color: "#C9A55A",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: ".18em",
                padding: "15px 28px",
                textTransform: "uppercase",
                transition: ".3s",
              }}
            >
              {showAll ? "Show Less" : "View More"}
            </button>
          </div>
        )}
      </section>

      <Lightbox
        images={filteredImages.map((img) => img.src)}
        current={current}
        open={open}
        onClose={() => setOpen(false)}
        onNext={next}
        onPrev={prev}
      />
    </>
  );
}
