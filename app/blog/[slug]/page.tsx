import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import { AuthorBadge } from "@/components/blog/AuthorBadge";
import { BlogCTA } from "@/components/blog/BlogCTA";
import { BlogCard } from "@/components/blog/BlogCard";
import { Footer } from "@/components/sections/Footer";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} — Blog Conectivos`,
    description: post.excerpt,
    authors: [{ name: post.author }],
    alternates: { canonical: `https://conectivos.net/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://conectivos.net/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
    },
  };
}

const categoryColors: Record<string, string> = {
  tecnologia: "#8B5CF6",
  marketing: "#3B82F6",
  cases: "#10B981",
  vendas: "#F59E0B",
  mercado: "#EC4899",
  geral: "#64748B",
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug, post.tags);
  const color = categoryColors[post.category] || "#64748B";
  const dateFormatted = new Date(post.date).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  // JSON-LD Article schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    url: `https://conectivos.net/blog/${post.slug}`,
    publisher: {
      "@type": "Organization",
      name: "Conectivos",
      url: "https://conectivos.net",
    },
    keywords: post.tags.join(", "),
  };

  // Inject BlogCTA after 3rd paragraph
  const injectCTA = (htmlContent: string) => {
    const parts = htmlContent.split("</p>");
    if (parts.length > 3) {
      const before = parts.slice(0, 3).join("</p>") + "</p>";
      const after = parts.slice(3).join("</p>");
      return { before, after };
    }
    return { before: htmlContent, after: "" };
  };

  const { before, after } = injectCTA(post.contentHtml);

  return (
    <main style={{ background: "#070711", minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Back */}
      <div className="max-w-3xl mx-auto px-4 md:px-6 pt-10 pb-4">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm transition-colors hover:text-white"
          style={{ color: "#475569" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Blog
        </Link>
      </div>

      {/* Header */}
      <article className="max-w-3xl mx-auto px-4 md:px-6 pb-24">
        {/* Meta */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <span
              className="text-xs font-semibold px-2.5 py-1 rounded-full capitalize"
              style={{
                background: `${color}15`,
                color: color,
                border: `1px solid ${color}25`,
              }}
            >
              {post.category}
            </span>
            <span className="text-xs" style={{ color: "#475569" }}>
              {post.readTime} min de leitura
            </span>
            <span className="text-xs" style={{ color: "#334155" }}>
              {dateFormatted}
            </span>
          </div>

          <h1
            className="text-3xl md:text-4xl font-black text-white leading-tight mb-5"
            style={{ lineHeight: 1.2 }}
          >
            {post.title}
          </h1>

          <p className="text-lg leading-relaxed" style={{ color: "#94A3B8" }}>
            {post.excerpt}
          </p>

          <div className="mt-6 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="flex items-center justify-between flex-wrap gap-4">
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-md"
                    style={{ background: "rgba(255,255,255,0.05)", color: "#475569" }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Share */}
              <div className="flex items-center gap-2">
                <span className="text-xs" style={{ color: "#334155" }}>Compartilhar:</span>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(post.title + " — " + "https://conectivos.net/blog/" + post.slug)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-lg flex items-center justify-center transition-opacity hover:opacity-80"
                  style={{ background: "rgba(16,185,129,0.15)", color: "#10B981" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent("https://conectivos.net/blog/" + post.slug)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-lg flex items-center justify-center transition-opacity hover:opacity-80"
                  style={{ background: "rgba(59,130,246,0.15)", color: "#3B82F6" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Separator */}
        <div className="mb-8" style={{ height: "1px", background: "rgba(255,255,255,0.06)" }} />

        {/* Content — before CTA */}
        <div
          className="prose prose-invert prose-sm md:prose-base max-w-none"
          style={{
            "--tw-prose-body": "#94A3B8",
            "--tw-prose-headings": "#FFFFFF",
            "--tw-prose-lead": "#94A3B8",
            "--tw-prose-links": "#A78BFA",
            "--tw-prose-bold": "#FFFFFF",
            "--tw-prose-counters": "#64748B",
            "--tw-prose-bullets": "#334155",
            "--tw-prose-hr": "rgba(255,255,255,0.06)",
            "--tw-prose-quotes": "#94A3B8",
            "--tw-prose-quote-borders": "#8B5CF6",
            "--tw-prose-captions": "#64748B",
            "--tw-prose-code": "#C4B5FD",
            "--tw-prose-pre-code": "#CBD5E1",
            "--tw-prose-pre-bg": "rgba(255,255,255,0.03)",
            "--tw-prose-th-borders": "rgba(255,255,255,0.1)",
            "--tw-prose-td-borders": "rgba(255,255,255,0.06)",
          } as React.CSSProperties}
          dangerouslySetInnerHTML={{ __html: before }}
        />

        {/* Inline CTA */}
        <BlogCTA />

        {/* Content — after CTA */}
        {after && (
          <div
            className="prose prose-invert prose-sm md:prose-base max-w-none"
            style={{
              "--tw-prose-body": "#94A3B8",
              "--tw-prose-headings": "#FFFFFF",
              "--tw-prose-links": "#A78BFA",
              "--tw-prose-bold": "#FFFFFF",
              "--tw-prose-bullets": "#334155",
              "--tw-prose-hr": "rgba(255,255,255,0.06)",
              "--tw-prose-quote-borders": "#8B5CF6",
              "--tw-prose-code": "#C4B5FD",
              "--tw-prose-pre-bg": "rgba(255,255,255,0.03)",
            } as React.CSSProperties}
            dangerouslySetInnerHTML={{ __html: after }}
          />
        )}

        {/* Author */}
        <div className="mt-12 mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "#334155" }}>
            Sobre o autor
          </p>
          <AuthorBadge authorKey={post.author} />
        </div>

        {/* Final CTA */}
        <BlogCTA />

        {/* Related posts */}
        {related.length > 0 && (
          <div className="mt-16">
            <p className="text-xs font-semibold uppercase tracking-wider mb-6" style={{ color: "#334155" }}>
              Artigos relacionados
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {related.map((p) => (
                <BlogCard
                  key={p.slug}
                  slug={p.slug}
                  title={p.title}
                  excerpt={p.excerpt}
                  author={p.author}
                  category={p.category}
                  date={p.date}
                  readTime={p.readTime}
                  tags={p.tags}
                />
              ))}
            </div>
          </div>
        )}
      </article>

      <Footer />
    </main>
  );
}
