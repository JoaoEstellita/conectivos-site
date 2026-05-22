"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const metrics = [
  { value: "+10.000", label: "atendimentos/mês" },
  { value: "5", label: "empresas em produção" },
  { value: "17", label: "terapeutas 24/7" },
  { value: "230+", label: "leads gerenciados" },
  { value: "2–4", label: "semanas de setup" },
  { value: "99,9%", label: "uptime garantido" },
];

function Metric({ value, label, delay }: { value: string; label: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center gap-1 px-6 py-4 flex-shrink-0"
    >
      <span
        className="text-2xl font-black tabular-nums"
        style={{
          background: "linear-gradient(135deg, #C4B5FD, #93C5FD)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {value}
      </span>
      <span className="text-xs text-center whitespace-nowrap" style={{ color: "#475569" }}>
        {label}
      </span>
    </motion.div>
  );
}

export function MetricsStrip() {
  return (
    <div
      className="w-full overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.02)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between overflow-x-auto" style={{ scrollbarWidth: "none" }}>
          {metrics.map((m, i) => (
            <div key={m.label} className="flex items-center">
              <Metric value={m.value} label={m.label} delay={i * 0.07} />
              {i < metrics.length - 1 && (
                <div className="w-px h-8 flex-shrink-0" style={{ background: "rgba(255,255,255,0.06)" }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
