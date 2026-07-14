# Anjana Poulose — Portfolio

A premium, animated portfolio built with Next.js 14 (App Router), TypeScript, Tailwind CSS,
Framer Motion, React Three Fiber, and Lenis smooth scrolling. Content (bio, resume, skills,
experience, and all three case studies) was pulled from the original Wix portfolio and resume
PDF, then rebuilt with a completely original dark/light, glassmorphic design system.

## Tech stack

- **Next.js 14** (App Router, static generation for project pages)
- **TypeScript**
- **Tailwind CSS** with a custom design-token theme (colors, type scale, shadows)
- **Framer Motion** for scroll reveals, hover states, and page-level motion
- **React Three Fiber / drei / three.js** for the floating 3D hero object
- **Lenis** for smooth scrolling
- **next-themes** for dark/light mode
- **lucide-react** icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.tsx          Root layout: fonts, theme, cursor, nav, footer
  page.tsx             Home page (composes all sections)
  projects/[slug]/     Dynamic case-study pages (statically generated)
  api/contact/         Contact form API route
  sitemap.ts, robots.ts

components/
  sections/            Hero, About, Skills, Experience, Process, Projects, Certifications, Resume, Contact
  project/             Case-study building blocks (image grid, stat grid)
  three/               React Three Fiber hero scene
  ui/                  Cursor, magnetic buttons, theme toggle, loading screen, ambient background, reveal wrapper
  layout/              Navbar, footer
  providers/           Theme provider, Lenis smooth-scroll provider

lib/
  data.ts              Profile, skills, experience, education, process, certifications
  projects.ts          Full case-study content for all 3 projects
  utils.ts             `cn()` class-merge helper
```

## Content notes

- All copy (summary, experience, skills, certifications, resume dates) is transcribed
  directly from `anjanaelizabethpau.wixsite.com/portfolio` and the linked resume PDF —
  nothing is placeholder text.
- Images and the resume PDF are referenced directly from the original Wix/`filesusr.com`
  CDN URLs (allow-listed in `next.config.mjs`), so nothing needed to be re-uploaded. If you'd
  rather self-host them, download the files into `public/images` and `public/resume` and swap
  the URLs in `lib/data.ts` / `lib/projects.ts`.
- To edit any text on the site, everything lives in `lib/data.ts` (profile/skills/experience)
  and `lib/projects.ts` (case studies) — no component code needs to change for content edits.

## Contact form

The form at `/#contact` posts to `app/api/contact/route.ts`, which validates the input and is
**already wired to send real email via [Resend](https://resend.com)** — no code changes needed:

1. Create a free account at [resend.com](https://resend.com/signup) and copy your API key.
2. Add it as `RESEND_API_KEY` in `.env.local` for local dev, and in your Vercel project's
   Settings → Environment Variables for production (see `.env.example` for the full list,
   including optional `CONTACT_TO_EMAIL` / `CONTACT_FROM_EMAIL` overrides).
3. Redeploy. Messages submitted on the site will land in your inbox with the sender's email
   set as reply-to, so you can just hit "reply."

Until `RESEND_API_KEY` is set, the form still validates and responds successfully, but
submissions are only logged to the server console (visible in Vercel's Function Logs) rather
than emailed — so nothing breaks in the meantime, it just isn't delivering yet.

## Deploying to Vercel

1. Push this repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo — Next.js is auto-detected,
   no config needed.
3. Add any environment variables from `.env.example` if you've wired up email.
4. Deploy. You'll get a live `*.vercel.app` URL immediately, with the option to attach a
   custom domain afterwards.

## Accessibility & performance

- Semantic landmarks, skip-to-content link, visible focus rings, `aria-label`s on icon-only
  controls, and `prefers-reduced-motion` support (disables custom cursor, Lenis, and shortens
  all animation/transition durations).
- Images use `next/image` with responsive `sizes` and lazy loading.
- Fonts are self-hosted at build time via `next/font/google` (no render-blocking font requests).
- Update `siteUrl` in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts` once you have a
  real domain, and swap the Open Graph image if desired.
