"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Meus clientes vão odiar falar com robô",
    a: "As pessoas odeiam esperar e não ter seus problemas resolvidos. Nossas IAs são tão fluidas e naturais que a percepção é de um assistente digital de alta performance, não de um menu de opções travado. A experiência é humanizada e eficiente.",
  },
  {
    q: "Isso vai dar muito trabalho para minha equipe",
    a: "A Conectivos entrega soluções turn-key completas. Nós implementamos, configuramos e treinamos sua equipe. O único trabalho será atender os clientes já qualificados e prontos para fechar — não programar nada.",
  },
  {
    q: "A IA pode falar algo errado?",
    a: "Nossos agentes operam dentro de trilhos de segurança rígidos e base de conhecimento fechada e controlada. Eles são mais fiéis às suas regras de negócio do que um colaborador em treinamento. Sem improvisos, apenas resultados consistentes.",
  },
  {
    q: "Como funciona a precificação?",
    a: "Modelo de assinatura mensal por linha de produto, sem taxa de setup. Começamos com um diagnóstico gratuito para entender seu contexto e só então apresentamos uma proposta com ROI esperado.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="section-padding"
      style={{ background: "linear-gradient(180deg, #070711 0%, #0A0A18 100%)" }}
    >
      <div className="max-w-3xl mx-auto">
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
              background: "rgba(139,92,246,0.1)",
              border: "1px solid rgba(139,92,246,0.25)",
              color: "#A78BFA",
            }}
          >
            Dúvidas frequentes
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Suas dúvidas,{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #A78BFA, #60A5FA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              respondidas
            </span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#94A3B8" }}>
            As perguntas que todo cliente faz antes de começar — respondidas com honestidade.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-2xl overflow-hidden"
                style={{
                  background: isOpen
                    ? "rgba(139,92,246,0.07)"
                    : "rgba(255,255,255,0.03)",
                  border: isOpen
                    ? "1px solid rgba(139,92,246,0.25)"
                    : "1px solid rgba(255,255,255,0.07)",
                  transition: "background 0.2s, border-color 0.2s",
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-semibold text-white leading-snug">{faq.q}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown
                      size={20}
                      strokeWidth={1.5}
                      style={{ color: isOpen ? "#A78BFA" : "#475569" }}
                    />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
                      style={{ overflow: "hidden" }}
                    >
                      <p
                        className="px-6 pb-5 text-sm leading-relaxed"
                        style={{ color: "#94A3B8" }}
                      >
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
