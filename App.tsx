import React, { useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";

const TopBar = () => (
  <div className="bg-slate-900 text-slate-200 text-xs py-2 px-6 md:px-20 lg:px-40 border-b border-slate-800">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
      <div className="flex items-center gap-6">
        <a
          href="mailto:contacto@rutazero.cl"
          className="flex items-center gap-2 hover:text-primary transition-colors"
        >
          <span className="material-symbols-outlined text-[16px]">mail</span>
          <span>contacto@rutazero.cl</span>
        </a>
        <a
          href="tel:+56997519715"
          className="flex items-center gap-2 hover:text-primary transition-colors"
        >
          <span className="material-symbols-outlined text-[16px]">call</span>
          <span>+56 9 9751 9715</span>
        </a>
      </div>
      <div className="hidden md:flex items-center gap-4 text-slate-400">
        <span>Conectamos las principales rutas </span>
      </div>
    </div>
  </div>
);

const FloatingWhatsApp = () => (
  <a
    href="https://wa.me/56997519715"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex items-center justify-center size-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 hover:shadow-green-500/30 transition-all duration-300 group"
    aria-label="Contactar por WhatsApp"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="currentColor"
      viewBox="0 0 16 16"
      className="fill-current"
    >
      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
    </svg>
    <div className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-lg text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
      ¡Escríbenos al WhatsApp!
    </div>
  </a>
);
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Nosotros", path: "/nosotros" },
    { name: "Servicios", path: "/servicios" },
    { name: "Galería", path: "/galeria" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-accent-dark bg-background-dark/95 backdrop-blur-sm px-6 md:px-20 lg:px-40 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-4 text-slate-900">
          <img src="images/logo.webp" alt="Logo" className="w-50 h-16" />
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.path
                  ? "text-primary"
                  : "text-slate-900"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contacto"
            className="flex min-w-[120px] cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold transition-all hover:brightness-110"
          >
            Contacto
          </Link>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-slate-900"
        >
          <span className="material-symbols-outlined">
            {isOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-background-dark border-b border-accent-dark p-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-slate-900 text-lg font-medium"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contacto"
            onClick={() => setIsOpen(false)}
            className="w-full h-12 bg-primary text-white flex items-center justify-center rounded-lg font-bold"
          >
            Contacto
          </Link>
        </div>
      )}
    </header>
  );
};

const Footer = () => (
  <footer className="bg-accent-dark/20 border-t border-accent-dark py-12 px-6 md:px-20 lg:px-40">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
        <div className="flex items-center gap-3">
          <img src="images/logo.webp" alt="Logo" className="w-64 h-20" />
        </div>
        <ul className="flex flex-wrap justify-center gap-6 flex-col">
          <li>contacto@rutazero.cl</li>
          <li>+56 9 9751 9715</li>
          <li>Av. Apoquindo 6410, piso 10. Las Condes, Santiago.</li>
        </ul>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-4 text-text-muted text-xs border-t border-accent-dark/30 pt-8">
        <p>© 2026 RutaZero Chile. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background-dark text-slate-900 font-sans">
      <TopBar />
      <Navbar />
      <FloatingWhatsApp />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/galeria" element={<Gallery />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
