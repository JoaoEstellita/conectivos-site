"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Gift, Mail } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5521999953224?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20as%20soluções%20da%20Conectivos.";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      "*Novo contato via site*",
      "",
      `Nome: ${form.name}`,
      `Email: ${form.email}`,
      form.company ? `Empresa: ${form.company}` : "",
      "",
      `Mensagem: ${form.message}`,
    ].filter(Boolean);
    window.open(
      `https://wa.me/5521999953224?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank"
    );
    setStatus("success");
    setForm({ name: "", email: "", company: "", message: "" });
  };

  const inputStyle = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "0.75rem",
    color: "#FFFFFF",
    padding: "0.75rem 1rem",
    width: "100%",
    fontSize: "0.9375rem",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <section
      id="contato"
      className="section-padding"
      style={{ background: "linear-gradient(180deg, #070711 0%, #0B0B1A 100%)" }}
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
              background: "rgba(16,185,129,0.1)",
              border: "1px solid rgba(16,185,129,0.25)",
              color: "#6EE7B7",
            }}
          >
            Diagnóstico gratuito
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            O Próximo Passo para a sua{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #6EE7B7, #60A5FA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Transformação
            </span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#94A3B8" }}>
            Não vendemos apenas uma ferramenta — vendemos o futuro do seu negócio. Comece hoje mesmo a eliminar gargalos e escalar operações.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div
              className="rounded-3xl p-8"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 gap-4">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                    style={{ background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.3)" }}>
                    ✓
                  </div>
                  <h3 className="text-xl font-bold text-white">Mensagem enviada!</h3>
                  <p style={{ color: "#94A3B8" }} className="text-center">
                    Retornaremos em até 24h. Obrigado pelo contato.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium" style={{ color: "#94A3B8" }}>Nome *</label>
                      <input
                        type="text"
                        required
                        placeholder="João Silva"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = "rgba(139,92,246,0.5)")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium" style={{ color: "#94A3B8" }}>Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="joao@empresa.com.br"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = "rgba(139,92,246,0.5)")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium" style={{ color: "#94A3B8" }}>Empresa</label>
                    <input
                      type="text"
                      placeholder="Nome da empresa"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(139,92,246,0.5)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium" style={{ color: "#94A3B8" }}>
                      Como podemos ajudar? *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Descreva seu desafio ou o que você quer automatizar..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      style={{ ...inputStyle, resize: "none" }}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(139,92,246,0.5)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-sm" style={{ color: "#F87171" }}>
                      Erro ao enviar. Tente pelo WhatsApp abaixo.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-primary justify-center mt-2 text-base py-4"
                    style={{ opacity: status === "loading" ? 0.7 : 1 }}
                  >
                    {status === "loading" ? "Enviando..." : "Enviar mensagem"}
                    {status !== "loading" && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* WhatsApp sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* WhatsApp card */}
            <div
              className="rounded-3xl p-8 flex flex-col gap-5"
              style={{
                background: "rgba(16,185,129,0.07)",
                border: "1px solid rgba(16,185,129,0.2)",
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.3)" }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#10B981">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white mb-1">Prefere falar agora?</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#94A3B8" }}>
                  Respondemos em minutos. Sem bot, sem burocracia — fala direto com quem faz.
                </p>
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary justify-center"
              >
                Abrir WhatsApp
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </div>

            {/* Info cards */}
            <div className="flex flex-col gap-3">
              {[
                { icon: Calendar, label: "Próxima janela: semana de 12/05" },
                { icon: Gift, label: "Diagnóstico inicial gratuito" },
                { icon: Mail, label: "contato@conectivos.net" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <item.icon size={18} strokeWidth={1.5} style={{ color: "#A78BFA", flexShrink: 0 }} />
                  <span className="text-sm font-medium" style={{ color: "#CBD5E1" }}>{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Value stack strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 p-6 rounded-2xl"
          style={{ background: "rgba(139,92,246,0.08)", border: "1px solid rgba(139,92,246,0.2)" }}
        >
          <div className="flex flex-col sm:flex-row sm:items-start gap-5">
            <div className="flex-1">
              <p className="text-sm font-bold mb-3" style={{ color: "#C4B5FD" }}>
                O diagnóstico gratuito inclui:
              </p>
              <ul className="flex flex-col gap-2">
                {[
                  "Blueprint de automação personalizado para seu negócio (valor R$ 2.000)",
                  "Mapeamento de ROI estimado com seu volume atual",
                  "Roadmap de implementação em 90 dias",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "#94A3B8" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2.5" className="mt-0.5 flex-shrink-0">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="#contato"
              className="btn-primary whitespace-nowrap flex-shrink-0 self-start"
              style={{ boxShadow: "0 4px 20px rgba(139,92,246,0.3)" }}
            >
              Agendar agora
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
