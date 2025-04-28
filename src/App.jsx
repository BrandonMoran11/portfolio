import "./main.css";
import Header from "./components/Header";
function App() {
  return (
    <>
      <div className="bg-slate-900 min-h-screen ">
        <Header />
        <div id="inicio" className="container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Hola, soy <span className="text-cyan-100">Brandon</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Desarrollador web especializado en crear experiencias digitales
              atractivas y funcionales
            </p>
          </div>
        </div>
        <section id="sobre-mi" className=" p-4">
          <h2 className="text-white text-4xl font-bold mb-12 text-center">
            Sobre Mí
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#6897c8] to-[#0066cc] -rotate-6"></div>
              <div className="absolute inset-0 bg-[#5ce1e6]/20 rounded-2xl rotate-3"></div>
              <img
                src="/src/assets/salsa y picante.webp"
                alt="Foto de perfil"
                className="relative rounded-xl object-cover w-full h-full"
              />
            </div>
            <div>
              <h3 className="text-white text-2xl font-semibold mb-5">
                Desarrollador Web & Diseñador UI/UX
              </h3>
              <p className="text-slate-300 text-lg mb-5">
                Soy un desarrollador web apasionado por crear soluciones
                digitales que combinan diseño atractivo y funcionalidad. Con
                experiencia en React y Tailwind CSS, me especializo en construir
                interfaces modernas y responsivas.
              </p>
              <p className="text-slate-300 text-lg mb-8">
                Mi enfoque se centra en la experiencia del usuario, asegurando
                que cada proyecto no solo se vea bien, sino que también sea
                intuitivo y accesible para todos los usuarios.
              </p>
              <button className="bg-[#0066cc] hover:bg-[#0055aa] text-white p-3 rounded-lg">
                Descargar CV
              </button>
            </div>
          </div>
        </section>
        <section id="proyectos" className="p-4 mt-20 bg-slate-800">
          <h2 className="text-4xl text-white font-bold text-center mb-10">
            Mis Proyectos
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div
                key={project}
                className="bg-slate-900 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02]"
              >
                <div className="h-48 bg-gradient-to-r from-[#6897c8] to-[#0066cc] relative">
                  <img
                    src={`https://placehold.co/400x200`}
                    alt={`Proyecto ${project}`}
                    className="w-full h-full object-cover mix-blend-overlay"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Proyecto {project}
                  </h3>
                  <p className="text-slate-400 mb-4">
                    Una breve descripción del proyecto, tecnologías utilizadas y
                    resultados obtenidos.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <span className="px-2 py-1 bg-[#5ce1e6]/20 text-[#5ce1e6] text-xs rounded-full">
                        React
                      </span>
                      <span className="px-2 py-1 bg-[#5ce1e6]/20 text-[#5ce1e6] text-xs rounded-full">
                        Tailwind
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <a
                        href="#"
                        className="text-slate-400 hover:text-[#5ce1e6]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                          />
                        </svg>
                      </a>
                      <a
                        href="https://github.com/BrandonMoran11"
                        className="text-slate-400 hover:text-[#5ce1e6]"
                      >
                        <img
                          className="size-6"
                          src="/src/assets/github/github-mark/github-mark-white.svg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
