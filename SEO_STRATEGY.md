# 🎯 Utumishi Girls Academy — Complete SEO Strategy
### Stack: Next.js 16 (App Router) · Deployment: Vercel · Domain: utumishigirlsacademy.ac.ke
### Last Updated: April 2026 | Maintained by: Nthei

---

> **AGENT BRIEF**: This document is the single source of truth for all SEO decisions on this project. Before making any change to metadata, file names, URL structure, content, or configuration that could affect search engine visibility, read this document in full. Every section contains explicit implementation instructions.

---

## 📋 Table of Contents

1. [SEO Goal & KPIs](#1-seo-goal--kpis)
2. [Keyword Strategy](#2-keyword-strategy)
3. [Technical SEO — Code-Level Implementation](#3-technical-seo--code-level-implementation)
4. [On-Page SEO — Per-Page Metadata Templates](#4-on-page-seo--per-page-metadata-templates)
5. [Structured Data (JSON-LD) Schema](#5-structured-data-json-ld-schema)
6. [Performance & Core Web Vitals](#6-performance--core-web-vitals)
7. [Local SEO — Kenya-Specific Signals](#7-local-seo--kenya-specific-signals)
8. [Off-Page SEO — Link Building & Authority](#8-off-page-seo--link-building--authority)
9. [Content Freshness Strategy](#9-content-freshness-strategy)
10. [Social & Open Graph Signals](#10-social--open-graph-signals)
11. [Search Console & Monitoring Setup](#11-search-console--monitoring-setup)
12. [Implementation Checklist](#12-implementation-checklist)
13. [Do NOT Do These Things](#13-do-not-do-these-things)

---

## 1. SEO Goal & KPIs

### Primary Goal
Rank **#1 on Google Kenya** for the search query `"Utumishi Girls Academy"` and page 1 within 6 months for all secondary keyword clusters. The site must appear in Google Maps, Google Knowledge Panel, and Bing Local results.

### Why This Matters
Every year, parents search for placed schools. A parent who cannot find UGA online will transfer their daughter elsewhere — this has already happened (the founding pitch of this project). SEO is not optional. It is the school's front door.

### Target KPIs (90-day horizon)
| Metric | Target |
|--------|--------|
| Google ranking: "Utumishi Girls Academy" | #1 |
| Google ranking: "girls boarding school Gilgil" | Top 3 |
| Google ranking: "secondary school Gilgil Kenya" | Top 5 |
| Google Search Console: Coverage errors | 0 |
| Core Web Vitals (LCP) | < 2.5s |
| Core Web Vitals (CLS) | < 0.1 |
| Core Web Vitals (INP) | < 200ms |
| Pages indexed by Google | 9/9 |
| Google Business Profile live | YES |

---

## 2. Keyword Strategy

### Primary Keywords (highest intent — target on homepage & admissions)
| Keyword | Estimated Monthly Searches | Intent |
|---------|---------------------------|--------|
| Utumishi Girls Academy | Branded — own this | Navigational |
| UGA Gilgil | Branded variant | Navigational |
| girls boarding school Gilgil | 50–200 | Commercial |
| girls secondary school Nakuru County | 100–500 | Commercial |
| Form 1 admission girls school Kenya | 200–1000 | Transactional |
| boarding school Gilgil Kenya | 50–200 | Commercial |

### Secondary Keywords (target on inner pages)
| Keyword | Target Page |
|---------|------------|
| KCSE girls school Kenya | /academics |
| best girls schools Rift Valley | /about |
| girls school fees Kenya 2025 | /admissions |
| how to apply secondary school Kenya | /admissions |
| student life girls boarding school Kenya | /student-life |
| secondary school facilities Kenya | /facilities |

### Long-Tail Keywords (blog/news articles — future phase)
- "what to pack for a Kenyan boarding school"
- "how KCPE placement works in Kenya"
- "Nakuru County top schools 2025"
- "Utumishi Girls Academy KCSE results"

### Keyword Rules for Agent
1. **Never** stuff keywords. Each keyword should appear naturally 1–3 times per page.
2. The **H1 on every page** must contain the primary keyword for that page.
3. The **first 100 words** of body text on every page must contain at least one primary keyword.
4. **Alt text** on all images must describe the image with contextual keywords (not just "image1.jpg").

---

## 3. Technical SEO — Code-Level Implementation

### 3.1 robots.ts (IMPLEMENTED)
**File:** `app/robots.ts`

The robots file is implemented as a TypeScript module (not a static .txt) so Next.js can handle it with full type safety. It targets:
- **Googlebot** — full access, disallow only `/api/`, `/_next/`, `/private/`
- **Bingbot** — same rules (Bing powers DuckDuckGo + Microsoft Edge)
- **Applebot** — same rules (powers Safari Spotlight + Siri search)
- **All others** — same open rules

> **AGENT NOTE**: Do NOT change the BASE_URL in robots.ts to anything other than the production domain. It must always point to `https://www.utumishigirlsacademy.ac.ke`. Never use `localhost` or a Vercel preview URL here.

**If you add protected admin routes in future**, add them to the `disallow` array in all four rules blocks:

```typescript
disallow: ["/api/", "/_next/", "/private/", "/admin/"],
```

---

### 3.2 sitemap.ts (IMPLEMENTED)
**File:** `app/sitemap.ts`

The sitemap is implemented as a TypeScript module, **not** a static XML file. This allows it to be regenerated on every build with fresh `lastModified` dates.

**Priority tiers defined:**
| Tier | Priority | Pages |
|------|----------|-------|
| 1 | 1.0 – 0.95 | Home, Admissions, Contact |
| 2 | 0.80 – 0.75 | About, Academics, Facilities |
| 3 | 0.70 – 0.60 | Student Life, Gallery, News |

**AGENT RULES for sitemap.ts:**
1. **Each time you create a new page** under `/app`, add a corresponding entry to `sitemap.ts`.
2. **Update `lastModified`** whenever you make meaningful content changes to a page (not just code refactors).
3. **Set `changeFrequency` honestly** — Google penalises sitemaps that claim pages change daily when they don't.
4. `news` should always be `changeFrequency: "daily"` since it's the most dynamic page.
5. Static pages like Contact and About should be `changeFrequency: "yearly"` or `"monthly"`.

---

### 3.3 Metadata (IMPLEMENTED)
**File:** `app/layout.tsx`

The root layout metadata object is the SEO foundation for the entire site. It includes:
- `metadataBase` — critical for Open Graph image URLs to resolve correctly on Vercel
- `title.template` — automatically formats page titles as "Page Name | Utumishi Girls Academy"
- Full Open Graph metadata — controls how the site appears when shared on WhatsApp, Facebook, LinkedIn
- Twitter Cards — controls Twitter/X share appearance
- `robots` directive — reinforces robots.ts
- Geo meta tags — local SEO signals for Kenya
- `verification` — Google Search Console + Bing Webmaster Tools
- JSON-LD School schema — enables Google Knowledge Panel

**CRITICAL — metadataBase**: This MUST be set to the real production domain before go-live. Without it, Open Graph images will use relative paths that won't work when shared on social media.

**AGENT RULE**: Every page that is built under `app/[page]/page.tsx` MUST export its own `metadata` object. Use the templates in Section 4 of this document. Never rely solely on the root layout metadata — each page needs unique title and description.

---

### 3.4 Canonical URLs
The `metadataBase` in `layout.tsx` handles canonical URLs automatically via the Next.js metadata pipeline. **Do not manually add `<link rel="canonical">` tags** — Next.js does this for you when `alternates.canonical` is set.

For inner pages, add this to each page's metadata:

```typescript
alternates: {
  canonical: "https://www.utumishigirlsacademy.ac.ke/about",
},
```

---

### 3.5 Web Manifest (IMPLEMENTED)
**File:** `public/site.webmanifest`

Enables Progressive Web App features and "Add to Home Screen" on Android and iOS. Google uses PWA signals as a ranking factor for mobile search.

> **AGENT ACTION NEEDED**: Create `/public/assets/icon-192.png` and `/public/assets/icon-512.png` using the school logo. These must be square, PNG format, with a transparent or blue (#0008C0) background.

---

### 3.6 Image OG Card
> **AGENT ACTION NEEDED**: Create a branded Open Graph image at `/public/assets/og-image.webp`.
- Size: **1200 x 630 pixels** (required by all social platforms)
- Content: UGA Blue background + logo + school name + tagline
- Format: WebP preferred (better compression), JPEG acceptable
- This image appears whenever someone shares any UGA page on WhatsApp, Facebook, LinkedIn, etc.

---

## 4. On-Page SEO — Per-Page Metadata Templates

### AGENT RULE: Copy-paste the appropriate template into each page's `page.tsx`.

### Home Page — `app/page.tsx`

```typescript
export const metadata: Metadata = {
  title: "Girls Boarding School in Gilgil, Nakuru County | Utumishi Girls Academy",
  description:
    "Utumishi Girls Academy is a leading girls boarding secondary school in Gilgil, Nakuru County, Kenya. Enrolling Form 1 students. Academic excellence, character formation, and holistic education.",
  alternates: { canonical: "https://www.utumishigirlsacademy.ac.ke" },
};
```

H1 must include: "Utumishi Girls Academy" + "Gilgil" or "Nakuru"

---

### About Page — `app/about/page.tsx`

```typescript
export const metadata: Metadata = {
  title: "About Us — Our Story, Mission & Leadership Team",
  description:
    "Learn about Utumishi Girls Academy's history, mission, vision, and leadership. A sister school of Utumishi Boys Academy, dedicated to academic excellence and character formation in Gilgil, Kenya.",
  alternates: { canonical: "https://www.utumishigirlsacademy.ac.ke/about" },
};
```

---

### Academics Page — `app/academics/page.tsx`

```typescript
export const metadata: Metadata = {
  title: "Academics — KCSE Results, Curriculum & Departments",
  description:
    "Discover Utumishi Girls Academy's academic excellence. Top KCSE results, strong Science and Languages departments, and a structured curriculum that prepares girls for university and beyond.",
  alternates: { canonical: "https://www.utumishigirlsacademy.ac.ke/academics" },
};
```

---

### Admissions Page — `app/admissions/page.tsx`

```typescript
export const metadata: Metadata = {
  title: "Admissions — Apply for Form 1 Intake 2025/2026",
  description:
    "Apply to Utumishi Girls Academy in Gilgil, Nakuru County. Learn about Form 1 admission requirements, fees structure, documents needed, and how to secure your daughter's place for the next intake.",
  alternates: { canonical: "https://www.utumishigirlsacademy.ac.ke/admissions" },
};
```

---

### Facilities Page — `app/facilities/page.tsx`

```typescript
export const metadata: Metadata = {
  title: "Facilities — Campus, Dorms, Labs & Sports Grounds",
  description:
    "Tour the Utumishi Girls Academy campus in Gilgil. Modern classrooms, boarding dormitories, science labs, computer lab, library, sports grounds, chapel, and dining facilities.",
  alternates: { canonical: "https://www.utumishigirlsacademy.ac.ke/facilities" },
};
```

---

### Student Life Page — `app/student-life/page.tsx`

```typescript
export const metadata: Metadata = {
  title: "Student Life — Clubs, Sports & Activities",
  description:
    "Life at Utumishi Girls Academy goes beyond academics. Discover 30+ clubs, sports teams, drama, choir, leadership programs, and a vibrant boarding school community in Gilgil, Kenya.",
  alternates: { canonical: "https://www.utumishigirlsacademy.ac.ke/student-life" },
};
```

---

### News Page — `app/news/page.tsx`

```typescript
export const metadata: Metadata = {
  title: "News & Events — Latest Announcements & Achievements",
  description:
    "Stay updated with the latest news, events, and achievements from Utumishi Girls Academy in Gilgil, Nakuru County. Academic results, sports wins, and school announcements.",
  alternates: { canonical: "https://www.utumishigirlsacademy.ac.ke/news" },
};
```

---

### Gallery Page — `app/gallery/page.tsx`

```typescript
export const metadata: Metadata = {
  title: "Photo Gallery — Campus Life, Events & Sports",
  description:
    "Browse the Utumishi Girls Academy photo gallery. See campus life, classroom learning, sports day, prize giving, clubs, and student activities at our school in Gilgil, Kenya.",
  alternates: { canonical: "https://www.utumishigirlsacademy.ac.ke/gallery" },
};
```

---

### Contact Page — `app/contact/page.tsx`

```typescript
export const metadata: Metadata = {
  title: "Contact Us — Reach Utumishi Girls Academy in Gilgil",
  description:
    "Contact Utumishi Girls Academy in Gilgil, Nakuru County. Call, email, or fill our inquiry form. Get directions, office hours, and maps for the school.",
  alternates: { canonical: "https://www.utumishigirlsacademy.ac.ke/contact" },
};
```

---

## 5. Structured Data (JSON-LD) Schema

JSON-LD is how you speak directly to Google's knowledge graph. The School schema is already implemented in `layout.tsx`. Here are additional schemas to add per page:

### Breadcrumb Schema (add to every inner page)

```typescript
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.utumishigirlsacademy.ac.ke" },
        { "@type": "ListItem", position: 2, name: "About", item: "https://www.utumishigirlsacademy.ac.ke/about" },
      ],
    }),
  }}
/>
```

### FAQPage Schema (add to /admissions — boosts appearance in Google FAQ rich results)

```typescript
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Utumishi Girls Academy a boarding school?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Utumishi Girls Academy is a full boarding girls secondary school located in Gilgil, Nakuru County, Kenya.",
          },
        },
        {
          "@type": "Question",
          name: "How do I apply to Utumishi Girls Academy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Fill the online inquiry form on our Admissions page, submit the required documents to the school office, attend an admission interview, and complete enrollment by paying fees.",
          },
        },
      ],
    }),
  }}
/>
```

### Event Schema (add to news/events items when events are listed)

```typescript
{
  "@context": "https://schema.org",
  "@type": "Event",
  name: "UGA Open Day 2025",
  startDate: "2025-09-15",
  location: {
    "@type": "Place",
    name: "Utumishi Girls Academy",
    address: "Gilgil, Nakuru County, Kenya",
  },
  organizer: { "@type": "Organization", name: "Utumishi Girls Academy" },
}
```

---

## 6. Performance & Core Web Vitals

Google's ranking algorithm uses **Core Web Vitals** as a direct ranking factor. A beautiful, slow website ranks lower than a simple, fast one.

### LCP (Largest Contentful Paint) — Target: < 2.5 seconds
The hero image/section is almost always the LCP element. To optimise:
1. **Use `next/image` for ALL images** — never use plain `<img>` tags. Next.js will auto-compress, serve WebP, and lazy-load.
2. **Add `priority` prop to the hero image**: `<Image src="..." priority />` — this tells Next.js to preload it.
3. **Avoid large unoptimised images** in the hero. Maximum source size: 200KB for WebP.

```tsx
// CORRECT — hero image
<Image
  src="/assets/hero-campus.webp"
  alt="Utumishi Girls Academy campus in Gilgil"
  width={1920}
  height={1080}
  priority
  quality={85}
/>

// WRONG — never do this
<img src="/assets/hero-campus.webp" />
```

### CLS (Cumulative Layout Shift) — Target: < 0.1
1. **Always specify `width` and `height`** on every `<Image>` component.
2. **Use `next/font`** — loads fonts without layout shift. Never use CSS `@import` for Google Fonts.

### INP (Interaction to Next Paint) — Target: < 200ms
1. Mark interactive components with `'use client'` but keep Client Components small.
2. Defer non-critical JavaScript with `next/script` strategy `"lazyOnload"`.

### Image Optimisation Rules
| Rule | Requirement |
|------|-------------|
| Format | Always WebP. Never JPEG/PNG for web images |
| Hero images | Max 200KB |
| Gallery images | Max 80KB per image |
| OG image | Exactly 1200x630px, WebP or JPEG |
| Logo | SVG or WebP with transparent background |
| Alt text | Descriptive, 5–15 words, includes keywords naturally |

---

## 7. Local SEO — Kenya-Specific Signals

### 7.1 Google Business Profile (HIGHEST PRIORITY — do this before anything else)
1. Go to [business.google.com](https://business.google.com)
2. Create a profile for "Utumishi Girls Academy"
3. Set category: **Secondary School**
4. Add address: Gilgil, Nakuru County, Kenya (with exact coordinates)
5. Add phone number, website URL, and school hours
6. Upload at least 10 high-quality photos (exterior, classrooms, dorms, students)
7. Write a 750-character description using primary keywords
8. This profile feeds Google Maps + Google Knowledge Panel

### 7.2 Directory Listings (create profiles on all of these)
| Platform | Priority | Notes |
|----------|----------|-------|
| Google Business Profile | Critical | Powers Google Maps |
| Bing Places for Business | Critical | bingplaces.com |
| Kenya School Directory | High | knec.ac.ke |
| SchoolsNet Kenya | High | schoolsnetkeny.com |

### 7.3 Domain Extension (.ac.ke)
If possible, register `utumishigirlsacademy.ac.ke`. The `.ac.ke` TLD is reserved for accredited Kenyan educational institutions and carries extraordinary trust signals with Google Kenya. A `.ac.ke` domain will outrank any `.com` equivalent in local Kenyan search.

**Contact KENIC (Kenya Network Information Centre)** to register: kenic.or.ke

### 7.4 NAP Consistency (Name, Address, Phone)
Every online mention of the school must have EXACTLY the same:
- Name: "Utumishi Girls Academy" (no abbreviations)
- Address: "Gilgil, Nakuru County, Kenya"
- Phone: same format everywhere (+254-XXX-XXXXXX)

Even minor inconsistencies cause Google's local algorithm to distrust the data.

---

## 8. Off-Page SEO — Link Building & Authority

### Priority Link Sources for UGA
| Source | Strategy |
|--------|----------|
| Utumishi Boys Academy website | Add reciprocal "sister school" link |
| Kenya Ministry of Education | Request official listing at education.go.ke |
| TSC/TVET directories | Register as accredited school |
| Nation, Standard, People Daily | Pitch KCSE results for news coverage |
| Nakuru County Government site | Request listing in education directory |

### Content That Earns Links Naturally
1. **KCSE results page** with raw data — local news sites will cite it
2. **Admissions guide** — parents share it in Facebook groups
3. **Staff profile pages** — teachers link from their LinkedIn profiles

---

## 9. Content Freshness Strategy

Google rewards websites that are **regularly updated**. A static school website that never changes will gradually be de-ranked.

### Minimum Update Schedule
| Interval | Action |
|----------|--------|
| Weekly | Add one news item or announcement |
| Monthly | Update admissions page with current deadline dates |
| Per Term | Publish term events calendar |
| Per Year | Update KCSE results on academics page. Update `lastModified` in `sitemap.ts` |

### Content Ideas for /news
1. KCSE results announcement (annual — highest traffic event of the year)
2. Sports day results and winners
3. Prize giving day recap with photos
4. Clubs and societies achievements
5. Annual Open Day notice with registration link
6. Staff recognition posts
7. Back-to-school packing list
8. School fees payment deadline reminders

> **AGENT RULE**: Every time you publish a new news post or make a content change, update the corresponding `lastModified` date in `app/sitemap.ts`.

---

## 10. Social & Open Graph Signals

### Open Graph (implemented in layout.tsx)
The OG image at `/public/assets/og-image.webp` controls how the site looks when shared on WhatsApp, Facebook, LinkedIn, and Telegram.

**Checklist:**
- [ ] Create og-image.webp at exactly 1200x630px
- [ ] Test OG preview at [opengraph.xyz](https://www.opengraph.xyz) before go-live
- [ ] Test on Facebook using the [Sharing Debugger tool](https://developers.facebook.com/tools/debug/)

### Recommended Social Platforms for UGA
| Platform | Priority | Rationale |
|----------|----------|-----------|
| WhatsApp Business | Critical | Primary communication channel for Kenyan parents |
| Facebook Page | Critical | Highest reach for Kenyan school audience |
| Instagram | High | Photo gallery content translates perfectly |
| Twitter/X | Medium | Lower Kenyan parent usage |
| YouTube | Future | School tour video — powerful SEO signal |

---

## 11. Search Console & Monitoring Setup

### Google Search Console
The verification code is already in `layout.tsx`. After deployment:
1. Log in to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property: `https://www.utumishigirlsacademy.ac.ke`
3. Submit sitemap: `https://www.utumishigirlsacademy.ac.ke/sitemap.xml`
4. Monitor Coverage report — all 9 pages must appear as "Valid"
5. Monitor Core Web Vitals — LCP, CLS, INP must be in "Good" range

### Bing Webmaster Tools
The Bing verification code is already in `layout.tsx`. After deployment:
1. Log in to [bing.com/webmasters](https://www.bing.com/webmasters)
2. Add site and verify ownership
3. Submit sitemap: `https://www.utumishigirlsacademy.ac.ke/sitemap.xml`

### Monthly SEO Health Check
- [ ] Google Search Console: 0 Coverage errors
- [ ] All 9 pages indexed
- [ ] Core Web Vitals: all in "Good" range
- [ ] No manual actions or penalties from Google
- [ ] Sitemap submitted and processed
- [ ] Google Business Profile updated with new photos

---

## 12. Implementation Checklist

### Phase 1 — Technical Foundation (COMPLETED)
- [x] `app/robots.ts` — multi-agent, production-grade robots file
- [x] `app/sitemap.ts` — all 9 pages with correct priority tiers
- [x] `app/layout.tsx` — full metadata, OG, Twitter Cards, JSON-LD, geo tags
- [x] `public/site.webmanifest` — PWA manifest

### Phase 2 — Assets (ACTION NEEDED)
- [ ] Create `public/assets/og-image.webp` (1200x630px branded image)
- [ ] Create `public/assets/apple-touch-icon.png` (180x180px)
- [ ] Create `public/assets/icon-192.png` (192x192px)
- [ ] Create `public/assets/icon-512.png` (512x512px)
- [ ] Confirm `public/favicon.ico` exists

### Phase 3 — Per-Page Metadata
- [ ] `app/page.tsx` — export metadata (see Section 4 template)
- [ ] `app/about/page.tsx` — export metadata
- [ ] `app/academics/page.tsx` — export metadata
- [ ] `app/admissions/page.tsx` — export metadata
- [ ] `app/facilities/page.tsx` — export metadata
- [ ] `app/student-life/page.tsx` — export metadata
- [ ] `app/news/page.tsx` — export metadata
- [ ] `app/gallery/page.tsx` — export metadata
- [ ] `app/contact/page.tsx` — export metadata

### Phase 4 — Structured Data
- [ ] BreadcrumbList schema on all inner pages
- [ ] FAQPage schema on /admissions
- [ ] Event schema for news/events items when school events exist

### Phase 5 — Off-Page (School / Client Actions)
- [ ] Google Business Profile created and fully populated
- [ ] Bing Places listing created
- [ ] Apply for `.ac.ke` domain via KENIC
- [ ] Submit to Kenya school directories
- [ ] Request backlink from Utumishi Boys Academy
- [ ] Submit to Ministry of Education listings

### Phase 6 — Real Content from School
- [ ] Real KCSE data on /academics (from school)
- [ ] Real fees information on /admissions (from school)
- [ ] Real staff photos and bios on /about (from school)
- [ ] News section with at least 3 initial articles
- [ ] Gallery with at least 20 real photos from school

---

## 13. Do NOT Do These Things

These are common mistakes that will **hurt** the SEO of this site. If anyone suggests any of these, refuse.

| Do NOT | Do Instead |
|--------|-----------|
| Use static `robots.txt` with `acme.com` placeholder | Use `robots.ts` with real domain |
| Use `<img>` tags for any image | Always use `next/image` |
| Load Google Fonts via `@import` in CSS | Use `next/font/google` |
| Use the same title and description on multiple pages | Each page must have a unique title and description |
| Deploy without updating `BASE_URL` in robots.ts and sitemap.ts | Update BASE_URL before any production deployment |
| Use keyword-stuffed, unnatural meta descriptions | Write descriptions like a human, for humans |
| Skip the `alt` attribute on any image | Every image needs descriptive alt text |
| Add a `noindex` directive anywhere except intentional private pages | Never add noindex to public pages |
| Change the URL structure after launch (e.g., /about to /about-us) | Changing URLs kills existing rankings. Add 301 redirects if unavoidable |
| Use `localhost` or preview URLs in any SEO-related config | Use the production domain everywhere |
| Set `changeFrequency: "always"` on static pages | Only News can be "daily". Lying to crawlers is penalised |
| Skip submitting the sitemap after deployment | Always submit sitemap in Google Search Console and Bing Webmaster Tools |

---

*Built with care for Utumishi Girls Academy, Gilgil — by Nthei.*
