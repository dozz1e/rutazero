<?php get_header(); ?>

<!-- Hero Section -->
<section class="relative min-h-[85vh] bg-slate-900">
    <div class="swiper hero-swiper h-full min-h-[85vh]">
        <div class="swiper-wrapper">
            <!-- Slide 1 -->
            <div class="swiper-slide">
                <div class="relative h-full min-h-[85vh] flex items-center px-6 md:px-20 lg:px-40 overflow-hidden">
                    <div class="absolute inset-0 z-0">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/camiones/17.webp" alt="RutaZero Camión Minería" class="w-full h-full object-cover" />
                        <div class="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-transparent"></div>
                    </div>
                    <div class="relative z-10 max-w-3xl space-y-6">
                        <span class="texto-dorado font-bold tracking-widest text-sm uppercase">Relaciones de confianza</span>
                        <h1 class="text-5xl md:text-7xl font-black leading-tight tracking-tight text-white">
                            Movemos grandes desafíos en <span class="texto-dorado">RutaZero</span>
                        </h1>
                        <p class="text-slate-200 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
                            Especialistas en transporte de carga pesada y sobredimensión, comprometidos en la logística de alta complejidad a nivel nacional.
                        </p>
                        <div class="flex flex-wrap gap-4 pt-4">
                            <a href="<?php echo esc_url( home_url('/contacto') ); ?>" class="bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:brightness-110 transition-all flex items-center gap-2">
                                Contacto <span class="material-symbols-outlined">trending_flat</span>
                            </a>
                            <a href="<?php echo esc_url( home_url('/servicios') ); ?>" class="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all">
                                Ver Servicios
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Slide 2 -->
            <div class="swiper-slide">
                <div class="relative h-full min-h-[85vh] flex items-center px-6 md:px-20 lg:px-40 overflow-hidden">
                    <div class="absolute inset-0 z-0">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/camiones/10.webp" alt="Seguridad Logística" class="w-full h-full object-cover" />
                        <div class="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-transparent"></div>
                    </div>
                    <div class="relative z-10 max-w-3xl space-y-6">
                        <span class="texto-dorado font-bold tracking-widest text-sm uppercase">Estándares Mineros</span>
                        <h2 class="text-5xl md:text-7xl font-black leading-tight tracking-tight text-white">
                            Seguridad y Confianza en <span class="texto-dorado">Cada Kilómetro</span>
                        </h2>
                        <p class="text-slate-200 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
                            Protocolos estrictos y planificación técnica detallada para garantizar que tu carga crítica llegue segura y a tiempo a su destino.
                        </p>
                        <div class="flex flex-wrap gap-4 pt-4">
                            <a href="<?php echo esc_url( home_url('/nosotros') ); ?>" class="bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:brightness-110 transition-all flex items-center gap-2">
                                Conócenos <span class="material-symbols-outlined">group</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Slide 3 -->
            <div class="swiper-slide">
                <div class="relative h-full min-h-[85vh] flex items-center px-6 md:px-20 lg:px-40 overflow-hidden">
                    <div class="absolute inset-0 z-0">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/camiones/18.webp" alt="Cobertura Nacional" class="w-full h-full object-cover" />
                        <div class="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-transparent"></div>
                    </div>
                    <div class="relative z-10 max-w-3xl space-y-6">
                        <span class="texto-dorado font-bold tracking-widest text-sm uppercase">De Norte a Sur</span>
                        <h2 class="text-5xl md:text-7xl font-black leading-tight tracking-tight text-white">
                            Cobertura Nacional para la <span class="texto-dorado">Minería</span>
                        </h2>
                        <p class="text-slate-200 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
                            Conectamos las principales rutas del territorio nacional con una flota eficiente y conductores capacitados.
                        </p>
                        <div class="flex flex-wrap gap-4 pt-4">
                            <a href="<?php echo esc_url( home_url('/contacto') ); ?>" class="bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:brightness-110 transition-all flex items-center gap-2">
                                Contáctanos <span class="material-symbols-outlined">call</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
    </div>

    <style>
        .swiper-pagination-bullet { background: rgba(255,255,255,0.5); width: 12px; height: 12px; }
        .swiper-pagination-bullet-active { background: #154e87; width: 32px; border-radius: 6px; transition: all 0.3s ease; }
        .swiper-button-next, .swiper-button-prev { color: white; opacity: 0.5; transition: opacity 0.3s; }
        .swiper-button-next:hover, .swiper-button-prev:hover { opacity: 1; color: #154e87; }
    </style>
</section>

<!-- Section Intro -->
<section class="px-6 md:px-20 lg:px-40 py-20 bg-white">
    <div class="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <div class="flex-1 space-y-8">
            <h2 class="text-3xl md:text-4xl font-black leading-tight text-slate-900">Conectamos tu proyecto</h2>
            <div class="h-1.5 w-20 bg-primary rounded-full"></div>
            <p class="text-slate-600 text-lg leading-relaxed">
                Equipo altamente capacitado, profesional, con amplio conocimiento técnico y operativo. Cada traslado es planificado con precisión, garantizando eficiencia, control y cuidado total de la carga.
            </p>
            <a href="<?php echo esc_url( home_url('/nosotros') ); ?>" class="inline-flex items-center gap-2 text-primary font-bold border-b border-primary pb-1 hover:gap-4 transition-all">
                Conoce nuestra historia <span class="material-symbols-outlined">arrow_right_alt</span>
            </a>
        </div>
        <div class="flex-1">
            <div class="relative rounded-2xl overflow-hidden shadow-2xl group">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/inicio2.webp" alt="Truck" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div class="absolute inset-0 border-[12px] border-primary/20 pointer-events-none"></div>
            </div>
        </div>
    </div>
</section>

<!-- Values Section -->
<section class="px-6 md:px-20 lg:px-40 py-24 bg-slate-50 border-y border-slate-200">
    <div class="max-w-7xl mx-auto space-y-16">
        <div class="text-center space-y-4 max-w-2xl mx-auto">
            <span class="texto-dorado font-bold tracking-widest text-xs">Cultura RutaZero</span>
            <h2 class="text-3xl md:text-4xl font-black text-slate-900">Nuestros Valores Fundamentales</h2>
            <p class="text-slate-600">Los pilares que guían cada kilómetro de nuestra operación logística y relación con el entorno.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <?php
            $values = [
                ['icon' => 'shield_lock', 'title' => 'Seguridad', 'desc' => 'Prioridad absoluta en cada operación...', 'image' => 'assets/images/values/seguridad.webp'],
                ['icon' => 'verified_user', 'title' => 'Responsabilidad', 'desc' => 'Cumplimos con nuestros compromisos...', 'image' => 'assets/images/values/responsabilidad.webp'],
                ['icon' => 'handshake', 'title' => 'Compromiso con el cliente', 'desc' => 'Entendemos las necesidades...', 'image' => 'assets/images/values/compromiso.webp'],
                ['icon' => 'psychology', 'title' => 'Profesionalismo', 'desc' => 'Contamos con personal técnico...', 'image' => 'assets/images/values/profesionalismo.webp'],
                ['icon' => 'visibility', 'title' => 'Transparencia', 'desc' => 'Mantenemos una comunicación...', 'image' => 'assets/images/values/transparencia.webp'],
                ['icon' => 'settings_suggest', 'title' => 'Eficiencia Operativa', 'desc' => 'Optimizamos recursos...', 'image' => 'assets/images/values/eficiencia.webp'],
                ['icon' => 'group', 'title' => 'Trabajo en Equipo', 'desc' => 'Desarrollamos nuestras operaciones...', 'image' => 'assets/images/values/trabajo-en-equipo.webp'],
            ];
            foreach ($values as $v) : ?>
                <div class="relative overflow-hidden rounded-2xl p-8 gap-4 hover:shadow-2xl transition-all group shadow-xl h-full flex flex-col justify-start">
                    <div class="absolute inset-0 z-0">
                        <img src="<?php echo get_template_directory_uri(); ?>/<?php echo $v['image']; ?>" alt="<?php echo $v['title']; ?>" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div class="absolute inset-0 bg-slate-900/60 group-hover:bg-slate-900/70 transition-colors"></div>
                    </div>
                    <div class="relative z-10 size-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-white group-hover:bg-primary group-hover:text-white transition-all duration-300 border border-white/20">
                        <span class="material-symbols-outlined text-4xl"><?php echo $v['icon']; ?></span>
                    </div>
                    <div class="relative z-10 space-y-3">
                        <h3 class="text-xl font-black text-white tracking-tight"><?php echo $v['title']; ?></h3>
                        <p class="text-white text-sm leading-relaxed"><?php echo $v['desc']; ?></p>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- Principle Section -->
<section class="px-6 md:px-20 lg:px-40 py-24">
    <div class="max-w-7xl mx-auto">
        <div class="bg-white border border-slate-200 p-10 md:p-16 rounded-[2.5rem] relative overflow-hidden group shadow-2xl">
            <div class="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-700"></div>
            <div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div class="lg:col-span-5 space-y-8">
                    <div class="space-y-4">
                        <div class="flex items-center gap-3 texto-dorado">
                            <span class="material-symbols-outlined text-4xl">architecture</span>
                            <span class="tracking-[0.3em] font-black text-xs texto-dorado">Excelencia Técnica</span>
                        </div>
                        <h2 class="text-4xl md:text-5xl font-black leading-tight tracking-tighter text-slate-900">
                            Principios <br />
                            <span class="text-primary">Operativos</span>
                        </h2>
                    </div>
                    <p class="text-slate-600 text-lg font-light leading-relaxed">
                        Nuestra metodología de trabajo se basa en la planificación rigurosa y el cumplimiento de los más altos estándares de la industria logística.
                    </p>
                </div>
                <div class="lg:col-span-7 grid grid-cols-1 md:grid-cols-1 gap-4">
                    <?php
                    $principles = [
                        "Cumplimiento estricto de la normativa nacional de transporte pesado y sobredimensionado",
                        "Planificación técnica detallada y estudios de ruta previos",
                        "Gestión integral de riesgos",
                        "Mejora continua de procesos y tecnología",
                        "Trabajo en equipo y colaboración con autoridades y clientes",
                        "Ética empresarial en todas las decisiones",
                        "Cultura de prevención y seguridad vial",
                    ];
                    foreach ($principles as $i => $p) : ?>
                        <div class="flex items-center gap-5 p-4 bg-white border-primary rounded-2xl border group/item hover:shadow-lg transition-all">
                            <div class="p-2 bg-primary rounded-full flex items-center justify-center text-white group-hover/item:bg-white group-hover/item:text-primary transition-all">
                                <span class="text-xs font-black">0<?php echo $i + 1; ?></span>
                            </div>
                            <p class="text-slate-900 text-sm md:text-base font-medium tracking-tight"><?php echo $p; ?></p>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </div>
</section>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        const swiper = new Swiper('.hero-swiper', {
            effect: 'fade',
            loop: true,
            autoplay: { delay: 5000, disableOnInteraction: false },
            pagination: { el: '.swiper-pagination', clickable: true },
            navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        });
    });
</script>

<?php get_footer(); ?>
