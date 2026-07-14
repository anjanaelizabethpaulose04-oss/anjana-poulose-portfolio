"use client";

import { useEffect, useRef } from "react";

export function AmbientBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const blob1 = useRef<HTMLDivElement>(null);
  const blob2 = useRef<HTMLDivElement>(null);
  const blob3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let mouseX = 0;
    let mouseY = 0;
    let curX = 0;
    let curY = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const onScroll = () => {
      const y = window.scrollY;
      if (blob1.current) blob1.current.style.transform = `translate3d(${mouseX * 24}px, ${y * 0.08}px, 0)`;
      if (blob2.current) blob2.current.style.transform = `translate3d(${mouseX * -18}px, ${y * -0.05}px, 0)`;
      if (blob3.current) blob3.current.style.transform = `translate3d(${mouseX * 14}px, ${y * 0.03}px, 0)`;
    };

    const raf = () => {
      curX += (mouseX - curX) * 0.05;
      curY += (mouseY - curY) * 0.05;
      onScroll();
      requestAnimationFrame(raf);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    const rafId = requestAnimationFrame(raf);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div ref={containerRef} className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div
        ref={blob1}
        className="absolute -top-40 left-[8%] h-[36rem] w-[36rem] animate-blob rounded-full bg-blue/25 opacity-40 blur-[110px] dark:opacity-30"
      />
      <div
        ref={blob2}
        className="absolute top-[30%] right-[4%] h-[30rem] w-[30rem] animate-blob rounded-full bg-purple/25 opacity-40 blur-[110px]"
        style={{ animationDelay: "-3s" }}
      />
      <div
        ref={blob3}
        className="absolute bottom-[-10%] left-[30%] h-[26rem] w-[26rem] animate-blob rounded-full bg-cyan/20 opacity-30 blur-[110px]"
        style={{ animationDelay: "-6s" }}
      />
      <div className="noise-overlay" />
    </div>
  );
}
