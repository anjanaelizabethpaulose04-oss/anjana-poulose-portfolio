"use client";

import { motion } from "framer-motion";

export function StatGrid({ stats }: { stats: { metric: string; label: string }[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.06 }}
          className="rounded-2xl border border-border glass p-5 text-center"
        >
          <p className="font-display text-3xl font-extrabold text-gradient">{stat.metric}</p>
          <p className="mt-2 text-xs leading-snug text-text-secondary">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
