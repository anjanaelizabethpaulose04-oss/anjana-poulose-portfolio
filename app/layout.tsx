import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { Cursor } from "@/components/ui/cursor";
import { AmbientBackground } from "@/components/ui/ambient-background";
import { LoadingScreen } from "@/components/ui/loading-screen";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { profile } from "@/lib/data";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap", weight: ["500", "600", "700", "800"] });

const siteUrl = "https://anjanapoulose.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — Digital Marketing Coordinator & UX-Minded Strategist`,
    template: `%s — ${profile.name}`,
  },
  description: profile.summary,
  keywords: [
    "Anjana Poulose",
    "Digital Marketing Coordinator",
    "SEO",
    "Social Media Marketing",
    "UX Design",
    "Content Strategy",
    "Toronto Digital Marketer",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — Digital Marketing Coordinator`,
    description: profile.summary,
    url: siteUrl,
    siteName: profile.name,
    type: "website",
    images: [{ url: profile.portraitImage }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Digital Marketing Coordinator`,
    description: profile.summary,
    images: [profile.portraitImage],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: "Digital Marketing Coordinator",
    email: profile.email,
    telephone: profile.phone,
    url: siteUrl,
    sameAs: [profile.linkedin],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mississauga",
      addressRegion: "Ontario",
      addressCountry: "Canada",
    },
  };

  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[10000] -translate-y-24 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-white transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <LoadingScreen />
          <AmbientBackground />
          <Cursor />
          <SmoothScrollProvider>
            <Navbar />
            <main id="main-content">{children}</main>
            <Footer />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
