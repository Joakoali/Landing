const SERVICES = [
  {
    id: "design",
    title: "Diseño Web",
    description:
      "Interfaces modernas, limpias y centradas en la experiencia del usuario. Cada pixel tiene un propósito.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
  },
  {
    id: "dev",
    title: "Desarrollo Web",
    description:
      "Sitios rápidos, escalables y bien construidos. Código limpio y tecnologías modernas.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    id: "seo",
    title: "Optimización & SEO",
    description:
      "Mejoramos la velocidad y visibilidad de tu sitio para que llegue a más clientes potenciales.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <line x1="11" y1="8" x2="11" y2="14" />
        <line x1="8" y1="11" x2="14" y2="11" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#e8500a] text-sm font-semibold tracking-widest uppercase">
            Servicios
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-white tracking-tight">
            Lo que hacemos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group relative p-8 rounded-xl border border-[#262626] bg-[#111111] hover:border-[#e8500a] transition-all duration-300 hover:shadow-[0_0_30px_rgba(232,80,10,0.1)]"
            >
              <div className="text-[#e8500a] mb-5 transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-3 tracking-tight">
                {service.title}
              </h3>
              <p className="text-[#a3a3a3] text-sm leading-relaxed">
                {service.description}
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e8500a] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
