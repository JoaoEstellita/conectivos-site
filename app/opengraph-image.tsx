import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #070711 0%, #0d0d2b 50%, #070711 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
          position: "relative",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 28,
            padding: "8px 20px",
            borderRadius: 999,
            background: "rgba(139,92,246,0.2)",
            border: "1px solid rgba(139,92,246,0.4)",
          }}
        >
          <div
            style={{
              display: "block",
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#10B981",
            }}
          />
          <span style={{ color: "#C4B5FD", fontSize: 20, fontWeight: 600, letterSpacing: 2 }}>
            CONECTIVOS
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: 24,
          }}
        >
          <span
            style={{
              color: "#FFFFFF",
              fontSize: 68,
              fontWeight: 900,
              textAlign: "center",
              lineHeight: 1.1,
            }}
          >
            IA que conversa.{" "}
            <span style={{ color: "#A78BFA" }}>Resultados que aparecem.</span>
          </span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            display: "block",
            color: "#94A3B8",
            fontSize: 26,
            textAlign: "center",
            maxWidth: 760,
            lineHeight: 1.5,
            marginBottom: 44,
          }}
        >
          Agentes de IA no WhatsApp para empresas brasileiras
        </div>

        {/* Trust signals */}
        <div style={{ display: "flex", gap: 24 }}>
          <div
            style={{
              display: "flex",
              color: "#64748B",
              fontSize: 18,
              padding: "8px 16px",
              borderRadius: 8,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            5 empresas ativas
          </div>
          <div
            style={{
              display: "flex",
              color: "#64748B",
              fontSize: 18,
              padding: "8px 16px",
              borderRadius: 8,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            +10.000 atendimentos/mês
          </div>
          <div
            style={{
              display: "flex",
              color: "#64748B",
              fontSize: 18,
              padding: "8px 16px",
              borderRadius: 8,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            Setup em 2–4 semanas
          </div>
        </div>

        {/* URL */}
        <div
          style={{
            display: "block",
            color: "#334155",
            fontSize: 18,
            marginTop: 36,
          }}
        >
          conectivos.net
        </div>
      </div>
    ),
    { ...size }
  );
}
