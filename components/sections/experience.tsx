"use client";

import { Briefcase } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="container">
        <SectionHeading eyebrow="Experience" title="Where I've grown my craft" />

        <div className="relative mt-14 pl-8 sm:pl-10">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-blue via-purple to-cyan sm:left-[11px]" />
          <ol className="space-y-10">
            {experience.map((job, i) => (
              <Reveal key={job.role + job.period} delay={i * 0.06}>
                <li className="relative">
                  <span className="absolute -left-8 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-primary shadow-glow-sm sm:-left-10 sm:h-5 sm:w-5">
                    <Briefcase className="h-2.5 w-2.5 text-white" />
                  </span>
                  <div className="rounded-2xl border border-border glass p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-glow-sm">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-lg font-semibold text-text-primary">{job.role}</h3>
                      <span className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-text-secondary">
                        {job.period}
                      </span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-transparent bg-gradient-primary bg-clip-text">
                      {job.company} · {job.location}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {job.points.map((point) => (
                        <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-text-secondary">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-purple" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
