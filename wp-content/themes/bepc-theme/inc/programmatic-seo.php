<?php
/**
 * Programmatic SEO Engine
 * 
 * Handles dynamic page generation for location-based and topic-based pages
 *
 * @package BEPC
 */

// Security check
if (!defined('ABSPATH')) {
    exit;
}

class BEPC_Programmatic_SEO {
    
    private static $instance = null;
    
    public static function get_instance() {
        if (null === self::$instance) {
            self::$instance = new self();
        }
        return self::$instance;
    }
    
    private function __construct() {
        add_action('init', array($this, 'add_rewrite_rules'));
        add_filter('query_vars', array($this, 'add_query_vars'));
        add_action('template_redirect', array($this, 'handle_programmatic_pages'));
        add_filter('wp_title', array($this, 'filter_page_title'), 10, 2);
        add_filter('wpseo_title', array($this, 'filter_yoast_title'));
        add_filter('wpseo_metadesc', array($this, 'filter_yoast_description'));
    }
    
    /**
     * Add rewrite rules for programmatic pages
     */
    public function add_rewrite_rules() {
        // Location-based attorney pages
        add_rewrite_rule(
            '^([^/]+)/([^/]+)/bitcoin-estate-planning-attorney/?$',
            'index.php?bepc_state=$matches[1]&bepc_city=$matches[2]&bepc_template=location',
            'top'
        );
        
        // State-level pages
        add_rewrite_rule(
            '^([^/]+)/bitcoin-estate-planning/?$',
            'index.php?bepc_state=$matches[1]&bepc_template=state',
            'top'
        );
        
        // Topic pages
        add_rewrite_rule(
            '^([^/]+)/([^/]+)/([^/]+)/?$',
            'index.php?bepc_topic=$matches[1]&bepc_subtopic=$matches[2]&bepc_state=$matches[3]&bepc_template=topic',
            'top'
        );
        
        // Attorney profile pages
        add_rewrite_rule(
            '^attorney/([^/]+)/([^/]+)/([^/]+)/?$',
            'index.php?bepc_attorney=$matches[1]&bepc_specialization=$matches[2]&bepc_location=$matches[3]&bepc_template=attorney',
            'top'
        );
        
        // Tool pages
        add_rewrite_rule(
            '^tools/([^/]+)/([^/]+)/?$',
            'index.php?bepc_tool=$matches[1]&bepc_state=$matches[2]&bepc_template=tool',
            'top'
        );
    }
    
    /**
     * Add custom query variables
     */
    public function add_query_vars($vars) {
        $vars[] = 'bepc_state';
        $vars[] = 'bepc_city';
        $vars[] = 'bepc_topic';
        $vars[] = 'bepc_subtopic';
        $vars[] = 'bepc_attorney';
        $vars[] = 'bepc_specialization';
        $vars[] = 'bepc_location';
        $vars[] = 'bepc_tool';
        $vars[] = 'bepc_template';
        return $vars;
    }
    
    /**
     * Handle programmatic page display
     */
    public function handle_programmatic_pages() {
        $template = get_query_var('bepc_template');
        
        if (!$template) {
            return;
        }
        
        // Prevent 404
        global $wp_query;
        $wp_query->is_404 = false;
        status_header(200);
        
        // Load appropriate template
        switch ($template) {
            case 'location':
                $this->load_location_template();
                break;
            case 'state':
                $this->load_state_template();
                break;
            case 'topic':
                $this->load_topic_template();
                break;
            case 'attorney':
                $this->load_attorney_template();
                break;
            case 'tool':
                $this->load_tool_template();
                break;
        }
        
        exit;
    }
    
    /**
     * Load location-based template
     */
    private function load_location_template() {
        $state = get_query_var('bepc_state');
        $city = get_query_var('bepc_city');
        
        // Validate location data
        if (!$this->validate_location($state, $city)) {
            wp_redirect(home_url('/find-attorney/'));
            exit;
        }
        
        // Get location data
        $location_data = $this->get_location_data($state, $city);
        
        // Set up template variables
        set_query_var('location_data', $location_data);
        
        // Load template
        include BEPC_THEME_PATH . '/templates/template-location.php';
    }
    
    /**
     * Load state-level template
     */
    private function load_state_template() {
        $state = get_query_var('bepc_state');
        
        if (!$this->validate_state($state)) {
            wp_redirect(home_url('/find-attorney/'));
            exit;
        }
        
        $state_data = $this->get_state_data($state);
        set_query_var('state_data', $state_data);
        
        include BEPC_THEME_PATH . '/templates/template-state.php';
    }
    
    /**
     * Load topic template
     */
    private function load_topic_template() {
        $topic = get_query_var('bepc_topic');
        $subtopic = get_query_var('bepc_subtopic');
        $state = get_query_var('bepc_state');
        
        $topic_data = $this->get_topic_data($topic, $subtopic, $state);
        set_query_var('topic_data', $topic_data);
        
        include BEPC_THEME_PATH . '/templates/template-topic.php';
    }
    
    /**
     * Load attorney profile template
     */
    private function load_attorney_template() {
        $attorney_slug = get_query_var('bepc_attorney');
        
        $attorney_data = $this->get_attorney_data($attorney_slug);
        if (!$attorney_data) {
            wp_redirect(home_url('/find-attorney/'));
            exit;
        }
        
        set_query_var('attorney_data', $attorney_data);
        
        include BEPC_THEME_PATH . '/templates/template-attorney.php';
    }
    
    /**
     * Load tool template
     */
    private function load_tool_template() {
        $tool = get_query_var('bepc_tool');
        $state = get_query_var('bepc_state');
        
        $tool_data = $this->get_tool_data($tool, $state);
        set_query_var('tool_data', $tool_data);
        
        include BEPC_THEME_PATH . '/templates/template-tool.php';
    }
    
    /**
     * Validate location
     */
    private function validate_location($state, $city) {
        global $wpdb;
        
        $table_name = $wpdb->prefix . 'bepc_cities';
        $result = $wpdb->get_var($wpdb->prepare(
            "SELECT COUNT(*) FROM $table_name WHERE state_code = %s AND city_slug = %s",
            $state,
            $city
        ));
        
        return $result > 0;
    }
    
    /**
     * Validate state
     */
    private function validate_state($state) {
        global $wpdb;
        
        $table_name = $wpdb->prefix . 'bepc_states';
        $result = $wpdb->get_var($wpdb->prepare(
            "SELECT COUNT(*) FROM $table_name WHERE state_code = %s",
            $state
        ));
        
        return $result > 0;
    }
    
    /**
     * Get location data
     */
    private function get_location_data($state, $city) {
        global $wpdb;
        
        // Get city data
        $cities_table = $wpdb->prefix . 'bepc_cities';
        $states_table = $wpdb->prefix . 'bepc_states';
        
        $location = $wpdb->get_row($wpdb->prepare(
            "SELECT c.*, s.state_name, s.bitcoin_adoption_rate, s.estate_tax_exemption, s.probate_laws_summary 
             FROM $cities_table c 
             JOIN $states_table s ON c.state_id = s.id 
             WHERE c.city_slug = %s AND s.state_code = %s",
            $city,
            $state
        ));
        
        // Get attorneys in this location
        $attorneys_table = $wpdb->prefix . 'bepc_attorneys';
        $attorneys = $wpdb->get_results($wpdb->prepare(
            "SELECT * FROM $attorneys_table 
             WHERE city_id = %d AND verified_status = 1 
             ORDER BY certification_level DESC, years_experience DESC 
             LIMIT 10",
            $location->id
        ));
        
        return array(
            'location' => $location,
            'attorneys' => $attorneys,
            'state_name' => $location->state_name,
            'city_name' => $location->city_name
        );
    }
    
    /**
     * Get state data
     */
    private function get_state_data($state) {
        global $wpdb;
        
        $states_table = $wpdb->prefix . 'bepc_states';
        $state_data = $wpdb->get_row($wpdb->prepare(
            "SELECT * FROM $states_table WHERE state_code = %s",
            $state
        ));
        
        // Get major cities in state
        $cities_table = $wpdb->prefix . 'bepc_cities';
        $cities = $wpdb->get_results($wpdb->prepare(
            "SELECT * FROM $cities_table 
             WHERE state_id = %d 
             ORDER BY population DESC 
             LIMIT 20",
            $state_data->id
        ));
        
        // Get attorney count for state
        $attorneys_table = $wpdb->prefix . 'bepc_attorneys';
        $attorney_count = $wpdb->get_var($wpdb->prepare(
            "SELECT COUNT(*) FROM $attorneys_table WHERE state_id = %d",
            $state_data->id
        ));
        
        return array(
            'state' => $state_data,
            'cities' => $cities,
            'attorney_count' => $attorney_count
        );
    }
    
    /**
     * Get topic data
     */
    private function get_topic_data($topic, $subtopic, $state) {
        global $wpdb;
        
        // Get topic information
        $topics_table = $wpdb->prefix . 'bepc_legal_topics';
        $topic_data = $wpdb->get_row($wpdb->prepare(
            "SELECT * FROM $topics_table WHERE topic_slug = %s",
            $topic
        ));
        
        // Get state-specific regulations
        $regulations_table = $wpdb->prefix . 'bepc_state_regulations';
        $states_table = $wpdb->prefix . 'bepc_states';
        
        $state_info = $wpdb->get_row($wpdb->prepare(
            "SELECT * FROM $states_table WHERE state_code = %s",
            $state
        ));
        
        if ($state_info) {
            $regulations = $wpdb->get_results($wpdb->prepare(
                "SELECT * FROM $regulations_table 
                 WHERE state_id = %d AND topic_id = %d",
                $state_info->id,
                $topic_data->id
            ));
        }
        
        return array(
            'topic' => $topic_data,
            'subtopic' => $subtopic,
            'state' => $state_info,
            'regulations' => $regulations ?? array()
        );
    }
    
    /**
     * Get attorney data
     */
    private function get_attorney_data($attorney_slug) {
        global $wpdb;
        
        $attorneys_table = $wpdb->prefix . 'bepc_attorneys';
        $attorney = $wpdb->get_row($wpdb->prepare(
            "SELECT * FROM $attorneys_table WHERE slug = %s",
            $attorney_slug
        ));
        
        return $attorney;
    }
    
    /**
     * Get tool data
     */
    private function get_tool_data($tool, $state) {
        global $wpdb;
        
        $states_table = $wpdb->prefix . 'bepc_states';
        $state_data = $wpdb->get_row($wpdb->prepare(
            "SELECT * FROM $states_table WHERE state_code = %s",
            $state
        ));
        
        return array(
            'tool' => $tool,
            'state' => $state_data
        );
    }
    
    /**
     * Filter page title for programmatic pages
     */
    public function filter_page_title($title, $sep) {
        $template = get_query_var('bepc_template');
        
        if (!$template) {
            return $title;
        }
        
        switch ($template) {
            case 'location':
                $city = ucwords(str_replace('-', ' ', get_query_var('bepc_city')));
                $state = strtoupper(get_query_var('bepc_state'));
                $title = "Bitcoin Estate Planning Attorney in $city, $state $sep BEPC Certified";
                break;
                
            case 'state':
                $state = strtoupper(get_query_var('bepc_state'));
                $title = "Bitcoin Estate Planning in $state $sep Certified Attorneys & Laws";
                break;
                
            case 'topic':
                $topic = ucwords(str_replace('-', ' ', get_query_var('bepc_topic')));
                $state = strtoupper(get_query_var('bepc_state'));
                $title = "$topic in $state $sep Bitcoin Estate Planning Guide";
                break;
        }
        
        return $title;
    }
    
    /**
     * Filter Yoast SEO title
     */
    public function filter_yoast_title($title) {
        $template = get_query_var('bepc_template');
        
        if ($template) {
            return $this->filter_page_title('', ' | ');
        }
        
        return $title;
    }
    
    /**
     * Filter Yoast SEO description
     */
    public function filter_yoast_description($description) {
        $template = get_query_var('bepc_template');
        
        if (!$template) {
            return $description;
        }
        
        switch ($template) {
            case 'location':
                $city = ucwords(str_replace('-', ' ', get_query_var('bepc_city')));
                $state = strtoupper(get_query_var('bepc_state'));
                $description = "Find BEPC certified Bitcoin estate planning attorneys in $city, $state. Expert cryptocurrency inheritance planning, digital asset protection, and tax optimization. Free consultation available.";
                break;
                
            case 'state':
                $state = strtoupper(get_query_var('bepc_state'));
                $description = "Bitcoin estate planning laws and certified attorneys in $state. Learn about cryptocurrency inheritance regulations, tax implications, and find qualified legal professionals near you.";
                break;
        }
        
        return $description;
    }
}

// Initialize
BEPC_Programmatic_SEO::get_instance();