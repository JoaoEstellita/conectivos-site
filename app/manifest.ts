import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Conectivos — IA para empresas",
    short_name: "Conectivos",
    description: "Agência de IA conversacional B2B para empresas brasileiras",
    start_url: "/",
    display: "standalone",
    background_color: "#070711",
    theme_color: "#8B5CF6",
    icons: [
      { src: "/logo.png", sizes: "192x192", type: "image/png" },
      { src: "/logo.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
