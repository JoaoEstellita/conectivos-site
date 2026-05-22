export type AssetCategory = "efeito" | "componente" | "animação" | "design-system";
export type AssetLanguage = "tsx" | "css" | "js" | "html";

export interface DesignAsset {
  id: string;
  name: string;
  description: string;
  category: AssetCategory;
  tags: string[];
  language: AssetLanguage;
  origin?: string;
  code: string;
}

export const designAssets: DesignAsset[] = [
  {
    id: "particles-canvas",
    name: "ParticlesCanvas",
    description:
      "Partículas flutuantes em canvas HTML5 que se atraem ao cursor do mouse. Conexões dinâmicas entre partículas próximas. Zero dependências — puro canvas API.",
    category: "efeito",
    tags: ["canvas", "mouse", "partículas", "hero", "background"],
    language: "tsx",
    origin: "neoautomacoes.online",
    code: `"use client";
import { useEffect, useRef } from "react";

const PARTICLE_COUNT = 80;
const CONNECTION_DIST = 150;
const MOUSE_DIST = 200;

class Particle {
  x: number; y: number;
  vx: number; vy: number;
  radius: number; opacity: number;

  constructor(w: number, h: number) {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
    this.radius = Math.random() * 2 + 1;
    this.opacity = Math.random() * 0.5 + 0.2;
  }

  update(w: number, h: number, mouse: { x: number | null; y: number | null }) {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > w) this.vx *= -1;
    if (this.y < 0 || this.y > h) this.vy *= -1;
    if (mouse.x !== null && mouse.y !== null) {
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < MOUSE_DIST) {
        const force = ((MOUSE_DIST - dist) / MOUSE_DIST) * 0.02;
        this.vx += dx * force;
        this.vy += dy * force;
      }
    }
    this.vx *= 0.99;
    this.vy *= 0.99;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    // Troque a cor conforme o design system do projeto
    ctx.fillStyle = \`rgba(139, 92, 246, \${this.opacity})\`;
    ctx.fill();
  }
}

export function ParticlesCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const section = canvas.parentElement;
    if (!section) return;

    const mouse: { x: number | null; y: number | null } = { x: null, y: null };
    const particles: Particle[] = [];
    let animId = 0;

    const resize = () => {
      canvas.width = section.offsetWidth;
      canvas.height = section.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onMouseLeave = () => { mouse.x = null; mouse.y = null; };
    section.addEventListener("mousemove", onMouseMove);
    section.addEventListener("mouseleave", onMouseLeave);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle(canvas.width, canvas.height));
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = \`rgba(139, 92, 246, \${(1 - dist / CONNECTION_DIST) * 0.15})\`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      if (mouse.x !== null && mouse.y !== null) {
        for (const p of particles) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MOUSE_DIST) {
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(p.x, p.y);
            ctx.strokeStyle = \`rgba(139, 92, 246, \${(1 - dist / MOUSE_DIST) * 0.3})\`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        p.update(canvas.width, canvas.height, mouse);
        p.draw(ctx);
      });

      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      section.removeEventListener("mousemove", onMouseMove);
      section.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0, pointerEvents: "none" }}
    />
  );
}

// Uso: coloque dentro de uma <section> com position:relative e overflow:hidden
// <section className="relative min-h-screen overflow-hidden">
//   <ParticlesCanvas />
//   <div className="relative z-10">...conteúdo...</div>
// </section>`,
  },
];
