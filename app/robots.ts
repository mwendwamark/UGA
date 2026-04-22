import type { MetadataRoute } from "next";

// ⚠️  UPDATE THIS when you switch to the real .ac.ke domain
// Current live domain: uga1.vercel.app
// Target domain: https://www.utumishigirlsacademy.ac.ke
const BASE_URL = "https://uga1.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Googlebot gets full access — crawl everything important
        userAgent: "Googlebot",
        allow: ["/"],
        disallow: [
          "/api/",        // Internal API routes — not for indexing
          "/_next/",      // Next.js internal assets
          "/private/",    // Any private admin areas (future-proofing)
        ],
      },
      {
        // Bingbot (powers Bing + DuckDuckGo + Microsoft Edge) — full access
        userAgent: "Bingbot",
        allow: ["/"],
        disallow: ["/api/", "/_next/", "/private/"],
      },
      {
        // Applebot — used by Safari's Spotlight search + Siri suggestions
        userAgent: "Applebot",
        allow: ["/"],
        disallow: ["/api/", "/_next/", "/private/"],
      },
      {
        // All other bots (Yandex, Baidu, Yahoo Slurp, etc.)
        userAgent: "*",
        allow: ["/"],
        disallow: ["/api/", "/_next/", "/private/"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
