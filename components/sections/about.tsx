"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { education, profile } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="container">
        <SectionHeading eyebrow="About Me" title="Strategy with a designer's eye" />

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal>
            <div className="group relative mx-auto max-w-sm">
              <div className="absolute -inset-3 rounded-[2.2rem] bg-gradient-primary opacity-30 blur-2xl transition-opacity duration-500 group-hover:opacity-50" />
              <div className="relative overflow-hidden rounded-[2rem] border border-border glass p-2">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem]">
                  <Image
                    src={profile.portraitImage}
                    alt={`Portrait of ${profile.name}`}
                    fill
                    sizes="(max-width: 1024px) 80vw, 400px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="glass absolute -bottom-6 -right-4 flex items-center gap-2 rounded-2xl px-4 py-3 shadow-card sm:-right-8"
              >
                <MapPin className="h-4 w-4 text-cyan" />
                <span className="text-xs font-medium text-text-primary">{profile.location}</span>
              </motion.div>
            </div>
          </Reveal>

          <div className="space-y-8">
            <Reveal delay={0.1}>
              <p className="text-base leading-relaxed text-text-secondary md:text-lg">{profile.summary}</p>
              <p className="mt-4 text-base leading-relaxed text-text-secondary md:text-lg">{profile.extendedSummary}</p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex flex-wrap gap-2">
                {profile.badges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-border px-4 py-1.5 text-xs font-medium text-text-secondary transition-colors hover:border-purple hover:text-text-primary"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="rounded-2xl border border-border glass p-6">
                <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-text-primary">
                  <GraduationCap className="h-4 w-4 text-purple" />
                  Education
                </div>
                <ol className="space-y-4">
                  {education.map((ed) => (
                    <li key={ed.program} className="flex flex-col gap-1 border-l-2 border-border pl-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                      <div>
                        <p className="text-sm font-semibold text-text-primary">{ed.program}</p>
                        <p className="text-xs text-text-secondary">
                          {ed.school} · {ed.location}
                        </p>
                      </div>
                      <span className="whitespace-nowrap text-xs font-medium text-text-secondary">{ed.period}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
