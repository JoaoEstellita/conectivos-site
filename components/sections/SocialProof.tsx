"use client";

import { motion } from "framer-motion";

const clients = [
  {
    monogram: "ZF",
    name: "ZangFu Clínica",
    line: "L1 — Atendimento IA WhatsApp",
    color: "#8B5CF6",
  },
  {
    monogram: "FAF",
    name: "FAF",
    line: "L2 — Inteligência de Mercado",
    color: "#3B82F6",
  },
  {
    monogram: "IL",
    name: "Ilumine Lingerie",
    line: "L1 — Atendimento IA WhatsApp",
    color: "#EC4899",
  },
  {
    monogram: "EV",
    name: "Elevvy",
    line: "L3 — Automação de Processos",
    color: "#10B981",
  },
];

const metrics = [
  { value: "10x", label: "ROI médio reportado" },
  { value: "24/7", label: "Operação ininterrupta" },
  { value: "∞", label: "Escalabilidade" },
];

export function SocialProof() {
  return (
    <section
      className="py-16 px-6 md:px-8 lg:px-16 xl:px-24"
      style={{
        background: "linear-gradient(180deg, #070711 0%, #0B0B1A 100%)",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left: client badges */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "#475569" }}>
            Empresas que já crescem com a Conectivos
          </p>
          <div className="flex flex-col gap-3">
            {clients.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.12 }}
                className="flex items-center gap-4 px-4 py-3 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `${c.color}18`,
                    border: `1px solid ${c.color}30`,
                  }}
                >
                  <span className="text-xs font-black" style={{ color: c.color }}>{c.monogram}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{c.name}</p>
                  <p className="text-xs" style={{ color: "#475569" }}>{c.line}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: metrics */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-3 gap-4"
        >
          {metrics.map((m, i) => (
            <motion.div
              key={m.value}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="flex flex-col items-center text-center gap-1.5"
            >
              <span
                className="text-3xl md:text-4xl font-black tabular-nums leading-none"
                style={{
                  background: "linear-gradient(135deg, #A78BFA, #60A5FA)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {m.value}
              </span>
              <span className="text-xs leading-tight" style={{ color: "#64748B" }}>{m.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
