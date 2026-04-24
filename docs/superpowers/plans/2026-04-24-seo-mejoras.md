# SEO Improvements Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Improve search engine and AI visibility for Ixtal Web Design by fixing domain references, adding structured data, and creating crawler config files.

**Architecture:** All changes are in `index.html` (metadata + JSON-LD), two component files (domain string fix + copy tweak), and two new static files in `/public`. No new components or routing needed.

**Tech Stack:** React + TypeScript + Vite + Tailwind CSS, deployed on Vercel.

---

## File Map

| Action | File | What changes |
|--------|------|--------------|
| Modify | `index.html` | Fix domain refs, add canonical, og:locale, og:site_name, updated meta description, JSON-LD schema |
| Modify | `src/components/Contact.tsx` | Fix `EMAIL` constant domain |
| Modify | `src/components/Hero.tsx` | Add "Barcelona" to subtitle paragraph |
| Create | `public/sitemap.xml` | Single-URL sitemap pointing to canonical domain |
| Create | `public/robots.txt` | Allow all crawlers, reference sitemap |

---

## Task 1: Fix domain references in existing files

**Files:**
- Modify: `index.html`
- Modify: `src/components/Contact.tsx`

- [ ] **Step 1: Update `index.html` domain occurrences**

Find and replace every `ixtaldesing.com` → `ixtaldesign.com` in `index.html`. There are three occurrences: `og:url`, `og:image`, and `twitter:image`.

Result after change (the three affected lines):
```html
<meta property="og:url" content="https://ixtaldesign.com" />
<meta property="og:image" content="https://ixtaldesign.com/og-image.png" />
<meta name="twitter:image" content="https://ixtaldesign.com/og-image.png" />
```

- [ ] **Step 2: Update EMAIL constant in Contact.tsx**

In `src/components/Contact.tsx`, line 3:
```tsx
const EMAIL = "info@ixtaldesign.com";
```

- [ ] **Step 3: Commit**

```bash
git add index.html src/components/Contact.tsx
git commit -m "fix: update domain references to ixtaldesign.com"
```

---

## Task 2: Add canonical URL and OG enhancements to index.html

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Add canonical and OG tags**

In `index.html`, inside `<head>`, directly after the existing `<!-- SEO -->` block (after the closing `</meta>` of the description tag), add:

```html
    <link rel="canonical" href="https://ixtaldesign.com" />
    <meta property="og:locale" content="es_ES" />
    <meta property="og:site_name" content="Ixtal Web Design" />
```

- [ ] **Step 2: Update meta description**

Replace the current description content with the Barcelona-explicit version:

```html
    <meta
      name="description"
      content="Ixtal Web Design — Diseño y desarrollo web profesional en Barcelona. Creamos sitios rápidos, modernos y optimizados que convierten visitantes en clientes."
    />
```

Also update the `og:description` to match (shorter version is fine):
```html
    <meta
      property="og:description"
      content="Diseño y desarrollo web profesional en Barcelona. Sitios rápidos, modernos y optimizados que convierten visitantes en clientes."
    />
```

And the Twitter description:
```html
    <meta
      name="twitter:description"
      content="Diseño y desarrollo web profesional en Barcelona. Sitios rápidos, modernos y optimizados que convierten visitantes en clientes."
    />
```

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add canonical URL, og:locale, og:site_name, update meta descriptions"
```

---

## Task 3: Add JSON-LD LocalBusiness structured data

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Add JSON-LD script block**

In `index.html`, add the following block as the last element inside `<head>`, just before `</head>`:

```html
    <!-- Structured data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Ixtal Web Design",
      "url": "https://ixtaldesign.com",
      "email": "info@ixtaldesign.com",
      "description": "Diseño y desarrollo web profesional en Barcelona. Sitios rápidos, modernos y optimizados que convierten visitantes en clientes.",
      "areaServed": "Barcelona",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Barcelona",
        "addressCountry": "ES"
      },
      "sameAs": [
        "https://www.instagram.com/ixtalwebdesing",
        "https://www.linkedin.com/in/joaquin-alizegui-0447a820a/"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servicios de diseño web en Barcelona",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": "Diseño Web" }
          },
          {
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": "Desarrollo Web" }
          },
          {
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": "Optimización y SEO" }
          }
        ]
      }
    }
    </script>
```

- [ ] **Step 2: Validate the JSON-LD**

Open `https://search.google.com/test/rich-results` in the browser, paste `https://ixtaldesign.com` (after deploying), or use the "URL" tab. Alternatively, copy-paste the JSON block into `https://validator.schema.org` to verify it parses correctly before deploying.

Expected: no errors, detects `LocalBusiness` entity with address in Barcelona.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add JSON-LD LocalBusiness schema for Barcelona SEO"
```

---

## Task 4: Create sitemap.xml and robots.txt

**Files:**
- Create: `public/sitemap.xml`
- Create: `public/robots.txt`

- [ ] **Step 1: Create `public/sitemap.xml`**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ixtaldesign.com/</loc>
    <lastmod>2026-04-24</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

- [ ] **Step 2: Create `public/robots.txt`**

```
User-agent: *
Allow: /

# AI crawlers — explicitly allowed
User-agent: GPTBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Google-Extended
Allow: /

Sitemap: https://ixtaldesign.com/sitemap.xml
```

- [ ] **Step 3: Verify files are served correctly**

Run the dev server (`npm run dev`) and open:
- `http://localhost:5173/sitemap.xml` — should display the XML
- `http://localhost:5173/robots.txt` — should display the text file

- [ ] **Step 4: Commit**

```bash
git add public/sitemap.xml public/robots.txt
git commit -m "feat: add sitemap.xml and robots.txt with AI crawler permissions"
```

---

## Task 5: Update Hero subtitle to mention Barcelona

**Files:**
- Modify: `src/components/Hero.tsx`

- [ ] **Step 1: Update subtitle paragraph**

In `src/components/Hero.tsx`, line 75, update the `<p>` text:

```tsx
        <p className="animate-fade-slide-up animation-delay-300 animation-fill-both text-lg sm:text-xl text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          Cada sitio que construimos tiene un propósito claro: representar tu negocio en Barcelona como se merece.
        </p>
```

The H1 ("Diseño web con personalidad") stays unchanged.

- [ ] **Step 2: Visual check**

Run `npm run dev` and open `http://localhost:5173`. Confirm the subtitle reads naturally and the layout looks correct on mobile and desktop.

- [ ] **Step 3: Commit**

```bash
git add src/components/Hero.tsx
git commit -m "feat: add Barcelona mention to hero subtitle for local SEO"
```

---

## Task 6: Deploy and submit to Google Search Console

- [ ] **Step 1: Push to main and deploy**

```bash
git push origin main
```

Vercel auto-deploys from `main`. Wait ~1 minute for deployment to complete.

- [ ] **Step 2: Submit sitemap to Google Search Console**

1. Go to `https://search.google.com/search-console`
2. Add property `https://ixtaldesign.com` if not already added (verify via DNS TXT record or HTML file)
3. Go to **Sitemaps** in the left sidebar
4. Enter `sitemap.xml` and click **Submit**

Expected: status shows "Success" within a few minutes.

- [ ] **Step 3: Request indexing for the homepage**

In Google Search Console → URL Inspection → enter `https://ixtaldesign.com/` → click **Request Indexing**.

---

## Task 7: External actions (manual, no code)

These are done outside the codebase. No commits needed.

- [ ] **Step 1: Create Google Business Profile**

1. Go to `https://business.google.com` and sign in with a Google account
2. Click **Add your business**
3. Fill in:
   - Business name: `Ixtal Web Design`
   - Category (primary): `Diseñador de sitios web`
   - Category (secondary): `Empresa de desarrollo de software`
   - Type: service-area business (no storefront)
   - Service area: `Barcelona`
   - Website: `https://ixtaldesign.com`
   - Email: `info@ixtaldesign.com`
4. Description (copy-paste this):
   > Ixtal Web Design — Diseño y desarrollo web profesional en Barcelona. Creamos sitios rápidos, modernos y optimizados que convierten visitantes en clientes. Servicios: diseño web, desarrollo web con React y Next.js, optimización SEO.
5. Upload logo + at least 2 screenshots of projects
6. Complete verification (Google sends a code by email or postcard, takes 1–14 days)

- [ ] **Step 2: Register on Clutch.co**

1. Go to `https://clutch.co/get-listed`
2. Create a free provider profile
3. Fill in: name = `Ixtal Web Design`, location = `Barcelona, Spain`, website = `https://ixtaldesign.com`, services = Web Design, Web Development
4. Description: same text as Google Business Profile above
5. Ask 1–2 past clients to leave a review (Clutch sends them a form)

- [ ] **Step 3: Register on GoodFirms.co**

1. Go to `https://www.goodfirms.co/company/registration`
2. Fill in the same name, URL, and description as Clutch — NAP consistency matters
3. Select focus area: Web Design / Web Development, location: Barcelona

- [ ] **Step 4: Register on DesignRush.com**

1. Go to `https://www.designrush.com/agency/profile/create`
2. Same data as above: `Ixtal Web Design`, `https://ixtaldesign.com`, Barcelona, Web Design

---

## Self-Review

**Spec coverage check:**
- ✅ Domain references updated (Task 1)
- ✅ Canonical URL added (Task 2)
- ✅ og:locale + og:site_name added (Task 2)
- ✅ Meta description updated with Barcelona (Task 2)
- ✅ JSON-LD LocalBusiness schema (Task 3)
- ✅ sitemap.xml created (Task 4)
- ✅ robots.txt with AI crawler permissions (Task 4)
- ✅ Hero subtitle updated with Barcelona (Task 5)
- ✅ Google Search Console submission (Task 6)
- ✅ Google Business Profile (Task 7)
- ✅ Clutch, GoodFirms, DesignRush (Task 7)

**No placeholders, no TBDs, no "similar to Task N" references.**
