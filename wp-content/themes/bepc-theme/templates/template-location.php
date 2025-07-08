<?php
/**
 * Template for location-based programmatic pages
 *
 * @package BEPC
 */

get_header();

$location_data = get_query_var('location_data');
$state = get_query_var('bepc_state');
$city = get_query_var('bepc_city');

$city_name = ucwords(str_replace('-', ' ', $city));
$state_name = $location_data['state_name'] ?? strtoupper($state);

?>

<main id="main" class="site-main programmatic-content">
    <div class="container">
        <?php bepc_breadcrumbs(); ?>
        
        <header class="page-header">
            <h1>Bitcoin Estate Planning Attorney in <?php echo esc_html($city_name); ?>, <?php echo esc_html($state_name); ?></h1>
            <p class="page-subtitle">Find BEPC certified attorneys specializing in Bitcoin and cryptocurrency estate planning</p>
        </header>
        
        <div class="location-content">
            <div class="location-overview">
                <h2>Why Choose a BEPC Certified Attorney in <?php echo esc_html($city_name); ?>?</h2>
                <p>Bitcoin estate planning requires specialized knowledge of cryptocurrency technology, tax implications, and regulatory compliance. Our certified attorneys in <?php echo esc_html($city_name); ?> have completed rigorous training in the BEPC certification program and stay current with evolving digital asset laws.</p>
                
                <div class="location-stats">
                    <div class="stat-item">
                        <span class="stat-number"><?php echo number_format($location_data['location']->bitcoin_businesses_count ?? 0); ?></span>
                        <span class="stat-label">Bitcoin Businesses</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number"><?php echo number_format($location_data['location']->law_firms_count ?? 0); ?></span>
                        <span class="stat-label">Law Firms</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number"><?php echo number_format(count($location_data['attorneys'] ?? array())); ?></span>
                        <span class="stat-label">Certified Attorneys</span>
                    </div>
                </div>
            </div>
            
            <div class="state-specific-info">
                <h3>Bitcoin Estate Planning Laws in <?php echo esc_html($state_name); ?></h3>
                <div class="law-summary">
                    <p><?php echo esc_html($location_data['location']->probate_laws_summary ?? 'State-specific digital asset laws apply to Bitcoin inheritance planning.'); ?></p>
                    
                    <?php if (isset($location_data['location']->estate_tax_exemption) && $location_data['location']->estate_tax_exemption > 0): ?>
                        <p><strong>Estate Tax Exemption:</strong> $<?php echo number_format($location_data['location']->estate_tax_exemption); ?></p>
                    <?php endif; ?>
                    
                    <?php if (isset($location_data['location']->regulatory_notes)): ?>
                        <p><strong>Regulatory Notes:</strong> <?php echo esc_html($location_data['location']->regulatory_notes); ?></p>
                    <?php endif; ?>
                </div>
            </div>
            
            <div class="local-statistics">
                <h3>Local <?php echo esc_html($city_name); ?> Bitcoin Estate Planning Statistics</h3>
                <div class="stats-grid">
                    <div class="stat-card">
                        <h4>Population</h4>
                        <p><?php echo number_format($location_data['location']->population ?? 0); ?></p>
                    </div>
                    <div class="stat-card">
                        <h4>Median Income</h4>
                        <p>$<?php echo number_format($location_data['location']->median_income ?? 0); ?></p>
                    </div>
                    <div class="stat-card">
                        <h4>Bitcoin Adoption Rate</h4>
                        <p><?php echo number_format($location_data['location']->bitcoin_adoption_rate ?? 0, 1); ?>%</p>
                    </div>
                </div>
            </div>
            
            <div class="certified-attorneys">
                <h2>Find Certified Attorneys Near <?php echo esc_html($city_name); ?>, <?php echo esc_html($state_name); ?></h2>
                
                <?php if (!empty($location_data['attorneys'])): ?>
                    <div class="attorney-grid">
                        <?php foreach ($location_data['attorneys'] as $attorney): ?>
                            <div class="attorney-card">
                                <div class="attorney-header">
                                    <h3><?php echo esc_html($attorney->name); ?></h3>
                                    <span class="certification-badge"><?php echo esc_html($attorney->certification_level); ?> Certified</span>
                                </div>
                                
                                <?php if ($attorney->firm_name): ?>
                                    <p class="firm-name"><?php echo esc_html($attorney->firm_name); ?></p>
                                <?php endif; ?>
                                
                                <?php if ($attorney->bio): ?>
                                    <p class="attorney-bio"><?php echo esc_html(wp_trim_words($attorney->bio, 25)); ?></p>
                                <?php endif; ?>
                                
                                <?php if ($attorney->specializations): ?>
                                    <div class="specializations">
                                        <strong>Specializations:</strong>
                                        <?php
                                        $specializations = json_decode($attorney->specializations, true);
                                        if ($specializations) {
                                            echo '<ul>';
                                            foreach ($specializations as $spec) {
                                                echo '<li>' . esc_html($spec) . '</li>';
                                            }
                                            echo '</ul>';
                                        }
                                        ?>
                                    </div>
                                <?php endif; ?>
                                
                                <div class="attorney-actions">
                                    <a href="/attorney/<?php echo esc_attr($attorney->slug); ?>/bitcoin-estate-planning/<?php echo esc_attr($state); ?>/" class="btn btn-primary">View Profile</a>
                                    <?php if ($attorney->contact_info): ?>
                                        <?php
                                        $contact = json_decode($attorney->contact_info, true);
                                        if (isset($contact['phone'])):
                                        ?>
                                            <a href="tel:<?php echo esc_attr($contact['phone']); ?>" class="btn btn-outline">Call Now</a>
                                        <?php endif; ?>
                                    <?php endif; ?>
                                </div>
                            </div>
                        <?php endforeach; ?>
                    </div>
                <?php else: ?>
                    <div class="no-attorneys">
                        <p>No certified attorneys currently listed in <?php echo esc_html($city_name); ?>. Please check nearby cities or <a href="/find-attorney/">search our full directory</a>.</p>
                    </div>
                <?php endif; ?>
            </div>
            
            <div class="cost-estimates">
                <h3>Local Cost Estimates for <?php echo esc_html($city_name); ?></h3>
                <div class="cost-grid">
                    <div class="cost-item">
                        <h4>Basic Will with Bitcoin Provisions</h4>
                        <p class="cost-range">$1,500 - $3,500</p>
                        <p class="cost-description">Simple estate planning with cryptocurrency inheritance instructions</p>
                    </div>
                    <div class="cost-item">
                        <h4>Comprehensive Estate Plan</h4>
                        <p class="cost-range">$5,000 - $15,000</p>
                        <p class="cost-description">Trust-based planning with advanced Bitcoin protection strategies</p>
                    </div>
                    <div class="cost-item">
                        <h4>Complex Digital Asset Planning</h4>
                        <p class="cost-range">$10,000 - $50,000</p>
                        <p class="cost-description">Multi-generational planning with advanced structures</p>
                    </div>
                </div>
                <p class="cost-disclaimer">*Costs vary based on complexity and attorney experience. Consultation required for accurate estimates.</p>
            </div>
            
            <div class="call-to-action">
                <h3>Ready to Protect Your Bitcoin Legacy?</h3>
                <p>Connect with a BEPC certified attorney in <?php echo esc_html($city_name); ?> today to discuss your Bitcoin estate planning needs.</p>
                <div class="cta-buttons">
                    <a href="/find-attorney/" class="btn btn-primary">Find Attorney</a>
                    <a href="/resources/guide/" class="btn btn-outline">Free Planning Guide</a>
                </div>
            </div>
        </div>
    </div>
</main>

<?php get_footer(); ?>