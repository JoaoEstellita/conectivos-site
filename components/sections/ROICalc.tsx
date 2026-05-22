"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const WHATSAPP_URL =
  "https://wa.me/5521999953224?text=Olá,%20calculei%20meu%20ROI%20na%20Conectivos%20e%20quero%20conversar.";

export function ROICalc() {
  const [leads, setLeads] = useState(200);
  const [ticket, setTicket] = useState(800);
  const [lossRate, setLossRate] = useState(30);

  const leadsLost = Math.round((leads * lossRate) / 100);
  const revenueLost = leadsLost * ticket;
  const monthly = revenueLost;

  const fmt = (n: number) =>
    n >= 1000
      ? `R$ ${(n / 1000).toFixed(0)}k`
      : `R$ ${n.toLocaleString("pt-BR")}`;

  return (
    <section
      id="roi"
      className="section-padding"
      style={{ background: "linear-gradient(180deg, #080816 0%, #070711 100%)" }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full text-sm font-medium"
            style={{
              background: "rgba(239,68,68,0.1)",
              border: "1px solid rgba(239,68,68,0.2)",
              color: "#FCA5A5",
            }}
          >
            Calculadora de receita perdida
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Quanto você está{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #FCA5A5, #F87171)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              perdendo agora?
            </span>
          </h2>
          <p className="text-base" style={{ color: "#64748B" }}>
            Ajuste os números do seu negócio abaixo
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-3xl p-8 lg:p-10"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {/* Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {/* Leads */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold" style={{ color: "#94A3B8" }}>
                  Leads por mês
                </label>
                <span className="text-sm font-black tabular-nums" style={{ color: "#C4B5FD" }}>
                  {leads}
                </span>
              </div>
              <input
                type="range"
                min={10}
                max={2000}
                step={10}
                value={leads}
                onChange={(e) => setLeads(Number(e.target.value))}
                className="w-full accent-purple-500 cursor-pointer"
                style={{ accentColor: "#8B5CF6" }}
              />
              <div className="flex justify-between text-xs" style={{ color: "#334155" }}>
                <span>10</span><span>2.000</span>
              </div>
            </div>

            {/* Ticket */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold" style={{ color: "#94A3B8" }}>
                  Ticket médio (R$)
                </label>
                <span className="text-sm font-black tabular-nums" style={{ color: "#C4B5FD" }}>
                  {ticket.toLocaleString("pt-BR")}
                </span>
              </div>
              <input
                type="range"
                min={100}
                max={10000}
                step={50}
                value={ticket}
                onChange={(e) => setTicket(Number(e.target.value))}
                className="w-full cursor-pointer"
                style={{ accentColor: "#8B5CF6" }}
              />
              <div className="flex justify-between text-xs" style={{ color: "#334155" }}>
                <span>R$ 100</span><span>R$ 10k</span>
              </div>
            </div>

            {/* Loss rate */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold" style={{ color: "#94A3B8" }}>
                  Leads perdidos por demora
                </label>
                <span className="text-sm font-black tabular-nums" style={{ color: "#C4B5FD" }}>
                  {lossRate}%
                </span>
              </div>
              <input
                type="range"
                min={5}
                max={80}
                step={5}
                value={lossRate}
                onChange={(e) => setLossRate(Number(e.target.value))}
                className="w-full cursor-pointer"
                style={{ accentColor: "#8B5CF6" }}
              />
              <div className="flex justify-between text-xs" style={{ color: "#334155" }}>
                <span>5%</span><span>80%</span>
              </div>
            </div>
          </div>

          {/* Result */}
          <div
            className="rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6"
            style={{
              background: "rgba(239,68,68,0.07)",
              border: "1px solid rgba(239,68,68,0.2)",
            }}
          >
            <div className="flex flex-col gap-1 text-center sm:text-left">
              <p className="text-sm" style={{ color: "#94A3B8" }}>
                Com {leads} leads/mês e {lossRate}% de perda por lentidão:
              </p>
              <p className="text-sm" style={{ color: "#64748B" }}>
                Você perde ~<span className="font-bold" style={{ color: "#FCA5A5" }}>{leadsLost} leads</span> por mês
                {" "}={" "}
                <span className="font-bold" style={{ color: "#FCA5A5" }}>{fmt(monthly)}</span> em receita mensal desperdiçada
              </p>
            </div>

            <motion.div
              key={monthly}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
              className="flex-shrink-0 text-center"
            >
              <p className="text-4xl font-black tabular-nums"
                style={{
                  background: "linear-gradient(135deg, #FCA5A5, #F87171)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                {fmt(monthly)}
              </p>
              <p className="text-xs mt-1" style={{ color: "#475569" }}>perdidos por mês</p>
            </motion.div>
          </div>

          {/* CTA */}
          <div className="mt-6 text-center">
            <p className="text-sm mb-4" style={{ color: "#475569" }}>
              Nossos agentes respondem em segundos — recuperando esses leads antes que esfriem.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex"
              style={{ boxShadow: "0 4px 20px rgba(16,185,129,0.3)" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Quero recuperar esses leads
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
