"use client";

import { motion } from "framer-motion";

const pillars: {
  number: string;
  color: string;
  title: string;
  descriptionHtml: string;
}[] = [
  {
    number: "01",
    color: "#8B5CF6",
    title: "Agentes de IA Personalizados",
    descriptionHtml:
      "<strong style=\"color:#C4B5FD\">Vendas:</strong> Qualificação de leads em tempo real, agendamento direto em agendas (Google/Outlook) e follow-up persistente sem falhas.<br/><br/><strong style=\"color:#C4B5FD\">Suporte:</strong> Resolução de dúvidas técnicas e triagem de chamados 24/7 com tom de voz idêntico ao da sua marca.",
  },
  {
    number: "02",
    color: "#3B82F6",
    title: "Fluxos de Trabalho Autônomos",
    descriptionHtml:
      "Integração total entre WhatsApp, CRM (RD Station, HubSpot), ERPs e Planilhas. Alimentação automática de dados, eliminando o erro humano e o preenchimento manual de relatórios.",
  },
  {
    number: "03",
    color: "#06B6D4",
    title: "Consultoria de Diagnóstico",
    descriptionHtml:
      "Mapeamento completo de gargalos invisíveis que estão drenando o lucro da sua operação. Identificamos onde a automação trará o maior retorno imediato com base em dados reais.",
  },
];

export function Pillars() {
  return (
    <section
      className="section-padding"
      style={{ background: "#070711" }}
    >
      <div className="max-w-6xl mx-auto">
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
              background: "rgba(59,130,246,0.1)",
              border: "1px solid rgba(59,130,246,0.25)",
              color: "#93C5FD",
            }}
          >
            3 pilares fundamentais
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Transformando o Caos Operacional{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #93C5FD, #A78BFA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              em Ativos Digitais
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#94A3B8" }}>
            Detalhamos nossas entregas em três pilares fundamentais que trabalham em conjunto
            para maximizar a eficiência e o retorno do seu negócio.
          </p>
        </motion.div>

        {/* 3 pillar cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex flex-col rounded-2xl overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {/* Number header */}
              <div
                className="flex items-center gap-4 px-6 py-5"
                style={{
                  background: `${pillar.color}10`,
                  borderBottom: `1px solid ${pillar.color}20`,
                }}
              >
                <motion.span
                  initial={{ scale: 0.7, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 + 0.1, type: "spring", stiffness: 200 }}
                  className="text-4xl font-black tabular-nums leading-none"
                  style={{ color: pillar.color }}
                >
                  {pillar.number}
                </motion.span>
                <div
                  className="h-px flex-1"
                  style={{ background: `${pillar.color}30` }}
                />
              </div>

              {/* Body */}
              <div className="flex flex-col gap-3 p-6 flex-1">
                <h3 className="text-base font-bold text-white">{pillar.title}</h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#94A3B8" }}
                  dangerouslySetInnerHTML={{ __html: pillar.descriptionHtml }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
