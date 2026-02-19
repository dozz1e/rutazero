<?php
/**
 * Template Name: Galería
 */
get_header(); ?>

<div class="py-20 px-6 md:px-20 lg:px-40">
    <div class="max-w-7xl mx-auto space-y-12">
        <section class="bg-gradient-to-br from-slate-100 to-white border border-slate-200 p-12 rounded-2xl relative overflow-hidden">
            <div class="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2"></div>
            <div class="relative z-10 space-y-4 max-w-2xl">
                <div class="flex items-center gap-2 text-primary mb-3">
                    <span class="material-symbols-outlined texto-dorado">verified</span>
                    <span class="uppercase tracking-widest text-xs font-bold texto-dorado">Excelencia Operacional</span>
                </div>
                <h1 class="text-4xl md:text-5xl font-black text-slate-900">Galería de Imágenes</h1>
                <p class="text-text-muted text-lg">Nuestros proyectos en todo Chile.</p>
            </div>
        </section>

        <div class="masonry-grid" id="gallery-grid">
            <?php
            $images = [
                "assets/images/camiones/20.webp",
                "assets/images/camiones/22.webp",
                "assets/images/camiones/23.webp",
                "assets/images/camiones/8.webp",
                "assets/images/camiones/25.webp",
                "assets/images/camiones/19.webp",
                "assets/images/camiones/21.webp",
                "assets/images/camiones/24.webp",
                "assets/images/camiones/6.webp",
                "assets/images/camiones/14.webp",
            ];
            foreach ($images as $idx => $img) : ?>
                <div class="masonry-item group relative rounded-xl overflow-hidden bg-slate-100 cursor-pointer border border-transparent hover:border-primary/30 transition-all shadow-lg gallery-trigger" data-img="<?php echo get_template_directory_uri(); ?>/<?php echo $img; ?>">
                    <img src="<?php echo get_template_directory_uri(); ?>/<?php echo $img; ?>" alt="Operación <?php echo $idx + 1; ?>" class="w-full h-auto transition-transform duration-700 group-hover:scale-110" />
                    <div class="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-all duration-300 flex items-center justify-center">
                        <div class="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 text-primary rounded-full size-12 flex items-center justify-center shadow-xl">
                            <span class="material-symbols-outlined text-2xl">zoom_in</span>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</div>

<!-- Simple Lightbox Modal -->
<div id="lightbox" class="hidden fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/95 backdrop-blur-md p-4">
    <button id="close-lightbox" class="absolute top-6 right-6 text-white hover:text-primary transition-colors z-[110] bg-white/10 p-2 rounded-full backdrop-blur-sm">
        <span class="material-symbols-outlined text-4xl">close</span>
    </button>
    <div class="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center">
        <img id="lightbox-img" src="" alt="Operación ampliada" class="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl" />
    </div>
</div>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        const triggers = document.querySelectorAll('.gallery-trigger');
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const closeBtn = document.getElementById('close-lightbox');

        triggers.forEach(trigger => {
            trigger.addEventListener('click', () => {
                const imgUrl = trigger.getAttribute('data-img');
                lightboxImg.src = imgUrl;
                lightbox.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            });
        });

        const closeLightbox = () => {
            lightbox.classList.add('hidden');
            lightboxImg.src = '';
            document.body.style.overflow = '';
        };

        closeBtn.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });
    });
</script>

<?php get_footer(); ?>
