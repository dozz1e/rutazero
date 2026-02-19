<!doctype html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <?php wp_head(); ?>
  </head>
  <body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    <div id="root" class="flex min-h-screen flex-col bg-background-dark text-slate-900 font-sans">
    
    <!-- TopBar -->
    <div class="bg-slate-900 text-slate-200 text-xs py-2 px-6 md:px-20 lg:px-40 border-b border-slate-800">
        <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
            <div class="flex items-center gap-6">
                <a href="mailto:contacto@rutazero.cl" class="flex items-center gap-2 hover:text-primary transition-colors">
                    <span class="material-symbols-outlined text-[16px]">mail</span>
                    <span>contacto@rutazero.cl</span>
                </a>
                <a href="tel:+56997519715" class="flex items-center gap-2 hover:text-primary transition-colors">
                    <span class="material-symbols-outlined text-[16px]">call</span>
                    <span>+56 9 9751 9715</span>
                </a>
            </div>
            <div class="hidden md:flex items-center gap-4 text-slate-400">
                <span>Conectamos las principales rutas </span>
            </div>
        </div>
    </div>

    <!-- Navbar -->
    <header class="sticky top-0 z-50 border-b border-accent-dark bg-background-dark/95 backdrop-blur-sm px-6 md:px-20 lg:px-40 py-4">
        <div class="flex items-center justify-between max-w-7xl mx-auto">
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="flex items-center gap-4 text-slate-900">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/logo.webp" alt="<?php bloginfo( 'name' ); ?>" class="w-50 h-16" />
            </a>

            <nav class="hidden lg:flex items-center gap-9">
                <?php
                wp_nav_menu( array(
                    'theme_location' => 'primary',
                    'container'      => false,
                    'menu_class'     => 'hidden lg:flex items-center gap-9',
                    'items_wrap'      => '%3$s', // This keeps strictly the links if needed, but we might need a custom walker for exact formatting
                    'fallback_cb'    => false,
                ) );
                ?>
                <!-- We might need to manually handle the Contact button if it's not in the menu or hardcoded -->
                <a href="<?php echo esc_url( home_url( '/contacto' ) ); ?>" class="flex min-w-[120px] cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold transition-all hover:brightness-110">
                    Contacto
                </a>
            </nav>

            <button id="mobile-menu-button" class="lg:hidden text-slate-900">
                <span class="material-symbols-outlined">menu</span>
            </button>
        </div>

        <!-- Mobile Menu (Hidden by default, will need a small JS script to toggle) -->
        <div id="mobile-menu" class="hidden lg:hidden absolute top-full left-0 w-full bg-background-dark border-b border-accent-dark p-6 flex flex-col gap-4">
            <?php
            wp_nav_menu( array(
                'theme_location' => 'primary',
                'container'      => false,
                'menu_class'     => 'flex flex-col gap-4',
                'items_wrap'      => '%3$s',
                'fallback_cb'    => false,
            ) );
            ?>
            <a href="<?php echo esc_url( home_url( '/contacto' ) ); ?>" class="w-full h-12 bg-primary text-white flex items-center justify-center rounded-lg font-bold">
                Contacto
            </a>
        </div>
    </header>

    <main class="flex-1">
