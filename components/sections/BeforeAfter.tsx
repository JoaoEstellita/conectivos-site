"use client";

import { motion } from "framer-motion";

const before = [
  "Atendimento só em horário comercial",
  "Lead espera horas para receber resposta",
  "Time gasta tempo com perguntas repetitivas",
  "Agendamentos feitos manualmente por ligação",
  "Sem visibilidade de quais leads esfriaram",
  "Cada novo cliente exige contratar mais gente",
];

const after = [
  "Atendimento 24/7, inclusive fins de semana",
  "Resposta em segundos — lead ainda quente",
  "IA resolve 80%+ dos contatos sem humano",
  "Agendamento automático via WhatsApp",
  "Pipeline com status em tempo real",
  "Escala sem aumentar headcount",
];

export function BeforeAfter() {
  return (
    <section
      className="section-padding"
      style={{ background: "linear-gradient(180deg, #070711 0%, #080816 100%)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full text-sm font-medium"
            style={{
              background: "rgba(139,92,246,0.1)",
              border: "1px solid rgba(139,92,246,0.25)",
              color: "#C4B5FD",
            }}
          >
            A diferença na prática
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Antes e{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #6EE7B7, #93C5FD)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              depois
            </span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-8 flex flex-col gap-5"
            style={{
              background: "rgba(239,68,68,0.04)",
              border: "1px solid rgba(239,68,68,0.15)",
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-2xl flex items-center justify-center text-xl flex-shrink-0"
                style={{ background: "rgba(239,68,68,0.1)" }}
              >
                😓
              </div>
              <div>
                <h3 className="text-lg font-bold" style={{ color: "#FCA5A5" }}>Sem automação</h3>
                <p className="text-xs" style={{ color: "#475569" }}>operação manual, limitada por horário</p>
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              {before.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.05 + i * 0.06 }}
                  className="flex items-start gap-3"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2.5" className="mt-0.5 flex-shrink-0 opacity-60">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                  <span className="text-sm leading-relaxed" style={{ color: "#64748B" }}>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl p-8 flex flex-col gap-5"
            style={{
              background: "rgba(16,185,129,0.04)",
              border: "1px solid rgba(16,185,129,0.2)",
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-2xl flex items-center justify-center text-xl flex-shrink-0"
                style={{ background: "rgba(16,185,129,0.1)" }}
              >
                ⚡
              </div>
              <div>
                <h3 className="text-lg font-bold" style={{ color: "#6EE7B7" }}>Com Conectivos</h3>
                <p className="text-xs" style={{ color: "#475569" }}>automação inteligente, escala sem limites</p>
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              {after.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 + i * 0.06 }}
                  className="flex items-start gap-3"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" className="mt-0.5 flex-shrink-0">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span className="text-sm leading-relaxed" style={{ color: "#94A3B8" }}>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
