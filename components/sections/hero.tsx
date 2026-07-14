"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { Magnetic } from "@/components/ui/magnetic-button";
import { HeroSceneClient } from "@/components/three/hero-scene-client";
import { heroWords, profile } from "@/lib/data";

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setWordIndex((i) => (i + 1) % heroWords.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden pt-28">
      <div className="container grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-text-secondary"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
            </span>
            AVAILABLE FOR OPPORTUNITIES
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display text-hero font-extrabold text-text-primary"
          >
            Hi, I&apos;m {profile.name.split(" ")[0]} —
            <br />
            <span className="text-gradient">{profile.tagline}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 h-8 overflow-hidden"
          >
            <motion.p
              key={wordIndex}
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -24, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-lg font-semibold tracking-[0.15em] text-text-secondary sm:text-xl"
            >
              {heroWords[wordIndex]}
            </motion.p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-text-secondary md:text-lg"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Magnetic
              as="a"
              href="/#projects"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold text-white shadow-glow-sm transition-transform hover:scale-[1.04]"
            >
              View Projects <ArrowUpRight className="h-4 w-4" />
            </Magnetic>
            <Magnetic
              as="a"
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-text-primary transition-all hover:border-purple hover:shadow-glow-sm"
            >
              Download Resume <Download className="h-4 w-4" />
            </Magnetic>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-14 flex flex-wrap gap-x-10 gap-y-4"
          >
            {[
              ["3", "Featured case studies"],
              ["40%", "Engagement lift, ABJ Wedding"],
              ["6", "Marketing certifications"],
            ].map(([stat, label]) => (
              <div key={label}>
                <p className="font-display text-2xl font-bold text-gradient">{stat}</p>
                <p className="mt-1 max-w-[9rem] text-xs text-text-secondary">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative mx-auto h-[340px] w-full max-w-[480px] sm:h-[440px] lg:h-[560px]"
        >
          <HeroSceneClient />
        </motion.div>
      </div>

      <motion.a
        href="/#about"
        data-cursor-hover
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-text-secondary sm:flex"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[10px] tracking-[0.3em]">SCROLL</span>
        <ArrowDown className="h-4 w-4" />
      </motion.a>
    </section>
  );
}
