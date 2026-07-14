import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "./project-card";
import { projects } from "@/lib/projects";

export function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="container">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Featured Projects"
            title="Case studies that show the work"
            description="Three projects spanning career-services strategy, wedding-industry growth, and hands-on creative — each with the full process behind it."
          />
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
