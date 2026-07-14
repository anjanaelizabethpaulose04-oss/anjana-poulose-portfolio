"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

const glow: Record<Project["color"], string> = {
  blue: "from-blue/40 to-transparent",
  purple: "from-purple/40 to-transparent",
  cyan: "from-cyan/40 to-transparent",
};

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -8, y: px * 8 });
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1200 }}
    >
      <Link href={`/projects/${project.slug}`} data-cursor-hover className="group block">
        <motion.div
          ref={ref}
          onMouseMove={handleMove}
          onMouseLeave={() => setTilt({ x: 0, y: 0 })}
          animate={{ rotateX: tilt.x, rotateY: tilt.y }}
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
          className="relative overflow-hidden rounded-3xl border border-border glass"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className={`absolute -inset-24 -z-10 bg-gradient-radial ${glow[project.color]} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`} />

          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={project.cover}
              alt={`${project.title} cover image`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-bg/10 to-transparent" />
            <div className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white/90 text-bg opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>

          <div className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary">{project.industry}</p>
            <h3 className="mt-2 text-xl font-bold text-text-primary">{project.title}</h3>
            <p className="mt-1 text-sm text-text-secondary">{project.subtitle}</p>
            <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-text-secondary">{project.summary}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tools.slice(0, 3).map((tool) => (
                <span key={tool} className="rounded-full bg-surface px-3 py-1 text-[11px] font-medium text-text-secondary">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
