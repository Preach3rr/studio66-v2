"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { MouseEvent } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
  { name: "Show Reel", href: "/cinematic-storytelling" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9 }}
      className="site-navbar fixed inset-x-0 top-0 z-50"
    >
      <motion.div
        animate={{
          backgroundColor: scrolled
            ? "rgba(8,8,8,.82)"
            : "rgba(0,0,0,.15)",
          backdropFilter: scrolled ? "blur(22px)" : "blur(10px)",
        }}
        transition={{
          duration: 0.4,
        }}
        className="absolute inset-0 pointer-events-none"
      />

      <motion.div
        animate={{
          opacity: scrolled ? 1 : 0.35,
        }}
        className="absolute bottom-0 left-0 h-px w-full pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg,transparent,#7E5C24,#C9A55A,#FFF4CF,#C9A55A,#7E5C24,transparent)",
        }}
      />

      <motion.div
        animate={{
          opacity: scrolled ? 0.9 : 0.35,
        }}
        className="absolute bottom-0 left-1/2 h-[5px] w-96 -translate-x-1/2 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle,#FFF8DD 0%,#C9A55A 35%,transparent 100%)",
          filter: "blur(6px)",
        }}
      />

      <motion.div
        animate={{
          height: scrolled ? 78 : 92,
        }}
        transition={{
          duration: 0.35,
        }}
        className="relative mx-auto flex max-w-[1850px] items-center justify-between px-5 md:px-10 xl:px-20"
      >
        <Link href="/" onClick={handleLogoClick} className="flex items-center">
          <motion.div
            animate={{
              scale: scrolled ? 0.88 : 1,
            }}
            transition={{
              duration: 0.35,
            }}
          >
            <Image
              src="/logo/studio66.png"
              alt="Studio66"
              width={165}
              height={165}
              priority
              className="h-auto w-[120px] sm:w-[145px] lg:w-[165px]"
            />
          </motion.div>
        </Link>

        <nav className="hidden lg:flex items-center gap-20">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative text-[17px] font-medium tracking-wide text-white transition duration-300 hover:text-[#E8CB8B]"
            >
              {link.name}
              <span
                className="absolute -bottom-3 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-[#C9A55A] transition-all duration-300 group-hover:w-full"
              />
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="relative z-10 grid h-11 w-11 place-items-center rounded-full border border-[#C9A55A]/50 text-[#E8CB8B] lg:hidden"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu overlay"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="fixed inset-x-0 bottom-0 top-[94px] bg-[#050505]/86 backdrop-blur-sm lg:hidden"
            />

            <motion.nav
              id="mobile-navigation"
              initial={{ opacity: 0, y: -20, clipPath: "inset(0 0 100% 0)" }}
              animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
              exit={{ opacity: 0, y: -14, clipPath: "inset(0 0 100% 0)" }}
              transition={{ duration: 0.46, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-x-0 bottom-0 top-[94px] overflow-y-auto border-t border-[#C9A55A]/20 bg-[#090909]/96 px-5 py-6 backdrop-blur-xl origin-top lg:hidden"
            >
              <div className="mx-auto flex max-w-[1850px] flex-col gap-2 pb-24">
                {links.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.26, delay: 0.05 + index * 0.04 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="rounded-lg border border-transparent bg-white/[0.03] px-4 py-3 text-sm font-medium tracking-wide text-white hover:border-[#C9A55A]/30 hover:bg-white/5 hover:text-[#E8CB8B]"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 22 }}
                transition={{ duration: 0.34, delay: 0.1 }}
                className="pointer-events-none fixed inset-x-0 bottom-5 px-5 lg:hidden"
              >
                <div className="pointer-events-auto mx-auto grid max-w-[1850px] grid-cols-2 gap-3 rounded-2xl border border-[#C9A55A]/20 bg-[#070707]/95 p-3 shadow-[0_12px_28px_rgba(0,0,0,.45)] backdrop-blur-md">
                  <Link
                    href="#contact"
                    onClick={() => setMenuOpen(false)}
                    className="rounded-xl border border-[#C9A55A]/40 bg-[#C9A55A]/15 px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.18em] text-[#F2DEAA]"
                  >
                    Book Now
                  </Link>
                  <Link
                    href="#portfolio"
                    onClick={() => setMenuOpen(false)}
                    className="rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.18em] text-white"
                  >
                    Portfolio
                  </Link>
                </div>
              </motion.div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}