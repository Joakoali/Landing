import { useEffect, useRef } from "react";
import Logo from "./Logo";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const glow = glowRef.current;
    if (!hero || !glow) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      glow.style.setProperty("--x", `${e.clientX - rect.left}px`);
      glow.style.setProperty("--y", `${e.clientY - rect.top}px`);
      glow.style.opacity = "1";
    };

    const handleMouseLeave = () => {
      glow.style.opacity = "0";
    };

    hero.addEventListener("mousemove", handleMouseMove, { passive: true });
    hero.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    return () => {
      hero.removeEventListener("mousemove", handleMouseMove);
      hero.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Cursor glow */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            "radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(232, 80, 10, 0.07), transparent 60%)",
          opacity: 0,
          transition: "opacity 300ms ease",
        }}
      />

      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Decorative logo watermark */}
      <Logo
        color="orange"
        size={320}
        className="absolute right-[-40px] top-1/2 -translate-y-1/2 opacity-[0.06] pointer-events-none z-0"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <span className="animate-fade-slide-up animation-fill-both inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-6">
          Ixtal Web Design
        </span>

        <h1 className="animate-fade-slide-up animation-delay-100 animation-fill-both text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-6">
          Diseño web con <span className="text-accent">personalidad</span>
        </h1>

        <p className="animate-fade-slide-up animation-delay-300 animation-fill-both text-lg sm:text-xl text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          Cada sitio que construimos tiene un propósito claro: representar tu negocio como se merece.
        </p>

        <div className="animate-fade-slide-up animation-delay-500 animation-fill-both flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#portfolio"
            className="px-8 py-3.5 rounded-lg border border-border text-white font-semibold hover:border-accent hover:text-accent-light transition-all duration-200 text-sm"
          >
            Ver proyectos
          </a>
          <a
            href="#contacto"
            className="px-8 py-3.5 rounded-lg bg-accent text-white font-semibold hover:bg-accent-light transition-all duration-200 text-sm shadow-lg hover:shadow-[0_0_24px_rgba(232,80,10,0.45)]"
          >
            Hablemos
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent pointer-events-none" />
    </section>
  );
}
