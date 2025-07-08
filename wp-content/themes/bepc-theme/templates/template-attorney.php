<?php
/**
 * Template for individual attorney profile pages
 *
 * @package BEPC
 */

get_header();

$attorney_data = get_query_var('attorney_data');
$attorney_slug = get_query_var('bepc_attorney');
$specialization = get_query_var('bepc_specialization');
$location = get_query_var('bepc_location');

if (!$attorney_data) {
    // Redirect to directory if attorney not found
    wp_redirect(home_url('/find-attorney/'));
    exit;
}

$location_info = bepc_get_attorney_location($attorney_data->city_id, $attorney_data->state_id);
$specializations = json_decode($attorney_data->specializations, true) ?: array();
$contact_info = json_decode($attorney_data->contact_info, true) ?: array();
$client_reviews = json_decode($attorney_data->client_reviews, true) ?: array();

?>

<main id="main" class="site-main attorney-profile">
    <div class="container">
        <?php bepc_breadcrumbs(); ?>
        
        <div class="attorney-profile-header">
            <div class="attorney-profile-image">
                <?php if ($attorney_data->profile_image) : ?>
                    <img src="<?php echo esc_url($attorney_data->profile_image); ?>" alt="<?php echo esc_attr($attorney_data->name); ?>">
                <?php else : ?>
                    <div class="attorney-placeholder">
                        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#6c757d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                <?php endif; ?>
            </div>
            
            <div class="attorney-profile-info">
                <div class="attorney-profile-title">
                    <h1><?php echo esc_html($attorney_data->name); ?></h1>
                    <span class="certification-badge certification-<?php echo esc_attr(strtolower($attorney_data->certification_level)); ?>">
                        <?php echo esc_html($attorney_data->certification_level); ?> Certified
                    </span>
                </div>
                
                <?php if ($attorney_data->firm_name) : ?>
                    <p class="firm-name"><?php echo esc_html($attorney_data->firm_name); ?></p>
                <?php endif; ?>
                
                <div class="attorney-meta">
                    <div class="meta-item">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.3639 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#6c757d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#6c757d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span><?php echo esc_html($location_info['city'] . ', ' . $location_info['state']); ?></span>
                    </div>
                    
                    <?php if ($attorney_data->years_experience) : ?>
                        <div class="meta-item">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2V6L15 4L12 2Z" stroke="#6c757d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12 6V22" stroke="#6c757d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M7 12L12 17L17 12" stroke="#6c757d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span><?php echo esc_html($attorney_data->years_experience); ?> years experience</span>
                        </div>
                    <?php endif; ?>
                </div>
                
                <div class="attorney-contact-actions">
                    <?php if (isset($contact_info['phone'])) : ?>
                        <a href="tel:<?php echo esc_attr($contact_info['phone']); ?>" class="btn btn-primary">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30511 3.09849 2.44779 2.85669 2.63503 2.65162C2.82226 2.44655 3.05023 2.28271 3.30421 2.17052C3.5582 2.05833 3.83276 2.00026 4.10999 2H7.10999C7.59531 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04207 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.89391 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5865 14.4865 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 21.005 16.92H22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Call Now
                        </a>
                    <?php endif; ?>
                    
                    <?php if (isset($contact_info['email'])) : ?>
                        <a href="mailto:<?php echo esc_attr($contact_info['email']); ?>" class="btn btn-outline">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Email
                        </a>
                    <?php endif; ?>
                </div>
            </div>
        </div>
        
        <div class="attorney-profile-content">
            <div class="main-content">
                <?php if ($attorney_data->bio) : ?>
                    <section class="attorney-bio">
                        <h2>About <?php echo esc_html($attorney_data->name); ?></h2>
                        <div class="bio-content">
                            <?php echo wpautop(esc_html($attorney_data->bio)); ?>
                        </div>
                    </section>
                <?php endif; ?>
                
                <?php if (!empty($specializations)) : ?>
                    <section class="attorney-specializations">
                        <h2>Specializations</h2>
                        <div class="specializations-grid">
                            <?php foreach ($specializations as $spec) : ?>
                                <div class="specialization-card">
                                    <h3><?php echo esc_html($spec); ?></h3>
                                    <p><?php echo esc_html(bepc_get_specialization_description($spec)); ?></p>
                                </div>
                            <?php endforeach; ?>
                        </div>
                    </section>
                <?php endif; ?>
                
                <?php if (!empty($client_reviews)) : ?>
                    <section class="attorney-reviews">
                        <h2>Client Reviews</h2>
                        <div class="reviews-grid">
                            <?php foreach (array_slice($client_reviews, 0, 3) as $review) : ?>
                                <div class="review-card">
                                    <div class="review-rating">
                                        <?php for ($i = 1; $i <= 5; $i++) : ?>
                                            <span class="star <?php echo $i <= $review['rating'] ? 'filled' : ''; ?>">★</span>
                                        <?php endfor; ?>
                                    </div>
                                    <p class="review-text">"<?php echo esc_html($review['text']); ?>"</p>
                                    <div class="review-author">
                                        <strong><?php echo esc_html($review['author']); ?></strong>
                                        <span class="review-date"><?php echo esc_html($review['date']); ?></span>
                                    </div>
                                </div>
                            <?php endforeach; ?>
                        </div>
                    </section>
                <?php endif; ?>
                
                <section class="attorney-credentials">
                    <h2>Credentials & Certification</h2>
                    <div class="credentials-content">
                        <div class="certification-info">
                            <div class="certification-badge-large certification-<?php echo esc_attr(strtolower($attorney_data->certification_level)); ?>">
                                <?php echo esc_html($attorney_data->certification_level); ?>
                            </div>
                            <div class="certification-details">
                                <h3>BEPC <?php echo esc_html($attorney_data->certification_level); ?> Certification</h3>
                                <p><?php echo esc_html(bepc_get_certification_description($attorney_data->certification_level)); ?></p>
                            </div>
                        </div>
                        
                        <?php if ($attorney_data->years_experience) : ?>
                            <div class="experience-info">
                                <h3>Experience</h3>
                                <p><?php echo esc_html($attorney_data->years_experience); ?> years practicing law with specialization in Bitcoin and cryptocurrency estate planning.</p>
                            </div>
                        <?php endif; ?>
                    </div>
                </section>
            </div>
            
            <div class="sidebar">
                <div class="contact-card">
                    <h3>Contact Information</h3>
                    
                    <?php if ($attorney_data->firm_name) : ?>
                        <div class="contact-item">
                            <strong>Firm:</strong> <?php echo esc_html($attorney_data->firm_name); ?>
                        </div>
                    <?php endif; ?>
                    
                    <div class="contact-item">
                        <strong>Location:</strong> <?php echo esc_html($location_info['city'] . ', ' . $location_info['state']); ?>
                    </div>
                    
                    <?php if (isset($contact_info['phone'])) : ?>
                        <div class="contact-item">
                            <strong>Phone:</strong> <a href="tel:<?php echo esc_attr($contact_info['phone']); ?>"><?php echo esc_html($contact_info['phone']); ?></a>
                        </div>
                    <?php endif; ?>
                    
                    <?php if (isset($contact_info['email'])) : ?>
                        <div class="contact-item">
                            <strong>Email:</strong> <a href="mailto:<?php echo esc_attr($contact_info['email']); ?>"><?php echo esc_html($contact_info['email']); ?></a>
                        </div>
                    <?php endif; ?>
                    
                    <div class="contact-actions">
                        <?php if (isset($contact_info['phone'])) : ?>
                            <a href="tel:<?php echo esc_attr($contact_info['phone']); ?>" class="btn btn-primary btn-block">Call Now</a>
                        <?php endif; ?>
                        
                        <?php if (isset($contact_info['email'])) : ?>
                            <a href="mailto:<?php echo esc_attr($contact_info['email']); ?>" class="btn btn-outline btn-block">Send Email</a>
                        <?php endif; ?>
                    </div>
                </div>
                
                <div class="certification-card">
                    <h3>Certification Level</h3>
                    <div class="certification-badge-large certification-<?php echo esc_attr(strtolower($attorney_data->certification_level)); ?>">
                        <?php echo esc_html($attorney_data->certification_level); ?>
                    </div>
                    <p><?php echo esc_html(bepc_get_certification_description($attorney_data->certification_level)); ?></p>
                    <a href="/certification/" class="btn btn-outline btn-block">Learn About Certification</a>
                </div>
                
                <?php
                $nearby_attorneys = bepc_get_nearby_attorneys($attorney_data->city_id, $attorney_data->state_id, $attorney_data->id);
                if (!empty($nearby_attorneys)) :
                ?>
                    <div class="nearby-attorneys">
                        <h3>Other Attorneys in <?php echo esc_html($location_info['city']); ?></h3>
                        <div class="nearby-list">
                            <?php foreach ($nearby_attorneys as $nearby) : ?>
                                <div class="nearby-attorney">
                                    <h4><a href="/attorney/<?php echo esc_attr($nearby->slug); ?>/bitcoin-estate-planning/<?php echo esc_attr($location_info['state_code']); ?>/"><?php echo esc_html($nearby->name); ?></a></h4>
                                    <p class="nearby-certification"><?php echo esc_html($nearby->certification_level); ?> Certified</p>
                                </div>
                            <?php endforeach; ?>
                        </div>
                    </div>
                <?php endif; ?>
            </div>
        </div>
    </div>
</main>

<?php get_footer(); ?>

<?php
/**
 * Helper functions for attorney profile
 */

function bepc_get_specialization_description($specialization) {
    $descriptions = array(
        'Bitcoin Trust Planning' => 'Comprehensive planning for Bitcoin holdings in trust structures, including revocable and irrevocable trusts.',
        'Cryptocurrency Inheritance' => 'Planning for the transfer of cryptocurrency assets upon death, including direct transfer and probate processes.',
        'Digital Asset Probate' => 'Navigating probate court for digital asset distribution, including asset recovery and valuation.',
        'Multisig Estate Planning' => 'Estate planning using multi-signature Bitcoin wallets for enhanced security and control.',
        'Bitcoin Tax Planning' => 'Tax optimization strategies for Bitcoin estate planning, including capital gains and estate tax considerations.'
    );
    
    return $descriptions[$specialization] ?? 'Specialized expertise in Bitcoin and cryptocurrency estate planning.';
}

function bepc_get_certification_description($level) {
    $descriptions = array(
        'Expert' => 'Highest level of BEPC certification, qualified to handle complex Bitcoin estate planning scenarios including multisig arrangements and international considerations.',
        'Advanced' => 'Advanced certification covering complex Bitcoin estate planning strategies, trust structures, and tax optimization.',
        'Foundation' => 'Foundation level certification demonstrating core competency in Bitcoin estate planning principles and basic implementation.'
    );
    
    return $descriptions[$level] ?? 'BEPC certified attorney with specialized Bitcoin estate planning training.';
}
?>