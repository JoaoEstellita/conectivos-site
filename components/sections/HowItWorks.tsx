"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { ScanSearch, Layers, Cpu, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const steps: {
  number: string;
  Icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  detail: string;
}[] = [
  {
    number: "01",
    Icon: ScanSearch,
    title: "Diagnóstico Situacional",
    description: "Auditamos os fluxos atuais e mapeamos onde automatizar traz maior retorno imediato.",
    detail: "Analisamos cada ponto de atrito na sua operação: onde leads se perdem, onde o time perde tempo, onde o dinheiro escorrega. Em 1 semana você tem um mapa claro do ROI potencial.",
    color: "#8B5CF6",
  },
  {
    number: "02",
    Icon: Layers,
    title: "Arquitetura de Fluxos",
    description: "Desenhamos personalidade da IA, regras de negócio e integrações necessárias.",
    detail: "Definimos a voz e a personalidade do agente, as regras de negócio, os fluxos de decisão e quais sistemas integrar. Nada genérico — tudo pensado para o seu contexto específico.",
    color: "#3B82F6",
  },
  {
    number: "03",
    Icon: Cpu,
    title: "Desenvolvimento",
    description: "A IA aprende seus preços, produtos e processos com base de conhecimento própria.",
    detail: "Construímos o agente com seus dados reais: FAQ, catálogo, processos internos, tom de voz. O resultado é uma IA que parece parte da sua equipe, não um bot genérico.",
    color: "#06B6D4",
  },
  {
    number: "04",
    Icon: TrendingUp,
    title: "Entrega e Otimização",
    description: "Deploy assistido com monitoramento. Ajustamos com base em resultados reais.",
    detail: "Você não fica sozinho após o go-live. Monitoramos métricas, identificamos melhorias e otimizamos continuamente. Parceria de longo prazo — não venda e some.",
    color: "#10B981",
  },
];

function DesktopSticky() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map 0→1 to step index 0→3
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(3, Math.floor(v * 4));
    setActiveIdx(idx);
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const step = steps[activeIdx];

  return (
    <div ref={containerRef} style={{ height: "400vh" }} className="relative">
      <div className="sticky top-0 h-screen flex flex-col justify-center">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-8 lg:px-16 xl:px-24">
          <div className="grid grid-cols-2 gap-20 items-center">

            {/* Left: changing content */}
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#475569" }}>
                  Método comprovado
                </p>
                <h2 className="text-5xl font-black text-white tracking-tight leading-[1.05]">
                  Do diagnóstico{" "}
                  <span
                    style={{
                      background: "linear-gradient(135deg, #93C5FD, #6EE7B7)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    à escala
                  </span>
                </h2>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-5"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{ background: `${step.color}15`, border: `1px solid ${step.color}30` }}
                    >
                      <step.Icon size={24} strokeWidth={1.5} style={{ color: step.color }} />
                    </div>
                    <div>
                      <p className="text-xs font-black tabular-nums mb-0.5" style={{ color: step.color }}>{step.number}</p>
                      <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed" style={{ color: "#94A3B8" }}>{step.detail}</p>
                  <div className="h-0.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)", maxWidth: "200px" }}>
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: step.color }}
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>

              <a href="#contato" className="btn-primary w-fit">
                Iniciar diagnóstico gratuito
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Right: progress + step list */}
            <div className="flex gap-8">
              {/* Vertical progress track */}
              <div className="relative flex-shrink-0 w-0.5" style={{ background: "rgba(255,255,255,0.07)", minHeight: "280px" }}>
                <motion.div
                  className="absolute top-0 left-0 right-0 rounded-full"
                  style={{
                    background: "linear-gradient(to bottom, #8B5CF6, #3B82F6, #06B6D4, #10B981)",
                    height: progressHeight,
                  }}
                />
              </div>

              {/* Steps */}
              <div className="flex flex-col justify-between flex-1 py-1">
                {steps.map((s, i) => {
                  const isActive = i === activeIdx;
                  const isPast = i < activeIdx;
                  return (
                    <div key={s.number} className="flex items-start gap-4">
                      <motion.div
                        className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-black mt-0.5"
                        animate={{
                          backgroundColor: isActive ? s.color : isPast ? `${s.color}50` : "rgba(255,255,255,0.06)",
                          color: isActive || isPast ? "#fff" : "#475569",
                          scale: isActive ? 1.1 : 1,
                          boxShadow: isActive ? `0 0 18px ${s.color}70` : "none",
                        }}
                        transition={{ duration: 0.35 }}
                      >
                        {s.number}
                      </motion.div>
                      <motion.div
                        animate={{ opacity: isActive ? 1 : isPast ? 0.5 : 0.25 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-sm font-bold leading-tight mb-0.5" style={{ color: isActive ? s.color : "#94A3B8" }}>
                          {s.title}
                        </p>
                        <p className="text-xs leading-snug" style={{ color: "#475569" }}>{s.description}</p>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileSteps() {
  return (
    <div className="flex flex-col gap-0">
      {steps.map((step, i) => (
        <motion.div
          key={step.number}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="flex gap-5"
        >
          <div className="flex flex-col items-center">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-sm font-black"
              style={{ background: `${step.color}15`, border: `1px solid ${step.color}30`, color: step.color }}
            >
              {step.number}
            </div>
            {i < steps.length - 1 && (
              <div className="flex-1 w-px my-2" style={{ background: `linear-gradient(to bottom, ${step.color}40, transparent)`, minHeight: "32px" }} />
            )}
          </div>
          <div className="pb-8">
            <div className="flex items-center gap-2 mb-1">
              <step.Icon size={16} strokeWidth={1.5} style={{ color: step.color }} />
              <h3 className="text-base font-bold text-white">{step.title}</h3>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>{step.detail}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export function HowItWorks() {
  return (
    <section id="como-funciona" style={{ background: "linear-gradient(180deg, #070711 0%, #0A0A18 100%)" }}>
      {/* Desktop sticky */}
      <div className="hidden lg:block">
        <DesktopSticky />
      </div>

      {/* Mobile vertical */}
      <div className="lg:hidden section-padding">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#475569" }}>Método comprovado</p>
            <h2 className="text-4xl font-black text-white tracking-tight mb-3">
              Do diagnóstico{" "}
              <span style={{ background: "linear-gradient(135deg, #93C5FD, #6EE7B7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                à escala
              </span>
            </h2>
            <p className="text-base" style={{ color: "#94A3B8" }}>4 etapas. Primeiro agente em 2–4 semanas.</p>
          </motion.div>

          <MobileSteps />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6"
          >
            <a href="#contato" className="btn-primary">
              Iniciar diagnóstico gratuito
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
