import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import { projects, getProject } from "@/lib/projects";
import { ImageGrid } from "@/components/project/image-grid";
import { StatGrid } from "@/components/project/stat-grid";
import { Reveal } from "@/components/ui/reveal";
import { Magnetic } from "@/components/ui/magnetic-button";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: { title: project.title, description: project.summary, images: [{ url: project.cover }] },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <article>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32">
        <div className="container">
          <Reveal>
            <Link
              href="/#projects"
              data-cursor-hover
              className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
            >
              <ArrowLeft className="h-4 w-4" /> All Projects
            </Link>
          </Reveal>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <Reveal delay={0.05}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple">{project.industry}</p>
              <h1 className="mt-4 font-display text-h2 font-extrabold text-text-primary">{project.title}</h1>
              <p className="mt-3 text-lg text-text-secondary">{project.subtitle}</p>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-text-secondary">{project.overview}</p>

              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-text-secondary">Role</p>
                  <p className="mt-1 text-sm text-text-primary">{project.role}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-text-secondary">Client</p>
                  <p className="mt-1 text-sm text-text-primary">{project.client}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-text-secondary">Tools</p>
                  <p className="mt-1 text-sm text-text-primary">{project.tools.slice(0, 3).join(", ")}</p>
                </div>
              </div>

              {project.externalLinks && (
                <div className="mt-8 flex flex-wrap gap-3">
                  {project.externalLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      data-cursor-hover
                      className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-medium text-text-secondary transition-colors hover:border-purple hover:text-text-primary"
                    >
                      {link.label} <ExternalLink className="h-3 w-3" />
                    </a>
                  ))}
                </div>
              )}
            </Reveal>

            <Reveal delay={0.15}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-card">
                <Image src={project.cover} alt={`${project.title} hero image`} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Problem statement */}
      {project.problems && (
        <section className="section-padding">
          <div className="container">
            <Reveal>
              <h2 className="font-display text-h3 font-bold text-text-primary">The Problem</h2>
            </Reveal>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {project.problems.map((problem, i) => (
                <Reveal key={problem} delay={i * 0.08}>
                  <div className="h-full rounded-2xl border border-border p-5 text-sm leading-relaxed text-text-secondary">
                    {problem}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Audience research */}
      {project.audience && (
        <section className="section-padding border-t border-border">
          <div className="container grid gap-10 lg:grid-cols-2">
            <Reveal>
              <h2 className="font-display text-h3 font-bold text-text-primary">Audience &amp; Research</h2>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                <strong className="text-text-primary">Target audience:</strong> {project.audience.target}
              </p>
              {project.audience.channels && (
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  <strong className="text-text-primary">Channels:</strong> {project.audience.channels}
                </p>
              )}
              {project.audience.usp && (
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  <strong className="text-text-primary">USP:</strong> {project.audience.usp}
                </p>
              )}
            </Reveal>
            <Reveal delay={0.1}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-text-secondary">Pain Points</h3>
              <ul className="mt-4 space-y-3">
                {project.audience.painPoints.map((point) => (
                  <li key={point} className="flex gap-3 rounded-xl border border-border p-4 text-sm text-text-secondary">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-primary" />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      )}

      {/* Research artifacts: personas, journey maps, etc. */}
      {project.research && project.research.some((r) => r.images.length > 0) && (
        <section className="section-padding border-t border-border">
          <div className="container">
            <Reveal>
              <h2 className="font-display text-h3 font-bold text-text-primary">Research &amp; Discovery</h2>
            </Reveal>
            <div className="mt-10 space-y-14">
              {project.research.map((block) => (
                <div key={block.heading}>
                  <Reveal>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-purple">{block.heading}</h3>
                    {block.description && (
                      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-text-secondary">{block.description}</p>
                    )}
                  </Reveal>
                  {block.images.length > 0 && (
                    <div className="mt-6">
                      <ImageGrid images={block.images} columns={block.images.length === 1 ? 2 : 3} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Content strategy */}
      {project.contentStrategy && (
        <section className="section-padding border-t border-border">
          <div className="container">
            <Reveal>
              <h2 className="font-display text-h3 font-bold text-text-primary">Content Strategy</h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-text-secondary">{project.contentStrategy.mission}</p>
            </Reveal>
            <div className="mt-8 overflow-hidden rounded-2xl border border-border">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface">
                    <th className="px-5 py-3 font-semibold text-text-primary">Content Pillar</th>
                    <th className="px-5 py-3 font-semibold text-text-primary">Key Strength Highlighted</th>
                  </tr>
                </thead>
                <tbody>
                  {project.contentStrategy.pillars.map((row, i) => (
                    <tr key={row.pillar} className={i % 2 === 0 ? "" : "bg-surface/50"}>
                      <td className="px-5 py-3.5 text-text-secondary">{row.pillar}</td>
                      <td className="px-5 py-3.5 text-text-secondary">{row.strength}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Campaigns */}
      {project.campaigns && (
        <section className="section-padding border-t border-border">
          <div className="container">
            <Reveal>
              <h2 className="font-display text-h3 font-bold text-text-primary">{project.campaigns.heading}</h2>
              {project.campaigns.goal && (
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-text-secondary">{project.campaigns.goal}</p>
              )}
            </Reveal>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {project.campaigns.items.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.08}>
                  <div className="h-full rounded-2xl border border-border glass p-6">
                    <h3 className="text-base font-semibold text-text-primary">{item.title}</h3>
                    <p className="mt-1 text-xs font-medium text-purple">{item.objective}</p>
                    <p className="mt-3 text-sm leading-relaxed text-text-secondary">{item.detail}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            {project.campaigns.kpis && (
              <Reveal delay={0.2}>
                <div className="mt-8 rounded-2xl border border-border p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-text-secondary">KPIs Tracked</h3>
                  <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                    {project.campaigns.kpis.map((kpi) => (
                      <li key={kpi} className="flex gap-2.5 text-sm text-text-secondary">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                        {kpi}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )}

            {project.campaigns.images && project.campaigns.images.length > 0 && (
              <div className="mt-10">
                <ImageGrid images={project.campaigns.images} columns={4} />
              </div>
            )}
          </div>
        </section>
      )}

      {/* Budget */}
      {project.budget && (
        <section className="section-padding border-t border-border">
          <div className="container">
            <Reveal>
              <h2 className="font-display text-h3 font-bold text-text-primary">Budget Allocation</h2>
            </Reveal>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {project.budget.map((item) => (
                <div key={item.label} className="rounded-2xl border border-border p-5 text-center">
                  <p className="font-display text-xl font-bold text-text-primary">{item.value}</p>
                  <p className="mt-1 text-xs text-text-secondary">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="section-padding border-t border-border">
          <div className="container">
            <Reveal>
              <h2 className="font-display text-h3 font-bold text-text-primary">Gallery</h2>
            </Reveal>
            <div className="mt-8">
              <ImageGrid images={project.gallery} columns={project.gallery.length > 6 ? 4 : 3} />
            </div>
          </div>
        </section>
      )}

      {/* Results */}
      <section className="section-padding border-t border-border">
        <div className="container">
          <Reveal>
            <h2 className="font-display text-h3 font-bold text-text-primary">Outcomes</h2>
          </Reveal>
          <div className="mt-8">
            <StatGrid stats={project.results} />
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="section-padding border-t border-border">
        <div className="container">
          <Reveal>
            <div className="mx-auto max-w-3xl rounded-3xl border border-border glass p-8 sm:p-10">
              <h2 className="font-display text-h3 font-bold text-text-primary">Lessons Learned</h2>
              <p className="mt-4 text-base leading-relaxed text-text-secondary">{project.reflection}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Next project */}
      <section className="border-t border-border py-14">
        <div className="container">
          <Reveal>
            <Link href={`/projects/${nextProject.slug}`} data-cursor-hover className="group flex items-center justify-between gap-6 rounded-3xl border border-border glass p-8 transition-shadow hover:shadow-glow-sm">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary">Next Project</p>
                <p className="mt-2 font-display text-2xl font-bold text-text-primary">{nextProject.title}</p>
              </div>
              <ArrowUpRight className="h-8 w-8 shrink-0 text-text-secondary transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-purple" />
            </Link>
          </Reveal>
        </div>
      </section>
    </article>
  );
}
