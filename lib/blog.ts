import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/blog");

export interface PostMeta {
  slug: string;
  title: string;
  author: string;
  category: string;
  date: string;
  status: string;
  campaign?: string;
  excerpt: string;
  tags: string[];
  readTime: number;
}

export interface Post extends PostMeta {
  contentHtml: string;
}

function ensureDir() {
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
  }
}

export function getAllPosts(): PostMeta[] {
  ensureDir();
  const fileNames = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".md"));

  const posts = fileNames
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || "",
        author: data.author || "joao",
        category: data.category || "geral",
        date: data.date || "",
        status: data.status || "draft",
        campaign: data.campaign || "",
        excerpt: data.excerpt || "",
        tags: Array.isArray(data.tags) ? data.tags : [],
        readTime: data.readTime || 5,
      } as PostMeta;
    })
    .filter((p) => p.status === "published")
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return posts;
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  ensureDir();
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processed = await remark().use(html, { sanitize: false }).process(content);
  const contentHtml = processed.toString();

  return {
    slug,
    title: data.title || "",
    author: data.author || "joao",
    category: data.category || "geral",
    date: data.date || "",
    status: data.status || "draft",
    campaign: data.campaign || "",
    excerpt: data.excerpt || "",
    tags: Array.isArray(data.tags) ? data.tags : [],
    readTime: data.readTime || 5,
    contentHtml,
  };
}

export function getRelatedPosts(currentSlug: string, tags: string[], limit = 3): PostMeta[] {
  const all = getAllPosts();
  return all
    .filter((p) => p.slug !== currentSlug && p.tags.some((t) => tags.includes(t)))
    .slice(0, limit);
}
