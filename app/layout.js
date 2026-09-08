import "./globals.css";

export const metadata = {
  title: "PelajarinAja",
  description: "Platform belajar universal untuk TKA Matematika, Bahasa Indonesia, Bahasa Inggris, dan persiapan SERKOM RPL Laravel 12.",
  applicationName: "PelajarinAja",
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }) {
  return <html lang="id" suppressHydrationWarning><body>{children}</body></html>;
}
