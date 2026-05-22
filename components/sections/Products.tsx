"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  {
    tab: "Conectivos Agents",
    name: "Conectivos Agents",
    color: "#8B5CF6",
    screenshot: "/screenshots/agents.png",
    tag: "Plataforma proprietária",
    pageUrl: "/servicos/agentes",
    headline: "Motor de agentes IA multi-cliente",
    description:
      "Plataforma proprietária para orquestrar agentes conversacionais — cada cliente com seus próprios agentes, bases de conhecimento e integrações independentes.",
    features: [
      { icon: "🔗", label: "API Oficial Meta + multi-canal", detail: "WhatsApp Cloud API, Instagram DM, Telegram e Meta Lead Ads nativos" },
      { icon: "🎙️", label: "Transcrição de áudio em tempo real", detail: "Whisper STT converte áudios WhatsApp em texto automaticamente" },
      { icon: "🔊", label: "Respostas em áudio (TTS)", detail: "OpenAI TTS com voz configurável por agente (nova, alloy, shimmer...)" },
      { icon: "🚀", label: "SDR Outbound com anti-ban", detail: "Disparo em massa com cooldown 30s + cap diário configurável por contato" },
      { icon: "🔍", label: "Prospecção em 3 fontes", detail: "Google Maps, Instagram hashtag ou planilha própria — tudo automático" },
      { icon: "🔄", label: "Follow-up 24h / 72h automático", detail: "Retry com horário comercial, tentativas máximas e mensagem personalizada" },
      { icon: "✅", label: "Human-in-the-loop (aprovações)", detail: "Ações críticas exigem aprovação humana com expiração automática" },
      { icon: "🖼️", label: "Gera ticket visual e envia no chat", detail: "PIL cria imagem personalizada com dados do lead e dispara no WhatsApp" },
      { icon: "🏢", label: "Enriquecimento automático de CNPJ", detail: "Lookup em tempo real durante a conversa, sem intervenção humana" },
      { icon: "📋", label: "Kanban + pipeline de leads", detail: "5 status: descartado → pendente → qualificado → respondeu → fechado" },
    ],
  },
  {
    tab: "Zang",
    name: "Zang — Agendamento IA",
    color: "#10B981",
    screenshot: "/screenshots/zang.png",
    tag: "L1 · Clínicas & Terapeutas",
    pageUrl: "/servicos/clinica",
    headline: "Do WhatsApp à agenda — sem humano",
    description:
      "Plataforma completa para clínicas e terapeutas: o paciente chega pelo WhatsApp e sai com consulta agendada, confirmada e lembrada — tudo automático.",
    features: [
      { icon: "📅", label: "Agendamento end-to-end no WhatsApp", detail: "Cliente marca, confirma e recebe detalhes sem sair do app" },
      { icon: "🔔", label: "Lembrete 24h + horário de silêncio", detail: "Enviado às 18h do dia anterior — nunca incomoda fora de hora" },
      { icon: "📋", label: "Prontuário digital automático", detail: "Google Doc criado no 1º agendamento com histórico centralizado" },
      { icon: "📈", label: "NPS 2h pós-sessão automático", detail: "Nota 1-5 + comentário disparado quando a sessão termina" },
      { icon: "⏳", label: "Fila de espera com notificação", detail: "Cancelamento abre vaga → paciente na fila é avisado na hora" },
      { icon: "📊", label: "Churn score + LTV + heatmap", detail: "Score 0-100 de risco, valor vitalício e picos por hora/dia da semana" },
      { icon: "📆", label: "Google Calendar bidirecional", detail: "Cria evento + respeita bloqueios e férias do Calendar do terapeuta" },
      { icon: "📦", label: "Pacotes com débito automático", detail: "Saldo debitado ao confirmar — cliente consulta créditos via chat" },
      { icon: "⚡", label: "Admin gerencia pelo WhatsApp", detail: "Envia comando → GPT-4o aplica mudança diretamente, sem painel" },
      { icon: "📝", label: "Intake form pré-sessão", detail: "Coleta histórico de saúde estruturado antes da primeira consulta" },
    ],
  },
  {
    tab: "BrandRadar (FAF)",
    name: "BrandRadar — Inteligência de Marca",
    color: "#3B82F6",
    screenshot: "/screenshots/faf.png",
    tag: "L2 · Inteligência de Mercado",
    pageUrl: "/servicos/monitor",
    headline: "BI conversacional + Social Monitor",
    description:
      "Plataforma de inteligência para marcas esportivas: monitora menções, detecta logos em transmissões de TV/YouTube, analisa sentimento e gera relatórios executivos automaticamente.",
    features: [
      { icon: "📡", label: "Social Monitor em tempo real", detail: "Coleta e analisa posts por keywords com filtro de período" },
      { icon: "🎯", label: "Detecção visual de logos", detail: "YOLOv8 + ByteTrack detecta aparições de marca frame a frame" },
      { icon: "🎙️", label: "Menções verbais por IA", detail: "Faster-Whisper transcreve transmissões e extrai menções de marca" },
      { icon: "📊", label: "Viewers por exposição", detail: "YouTube Analytics API calcula audiência real durante cada aparição" },
      { icon: "❤️", label: "Análise de sentimento", detail: "Score + / − por post, por dia e por tema em destaque" },
      { icon: "🏆", label: "Consolidação por campeonato", detail: "Agrupa N jogos e calcula ROI total de patrocínio por temporada" },
      { icon: "📥", label: "Export CSV / HTML / PDF", detail: "Relatório completo com uma exportação, pronto para boardroom" },
      { icon: "🔔", label: "Alertas de pico de menções", detail: "Notifica quando volume de menções supera threshold configurado" },
      { icon: "👥", label: "Perfil de audiência", detail: "Demographics via YouTube OAuth: idade, gênero, região" },
      { icon: "📰", label: "Relatório semanal automático", detail: "Summary executivo enviado toda sexta com destaques da semana" },
    ],
  },
];

function ScreenshotFrame({ product, active }: { product: (typeof products)[0]; active: number }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative w-full">
      {/* Glow atrás do frame */}
      <motion.div
        key={`glow-${active}`}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute -inset-16 rounded-full pointer-events-none -z-10"
        style={{
          background: `radial-gradient(ellipse at 50% 60%, ${product.color}25 0%, transparent 65%)`,
          filter: "blur(50px)",
        }}
      />

      {/* Browser mockup */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="w-full rounded-2xl overflow-hidden"
        style={{
          border: `1px solid ${product.color}28`,
          boxShadow: `0 32px 80px -20px ${product.color}20, 0 0 0 1px rgba(255,255,255,0.04)`,
        }}
      >
        {/* Browser top bar */}
        <div
          className="flex items-center gap-2 px-4 py-3"
          style={{
            background: "rgba(8,8,20,0.95)",
            borderBottom: `1px solid ${product.color}18`,
          }}
        >
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <div className="w-3 h-3 rounded-full" style={{ background: "#EF4444", opacity: 0.75 }} />
            <div className="w-3 h-3 rounded-full" style={{ background: "#FBBF24", opacity: 0.75 }} />
            <div className="w-3 h-3 rounded-full" style={{ background: "#10B981", opacity: 0.75 }} />
          </div>
          <div
            className="ml-2 flex-1 h-6 rounded-md px-3 flex items-center gap-2 text-xs min-w-0"
            style={{ background: "rgba(255,255,255,0.05)", color: "#475569" }}
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 opacity-40">
              <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span className="truncate" style={{ color: `${product.color}90` }}>Em produção — clientes ativos</span>
          </div>
          {/* Live badge */}
          <div className="flex items-center gap-1.5 flex-shrink-0 pr-1">
            <motion.div
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ background: "#10B981", boxShadow: "0 0 6px #10B981" }}
            />
            <span className="text-[10px] font-medium" style={{ color: "#10B981" }}>live</span>
          </div>
        </div>

        {/* Screenshot area */}
        <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
          <AnimatePresence mode="wait">
            {!imgError ? (
              <motion.div
                key={`screen-${active}`}
                initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0.7 }}
                animate={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
                exit={{ clipPath: "inset(0 0 0 100%)", opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.77, 0, 0.175, 1] }}
                className="absolute inset-0"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.screenshot}
                  alt={product.name}
                  className="w-full h-full object-cover object-top"
                  onError={() => setImgError(true)}
                />
                {/* Glint sweep */}
                <motion.div
                  key={`glint-${active}`}
                  initial={{ x: "-80%", skewX: -12, opacity: 0 }}
                  animate={{ x: "200%", opacity: [0, 0.8, 0] }}
                  transition={{ duration: 1.0, delay: 0.45, ease: "easeOut" }}
                  className="absolute inset-y-0 w-1/4 pointer-events-none"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }}
                />
                {/* Bottom fade */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
                  style={{ background: "linear-gradient(to bottom, transparent, rgba(7,7,17,0.3))" }}
                />
              </motion.div>
            ) : (
              <motion.div
                key={`placeholder-${active}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex flex-col items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${product.color}08, rgba(7,7,17,0.9))` }}
              >
                {/* Skeleton UI */}
                <div className="absolute inset-0 p-6 flex flex-col gap-3 opacity-20">
                  <div className="h-7 rounded-lg w-40" style={{ background: `${product.color}40` }} />
                  <div className="grid grid-cols-4 gap-3 h-16">
                    {[...Array(4)].map((_, i) => (
                      <motion.div key={i} className="rounded-xl" style={{ background: `${product.color}25` }}
                        animate={{ opacity: [0.4, 0.8, 0.4] }}
                        transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.15 }} />
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-3 flex-1">
                    {[...Array(4)].map((_, i) => (
                      <motion.div key={i} className="rounded-xl" style={{ background: `${product.color}15` }}
                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.2 }} />
                    ))}
                  </div>
                </div>
                <div className="relative flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${product.color}18`, border: `1px solid ${product.color}25` }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={product.color} strokeWidth="1.5">
                      <rect x="3" y="3" width="18" height="18" rx="3" /><path d="M3 9h18M9 21V9" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium" style={{ color: product.color }}>Screenshot em breve</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Shadow reflection */}
      <div className="absolute -bottom-6 left-8 right-8 h-6 rounded-2xl pointer-events-none"
        style={{ background: `${product.color}10`, filter: "blur(12px)", transform: "scaleY(-0.5) translateY(100%)" }} />
    </div>
  );
}

export function Products() {
  const [active, setActive] = useState(0);
  const product = products[active];

  return (
    <section
      id="produtos"
      className="section-padding overflow-hidden"
      style={{ background: "linear-gradient(180deg, #070711 0%, #07071A 100%)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full text-sm font-medium"
            style={{ background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.25)", color: "#C4B5FD" }}>
            Portfolio real
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              Plataformas que{" "}
              <span style={{
                background: "linear-gradient(135deg, #C4B5FD, #93C5FD)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                construímos
              </span>
            </h2>
            <p className="text-sm pb-2 flex-shrink-0" style={{ color: "#334155" }}>3 produtos em produção</p>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex gap-2 mb-10 overflow-x-auto pb-1"
          style={{ scrollbarWidth: "none" }}
        >
          {products.map((p, i) => (
            <button
              key={p.tab}
              onClick={() => setActive(i)}
              className="relative text-sm font-semibold px-5 py-2.5 rounded-full whitespace-nowrap flex-shrink-0 transition-colors duration-200"
              style={
                active === i
                  ? { color: "#E2E8F0", background: `${p.color}15`, border: `1px solid ${p.color}35` }
                  : { color: "#475569", background: "transparent", border: "1px solid transparent" }
              }
            >
              {active === i && (
                <motion.div layoutId="productTab" className="absolute inset-0 rounded-full"
                  style={{ background: `${p.color}10`, border: `1px solid ${p.color}28` }}
                  transition={{ type: "spring", stiffness: 350, damping: 30 }} />
              )}
              <span className="relative z-10">{p.tab}</span>
            </button>
          ))}
        </motion.div>

        {/* Main grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.38, ease: [0.25, 0.1, 0.25, 1] }}
            className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-14 items-start"
          >
            {/* Left: info + features */}
            <div className="flex flex-col gap-6 order-2 lg:order-1">
              {/* Header */}
              <div className="flex flex-col gap-3">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full w-fit"
                  style={{ background: `${product.color}12`, color: product.color, border: `1px solid ${product.color}22` }}>
                  {product.tag}
                </span>
                <h3 className="text-2xl font-bold text-white leading-snug">{product.headline}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#94A3B8" }}>{product.description}</p>
              </div>

              {/* Features grid */}
              <div className="flex flex-col gap-2">
                {product.features.map((f, i) => (
                  <motion.div
                    key={f.label}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.28, delay: 0.06 + i * 0.04 }}
                    className="flex items-start gap-3 px-3.5 py-2.5 rounded-xl group transition-colors duration-200"
                    style={{
                      background: "rgba(255,255,255,0.025)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <span className="text-base leading-none mt-0.5 flex-shrink-0">{f.icon}</span>
                    <div className="flex flex-col min-w-0">
                      <span className="text-sm font-semibold leading-snug" style={{ color: "#E2E8F0" }}>{f.label}</span>
                      <span className="text-xs leading-relaxed mt-0.5" style={{ color: "#64748B" }}>{f.detail}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Page link */}
              {product.pageUrl && (
                <a
                  href={product.pageUrl}
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-70 w-fit"
                  style={{ color: product.color }}
                >
                  Ver página completa
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              )}
            </div>

            {/* Right: browser mockup */}
            <motion.div
              className="order-1 lg:order-2 relative"
              initial={{ opacity: 0, scale: 0.97, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <ScreenshotFrame product={product} active={active} />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-2 mt-12"
        >
          {products.map((p, i) => (
            <button key={i} onClick={() => setActive(i)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: active === i ? "28px" : "8px",
                height: "8px",
                background: active === i ? p.color : "rgba(255,255,255,0.1)",
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
