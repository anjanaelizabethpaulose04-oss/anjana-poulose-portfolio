"use client";

import Link from "next/link";
import { ArrowUp, Linkedin, Mail, Phone } from "lucide-react";
import { Magnetic } from "@/components/ui/magnetic-button";
import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="container section-padding !pb-10">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <span className="font-display text-2xl font-bold text-gradient">{profile.initials}</span>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-text-secondary">{profile.tagline}</p>
            <div className="mt-6 flex items-center gap-3">
              <Magnetic
                as="a"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full glass text-text-primary transition-colors hover:text-blue"
              >
                <Linkedin className="h-[18px] w-[18px]" />
              </Magnetic>
              <Magnetic
                as="a"
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="flex h-11 w-11 items-center justify-center rounded-full glass text-text-primary transition-colors hover:text-purple"
              >
                <Mail className="h-[18px] w-[18px]" />
              </Magnetic>
              <Magnetic
                as="a"
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                aria-label="Phone"
                className="flex h-11 w-11 items-center justify-center rounded-full glass text-text-primary transition-colors hover:text-cyan"
              >
                <Phone className="h-[18px] w-[18px]" />
              </Magnetic>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary">Navigate</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                ["About", "/#about"],
                ["Projects", "/#projects"],
                ["Experience", "/#experience"],
                ["Contact", "/#contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-text-secondary transition-colors hover:text-text-primary">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary">Contact</p>
            <ul className="mt-4 space-y-2.5 text-sm text-text-secondary">
              <li>{profile.location}</li>
              <li>
                <a href={`mailto:${profile.email}`} className="hover:text-text-primary">
                  {profile.email}
                </a>
              </li>
              <li>
                <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="hover:text-text-primary">
                  {profile.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-xs text-text-secondary sm:flex-row">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <Magnetic
            as="a"
            href="#top"
            strength={12}
            aria-label="Back to top"
            className="flex items-center gap-2 rounded-full glass px-4 py-2 text-text-primary transition-transform hover:-translate-y-0.5"
          >
            Back to top <ArrowUp className="h-3.5 w-3.5" />
          </Magnetic>
        </div>
      </div>
    </footer>
  );
}
