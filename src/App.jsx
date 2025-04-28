import "./main.css";

function App() {
  return (
    <>
      <div className="bg-slate-900 min-h-screen">
        <header className="sticky top-0 z-10 bg-slate-900/80 backdrop-blur-sm border-b border-slate-800">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="font-bold text-2xl text-white">Portfolio</div>
            <nav className="hidden md:flex space-x-6">
              <a
                href="#inicio"
                className="text-slate-300 hover:text-[#5ce1e6] transition-colors"
              >
                Inicio
              </a>
              <a
                href="#sobre-mi"
                className="text-slate-300 hover:text-[#5ce1e6] transition-colors"
              >
                Sobre Mí
              </a>
              <a
                href="#proyectos"
                className="text-slate-300 hover:text-[#5ce1e6] transition-colors"
              >
                Proyectos
              </a>
              <a
                href="#habilidades"
                className="text-slate-300 hover:text-[#5ce1e6] transition-colors"
              >
                Habilidades
              </a>
              <a
                href="#contacto"
                className="text-slate-300 hover:text-[#5ce1e6] transition-colors"
              >
                Contacto
              </a>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
