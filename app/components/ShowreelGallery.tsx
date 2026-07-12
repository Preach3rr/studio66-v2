"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { showreelClips } from "./showreelData";
import { studio66BlurDataURL } from "./imagePlaceholders";

export default function ShowreelGallery() {
  const [selected, setSelected] = useState(showreelClips[0]);
  const [brokenPosters, setBrokenPosters] = useState<Record<string, boolean>>({});
  const pointerStart = useRef<{ x: number; y: number } | null>(null);
  const ignoreNextClick = useRef(false);

  const handleSelectClip = (clip: (typeof showreelClips)[number]) => {
    setSelected(clip);
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLButtonElement>) => {
    pointerStart.current = { x: event.clientX, y: event.clientY };
  };

  const handlePointerUp = (
    event: React.PointerEvent<HTMLButtonElement>,
    clip: (typeof showreelClips)[number],
  ) => {
    if (!pointerStart.current) {
      handleSelectClip(clip);
      return;
    }

    const dx = Math.abs(event.clientX - pointerStart.current.x);
    const dy = Math.abs(event.clientY - pointerStart.current.y);

    pointerStart.current = null;

    // Ignore drag gestures so scroll remains smooth on touch screens.
    if (dx < 10 && dy < 10) {
      ignoreNextClick.current = true;
      handleSelectClip(clip);
      window.setTimeout(() => {
        ignoreNextClick.current = false;
      }, 0);
    }
  };

  // Ensure clip 0 is shown first on mobile: move selected to first if not already
  // (keeps desktop behavior unchanged but reinforces mobile initial state)
  // No-op if showreelClips[0] is already the desired one.

  return (
    <section className="site-section showreel-gallery">
      <div className="showreel-gallery__header">
        <p className="showreel-gallery__eyebrow">WATCH SHOWREEL</p>
      </div>

      <div className="showreel-gallery__layout">
        <div className="showreel-gallery__player">
          <video
            key={selected.src}
            controls
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={selected.poster}
            src={selected.src}
            className="showreel-gallery__video"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="showreel-gallery__sidebar">
          <div className="showreel-gallery__thumb-grid">
            {showreelClips.map((clip) => (
              <motion.button
                key={clip.id}
                type="button"
                aria-pressed={selected.id === clip.id}
                onClick={() => {
                  if (ignoreNextClick.current) {
                    return;
                  }
                  handleSelectClip(clip);
                }}
                onPointerDown={handlePointerDown}
                onPointerUp={(event) => handlePointerUp(event, clip)}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                style={{ touchAction: "manipulation" }}
                className={`showreel-gallery__thumb-button${selected.id === clip.id ? " showreel-gallery__thumb-button--active" : ""}`}
              >
                <div className="showreel-gallery__thumb-card">
                  {brokenPosters[clip.id] ? (
                    <div className="showreel-gallery__thumb-broken">No thumbnail available</div>
                  ) : (
                    <Image
                      src={clip.poster}
                      alt={clip.title}
                      fill
                      sizes="(max-width: 767px) 50vw, 20vw"
                      loading="lazy"
                      decoding="async"
                      placeholder="blur"
                      blurDataURL={studio66BlurDataURL}
                      className="object-cover"
                      onError={() =>
                        setBrokenPosters((current) => ({
                          ...current,
                          [clip.id]: true,
                        }))
                      }
                    />
                  )}

                  <div className="showreel-gallery__thumb-overlay" />

                  <div className="showreel-gallery__thumb-play">
                    <span className="showreel-gallery__play-icon" />
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
