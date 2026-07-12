"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Lightbox from "./Lightbox";
import { studio66BlurDataURL } from "./imagePlaceholders";
import {
  portfolioImages,
  type PortfolioCategory,
} from "./portfolioData";

type Category = "all" | PortfolioCategory;

const DESKTOP_PREVIEW_COUNT = 15;
const COMPACT_PREVIEW_COUNT = 9;

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
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1023px)");
    const updateViewport = () => setIsCompact(mediaQuery.matches);

    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);
    return () => mediaQuery.removeEventListener("change", updateViewport);
  }, []);

  const filteredImages =
    activeCategory === "all"
      ? portfolioImages
      : portfolioImages.filter(
          (img) => img.category === activeCategory
        );
  const previewCount = isCompact ? COMPACT_PREVIEW_COUNT : DESKTOP_PREVIEW_COUNT;
  const hasMoreImages = filteredImages.length > previewCount;
  const visibleImages = showAll
    ? filteredImages
    : filteredImages.slice(0, previewCount);

  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const openLightboxAt = (index: number) => {
    setCurrent(index);
    setOpen(true);
  };

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
          className="portfolio-preview"
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
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
                gap: "24px",
              }}
            >
            {visibleImages.map((image, index) => {
              const lastRowCount = isCompact ? 3 : 5;
              const isPreviewTail = !showAll && hasMoreImages && index >= visibleImages.length - lastRowCount;

              return (
              <motion.button
                type="button"
                key={image.src}
                className={`portfolio-card ${isPreviewTail ? "portfolio-card-preview-tail" : ""}`}
                whileHover={{
                  y: -8,
                }}
                transition={{
                  duration: 0.3,
                }}
                onClick={() => openLightboxAt(index)}
                style={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "22px",
                  aspectRatio: "4 / 5",
                  cursor: "pointer",
                  boxShadow: "0 20px 50px rgba(0,0,0,.35)",
                  border: "none",
                  padding: 0,
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  touchAction: "auto",
                }}
              >
                <Image
                  src={image.src}
                  alt={`Studio66 ${image.category.replace("-", " ")} portfolio photo ${index + 1}`}
                  fill
                  sizes="(max-width: 767px) 31vw, (max-width: 1200px) 43vw, 29vw"
                  loading="lazy"
                  decoding="async"
                  placeholder="blur"
                  blurDataURL={studio66BlurDataURL}
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

              </motion.button>
              );
            })}
            </motion.div>
          </AnimatePresence>

        </div>

        {hasMoreImages && (
          <div
            className="portfolio-more"
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
                {showAll ? "SHOW LESS" : "SHOW MORE"}
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
