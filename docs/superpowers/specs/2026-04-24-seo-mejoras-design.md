# SEO Improvements — Ixtal Web Design

## Goal

Improve the SEO of the Ixtal Web Design landing page and increase the chances of appearing when someone asks an AI (ChatGPT, Perplexity, etc.) for web design services in Barcelona. The approach combines minimal in-code changes with targeted external actions.

## Context

- Stack: React + TypeScript + Vite + Tailwind CSS, deployed on Vercel
- Domain: `ixtaldesign.com` (canonical). A second domain `ixtaldesing.com` exists by mistake; a 301 redirect from it to `ixtaldesign.com` is already configured in Vercel.
- Current SEO state: basic meta tags exist (title, description, OG, Twitter Card), but no structured data, no sitemap, no robots.txt, and all code references still point to the old domain.
- No Google Business Profile, no directory listings, no external mentions.

---

## Part 1: Code Changes

### 1. Update domain references in code

All occurrences of `ixtaldesing.com` in the codebase must be replaced with `ixtaldesign.com`. Affected files:
- `index.html` — og:url, og:image, twitter:image
- `src/components/Contact.tsx` — EMAIL constant

### 2. `index.html` additions

**Canonical URL:**
```html
<link rel="canonical" href="https://ixtaldesign.com" />
```

**OG enhancements:**
```html
<meta property="og:locale" content="es_ES" />
<meta property="og:site_name" content="Ixtal Web Design" />
```

**Meta description update** (add Barcelona explicitly):
```
Ixtal Web Design — Diseño y desarrollo web profesional en Barcelona. Creamos sitios rápidos, modernos y optimizados que convierten visitantes en clientes.
```

**JSON-LD LocalBusiness schema** (most impactful for AI visibility):
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Ixtal Web Design",
  "url": "https://ixtaldesign.com",
  "email": "info@ixtaldesign.com",
  "description": "Diseño y desarrollo web profesional en Barcelona. Sitios rápidos, modernos y optimizados.",
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
    "name": "Servicios de diseño web",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Diseño Web" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Desarrollo Web" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Optimización y SEO" } }
    ]
  }
}
```

### 3. `/public/sitemap.xml`

Simple sitemap with the canonical URL and today's date. Signals to crawlers (including AI crawlers) that the site is active.

### 4. `/public/robots.txt`

Allow all crawlers. Explicitly permit AI crawlers (GPTBot, PerplexityBot, etc.) to index the site.

### 5. `Hero.tsx` — copy tweak

The subtitle paragraph is updated to naturally include "Barcelona":
> "Cada sitio que construimos tiene un propósito claro: representar tu negocio en Barcelona como se merece."

The H1 ("Diseño web con personalidad") is left unchanged to preserve visual identity.

---

## Part 2: External Actions (manual, not code)

These are done outside the codebase. Order matters — Google Business first.

### 1. Google Business Profile
- URL: `business.google.com`
- Business name: Ixtal Web Design
- Category: "Diseñador de sitios web" (primary) + "Empresa de desarrollo de software" (secondary)
- Type: Service-area business (no physical storefront), area = Barcelona
- Website: `https://ixtaldesign.com`
- Email: `info@ixtaldesign.com`
- Description: include "diseño web Barcelona", "desarrollo web Barcelona", services offered
- Add logo + project screenshots as photos
- Verification: ~1–14 days by postcard/phone/email

### 2. Clutch.co
- Free listing at clutch.co
- Request at least 1–2 reviews from past clients
- Most cited by ChatGPT/Perplexity for agency searches

### 3. GoodFirms.co
- Free listing
- Use identical name, URL, and description as Clutch (NAP consistency)

### 4. DesignRush.com
- Free listing
- Appears in "diseño web Barcelona" style searches

**NAP consistency rule:** Name, Address (area), Phone/email must be identical across all four platforms. Any mismatch reduces trust signals for AI and Google.

---

## Success Criteria

- Google indexes `ixtaldesign.com` as the canonical domain with no duplicate content warnings
- JSON-LD schema validates cleanly in Google's Rich Results Test
- Google Business Profile is live and verified
- Ixtal appears in at least one directory listing within 30 days
- Within 60–90 days: appears as a suggested result when asking Perplexity for web design agencies in Barcelona
