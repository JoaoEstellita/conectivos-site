"use client";

import { useState } from "react";
import { designAssets, DesignAsset, AssetCategory } from "@/lib/design-assets";

const CATEGORY_LABELS: Record<AssetCategory | "todos", string> = {
  todos: "Todos",
  efeito: "Efeitos",
  componente: "Componentes",
  animação: "Animações",
  "design-system": "Design Systems",
};

const CATEGORY_COLORS: Record<AssetCategory, string> = {
  efeito: "rgba(139,92,246,0.2)",
  componente: "rgba(16,185,129,0.2)",
  animação: "rgba(59,130,246,0.2)",
  "design-system": "rgba(251,191,36,0.2)",
};

const CATEGORY_TEXT: Record<AssetCategory, string> = {
  efeito: "#A78BFA",
  componente: "#6EE7B7",
  animação: "#93C5FD",
  "design-system": "#FDE68A",
};

function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button
      onClick={copy}
      style={{
        background: copied ? "rgba(16,185,129,0.15)" : "rgba(255,255,255,0.06)",
        border: `1px solid ${copied ? "rgba(16,185,129,0.4)" : "rgba(255,255,255,0.1)"}`,
        color: copied ? "#6EE7B7" : "#94A3B8",
        borderRadius: "6px",
        padding: "5px 12px",
        fontSize: "12px",
        cursor: "pointer",
        transition: "all 0.2s",
        fontFamily: "inherit",
      }}
    >
      {copied ? "✓ Copiado" : "Copiar código"}
    </button>
  );
}

function AssetCard({ asset }: { asset: DesignAsset }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "16px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <div style={{ padding: "20px 24px 16px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
          <span
            style={{
              background: CATEGORY_COLORS[asset.category],
              color: CATEGORY_TEXT[asset.category],
              border: `1px solid ${CATEGORY_TEXT[asset.category]}40`,
              borderRadius: "9999px",
              padding: "3px 10px",
              fontSize: "11px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            {asset.category}
          </span>
          <span
            style={{
              background: "rgba(255,255,255,0.05)",
              color: "#475569",
              borderRadius: "6px",
              padding: "3px 8px",
              fontSize: "11px",
              fontFamily: "monospace",
            }}
          >
            .{asset.language}
          </span>
        </div>

        <h3 style={{ color: "#F1F5F9", fontSize: "17px", fontWeight: 700, margin: "0 0 6px" }}>
          {asset.name}
        </h3>
        <p style={{ color: "#64748B", fontSize: "13px", lineHeight: 1.6, margin: 0 }}>
          {asset.description}
        </p>

        {asset.origin && (
          <p style={{ color: "#334155", fontSize: "11px", marginTop: "8px" }}>
            Inspirado em: <span style={{ color: "#475569" }}>{asset.origin}</span>
          </p>
        )}
      </div>

      {/* Tags */}
      <div style={{ padding: "0 24px 16px", display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {asset.tags.map((tag) => (
          <span
            key={tag}
            style={{
              background: "rgba(255,255,255,0.04)",
              color: "#475569",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "9999px",
              padding: "2px 8px",
              fontSize: "11px",
            }}
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Code block */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", flex: 1 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 16px",
            background: "rgba(0,0,0,0.2)",
          }}
        >
          <span style={{ color: "#334155", fontSize: "12px", fontFamily: "monospace" }}>
            {asset.name}.{asset.language}
          </span>
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <button
              onClick={() => setExpanded(!expanded)}
              style={{
                background: "transparent",
                border: "none",
                color: "#475569",
                cursor: "pointer",
                fontSize: "12px",
                padding: "4px 8px",
              }}
            >
              {expanded ? "▲ Recolher" : "▼ Expandir"}
            </button>
            <CopyButton code={asset.code} />
          </div>
        </div>

        <div
          style={{
            maxHeight: expanded ? "600px" : "120px",
            overflow: "auto",
            transition: "max-height 0.3s ease",
          }}
        >
          <pre
            style={{
              margin: 0,
              padding: "16px",
              color: "#94A3B8",
              fontSize: "12px",
              lineHeight: 1.7,
              fontFamily: "'Fira Code', 'Cascadia Code', 'JetBrains Mono', monospace",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
              background: "transparent",
            }}
          >
            {asset.code}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default function RecursosDesign() {
  const [activeCategory, setActiveCategory] = useState<AssetCategory | "todos">("todos");

  const filtered =
    activeCategory === "todos"
      ? designAssets
      : designAssets.filter((a) => a.category === activeCategory);

  const categories = ["todos", ...Array.from(new Set(designAssets.map((a) => a.category)))] as (
    | AssetCategory
    | "todos"
  )[];

  return (
    <main style={{ minHeight: "100vh", background: "#070711", color: "#fff", fontFamily: "-apple-system, sans-serif" }}>
      {/* Header */}
      <div
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          padding: "64px 0 48px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "680px", margin: "0 auto", padding: "0 24px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(139,92,246,0.1)",
              border: "1px solid rgba(139,92,246,0.25)",
              borderRadius: "9999px",
              padding: "6px 16px",
              marginBottom: "24px",
            }}
          >
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#8B5CF6", display: "inline-block" }} />
            <span style={{ color: "#A78BFA", fontSize: "13px", fontWeight: 500 }}>conectivos / design-assets</span>
          </div>

          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              margin: "0 0 16px",
              lineHeight: 1.1,
            }}
          >
            Biblioteca de{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #C4B5FD, #93C5FD)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Assets
            </span>
          </h1>
          <p style={{ color: "#64748B", fontSize: "16px", lineHeight: 1.6, margin: 0 }}>
            Efeitos, componentes e padrões visuais criados nos projetos Conectivos. Copie o código e use em qualquer projeto.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "32px 24px 0" }}>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "32px" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                background: activeCategory === cat ? "rgba(139,92,246,0.2)" : "rgba(255,255,255,0.04)",
                border: `1px solid ${activeCategory === cat ? "rgba(139,92,246,0.5)" : "rgba(255,255,255,0.08)"}`,
                color: activeCategory === cat ? "#C4B5FD" : "#64748B",
                borderRadius: "9999px",
                padding: "7px 16px",
                fontSize: "13px",
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {CATEGORY_LABELS[cat]}
              <span
                style={{
                  marginLeft: "6px",
                  background: "rgba(255,255,255,0.08)",
                  borderRadius: "9999px",
                  padding: "1px 6px",
                  fontSize: "11px",
                  color: "#475569",
                }}
              >
                {cat === "todos" ? designAssets.length : designAssets.filter((a) => a.category === cat).length}
              </span>
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 0", color: "#334155" }}>
            Nenhum asset nesta categoria ainda.
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(480px, 1fr))",
              gap: "20px",
              paddingBottom: "80px",
            }}
          >
            {filtered.map((asset) => (
              <AssetCard key={asset.id} asset={asset} />
            ))}
          </div>
        )}
      </div>

      {/* How to add */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          padding: "48px 24px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <h2 style={{ color: "#334155", fontSize: "13px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "16px" }}>
          Como adicionar um asset
        </h2>
        <pre
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "12px",
            padding: "20px 24px",
            color: "#475569",
            fontSize: "13px",
            lineHeight: 1.8,
            fontFamily: "monospace",
            overflowX: "auto",
          }}
        >
{`// lib/design-assets.ts
export const designAssets: DesignAsset[] = [
  // ... assets existentes ...
  {
    id: "meu-novo-asset",
    name: "MeuAsset",
    description: "Descrição do que faz.",
    category: "efeito",          // efeito | componente | animação | design-system
    tags: ["tag1", "tag2"],
    language: "tsx",
    origin: "site-de-inspiracao.com",  // opcional
    code: \`// seu código aqui\`,
  },
];`}
        </pre>
      </div>
    </main>
  );
}
