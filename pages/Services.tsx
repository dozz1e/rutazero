import React from "react";

const Services: React.FC = () => {
  const services = [
    {
      title: "Carga Exclusiva",
      desc: "Si necesitas que tu carga llegue de manera rápida, efectiva y segura a algún punto del territorio nacional contamos con el equipo necesario para asegurar el compromiso que tengas con tu cliente.",
      icon: "local_shipping",
      img: "images/camiones/2.webp",
    },
    {
      title: "Carga Consolidada",
      desc: "En RutaZero, consolidar cargas no es simplemente juntar y enviar pedidos, es una tarea estratégica en donde buscamos el espacio indicado para tu necesidad evitando el uso de un camio completo y cancelando solo el espacio que ocupa tu carga.",
      icon: "precision_manufacturing",
      img: "images/camiones/3.webp",
    },
    {
      title: "Cargas en Retornos",
      desc: "Asignamos la capacidad disponible de nuestros equipos en ruta desde cualquier punto del país aprovechando su retorno a tarifas convenientes.",
      icon: "package_2",
      img: "images/camiones/4.webp",
    },
    {
      title: "Cargas Portuaria Consolidación y Desconsolidación",
      desc: "Retiramos cargas y contenedores de 20 y 40 pies desde el puerto de Valparaíso y San Antonio con despacho a cualquier punto del territorio nacional.",
      icon: "anchor",
      img: "images/camiones/5.webp",
    },
    {
      title: "Urgencias",
      desc: "Servicios de transporte 24/7 para solucionar imprevistos y desafíos de último momento.",
      icon: "emergency_home",
      img: "images/camiones/10.webp",
    },
  ];

  const specialService = {
    title: "Cargas de Sobre Dimensión",
    desc: "Si tu proyecto contempla cargas con dimensiones extraordinarias tenemos lo necesario para llevarlo a cabo.",
    icon: "open_with",
    img: "images/camiones/12.webp",
    details: [
      "Optimización de cargas y rutas de traslado.",
      "Seguro de cargas complementarios que garantiza el valor de la carga por el monto de esta desde el primer momento.",
      "Nos encargamos de contar con todos los permisos exigidos por la Dirección de Vialidad (pago de sobrepeso) y de las Autopistas (pago de boletas de garantía).",
      "Dentro del servicio de traslado para cargas de más de 3,6 metros de ancho, gestionamos y coordinamos el apoyo de escolta policial durante todo el trayecto.",
      "Solicitud, aprobación y tramitación de permisos viales.",
      "Estudio de ruta para carga sobre 4,49 metros de ancho.",
      "Dentro del servicio de traslado para cargas mayor o igual a 4,5 mts de ancho, Cargas Especiales proporciona un vehículo de apoyo para velar por la seguridad del traslado durante todo el trayecto.",
      "Para garantizar la seguridad de tu carga entregamos Información en tiempo real de su ubicación.",
    ],
  };

  return (
    <div className="py-20 px-6 md:px-20 lg:px-40">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="max-w-3xl space-y-4">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">
            Operaciones Nacionales
          </span>
          <h1 className="text-5xl font-black">
            Nuestros Servicios de Logística
          </h1>
        </div>
        {/* Special Service Full Width Card */}
        <div className="mt-16 group bg-white border border-slate-200 rounded-3xl overflow-hidden transition-all hover:border-primary/50 hover:shadow-2xl grid grid-cols-1 lg:grid-cols-3">
          <div className="relative h-64 lg:h-auto lg:col-span-1 overflow-hidden">
            <img
              src={specialService.img}
              alt={specialService.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
            <div className="absolute bottom-6 left-6">
              <div className="p-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl text-white inline-flex">
                <span className="material-symbols-outlined text-3xl">
                  {specialService.icon}
                </span>
              </div>
            </div>
          </div>
          <div className="p-8 lg:p-12 lg:col-span-2 flex flex-col justify-center space-y-4">
            <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
              {specialService.title}
            </h3>
            <p className="text-text-muted text-lg leading-relaxed">
              {specialService.desc}
            </p>
            <ul className="space-y-4 pt-2">
              {specialService.details.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1 shrink-0">
                    check_circle
                  </span>
                  <span className="text-sm leading-relaxed text-text-muted">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Regular Services List */}
        <div className="flex flex-col gap-8">
          {services.map((s, idx) => (
            <div
              key={idx}
              className="group bg-white border border-slate-200 rounded-3xl overflow-hidden transition-all hover:border-primary/50 hover:shadow-2xl grid grid-cols-1 lg:grid-cols-3"
            >
              <div className="relative h-64 lg:h-auto lg:col-span-1 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-6 left-6">
                  <div className="p-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl text-white inline-flex">
                    <span className="material-symbols-outlined text-3xl">
                      {s.icon}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-8 lg:p-12 lg:col-span-2 flex flex-col justify-center space-y-4">
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                  {s.title}
                </h3>
                <p className="text-text-muted text-lg leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
