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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-2 text-xl font-black tracking-widest text-white hover:text-accent-light transition-colors duration-200"
        >
          <Logo color="orange" size={28} />
          IXTAL
        </a>
        <div className="flex items-center gap-1">
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
      </nav>
    </header>
  );
}
