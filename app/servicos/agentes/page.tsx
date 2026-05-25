"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";

const APP_URL = "https://agents.conectivos.net";
const WA_URL = "https://wa.me/5521999953224?text=Quero+saber+mais+sobre+o+Conectivos+Agents";

const COLOR = "#8B5CF6";
const COLOR2 = "#3B82F6";

const FEATURES = [
  {
    icon: "🔗",
    title: "API Oficial Meta + multi-canal",
    desc: "WhatsApp Cloud API, Instagram DM, Telegram e Meta Lead Ads nativos — sem número banável.",
  },
  {
    icon: "🎙️",
    title: "Transcrição de áudio em tempo real",
    desc: "Whisper STT converte áudios WhatsApp em texto automaticamente antes de responder.",
  },
  {
    icon: "🔊",
    title: "Respostas em áudio (TTS)",
    desc: "OpenAI TTS com voz configurável por agente: nova, alloy, shimmer e mais.",
  },
  {
    icon: "🚀",
    title: "SDR Outbound com anti-ban",
    desc: "Disparo em massa com cooldown 30s + cap diário configurável — prospecção em escala segura.",
  },
  {
    icon: "🔍",
    title: "Prospecção em 3 fontes",
    desc: "Google Maps, Instagram hashtag ou planilha própria — geração de leads totalmente automática.",
  },
  {
    icon: "🔄",
    title: "Follow-up 24h / 72h automático",
    desc: "Retry com horário comercial, tentativas máximas e mensagem personalizada por estágio.",
  },
  {
    icon: "✅",
    title: "Human-in-the-loop",
    desc: "Ações críticas exigem aprovação humana com expiração automática — segurança sem atrito.",
  },
  {
    icon: "🏢",
    title: "Enriquecimento automático de CNPJ",
    desc: "Lookup em tempo real durante a conversa — dados completos da empresa sem intervenção.",
  },
  {
    icon: "📋",
    title: "Kanban de leads integrado",
    desc: "5 status: descartado → pendente → qualificado → respondeu → fechado. Pipeline visual.",
  },
  {
    icon: "🖼️",
    title: "Geração de tickets visuais",
    desc: "PIL cria imagem personalizada com dados do lead e dispara no WhatsApp automaticamente.",
  },
  {
    icon: "🧠",
    title: "Multi-agente por cliente",
    desc: "Cada cliente tem seus próprios agentes, base de conhecimento e integrações independentes.",
  },
  {
    icon: "📊",
    title: "Analytics de conversas",
    desc: "Taxa de qualificação, tempo médio de resposta, volume por dia e funil de conversão.",
  },
];

const USE_CASES = [
  {
    emoji: "🏥",
    title: "Clínicas e terapeutas",
    desc: "Agendamento end-to-end, lembretes, fila de espera e NPS automático no WhatsApp.",
  },
  {
    emoji: "🏪",
    title: "E-commerce e varejo",
    desc: "Atendimento pós-venda, rastreio de pedidos, trocas e retenção de clientes.",
  },
  {
    emoji: "🏢",
    title: "B2B e serviços",
    desc: "SDR outbound + qualificação + follow-up automático. Pipeline preenchido 24h/dia.",
  },
  {
    emoji: "🎓",
    title: "Educação e cursos",
    desc: "Captação de leads, matrícula guiada e suporte ao aluno sem equipe humana.",
  },
];

export default function AgentesPage() {
  return (
    <main style={{ background: "#070711", minHeight: "100vh" }}>
      <Navbar />

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="section-padding pt-32 pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 50% 0%, ${COLOR}15 0%, transparent 60%)`,
          }}
        />
        <div className="grid-pattern absolute inset-0 opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
              style={{
                background: `${COLOR}15`,
                border: `1px solid ${COLOR}35`,
                color: "#C4B5FD",
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: COLOR, boxShadow: `0 0 6px ${COLOR}` }}
              />
              Motor de agentes IA multi-cliente
            </div>

            <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mb-5">
              Agentes que{" "}
              <span
                style={{
                  background: `linear-gradient(135deg, ${COLOR}, ${COLOR2})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                vendem, atendem
              </span>
              <br />e qualificam 24h por dia
            </h1>

            <p className="text-lg md:text-xl leading-relaxed mb-8" style={{ color: "#94A3B8" }}>
              Plataforma proprietária para orquestrar agentes conversacionais no WhatsApp.
              Cada cliente com seus próprios agentes, bases de conhecimento e integrações independentes.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={APP_URL}
                className="btn-primary"
                style={{ background: `linear-gradient(135deg, ${COLOR}, ${COLOR2})` }}
              >
                Acessar plataforma
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href={WA_URL} className="btn-outline">
                Falar com vendas
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-10 mt-8"
          >
            {[
              { label: "canais suportados", value: "4" },
              { label: "disponibilidade", value: "24/7" },
              { label: "latência de resposta", value: "<2s" },
              { label: "anti-ban nativo", value: "✓" },
            ].map(({ label, value }) => (
              <div key={label} className="text-center">
                <p className="text-3xl font-black text-white">{value}</p>
                <p className="text-xs mt-1" style={{ color: "#64748B" }}>{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Features grid ───────────────────────────────────────── */}
      <section className="section-padding" style={{ background: "#07071A" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
              style={{ background: `${COLOR}12`, border: `1px solid ${COLOR}28`, color: "#C4B5FD" }}
            >
              Funcionalidades
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              Tudo que você precisa para{" "}
              <span
                style={{
                  background: `linear-gradient(135deg, ${COLOR}, ${COLOR2})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                escalar sem equipe
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="p-5 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <span className="text-2xl mb-3 block">{f.icon}</span>
                <h3 className="text-sm font-bold text-white mb-1">{f.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "#64748B" }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use cases ───────────────────────────────────────────── */}
      <section className="section-padding" style={{ background: "#070711" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-black text-white tracking-tight mb-3">
              Para quem é?
            </h2>
            <p style={{ color: "#94A3B8" }}>
              Funciona para qualquer negócio que receba mensagens no WhatsApp.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {USE_CASES.map((uc, i) => (
              <motion.div
                key={uc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 rounded-2xl flex gap-4"
                style={{
                  background: `linear-gradient(135deg, ${COLOR}06, rgba(7,7,17,0.5))`,
                  border: `1px solid ${COLOR}18`,
                }}
              >
                <span className="text-3xl flex-shrink-0">{uc.emoji}</span>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">{uc.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>{uc.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA final ───────────────────────────────────────────── */}
      <section className="section-padding" style={{ background: "#07071A" }}>
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
              Pronto para ter um{" "}
              <span
                style={{
                  background: `linear-gradient(135deg, ${COLOR}, ${COLOR2})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                agente no seu time?
              </span>
            </h2>
            <p className="text-base mb-8" style={{ color: "#94A3B8" }}>
              Implantação em 48h. Sem código. Sem infra. Sem complicação.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={WA_URL}
                className="btn-primary"
                style={{ background: `linear-gradient(135deg, ${COLOR}, ${COLOR2})` }}
              >
                Falar com um especialista
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href={APP_URL} className="btn-outline">
                Acessar plataforma
              </a>
            </div>
            <p className="text-xs mt-6" style={{ color: "#334155" }}>
              Uma solução{" "}
              <Link href="/" className="hover:text-white transition-colors" style={{ color: "#475569" }}>
                Conectivos
              </Link>
              {" "}— IA que conversa. Resultados que aparecem.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
