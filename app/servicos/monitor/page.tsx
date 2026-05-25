"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";

const APP_URL = "https://socialmonitor.conectivos.net";

const FEATURES = [
  {
    icon: "📡",
    title: "Feed de menções em tempo real",
    desc: "Coleta YouTube, Instagram e Twitter/X por keywords, hashtags e handles. Deduplicação automática.",
  },
  {
    icon: "🧠",
    title: "Análise de sentimento por IA",
    desc: "Claude Haiku classifica cada menção como positivo / negativo / neutro com score e raciocínio.",
  },
  {
    icon: "🏆",
    title: "Score de reputação 0–100",
    desc: "Calculado diariamente com histórico. Fórmula: sentimento × volume × relevância.",
  },
  {
    icon: "🚨",
    title: "Detecção automática de crises",
    desc: "Alerta quando volume supera 2σ ou negatividade ultrapassa 60% em 2h — sem falsos positivos.",
  },
  {
    icon: "📊",
    title: "Analytics e volume timeline",
    desc: "Gráficos de menções por dia, engajamento acumulado, tendências e comparativo entre períodos.",
  },
  {
    icon: "🎯",
    title: "Radar de influenciadores",
    desc: "Identifica quem está falando da marca com tier micro / médio / macro e métricas de alcance.",
  },
  {
    icon: "⚔️",
    title: "Análise de concorrentes",
    desc: "Share of voice e benchmark de sentimento side-by-side com seus principais concorrentes.",
  },
  {
    icon: "📈",
    title: "Correlação Meta Ads",
    desc: "Cruza buzz orgânico × investimento em anúncios para medir o impacto real das campanhas.",
  },
  {
    icon: "📄",
    title: "Relatórios executivos por IA",
    desc: "Claude Sonnet gera relatórios semanais e mensais narrativos prontos para boardroom.",
  },
  {
    icon: "🔔",
    title: "Alertas WhatsApp + email",
    desc: "Notificações instantâneas de crises, picos de menções e alertas personalizados.",
  },
  {
    icon: "🎨",
    title: "White-label completo",
    desc: "Logo, cor primária e nome da plataforma personalizados por conta — sem 'Powered by'.",
  },
  {
    icon: "🔑",
    title: "Pool de API keys YouTube",
    desc: "Adicione múltiplas chaves Google Cloud para multiplicar a quota diária e monitorar mais perfis.",
  },
];

const PLANS = [
  {
    name: "Starter",
    price: "Grátis",
    detail: "para sempre",
    highlight: false,
    features: [
      "1 marca monitorada",
      "10 perfis de busca",
      "YouTube + Instagram",
      "Análise de sentimento",
      "Detecção de crises",
      "Relatórios semanais",
      "Score de reputação",
    ],
    cta: "Começar grátis",
    href: `${APP_URL}/signup`,
  },
  {
    name: "Pro",
    price: "R$199",
    detail: "/mês",
    highlight: true,
    features: [
      "3 marcas monitoradas",
      "30 perfis de busca",
      "YouTube + Instagram + Facebook",
      "Alertas WhatsApp + email",
      "Correlação Meta Ads",
      "Comparativo concorrentes",
      "Relatórios semanais e mensais",
    ],
    cta: "Assinar Pro",
    href: `${APP_URL}/signup`,
  },
  {
    name: "Agency",
    price: "R$499",
    detail: "/mês",
    highlight: false,
    features: [
      "10 marcas monitoradas",
      "100 perfis de busca",
      "Influencer Radar",
      "Pool de API keys YouTube",
      "White-label (logo + cores)",
      "Tudo do plano Pro",
    ],
    cta: "Falar com vendas",
    href: "https://wa.me/5521999953224?text=Quero+o+plano+Agency+do+Social+Monitor",
  },
  {
    name: "Enterprise",
    price: "Sob consulta",
    detail: "",
    highlight: false,
    features: [
      "Marcas ilimitadas",
      "SLA garantido",
      "Domínio customizado",
      "Onboarding dedicado",
      "Relatórios customizados",
      "Tudo do plano Agency",
    ],
    cta: "Falar com vendas",
    href: "https://wa.me/5521999953224?text=Quero+falar+sobre+Enterprise+Social+Monitor",
  },
];

const COLOR = "#6366f1";
const COLOR2 = "#14b8a6";

export default function MonitorPage() {
  return (
    <main style={{ background: "#070711", minHeight: "100vh" }}>
      <Navbar />

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="section-padding pt-32 pb-20 relative overflow-hidden">
        {/* Background glow */}
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
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
              style={{
                background: `${COLOR}15`,
                border: `1px solid ${COLOR}35`,
                color: "#A5B4FC",
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: COLOR2, boxShadow: `0 0 6px ${COLOR2}` }}
              />
              Plataforma SaaS em produção
            </div>

            <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mb-5">
              Inteligência de{" "}
              <span
                style={{
                  background: `linear-gradient(135deg, ${COLOR}, ${COLOR2})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                presença digital
              </span>
              <br />
              para marcas sérias
            </h1>

            <p className="text-lg md:text-xl leading-relaxed mb-8" style={{ color: "#94A3B8" }}>
              Monitore o que falam sobre sua marca em tempo real, detecte crises antes que explodam,
              analise concorrentes e receba relatórios executivos gerados por IA.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={`${APP_URL}/signup`}
                className="btn-primary"
                style={{ background: `linear-gradient(135deg, ${COLOR}, ${COLOR2})` }}
              >
                Começar grátis
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href={`${APP_URL}/login`} className="btn-outline">
                Já tenho conta
              </a>
            </div>

            <p className="text-sm mt-4" style={{ color: "#475569" }}>
              Plano Starter gratuito · sem cartão de crédito
            </p>
          </motion.div>

          {/* Screenshot preview */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                border: `1px solid ${COLOR}25`,
                boxShadow: `0 40px 100px -20px ${COLOR}20, 0 0 0 1px rgba(255,255,255,0.04)`,
              }}
            >
              {/* Browser bar */}
              <div
                className="flex items-center gap-2 px-4 py-3"
                style={{ background: "rgba(8,8,20,0.95)", borderBottom: `1px solid ${COLOR}18` }}
              >
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full" style={{ background: "#EF4444", opacity: 0.75 }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: "#FBBF24", opacity: 0.75 }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: "#10B981", opacity: 0.75 }} />
                </div>
                <div
                  className="ml-2 flex-1 h-6 rounded-md px-3 flex items-center gap-2 text-xs"
                  style={{ background: "rgba(255,255,255,0.05)", color: "#475569" }}
                >
                  <span style={{ color: `${COLOR}90` }}>socialmonitor.conectivos.net</span>
                </div>
              </div>
              {/* Screenshot placeholder — substituir por screenshot real */}
              <div
                className="relative flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${COLOR}08, rgba(7,7,17,0.95))`, aspectRatio: "16/7" }}
              >
                {/* Skeleton UI */}
                <div className="absolute inset-0 p-8 flex flex-col gap-4 opacity-25">
                  <div className="flex gap-4">
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 h-20 rounded-xl"
                        style={{ background: `${COLOR}30` }}
                        animate={{ opacity: [0.4, 0.8, 0.4] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                      />
                    ))}
                  </div>
                  <div className="flex gap-4 flex-1">
                    <motion.div
                      className="flex-[2] rounded-xl"
                      style={{ background: `${COLOR}18` }}
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                    />
                    <motion.div
                      className="flex-1 rounded-xl"
                      style={{ background: `${COLOR2}18` }}
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}
                    />
                  </div>
                </div>
                <div className="relative flex flex-col items-center gap-3 text-center">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
                    style={{ background: `${COLOR}18`, border: `1px solid ${COLOR}25` }}
                  >
                    📊
                  </div>
                  <p className="text-sm font-semibold" style={{ color: `${COLOR}` }}>Social Monitor</p>
                  <p className="text-xs" style={{ color: "#475569" }}>screenshot em breve</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-10 mt-14"
          >
            {[
              { label: "redes monitoradas", value: "3" },
              { label: "coletas por dia", value: "6×" },
              { label: "relatórios gerados por IA", value: "100%" },
              { label: "detecção de crise", value: "10min" },
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
              style={{ background: `${COLOR}12`, border: `1px solid ${COLOR}28`, color: "#A5B4FC" }}
            >
              Funcionalidades
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              Tudo que sua marca precisa para{" "}
              <span
                style={{
                  background: `linear-gradient(135deg, ${COLOR}, ${COLOR2})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                proteger sua reputação
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

      {/* ── Como funciona ───────────────────────────────────────── */}
      <section className="section-padding" style={{ background: "#070711" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-black text-white tracking-tight mb-3">
              Pronto em{" "}
              <span style={{ color: COLOR2 }}>3 minutos</span>
            </h2>
            <p className="text-base" style={{ color: "#94A3B8" }}>
              Da criação da conta até as primeiras menções coletadas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Crie sua conta grátis",
                desc: "Cadastro em 30 segundos. Nome, email, senha — sem cartão de crédito.",
              },
              {
                step: "02",
                title: "Configure sua marca",
                desc: "Adicione keywords, hashtags e handles para monitorar no YouTube e Instagram.",
              },
              {
                step: "03",
                title: "Receba inteligência",
                desc: "Em até 4 horas as primeiras menções chegam. Score, sentimento e alertas no ar.",
              },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative p-6 rounded-2xl"
                style={{
                  background: `linear-gradient(135deg, ${COLOR}08, rgba(7,7,17,0.6))`,
                  border: `1px solid ${COLOR}20`,
                }}
              >
                <p className="text-4xl font-black mb-4" style={{ color: `${COLOR}30` }}>{s.step}</p>
                <h3 className="text-base font-bold text-white mb-2">{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ─────────────────────────────────────────────── */}
      <section className="section-padding" style={{ background: "#07071A" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-3">
              Planos e preços
            </h2>
            <p style={{ color: "#94A3B8" }}>
              Comece grátis. Escale quando precisar.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PLANS.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative flex flex-col p-5 rounded-2xl"
                style={{
                  background: plan.highlight ? `${COLOR}08` : "rgba(255,255,255,0.025)",
                  border: plan.highlight ? `1px solid ${COLOR}40` : "1px solid rgba(255,255,255,0.07)",
                }}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full text-white"
                      style={{ background: `linear-gradient(135deg, ${COLOR}, ${COLOR2})` }}
                    >
                      Mais popular
                    </span>
                  </div>
                )}

                <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "#64748B" }}>
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-2xl font-black text-white">{plan.price}</span>
                  {plan.detail && <span className="text-xs" style={{ color: "#64748B" }}>{plan.detail}</span>}
                </div>

                <ul className="space-y-2 flex-1 mb-5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs" style={{ color: "#94A3B8" }}>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={COLOR2}
                        strokeWidth="3"
                        className="flex-shrink-0 mt-0.5"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.href}
                  className="block text-center text-sm font-semibold py-2 rounded-xl transition-all"
                  style={
                    plan.highlight
                      ? {
                          background: `linear-gradient(135deg, ${COLOR}, ${COLOR2})`,
                          color: "#fff",
                        }
                      : {
                          border: "1px solid rgba(255,255,255,0.15)",
                          color: "#94A3B8",
                        }
                  }
                >
                  {plan.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA final ───────────────────────────────────────────── */}
      <section className="section-padding" style={{ background: "#070711" }}>
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
              Comece a monitorar{" "}
              <span
                style={{
                  background: `linear-gradient(135deg, ${COLOR}, ${COLOR2})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                hoje
              </span>
            </h2>
            <p className="text-base mb-8" style={{ color: "#94A3B8" }}>
              Plano Starter gratuito para sempre. Sem cartão de crédito.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`${APP_URL}/signup`}
                className="btn-primary"
                style={{ background: `linear-gradient(135deg, ${COLOR}, ${COLOR2})` }}
              >
                Criar conta grátis
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="https://wa.me/5521999953224?text=Quero+saber+mais+sobre+o+Social+Monitor"
                className="btn-outline"
              >
                Falar com um especialista
              </a>
            </div>
            <p className="text-xs mt-6" style={{ color: "#334155" }}>
              Uma solução{" "}
              <Link href="/" className="hover:text-white transition-colors" style={{ color: "#475569" }}>
                Conectivos
              </Link>
              {" "}— Inteligência de Presença Digital
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
