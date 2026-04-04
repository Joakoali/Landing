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
    <footer className="border-t border-[#262626] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center sm:items-start gap-1">
          <span className="text-lg font-black tracking-widest text-white">
            IXTAL
          </span>
          <span className="text-xs text-[#a3a3a3]">
            &copy; 2026 Ixtal Web Design. Todos los derechos reservados.
          </span>
        </div>

        <nav className="flex items-center gap-6">
          {QUICK_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#a3a3a3] hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#a3a3a3] hover:text-[#e8500a] transition-colors duration-200"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
