import React, { useState } from "react";
import SEO from "../components/SEO";

interface GalleryItem {
  title: string;
  cat: string;
  loc: string;
  img: string;
}

const Gallery: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const images: string[] = [
    "images/camiones/20.webp",
    "images/camiones/22.webp",
    "images/camiones/23.webp",
    "images/camiones/8.webp",
    "images/camiones/25.webp",
    "images/camiones/19.webp",
    "images/camiones/21.webp",
    "images/camiones/24.webp",
    "images/camiones/14.webp",
  ];

  return (
    <div className="py-20 px-6 md:px-20 lg:px-40">
      <SEO
        title="Galería de Proyectos"
        description="Explora nuestra galería de proyectos de transporte de carga pesada y logística minera en Chile. Equipos de vanguardia y operaciones exitosas."
        image="/images/camiones/24.webp"
      />
      <div className="max-w-7xl mx-auto space-y-12">
        <section className="bg-gradient-to-br from-slate-100 to-white border border-slate-200 p-12 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2"></div>
          <div className="relative z-10 space-y-4 max-w-2xl">
            <div className="flex items-center gap-2 text-primary mb-3">
              <span className="material-symbols-outlined texto-dorado">
                verified
              </span>
              <span className="uppercase tracking-widest text-xs font-bold texto-dorado">
                Excelencia Operacional
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900">
              Galería de Imágenes
            </h1>
            <p className="text-text-muted text-lg">
              Nuestros proyectos en todo Chile.
            </p>
          </div>
        </section>

        <div className="masonry-grid">
          {images.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImg(img)}
              className="masonry-item group relative rounded-xl overflow-hidden bg-slate-100 cursor-pointer border border-transparent hover:border-primary/30 transition-all shadow-lg"
            >
              <img
                src={img}
                alt={`Operación ${idx + 1}`}
                className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 text-primary rounded-full size-12 flex items-center justify-center shadow-xl">
                  <span className="material-symbols-outlined text-2xl">
                    zoom_in
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/95 backdrop-blur-md p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImg(null)}
        >
          <button
            onClick={() => setSelectedImg(null)}
            className="absolute top-6 right-6 text-white hover:text-primary transition-colors z-[110] bg-white/10 p-2 rounded-full backdrop-blur-sm"
          >
            <span className="material-symbols-outlined text-4xl">close</span>
          </button>

          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImg}
              alt="Operación ampliada"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
