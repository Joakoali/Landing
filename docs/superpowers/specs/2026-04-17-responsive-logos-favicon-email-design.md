# Spec: Responsive, logos, favicon y email

**Fecha:** 2026-04-17
**Proyecto:** Ixtal Web Design — landing page (React + Vite + Tailwind CSS v4)

---

## Scope

1. Hacer la página completamente responsive (foco principal: header mobile)
2. Reemplazar el componente `Logo.tsx` para usar los SVG files reales
3. Configurar favicons correctamente en `index.html` + `site.webmanifest`
4. Cambiar el email de contacto a `info@ixtaldesing.com`
5. Textos: sin cambios (originales aprobados)

---

## 1. Responsive — Header mobile

**Decisión:** dropdown simple (opción B), todo dentro de `header.tsx` sin componentes nuevos.

**Comportamiento:**
- En `< md` (mobile): los links de nav se ocultan (`hidden md:flex`), aparece un botón hamburger a la derecha
- El botón alterna entre ☰ y ✕ con transición suave
- Al abrir: panel fullwidth debajo del header con los 4 links en columna
- Fondo del panel: `bg-bg/95 backdrop-blur-md`, misma estética que el header scrolleado
- Click en cualquier link cierra el menú
- `useEffect` cierra el menú al resize a `>= 768px`
- Estado: `const [menuOpen, setMenuOpen] = useState(false)`

**Responsive general — otros componentes:**
- `Services.tsx`: grid `grid-cols-1 md:grid-cols-3` — ya OK
- `About.tsx`: highlight cards tienen lógica de columnas compleja (`sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3`) — simplificar a `grid-cols-3` con texto más pequeño en mobile
- `Portfolio.tsx`: grid `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` — ya OK
- `Contact.tsx`: formulario fullwidth — ya OK
- `Footer.tsx`: `flex-col sm:flex-row` — los 3 bloques (logo, nav, socials) se apilan en mobile con `items-center` y separación clara

---

## 2. Logo

**Archivo:** `src/components/Logo.tsx`

**Cambio:** reemplazar el SVG hardcodeado por `<img>` apuntando a los archivos en `/public`:
- `color="orange"` → `src="/ixtal-logo-orange.svg"`
- `color="white"` → `src="/ixtal-logo-white.svg"`

**API preservada:** props `color`, `size`, `className` siguen funcionando igual.

```tsx
export default function Logo({ color = "white", size = 32, className, ...props }) {
  const src = color === "orange" ? "/ixtal-logo-orange.svg" : "/ixtal-logo-white.svg";
  return <img src={src} width={size} height={size} className={className} alt="" aria-hidden="true" />;
}
```

Todos los usos actuales (header, hero watermark, footer) quedan sin cambios.

---

## 3. Favicon

**Archivos ya en `/public`:**
- `favicon.ico`
- `apple-touch-icon.png`
- `android-chrome-192x192.png`
- `android-chrome-512x512.png`

**Cambios en `index.html`:**
- Reemplazar `<link rel="icon" href="/vite.svg">` por:
  ```html
  <link rel="icon" href="/favicon.ico" sizes="any" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  <link rel="manifest" href="/site.webmanifest" />
  ```

**Crear `public/site.webmanifest`:**
```json
{
  "name": "Ixtal Web Design",
  "short_name": "Ixtal",
  "icons": [
    { "src": "/android-chrome-192x192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/android-chrome-512x512.png", "sizes": "512x512", "type": "image/png" }
  ],
  "theme_color": "#0a0a0a",
  "background_color": "#0a0a0a",
  "display": "standalone"
}
```

---

## 4. Email

**Cambio:** `contacto@ixtaldesing.com` → `info@ixtaldesing.com`

**Archivo afectado:** `src/components/Contact.tsx` — constante `EMAIL` en línea 3.

El dominio `ixtaldesing.com` ya está referenciado en `index.html` (og:url, og:image, twitter:image) — esos no cambian porque son URLs del dominio, no del email.

---

## 5. Textos

Sin cambios. Los textos originales se mantienen tal cual.

---

## Archivos a modificar

| Archivo | Cambio |
|---|---|
| `src/components/header.tsx` | Hamburger menu + dropdown mobile |
| `src/components/Logo.tsx` | Usar SVG files en lugar de SVG inline |
| `src/components/About.tsx` | Simplificar grid de highlight cards |
| `src/components/Footer.tsx` | Mejorar apilado en mobile |
| `src/components/Contact.tsx` | Cambiar email a `info@ixtaldesing.com` |
| `index.html` | Favicons correctos |
| `public/site.webmanifest` | Crear nuevo |

---

## Fuera de scope

- Cambios en textos / copy
- Nuevos componentes o secciones
- Animaciones adicionales
- Cambios en colores o tipografía
