<?php
/**
 * Template Name: Servicios
 */
get_header(); ?>

<div class="py-20 px-6 md:px-20 lg:px-40">
    <div class="max-w-7xl mx-auto space-y-16">
        <div class="max-w-3xl space-y-4">
            <span class="texto-dorado font-bold tracking-widest uppercase text-sm">Operaciones Nacionales</span>
            <h1 class="text-5xl font-black">Nuestros Servicios de Logística</h1>
        </div>

        <div class="flex flex-col gap-8">
            <?php
            $services = [
                ['title' => 'Carga Exclusiva', 'icon' => 'local_shipping', 'img' => 'assets/images/camiones/24.webp', 'desc' => 'El servicio de Carga Exclusiva está orientado a operaciones que demandan control total...'],
                ['title' => 'Carga Consolidada', 'icon' => 'precision_manufacturing', 'img' => 'assets/images/camiones/25.webp', 'desc' => 'En RutaZero, consolidar cargas va más allá de simplemente juntar y enviar pedidos...'],
                ['title' => 'Cargas en Retornos', 'icon' => 'package_2', 'img' => 'assets/images/camiones/4.webp', 'desc' => 'Nuestro servicio de Cargas en Retornos está orientado a optimizar la capacidad operativa...'],
                ['title' => 'Cargas Portuaria Consolidación y Desconsolidación', 'icon' => 'anchor', 'img' => 'assets/images/camiones/21.webp', 'desc' => 'Ofrecemos un servicio especializado de carga portuaria, consolidación y desconsolidación...'],
                ['title' => 'Urgencias', 'icon' => 'emergency_home', 'img' => 'assets/images/camiones/23.webp', 'desc' => 'Los servicios de urgencia, están diseñados para resolver imprevistos y desafíos de último momento...'],
                ['title' => 'Cargas de Sobre Dimensión', 'icon' => 'open_with', 'img' => 'assets/images/camiones/20.webp', 'desc' => 'Contamos con la experiencia y los recursos necesarios para transportar cargas sobredimensionadas...'],
            ];
            foreach ($services as $s) : ?>
                <div class="group bg-white border border-slate-200 rounded-3xl overflow-hidden transition-all hover:border-primary/50 hover:shadow-2xl grid grid-cols-1 lg:grid-cols-3">
                    <div class="relative h-64 lg:h-auto lg:col-span-1 overflow-hidden">
                        <img src="<?php echo get_template_directory_uri(); ?>/<?php echo $s['img']; ?>" alt="<?php echo $s['title']; ?>" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                        <div class="absolute bottom-6 left-6">
                            <div class="p-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl text-white inline-flex">
                                <span class="material-symbols-outlined text-3xl"><?php echo $s['icon']; ?></span>
                            </div>
                        </div>
                    </div>
                    <div class="p-8 lg:p-12 lg:col-span-2 flex flex-col justify-center space-y-4">
                        <h3 class="text-2xl font-bold group-hover:text-primary transition-colors"><?php echo $s['title']; ?></h3>
                        <p class="text-text-muted text-lg leading-relaxed"><?php echo $s['desc']; ?></p>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</div>

<?php get_footer(); ?>
