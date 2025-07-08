<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div id="page" class="site">
    <a class="skip-link screen-reader-text" href="#main"><?php esc_html_e('Skip to content', 'bepc'); ?></a>
    
    <header id="masthead" class="site-header">
        <div class="container">
            <div class="header-inner">
                <div class="site-branding">
                    <a href="<?php echo esc_url(home_url('/')); ?>" class="site-logo" rel="home">
                        Bitcoin Estate Planning Commission
                    </a>
                </div>
                
                <nav id="site-navigation" class="main-navigation">
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'primary',
                        'menu_id' => 'primary-menu',
                        'container' => false,
                        'fallback_cb' => false,
                    ));
                    ?>
                    
                    <div class="header-cta">
                        <a href="/certification/apply/" class="btn btn-primary">Get Certified</a>
                    </div>
                </nav>
                
                <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
                    <span class="menu-toggle-bar"></span>
                    <span class="menu-toggle-bar"></span>
                    <span class="menu-toggle-bar"></span>
                </button>
            </div>
        </div>
    </header>