import { ImageResponse } from "next/og";

export const alt = "PelajarinAja - Platform Belajar TKA dan SERKOM RPL";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "72px", background: "#123653", color: "#ffffff", fontFamily: "Arial, sans-serif" }}>
      <div style={{ fontSize: 26, letterSpacing: 4, textTransform: "uppercase", opacity: 0.8 }}>Platform belajar universal</div>
      <div style={{ fontSize: 78, fontWeight: 800, marginTop: 22 }}>PelajarinAja</div>
      <div style={{ fontSize: 38, lineHeight: 1.35, marginTop: 18, maxWidth: 980 }}>TKA Matematika, Bahasa Indonesia, Bahasa Inggris, dan Persiapan SERKOM RPL Laravel 12</div>
      <div style={{ display: "flex", gap: 18, marginTop: 42, fontSize: 24 }}>
        <span style={{ padding: "12px 18px", border: "2px solid rgba(255,255,255,.35)", borderRadius: 999 }}>60 materi</span>
        <span style={{ padding: "12px 18px", border: "2px solid rgba(255,255,255,.35)", borderRadius: 999 }}>25 soal unik</span>
        <span style={{ padding: "12px 18px", border: "2px solid rgba(255,255,255,.35)", borderRadius: 999 }}>Nilai 0–100</span>
      </div>
    </div>,
    size
  );
}
