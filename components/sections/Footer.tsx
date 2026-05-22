"use client";

import Image from "next/image";

const WHATSAPP_URL = "https://wa.me/5521999953224?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20as%20soluções%20da%20Conectivos.";

export function Footer() {
  return (
    <footer
      className="pt-16 pb-8 px-6"
      style={{
        background: "#040408",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="Conectivos" width={36} height={36} className="object-contain" />
              <span className="font-bold text-xl text-white tracking-tight">conectivos</span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm" style={{ color: "#64748B" }}>
              Agência de IA conversacional B2B. Transformamos processos, atendimento
              e dados em vantagem competitiva real — via WhatsApp e além.
            </p>
          </div>

          {/* Soluções */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-white mb-1">Soluções</h4>
            {[
              { label: "Clínica & Agendamento", href: "/servicos/clinica" },
              { label: "Agentes IA", href: "/servicos/agentes" },
              { label: "SDR Autônomo", href: "/servicos/sdr" },
              { label: "Instagram DM", href: "/servicos/instagram" },
              { label: "Meta Ads IA", href: "/servicos/meta" },
              { label: "Social Monitor", href: "/servicos/monitor" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="text-sm hover:text-white transition-colors"
                style={{ color: "#64748B" }}
              >
                {s.label}
              </a>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-white mb-1">Links</h4>
            {[
              { label: "Blog", href: "/blog" },
              { label: "Como funciona", href: "#como-funciona" },
              { label: "Contato", href: "#contato" },
              { label: "contato@conectivos.net", href: "mailto:contato@conectivos.net" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm hover:text-white transition-colors"
                style={{ color: "#64748B" }}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-xs" style={{ color: "#374151" }}>
            © 2026 Conectivos. Todos os direitos reservados.
          </p>
          <p className="text-xs" style={{ color: "#374151" }}>
            conectivos.net
          </p>
        </div>
      </div>
    </footer>
  );
}
