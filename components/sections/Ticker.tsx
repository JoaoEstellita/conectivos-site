"use client";

const clients = [
  {
    name: "ZangFu Clínica",
    line: "L1 · Atendimento IA",
    color: "#8B5CF6",
    logo: "/logos/zangfu.png",
    filter: "brightness(0) invert(1)",
    logoH: "h-6",
    pill: false,
    pillBg: "",
    avatar: false,
  },
  {
    name: "FAF",
    line: "L2 · Inteligência de Mercado",
    color: "#3B82F6",
    logo: "/logos/faf.png",
    filter: "none",
    logoH: "h-7",
    pill: false,
    pillBg: "",
    avatar: false,
  },
  {
    name: "Ilumine Lingerie",
    line: "L4 · SDR Outbound IA",
    color: "#EC4899",
    logo: "/logos/ilumine.jpg",
    // JPEG fundo branco → pill branca para exibir sem distorção
    filter: "none",
    logoH: "h-5",
    pill: true,
    pillBg: "rgba(255,255,255,0.90)",
    avatar: false,
  },
  {
    name: "Elevvy",
    line: "L4 · SDR Outbound IA",
    color: "#A78BFA",
    logo: "/logos/elevvy.png",
    filter: "brightness(1.1) contrast(1.1)",
    logoH: "h-8",
    pill: true,
    pillBg: "rgba(255,255,255,0.06)",
    avatar: false,
  },
  {
    name: "Luma",
    line: "L1 · Atendimento IA",
    color: "#8B5CF6",
    logo: "/logos/luma.png",
    filter: "none",
    logoH: "h-8",
    pill: false,
    pillBg: "",
    avatar: true, // foto de pessoa → avatar circular
  },
];

// triplica para scroll contínuo
const track = [...clients, ...clients, ...clients];

export function Ticker() {
  return (
    <div
      className="py-3 relative overflow-hidden"
      style={{
        background: "rgba(7,7,17,1)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      {/* Label fixo esquerda */}
      <div
        className="absolute left-0 top-0 bottom-0 flex items-center px-4 md:px-6 z-10"
        style={{
          background: "linear-gradient(90deg, #070711 65%, transparent)",
          minWidth: "160px",
        }}
      >
        <div className="flex items-center gap-2">
          <span
            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ background: "#10B981", boxShadow: "0 0 6px #10B981" }}
          />
          <span className="text-xs font-semibold whitespace-nowrap" style={{ color: "#475569" }}>
            Clientes
          </span>
        </div>
      </div>

      {/* Mask */}
      <div
        className="scroll-container"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent 0%, transparent 160px, white 220px, white 80%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 0%, transparent 160px, white 220px, white 80%, transparent 100%)",
        }}
      >
        <div className="scroll-track gap-0">
          {track.map((c, i) => (
            <div key={i} className="flex items-center gap-3 px-6 flex-shrink-0">
              {/* Logo / avatar / nome */}
              {c.logo ? (
                c.avatar ? (
                  // Avatar circular (foto de pessoa)
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={c.logo}
                    alt={c.name}
                    className="w-7 h-7 rounded-full object-cover flex-shrink-0"
                    style={{ border: `1px solid ${c.color}40` }}
                  />
                ) : c.pill ? (
                  // Pill com fundo próprio (branco para Ilumine, escuro para Elevvy)
                  <div
                    className="flex items-center px-2 py-1 rounded-lg overflow-hidden flex-shrink-0"
                    style={{ background: c.pillBg }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={c.logo}
                      alt={c.name}
                      className={`${c.logoH} w-auto object-contain`}
                      style={{ maxWidth: "80px", filter: c.filter }}
                    />
                  </div>
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={c.logo}
                    alt={c.name}
                    className={`${c.logoH} w-auto object-contain flex-shrink-0`}
                    style={{ maxWidth: "90px", filter: c.filter }}
                  />
                )
              ) : (
                <span className="text-sm font-semibold text-white whitespace-nowrap">
                  {c.name}
                </span>
              )}

              {/* Pill de linha */}
              <span
                className="text-xs font-medium px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0"
                style={{
                  background: `${c.color}15`,
                  color: c.color,
                  border: `1px solid ${c.color}25`,
                }}
              >
                {c.line}
              </span>

              <span className="text-lg mx-1 flex-shrink-0" style={{ color: "#1E293B" }}>
                ✦
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
