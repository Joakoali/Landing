const HIGHLIGHTS = [
  { label: "Proyectos entregados", value: "3+" },
  { label: "Stack principal", value: "React & Next.js" },
  { label: "Ubicación", value: "Barcelona" },
];

export default function About() {
  return (
    <section id="sobre" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">
            Sobre Ixtal
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-white tracking-tight">
            El desarrollador detrás
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-text-muted text-lg leading-relaxed mb-6">
              Soy <span className="text-white font-semibold">Joaquín</span>,
              desarrollador web en Barcelona. Trabajo con negocios que quieren
              una presencia online que los represente de verdad.
            </p>
            <p className="text-text-muted text-lg leading-relaxed">
              Desde landing pages hasta plataformas completas, cada proyecto lo
              trato como si fuera el mío: código limpio, buen diseño y foco en
              resultados.
            </p>
          </div>

          {/* Highlight cards */}
          <div className="grid grid-cols-3 gap-4">
            {HIGHLIGHTS.map((item) => (
              <div
                key={item.label}
                className="p-6 rounded-xl border border-border bg-surface text-center"
              >
                <span className="block text-2xl font-black text-accent mb-1">
                  {item.value}
                </span>
                <span className="text-sm text-text-muted">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
