<?php
/**
 * RutaZero functions and definitions
 */

if ( ! function_exists( 'rutazero_setup' ) ) :
    function rutazero_setup() {
        // Add theme support
        add_theme_support( 'title-tag' );
        add_theme_support( 'post-thumbnails' );
        add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption' ) );

        // Register Menus
        register_nav_menus( array(
            'primary' => __( 'Primary Menu', 'rutazero' ),
        ) );
    }
endif;
add_action( 'after_setup_theme', 'rutazero_setup' );

function rutazero_scripts() {
    // Enqueue Tailwind CDN (As per original preservation rule)
    wp_enqueue_script( 'tailwind-cdn', 'https://cdn.tailwindcss.com?plugins=forms,container-queries', array(), null, false );

    // Enqueue Google Fonts
    wp_enqueue_style( 'google-fonts', 'https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap', array(), null );
    wp_enqueue_style( 'material-symbols', 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap', array(), null );

    // Enqueue Leaflet
    wp_enqueue_style( 'leaflet-css', 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css', array(), '1.9.4' );
    wp_enqueue_script( 'leaflet-js', 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js', array(), '1.9.4', false );

    // Enqueue Swiper (used in Home.tsx usually)
    wp_enqueue_style( 'swiper-css', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css', array(), '11.0.0' );
    wp_enqueue_script( 'swiper-js', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js', array(), '11.0.0', true );

    // Enqueue Main Style
    wp_enqueue_style( 'rutazero-style', get_stylesheet_uri(), array(), '1.0.0' );
}
add_action( 'wp_enqueue_scripts', 'rutazero_scripts' );

// Add classes to menu items
function rutazero_menu_classes($classes, $item, $args) {
    if($args->theme_location == 'primary') {
        $classes[] = 'text-sm font-medium transition-colors hover:text-primary';
    }
    return $classes;
}
add_filter('nav_menu_css_class', 'rutazero_menu_classes', 1, 3);

// Add classes to menu links
function rutazero_menu_link_classes($atts, $item, $args) {
    if($args->theme_location == 'primary') {
        $atts['class'] = 'text-sm font-medium transition-colors hover:text-primary';
        if (in_array('current-menu-item', $item->classes)) {
            $atts['class'] .= ' text-primary';
        } else {
            $atts['class'] .= ' text-slate-900';
        }
    }
    return $atts;
}
add_filter('nav_menu_link_attributes', 'rutazero_menu_link_classes', 10, 3);

// Filter to add tailwind config script after tailwind cdn
function rutazero_tailwind_config() {
    ?>
    <script>
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              primary: "#154e87",
              secondary: "#e1af4a",
              "background-dark": "#ffffff",
              "accent-dark": "#CBD5E1",
              "card-dark": "#F1F5F9",
              "text-muted": "#64748b",
              "text-main": "#0f172a",
            },
            fontFamily: {
              sans: ["Manrope", "sans-serif"],
            },
          },
        },
      };
    </script>
    <style>
      body {
        background-color: #ffffff;
        color: #0f172a;
        scrollbar-width: thin;
        scrollbar-color: #154e87 #ffffff;
      }
      .masonry-grid {
        column-count: 1;
        column-gap: 1.5rem;
      }
      @media (min-width: 768px) {
        .masonry-grid {
          column-count: 2;
        }
      }
      @media (min-width: 1024px) {
        .masonry-grid {
          column-count: 3;
        }
      }
      .masonry-item {
        break-inside: avoid;
        margin-bottom: 1.5rem;
      }
      .leaflet-container {
        background: #ffffff;
      }
    </style>
    <?php
}
add_action( 'wp_head', 'rutazero_tailwind_config', 20 );
