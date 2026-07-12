"use client";

import Image from "next/image";
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
  const [previous, setPrevious] = useState<number | null>(null);
  const [isFading, setIsFading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateViewport = () => setIsMobile(mediaQuery.matches);

    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);
    return () => mediaQuery.removeEventListener("change", updateViewport);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrent((prevCurrent) => {
        const nextIndex = (prevCurrent + 1) % images.length;
        setPrevious(prevCurrent);
        setIsFading(true);
        return nextIndex;
      });
    }, 6500);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    let ticking = false;

    const updateParallax = () => {
      const strength = isMobile ? 0.08 : 0.12;
      const limit = isMobile ? 28 : 52;
      const nextOffset = Math.max(-limit, Math.min(limit, window.scrollY * strength));
      setParallaxY(nextOffset);
      ticking = false;
    };

    const handleScroll = () => {
      if (ticking) {
        return;
      }
      ticking = true;
      window.requestAnimationFrame(updateParallax);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  useEffect(() => {
    if (!isFading) {
      return;
    }

    const fadeTimer = window.setTimeout(() => {
      setPrevious(null);
      setIsFading(false);
    }, 980);

    return () => window.clearTimeout(fadeTimer);
  }, [isFading]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="hero-bg-parallax absolute inset-0"
        style={{ transform: `translate3d(0, ${parallaxY}px, 0)` }}
      >
        {previous !== null && (
          <div className={`hero-bg-slide hero-bg-slide--previous absolute inset-0${isFading ? " is-fading" : ""}`} style={{ pointerEvents: "none" }}>
            <Image
              src={images[previous]}
              alt=""
              fill
              priority={previous === 0}
              className="object-cover"
              style={{ objectPosition: "center center" }}
              sizes="100vw"
            />
          </div>
        )}

        <div
          className={`hero-bg-slide hero-bg-slide--current absolute inset-0${isFading ? " is-fading" : ""}`}
          style={{ pointerEvents: "none" }}
        >
          <Image
            src={images[current]}
            alt=""
            fill
            priority={current === 0}
            className="object-cover"
            style={{ objectPosition: isMobile ? "center 34%" : "center center" }}
            sizes="100vw"
          />
        </div>
      </div>

      <div className="hero-slider-dots" aria-label="Hero image selector">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            aria-label={`Show image ${index + 1}`}
            aria-current={index === current}
            className={index === current ? "is-active" : ""}
            onClick={() => {
              if (index === current) {
                return;
              }
              setPrevious(current);
              setCurrent(index);
              setIsFading(true);
            }}
          />
        ))}
      </div>
    </div>
  );
}
