import React, { useEffect, useRef, useState } from "react";
import SEO from "../components/SEO";

// Declare Leaflet global variable to avoid TS errors
declare var L: any;

const Contact: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);

  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string | null;
  }>({ type: null, message: null });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: null });

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://rutazero.cl/send-contact.php", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.status === "success") {
        setStatus({ type: "success", message: data.message });
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus({ type: "error", message: data.message });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Hubo un problema al conectar con el servidor.",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    // Initialize map centered on Chile
    mapRef.current = L.map(mapContainerRef.current, {
      center: [-28.0, -70.0],
      zoom: 3,
      zoomControl: false,
      attributionControl: false,
    });

    // Add Dark Mode Tile Layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
      mapRef.current,
    );

    // Zoom buttons to bottom right
    L.control.zoom({ position: "bottomright" }).addTo(mapRef.current);

    // RutaZero Office Locations
    const locations = [
      {
        name: "Arica",
        coords: [-18.47, -70.25],
        desc: "Arica",
      },
      {
        name: "Chiloé",
        coords: [-42.5, -73.75],
        desc: "Chiloé",
      },
    ];

    // Create a custom icon
    const customIcon = L.divIcon({
      className: "custom-div-icon",
      html: `<div style="background-color: #f4c025; width: 12px; height: 12px; border-radius: 50%; border: 2px solid #181611; box-shadow: 0 0 10px #f4c025;"></div>`,
      iconSize: [12, 12],
      iconAnchor: [6, 6],
    });

    // Add markers and circles for service areas
    locations.forEach((loc) => {
      L.marker(loc.coords, { icon: customIcon })
        .addTo(mapRef.current)
        .bindPopup(
          `<div class="p-2"><b class="text-primary uppercase tracking-tighter">${loc.name}</b><br/><span class="text-xs opacity-80">${loc.desc}</span></div>`,
        );

      // Represent service area radius
      L.circle(loc.coords, {
        color: "#f4c025",
        fillColor: "#f4c025",
        fillOpacity: 0.1,
        radius: 150000, // 150km service radius
        weight: 1,
      }).addTo(mapRef.current);
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div className="py-20 px-6 md:px-20 lg:px-40">
      <SEO
        title="Contacto y Cotización"
        description="Solicita tu presupuesto para transporte de carga pesada y sobredimensionada. Atención rápida y personalizada para proyectos logísticos en todo Chile."
      />
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="max-w-3xl space-y-4">
          <span className="texto-dorado font-bold tracking-widest uppercase text-sm">
            Contáctanos
          </span>
          <h1 className="text-4xl md:text-5xl font-black">
            Contacto y Solicitud de Cotización
          </h1>
          <p className="text-text-muted text-lg max-w-xl">
            Especialistas en logística de alta complejidad y transporte de
            maquinaria pesada. Operamos en todo el territorio nacional.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Form Column */}
          <div className="lg:col-span-7 bg-primary border border-blue-500 p-10 rounded-2xl">
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2 text-white">
              <span className="material-symbols-outlined text-white">
                description
              </span>
              Detalles del Requerimiento
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-white text-xs font-bold uppercase tracking-widest">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    required
                    placeholder="Ej: Juan Pérez"
                    className="w-full h-12 bg-slate-100 border-none rounded-lg text-slate-900 focus:ring-1 focus:ring-primary placeholder:text-text-muted/40 px-4 outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-white text-xs font-bold uppercase tracking-widest">
                    Empresa
                  </label>
                  <input
                    type="text"
                    name="empresa"
                    placeholder="Nombre de la compañía"
                    className="w-full h-12 bg-slate-100 border-none rounded-lg text-slate-900 focus:ring-1 focus:ring-primary placeholder:text-text-muted/40 px-4 outline-none"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-white text-xs font-bold uppercase tracking-widest">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="contacto@empresa.cl"
                    className="w-full h-12 bg-slate-100 border-none rounded-lg text-slate-900 focus:ring-1 focus:ring-primary placeholder:text-text-muted/40 px-4 outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-white text-xs font-bold uppercase tracking-widest">
                    Teléfono de Contacto
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    placeholder="+56 9 XXXX XXXX"
                    className="w-full h-12 bg-slate-100 border-none rounded-lg text-slate-900 focus:ring-1 focus:ring-primary placeholder:text-text-muted/40 px-4 outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-white text-xs font-bold uppercase tracking-widest">
                  Detalle del Requerimiento
                </label>
                <textarea
                  name="mensaje"
                  required
                  rows={5}
                  placeholder="Describa dimensiones, peso aproximado y ruta..."
                  className="w-full bg-slate-100 border-none rounded-lg text-slate-900 focus:ring-1 focus:ring-primary p-4 placeholder:text-text-muted/40 outline-none resize-none"
                />
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  required
                  className="rounded bg-white/20 border-none text-primary focus:ring-primary size-5"
                />
                <span className="text-blue-100 text-sm">
                  Acepto los términos de privacidad y procesamiento de datos.
                </span>
              </div>

              {status.message && (
                <div
                  className={`p-4 rounded-lg text-sm font-bold ${
                    status.type === "success"
                      ? "bg-green-500/20 text-green-100"
                      : "bg-red-500/20 text-red-100"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full md:w-max px-12 h-14 bg-white text-primary font-black rounded-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? "Enviando..." : "Enviar Solicitud"}
                <span className="material-symbols-outlined">send</span>
              </button>
            </form>
          </div>

          {/* Info Column */}
          <div className="lg:col-span-5 flex flex-col gap-12">
            <div className="space-y-8">
              {[
                {
                  icon: "location_on",
                  title: "Dirección Comercial",
                  desc: "Av. Apoquindo 6410, piso 10. Las Condes, Santiago.",
                },
                {
                  icon: "call",
                  title: "Atención Comercial",
                  desc: "+56 9 97519715 | contacto@rutazero.cl",
                },
                {
                  icon: "schedule",
                  title: "Horario",
                  desc: "Lun-Vie: 09:00 - 17:00 | Soporte 24/7",
                },
              ].map((info, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="size-12 bg-primary/20 flex items-center justify-center rounded-xl text-primary flex-shrink-0">
                    <span className="material-symbols-outlined">
                      {info.icon}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{info.title}</h4>
                    <p className="text-text-muted leading-relaxed whitespace-pre-line">
                      {info.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Dynamic Map Container */}
            <div className="flex-1 bg-white border border-slate-200 rounded-2xl overflow-hidden relative group shadow-2xl min-h-[400px]">
              <div ref={mapContainerRef} className="w-full h-full z-0" />
              <div className="absolute top-4 left-4 z-[400] pointer-events-none">
                <span className="bg-white/90 px-4 py-1.5 rounded-full border border-primary/30 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest backdrop-blur-sm shadow-xl">
                  <span className="material-symbols-outlined text-primary text-xs">
                    radar
                  </span>
                  Cobertura Operacional
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
