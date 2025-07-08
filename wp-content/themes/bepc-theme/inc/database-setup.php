<?php
/**
 * Database Setup for Programmatic Content
 *
 * @package BEPC
 */

// Security check
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Create custom database tables
 */
function bepc_create_database_tables() {
    global $wpdb;
    
    $charset_collate = $wpdb->get_charset_collate();
    
    // States table
    $states_table = $wpdb->prefix . 'bepc_states';
    $sql_states = "CREATE TABLE IF NOT EXISTS $states_table (
        id mediumint(9) NOT NULL AUTO_INCREMENT,
        state_name varchar(100) NOT NULL,
        state_code varchar(2) NOT NULL,
        population int NOT NULL DEFAULT 0,
        bitcoin_adoption_rate decimal(5,2) DEFAULT 0,
        estate_tax_exemption decimal(15,2) DEFAULT 0,
        probate_laws_summary text,
        regulatory_notes text,
        major_cities longtext,
        created_at datetime DEFAULT CURRENT_TIMESTAMP,
        updated_at datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        PRIMARY KEY (id),
        UNIQUE KEY state_code (state_code),
        KEY state_name (state_name)
    ) $charset_collate;";
    
    // Cities table
    $cities_table = $wpdb->prefix . 'bepc_cities';
    $sql_cities = "CREATE TABLE IF NOT EXISTS $cities_table (
        id mediumint(9) NOT NULL AUTO_INCREMENT,
        city_name varchar(100) NOT NULL,
        city_slug varchar(100) NOT NULL,
        state_id mediumint(9) NOT NULL,
        population int NOT NULL DEFAULT 0,
        median_income decimal(10,2) DEFAULT 0,
        bitcoin_businesses_count int DEFAULT 0,
        law_firms_count int DEFAULT 0,
        latitude decimal(10,8) DEFAULT NULL,
        longitude decimal(11,8) DEFAULT NULL,
        created_at datetime DEFAULT CURRENT_TIMESTAMP,
        updated_at datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        PRIMARY KEY (id),
        KEY state_id (state_id),
        KEY city_slug (city_slug),
        KEY population (population)
    ) $charset_collate;";
    
    // Attorneys table
    $attorneys_table = $wpdb->prefix . 'bepc_attorneys';
    $sql_attorneys = "CREATE TABLE IF NOT EXISTS $attorneys_table (
        id mediumint(9) NOT NULL AUTO_INCREMENT,
        name varchar(255) NOT NULL,
        slug varchar(255) NOT NULL,
        firm_name varchar(255),
        city_id mediumint(9),
        state_id mediumint(9),
        certification_level varchar(50),
        specializations longtext,
        years_experience int DEFAULT 0,
        contact_info longtext,
        profile_image varchar(255),
        bio text,
        client_reviews longtext,
        verified_status tinyint(1) DEFAULT 0,
        featured tinyint(1) DEFAULT 0,
        created_at datetime DEFAULT CURRENT_TIMESTAMP,
        updated_at datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        PRIMARY KEY (id),
        UNIQUE KEY slug (slug),
        KEY city_id (city_id),
        KEY state_id (state_id),
        KEY certification_level (certification_level),
        KEY verified_status (verified_status)
    ) $charset_collate;";
    
    // Legal topics table
    $topics_table = $wpdb->prefix . 'bepc_legal_topics';
    $sql_topics = "CREATE TABLE IF NOT EXISTS $topics_table (
        id mediumint(9) NOT NULL AUTO_INCREMENT,
        topic_name varchar(255) NOT NULL,
        topic_slug varchar(255) NOT NULL,
        subtopics longtext,
        description text,
        complexity_level varchar(50),
        average_cost_range varchar(100),
        time_requirements varchar(100),
        risk_factors longtext,
        created_at datetime DEFAULT CURRENT_TIMESTAMP,
        updated_at datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        PRIMARY KEY (id),
        UNIQUE KEY topic_slug (topic_slug),
        KEY topic_name (topic_name)
    ) $charset_collate;";
    
    // State regulations table
    $regulations_table = $wpdb->prefix . 'bepc_state_regulations';
    $sql_regulations = "CREATE TABLE IF NOT EXISTS $regulations_table (
        id mediumint(9) NOT NULL AUTO_INCREMENT,
        state_id mediumint(9) NOT NULL,
        topic_id mediumint(9) NOT NULL,
        regulation_text text,
        last_updated date,
        source_citation varchar(500),
        compliance_requirements text,
        created_at datetime DEFAULT CURRENT_TIMESTAMP,
        updated_at datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        PRIMARY KEY (id),
        KEY state_id (state_id),
        KEY topic_id (topic_id),
        KEY state_topic (state_id, topic_id)
    ) $charset_collate;";
    
    // Execute table creation
    require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
    dbDelta($sql_states);
    dbDelta($sql_cities);
    dbDelta($sql_attorneys);
    dbDelta($sql_topics);
    dbDelta($sql_regulations);
    
    // Update database version
    update_option('bepc_db_version', '1.0');
}

/**
 * Insert initial data
 */
function bepc_insert_initial_data() {
    global $wpdb;
    
    // Check if data already exists
    $states_table = $wpdb->prefix . 'bepc_states';
    $count = $wpdb->get_var("SELECT COUNT(*) FROM $states_table");
    
    if ($count > 0) {
        return; // Data already exists
    }
    
    // Insert states data
    $states_data = array(
        array(
            'state_name' => 'California',
            'state_code' => 'ca',
            'population' => 39538223,
            'bitcoin_adoption_rate' => 15.2,
            'estate_tax_exemption' => 12920000,
            'probate_laws_summary' => 'California has specific digital asset laws under the Revised Uniform Fiduciary Access to Digital Assets Act. Probate process typically takes 9-18 months.',
            'regulatory_notes' => 'California requires specific language in estate planning documents for digital assets.',
            'major_cities' => json_encode(array('Los Angeles', 'San Francisco', 'San Diego', 'San Jose', 'Sacramento'))
        ),
        array(
            'state_name' => 'Texas',
            'state_code' => 'tx',
            'population' => 29145505,
            'bitcoin_adoption_rate' => 18.5,
            'estate_tax_exemption' => 0,
            'probate_laws_summary' => 'Texas has no state estate tax. Digital assets are governed by the Texas Estates Code Chapter 2001.',
            'regulatory_notes' => 'Texas is crypto-friendly with clear digital asset inheritance laws.',
            'major_cities' => json_encode(array('Houston', 'Dallas', 'Austin', 'San Antonio', 'Fort Worth'))
        ),
        array(
            'state_name' => 'New York',
            'state_code' => 'ny',
            'population' => 20201249,
            'bitcoin_adoption_rate' => 12.8,
            'estate_tax_exemption' => 6580000,
            'probate_laws_summary' => 'New York has strict BitLicense requirements. Estate tax applies to estates over $6.58 million.',
            'regulatory_notes' => 'Complex regulatory environment for cryptocurrency businesses and inheritance.',
            'major_cities' => json_encode(array('New York City', 'Buffalo', 'Rochester', 'Albany', 'Syracuse'))
        ),
        array(
            'state_name' => 'Florida',
            'state_code' => 'fl',
            'population' => 21538187,
            'bitcoin_adoption_rate' => 16.7,
            'estate_tax_exemption' => 0,
            'probate_laws_summary' => 'Florida has no state estate tax. The Florida Fiduciary Access to Digital Assets Act governs digital inheritance.',
            'regulatory_notes' => 'Crypto-friendly state with growing Bitcoin adoption.',
            'major_cities' => json_encode(array('Miami', 'Tampa', 'Orlando', 'Jacksonville', 'Fort Lauderdale'))
        ),
        array(
            'state_name' => 'Illinois',
            'state_code' => 'il',
            'population' => 12812508,
            'bitcoin_adoption_rate' => 11.3,
            'estate_tax_exemption' => 4000000,
            'probate_laws_summary' => 'Illinois has state estate tax for estates over $4 million. Digital assets covered under state fiduciary laws.',
            'regulatory_notes' => 'Moderate regulatory approach to cryptocurrency.',
            'major_cities' => json_encode(array('Chicago', 'Aurora', 'Rockford', 'Joliet', 'Naperville'))
        )
    );
    
    foreach ($states_data as $state) {
        $wpdb->insert($states_table, $state);
    }
    
    // Insert cities data
    $cities_table = $wpdb->prefix . 'bepc_cities';
    $cities_data = array(
        // California cities
        array('city_name' => 'Los Angeles', 'city_slug' => 'los-angeles', 'state_id' => 1, 'population' => 3971883, 'median_income' => 62142, 'bitcoin_businesses_count' => 156, 'law_firms_count' => 2847, 'latitude' => 34.0522, 'longitude' => -118.2437),
        array('city_name' => 'San Francisco', 'city_slug' => 'san-francisco', 'state_id' => 1, 'population' => 881549, 'median_income' => 112449, 'bitcoin_businesses_count' => 287, 'law_firms_count' => 1923, 'latitude' => 37.7749, 'longitude' => -122.4194),
        array('city_name' => 'San Diego', 'city_slug' => 'san-diego', 'state_id' => 1, 'population' => 1423851, 'median_income' => 79646, 'bitcoin_businesses_count' => 98, 'law_firms_count' => 1456, 'latitude' => 32.7157, 'longitude' => -117.1611),
        array('city_name' => 'San Jose', 'city_slug' => 'san-jose', 'state_id' => 1, 'population' => 1013240, 'median_income' => 109593, 'bitcoin_businesses_count' => 134, 'law_firms_count' => 892, 'latitude' => 37.3382, 'longitude' => -121.8863),
        array('city_name' => 'Sacramento', 'city_slug' => 'sacramento', 'state_id' => 1, 'population' => 513624, 'median_income' => 62335, 'bitcoin_businesses_count' => 45, 'law_firms_count' => 678, 'latitude' => 38.5816, 'longitude' => -121.4944),
        
        // Texas cities
        array('city_name' => 'Houston', 'city_slug' => 'houston', 'state_id' => 2, 'population' => 2320268, 'median_income' => 52338, 'bitcoin_businesses_count' => 189, 'law_firms_count' => 2134, 'latitude' => 29.7604, 'longitude' => -95.3698),
        array('city_name' => 'Dallas', 'city_slug' => 'dallas', 'state_id' => 2, 'population' => 1343573, 'median_income' => 52580, 'bitcoin_businesses_count' => 167, 'law_firms_count' => 1876, 'latitude' => 32.7767, 'longitude' => -96.7970),
        array('city_name' => 'Austin', 'city_slug' => 'austin', 'state_id' => 2, 'population' => 978908, 'median_income' => 71576, 'bitcoin_businesses_count' => 234, 'law_firms_count' => 1234, 'latitude' => 30.2672, 'longitude' => -97.7431),
        array('city_name' => 'San Antonio', 'city_slug' => 'san-antonio', 'state_id' => 2, 'population' => 1547253, 'median_income' => 52455, 'bitcoin_businesses_count' => 78, 'law_firms_count' => 987, 'latitude' => 29.4241, 'longitude' => -98.4936),
        array('city_name' => 'Fort Worth', 'city_slug' => 'fort-worth', 'state_id' => 2, 'population' => 909585, 'median_income' => 62187, 'bitcoin_businesses_count' => 56, 'law_firms_count' => 654, 'latitude' => 32.7555, 'longitude' => -97.3308),
        
        // New York cities
        array('city_name' => 'New York City', 'city_slug' => 'new-york-city', 'state_id' => 3, 'population' => 8336817, 'median_income' => 63998, 'bitcoin_businesses_count' => 412, 'law_firms_count' => 8976, 'latitude' => 40.7128, 'longitude' => -74.0060),
        array('city_name' => 'Buffalo', 'city_slug' => 'buffalo', 'state_id' => 3, 'population' => 258612, 'median_income' => 37354, 'bitcoin_businesses_count' => 23, 'law_firms_count' => 345, 'latitude' => 42.8864, 'longitude' => -78.8784),
        array('city_name' => 'Rochester', 'city_slug' => 'rochester', 'state_id' => 3, 'population' => 205695, 'median_income' => 35590, 'bitcoin_businesses_count' => 18, 'law_firms_count' => 234, 'latitude' => 43.1566, 'longitude' => -77.6088),
        array('city_name' => 'Albany', 'city_slug' => 'albany', 'state_id' => 3, 'population' => 96460, 'median_income' => 45825, 'bitcoin_businesses_count' => 12, 'law_firms_count' => 167, 'latitude' => 42.6526, 'longitude' => -73.7562),
        array('city_name' => 'Syracuse', 'city_slug' => 'syracuse', 'state_id' => 3, 'population' => 142749, 'median_income' => 35714, 'bitcoin_businesses_count' => 9, 'law_firms_count' => 123, 'latitude' => 43.0481, 'longitude' => -76.1474),
        
        // Florida cities
        array('city_name' => 'Miami', 'city_slug' => 'miami', 'state_id' => 4, 'population' => 467963, 'median_income' => 44224, 'bitcoin_businesses_count' => 298, 'law_firms_count' => 2345, 'latitude' => 25.7617, 'longitude' => -80.1918),
        array('city_name' => 'Tampa', 'city_slug' => 'tampa', 'state_id' => 4, 'population' => 399700, 'median_income' => 53833, 'bitcoin_businesses_count' => 89, 'law_firms_count' => 876, 'latitude' => 27.9506, 'longitude' => -82.4572),
        array('city_name' => 'Orlando', 'city_slug' => 'orlando', 'state_id' => 4, 'population' => 290520, 'median_income' => 51757, 'bitcoin_businesses_count' => 76, 'law_firms_count' => 765, 'latitude' => 28.5383, 'longitude' => -81.3792),
        array('city_name' => 'Jacksonville', 'city_slug' => 'jacksonville', 'state_id' => 4, 'population' => 911507, 'median_income' => 54701, 'bitcoin_businesses_count' => 54, 'law_firms_count' => 654, 'latitude' => 30.3322, 'longitude' => -81.6557),
        array('city_name' => 'Fort Lauderdale', 'city_slug' => 'fort-lauderdale', 'state_id' => 4, 'population' => 182437, 'median_income' => 56230, 'bitcoin_businesses_count' => 67, 'law_firms_count' => 543, 'latitude' => 26.1224, 'longitude' => -80.1373),
        
        // Illinois cities
        array('city_name' => 'Chicago', 'city_slug' => 'chicago', 'state_id' => 5, 'population' => 2693976, 'median_income' => 58247, 'bitcoin_businesses_count' => 198, 'law_firms_count' => 3456, 'latitude' => 41.8781, 'longitude' => -87.6298),
        array('city_name' => 'Aurora', 'city_slug' => 'aurora', 'state_id' => 5, 'population' => 197899, 'median_income' => 63967, 'bitcoin_businesses_count' => 12, 'law_firms_count' => 98, 'latitude' => 41.7606, 'longitude' => -88.3201),
        array('city_name' => 'Rockford', 'city_slug' => 'rockford', 'state_id' => 5, 'population' => 145609, 'median_income' => 44476, 'bitcoin_businesses_count' => 8, 'law_firms_count' => 76, 'latitude' => 42.2711, 'longitude' => -89.0940),
        array('city_name' => 'Joliet', 'city_slug' => 'joliet', 'state_id' => 5, 'population' => 147344, 'median_income' => 71267, 'bitcoin_businesses_count' => 7, 'law_firms_count' => 65, 'latitude' => 41.5250, 'longitude' => -88.0817),
        array('city_name' => 'Naperville', 'city_slug' => 'naperville', 'state_id' => 5, 'population' => 147734, 'median_income' => 116482, 'bitcoin_businesses_count' => 15, 'law_firms_count' => 89, 'latitude' => 41.7508, 'longitude' => -88.1535),
    );
    
    foreach ($cities_data as $city) {
        $wpdb->insert($cities_table, $city);
    }
    
    // Insert legal topics
    $topics_table = $wpdb->prefix . 'bepc_legal_topics';
    $topics_data = array(
        array(
            'topic_name' => 'Bitcoin Trust Planning',
            'topic_slug' => 'bitcoin-trust-planning',
            'subtopics' => json_encode(array('Revocable Trusts', 'Irrevocable Trusts', 'Dynasty Trusts', 'Asset Protection Trusts')),
            'description' => 'Comprehensive planning for Bitcoin holdings in trust structures',
            'complexity_level' => 'High',
            'average_cost_range' => '$5,000 - $25,000',
            'time_requirements' => '2-6 weeks',
            'risk_factors' => json_encode(array('Key management', 'Trustee expertise', 'Tax implications'))
        ),
        array(
            'topic_name' => 'Cryptocurrency Inheritance',
            'topic_slug' => 'cryptocurrency-inheritance',
            'subtopics' => json_encode(array('Direct Transfer', 'Probate Process', 'Beneficiary Designation', 'Joint Ownership')),
            'description' => 'Planning for the transfer of cryptocurrency assets upon death',
            'complexity_level' => 'Medium',
            'average_cost_range' => '$2,500 - $10,000',
            'time_requirements' => '1-3 weeks',
            'risk_factors' => json_encode(array('Access loss', 'Security breaches', 'Legal compliance'))
        ),
        array(
            'topic_name' => 'Digital Asset Probate',
            'topic_slug' => 'digital-asset-probate',
            'subtopics' => json_encode(array('Court Procedures', 'Asset Recovery', 'Valuation', 'Distribution')),
            'description' => 'Navigating probate court for digital asset distribution',
            'complexity_level' => 'High',
            'average_cost_range' => '$10,000 - $50,000',
            'time_requirements' => '6-18 months',
            'risk_factors' => json_encode(array('Court delays', 'Asset volatility', 'Technical challenges'))
        ),
        array(
            'topic_name' => 'Multisig Estate Planning',
            'topic_slug' => 'multisig-estate-planning',
            'subtopics' => json_encode(array('Key Distribution', 'Signer Selection', 'Recovery Procedures', 'Documentation')),
            'description' => 'Estate planning using multi-signature Bitcoin wallets',
            'complexity_level' => 'Very High',
            'average_cost_range' => '$7,500 - $30,000',
            'time_requirements' => '3-8 weeks',
            'risk_factors' => json_encode(array('Technical complexity', 'Coordination challenges', 'Key security'))
        ),
        array(
            'topic_name' => 'Bitcoin Tax Planning',
            'topic_slug' => 'bitcoin-tax-planning',
            'subtopics' => json_encode(array('Capital Gains', 'Estate Tax', 'Gift Tax', 'Generation-Skipping Tax')),
            'description' => 'Tax optimization strategies for Bitcoin estate planning',
            'complexity_level' => 'High',
            'average_cost_range' => '$5,000 - $20,000',
            'time_requirements' => '2-4 weeks',
            'risk_factors' => json_encode(array('Regulatory changes', 'Valuation disputes', 'Record keeping'))
        )
    );
    
    foreach ($topics_data as $topic) {
        $wpdb->insert($topics_table, $topic);
    }
    
    // Insert sample attorneys
    $attorneys_table = $wpdb->prefix . 'bepc_attorneys';
    $sample_attorneys = array(
        array(
            'name' => 'Sarah Johnson',
            'slug' => 'sarah-johnson',
            'firm_name' => 'Johnson Bitcoin Law',
            'city_id' => 2, // San Francisco
            'state_id' => 1, // California
            'certification_level' => 'Expert',
            'specializations' => json_encode(array('Bitcoin Trust Planning', 'Multisig Estate Planning')),
            'years_experience' => 12,
            'contact_info' => json_encode(array('email' => 'sarah@johnsonbitcoinlaw.com', 'phone' => '(415) 555-0123')),
            'bio' => 'Sarah Johnson is a leading expert in Bitcoin estate planning with over 12 years of experience in cryptocurrency law.',
            'verified_status' => 1,
            'featured' => 1
        ),
        array(
            'name' => 'Michael Chen',
            'slug' => 'michael-chen',
            'firm_name' => 'Chen & Associates',
            'city_id' => 8, // Austin
            'state_id' => 2, // Texas
            'certification_level' => 'Advanced',
            'specializations' => json_encode(array('Cryptocurrency Inheritance', 'Bitcoin Tax Planning')),
            'years_experience' => 8,
            'contact_info' => json_encode(array('email' => 'mchen@chenlaw.com', 'phone' => '(512) 555-0456')),
            'bio' => 'Michael Chen specializes in cryptocurrency inheritance and tax planning for high-net-worth individuals.',
            'verified_status' => 1,
            'featured' => 0
        ),
        array(
            'name' => 'David Williams',
            'slug' => 'david-williams',
            'firm_name' => 'Williams Digital Estate Law',
            'city_id' => 16, // Miami
            'state_id' => 4, // Florida
            'certification_level' => 'Expert',
            'specializations' => json_encode(array('Digital Asset Probate', 'Bitcoin Trust Planning')),
            'years_experience' => 15,
            'contact_info' => json_encode(array('email' => 'dwilliams@williamslaw.com', 'phone' => '(305) 555-0789')),
            'bio' => 'David Williams has handled numerous complex digital asset probate cases and is recognized as a thought leader in the field.',
            'verified_status' => 1,
            'featured' => 1
        )
    );
    
    foreach ($sample_attorneys as $attorney) {
        $wpdb->insert($attorneys_table, $attorney);
    }
}

/**
 * Run database setup
 */
function bepc_run_database_setup() {
    $installed_ver = get_option('bepc_db_version');
    
    if ($installed_ver != '1.0') {
        bepc_create_database_tables();
        bepc_insert_initial_data();
    }
}
add_action('after_switch_theme', 'bepc_run_database_setup');

/**
 * Database cleanup on theme deactivation
 */
function bepc_database_cleanup() {
    // We don't delete tables on deactivation to preserve data
    // Tables can be manually removed if needed
}
register_deactivation_hook(__FILE__, 'bepc_database_cleanup');