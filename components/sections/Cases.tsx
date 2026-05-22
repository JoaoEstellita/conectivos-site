"use client";

import { motion } from "framer-motion";

const clients = [
  {
    name: "ZangFu Clínica",
    logo: "/logos/zangfu.png",
    filter: "brightness(0) invert(1)",
    logoH: "h-14",
    pill: false,
    card: false,
    avatar: false,
  },
  {
    name: "FAF",
    logo: "/logos/faf.png",
    filter: "none",
    logoH: "h-12",
    pill: false,
    card: false,
    avatar: false,
  },
  {
    name: "Ilumine Lingerie",
    logo: "/logos/ilumine.jpg",
    filter: "none",
    logoH: "h-12",
    pill: true,
    card: false,
    avatar: false,
  },
  {
    name: "Elevvy",
    logo: "/logos/elevvy.png",
    filter: "none",
    logoH: "h-16",
    pill: false,
    card: true,
    avatar: false,
  },
  {
    name: "Luma Kato",
    logo: "/logos/luma.png",
    filter: "none",
    logoH: "h-14",
    pill: false,
    card: false,
    avatar: true,
  },
];

const track = [...clients, ...clients, ...clients];

export function Cases() {
  return (
    <section id="cases" style={{ background: "#070711" }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-6 pb-8 pt-2 text-center"
      >
        <div
          className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full text-sm font-medium"
          style={{
            background: "rgba(16,185,129,0.1)",
            border: "1px solid rgba(16,185,129,0.25)",
            color: "#6EE7B7",
          }}
        >
          Resultados reais
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
          Cases de{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #6EE7B7, #60A5FA)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Sucesso
          </span>
        </h2>
      </motion.div>

      {/* Logo ticker */}
      <div
        className="py-10 relative overflow-hidden"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div
          className="scroll-container"
          style={{
            maskImage:
              "linear-gradient(90deg, transparent 0%, white 10%, white 90%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(90deg, transparent 0%, white 10%, white 90%, transparent 100%)",
          }}
        >
          <div className="scroll-track gap-0">
            {track.map((c, i) => (
              <div key={i} className="flex items-center px-14 flex-shrink-0">
                {c.avatar ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={c.logo}
                    alt={c.name}
                    className="w-16 h-16 rounded-full object-cover"
                    style={{ border: "2px solid rgba(167,139,250,0.4)" }}
                  />
                ) : c.card ? (
                  <div className="rounded-2xl overflow-hidden flex-shrink-0"
                    style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={c.logo}
                      alt={c.name}
                      className={`${c.logoH} w-auto object-contain`}
                      style={{ maxWidth: "160px" }}
                    />
                  </div>
                ) : c.pill ? (
                  <div
                    className="flex items-center px-5 py-3 rounded-2xl overflow-hidden"
                    style={{ background: "rgba(255,255,255,0.92)" }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={c.logo}
                      alt={c.name}
                      className={`${c.logoH} w-auto object-contain`}
                      style={{ maxWidth: "160px" }}
                    />
                  </div>
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={c.logo}
                    alt={c.name}
                    className={`${c.logoH} w-auto object-contain`}
                    style={{ maxWidth: "180px", filter: c.filter }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
