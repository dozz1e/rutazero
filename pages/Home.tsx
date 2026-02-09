import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import BrandBar from "../components/BrandBar";

const Home: React.FC = () => {
  const testimonials = [
    {
      quote:
        "La precisión en el transporte de nuestros transformadores de alta tensión fue impecable. RutaZero es sinónimo de confianza en logística crítica.",
      name: "Ing. Roberto Méndez",
      position: "Gerente Logístico",
      company: "Anglo American Chile",
    },
    {
      quote:
        "Operar en faenas a 4.500 msnm no es para cualquiera. Su flota y conductores están a otro nivel de preparación técnica y seguridad.",
      name: "Sandra Espinoza",
      position: "Jefa de Operaciones",
      company: "BHP Pampa Norte",
    },
    {
      quote:
        "Cumplimiento estricto de plazos y estándares de seguridad. Son nuestro partner estratégico indispensable para toda la zona norte del país.",
      name: "Carlos Ruiz",
      position: "Director de Suministros",
      company: "Antofagasta Minerals",
    },
  ];

  const values = [
    {
      icon: "shield_lock",
      title: "Seguridad",
      desc: "Prioridad absoluta en cada operación, protegiendo a las personas, la carga, la infraestructura y el entorno, mediante protocolos estrictos y prevención de riesgos.",
      image: "images/values/seguridad.webp",
    },
    {
      icon: "verified_user",
      title: "Responsabilidad",
      desc: "Cumplimos con nuestros compromisos operativos, legales y ambientales, actuando con seriedad y conciencia en cada proyecto.",
      image: "images/values/responsabilidad.webp",
    },
    {
      icon: "handshake",
      title: "Compromiso con el cliente",
      desc: "Entendemos las necesidades específicas de cada operación y ofrecemos soluciones a medida, orientadas al éxito de los proyectos de nuestros clientes.",
      image: "images/values/compromiso.webp",
    },
    {
      icon: "psychology",
      title: "Profesionalismo",
      desc: "Contamos con personal técnico capacitado, experiencia operativa y una cultura de mejora continua en todos los niveles de la organización.",
      image: "images/values/profesionalismo.webp",
    },
    {
      icon: "visibility",
      title: "Transparencia",
      desc: "Mantenemos una comunicación clara y honesta con clientes, autoridades y aliados estratégicos durante todas las etapas del servicio.",
      image: "images/values/transparencia.webp",
    },
    {
      icon: "settings_suggest",
      title: "Eficiencia Operativa",
      desc: "Optimizamos recursos, tiempos y rutas para garantizar operaciones seguras, puntuales y rentables.",
      image: "images/values/eficiencia.webp",
    },
    {
      icon: "group",
      title: "Trabajo en Equipo",
      desc: "Desarrollamos nuestras operaciones con respeto al medio ambiente y a las comunidades, minimizando impactos y promoviendo buenas prácticas logísticas.",
      image: "images/values/trabajo-en-equipo.webp",
    },
  ];

  const principles = [
    "Cumplimiento estricto de la normativa nacional de transporte pesado y sobredimensionado",
    "Planificación técnica detallada y estudios de ruta previos",
    "Gestión integral de riesgos",
    "Mejora continua de procesos y tecnología",
    "Trabajo en equipo y colaboración con autoridades y clientes",
    "Ética empresarial en todas las decisiones",
    "Cultura de prevención y seguridad vial",
  ];

  return (
    <div>
      <Hero />
      <BrandBar />

      {/* Intro Section */}
      <section className="px-6 md:px-20 lg:px-40 py-20 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 space-y-8">
            <h2 className="text-3xl md:text-4xl font-black leading-tight text-slate-900">
              Conectamos tu proyecto
            </h2>
            <div className="h-1.5 w-20 bg-primary rounded-full"></div>
            <p className="text-slate-600 text-lg leading-relaxed">
              Equipo altamente capacitado, profesional, con amplio conocimiento
              técnico y operativo. Cada traslado es planificado con precisión,
              garantizando eficiencia, control y cuidado total de la carga.
            </p>
            <Link
              to="/nosotros"
              className="inline-flex items-center gap-2 text-primary font-bold border-b border-primary pb-1 hover:gap-4 transition-all"
            >
              Conoce nuestra historia{" "}
              <span className="material-symbols-outlined">arrow_right_alt</span>
            </Link>
          </div>
          <div className="flex-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src="images/inicio.webp"
                alt="Truck"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 border-[12px] border-primary/20 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-6 md:px-20 lg:px-40 py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-primary font-bold tracking-widest text-xs">
              Cultura RutaZero
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              Nuestros Valores Fundamentales
            </h2>
            <p className="text-slate-600">
              Los pilares que guían cada kilómetro de nuestra operación
              logística y relación con el entorno.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {values.map((v, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded-2xl p-8 gap-4 hover:shadow-2xl transition-all group shadow-xl h-full flex flex-col justify-start"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={v.image}
                    alt={v.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-slate-900/60 group-hover:bg-slate-900/70 transition-colors" />
                </div>

                <div className="relative z-10 size-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-white group-hover:bg-primary group-hover:text-white transition-all duration-300 border border-white/20">
                  <span className="material-symbols-outlined text-4xl">
                    {v.icon}
                  </span>
                </div>
                <div className="relative z-10 space-y-3">
                  <h3 className="text-xl font-black text-white tracking-tight">
                    {v.title}
                  </h3>
                  <p className="text-white text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Principles Section */}
      <section className="px-6 md:px-20 lg:px-40 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white border border-slate-200 p-10 md:p-16 rounded-[2.5rem] relative overflow-hidden group shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-700"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-primary">
                    <span className="material-symbols-outlined text-4xl">
                      architecture
                    </span>
                    <span className="tracking-[0.3em] font-black text-xs">
                      Excelencia Técnica
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tighter text-slate-900">
                    Principios <br />
                    <span className="text-primary">Operativos</span>
                  </h2>
                </div>
                <p className="text-slate-600 text-lg font-light leading-relaxed">
                  Nuestra metodología de trabajo se basa en la planificación
                  rigurosa y el cumplimiento de los más altos estándares de la
                  industria logística.
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-1 gap-4">
                {principles.map((p, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-5 p-4 bg-white border-primary rounded-2xl border group/item hover:shadow-lg transition-all"
                  >
                    <div className="p-2 bg-primary rounded-full flex items-center justify-center text-white group-hover/item:bg-white group-hover/item:text-primary transition-all">
                      <span className="text-xs font-black">0{i + 1}</span>
                    </div>
                    <p className="text-slate-900 text-sm md:text-base font-medium tracking-tight">
                      {p}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
