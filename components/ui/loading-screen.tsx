"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (sessionStorage.getItem("ap-loaded")) {
      setLoading(false);
      return;
    }
    const interval = setInterval(() => {
      setProgress((p) => {
        const next = Math.min(100, p + Math.random() * 22);
        if (next >= 100) {
          clearInterval(interval);
          sessionStorage.setItem("ap-loaded", "1");
          setTimeout(() => setLoading(false), 350);
        }
        return next;
      });
    }, 140);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9998] flex flex-col items-center justify-center bg-bg"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-display text-4xl font-bold tracking-tight text-gradient"
          >
            AP
          </motion.div>
          <div className="mt-6 h-[2px] w-40 overflow-hidden rounded-full bg-border">
            <motion.div
              className="h-full bg-gradient-primary"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>
          <p className="mt-4 text-xs tracking-[0.3em] text-text-secondary">LOADING PORTFOLIO</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
