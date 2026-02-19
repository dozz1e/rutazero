    </main>

    <!-- Floating WhatsApp -->
    <a
      href="https://wa.me/56997519715"
      target="_blank"
      rel="noopener noreferrer"
      class="fixed bottom-6 right-6 z-50 flex items-center justify-center size-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 hover:shadow-green-500/30 transition-all duration-300 group"
      aria-label="Contactar por WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        viewBox="0 0 16 16"
        class="fill-current"
      >
        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
      </svg>
      <div class="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-lg text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        ¡Escríbenos al WhatsApp!
      </div>
    </a>

    <!-- Footer -->
    <footer class="bg-accent-dark/20 border-t border-accent-dark py-12 px-6 md:px-20 lg:px-40">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <!-- Primera columna: Logo -->
          <div class="flex flex-col items-center md:items-start gap-4">
            <img
              src="<?php echo get_template_directory_uri(); ?>/assets/images/logo.webp"
              alt="Logo"
              class="w-64 h-20 object-contain"
            />
            <p class="text-text-muted text-sm text-center md:text-left">
              <?php bloginfo( 'description' ); ?>
            </p>
          </div>

          <!-- Segunda columna: Información de contacto -->
          <div class="flex flex-col gap-6">
            <h4 class="text-primary font-black uppercase tracking-widest text-sm">
              Contacto
            </h4>
            <ul class="space-y-4">
              <li>
                <a
                  href="mailto:contacto@rutazero.cl"
                  class="flex items-center gap-3 text-slate-700 hover:text-primary transition-colors group"
                >
                  <div class="size-10 bg-primary/10 flex items-center justify-center rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <span class="material-symbols-outlined text-[20px]">
                      mail
                    </span>
                  </div>
                  <span class="font-medium">contacto@rutazero.cl</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+56997519715"
                  class="flex items-center gap-3 text-slate-700 hover:text-primary transition-colors group"
                >
                  <div class="size-10 bg-primary/10 flex items-center justify-center rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <span class="material-symbols-outlined text-[20px]">
                      call
                    </span>
                  </div>
                  <span class="font-medium">+56 9 9751 9715</span>
                </a>
              </li>
            </ul>
          </div>

          <!-- Tercera columna: Dirección y Horario -->
          <div class="flex flex-col gap-6">
            <h4 class="text-primary font-black uppercase tracking-widest text-sm">
              Ubicación y Horario
            </h4>
            <ul class="space-y-4">
              <li class="flex items-start gap-3 text-slate-700">
                <div class="size-10 bg-primary/10 flex items-center justify-center rounded-lg text-primary flex-shrink-0">
                  <span class="material-symbols-outlined text-[20px]">
                    location_on
                  </span>
                </div>
                <span class="font-medium leading-tight">
                  Av. Apoquindo 6410, piso 10.
                  <br />
                  Las Condes, Santiago.
                </span>
              </li>
              <li class="flex items-start gap-3 text-slate-700">
                <div class="size-10 bg-primary/10 flex items-center justify-center rounded-lg text-primary flex-shrink-0">
                  <span class="material-symbols-outlined text-[20px]">
                    schedule
                  </span>
                </div>
                <div class="flex flex-col">
                  <span class="font-medium">Lun-Vie: 09:00 - 17:00</span>
                  <span class="text-xs text-text-muted">
                    Soporte 24/7 disponible
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="flex flex-col md:flex-row items-center justify-center gap-2 text-text-muted text-xs border-t border-accent-dark/30 pt-8">
          <p>© <?php echo date('Y'); ?> <?php bloginfo( 'name' ); ?>. Todos los derechos reservados.</p>
          <span>
            Diseñado por{" "}
            <a
              href="https://2zz.cl"
              target="_blank"
              rel="noopener noreferrer"
              class="text-primary hover:text-accent transition-colors hover:underline"
            >
              2zz.cl
            </a>
          </span>
        </div>
      </div>
    </footer>
    </div><!-- #root -->

    <script>
        // Mobile Menu Toggle
        const menuBtn = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (menuBtn && mobileMenu) {
            menuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
                const icon = menuBtn.querySelector('.material-symbols-outlined');
                if (icon) {
                    icon.textContent = mobileMenu.classList.contains('hidden') ? 'menu' : 'close';
                }
            });
        }
    </script>
    <?php wp_footer(); ?>
  </body>
</html>
