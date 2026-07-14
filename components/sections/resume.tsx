"use client";

import Image from "next/image";
import { Download, FileText } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Magnetic } from "@/components/ui/magnetic-button";
import { profile } from "@/lib/data";

export function Resume() {
  return (
    <section id="resume" className="section-padding relative">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <SectionHeading eyebrow="Resume" title="The full picture, one PDF away" />
            <p className="mt-6 max-w-md text-sm leading-relaxed text-text-secondary md:text-base">
              For the complete breakdown of my experience, education, tools, and certifications — download
              my up-to-date resume below.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Magnetic
                as="a"
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold text-white shadow-glow-sm transition-transform hover:scale-[1.04]"
              >
                Download Resume <Download className="h-4 w-4" />
              </Magnetic>
              <Magnetic
                as="a"
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-text-primary transition-all hover:border-purple hover:shadow-glow-sm"
              >
                View Full Screen <FileText className="h-4 w-4" />
              </Magnetic>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="group relative mx-auto max-w-xs">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-secondary opacity-25 blur-2xl transition-opacity duration-500 group-hover:opacity-45" />
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer noopener"
                data-cursor-hover
                className="relative block overflow-hidden rounded-[1.75rem] border border-border glass p-2 transition-transform duration-500 hover:-translate-y-2"
              >
                <div className="relative aspect-[820/1353] overflow-hidden rounded-[1.4rem]">
                  <Image
                    src={profile.resumePreviewImage}
                    alt={`${profile.name} resume preview`}
                    fill
                    sizes="(max-width: 640px) 80vw, 320px"
                    className="object-cover object-top"
                  />
                </div>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
