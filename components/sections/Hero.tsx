"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

// ─── Particles ───────────────────────────────────────────────────────────────
const PARTICLE_COUNT = 80;
const CONNECTION_DIST = 150;
const MOUSE_DIST = 200;

class Particle {
  x: number; y: number;
  vx: number; vy: number;
  radius: number; opacity: number;

  constructor(w: number, h: number) {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
    this.radius = Math.random() * 2 + 1;
    this.opacity = Math.random() * 0.5 + 0.2;
  }

  update(w: number, h: number, mouse: { x: number | null; y: number | null }) {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > w) this.vx *= -1;
    if (this.y < 0 || this.y > h) this.vy *= -1;
    if (mouse.x !== null && mouse.y !== null) {
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < MOUSE_DIST) {
        const force = ((MOUSE_DIST - dist) / MOUSE_DIST) * 0.02;
        this.vx += dx * force;
        this.vy += dy * force;
      }
    }
    this.vx *= 0.99;
    this.vy *= 0.99;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(139, 92, 246, ${this.opacity})`;
    ctx.fill();
  }
}

function ParticlesCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const section = canvas.parentElement;
    if (!section) return;

    const mouse: { x: number | null; y: number | null } = { x: null, y: null };
    const particles: Particle[] = [];
    let animId = 0;

    const resize = () => {
      canvas.width = section.offsetWidth;
      canvas.height = section.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onMouseLeave = () => { mouse.x = null; mouse.y = null; };
    section.addEventListener("mousemove", onMouseMove);
    section.addEventListener("mouseleave", onMouseLeave);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle(canvas.width, canvas.height));
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // conexões entre partículas
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${(1 - dist / CONNECTION_DIST) * 0.15})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // conexões mouse → partículas
      if (mouse.x !== null && mouse.y !== null) {
        for (const p of particles) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MOUSE_DIST) {
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(p.x, p.y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${(1 - dist / MOUSE_DIST) * 0.3})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        p.update(canvas.width, canvas.height, mouse);
        p.draw(ctx);
      });

      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      section.removeEventListener("mousemove", onMouseMove);
      section.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0, pointerEvents: "none" }}
    />
  );
}
// ─────────────────────────────────────────────────────────────────────────────
import Image from "next/image";

const WHATSAPP_URL =
  "https://wa.me/5521999953224?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20as%20soluções%20da%20Conectivos.";

type Message = { from: "client" | "ai"; text: string };

const demos: { label: string; messages: Message[] }[] = [
  {
    label: "Agendamento",
    messages: [
      { from: "client", text: "Oi! Quero marcar uma consulta para amanhã" },
      { from: "ai", text: "Olá! Tenho disponibilidade às 14h ou 16h. Qual prefere?" },
      { from: "client", text: "14h perfeito!" },
      { from: "ai", text: "Agendado ✓ Amanhã às 14h. Enviarei lembrete 1h antes." },
    ],
  },
  {
    label: "Qualificação",
    messages: [
      { from: "client", text: "Vi o site, tenho interesse em automatizar meu atendimento" },
      { from: "ai", text: "Ótimo! Quantos contatos/mês você recebe hoje?" },
      { from: "client", text: "Uns 400 por mês, mas não consigo responder todos rápido" },
      { from: "ai", text: "Entendo. Vou agendar uma call de diagnóstico gratuita 👇" },
    ],
  },
  {
    label: "Pós-venda",
    messages: [
      { from: "client", text: "Cadê meu pedido? Faz 3 dias que comprei" },
      { from: "ai", text: "Pedido #4821 saiu hoje às 09h. Previsão: entrega amanhã até 18h 📦" },
      { from: "client", text: "Ótimo, obrigado!" },
      { from: "ai", text: "Disponha! Qualquer dúvida, estou aqui 24h por dia 😊" },
    ],
  },
];

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 px-4 py-2.5 rounded-2xl rounded-bl-sm w-fit"
      style={{ background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.2)" }}>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: "#A78BFA" }}
          animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </div>
  );
}

function WhatsAppDemo() {
  const [activeDemoIdx, setActiveDemoIdx] = useState(0);
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
  const [showTyping, setShowTyping] = useState(false);
  const sequenceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const clearSequence = () => {
    if (sequenceRef.current) clearTimeout(sequenceRef.current);
  };

  useEffect(() => {
    const messages = demos[activeDemoIdx].messages;
    setVisibleMessages([]);
    setShowTyping(false);
    clearSequence();

    let delay = 400;

    messages.forEach((msg, i) => {
      if (msg.from === "ai") {
        // show typing indicator
        sequenceRef.current = setTimeout(() => {
          setShowTyping(true);
        }, delay);
        delay += 900;
        // then show message
        sequenceRef.current = setTimeout(() => {
          setShowTyping(false);
          setVisibleMessages((prev) => [...prev, msg]);
        }, delay);
      } else {
        sequenceRef.current = setTimeout(() => {
          setVisibleMessages((prev) => [...prev, msg]);
        }, delay);
      }
      delay += 700;
    });

    // loop restart
    sequenceRef.current = setTimeout(() => {
      setVisibleMessages([]);
      setShowTyping(false);
    }, delay + 3000);

    return clearSequence;
  }, [activeDemoIdx]);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [visibleMessages, showTyping]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="relative w-full max-w-sm mx-auto lg:mx-0"
    >
      {/* Card */}
      <div
        className="rounded-3xl overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(139,92,246,0.25)",
          boxShadow: "0 0 60px rgba(139,92,246,0.12)",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-5 py-4"
          style={{
            background: "rgba(139,92,246,0.08)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-black"
              style={{ background: "rgba(139,92,246,0.3)", color: "#C4B5FD" }}
            >
              AI
            </div>
            <div>
              <p className="text-xs font-bold text-white leading-none">Agente Conectivos</p>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#10B981", boxShadow: "0 0 6px #10B981" }} />
                <span className="text-[10px]" style={{ color: "#10B981" }}>em produção — 24/7</span>
              </div>
            </div>
          </div>
          {/* WhatsApp icon */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </div>

        {/* Demo toggle */}
        <div
          className="flex gap-1 px-4 py-3"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
        >
          {demos.map((d, i) => (
            <button
              key={d.label}
              onClick={() => setActiveDemoIdx(i)}
              className="text-xs font-semibold px-3 py-1 rounded-full transition-all duration-200"
              style={
                activeDemoIdx === i
                  ? { background: "rgba(139,92,246,0.25)", color: "#C4B5FD", border: "1px solid rgba(139,92,246,0.4)" }
                  : { background: "transparent", color: "#475569", border: "1px solid transparent" }
              }
            >
              {d.label}
            </button>
          ))}
        </div>

        {/* Messages */}
        <div ref={messagesContainerRef} className="flex flex-col gap-2.5 p-4 min-h-[200px] max-h-[240px] overflow-y-auto">
          <AnimatePresence>
            {visibleMessages.map((msg, i) => (
              <motion.div
                key={`${activeDemoIdx}-${i}`}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.25 }}
                className={`flex ${msg.from === "client" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className="px-3.5 py-2 rounded-2xl text-xs leading-relaxed max-w-[80%]"
                  style={
                    msg.from === "client"
                      ? { background: "rgba(255,255,255,0.1)", color: "#E2E8F0", borderRadius: "18px 18px 4px 18px" }
                      : { background: "rgba(139,92,246,0.15)", color: "#C4B5FD", border: "1px solid rgba(139,92,246,0.2)", borderRadius: "18px 18px 18px 4px" }
                  }
                >
                  {msg.text}
                </div>
              </motion.div>
            ))}
            {showTyping && (
              <motion.div
                key="typing"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex justify-start"
              >
                <TypingIndicator />
              </motion.div>
            )}
          </AnimatePresence>
          <div />
        </div>
      </div>

      {/* Decorative glow */}
      <div
        className="absolute -inset-8 rounded-full pointer-events-none -z-10"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />
    </motion.div>
  );
}

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden grid-pattern"
      style={{ background: "#070711" }}
    >
      <ParticlesCanvas />

      {/* Background blobs */}
      <div
        className="absolute w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)",
          top: "-10%",
          left: "-15%",
          animation: "blob 12s ease-in-out infinite",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
          bottom: "5%",
          right: "10%",
          animation: "blob 15s ease-in-out infinite 4s",
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-16 xl:px-24 pt-10 pb-16 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center min-h-screen lg:min-h-0 lg:py-16">

          {/* Left: copy */}
          <div className="flex flex-col gap-6">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="flex items-center gap-2.5"
            >
              <Image src="/logo.png" alt="Conectivos" width={36} height={36} className="object-contain" />
              <span className="font-bold text-lg tracking-tight" style={{ color: "#E2E8F0" }}>conectivos</span>
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 w-fit"
              style={{
                background: "rgba(139,92,246,0.1)",
                border: "1px solid rgba(139,92,246,0.25)",
                borderRadius: "9999px",
                padding: "0.375rem 1rem",
              }}
            >
              <span className="w-2 h-2 rounded-full" style={{ background: "#10B981", boxShadow: "0 0 8px #10B981" }} />
              <span className="text-sm font-medium" style={{ color: "#A78BFA" }}>
                Engenharia de IA & Automação
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-black tracking-tight leading-[1.0]"
              style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)", color: "#FFFFFF" }}
            >
              Automação
              <br />
              que{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #C4B5FD, #93C5FD)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                vende.
              </span>
              <br />
              IA que não{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #6EE7B7, #93C5FD)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                dorme.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-lg leading-relaxed max-w-md"
              style={{ color: "#94A3B8" }}
            >
              Leads não respondidos em até 5 minutos têm 80% menos chance de fechar. Nossos agentes atendem em segundos, 24/7 — sem custo fixo de equipe.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base px-7 py-3.5"
                style={{ boxShadow: "0 4px 24px rgba(16,185,129,0.35)" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Diagnóstico gratuito
              </a>
              <a href="#solucoes" className="btn-outline text-base px-7 py-3.5">
                Ver soluções
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex items-center gap-4 pt-2"
            >
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FBBF24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm" style={{ color: "#475569" }}>5 empresas ativas</span>
              <span style={{ color: "#1E293B" }}>·</span>
              <span className="text-sm" style={{ color: "#475569" }}>+10.000 atendimentos/mês</span>
              <span style={{ color: "#1E293B" }}>·</span>
              <span className="text-sm" style={{ color: "#475569" }}>Setup em 2–4 semanas</span>
            </motion.div>
          </div>

          {/* Right: WhatsApp demo */}
          <WhatsAppDemo />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-0.5 h-8 rounded-full"
          style={{ background: "linear-gradient(to bottom, rgba(139,92,246,0.6), transparent)" }}
        />
      </motion.div>
    </section>
  );
}
