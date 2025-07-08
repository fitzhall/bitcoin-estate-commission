<?php
/**
 * Bitcoin Estate Planning Commission Theme Functions
 *
 * @package BEPC
 */

// Security check
if (!defined('ABSPATH')) {
    exit;
}

// Theme Constants
define('BEPC_THEME_VERSION', '1.0.0');
define('BEPC_THEME_URL', get_template_directory_uri());
define('BEPC_THEME_PATH', get_template_directory());

// Theme Setup
function bepc_theme_setup() {
    // Add theme support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'script',
        'style',
    ));
    
    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'bepc'),
        'footer' => __('Footer Menu', 'bepc'),
    ));
    
    // Set content width
    if (!isset($content_width)) {
        $content_width = 1200;
    }
}
add_action('after_setup_theme', 'bepc_theme_setup');

// Enqueue Scripts and Styles
function bepc_enqueue_scripts() {
    // Google Fonts
    wp_enqueue_style('bepc-google-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Serif+Pro:wght@400;600;700&family=Roboto+Mono:wght@400;500&display=swap', array(), null);
    
    // Theme Styles
    wp_enqueue_style('bepc-style', get_stylesheet_uri(), array(), BEPC_THEME_VERSION);
    
    // Homepage specific styles
    if (is_front_page()) {
        wp_enqueue_style('bepc-homepage', BEPC_THEME_URL . '/assets/css/homepage.css', array('bepc-style'), BEPC_THEME_VERSION);
    }
    
    // Attorney directory styles
    if (is_page('find-attorney') || get_query_var('bepc_template') === 'location' || get_query_var('bepc_template') === 'attorney') {
        wp_enqueue_style('bepc-attorney-directory', BEPC_THEME_URL . '/assets/css/attorney-directory.css', array('bepc-style'), BEPC_THEME_VERSION);
    }
    
    // Main JavaScript
    wp_enqueue_script('bepc-main', BEPC_THEME_URL . '/assets/js/main.js', array('jquery'), BEPC_THEME_VERSION, true);
    
    // Localize script for AJAX
    wp_localize_script('bepc-main', 'bepc_ajax', array(
        'ajax_url' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('bepc_nonce'),
    ));
}
add_action('wp_enqueue_scripts', 'bepc_enqueue_scripts');

// Include required files
require_once BEPC_THEME_PATH . '/inc/programmatic-seo.php';
require_once BEPC_THEME_PATH . '/inc/custom-post-types.php';
require_once BEPC_THEME_PATH . '/inc/schema-markup.php';
require_once BEPC_THEME_PATH . '/inc/database-setup.php';
require_once BEPC_THEME_PATH . '/inc/template-functions.php';
require_once BEPC_THEME_PATH . '/inc/ajax-handlers.php';

// Custom Image Sizes
add_image_size('attorney-profile', 300, 300, true);
add_image_size('resource-thumbnail', 400, 250, true);

// Disable WordPress Emojis for Performance
function bepc_disable_emojis() {
    remove_action('wp_head', 'print_emoji_detection_script', 7);
    remove_action('admin_print_scripts', 'print_emoji_detection_script');
    remove_action('wp_print_styles', 'print_emoji_styles');
    remove_action('admin_print_styles', 'print_emoji_styles');
    remove_filter('the_content_feed', 'wp_staticize_emoji');
    remove_filter('comment_text_rss', 'wp_staticize_emoji');
    remove_filter('wp_mail', 'wp_staticize_emoji_for_email');
}
add_action('init', 'bepc_disable_emojis');

// Custom Excerpt Length
function bepc_excerpt_length($length) {
    return 30;
}
add_filter('excerpt_length', 'bepc_excerpt_length');

// Add Async/Defer to Scripts
function bepc_add_async_defer($tag, $handle) {
    if ('bepc-main' === $handle) {
        return str_replace(' src', ' defer src', $tag);
    }
    return $tag;
}
add_filter('script_loader_tag', 'bepc_add_async_defer', 10, 2);

// Remove Query Strings from Static Resources
function bepc_remove_query_strings($src) {
    if (strpos($src, '?ver=')) {
        $src = remove_query_arg('ver', $src);
    }
    return $src;
}
add_filter('script_loader_src', 'bepc_remove_query_strings', 15, 1);
add_filter('style_loader_src', 'bepc_remove_query_strings', 15, 1);

// Custom Body Classes
function bepc_body_classes($classes) {
    if (is_page_template('templates/template-location.php')) {
        $classes[] = 'programmatic-page';
    }
    if (is_page_template('templates/template-attorney.php')) {
        $classes[] = 'attorney-profile-page';
    }
    return $classes;
}
add_filter('body_class', 'bepc_body_classes');

// SEO Meta Tags
function bepc_add_meta_tags() {
    global $post;
    
    if (is_singular()) {
        // Basic meta tags handled by theme
        echo '<meta name="description" content="' . esc_attr(get_the_excerpt()) . '">' . "\n";
    }
    
    // Open Graph tags
    if (is_singular()) {
        echo '<meta property="og:title" content="' . esc_attr(get_the_title()) . '">' . "\n";
        echo '<meta property="og:description" content="' . esc_attr(get_the_excerpt()) . '">' . "\n";
        echo '<meta property="og:url" content="' . esc_url(get_permalink()) . '">' . "\n";
        echo '<meta property="og:type" content="article">' . "\n";
        
        if (has_post_thumbnail()) {
            $thumbnail = wp_get_attachment_image_src(get_post_thumbnail_id(), 'large');
            echo '<meta property="og:image" content="' . esc_url($thumbnail[0]) . '">' . "\n";
        }
    }
}
add_action('wp_head', 'bepc_add_meta_tags');

// Breadcrumbs Function
function bepc_breadcrumbs() {
    if (!is_home()) {
        echo '<nav class="breadcrumb">';
        echo '<a href="' . home_url() . '">Home</a>';
        echo '<span>/</span>';
        
        if (is_category() || is_single()) {
            the_category(' <span>/</span> ');
            if (is_single()) {
                echo '<span>/</span>';
                the_title();
            }
        } elseif (is_page()) {
            if ($post->post_parent) {
                $parent_id = $post->post_parent;
                $breadcrumbs = array();
                while ($parent_id) {
                    $page = get_page($parent_id);
                    $breadcrumbs[] = '<a href="' . get_permalink($page->ID) . '">' . get_the_title($page->ID) . '</a>';
                    $parent_id = $page->post_parent;
                }
                $breadcrumbs = array_reverse($breadcrumbs);
                foreach ($breadcrumbs as $crumb) {
                    echo $crumb . '<span>/</span>';
                }
            }
            echo get_the_title();
        }
        echo '</nav>';
    }
}

// Performance Optimization
function bepc_optimize_performance() {
    // Remove unnecessary WordPress features
    remove_action('wp_head', 'wp_generator');
    remove_action('wp_head', 'wlwmanifest_link');
    remove_action('wp_head', 'rsd_link');
    remove_action('wp_head', 'wp_shortlink_wp_head');
    remove_action('wp_head', 'adjacent_posts_rel_link_wp_head');
    remove_action('wp_head', 'feed_links_extra', 3);
}
add_action('init', 'bepc_optimize_performance');

// Admin Customizations
function bepc_admin_footer_text() {
    echo 'Bitcoin Estate Planning Commission - Professional WordPress Theme';
}
add_filter('admin_footer_text', 'bepc_admin_footer_text');

// Custom Login Logo
function bepc_login_logo() {
    ?>
    <style type="text/css">
        #login h1 a, .login h1 a {
            background-image: none;
            height: 65px;
            width: 320px;
            background-size: 320px 65px;
            background-repeat: no-repeat;
            padding-bottom: 30px;
            font-family: 'Source Serif Pro', serif;
            font-size: 32px;
            font-weight: 700;
            color: #1B365D;
            text-decoration: none;
            text-indent: 0;
            line-height: 1.2;
        }
        #login h1 a:after, .login h1 a:after {
            content: 'BEPC Admin';
        }
    </style>
    <?php
}
add_action('login_enqueue_scripts', 'bepc_login_logo');

// Initialize Theme
function bepc_init() {
    // Flush rewrite rules if needed
    if (get_option('bepc_flush_rewrite_rules')) {
        flush_rewrite_rules();
        delete_option('bepc_flush_rewrite_rules');
    }
}
add_action('init', 'bepc_init');