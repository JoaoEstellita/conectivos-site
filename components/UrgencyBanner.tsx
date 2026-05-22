"use client";

import { useState, useEffect } from "react";

export function UrgencyBanner() {
  const [dismissed, setDismissed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (localStorage.getItem("urgency-dismissed") === "1") {
      setDismissed(true);
    }
  }, []);

  const dismiss = () => {
    localStorage.setItem("urgency-dismissed", "1");
    setDismissed(true);
  };

  // Evita flash no SSR
  if (!mounted || dismissed) return null;

  return (
    <div
      className="w-full flex items-center justify-center gap-3 px-4 py-2.5 text-sm relative"
      style={{
        background: "linear-gradient(90deg, rgba(139,92,246,0.15) 0%, rgba(220,38,38,0.1) 100%)",
        borderBottom: "1px solid rgba(139,92,246,0.2)",
      }}
    >
      <span style={{ color: "#A78BFA" }}>⚡</span>
      <p className="text-center" style={{ color: "#CBD5E1" }}>
        <span className="font-semibold" style={{ color: "#E2E8F0" }}>Vagas limitadas —</span>{" "}
        apenas 3 projetos disponíveis para início em maio 2026.
      </p>
      <a
        href="#contato"
        className="font-semibold whitespace-nowrap underline underline-offset-2 transition-colors hover:opacity-80"
        style={{ color: "#C4B5FD" }}
      >
        Solicitar diagnóstico →
      </a>
      <button
        onClick={dismiss}
        aria-label="Fechar"
        className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded hover:opacity-70 transition-opacity"
        style={{ color: "#475569" }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
