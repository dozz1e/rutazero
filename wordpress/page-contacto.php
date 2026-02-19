<?php
/**
 * Template Name: Contacto
 */
get_header(); ?>

<div class="py-20 px-6 md:px-20 lg:px-40">
    <div class="max-w-7xl mx-auto space-y-16">
        <div class="max-w-3xl space-y-4">
            <span class="texto-dorado font-bold tracking-widest uppercase text-sm">Contáctanos</span>
            <h1 class="text-4xl md:text-5xl font-black">Contacto y Solicitud de Cotización</h1>
            <p class="text-text-muted text-lg max-w-xl">
                Especialistas en logística de alta complejidad y transporte de maquinaria pesada. Operamos en todo el territorio nacional.
            </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <!-- Form Column -->
            <div class="lg:col-span-7 bg-primary border border-blue-500 p-10 rounded-2xl">
                <h3 class="text-xl font-bold mb-8 flex items-center gap-2 text-white">
                    <span class="material-symbols-outlined text-white">description</span>
                    Detalles del Requerimiento
                </h3>
                <form id="rutazero-contact-form" class="space-y-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="space-y-2">
                            <label class="text-white text-xs font-bold uppercase tracking-widest">Nombre</label>
                            <input type="text" name="nombre" placeholder="Ej: Juan Pérez" required class="w-full h-12 bg-slate-100 border-none rounded-lg text-slate-900 focus:ring-1 focus:ring-primary placeholder:text-text-muted/40 px-4 outline-none" />
                        </div>
                        <div class="space-y-2">
                            <label class="text-white text-xs font-bold uppercase tracking-widest">Empresa</label>
                            <input type="text" name="empresa" placeholder="Nombre de la compañía" class="w-full h-12 bg-slate-100 border-none rounded-lg text-slate-900 focus:ring-1 focus:ring-primary placeholder:text-text-muted/40 px-4 outline-none" />
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="space-y-2">
                            <label class="text-white text-xs font-bold uppercase tracking-widest">Correo Electrónico</label>
                            <input type="email" name="email" placeholder="contacto@empresa.cl" required class="w-full h-12 bg-slate-100 border-none rounded-lg text-slate-900 focus:ring-1 focus:ring-primary placeholder:text-text-muted/40 px-4 outline-none" />
                        </div>
                        <div class="space-y-2">
                            <label class="text-white text-xs font-bold uppercase tracking-widest">Teléfono de Contacto</label>
                            <input type="tel" name="telefono" placeholder="+56 9 XXXX XXXX" class="w-full h-12 bg-slate-100 border-none rounded-lg text-slate-900 focus:ring-1 focus:ring-primary placeholder:text-text-muted/40 px-4 outline-none" />
                        </div>
                    </div>
                    <div class="space-y-2">
                        <label class="text-white text-xs font-bold uppercase tracking-widest">Detalle del Requerimiento</label>
                        <textarea name="mensaje" rows="5" placeholder="Describa dimensiones, peso aproximado y ruta..." required class="w-full bg-slate-100 border-none rounded-lg text-slate-900 focus:ring-1 focus:ring-primary p-4 placeholder:text-text-muted/40 outline-none resize-none"></textarea>
                    </div>
                    <div class="flex items-center gap-3">
                        <input type="checkbox" required class="rounded bg-white/20 border-none text-primary focus:ring-primary size-5" />
                        <span class="text-blue-100 text-sm">Acepto los términos de privacidad y procesamiento de datos.</span>
                    </div>
                    
                    <div id="form-message" class="hidden p-4 rounded-lg text-sm font-bold"></div>

                    <button type="submit" class="w-full md:w-max px-12 h-14 bg-white text-primary font-black rounded-lg hover:brightness-110 transition-all flex items-center justify-center gap-2">
                        <span id="btn-text">Enviar Solicitud</span>
                        <span class="material-symbols-outlined">send</span>
                    </button>
                </form>
            </div>

            <!-- Info Column -->
            <div class="lg:col-span-5 flex flex-col gap-12">
                <div class="space-y-8">
                    <?php
                    $info_items = [
                        ['icon' => 'location_on', 'title' => 'Dirección Comercial', 'desc' => 'Av. Apoquindo 6410, piso 10. Las Condes, Santiago.'],
                        ['icon' => 'call', 'title' => 'Atención Comercial', 'desc' => '+56 9 97519715 | contacto@rutazero.cl'],
                        ['icon' => 'schedule', 'title' => 'Horario', 'desc' => "Lun-Vie: 09:00 - 17:00\nSoporte 24/7"],
                    ];
                    foreach ($info_items as $info) : ?>
                        <div class="flex gap-4">
                            <div class="size-12 bg-primary/20 flex items-center justify-center rounded-xl text-primary flex-shrink-0">
                                <span class="material-symbols-outlined"><?php echo $info['icon']; ?></span>
                            </div>
                            <div>
                                <h4 class="font-bold text-lg"><?php echo $info['title']; ?></h4>
                                <p class="text-text-muted leading-relaxed whitespace-pre-line"><?php echo $info['desc']; ?></p>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>

                <!-- Dynamic Map Container -->
                <div class="flex-1 bg-white border border-slate-200 rounded-2xl overflow-hidden relative group shadow-2xl min-h-[400px]">
                    <div id="contact-map" class="w-full h-full z-0"></div>
                    <div class="absolute top-4 left-4 z-[400] pointer-events-none">
                        <span class="bg-white/90 px-4 py-1.5 rounded-full border border-primary/30 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest backdrop-blur-sm shadow-xl">
                            <span class="material-symbols-outlined text-primary text-xs">radar</span>
                            Cobertura Operacional
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        // Form Submission
        const form = document.getElementById('rutazero-contact-form');
        const formMessage = document.getElementById('form-message');
        const btnText = document.getElementById('btn-text');

        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Reset message
                formMessage.classList.add('hidden');
                formMessage.classList.remove('bg-green-500/20', 'text-green-100', 'bg-red-500/20', 'text-red-100');
                
                // Loading state
                const originalBtnText = btnText.textContent;
                btnText.textContent = 'Enviando...';
                form.querySelector('button[type="submit"]').disabled = true;

                const formData = new FormData(form);

                fetch('<?php echo get_template_directory_uri(); ?>/send-contact.php', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    formMessage.textContent = data.message;
                    formMessage.classList.remove('hidden');
                    
                    if (data.status === 'success') {
                        formMessage.classList.add('bg-green-500/20', 'text-green-100');
                        form.reset();
                    } else {
                        formMessage.classList.add('bg-red-500/20', 'text-red-100');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    formMessage.textContent = 'Hubo un problema al conectar con el servidor.';
                    formMessage.classList.remove('hidden');
                    formMessage.classList.add('bg-red-500/20', 'text-red-100');
                })
                .finally(() => {
                    btnText.textContent = originalBtnText;
                    form.querySelector('button[type="submit"]').disabled = false;
                });
            });
        }

        // Map initialization
        if (typeof L === 'undefined') return;

        const map = L.map('contact-map', {
            center: [-28.0, -70.0],
            zoom: 3,
            zoomControl: false,
            attributionControl: false,
        });

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
        L.control.zoom({ position: "bottomright" }).addTo(map);

        const locations = [
            { name: "Arica", coords: [-18.47, -70.25], desc: "Arica" },
            { name: "Chiloé", coords: [-42.5, -73.75], desc: "Chiloé" },
        ];

        const customIcon = L.divIcon({
            className: "custom-div-icon",
            html: `<div style="background-color: #f4c025; width: 12px; height: 12px; border-radius: 50%; border: 2px solid #181611; box-shadow: 0 0 10px #f4c025;"></div>`,
            iconSize: [12, 12],
            iconAnchor: [6, 6],
        });

        locations.forEach((loc) => {
            L.marker(loc.coords, { icon: customIcon })
                .addTo(map)
                .bindPopup(`<div class="p-2"><b class="text-primary uppercase tracking-tighter">${loc.name}</b><br/><span class="text-xs opacity-80">${loc.desc}</span></div>`);

            L.circle(loc.coords, {
                color: "#f4c025",
                fillColor: "#f4c025",
                fillOpacity: 0.1,
                radius: 150000,
                weight: 1,
            }).addTo(map);
        });
    });
</script>

<?php get_footer(); ?>
