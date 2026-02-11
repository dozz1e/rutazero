import React from "react";

const Services: React.FC = () => {
  const services = [
    {
      title: "Carga Exclusiva",
      desc: "El servicio de Carga Exclusiva está orientado a operaciones que demandan control total del trayecto y tiempos de entrega definidos, garantizando que cada unidad sea utilizada exclusivamente para una sola carga, sin consolidaciones ni trasbordos. Contamos con una flota especializada para la ejecución del servicio de manera rápida, eficiente y segura, mediante protocolos certificados de carga y sujeción, monitoreo permanente y coordinación directa con el cliente durante todo el proceso, permitiendo ajustarse a las características técnicas, dimensiones y peso de cada proyecto, bajo una planificación integral que considera rutas, condiciones viales y normativa vigente.",
      icon: "local_shipping",
      img: "images/camiones/22.webp",
    },
    {
      title: "Carga Consolidada",
      desc: "En RutaZero, consolidar cargas va más allá de simplemente juntar y enviar pedidos, es un proceso estratégico cuidadosamente planificado para ofrecer la mejor solución de transporte. Nuestro enfoque está centrado en maximizar la eficiencia del espacio disponible en nuestros equipos, adaptándonos a las necesidades específicas de cada cliente, lo que permite evitar el costo de un camión completo. De esta manera, no solo optimizamos los costos logísticos, sino que también mejoramos la sostenibilidad del proceso, garantizando que tu carga llegue de forma segura y en los tiempos acordados.",
      icon: "precision_manufacturing",
      img: "images/camiones/3.webp",
    },
    {
      title: "Cargas en Retornos",
      desc: "Nuestro servicio de Cargas en Retornos está orientado a optimizar la capacidad operativa de nuestra flota y ofrecer a nuestros clientes tarifas altamente competitivas, aprovechando la disponibilidad de equipos que se encuentran en tránsito de regreso desde distintos puntos del país. Asignamos de manera estratégica la capacidad disponible de nuestras unidades en ruta, evaluando variables técnicas como dimensiones, peso, compatibilidad de carga, tiempos de entrega y condiciones operativas del trayecto. Este enfoque nos permite integrar cargas de forma segura y eficiente, manteniendo los mismos estándares de control, sujeción y cumplimiento normativo que en cualquier operación dedicada.",
      icon: "package_2",
      img: "images/camiones/4.webp",
    },
    {
      title: "Cargas Portuaria Consolidación y Desconsolidación",
      desc: "Ofrecemos un servicio especializado de carga portuaria, consolidación y desconsolidación, enfocado en una gestión eficiente y segura de mercancías vinculadas al comercio exterior, considerando la coordinación con terminales portuarios, el manejo de documentación correspondiente y la correcta. Realizamos el retiro de cargas y contenedores de 20 y 40 pies directamente desde los puertos de Valparaíso y San Antonio, coordinando su traslado hacia cualquier punto del país, según los requerimientos operativos de cada cliente.",
      icon: "anchor",
      img: "images/camiones/21.webp",
    },
    {
      title: "Urgencias",
      desc: "Los servicios de urgencia, están diseñados para resolver imprevistos y desafíos de último momento en el traslado de carga pesada y sobredimensionada. Nuestra flota y equipo están disponibles en todo momento para garantizar entregas rápidas, seguras y confiables, sin comprometer la integridad de la carga ni los estándares de seguridad vial. Cada operación de urgencia se planifica de manera inmediata, evaluando rutas, restricciones, características de la carga y coordinación con escoltas o permisos especiales cuando corresponda. Esto nos permite minimizar tiempos de espera, optimizar recursos y cumplir con los compromisos críticos de nuestros clientes, convirtiéndonos en un socio logístico confiable incluso en situaciones de alta presión.",
      icon: "emergency_home",
      img: "images/camiones/10.webp",
    },
    {
      title: "Cargas de Sobre Dimensión",
      desc: "Contamos con la experiencia y los recursos necesarios para transportar cargas sobredimensionadas, asegurando que tu proyecto se realice de manera eficiente y segura. Ofrecemos una optimización de cargas y rutas de traslado, adaptándonos a las características específicas de cada carga. Brindamos seguro complementario que garantiza el valor de la carga desde el primer momento, protegiéndola durante todo el trayecto. Nos encargamos de gestionar todos los permisos necesarios, Dirección de Vialidad como autopistas. Para cargas que superan los 3,6 metros de ancho, coordinamos el apoyo de escolta policial durante el traslado, asegurando que se cumpla con los protocolos de seguridad. Realizamos estudios de ruta para cargas de más de 4,49 metros de ancho y, cuando la carga es igual o superior a 4,5 metros, proporcionamos vehículos de apoyo para garantizar la seguridad del transporte. Además, mantenemos a nuestros clientes informados con actualizaciones en tiempo real sobre la ubicación, brindando total transparencia y tranquilidad durante todo el proceso.Final del formulario",
      icon: "open_with",
      img: "images/camiones/20.webp",
    },
  ];

  return (
    <div className="py-20 px-6 md:px-20 lg:px-40">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="max-w-3xl space-y-4">
          <span className="texto-dorado font-bold tracking-widest uppercase text-sm">
            Operaciones Nacionales
          </span>
          <h1 className="text-5xl font-black">
            Nuestros Servicios de Logística
          </h1>
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
                <p
                  className="text-text-muted text-lg leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: s.desc }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
