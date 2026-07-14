"use client";

import { motion } from "framer-motion";
import { BarChart3, Layout, Mail, Search, Target, Users } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { skillGroups, skills } from "@/lib/data";

const icons: Record<string, React.ElementType> = {
  search: Search,
  layout: Layout,
  users: Users,
  chart: BarChart3,
  target: Target,
  mail: Mail,
};

export function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="container">
        <SectionHeading eyebrow="Skills" title="What I bring to the table" align="center" />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, i) => {
            const Icon = icons[skill.icon];
            return (
              <Reveal key={skill.title} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className="group h-full rounded-2xl border border-border glass p-6 transition-shadow hover:shadow-glow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-white shadow-glow-sm transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-text-primary">{skill.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">{skill.description}</p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-border p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary">{group.category}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-surface px-3 py-1.5 text-xs font-medium text-text-secondary transition-colors hover:text-text-primary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
