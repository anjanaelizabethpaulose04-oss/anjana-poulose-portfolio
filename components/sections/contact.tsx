"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Magnetic } from "@/components/ui/magnetic-button";
import { profile } from "@/lib/data";

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [values, setValues] = useState({ name: "", email: "", message: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("success");
      setValues({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section id="contact" className="section-padding relative">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Contact"
              title="Let's build something measurable"
              description="Have a role, project, or campaign in mind? I'd love to hear about it."
            />
            <div className="mt-10 space-y-4">
              {[
                { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
                { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
                { icon: MapPin, label: profile.location, href: undefined },
              ].map(({ icon: Icon, label, href }) => {
                const content = (
                  <div className="flex items-center gap-3 rounded-xl border border-border p-4 text-sm text-text-secondary transition-colors hover:border-purple hover:text-text-primary">
                    <Icon className="h-4 w-4 shrink-0 text-purple" />
                    {label}
                  </div>
                );
                return href ? (
                  <a key={label} href={href} data-cursor-hover>
                    {content}
                  </a>
                ) : (
                  <div key={label}>{content}</div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <form onSubmit={handleSubmit} className="rounded-3xl border border-border glass p-6 sm:p-8" noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label htmlFor="name" className="mb-2 block text-xs font-semibold text-text-secondary">
                    Name
                  </label>
                  <input
                    id="name"
                    required
                    value={values.name}
                    onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
                    className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-purple"
                    placeholder="Your name"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="email" className="mb-2 block text-xs font-semibold text-text-secondary">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={values.email}
                    onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
                    className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-purple"
                    placeholder="you@email.com"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-2 block text-xs font-semibold text-text-secondary">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={values.message}
                    onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
                    className="w-full resize-none rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-purple"
                    placeholder="Tell me a bit about your project or role…"
                  />
                </div>
              </div>

              <Magnetic
                as="button"
                type="submit"
                disabled={status === "loading"}
                strength={10}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold text-white shadow-glow-sm transition-transform hover:scale-[1.02] disabled:opacity-70 sm:w-auto"
              >
                {status === "loading" ? (
                  <>
                    Sending <Loader2 className="h-4 w-4 animate-spin" />
                  </>
                ) : (
                  <>
                    Send Message <Send className="h-4 w-4" />
                  </>
                )}
              </Magnetic>

              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 flex items-center gap-2 text-sm font-medium text-cyan"
                  role="status"
                >
                  <CheckCircle2 className="h-4 w-4" /> Thanks — your message has been sent. I&apos;ll reply soon!
                </motion.p>
              )}
              {status === "error" && (
                <p className="mt-4 text-sm font-medium text-pink" role="alert">
                  {errorMsg || "Something went wrong. Please try emailing me directly."}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
