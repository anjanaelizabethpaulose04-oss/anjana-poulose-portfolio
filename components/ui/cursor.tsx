"use client";

import { useEffect, useRef, useState } from "react";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!isFinePointer || prefersReducedMotion) return;
    setEnabled(true);
    document.body.classList.add("cursor-none-desktop");

    let ringX = 0,
      ringY = 0,
      targetX = 0,
      targetY = 0;

    const move = (e: MouseEvent) => {
      setHidden(false);
      targetX = e.clientX;
      targetY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetX - 4}px, ${targetY - 4}px, 0)`;
      }
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHovering(!!target.closest("a, button, [data-cursor-hover]"));
    };

    const raf = () => {
      ringX += (targetX - ringX) * 0.18;
      ringY += (targetY - ringY) * 0.18;
      if (ringRef.current) {
        const size = ringRef.current.offsetWidth || 36;
        ringRef.current.style.transform = `translate3d(${ringX - size / 2}px, ${ringY - size / 2}px, 0)`;
      }
      requestAnimationFrame(raf);
    };
    const rafId = requestAnimationFrame(raf);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mouseleave", () => setHidden(true));

    return () => {
      document.body.classList.remove("cursor-none-desktop");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{ opacity: hidden ? 0 : 1, transition: "opacity 0.2s ease" }}
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{
          opacity: hidden ? 0 : 1,
          transition: "opacity 0.2s ease, width 0.25s ease, height 0.25s ease, border-color 0.25s ease",
          width: hovering ? 54 : 36,
          height: hovering ? 54 : 36,
          borderColor: hovering ? "rgba(59,130,246,0.85)" : "rgba(139,92,246,0.55)",
        }}
        aria-hidden="true"
      />
    </>
  );
}
