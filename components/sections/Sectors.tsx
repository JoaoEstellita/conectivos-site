"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  BarChart3,
  GitBranch,
  Crosshair,
  Heart,
  Megaphone,
  HeartPulse,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const services: {
  Icon: LucideIcon;
  line?: string;
  color: string;
  title: string;
  description: string;
  href: string;
}[] = [
  {
    Icon: MessageSquare,
    line: "L1",
    color: "#8B5CF6",
    title: "Atendimento IA WhatsApp",
    description:
      "Agente 24/7 com personalidade e memória. Responde, agenda, qualifica e fecha — sem humano na linha.",
    href: "/servicos/agentes",
  },
  {
    Icon: BarChart3,
    line: "L2",
    color: "#3B82F6",
    title: "Inteligência de Mercado",
    description:
      "Monitore concorrentes e tendências em tempo real. Battle cards e relatórios automáticos no WhatsApp.",
    href: "/servicos/monitor",
  },
  {
    Icon: GitBranch,
    line: "L3",
    color: "#06B6D4",
    title: "Automação de Processos",
    description:
      "Elimine tarefas repetitivas com fluxos inteligentes integrados ao seu stack via n8n + IA.",
    href: "/servicos/agentes",
  },
  {
    Icon: Crosshair,
    line: "L4",
    color: "#EC4899",
    title: "SDR Outbound IA",
    description:
      "Prospecção ativa no WhatsApp com agente inteligente. Mineração, disparo personalizado e qualificação.",
    href: "/servicos/sdr",
  },
  {
    Icon: Heart,
    color: "#A855F7",
    title: "Instagram DM",
    description:
      "IA que responde DMs em segundos, captura leads e apresenta seu catálogo — enquanto você foca no conteúdo.",
    href: "/servicos/instagram",
  },
  {
    Icon: Megaphone,
    color: "#0EA5E9",
    title: "Meta Ads IA",
    description:
      "Otimização de campanhas Meta em tempo real. Segmentação preditiva, relatórios e alertas automáticos.",
    href: "/servicos/meta",
  },
  {
    Icon: HeartPulse,
    color: "#14B8A6",
    title: "Clínica & Agendamento",
    description:
      "Agente especializado para clínicas: agenda consultas, envia lembretes e reduz no-shows automaticamente.",
    href: "/servicos/clinica",
  },
];

export function Sectors() {
  return (
    <section
      id="servicos"
      className="section-padding"
      style={{ background: "linear-gradient(180deg, #070711 0%, #0A0A18 100%)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full text-sm font-medium"
            style={{
              background: "rgba(139,92,246,0.1)",
              border: "1px solid rgba(139,92,246,0.25)",
              color: "#A78BFA",
            }}
          >
            O que entregamos
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Nossos{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #A78BFA, #60A5FA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Serviços
            </span>
          </h2>
          <p className="mt-3 text-lg max-w-xl" style={{ color: "#64748B" }}>
            Cada solução com página própria, casos de uso e detalhes de implementação.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <motion.a
              key={s.title}
              href={s.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="group flex flex-col gap-5 rounded-2xl p-6 transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                textDecoration: "none",
              }}
              whileHover={{ y: -3 }}
            >
              {/* Icon + line badge */}
              <div className="flex items-start justify-between">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: `${s.color}14`, border: `1px solid ${s.color}28` }}
                >
                  <s.Icon size={22} strokeWidth={1.5} style={{ color: s.color }} />
                </div>
                {s.line && (
                  <span
                    className="text-xs font-black px-1.5 py-0.5 rounded"
                    style={{ color: s.color, background: `${s.color}18` }}
                  >
                    {s.line}
                  </span>
                )}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2 flex-1">
                <h3 className="text-base font-bold text-white leading-snug">{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>
                  {s.description}
                </p>
              </div>

              {/* CTA */}
              <div
                className="flex items-center gap-1.5 text-sm font-semibold transition-all duration-200"
                style={{ color: s.color }}
              >
                Ver detalhes
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
