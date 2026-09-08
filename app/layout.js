import "./globals.css";

export const metadata = {
  title: "PelajarinAja",
  description: "Platform belajar universal Full-Features untuk TKA Matematika, Bahasa Indonesia, Bahasa Inggris, dan persiapan SERKOM RPL Laravel 12 dengan 25 soal dinamis per materi.",
  applicationName: "PelajarinAja",
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }) {
  return <html lang="id" suppressHydrationWarning><body>{children}</body></html>;
}
