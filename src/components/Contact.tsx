import { useRef, useState } from "react";

const EMAIL = "info@ixtaldesing.com";

const SOCIALS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/ixtalwebdesing",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/joaquin-alizegui-0447a820a/",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/Joakoali",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
];

type FormStatus = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const honeypotRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");
  const lastSubmitRef = useRef(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot
    if (honeypotRef.current?.value) return;

    // minimo 30 s
    const now = Date.now();
    if (now - lastSubmitRef.current < 30_000) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const emailjs = await import("@emailjs/browser");
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      lastSubmitRef.current = now;
      setStatus("sent");
      formRef.current?.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contacto" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">
            Contacto
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            ¿Tenés un proyecto en mente?
          </h2>
          <p className="mt-4 text-text-muted text-lg leading-relaxed">
            Contanos sobre tu idea y te respondemos a la brevedad.
          </p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-5 mb-12">
          {/* Honeypot */}
          <input
            ref={honeypotRef}
            type="text"
            name="_honeypot"
            tabIndex={-1}
            autoComplete="off"
            className="absolute opacity-0 h-0 w-0 pointer-events-none"
          />

          <div>
            <label
              htmlFor="user_name"
              className="block text-sm font-medium text-text-muted mb-2"
            >
              Nombre
            </label>
            <input
              id="user_name"
              name="user_name"
              type="text"
              required
              className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-white placeholder-[#666] focus:border-accent focus:outline-none transition-colors duration-200"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label
              htmlFor="user_email"
              className="block text-sm font-medium text-text-muted mb-2"
            >
              Email
            </label>
            <input
              id="user_email"
              name="user_email"
              type="email"
              required
              className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-white placeholder-[#666] focus:border-accent focus:outline-none transition-colors duration-200"
              placeholder="tu@email.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-text-muted mb-2"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-white placeholder-[#666] focus:border-accent focus:outline-none transition-colors duration-200 resize-none"
              placeholder="Contanos sobre tu proyecto..."
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full px-8 py-3.5 rounded-lg bg-accent text-white font-semibold hover:bg-accent-light transition-all duration-200 text-sm shadow-lg hover:shadow-[0_0_24px_rgba(232,80,10,0.45)] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "sending" ? "Enviando..." : "Enviar mensaje"}
          </button>

          {status === "sent" && (
            <p className="text-center text-green-400 text-sm">
              Mensaje enviado correctamente. Te responderemos pronto.
            </p>
          )}
          {status === "error" && (
            <p className="text-center text-red-400 text-sm">
              Hubo un error al enviar. Intentá de nuevo o escribinos a {EMAIL}.
            </p>
          )}
        </form>

        <div className="flex flex-col items-center gap-4">
          <a
            href={`mailto:${EMAIL}`}
            className="text-text-muted hover:text-white text-sm transition-colors duration-200"
          >
            {EMAIL}
          </a>

          <div className="flex items-center gap-3 mt-2">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2.5 rounded-lg border border-border text-text-muted hover:text-accent hover:border-accent transition-all duration-200"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
