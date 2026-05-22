import Image from "next/image";
import { authors } from "@/lib/authors";

interface AuthorBadgeProps {
  authorKey: string;
}

export function AuthorBadge({ authorKey }: AuthorBadgeProps) {
  const author = authors[authorKey] || authors.joao;

  return (
    <div
      className="flex items-center gap-4 p-5 rounded-2xl"
      style={{
        background: "rgba(139,92,246,0.06)",
        border: "1px solid rgba(139,92,246,0.15)",
      }}
    >
      <div
        className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0"
        style={{ border: "2px solid rgba(139,92,246,0.3)" }}
      >
        <Image
          src={author.photo}
          alt={author.name}
          width={64}
          height={64}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <p className="text-sm font-bold text-white">{author.name}</p>
        <p className="text-xs mb-2" style={{ color: "#8B5CF6" }}>{author.role}</p>
        <p className="text-xs leading-relaxed" style={{ color: "#64748B" }}>{author.bio}</p>
      </div>
    </div>
  );
}
