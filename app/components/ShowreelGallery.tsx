"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { showreelClips } from "./showreelData";

export default function ShowreelGallery() {
  const [selected, setSelected] = useState(showreelClips[0]);
  const [brokenPosters, setBrokenPosters] = useState<Record<string, boolean>>({});
  const [brokenVideos, setBrokenVideos] = useState<Record<string, boolean>>({});
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const pointerStart = useRef<{ x: number; y: number } | null>(null);

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
      handleSelectClip(clip);
    }
  };

  useEffect(() => {
    if (!videoRef.current || brokenVideos[selected.id]) {
      return;
    }

    videoRef.current.load();
    videoRef.current.play().catch(() => {
      // Some browsers block autoplay even after interaction.
    });
  }, [selected, brokenVideos]);

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
          {brokenVideos[selected.id] ? (
            <div className="showreel-gallery__video showreel-gallery__video-unavailable">
              <p>This clip is not available online yet.</p>
              <p>Upload optimized videos or replace sources with hosted URLs.</p>
            </div>
          ) : (
            <video
              ref={videoRef}
              controls
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={selected.poster}
              src={selected.src}
              className="showreel-gallery__video"
              onError={() =>
                setBrokenVideos((current) => ({
                  ...current,
                  [selected.id]: true,
                }))
              }
            >
              <source
                src={selected.src}
                type={selected.src.toLowerCase().endsWith(".mov") ? "video/quicktime" : "video/mp4"}
              />
              Your browser does not support the video tag.
            </video>
          )}
        </div>

        <div className="showreel-gallery__sidebar">
          <div className="showreel-gallery__thumb-grid">
            {showreelClips.map((clip) => (
              <motion.button
                key={clip.id}
                type="button"
                aria-pressed={selected.id === clip.id}
                onClick={() => handleSelectClip(clip)}
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
