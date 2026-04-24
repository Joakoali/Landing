import Logo from "./Logo";

const QUICK_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Sobre", href: "#sobre" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contacto", href: "#contacto" },
];

const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/ixtalwebdesign" },
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
