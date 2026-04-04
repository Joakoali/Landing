import { useEffect, useRef } from "react";

const PROJECTS = [
  {
    id: "gg-propiedades",
    name: "GG Propiedades",
    description:
      "Plataforma inmobiliaria con buscador avanzado y gestión de propiedades.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Prisma",
      "Supabase",
      "NextAuth",
      "Cloudflare",
    ],
    //FALTAN LAS SCREENSHOOTS !!
    screenshot: "/screenshots/gg-propiedades.webp",
    demoUrl: "https://ggpropiedades.com",
    githubUrl: "https://github.com/Joakoali/gg-propiedades",
  },
  {
    id: "control-gastos",
    name: "Control Gastos",
    description: "App de control de gastos con gráficos y categorías.",
    tags: ["React", "TypeScript", "Vite", "Tailwind", "Firebase"],
    //FALTAN LAS SCREENSHOOTS !!
    screenshot: "/screenshots/control-gastos.webp",
    demoUrl: "https://control-gastos-nine-zeta.vercel.app",
    githubUrl: "https://github.com/Joakoali/control-gastos",
  },
  {
    id: "adocmat",
    name: "Adocmat",
    description:
      "Landing institucional con panel de administración y formulario de contacto.",
    tags: ["React", "TypeScript", "Vite", "Tailwind", "EmailJS"],
    //FALTAN LAS SCREENSHOOTS !!
    screenshot: "/screenshots/adocmat.webp",
    demoUrl: "https://adocmat.vercel.app",
    githubUrl: "https://github.com/Joakoali/Adocmat",
  },
];

function ProjectCard({ project }: { project: (typeof PROJECTS)[number] }) {
  const cardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          card.classList.add("is-visible");
        } else {
          card.classList.remove("is-visible");
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={cardRef}
      className="group rounded-xl overflow-hidden border border-[#262626] bg-[#111111] hover:border-[#e8500a] transition-all duration-300 hover:shadow-[0_0_30px_rgba(232,80,10,0.1)]"
    >
      {/* Browser frame (Recrea IOs browser in order to be more careta) */}
      <div className="border-b border-[#262626]">
        <div className="flex items-center gap-2 px-4 py-2.5 bg-[#1a1a1a]">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex-1 mx-2">
            <div className="bg-[#111111] rounded-md px-3 py-1 text-[10px] text-[#a3a3a3] text-center truncate">
              {project.demoUrl.replace("https://", "")}
            </div>
          </div>
        </div>
      </div>

      {/* Screenshot container */}
      <div className="h-52 overflow-hidden bg-[#0a0a0a]">
        <img
          src={project.screenshot}
          alt={`Captura de ${project.name}`}
          loading="lazy"
          className="w-full [.is-visible_&]:animate-screenshot-scroll [.is-visible:hover_&]:[animation-play-state:paused]"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-white font-bold text-lg mb-2 tracking-tight">
          {project.name}
        </h3>
        <p className="text-[#a3a3a3] text-sm leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-md bg-[#1a1a1a] border border-[#262626] text-[#a3a3a3] font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-lg bg-[#e8500a] text-white text-sm font-semibold hover:bg-[#f97316] transition-all duration-200"
          >
            Ver sitio
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-lg border border-[#262626] text-[#a3a3a3] text-sm font-semibold hover:text-white hover:border-[#e8500a] transition-all duration-200"
          >
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#e8500a] text-sm font-semibold tracking-widest uppercase">
            Portfolio
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-white tracking-tight">
            Proyectos recientes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
