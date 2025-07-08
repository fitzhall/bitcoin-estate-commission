<?php
/**
 * Template Functions
 *
 * @package BEPC
 */

// Security check
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Get attorneys based on search criteria
 */
function bepc_get_attorneys($location = '', $specialization = '', $certification = '', $limit = 20, $offset = 0) {
    global $wpdb;
    
    $attorneys_table = $wpdb->prefix . 'bepc_attorneys';
    $cities_table = $wpdb->prefix . 'bepc_cities';
    $states_table = $wpdb->prefix . 'bepc_states';
    
    $where_conditions = array('a.verified_status = 1');
    $query_params = array();
    
    // Location filter
    if (!empty($location)) {
        $location_parts = array_map('trim', explode(',', $location));
        
        if (count($location_parts) >= 2) {
            // City, State format
            $city = $location_parts[0];
            $state = $location_parts[1];
            
            $where_conditions[] = "(c.city_name LIKE %s OR c.city_slug LIKE %s) AND (s.state_name LIKE %s OR s.state_code LIKE %s)";
            $query_params[] = '%' . $city . '%';
            $query_params[] = '%' . sanitize_title($city) . '%';
            $query_params[] = '%' . $state . '%';
            $query_params[] = '%' . strtolower($state) . '%';
        } else {
            // Single location term
            $where_conditions[] = "(c.city_name LIKE %s OR c.city_slug LIKE %s OR s.state_name LIKE %s OR s.state_code LIKE %s)";
            $query_params[] = '%' . $location . '%';
            $query_params[] = '%' . sanitize_title($location) . '%';
            $query_params[] = '%' . $location . '%';
            $query_params[] = '%' . strtolower($location) . '%';
        }
    }
    
    // Specialization filter
    if (!empty($specialization)) {
        $where_conditions[] = "a.specializations LIKE %s";
        $query_params[] = '%' . str_replace('-', ' ', $specialization) . '%';
    }
    
    // Certification filter
    if (!empty($certification)) {
        $where_conditions[] = "a.certification_level = %s";
        $query_params[] = $certification;
    }
    
    $where_clause = !empty($where_conditions) ? 'WHERE ' . implode(' AND ', $where_conditions) : '';
    
    $sql = "
        SELECT a.*, c.city_name, s.state_name, s.state_code
        FROM $attorneys_table a
        LEFT JOIN $cities_table c ON a.city_id = c.id
        LEFT JOIN $states_table s ON a.state_id = s.id
        $where_clause
        ORDER BY a.featured DESC, a.certification_level DESC, a.years_experience DESC
        LIMIT %d OFFSET %d
    ";
    
    $query_params[] = $limit;
    $query_params[] = $offset;
    
    $prepared_sql = $wpdb->prepare($sql, $query_params);
    
    return $wpdb->get_results($prepared_sql);
}

/**
 * Get attorney location information
 */
function bepc_get_attorney_location($city_id, $state_id) {
    global $wpdb;
    
    $cities_table = $wpdb->prefix . 'bepc_cities';
    $states_table = $wpdb->prefix . 'bepc_states';
    
    $result = $wpdb->get_row($wpdb->prepare(
        "SELECT c.city_name as city, c.city_slug, s.state_name as state, s.state_code
         FROM $cities_table c
         JOIN $states_table s ON c.state_id = s.id
         WHERE c.id = %d AND s.id = %d",
        $city_id,
        $state_id
    ));
    
    if ($result) {
        return array(
            'city' => $result->city,
            'city_slug' => $result->city_slug,
            'state' => $result->state,
            'state_code' => $result->state_code
        );
    }
    
    return array(
        'city' => 'Unknown',
        'city_slug' => 'unknown',
        'state' => 'Unknown',
        'state_code' => 'unknown'
    );
}

/**
 * Get attorney by slug
 */
function bepc_get_attorney_by_slug($slug) {
    global $wpdb;
    
    $attorneys_table = $wpdb->prefix . 'bepc_attorneys';
    
    return $wpdb->get_row($wpdb->prepare(
        "SELECT * FROM $attorneys_table WHERE slug = %s AND verified_status = 1",
        $slug
    ));
}

/**
 * Get nearby attorneys
 */
function bepc_get_nearby_attorneys($city_id, $state_id, $exclude_id = 0, $limit = 5) {
    global $wpdb;
    
    $attorneys_table = $wpdb->prefix . 'bepc_attorneys';
    
    $sql = "
        SELECT * FROM $attorneys_table
        WHERE verified_status = 1
        AND (city_id = %d OR state_id = %d)
        AND id != %d
        ORDER BY 
            CASE WHEN city_id = %d THEN 1 ELSE 2 END,
            certification_level DESC,
            years_experience DESC
        LIMIT %d
    ";
    
    return $wpdb->get_results($wpdb->prepare(
        $sql,
        $city_id,
        $state_id,
        $exclude_id,
        $city_id,
        $limit
    ));
}

/**
 * Get attorney count by location
 */
function bepc_get_attorney_count($location = '', $specialization = '', $certification = '') {
    global $wpdb;
    
    $attorneys_table = $wpdb->prefix . 'bepc_attorneys';
    $cities_table = $wpdb->prefix . 'bepc_cities';
    $states_table = $wpdb->prefix . 'bepc_states';
    
    $where_conditions = array('a.verified_status = 1');
    $query_params = array();
    
    // Location filter
    if (!empty($location)) {
        $location_parts = array_map('trim', explode(',', $location));
        
        if (count($location_parts) >= 2) {
            $city = $location_parts[0];
            $state = $location_parts[1];
            
            $where_conditions[] = "(c.city_name LIKE %s OR c.city_slug LIKE %s) AND (s.state_name LIKE %s OR s.state_code LIKE %s)";
            $query_params[] = '%' . $city . '%';
            $query_params[] = '%' . sanitize_title($city) . '%';
            $query_params[] = '%' . $state . '%';
            $query_params[] = '%' . strtolower($state) . '%';
        } else {
            $where_conditions[] = "(c.city_name LIKE %s OR c.city_slug LIKE %s OR s.state_name LIKE %s OR s.state_code LIKE %s)";
            $query_params[] = '%' . $location . '%';
            $query_params[] = '%' . sanitize_title($location) . '%';
            $query_params[] = '%' . $location . '%';
            $query_params[] = '%' . strtolower($location) . '%';
        }
    }
    
    // Specialization filter
    if (!empty($specialization)) {
        $where_conditions[] = "a.specializations LIKE %s";
        $query_params[] = '%' . str_replace('-', ' ', $specialization) . '%';
    }
    
    // Certification filter
    if (!empty($certification)) {
        $where_conditions[] = "a.certification_level = %s";
        $query_params[] = $certification;
    }
    
    $where_clause = !empty($where_conditions) ? 'WHERE ' . implode(' AND ', $where_conditions) : '';
    
    $sql = "
        SELECT COUNT(*) as count
        FROM $attorneys_table a
        LEFT JOIN $cities_table c ON a.city_id = c.id
        LEFT JOIN $states_table s ON a.state_id = s.id
        $where_clause
    ";
    
    if (!empty($query_params)) {
        $prepared_sql = $wpdb->prepare($sql, $query_params);
    } else {
        $prepared_sql = $sql;
    }
    
    return $wpdb->get_var($prepared_sql);
}

/**
 * Get featured attorneys
 */
function bepc_get_featured_attorneys($limit = 6) {
    global $wpdb;
    
    $attorneys_table = $wpdb->prefix . 'bepc_attorneys';
    
    return $wpdb->get_results($wpdb->prepare(
        "SELECT * FROM $attorneys_table
         WHERE verified_status = 1 AND featured = 1
         ORDER BY certification_level DESC, years_experience DESC
         LIMIT %d",
        $limit
    ));
}

/**
 * Get attorney statistics
 */
function bepc_get_attorney_statistics() {
    global $wpdb;
    
    $attorneys_table = $wpdb->prefix . 'bepc_attorneys';
    
    $stats = $wpdb->get_row(
        "SELECT 
            COUNT(*) as total_attorneys,
            SUM(CASE WHEN certification_level = 'Expert' THEN 1 ELSE 0 END) as expert_count,
            SUM(CASE WHEN certification_level = 'Advanced' THEN 1 ELSE 0 END) as advanced_count,
            SUM(CASE WHEN certification_level = 'Foundation' THEN 1 ELSE 0 END) as foundation_count,
            AVG(years_experience) as avg_experience
         FROM $attorneys_table
         WHERE verified_status = 1"
    );
    
    return $stats;
}

/**
 * Get states with attorney counts
 */
function bepc_get_states_with_attorneys() {
    global $wpdb;
    
    $attorneys_table = $wpdb->prefix . 'bepc_attorneys';
    $states_table = $wpdb->prefix . 'bepc_states';
    
    return $wpdb->get_results(
        "SELECT s.*, COUNT(a.id) as attorney_count
         FROM $states_table s
         LEFT JOIN $attorneys_table a ON s.id = a.state_id AND a.verified_status = 1
         GROUP BY s.id
         HAVING attorney_count > 0
         ORDER BY attorney_count DESC, s.state_name"
    );
}

/**
 * Get cities with attorney counts
 */
function bepc_get_cities_with_attorneys($state_id = null) {
    global $wpdb;
    
    $attorneys_table = $wpdb->prefix . 'bepc_attorneys';
    $cities_table = $wpdb->prefix . 'bepc_cities';
    
    $where_clause = $state_id ? "WHERE c.state_id = " . intval($state_id) : "";
    
    return $wpdb->get_results(
        "SELECT c.*, COUNT(a.id) as attorney_count
         FROM $cities_table c
         LEFT JOIN $attorneys_table a ON c.id = a.city_id AND a.verified_status = 1
         $where_clause
         GROUP BY c.id
         HAVING attorney_count > 0
         ORDER BY attorney_count DESC, c.city_name"
    );
}

/**
 * Get attorney specializations
 */
function bepc_get_attorney_specializations() {
    global $wpdb;
    
    $attorneys_table = $wpdb->prefix . 'bepc_attorneys';
    
    $results = $wpdb->get_results(
        "SELECT DISTINCT specializations FROM $attorneys_table WHERE verified_status = 1 AND specializations IS NOT NULL"
    );
    
    $specializations = array();
    
    foreach ($results as $result) {
        $specs = json_decode($result->specializations, true);
        if ($specs && is_array($specs)) {
            $specializations = array_merge($specializations, $specs);
        }
    }
    
    return array_unique($specializations);
}

/**
 * Get random attorneys for homepage
 */
function bepc_get_random_attorneys($limit = 3) {
    global $wpdb;
    
    $attorneys_table = $wpdb->prefix . 'bepc_attorneys';
    
    return $wpdb->get_results($wpdb->prepare(
        "SELECT * FROM $attorneys_table
         WHERE verified_status = 1
         ORDER BY RAND()
         LIMIT %d",
        $limit
    ));
}

/**
 * Format attorney location string
 */
function bepc_format_attorney_location($city, $state) {
    if (empty($city) && empty($state)) {
        return 'Location not specified';
    }
    
    if (empty($city)) {
        return $state;
    }
    
    if (empty($state)) {
        return $city;
    }
    
    return $city . ', ' . $state;
}

/**
 * Get attorney reviews average
 */
function bepc_get_attorney_reviews_average($attorney_id) {
    global $wpdb;
    
    $attorneys_table = $wpdb->prefix . 'bepc_attorneys';
    
    $attorney = $wpdb->get_row($wpdb->prepare(
        "SELECT client_reviews FROM $attorneys_table WHERE id = %d",
        $attorney_id
    ));
    
    if ($attorney && $attorney->client_reviews) {
        $reviews = json_decode($attorney->client_reviews, true);
        if ($reviews && is_array($reviews)) {
            $total = 0;
            $count = 0;
            
            foreach ($reviews as $review) {
                if (isset($review['rating']) && is_numeric($review['rating'])) {
                    $total += $review['rating'];
                    $count++;
                }
            }
            
            if ($count > 0) {
                return array(
                    'average' => round($total / $count, 1),
                    'count' => $count
                );
            }
        }
    }
    
    return array(
        'average' => 0,
        'count' => 0
    );
}

/**
 * Check if attorney has specialization
 */
function bepc_attorney_has_specialization($attorney, $specialization) {
    if (!$attorney || !$attorney->specializations) {
        return false;
    }
    
    $specializations = json_decode($attorney->specializations, true);
    
    if (!$specializations || !is_array($specializations)) {
        return false;
    }
    
    return in_array($specialization, $specializations);
}

/**
 * Get attorney certification badge class
 */
function bepc_get_certification_badge_class($certification_level) {
    switch (strtolower($certification_level)) {
        case 'expert':
            return 'certification-expert';
        case 'advanced':
            return 'certification-advanced';
        case 'foundation':
            return 'certification-foundation';
        default:
            return 'certification-basic';
    }
}