"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { certifications } from "@/lib/data";

export function Certifications() {
  return (
    <section id="certifications" className="section-padding relative">
      <div className="container">
        <SectionHeading eyebrow="Certifications" title="Continuous, verified learning" align="center" />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <Reveal key={cert.name} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="flex h-full items-start gap-4 rounded-2xl border border-border p-5 transition-shadow hover:shadow-glow-sm"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-secondary text-white">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold leading-snug text-text-primary">{cert.name}</h3>
                  <p className="mt-1 text-xs text-text-secondary">
                    {cert.issuer} · {cert.year}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
