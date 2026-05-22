"use client";

import Link from "next/link";
import Image from "next/image";
import { authors } from "@/lib/authors";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  category: string;
  date: string;
  readTime: number;
  tags: string[];
}

const categoryColors: Record<string, string> = {
  tecnologia: "#8B5CF6",
  marketing: "#3B82F6",
  cases: "#10B981",
  vendas: "#F59E0B",
  mercado: "#EC4899",
  geral: "#64748B",
};

export function BlogCard({ slug, title, excerpt, author, category, date, readTime, tags }: BlogCardProps) {
  const authorData = authors[author] || authors.joao;
  const color = categoryColors[category] || "#64748B";
  const dateFormatted = new Date(date).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <Link href={`/blog/${slug}`} className="block group">
      <article
        className="h-full flex flex-col rounded-2xl p-6 transition-all duration-300"
        style={{
          background: "rgba(255,255,255,0.025)",
          border: "1px solid rgba(255,255,255,0.07)",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.border = `1px solid ${color}30`;
          (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.border = "1px solid rgba(255,255,255,0.07)";
          (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.025)";
        }}
      >
        {/* Category + read time */}
        <div className="flex items-center justify-between mb-4">
          <span
            className="text-xs font-semibold px-2.5 py-1 rounded-full capitalize"
            style={{
              background: `${color}15`,
              color: color,
              border: `1px solid ${color}25`,
            }}
          >
            {category}
          </span>
          <span className="text-xs" style={{ color: "#475569" }}>
            {readTime} min de leitura
          </span>
        </div>

        {/* Title */}
        <h2
          className="text-lg font-bold text-white leading-snug mb-3 group-hover:text-purple-300 transition-colors"
          style={{ lineHeight: 1.35 }}
        >
          {title}
        </h2>

        {/* Excerpt */}
        <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: "#94A3B8" }}>
          {excerpt}
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-md"
                style={{ background: "rgba(255,255,255,0.05)", color: "#475569" }}
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Author + date */}
        <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={authorData.photo}
              alt={authorData.name}
              width={32}
              height={32}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-white truncate">{authorData.name}</p>
            <p className="text-xs" style={{ color: "#475569" }}>{authorData.role}</p>
          </div>
          <span className="text-xs flex-shrink-0" style={{ color: "#334155" }}>
            {dateFormatted}
          </span>
        </div>
      </article>
    </Link>
  );
}
