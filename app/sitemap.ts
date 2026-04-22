import type { MetadataRoute } from "next";

// ⚠️  UPDATE THIS when you switch to the real .ac.ke domain
// Current live domain: uga1.vercel.app
// Target domain: https://www.utumishigirlsacademy.ac.ke
const BASE_URL = "https://uga1.vercel.app";

// ─── UPDATE lastModified whenever you publish new content to a page ─────────
// Priority scale: 1.0 = most important, 0.0 = least. Google recommends ≤0.1 difference between siblings.
// changeFrequency tells crawlers HOW OFTEN to re-visit. Be honest — over-claiming "always" is penalised.

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ── TIER 1 — Core conversion pages (highest priority) ──────────────────
    {
      url: `${BASE_URL}`,
      lastModified: new Date("2026-04-22"),
      changeFrequency: "weekly",   // Homepage changes with announcements
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/admissions`,
      lastModified: new Date("2026-04-22"),
      changeFrequency: "weekly",   // Deadline dates change per term
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date("2026-04-22"),
      changeFrequency: "yearly",
      priority: 0.85,
    },

    // ── TIER 2 — Trust & authority pages ───────────────────────────────────
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date("2026-04-22"),
      changeFrequency: "monthly",
      priority: 0.80,
    },
    {
      url: `${BASE_URL}/academics`,
      lastModified: new Date("2026-04-22"),
      changeFrequency: "monthly",  // KCSE results updated per year
      priority: 0.80,
    },
    {
      url: `${BASE_URL}/facilities`,
      lastModified: new Date("2026-04-22"),
      changeFrequency: "monthly",
      priority: 0.75,
    },

    // ── TIER 3 — Engagement pages ───────────────────────────────────────────
    {
      url: `${BASE_URL}/student-life`,
      lastModified: new Date("2026-04-22"),
      changeFrequency: "monthly",
      priority: 0.70,
    },
    {
      url: `${BASE_URL}/gallery`,
      lastModified: new Date("2026-04-22"),
      changeFrequency: "weekly",   // New photos added regularly
      priority: 0.65,
    },
    {
      url: `${BASE_URL}/news`,
      lastModified: new Date("2026-04-22"),
      changeFrequency: "daily",    // News is the most frequently updated
      priority: 0.60,
    },
  ];
}
