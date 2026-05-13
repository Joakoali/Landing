# Ixtal Web Design — Landing

Portfolio y landing page de [Ixtal Web Design](https://www.instagram.com/ixtalwebdesign). Presenta servicios, proyectos y formulario de contacto.

## Stack

- React 19 + TypeScript
- Vite + SWC
- Tailwind CSS v4
- EmailJS (formulario de contacto)
- Vercel Speed Insights

## Secciones

- **Hero** — presentación principal
- **About** — quiénes somos
- **Services** — servicios ofrecidos
- **Portfolio** — proyectos destacados
- **Contact** — formulario + links a redes sociales

## Desarrollo local

```bash
npm install
npm run dev
```

## Variables de entorno

Crear un archivo `.env` en la raíz con las siguientes variables:

```env
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

Se obtienen desde el dashboard de [EmailJS](https://www.emailjs.com/).

## Build

```bash
npm run build
```

## Deploy

Deployado en Vercel. El deploy se actualiza automáticamente con cada push a `main`.
