import { siteName } from "../lib/site.js";

export default function manifest() {
  return {
    name: `${siteName} - Belajar TKA & SERKOM RPL`,
    short_name: siteName,
    description: "Platform belajar TKA Matematika, Bahasa Indonesia, Bahasa Inggris, dan persiapan SERKOM RPL Laravel 12.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "any",
    background_color: "#f3f5f7",
    theme_color: "#123653",
    lang: "id-ID",
    categories: ["education", "productivity"],
    icons: [
      { src: "/logo-icon.png", sizes: "512x512", type: "image/png", purpose: "any maskable" }
    ],
    shortcuts: [
      { name: "Matematika", short_name: "Matematika", url: "/mapel/matematika" },
      { name: "Bahasa Indonesia", short_name: "B. Indonesia", url: "/mapel/bahasa-indonesia" },
      { name: "Bahasa Inggris", short_name: "B. Inggris", url: "/mapel/bahasa-inggris" },
      { name: "SERKOM RPL", short_name: "SERKOM", url: "/mapel/serkom" }
    ]
  };
}
