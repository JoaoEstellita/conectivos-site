"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const CIRCUMFERENCE = 2 * Math.PI * 40; // r=40

function RadialRing({ pct, delay }: { pct: number; delay: number }) {
  const ref = useRef<SVGCircleElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true });

  const offset = CIRCUMFERENCE - (pct / 100) * CIRCUMFERENCE;

  return (
    <div ref={containerRef} className="relative w-24 h-24 flex items-center justify-center">
      <svg width="96" height="96" viewBox="0 0 96 96" className="absolute inset-0 -rotate-90">
        {/* Track */}
        <circle
          cx="48" cy="48" r="40"
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="3"
        />
        {/* Progress */}
        <motion.circle
          ref={ref}
          cx="48" cy="48" r="40"
          fill="none"
          stroke="url(#ringGrad)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          initial={{ strokeDashoffset: CIRCUMFERENCE }}
          animate={inView ? { strokeDashoffset: offset } : { strokeDashoffset: CIRCUMFERENCE }}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
        />
        <defs>
          <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#A78BFA" />
            <stop offset="100%" stopColor="#60A5FA" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

const stats = [
  {
    value: 10,
    prefix: "",
    suffix: "x",
    label: "ROI médio",
    description: "O custo de implementação costuma ser inferior ao de 3 meses de um único colaborador júnior, com produtividade 10x superior.",
    ringPct: 80,
    isSymbol: false,
  },
  {
    value: 24,
    prefix: "",
    suffix: "/7",
    label: "Disponibilidade",
    description: "Enquanto seu concorrente dorme, a Conectivos está vendendo para o seu cliente. Seu negócio nunca fecha.",
    ringPct: 100,
    isSymbol: false,
  },
  {
    value: 0,
    prefix: "",
    suffix: "",
    label: "Escalabilidade",
    description: "Enquanto equipes humanas crescem com mais salários, a IA da Conectivos escala horizontalmente com custo fixo.",
    ringPct: 100,
    isSymbol: true,
  },
];

export function Stats() {
  return (
    <section
      className="py-20 px-6 md:px-8 lg:px-16 xl:px-24 relative"
      style={{
        background: "linear-gradient(180deg, #070711 0%, #0B0B1A 100%)",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-px"
          style={{
            background: "rgba(255,255,255,0.06)",
            borderRadius: "1.5rem",
            overflow: "hidden",
          }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex flex-col items-center text-center p-10 gap-4"
              style={{ background: "rgba(7,7,17,0.8)" }}
            >
              {/* Radial ring with number inside */}
              <div className="relative w-24 h-24">
                <RadialRing pct={stat.ringPct} delay={i * 0.15} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="text-xl font-black tabular-nums leading-none"
                    style={{
                      background: "linear-gradient(135deg, #A78BFA, #60A5FA)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {stat.isSymbol ? (
                      <span style={{ fontSize: "1.75rem" }}>∞</span>
                    ) : (
                      <AnimatedCounter
                        end={stat.value}
                        prefix={stat.prefix}
                        suffix={stat.suffix}
                      />
                    )}
                  </span>
                </div>
              </div>

              <div>
                <div className="font-semibold text-white text-lg mb-1">{stat.label}</div>
                <div className="text-sm" style={{ color: "#64748B" }}>{stat.description}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Callout strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 mx-auto max-w-2xl px-5 py-4 rounded-2xl"
          style={{ background: "rgba(139,92,246,0.07)", border: "1px solid rgba(139,92,246,0.2)" }}
        >
          <p className="text-sm font-semibold mb-1" style={{ color: "#A78BFA" }}>Consistência de Dados</p>
          <p className="text-sm" style={{ color: "#94A3B8" }}>Diferente de humanos, a IA nunca esquece de preencher o CRM ou de fazer o último follow-up. Cada interação é registrada, cada lead é nutrido.</p>
        </motion.div>
      </div>
    </section>
  );
}
