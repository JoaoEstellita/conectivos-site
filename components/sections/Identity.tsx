"use client";

import { motion } from "framer-motion";
import { Target, ArrowLeftRight, Users, Flame } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const cards: {
  Icon: LucideIcon;
  color: string;
  title: string;
  html: string;
}[] = [
  {
    Icon: Target,
    color: "#8B5CF6",
    title: "Nossa Identidade",
    html: "A Conectivos não é uma agência de marketing, nem apenas uma software house. Somos uma consultoria de <strong style=\"color:#C4B5FD\">estratégia operacional</strong> que utiliza a IA como ferramenta principal para resolver problemas reais de negócio.",
  },
  {
    Icon: ArrowLeftRight,
    color: "#3B82F6",
    title: "A Ponte",
    html: "Unimos a visão de negócios — gestão, ROI e métricas — com a capacidade técnica de execução. Criamos a conexão entre estratégia e implementação prática.",
  },
  {
    Icon: Users,
    color: "#06B6D4",
    title: "Nosso Time",
    html: "Liderada por estrategistas que entendem que a tecnologia só tem valor se resolver um problema real de caixa ou eficiência operacional.",
  },
  {
    Icon: Flame,
    color: "#10B981",
    title: "Nossa Crença",
    html: "No cenário atual, empresas que não automatizam o repetitivo condenam seus talentos humanos à estagnação. Libere sua equipe para o que realmente importa.",
  },
];

export function Identity() {
  return (
    <section
      className="section-padding"
      style={{ background: "linear-gradient(180deg, #070711 0%, #0A0A18 100%)" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full text-sm font-medium"
            style={{
              background: "rgba(139,92,246,0.1)",
              border: "1px solid rgba(139,92,246,0.25)",
              color: "#A78BFA",
            }}
          >
            Quem somos
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Onde a Estratégia de Negócio{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #A78BFA, #60A5FA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Encontra a Tecnologia de Ponta
            </span>
          </h2>
        </motion.div>

        {/* Grid 2×2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl p-6"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div
                style={{
                  borderLeft: `2px solid ${card.color}`,
                  paddingLeft: "1.25rem",
                }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-4"
                  style={{
                    background: `${card.color}15`,
                    border: `1px solid ${card.color}28`,
                  }}
                >
                  <card.Icon size={18} strokeWidth={1.5} style={{ color: card.color }} />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{card.title}</h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#94A3B8" }}
                  dangerouslySetInnerHTML={{ __html: card.html }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
