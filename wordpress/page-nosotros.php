<?php
/**
 * Template Name: Nosotros
 */
get_header(); ?>

<div class="pt-20 px-6 md:px-20 lg:px-40 space-y-32">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div class="space-y-8">
            <div class="space-y-4">
                <h2 class="texto-dorado text-sm font-bold tracking-widest uppercase">Nuestra Identidad</h2>
                <h1 class="text-4xl font-black">Construimos relaciones de confianza que impulsan el desarrollo logístico del país</h1>
                <div class="h-1.5 w-20 bg-primary rounded-full"></div>
            </div>
            <div class="text-text-muted text-lg leading-relaxed space-y-6">
                <p>
                    Somos una empresa especializada en el transporte de carga pesada y sobredimensionada, con cobertura a nivel nacional. Nos comprometemos a brindar soluciones logísticas seguras, eficientes y confiables, respaldadas por una sólida trayectoria y un equipo que actúa con experiencia, profesionalismo y responsabilidad en cada operación.
                </p>
            </div>
        </div>
        <div class="relative">
            <div class="absolute -inset-4 bg-primary/10 rounded-2xl blur-xl"></div>
            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/nosotros.webp" alt="About" class="relative rounded-2xl shadow-2xl border border-accent-dark" />
        </div>
    </div>

    <section class="py-24 -mx-6 md:-mx-20 lg:-mx-40 px-6 md:px-20 lg:px-40">
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <!-- Card 1: Title & Icon with Background Image -->
            <div class="relative overflow-hidden rounded-2xl p-8 min-h-[360px] flex flex-col items-center justify-center text-center shadow-lg group">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/quienes_somos_card_bg.png" alt="Background" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div class="absolute inset-0 bg-primary/90 mix-blend-multiply"></div>
                <div class="relative z-10 flex flex-col items-center gap-6">
                    <div class="size-24 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 shadow-inner">
                        <span class="material-symbols-outlined text-white text-4xl">corporate_fare</span>
                    </div>
                    <h3 class="text-3xl font-black tracking-tighter text-white">¿Quiénes Somos?</h3>
                </div>
            </div>

            <!-- Card 2 & 3 Combined: Content -->
            <div class="bg-primary/5 border border-primary/20 p-8 rounded-2xl flex flex-col justify-center space-y-4 hover:bg-primary/10 transition-colors lg:col-span-2">
                <p class="text-text-muted text-lg leading-relaxed">
                    Nuestro <span class="font-black text-primary">equipo</span> está conformado por personal capacitado, profesional, con amplio conocimiento técnico y operativo, lo que nos permite manejar proyectos de alta complejidad cumpliendo estrictamente con las normativas de <span class="font-black text-primary">seguridad</span> y los <span class="font-black text-primary">plazos</span> establecidos. Cada traslado es planificado con precisión, garantizando eficiencia, control y <span class="font-black text-primary">cuidado</span> total de la carga.
                </p>
                <p class="text-text-muted text-lg leading-relaxed">
                    Nos distinguimos por nuestro <span class="font-black text-primary">compromiso</span> con el cliente, brindando un servicio personalizado, de <span class="font-black text-primary">calidad</span> y en permanente comunicación atendiendo cada detalle. Asumimos cada desafío con seriedad y dedicación, convirtiéndonos en un aliado estratégico para nuestros clientes en el transporte de cargas especiales, pesadas y sobredimensionadas.
                </p>
                <p class="text-text-muted text-lg leading-relaxed">
                    Trabajamos con responsabilidad, ética y <span class="font-black text-primary">vocación de servicio</span>, enfocados en generar relaciones de <span class="font-black text-primary">confianza</span> a largo plazo y en contribuir al desarrollo logístico e industrial del país.
                </p>
            </div>
        </div>

        <!-- Mission & Vision Grid -->
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div class="bg-white border border-primary p-12 rounded-2xl space-y-6">
                <div class="flex items-center gap-4">
                    <div class="size-14 bg-primary/10 rounded-xl flex items-center justify-center">
                        <span class="material-symbols-outlined text-primary text-3xl">door_front</span>
                    </div>
                    <h3 class="text-2xl font-black text-primary">Misión</h3>
                </div>
                <p class="text-text-muted text-lg leading-relaxed">
                    Entregar servicios de transporte de carga pesada y sobredimensionada a nivel nacional, con altos estándares de seguridad, eficiencia y calidad, satisfaciendo las necesidades de nuestros clientes mediante un equipo humano capacitado con tecnología adecuada y un firme compromiso con la responsabilidad y el cumplimiento.
                </p>
            </div>
            <div class="bg-white border border-primary p-12 rounded-2xl space-y-6">
                <div class="flex items-center gap-4">
                    <div class="size-14 bg-primary/10 rounded-xl flex items-center justify-center">
                        <span class="material-symbols-outlined text-primary text-3xl">analytics</span>
                    </div>
                    <h3 class="text-2xl font-black text-primary">Visión</h3>
                </div>
                <p class="text-text-muted text-lg leading-relaxed">
                    Ser una empresa líder a nivel nacional en el transporte de carga pesada y sobredimensionada, reconocida por su confiabilidad, excelencia operativa y compromiso permanente con el desarrollo logístico del país.
                </p>
            </div>
        </div>
    </section>
</div>

<?php get_footer(); ?>
