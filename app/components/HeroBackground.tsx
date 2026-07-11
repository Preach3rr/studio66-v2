"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const images = [
  "/images/hero/hero1.jpg",
  "/images/hero/hero2.JPG",
  "/images/hero/hero3.jpg",
  "/images/hero/hero4.jpg",
  "/images/hero/hero5.jpg",
  "/images/hero/hero6.jpg",
  "/images/hero/hero7.jpg",
  "/images/hero/hero8.jpg",
  "/images/hero/hero9.jpg",
  "/images/hero/hero10.jpg",
  "/images/hero/hero11.jpg",
  "/images/hero/hero12.jpg",
  "/images/hero/hero13.jpg",
];

export default function HeroBackground() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrent((previous) => (previous + 1) % images.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={images[current]}
          className="hero-bg-slide absolute inset-0"
          initial={{ opacity: 0, scale: 1.03, filter: "blur(3px)" }}
          animate={{ opacity: 1, scale: 1.1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 1.06, filter: "blur(2px)" }}
          transition={{ opacity: { duration: 1.5 }, scale: { duration: 6.5, ease: "linear" }, filter: { duration: 1.2 } }}
          style={{ pointerEvents: "none" }}
        >
          <Image
            src={images[current]}
            alt=""
            fill
            priority={current === 0}
            className="object-cover"
            style={{ objectPosition: "center center" }}
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      <div className="hero-slider-dots" aria-label="Hero image selector">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            aria-label={`Show image ${index + 1}`}
            aria-current={index === current}
            className={index === current ? "is-active" : ""}
            onClick={() => setCurrent(index)}
            onTouchEnd={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
}
