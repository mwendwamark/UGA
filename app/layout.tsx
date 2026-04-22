import type { Metadata } from "next";
import "./globals.css";

// ⚠️  UPDATE THIS when the .ac.ke domain is registered and attached to Vercel
// Current live domain: https://uga1.vercel.app
// Target domain: https://www.utumishigirlsacademy.ac.ke
const BASE_URL = "https://uga1.vercel.app";

export const metadata: Metadata = {
  // ── Basic ──────────────────────────────────────────────────────────────────
  metadataBase: new URL(BASE_URL),
  title: {
    // Template applies to child pages: e.g. "About | Utumishi Girls Academy"
    template: "%s | Utumishi Girls Academy",
    default: "Utumishi Girls Academy | Girls Boarding School in Gilgil, Kenya",
  },
  description:
    "Utumishi Girls Academy (UGA) is a premier girls boarding secondary school in Gilgil, Nakuru County, Kenya. Offering KCSE, academic excellence, character formation, and holistic education for Form 1–4 students.",

  // ── Keywords (still relevant for Bing, Yandex & meta-aware crawlers) ───────
  keywords: [
    "Utumishi Girls Academy",
    "UGA Gilgil",
    "girls boarding school Kenya",
    "secondary school Gilgil",
    "Nakuru County school",
    "KCSE girls school Kenya",
    "Form 1 admission Kenya",
    "best girls schools Nakuru",
    "Utumishi Girls",
    "boarding school Kenya 2025",
    "Utumishi Girls Academy fees",
    "girls school Rift Valley",
  ],

  // ── Authors & publisher ─────────────────────────────────────────────────────
  authors: [{ name: "Utumishi Girls Academy", url: BASE_URL }],
  creator: "Utumishi Girls Academy",
  publisher: "Utumishi Girls Academy",

  // ── Canonical ──────────────────────────────────────────────────────────────
  alternates: {
    canonical: BASE_URL,
  },

  // ── Open Graph (Facebook, WhatsApp, LinkedIn, Telegram previews) ────────────
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: BASE_URL,
    siteName: "Utumishi Girls Academy",
    title: "Utumishi Girls Academy | Girls Boarding School in Gilgil, Kenya",
    description:
      "A centre of academic excellence and character formation for girls in the heart of the Rift Valley. Enrolling Form 1 students in Gilgil, Nakuru County.",
    images: [
      {
        url: "/assets/og-image.webp",   // Create a 1200×630px branded image in /public/assets/
        width: 1200,
        height: 630,
        alt: "Utumishi Girls Academy campus in Gilgil, Nakuru County, Kenya",
      },
    ],
  },

  // ── Twitter / X Cards ──────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Utumishi Girls Academy | Girls Boarding School in Gilgil, Kenya",
    description:
      "A centre of academic excellence and character formation for girls in Gilgil, Nakuru County, Kenya.",
    images: ["/assets/og-image.webp"],
    // creator: "@UGAGilgil",  // Uncomment and update when/if school creates a Twitter account
  },

  // ── Robots directive (belt-and-suspenders with robots.ts) ──────────────────
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Icons ──────────────────────────────────────────────────────────────────
  icons: {
    icon: [
      { url: "/assets/logo.webp", type: "image/webp" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/assets/apple-touch-icon.png", // Add a 180×180px icon to /public/assets/
    shortcut: "/favicon.ico",
  },

  // ── Search console verification ────────────────────────────────────────────
  verification: {
    google: "hvtvgLUAEEBi-hqFdayn1BtW7uQOORA74u-rJ_xKVu4",
    other: {
      // Bing / Microsoft webmaster tools verification
      "msvalidate.01": "BBFA8943687CEBB8053C9FE936A80263",
    },
  },

  // ── App manifest (enables "Add to Home Screen" on mobile) ──────────────────
  manifest: "/site.webmanifest",           // Create this file (see SEO_STRATEGY.md)

  // ── Geographic targeting (helps local SEO for Kenya) ───────────────────────
  other: {
    "geo.region": "KE-12",                 // ISO 3166-2 code for Nakuru County
    "geo.placename": "Gilgil, Nakuru County, Kenya",
    "geo.position": "-0.4948;36.3106",     // Gilgil lat;long (approximate)
    ICBM: "-0.4948, 36.3106",
    "DC.title": "Utumishi Girls Academy",
    "DC.description":
      "Girls boarding secondary school in Gilgil, Nakuru County, Kenya",
    "DC.language": "en",
    "DC.coverage": "Kenya",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ── JSON-LD Structured Data — School schema (helps Google Knowledge Panel) ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "School",
              name: "Utumishi Girls Academy",
              alternateName: "UGA",
              url: BASE_URL,
              logo: `${BASE_URL}/assets/logo.webp`,
              image: `${BASE_URL}/assets/og-image.webp`,
              description:
                "Utumishi Girls Academy is a premier girls boarding secondary school in Gilgil, Nakuru County, Kenya, offering KCSE education with a focus on academic excellence and character formation.",
              foundingDate: "2010",          // ← UPDATE with real founding year
              address: {
                "@type": "PostalAddress",
                streetAddress: "Gilgil",
                addressLocality: "Gilgil",
                addressRegion: "Nakuru County",
                addressCountry: "KE",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -0.4948,
                longitude: 36.3106,
              },
              telephone: "+254-XXX-XXXXXX",  // ← UPDATE with real phone number
              email: "info@utumishigirlsacademy.ac.ke", // ← UPDATE with real email
              sameAs: [
                // Add when social pages exist:
                // "https://www.facebook.com/UtumishiGirlsAcademy",
                // "https://twitter.com/UGAGilgil",
              ],
              alumni: [],
              containedInPlace: {
                "@type": "City",
                name: "Gilgil",
                containedInPlace: {
                  "@type": "State",
                  name: "Nakuru County",
                  containedInPlace: {
                    "@type": "Country",
                    name: "Kenya",
                  },
                },
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
