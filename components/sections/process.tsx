"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { process } from "@/lib/data";

export function Process() {
  return (
    <section id="process" className="section-padding relative overflow-hidden">
      <div className="container">
        <SectionHeading
          eyebrow="Process"
          title="My design-informed marketing process"
          description="Every campaign and case study on this site follows the same three steps — borrowed from UX practice and applied to marketing strategy."
          align="center"
        />

        <div className="relative mt-16 grid gap-6 md:grid-cols-3">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-border md:block" />
          {process.map((stage, i) => (
            <Reveal key={stage.step} delay={i * 0.08} className="relative">
              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary font-display text-lg font-bold text-white shadow-glow-sm">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-purple">{stage.step}</p>
                <h3 className="mt-2 text-base font-semibold text-text-primary">{stage.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{stage.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
