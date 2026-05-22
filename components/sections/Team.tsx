"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const team = [
  {
    name: "Thiago Mello",
    role: "CEO / CCO",
    color: "#10B981",
    photo: "/team/thiago.png",
  },
  {
    name: "Luiz Guedes",
    role: "CMO / CCO",
    color: "#3B82F6",
    photo: "/team/luiz.png",
  },
  {
    name: "João Estellita",
    role: "CTO",
    color: "#8B5CF6",
    photo: "/team/joao.png",
  },
];

export function Team() {
  return (
    <section
      className="section-padding"
      style={{ background: "linear-gradient(180deg, #070711 0%, #080816 100%)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5"
          >
            <div
              className="inline-flex items-center gap-2 w-fit px-4 py-1.5 rounded-full text-sm font-medium"
              style={{
                background: "rgba(139,92,246,0.1)",
                border: "1px solid rgba(139,92,246,0.25)",
                color: "#C4B5FD",
              }}
            >
              Quem faz acontecer
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              Acesso direto a{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #C4B5FD, #93C5FD)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                quem constrói
              </span>
            </h2>

            <p className="text-base leading-relaxed" style={{ color: "#94A3B8" }}>
              Somos uma equipe pequena e altamente especializada. Cada automação é construída por quem vai continuar
              mantendo — sem terceirização, sem jogo de telefone. Quando você fala com a Conectivos, fala com quem
              escreveu o código.
            </p>

            <div className="flex flex-col gap-3">
              {[
                "Engenharia proprietária — nada de low-code genérico",
                "Suporte direto com os fundadores",
                "Iteração rápida — ajustes em dias, não meses",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div
                    className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(139,92,246,0.15)" }}
                  >
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="3">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <span className="text-sm" style={{ color: "#CBD5E1" }}>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: team cards — side by side */}
          <div className="grid grid-cols-3 gap-4">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center gap-3 p-4 rounded-2xl text-center"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                {/* Photo */}
                <div
                  className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0"
                  style={{
                    border: `2px solid ${member.color}40`,
                    boxShadow: `0 0 20px ${member.color}20`,
                  }}
                >
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info */}
                <div className="flex flex-col gap-1.5 items-center">
                  <p className="font-bold text-white text-sm leading-tight">{member.name}</p>
                  <span
                    className="text-xs font-semibold px-2 py-0.5 rounded-full"
                    style={{
                      background: `${member.color}15`,
                      color: member.color,
                      border: `1px solid ${member.color}30`,
                    }}
                  >
                    {member.role}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
