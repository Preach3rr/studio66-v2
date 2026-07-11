"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect } from "react";

type Props = {
  images: string[];
  current: number;
  open: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};

export default function Lightbox({ images, current, open, onClose, onNext, onPrev }: Props) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onNext();
      if (event.key === "ArrowLeft") onPrev();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose, onNext, onPrev]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }} onClick={onClose}
        >
          <button type="button" aria-label="Previous image" className="lightbox-control lightbox-prev" onClick={(event) => { event.stopPropagation(); onPrev(); }}>
            <ChevronLeft aria-hidden="true" size={36} />
          </button>

          <motion.div key={images[current]} className="lightbox-image" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.25 }} onClick={(event) => event.stopPropagation()}>
            <Image src={images[current]} alt="Portfolio image" fill sizes="100vw" className="object-contain" priority />
          </motion.div>

          <button type="button" aria-label="Next image" className="lightbox-control lightbox-next" onClick={(event) => { event.stopPropagation(); onNext(); }}>
            <ChevronRight aria-hidden="true" size={36} />
          </button>
          <button type="button" aria-label="Close gallery" className="lightbox-close" onClick={onClose}>
            <X aria-hidden="true" size={28} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
