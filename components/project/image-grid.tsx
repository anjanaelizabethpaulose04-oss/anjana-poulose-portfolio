"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function ImageGrid({
  images,
  columns = 3,
}: {
  images: { src: string; alt: string; label?: string }[];
  columns?: 2 | 3 | 4;
}) {
  const colClass = { 2: "sm:grid-cols-2", 3: "sm:grid-cols-3", 4: "sm:grid-cols-4" }[columns];

  return (
    <div className={`grid grid-cols-2 gap-4 ${colClass}`}>
      {images.map((img, i) => (
        <motion.div
          key={img.src + i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: (i % columns) * 0.06 }}
          whileHover={{ y: -6 }}
          className="group relative aspect-square overflow-hidden rounded-2xl border border-border bg-surface"
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="(max-width: 640px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          {img.label && (
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="text-xs font-medium text-white">{img.label}</p>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
