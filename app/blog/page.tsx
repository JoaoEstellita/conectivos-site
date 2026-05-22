import { getAllPosts } from "@/lib/blog";
import { BlogCard } from "@/components/blog/BlogCard";
import { Footer } from "@/components/sections/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Conectivos",
  description:
    "Artigos sobre IA conversacional, automação B2B, WhatsApp Business e crescimento para empresas brasileiras.",
  alternates: { canonical: "https://conectivos.net/blog" },
  openGraph: {
    title: "Blog Conectivos — IA para empresas brasileiras",
    description: "Artigos práticos sobre automação, IA e crescimento B2B.",
    url: "https://conectivos.net/blog",
  },
};

const categories = ["todos", "tecnologia", "marketing", "cases", "vendas", "mercado"];

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main style={{ background: "#070711", minHeight: "100vh" }}>
      {/* Header */}
      <section className="section-padding pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <div
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-sm font-medium"
              style={{
                background: "rgba(139,92,246,0.1)",
                border: "1px solid rgba(139,92,246,0.25)",
                color: "#C4B5FD",
              }}
            >
              Blog Conectivos
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-4">
              IA que{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #C4B5FD, #93C5FD)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                transforma negócios
              </span>
            </h1>
            <p className="text-lg" style={{ color: "#64748B" }}>
              Artigos práticos sobre automação, IA conversacional e crescimento para empresas brasileiras.
            </p>
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {posts.length === 0 ? (
            <div className="text-center py-24" style={{ color: "#334155" }}>
              <p className="text-lg">Em breve — primeiros artigos chegando.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <BlogCard
                  key={post.slug}
                  slug={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  author={post.author}
                  category={post.category}
                  date={post.date}
                  readTime={post.readTime}
                  tags={post.tags}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
