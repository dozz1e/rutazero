import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] bg-slate-900">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="h-full min-h-[85vh]"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative h-full min-h-[85vh] flex items-center px-6 md:px-20 lg:px-40 overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img
                src="images/camiones/17.webp"
                alt="RutaZero Camión Minería"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-transparent" />
            </div>

            <div className="relative z-10 max-w-3xl space-y-6">
              <span className="texto-dorado font-bold tracking-widest text-sm uppercase">
                Relaciones de confianza
              </span>
              <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight text-white">
                Movemos grandes desafíos en{" "}
                <span className="texto-dorado">RutaZero</span>
              </h1>
              <p className="text-slate-200 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
                Especialistas en transporte de carga pesada y sobredimensión,
                comprometidos en la logística de alta complejidad a nivel
                nacional.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  to="/contacto"
                  className="bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:brightness-110 transition-all flex items-center gap-2"
                >
                  Contacto{" "}
                  <span className="material-symbols-outlined">
                    trending_flat
                  </span>
                </Link>
                <Link
                  to="/servicios"
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all"
                >
                  Ver Servicios
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative h-full min-h-[85vh] flex items-center px-6 md:px-20 lg:px-40 overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img
                src="images/camiones/10.webp"
                alt="Seguridad Logística"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-transparent" />
            </div>

            <div className="relative z-10 max-w-3xl space-y-6">
              <span className="texto-dorado font-bold tracking-widest text-sm uppercase">
                Estándares Mineros
              </span>
              <h2 className="text-5xl md:text-7xl font-black leading-tight tracking-tight text-white">
                Seguridad y Confianza en{" "}
                <span className="texto-dorado">Cada Kilómetro</span>
              </h2>
              <p className="text-slate-200 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
                Protocolos estrictos y planificación técnica detallada para
                garantizar que tu carga crítica llegue segura y a tiempo a su
                destino.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  to="/nosotros"
                  className="bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:brightness-110 transition-all flex items-center gap-2"
                >
                  Conócenos{" "}
                  <span className="material-symbols-outlined">group</span>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative h-full min-h-[85vh] flex items-center px-6 md:px-20 lg:px-40 overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img
                src="images/camiones/18.webp"
                alt="Cobertura Nacional"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-transparent" />
            </div>

            <div className="relative z-10 max-w-3xl space-y-6">
              <span className="texto-dorado font-bold tracking-widest text-sm uppercase">
                De Norte a Sur
              </span>
              <h2 className="text-5xl md:text-7xl font-black leading-tight tracking-tight text-white">
                Cobertura Nacional para la{" "}
                <span className="texto-dorado">Minería</span>
              </h2>
              <p className="text-slate-200 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
                Conectamos las principales rutas del territorio nacional con una
                flota eficiente y conductores capacitados.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  to="/contacto"
                  className="bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:brightness-110 transition-all flex items-center gap-2"
                >
                  Contáctanos{" "}
                  <span className="material-symbols-outlined">call</span>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Custom CSS for Swiper pagination/navigation overrides if needed */}
      <style>{`
        .swiper-pagination-bullet {
          background: rgba(255,255,255,0.5);
          width: 12px;
          height: 12px;
        }
        .swiper-pagination-bullet-active {
          background: #154e87; /* primary color */
          width: 32px;
          border-radius: 6px;
          transition: all 0.3s ease;
        }
        .swiper-button-next, .swiper-button-prev {
          color: white;
          opacity: 0.5;
          transition: opacity 0.3s;
        }
        .swiper-button-next:hover, .swiper-button-prev:hover {
          opacity: 1;
          color: #154e87;
        }
      `}</style>
    </section>
  );
};

export default Hero;
