"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, BarChart3, GitBranch, Crosshair, LineChart, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5521999953224?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20as%20soluções%20da%20Conectivos.";

const solutions: {
  Icon: LucideIcon;
  line: string;
  color: string;
  title: string;
  description: string;
  features: string[];
  pageUrl?: string;
}[] = [
  {
    Icon: MessageSquare,
    line: "L1",
    color: "#8B5CF6",
    title: "Atendimento IA WhatsApp",
    description: "Agente 24/7 com personalidade, memória e transcrição de áudios. Responde, agenda, qualifica e resolve — sem humano na linha.",
    features: [
      "Disponível 24/7, fins de semana e feriados",
      "Transcrição automática de áudios",
      "NPS pós-atendimento automático",
      "Agendamento direto no Google/Outlook",
      "Memória de contexto entre conversas",
      "Multi-idioma e integração com CRM",
    ],
    pageUrl: "/servicos/agentes",
  },
  {
    Icon: BarChart3,
    line: "L2",
    color: "#3B82F6",
    title: "Inteligência de Mercado",
    description: "Monitore concorrentes, reputação e tendências em tempo real. Relatórios automáticos e agente conversacional para consultar dados.",
    features: [
      "Monitoramento de concorrentes em tempo real",
      "Battle cards automáticos",
      "Relatórios semanais no WhatsApp",
      "Agente conversacional para dados",
      "Alertas de menções à marca",
      "Dashboard de tendências",
    ],
    pageUrl: "/servicos/monitor",
  },
  {
    Icon: GitBranch,
    line: "L3",
    color: "#06B6D4",
    title: "Automação de Processos",
    description: "Elimine tarefas repetitivas com fluxos inteligentes integrados ao seu stack. Notificações, triagem, follow-up e muito mais.",
    features: [
      "Integração via API com qualquer sistema",
      "Fluxos n8n + IA",
      "Alertas e notificações inteligentes",
      "Alimentação automática de CRM",
      "Eliminação de preenchimento manual",
      "Deploy em semanas, não meses",
    ],
    pageUrl: "/servicos/agentes",
  },
  {
    Icon: Crosshair,
    line: "L4",
    color: "#EC4899",
    title: "SDR Outbound IA",
    description: "Prospecção ativa no WhatsApp com agente inteligente. Mineração de leads, disparo personalizado e qualificação automática.",
    features: [
      "Mineração e enriquecimento de leads",
      "Disparo segmentado personalizado",
      "Qualificação automática com IA",
      "Pipeline alimentado automaticamente",
      "Follow-up persistente sem falhas",
      "Relatório de conversões",
    ],
    pageUrl: "/servicos/sdr",
  },
  {
    Icon: LineChart,
    line: "L5",
    color: "#10B981",
    title: "Analytics & Dashboard",
    description: "CRM, financeiro, projetos e KPIs em painel centralizado. Relatórios automáticos no WhatsApp para a diretoria.",
    features: [
      "Dashboard em tempo real",
      "CRM integrado",
      "Relatórios automáticos no WhatsApp",
      "Alertas de metas e KPIs",
      "Visão financeira consolidada",
      "Acesso multi-usuário",
    ],
  },
];

export function Solutions() {
  const [active, setActive] = useState(0);
  const sol = solutions[active];

  return (
    <section id="solucoes" className="section-padding" style={{ background: "#070711" }}>
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
            5 linhas de produto
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            O que a Conectivos{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #A78BFA, #60A5FA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              entrega
            </span>
          </h2>
        </motion.div>

        {/* Tabbed layout */}
        <div className="flex flex-col lg:flex-row gap-0 rounded-3xl overflow-hidden"
          style={{ border: "1px solid rgba(255,255,255,0.07)" }}>

          {/* Tab list — sidebar */}
          <div
            className="flex lg:flex-col overflow-x-auto lg:overflow-visible flex-shrink-0 lg:w-72"
            style={{
              background: "rgba(255,255,255,0.02)",
              borderRight: "1px solid rgba(255,255,255,0.06)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {solutions.map((s, i) => {
              const isActive = active === i;
              return (
                <button
                  key={s.line}
                  onClick={() => setActive(i)}
                  className="relative flex items-center gap-3 px-5 py-4 text-left transition-all duration-200 flex-shrink-0 lg:flex-shrink"
                  style={{
                    background: isActive ? `${s.color}0D` : "transparent",
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                  }}
                >
                  {/* Active indicator bar */}
                  {isActive && (
                    <motion.div
                      layoutId="activeBar"
                      className="absolute left-0 top-0 bottom-0 w-0.5"
                      style={{ background: s.color }}
                      transition={{ type: "spring", stiffness: 500, damping: 40 }}
                    />
                  )}

                  <span
                    className="text-xs font-black px-1.5 py-0.5 rounded flex-shrink-0"
                    style={{
                      color: isActive ? s.color : "#475569",
                      background: isActive ? `${s.color}18` : "transparent",
                    }}
                  >
                    {s.line}
                  </span>

                  <span
                    className="text-sm font-semibold leading-tight hidden sm:block"
                    style={{ color: isActive ? "#FFFFFF" : "#64748B" }}
                  >
                    {s.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Content panel */}
          <div className="flex-1 relative overflow-hidden" style={{ minHeight: "420px" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="absolute inset-0 flex flex-col gap-6 p-8"
              >
                {/* Icon + badges */}
                <div className="flex items-start justify-between">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ background: `${sol.color}14`, border: `1px solid ${sol.color}28` }}
                  >
                    <sol.Icon size={26} strokeWidth={1.5} style={{ color: sol.color }} />
                  </div>
                  <span
                    className="text-xs font-bold px-3 py-1.5 rounded-full"
                    style={{ background: `${sol.color}15`, color: sol.color, border: `1px solid ${sol.color}25` }}
                  >
                    {sol.line}
                  </span>
                </div>

                {/* Title + description */}
                <div>
                  <h3 className="text-2xl font-black text-white mb-2">{sol.title}</h3>
                  <p className="text-base leading-relaxed" style={{ color: "#94A3B8" }}>{sol.description}</p>
                </div>

                {/* Features 2-col */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 flex-1">
                  {sol.features.map((f) => (
                    <div key={f} className="flex items-start gap-2 text-sm" style={{ color: "#94A3B8" }}>
                      <Check size={13} strokeWidth={2.5} className="mt-0.5 flex-shrink-0" style={{ color: sol.color }} />
                      {f}
                    </div>
                  ))}
                </div>

                {/* Price + CTA */}
                <div
                  className="flex items-center gap-3 flex-wrap pt-5"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ boxShadow: `0 4px 20px ${sol.color}30` }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Quero essa solução
                  </a>
                  {sol.pageUrl && (
                    <a
                      href={sol.pageUrl}
                      className="text-sm font-semibold flex items-center gap-1.5 transition-colors hover:opacity-80"
                      style={{ color: sol.color }}
                    >
                      Ver detalhes
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-8 text-sm"
          style={{ color: "#475569" }}
        >
          Todas as soluções incluem diagnóstico gratuito e setup assistido.{" "}
          <a href="#contato" className="underline underline-offset-4 hover:text-white transition-colors" style={{ color: "#A78BFA" }}>
            Falar sobre o meu caso.
          </a>
        </motion.p>
      </div>
    </section>
  );
}
