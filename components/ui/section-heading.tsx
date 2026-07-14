"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-xl", className)}
    >
      <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-text-secondary">
        <span className="h-1.5 w-1.5 rounded-full bg-gradient-primary" />
        {eyebrow.toUpperCase()}
      </span>
      <h2 className="mt-5 font-display text-h2 font-bold text-text-primary">{title}</h2>
      {description && <p className="mt-4 text-base leading-relaxed text-text-secondary md:text-lg">{description}</p>}
    </motion.div>
  );
}
