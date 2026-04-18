# Responsive, Logos, Favicon & Email — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the landing page fully responsive, replace logos with real SVG files, wire up favicons, update the contact email, and improve mobile layout across header, about, and footer.

**Architecture:** All changes are isolated to individual component files and static assets — no new dependencies, no new components, no shared state changes. Tasks are fully independent and can be done in any order.

**Tech Stack:** React 18, TypeScript, Vite, Tailwind CSS v4

---

## File map

| File | Action | What changes |
|---|---|---|
| `src/components/Logo.tsx` | Modify | Replace inline SVG with `<img>` pointing to `/public` SVG files |
| `public/site.webmanifest` | Create | PWA/Android manifest with Ixtal branding |
| `index.html` | Modify | Replace vite.svg favicon with correct favicon links + manifest |
| `src/components/Contact.tsx` | Modify | Change email constant to `info@ixtaldesing.com` |
| `src/components/header.tsx` | Modify | Add hamburger + dropdown mobile menu |
| `src/components/About.tsx` | Modify | Simplify highlight cards grid for mobile |
| `src/components/Footer.tsx` | Modify | Fix mobile stacking of logo/nav/socials |

---

## Task 1: Update Logo.tsx to use real SVG files

**Files:**
- Modify: `src/components/Logo.tsx`

- [ ] **Step 1: Replace the component**

Open `src/components/Logo.tsx` and replace the entire file content with:

```tsx
interface LogoProps {
  color?: "orange" | "white";
  size?: number;
  className?: string;
}

export default function Logo({ color = "white", size = 32, className }: LogoProps) {
  const src = color === "orange" ? "/ixtal-logo-orange.svg" : "/ixtal-logo-white.svg";
  return (
    <img
      src={src}
      width={size}
      height={size}
      className={className}
      alt=""
      aria-hidden="true"
    />
  );
}
```

- [ ] **Step 2: Verify dev server**

Run `npm run dev`. Check:
- Header: logo naranja visible junto a "IXTAL"
- Hero: watermark semitransparente a la derecha (usa `opacity-[0.06]` via className — sigue funcionando)
- Footer: logo blanco visible

- [ ] **Step 3: Commit**

```bash
git add src/components/Logo.tsx
git commit -m "feat: replace inline SVG logo with real SVG files"
```

---

## Task 2: Create site.webmanifest

**Files:**
- Create: `public/site.webmanifest`

- [ ] **Step 1: Create the file**

Create `public/site.webmanifest` with this content:

```json
{
  "name": "Ixtal Web Design",
  "short_name": "Ixtal",
  "icons": [
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#0a0a0a",
  "background_color": "#0a0a0a",
  "display": "standalone"
}
```

- [ ] **Step 2: Commit**

```bash
git add public/site.webmanifest
git commit -m "feat: add site.webmanifest for PWA/Android support"
```

---

## Task 3: Update favicon links in index.html

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Replace the favicon link**

In `index.html`, find and replace this line:

```html
<link rel="icon" type="image/svg+xml" href="/vite.svg" />
```

With:

```html
<link rel="icon" href="/favicon.ico" sizes="any" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
<link rel="manifest" href="/site.webmanifest" />
```

- [ ] **Step 2: Verify**

Run `npm run dev`. Open browser DevTools → Network tab, reload the page. Confirm `/favicon.ico` loads with 200 (not 404). Check the browser tab shows the Ixtal favicon instead of the Vite logo.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: configure favicons and web manifest in index.html"
```

---

## Task 4: Update contact email

**Files:**
- Modify: `src/components/Contact.tsx`

- [ ] **Step 1: Change the EMAIL constant**

In `src/components/Contact.tsx`, line 3, change:

```ts
const EMAIL = "contacto@ixtaldesing.com";
```

To:

```ts
const EMAIL = "info@ixtaldesing.com";
```

- [ ] **Step 2: Verify**

Run `npm run dev`. Go to the Contact section. Confirm the email link at the bottom shows `info@ixtaldesing.com` and the `mailto:` href is correct. Also confirm the error message fallback text shows the new email.

- [ ] **Step 3: Commit**

```bash
git add src/components/Contact.tsx
git commit -m "feat: update contact email to info@ixtaldesing.com"
```

---

## Task 5: Add hamburger menu to header (mobile)

**Files:**
- Modify: `src/components/header.tsx`

- [ ] **Step 1: Replace the full component**

Replace the entire content of `src/components/header.tsx` with:

```tsx
import { useEffect, useState } from "react";
import Logo from "./Logo";

const NAV_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Sobre", href: "#sobre" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-bg/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 text-xl font-black tracking-widest text-white hover:text-accent-light transition-colors duration-200"
        >
          <Logo color="orange" size={28} />
          IXTAL
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 rounded-md text-text-muted hover:text-white hover:bg-white/5 transition-all duration-200 text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Hamburger button (mobile only) */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 text-white"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-5 h-0.5 bg-current transition-all duration-200 origin-center ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-current transition-all duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-current transition-all duration-200 origin-center ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 pb-4 gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="px-4 py-3 rounded-md text-text-muted hover:text-white hover:bg-white/5 transition-all duration-200 text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
```

- [ ] **Step 2: Verify desktop**

Run `npm run dev`. En pantalla ancha (>768px):
- El hamburger NO es visible
- Los 4 links del nav aparecen normalmente
- El scroll backdrop funciona como antes

- [ ] **Step 3: Verify mobile**

Reducí el navegador a menos de 768px (o usá DevTools → responsive mode):
- El nav de desktop se oculta
- Aparece el botón hamburger a la derecha
- Al hacer click: las 3 líneas se animan a X, aparece el dropdown con los 4 links
- Click en cualquier link: el menú se cierra y la página hace scroll a la sección
- Expandí la ventana a desktop: el menú se cierra automáticamente

- [ ] **Step 4: Commit**

```bash
git add src/components/header.tsx
git commit -m "feat: add hamburger dropdown menu for mobile"
```

---

## Task 6: Simplify About.tsx highlight cards grid

**Files:**
- Modify: `src/components/About.tsx`

- [ ] **Step 1: Simplify the grid class**

En `src/components/About.tsx`, encontrá el div de los highlight cards (línea 35) y cambiá:

```tsx
<div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3 gap-4">
```

Por:

```tsx
<div className="grid grid-cols-3 gap-4">
```

Los 3 cards son suficientemente compactos (solo un número grande + label) para caber en 3 columnas incluso en mobile.

- [ ] **Step 2: Verify**

En mobile (< 640px): los 3 highlight cards deben verse en fila sin overflow. Si el texto se ve muy apretado, verificar que `text-sm` en el label y `text-2xl` en el valor siguen siendo legibles.

- [ ] **Step 3: Commit**

```bash
git add src/components/About.tsx
git commit -m "fix: simplify highlight cards grid for mobile"
```

---

## Task 7: Improve Footer.tsx mobile stacking

**Files:**
- Modify: `src/components/Footer.tsx`

- [ ] **Step 1: Replace the footer inner layout**

En `src/components/Footer.tsx`, reemplazá el contenido completo con:

```tsx
import Logo from "./Logo";

const QUICK_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Sobre", href: "#sobre" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contacto", href: "#contacto" },
];

const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/ixtalwebdesing" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/joaquin-alizegui-0447a820a/",
  },
  { label: "GitHub", href: "https://github.com/Joakoali" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8 sm:flex-row sm:items-center sm:justify-between">
        {/* Logo + copyright */}
        <div className="flex flex-col items-center sm:items-start gap-1">
          <Logo color="white" size={36} />
          <span className="text-xs text-text-muted text-center sm:text-left">
            &copy; 2026 Ixtal Web Design. Todos los derechos reservados.
          </span>
        </div>

        {/* Quick links */}
        <nav className="flex items-center gap-6 flex-wrap justify-center">
          {QUICK_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-muted hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Socials */}
        <div className="flex items-center gap-4">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-text-muted hover:text-accent transition-colors duration-200"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Verify**

En mobile: logo + copyright centrados arriba, links en el medio, socials abajo — todo bien espaciado sin apretarse.
En desktop: los 3 bloques en fila horizontal como antes.

- [ ] **Step 3: Commit**

```bash
git add src/components/Footer.tsx
git commit -m "fix: improve footer mobile stacking layout"
```

---

## Self-review checklist

- [x] Logo.tsx — spec cubierto: reemplaza SVG inline, preserva props `color`/`size`/`className`
- [x] site.webmanifest — spec cubierto: creado con colores y assets correctos
- [x] index.html — spec cubierto: favicon.ico + apple-touch-icon + manifest link
- [x] Contact.tsx — spec cubierto: email cambiado a `info@ixtaldesing.com`
- [x] header.tsx — spec cubierto: hamburger + dropdown + close on link/resize
- [x] About.tsx — spec cubierto: grid simplificado
- [x] Footer.tsx — spec cubierto: mobile stacking mejorado
- [x] Sin placeholders ni TBDs
- [x] Tipos consistentes: `LogoProps` redefinido en Task 1, no hay conflictos
- [x] Sin nuevas dependencias
- [x] Sin cambios de texto
