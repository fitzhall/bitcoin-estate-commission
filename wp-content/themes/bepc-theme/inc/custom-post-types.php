<?php
/**
 * Custom Post Types and Taxonomies
 *
 * @package BEPC
 */

// Security check
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Register Custom Post Types
 */
function bepc_register_post_types() {
    
    // Attorney Profiles CPT
    register_post_type('bepc_attorney', array(
        'labels' => array(
            'name' => __('Attorneys', 'bepc'),
            'singular_name' => __('Attorney', 'bepc'),
            'add_new' => __('Add New Attorney', 'bepc'),
            'add_new_item' => __('Add New Attorney', 'bepc'),
            'edit_item' => __('Edit Attorney', 'bepc'),
            'new_item' => __('New Attorney', 'bepc'),
            'view_item' => __('View Attorney', 'bepc'),
            'search_items' => __('Search Attorneys', 'bepc'),
            'not_found' => __('No attorneys found', 'bepc'),
            'not_found_in_trash' => __('No attorneys found in trash', 'bepc'),
        ),
        'public' => true,
        'has_archive' => true,
        'rewrite' => array('slug' => 'attorney'),
        'supports' => array('title', 'editor', 'thumbnail', 'custom-fields', 'revisions'),
        'menu_position' => 5,
        'menu_icon' => 'dashicons-businessman',
        'show_in_rest' => true,
    ));
    
    // Resources CPT
    register_post_type('bepc_resource', array(
        'labels' => array(
            'name' => __('Resources', 'bepc'),
            'singular_name' => __('Resource', 'bepc'),
            'add_new' => __('Add New Resource', 'bepc'),
            'add_new_item' => __('Add New Resource', 'bepc'),
            'edit_item' => __('Edit Resource', 'bepc'),
            'new_item' => __('New Resource', 'bepc'),
            'view_item' => __('View Resource', 'bepc'),
            'search_items' => __('Search Resources', 'bepc'),
            'not_found' => __('No resources found', 'bepc'),
            'not_found_in_trash' => __('No resources found in trash', 'bepc'),
        ),
        'public' => true,
        'has_archive' => true,
        'rewrite' => array('slug' => 'resources'),
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
        'menu_position' => 6,
        'menu_icon' => 'dashicons-media-document',
        'show_in_rest' => true,
    ));
    
    // Case Studies CPT
    register_post_type('bepc_case_study', array(
        'labels' => array(
            'name' => __('Case Studies', 'bepc'),
            'singular_name' => __('Case Study', 'bepc'),
            'add_new' => __('Add New Case Study', 'bepc'),
            'add_new_item' => __('Add New Case Study', 'bepc'),
            'edit_item' => __('Edit Case Study', 'bepc'),
            'new_item' => __('New Case Study', 'bepc'),
            'view_item' => __('View Case Study', 'bepc'),
            'search_items' => __('Search Case Studies', 'bepc'),
            'not_found' => __('No case studies found', 'bepc'),
            'not_found_in_trash' => __('No case studies found in trash', 'bepc'),
        ),
        'public' => true,
        'has_archive' => true,
        'rewrite' => array('slug' => 'case-studies'),
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
        'menu_position' => 7,
        'menu_icon' => 'dashicons-analytics',
        'show_in_rest' => true,
    ));
    
    // Certification Applications CPT (private)
    register_post_type('bepc_application', array(
        'labels' => array(
            'name' => __('Applications', 'bepc'),
            'singular_name' => __('Application', 'bepc'),
            'add_new' => __('Add New Application', 'bepc'),
            'add_new_item' => __('Add New Application', 'bepc'),
            'edit_item' => __('Edit Application', 'bepc'),
            'new_item' => __('New Application', 'bepc'),
            'view_item' => __('View Application', 'bepc'),
            'search_items' => __('Search Applications', 'bepc'),
            'not_found' => __('No applications found', 'bepc'),
            'not_found_in_trash' => __('No applications found in trash', 'bepc'),
        ),
        'public' => false,
        'show_ui' => true,
        'has_archive' => false,
        'supports' => array('title', 'custom-fields'),
        'menu_position' => 8,
        'menu_icon' => 'dashicons-welcome-write-blog',
        'capability_type' => array('application', 'applications'),
        'map_meta_cap' => true,
    ));
}
add_action('init', 'bepc_register_post_types');

/**
 * Register Custom Taxonomies
 */
function bepc_register_taxonomies() {
    
    // Attorney Specializations
    register_taxonomy('attorney_specialization', 'bepc_attorney', array(
        'labels' => array(
            'name' => __('Specializations', 'bepc'),
            'singular_name' => __('Specialization', 'bepc'),
            'search_items' => __('Search Specializations', 'bepc'),
            'all_items' => __('All Specializations', 'bepc'),
            'edit_item' => __('Edit Specialization', 'bepc'),
            'update_item' => __('Update Specialization', 'bepc'),
            'add_new_item' => __('Add New Specialization', 'bepc'),
            'new_item_name' => __('New Specialization Name', 'bepc'),
            'menu_name' => __('Specializations', 'bepc'),
        ),
        'hierarchical' => true,
        'public' => true,
        'show_ui' => true,
        'show_admin_column' => true,
        'query_var' => true,
        'rewrite' => array('slug' => 'specialization'),
        'show_in_rest' => true,
    ));
    
    // Resource Types
    register_taxonomy('resource_type', 'bepc_resource', array(
        'labels' => array(
            'name' => __('Resource Types', 'bepc'),
            'singular_name' => __('Resource Type', 'bepc'),
            'search_items' => __('Search Resource Types', 'bepc'),
            'all_items' => __('All Resource Types', 'bepc'),
            'edit_item' => __('Edit Resource Type', 'bepc'),
            'update_item' => __('Update Resource Type', 'bepc'),
            'add_new_item' => __('Add New Resource Type', 'bepc'),
            'new_item_name' => __('New Resource Type Name', 'bepc'),
            'menu_name' => __('Resource Types', 'bepc'),
        ),
        'hierarchical' => true,
        'public' => true,
        'show_ui' => true,
        'show_admin_column' => true,
        'query_var' => true,
        'rewrite' => array('slug' => 'resource-type'),
        'show_in_rest' => true,
    ));
    
    // Case Study Categories
    register_taxonomy('case_study_category', 'bepc_case_study', array(
        'labels' => array(
            'name' => __('Case Study Categories', 'bepc'),
            'singular_name' => __('Case Study Category', 'bepc'),
            'search_items' => __('Search Categories', 'bepc'),
            'all_items' => __('All Categories', 'bepc'),
            'edit_item' => __('Edit Category', 'bepc'),
            'update_item' => __('Update Category', 'bepc'),
            'add_new_item' => __('Add New Category', 'bepc'),
            'new_item_name' => __('New Category Name', 'bepc'),
            'menu_name' => __('Categories', 'bepc'),
        ),
        'hierarchical' => true,
        'public' => true,
        'show_ui' => true,
        'show_admin_column' => true,
        'query_var' => true,
        'rewrite' => array('slug' => 'case-category'),
        'show_in_rest' => true,
    ));
}
add_action('init', 'bepc_register_taxonomies');

/**
 * Add default terms
 */
function bepc_add_default_terms() {
    // Attorney Specializations
    $specializations = array(
        'Bitcoin Estate Planning',
        'Cryptocurrency Tax Law',
        'Digital Asset Probate',
        'Multisig Inheritance',
        'International Bitcoin Planning',
    );
    
    foreach ($specializations as $specialization) {
        if (!term_exists($specialization, 'attorney_specialization')) {
            wp_insert_term($specialization, 'attorney_specialization');
        }
    }
    
    // Resource Types
    $resource_types = array(
        'Templates' => array(
            'description' => 'Legal templates and documents'
        ),
        'Guides' => array(
            'description' => 'Educational guides and tutorials'
        ),
        'Checklists' => array(
            'description' => 'Planning checklists and workflows'
        ),
        'Tools' => array(
            'description' => 'Calculators and assessment tools'
        ),
        'Whitepapers' => array(
            'description' => 'Research and technical documents'
        ),
    );
    
    foreach ($resource_types as $type => $args) {
        if (!term_exists($type, 'resource_type')) {
            wp_insert_term($type, 'resource_type', $args);
        }
    }
    
    // Case Study Categories
    $case_categories = array(
        'Lost Keys',
        'Family Disputes',
        'Tax Complications',
        'Probate Failures',
        'Successful Transfers',
        'International Cases',
    );
    
    foreach ($case_categories as $category) {
        if (!term_exists($category, 'case_study_category')) {
            wp_insert_term($category, 'case_study_category');
        }
    }
}
add_action('init', 'bepc_add_default_terms', 20);

/**
 * Custom columns for Attorney post type
 */
function bepc_attorney_columns($columns) {
    $new_columns = array();
    $new_columns['cb'] = $columns['cb'];
    $new_columns['title'] = $columns['title'];
    $new_columns['certification'] = __('Certification', 'bepc');
    $new_columns['location'] = __('Location', 'bepc');
    $new_columns['specializations'] = __('Specializations', 'bepc');
    $new_columns['date'] = $columns['date'];
    
    return $new_columns;
}
add_filter('manage_bepc_attorney_posts_columns', 'bepc_attorney_columns');

/**
 * Display custom column content
 */
function bepc_attorney_column_content($column, $post_id) {
    switch ($column) {
        case 'certification':
            $level = get_post_meta($post_id, 'certification_level', true);
            echo $level ? esc_html($level) : '—';
            break;
            
        case 'location':
            $city = get_post_meta($post_id, 'city', true);
            $state = get_post_meta($post_id, 'state', true);
            echo $city && $state ? esc_html("$city, $state") : '—';
            break;
            
        case 'specializations':
            $terms = get_the_terms($post_id, 'attorney_specialization');
            if ($terms && !is_wp_error($terms)) {
                $specializations = array();
                foreach ($terms as $term) {
                    $specializations[] = $term->name;
                }
                echo esc_html(implode(', ', $specializations));
            } else {
                echo '—';
            }
            break;
    }
}
add_action('manage_bepc_attorney_posts_custom_column', 'bepc_attorney_column_content', 10, 2);

/**
 * Make custom columns sortable
 */
function bepc_attorney_sortable_columns($columns) {
    $columns['certification'] = 'certification';
    $columns['location'] = 'location';
    return $columns;
}
add_filter('manage_edit-bepc_attorney_sortable_columns', 'bepc_attorney_sortable_columns');

/**
 * Custom column sorting
 */
function bepc_attorney_orderby($query) {
    if (!is_admin() || !$query->is_main_query()) {
        return;
    }
    
    if ('bepc_attorney' === $query->get('post_type')) {
        if ('certification' === $query->get('orderby')) {
            $query->set('meta_key', 'certification_level');
            $query->set('orderby', 'meta_value');
        }
        
        if ('location' === $query->get('orderby')) {
            $query->set('meta_key', 'state');
            $query->set('orderby', 'meta_value');
        }
    }
}
add_action('pre_get_posts', 'bepc_attorney_orderby');