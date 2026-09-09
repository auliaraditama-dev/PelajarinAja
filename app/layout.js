import "./globals.css";
import { organizationJsonLd, safeJsonLd, websiteJsonLd } from "../lib/seo.js";
import { absoluteUrl, siteDescription, siteLanguage, siteName, siteUrl } from "../lib/site.js";

const googleVerification = process.env.GOOGLE_SITE_VERIFICATION?.trim();

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Belajar TKA & SERKOM RPL`,
    template: `%s | ${siteName}`
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "education",
  keywords: [
    "PelajarinAja",
    "TKA",
    "belajar TKA",
    "soal TKA",
    "TKA Matematika",
    "TKA Bahasa Indonesia",
    "TKA Bahasa Inggris",
    "SERKOM RPL",
    "Laravel 12",
    "Pemrogram Junior",
    "latihan soal",
    "pembahasan soal"
  ],
  alternates: {
    canonical: "/",
    languages: {
      "id-ID": "/"
    }
  },
  openGraph: {
    title: `${siteName} | Belajar TKA & SERKOM RPL`,
    description: siteDescription,
    url: siteUrl,
    siteName,
    locale: "id_ID",
    type: "website",
    images: [{ url: absoluteUrl("/opengraph-image"), width: 1200, height: 630, alt: `${siteName} - Platform Belajar TKA dan SERKOM RPL` }]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Belajar TKA & SERKOM RPL`,
    description: siteDescription,
    images: [absoluteUrl("/twitter-image")]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", type: "image/png" }]
  },
  manifest: "/manifest.webmanifest",
  verification: googleVerification ? { google: googleVerification } : undefined,
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-title": siteName,
    "format-detection": "telephone=no"
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#123653" },
    { media: "(prefers-color-scheme: dark)", color: "#0e141a" }
  ],
  colorScheme: "light dark"
};

export default function RootLayout({ children }) {
  return (
    <html lang={siteLanguage} suppressHydrationWarning>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(websiteJsonLd()) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(organizationJsonLd()) }} />
        {children}
      </body>
    </html>
  );
}
