type headerProps = {
  name: string;
  lastname: string;
  title: string;
};

export const Header = ({ name, lastname, title }: headerProps) => {
  return (
    <header>
      <nav className="items-center flex p-4 gap-4 bg-black">
        <img src="aca va la ruta mi logo" className="" />
        <button className="ml-auto px-4 py-2 rounded-md text-neutral-300 hover:text-white hover:bg-white/10 transition-colors-duration-200">
          Sobre Mi
        </button>
        <button className="px-4 py-2 rounded-md text-neutral-300 hover:text-white hover:bg-white/10 transition-colors-duration-200">
          Portfolio
        </button>
        <button className="px-4 py-2 rounded-md text-neutral-300 hover:text-white hover:bg-white/10 transition-colors-duration-200">
          Contacto
        </button>
      </nav>
      <div>
        <h1>
          {name} {lastname}
        </h1>
        <h2>{title}</h2>
      </div>
    </header>
  );
};
