import React, { useState } from "react";

interface GalleryItem {
  title: string;
  cat: string;
  loc: string;
  img: string;
}

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState("Todas");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filters = ["Todas", "Minería", "Cargas Especiales", "Portuario"];

  const items: GalleryItem[] = [
    {
      title: "Chuquicamata - Fase 49",
      cat: "Minería",
      loc: "Calama",
      img: "images/camiones/1.webp",
    },
    {
      title: "Puerto San Antonio",
      cat: "Portuario",
      loc: "Valparaíso",
      img: "images/camiones/6.webp",
    },
    {
      title: "Transformadores de Alta",
      cat: "Cargas Especiales",
      loc: "Atacama",
      img: "images/camiones/8.webp",
    },
    {
      title: "Maquinaria Pesada",
      cat: "Minería",
      loc: "Antofagasta",
      img: "images/camiones/12.webp",
    },
    {
      title: "Logística Terminal",
      cat: "Portuario",
      loc: "Iquique",
      img: "images/camiones/13.webp",
    },
    {
      title: "Escolta Industrial",
      cat: "Cargas Especiales",
      loc: "Ruta 5",
      img: "images/camiones/14.webp",
    },
  ];

  const filteredItems =
    filter === "Todas" ? items : items.filter((i) => i.cat === filter);

  const closeModal = () => setSelectedItem(null);

  return (
    <div className="py-20 px-6 md:px-20 lg:px-40">
      <div className="max-w-7xl mx-auto space-y-12">
        <section className="bg-gradient-to-br from-slate-100 to-white border border-slate-200 p-12 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2"></div>
          <div className="relative z-10 space-y-4 max-w-2xl">
            <div className="flex items-center gap-2 text-primary mb-3">
              <span className="material-symbols-outlined">verified</span>
              <span className="uppercase tracking-widest text-xs font-bold">
                Excelencia Operacional
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900">
              Galería de Operaciones
            </h1>
            <p className="text-text-muted text-lg">
              Algunos de nuestros proyectos en las condiciones más extremas de
              Chile.
            </p>
          </div>
        </section>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-y border-accent-dark py-6">
          <div className="flex gap-3 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2 rounded-lg text-sm font-bold transition-all whitespace-nowrap ${
                  filter === f
                    ? "bg-primary text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 text-text-muted text-sm font-medium">
            <span className="material-symbols-outlined text-sm">
              filter_list
            </span>
            <span>Mostrando {filteredItems.length} resultados</span>
          </div>
        </div>

        <div className="masonry-grid">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedItem(item)}
              className="masonry-item group relative rounded-xl overflow-hidden bg-slate-100 cursor-pointer border border-transparent hover:border-primary/30 transition-all shadow-lg"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                <span className="text-primary text-[10px] font-bold uppercase tracking-widest bg-white/90 w-fit px-2 py-0.5 rounded-sm mb-2">
                  {item.cat}
                </span>
                <h3 className="text-white font-bold text-xl leading-tight">
                  {item.title}
                </h3>
                <p className="text-text-muted text-xs flex items-center gap-1 mt-1 font-medium">
                  <span className="material-symbols-outlined text-sm">
                    location_on
                  </span>{" "}
                  {item.loc}
                </p>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-primary text-white rounded-full size-10 flex items-center justify-center">
                  <span className="material-symbols-outlined">zoom_in</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white/95 backdrop-blur-md p-4 md:p-10 animate-in fade-in duration-300"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-slate-900 hover:text-primary transition-colors z-[110] bg-slate-200/50 p-2 rounded-full backdrop-blur-sm"
          >
            <span className="material-symbols-outlined text-4xl">close</span>
          </button>

          <div
            className="relative max-w-6xl w-full max-h-[90vh] flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-200 ring-1 ring-black/5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex-1 overflow-hidden bg-black flex items-center justify-center min-h-[40vh] md:min-h-0">
              <img
                src={selectedItem.img}
                alt={selectedItem.title}
                className="w-full h-full object-contain max-h-[80vh]"
              />
            </div>
            <div className="w-full md:w-80 p-8 flex flex-col justify-between bg-white border-t md:border-t-0 md:border-l border-slate-200">
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-primary font-black uppercase tracking-[0.2em] text-[10px]">
                    {selectedItem.cat}
                  </span>
                  <h2 className="text-3xl font-black text-slate-900 leading-tight">
                    {selectedItem.title}
                  </h2>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-text-muted">
                    <div className="size-8 rounded-lg bg-slate-100 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary">
                        location_on
                      </span>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest opacity-50">
                        Ubicación
                      </p>
                      <p className="text-sm font-bold text-slate-900">
                        {selectedItem.loc}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-text-muted">
                    <div className="size-8 rounded-lg bg-slate-100 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary">
                        verified
                      </span>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest opacity-50">
                        Estado
                      </p>
                      <p className="text-sm font-bold text-slate-900">
                        Operación Exitosa
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-accent-dark/30">
                  <p className="text-xs text-text-muted leading-relaxed">
                    Registro fotográfico de operaciones de alta complejidad en
                    terreno. Todos los procedimientos ejecutados bajo protocolos
                    ISO y SERNAGEOMIN.
                  </p>
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={closeModal}
                  className="w-full bg-primary text-white font-black py-4 rounded-xl uppercase text-xs tracking-widest hover:brightness-110 transition-all flex items-center justify-center gap-2"
                >
                  Cerrar Vista{" "}
                  <span className="material-symbols-outlined text-sm">
                    close
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
