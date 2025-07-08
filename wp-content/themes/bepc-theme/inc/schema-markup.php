<?php
/**
 * Schema Markup Implementation
 *
 * @package BEPC
 */

// Security check
if (!defined('ABSPATH')) {
    exit;
}

class BEPC_Schema_Markup {
    
    private static $instance = null;
    
    public static function get_instance() {
        if (null === self::$instance) {
            self::$instance = new self();
        }
        return self::$instance;
    }
    
    private function __construct() {
        add_action('wp_head', array($this, 'output_schema_markup'));
        add_filter('the_content', array($this, 'add_article_schema'), 20);
    }
    
    /**
     * Output schema markup in head
     */
    public function output_schema_markup() {
        if (is_front_page()) {
            $this->output_organization_schema();
        }
        
        $template = get_query_var('bepc_template');
        
        if ($template) {
            switch ($template) {
                case 'location':
                case 'state':
                    $this->output_local_business_schema();
                    break;
                    
                case 'attorney':
                    $this->output_attorney_schema();
                    break;
                    
                case 'tool':
                    $this->output_software_application_schema();
                    break;
            }
        }
        
        if (is_singular('bepc_resource')) {
            $this->output_how_to_schema();
        }
        
        if (is_singular('bepc_case_study')) {
            $this->output_article_schema();
        }
    }
    
    /**
     * Organization Schema
     */
    private function output_organization_schema() {
        $schema = array(
            '@context' => 'https://schema.org',
            '@type' => 'Organization',
            'name' => 'Bitcoin Estate Planning Commission',
            'alternateName' => 'BEPC',
            'url' => home_url(),
            'logo' => BEPC_THEME_URL . '/assets/images/logo.png',
            'description' => 'The global authority for Bitcoin estate planning standards, certification, and professional education.',
            'foundingDate' => '2024',
            'sameAs' => array(
                'https://twitter.com/BitcoinEstatePlanning',
                'https://www.linkedin.com/company/bitcoin-estate-planning-commission',
            ),
            'contactPoint' => array(
                '@type' => 'ContactPoint',
                'contactType' => 'customer service',
                'email' => 'info@bitcoinestateplanning.org',
                'url' => home_url('/contact/')
            ),
            'address' => array(
                '@type' => 'PostalAddress',
                'addressCountry' => 'US'
            )
        );
        
        echo '<script type="application/ld+json">' . json_encode($schema, JSON_UNESCAPED_SLASHES) . '</script>' . "\n";
    }
    
    /**
     * Local Business Schema for location pages
     */
    private function output_local_business_schema() {
        $location_data = get_query_var('location_data');
        $state_data = get_query_var('state_data');
        
        if (!$location_data && !$state_data) {
            return;
        }
        
        if ($location_data) {
            $schema = array(
                '@context' => 'https://schema.org',
                '@type' => 'LegalService',
                'name' => 'Bitcoin Estate Planning Attorneys in ' . $location_data['city_name'] . ', ' . $location_data['state_name'],
                'description' => 'BEPC certified Bitcoin estate planning attorneys serving ' . $location_data['city_name'] . ' and surrounding areas.',
                'url' => get_permalink(),
                'address' => array(
                    '@type' => 'PostalAddress',
                    'addressLocality' => $location_data['city_name'],
                    'addressRegion' => $location_data['state_name'],
                    'addressCountry' => 'US'
                ),
                'geo' => array(
                    '@type' => 'GeoCoordinates',
                    'latitude' => $location_data['location']->latitude,
                    'longitude' => $location_data['location']->longitude
                ),
                'areaServed' => array(
                    '@type' => 'City',
                    'name' => $location_data['city_name']
                )
            );
        } else {
            $schema = array(
                '@context' => 'https://schema.org',
                '@type' => 'LegalService',
                'name' => 'Bitcoin Estate Planning Attorneys in ' . $state_data['state']->state_name,
                'description' => 'BEPC certified Bitcoin estate planning attorneys throughout ' . $state_data['state']->state_name,
                'url' => get_permalink(),
                'address' => array(
                    '@type' => 'PostalAddress',
                    'addressRegion' => $state_data['state']->state_name,
                    'addressCountry' => 'US'
                ),
                'areaServed' => array(
                    '@type' => 'State',
                    'name' => $state_data['state']->state_name
                )
            );
        }
        
        echo '<script type="application/ld+json">' . json_encode($schema, JSON_UNESCAPED_SLASHES) . '</script>' . "\n";
    }
    
    /**
     * Attorney/Person Schema
     */
    private function output_attorney_schema() {
        $attorney_data = get_query_var('attorney_data');
        
        if (!$attorney_data) {
            return;
        }
        
        $specializations = json_decode($attorney_data->specializations, true);
        
        $schema = array(
            '@context' => 'https://schema.org',
            '@type' => 'Attorney',
            'name' => $attorney_data->name,
            'description' => $attorney_data->bio,
            'url' => get_permalink(),
            'image' => $attorney_data->profile_image ?: BEPC_THEME_URL . '/assets/images/default-attorney.jpg',
            'worksFor' => array(
                '@type' => 'LegalService',
                'name' => $attorney_data->firm_name
            ),
            'knowsAbout' => $specializations,
            'alumniOf' => array(
                '@type' => 'EducationalOrganization',
                'name' => 'Bitcoin Estate Planning Commission',
                'url' => home_url()
            ),
            'hasCredential' => array(
                '@type' => 'EducationalOccupationalCredential',
                'credentialCategory' => $attorney_data->certification_level . ' Certification',
                'issuedBy' => array(
                    '@type' => 'Organization',
                    'name' => 'Bitcoin Estate Planning Commission'
                )
            )
        );
        
        if ($attorney_data->contact_info) {
            $contact = json_decode($attorney_data->contact_info, true);
            if (isset($contact['email'])) {
                $schema['email'] = $contact['email'];
            }
            if (isset($contact['phone'])) {
                $schema['telephone'] = $contact['phone'];
            }
        }
        
        echo '<script type="application/ld+json">' . json_encode($schema, JSON_UNESCAPED_SLASHES) . '</script>' . "\n";
    }
    
    /**
     * Software Application Schema for tools
     */
    private function output_software_application_schema() {
        $tool = get_query_var('bepc_tool');
        $tool_data = get_query_var('tool_data');
        
        $schema = array(
            '@context' => 'https://schema.org',
            '@type' => 'WebApplication',
            'name' => ucwords(str_replace('-', ' ', $tool)) . ' for Bitcoin Estate Planning',
            'description' => 'Professional tool for Bitcoin estate planning calculations and assessments.',
            'url' => get_permalink(),
            'applicationCategory' => 'FinanceApplication',
            'operatingSystem' => 'Web Browser',
            'offers' => array(
                '@type' => 'Offer',
                'price' => '0',
                'priceCurrency' => 'USD'
            ),
            'creator' => array(
                '@type' => 'Organization',
                'name' => 'Bitcoin Estate Planning Commission',
                'url' => home_url()
            )
        );
        
        echo '<script type="application/ld+json">' . json_encode($schema, JSON_UNESCAPED_SLASHES) . '</script>' . "\n";
    }
    
    /**
     * How-To Schema for resources
     */
    private function output_how_to_schema() {
        global $post;
        
        $schema = array(
            '@context' => 'https://schema.org',
            '@type' => 'HowTo',
            'name' => get_the_title(),
            'description' => get_the_excerpt(),
            'url' => get_permalink(),
            'datePublished' => get_the_date('c'),
            'dateModified' => get_the_modified_date('c'),
            'author' => array(
                '@type' => 'Organization',
                'name' => 'Bitcoin Estate Planning Commission'
            ),
            'publisher' => array(
                '@type' => 'Organization',
                'name' => 'Bitcoin Estate Planning Commission',
                'logo' => array(
                    '@type' => 'ImageObject',
                    'url' => BEPC_THEME_URL . '/assets/images/logo.png'
                )
            )
        );
        
        // Add steps if available
        $steps = get_post_meta($post->ID, 'how_to_steps', true);
        if ($steps) {
            $schema['step'] = array();
            foreach ($steps as $index => $step) {
                $schema['step'][] = array(
                    '@type' => 'HowToStep',
                    'position' => $index + 1,
                    'name' => $step['name'],
                    'text' => $step['text']
                );
            }
        }
        
        echo '<script type="application/ld+json">' . json_encode($schema, JSON_UNESCAPED_SLASHES) . '</script>' . "\n";
    }
    
    /**
     * Article Schema
     */
    private function output_article_schema() {
        global $post;
        
        $schema = array(
            '@context' => 'https://schema.org',
            '@type' => 'Article',
            'headline' => get_the_title(),
            'description' => get_the_excerpt(),
            'url' => get_permalink(),
            'datePublished' => get_the_date('c'),
            'dateModified' => get_the_modified_date('c'),
            'author' => array(
                '@type' => 'Organization',
                'name' => 'Bitcoin Estate Planning Commission'
            ),
            'publisher' => array(
                '@type' => 'Organization',
                'name' => 'Bitcoin Estate Planning Commission',
                'logo' => array(
                    '@type' => 'ImageObject',
                    'url' => BEPC_THEME_URL . '/assets/images/logo.png'
                )
            ),
            'mainEntityOfPage' => array(
                '@type' => 'WebPage',
                '@id' => get_permalink()
            )
        );
        
        if (has_post_thumbnail()) {
            $thumbnail = wp_get_attachment_image_src(get_post_thumbnail_id(), 'full');
            $schema['image'] = array(
                '@type' => 'ImageObject',
                'url' => $thumbnail[0],
                'width' => $thumbnail[1],
                'height' => $thumbnail[2]
            );
        }
        
        echo '<script type="application/ld+json">' . json_encode($schema, JSON_UNESCAPED_SLASHES) . '</script>' . "\n";
    }
    
    /**
     * Add FAQ Schema to content
     */
    public function add_article_schema($content) {
        if (!is_singular()) {
            return $content;
        }
        
        // Check if content has FAQ section
        if (strpos($content, 'class="faq-section"') !== false) {
            $this->output_faq_schema();
        }
        
        return $content;
    }
    
    /**
     * FAQ Schema
     */
    private function output_faq_schema() {
        global $post;
        
        $faqs = get_post_meta($post->ID, 'faqs', true);
        
        if (!$faqs || !is_array($faqs)) {
            return;
        }
        
        $schema = array(
            '@context' => 'https://schema.org',
            '@type' => 'FAQPage',
            'mainEntity' => array()
        );
        
        foreach ($faqs as $faq) {
            $schema['mainEntity'][] = array(
                '@type' => 'Question',
                'name' => $faq['question'],
                'acceptedAnswer' => array(
                    '@type' => 'Answer',
                    'text' => $faq['answer']
                )
            );
        }
        
        echo '<script type="application/ld+json">' . json_encode($schema, JSON_UNESCAPED_SLASHES) . '</script>' . "\n";
    }
    
    /**
     * Breadcrumb Schema
     */
    public static function get_breadcrumb_schema($breadcrumbs) {
        $schema = array(
            '@context' => 'https://schema.org',
            '@type' => 'BreadcrumbList',
            'itemListElement' => array()
        );
        
        foreach ($breadcrumbs as $index => $breadcrumb) {
            $schema['itemListElement'][] = array(
                '@type' => 'ListItem',
                'position' => $index + 1,
                'name' => $breadcrumb['name'],
                'item' => $breadcrumb['url']
            );
        }
        
        return '<script type="application/ld+json">' . json_encode($schema, JSON_UNESCAPED_SLASHES) . '</script>';
    }
}

// Initialize
BEPC_Schema_Markup::get_instance();