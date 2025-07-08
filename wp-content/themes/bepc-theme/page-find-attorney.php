<?php
/**
 * Template for the Find Attorney page
 *
 * @package BEPC
 */

get_header(); ?>

<main id="main" class="site-main attorney-directory">
    <div class="container">
        <header class="page-header">
            <h1>Find a Certified Bitcoin Estate Planning Attorney</h1>
            <p class="page-subtitle">Connect with BEPC certified attorneys specializing in Bitcoin and cryptocurrency estate planning</p>
        </header>

        <div class="attorney-search-form">
            <form id="attorney-search" class="search-form" method="get" action="/find-attorney/">
                <div class="search-fields">
                    <div class="field-group">
                        <label for="location">Location</label>
                        <input type="text" id="location" name="location" placeholder="City, State or ZIP code" value="<?php echo esc_attr($_GET['location'] ?? ''); ?>">
                    </div>
                    
                    <div class="field-group">
                        <label for="specialization">Specialization</label>
                        <select id="specialization" name="specialization">
                            <option value="">All Specializations</option>
                            <option value="bitcoin-trust-planning" <?php selected($_GET['specialization'] ?? '', 'bitcoin-trust-planning'); ?>>Bitcoin Trust Planning</option>
                            <option value="cryptocurrency-inheritance" <?php selected($_GET['specialization'] ?? '', 'cryptocurrency-inheritance'); ?>>Cryptocurrency Inheritance</option>
                            <option value="digital-asset-probate" <?php selected($_GET['specialization'] ?? '', 'digital-asset-probate'); ?>>Digital Asset Probate</option>
                            <option value="multisig-estate-planning" <?php selected($_GET['specialization'] ?? '', 'multisig-estate-planning'); ?>>Multisig Estate Planning</option>
                            <option value="bitcoin-tax-planning" <?php selected($_GET['specialization'] ?? '', 'bitcoin-tax-planning'); ?>>Bitcoin Tax Planning</option>
                        </select>
                    </div>
                    
                    <div class="field-group">
                        <label for="certification">Certification Level</label>
                        <select id="certification" name="certification">
                            <option value="">All Levels</option>
                            <option value="Foundation" <?php selected($_GET['certification'] ?? '', 'Foundation'); ?>>Foundation</option>
                            <option value="Advanced" <?php selected($_GET['certification'] ?? '', 'Advanced'); ?>>Advanced</option>
                            <option value="Expert" <?php selected($_GET['certification'] ?? '', 'Expert'); ?>>Expert</option>
                        </select>
                    </div>
                    
                    <div class="field-group">
                        <button type="submit" class="btn btn-primary">Search Attorneys</button>
                    </div>
                </div>
            </form>
        </div>

        <div class="search-results" id="attorney-results">
            <?php
            // Get search parameters
            $location = $_GET['location'] ?? '';
            $specialization = $_GET['specialization'] ?? '';
            $certification = $_GET['certification'] ?? '';
            
            // Get attorneys from database
            $attorneys = bepc_get_attorneys($location, $specialization, $certification);
            
            if ($attorneys && count($attorneys) > 0) :
            ?>
                <div class="results-header">
                    <h2>Search Results</h2>
                    <p class="results-count"><?php echo count($attorneys); ?> attorneys found</p>
                </div>
                
                <div class="attorney-grid">
                    <?php foreach ($attorneys as $attorney) : ?>
                        <div class="attorney-card">
                            <div class="attorney-image">
                                <?php if ($attorney->profile_image) : ?>
                                    <img src="<?php echo esc_url($attorney->profile_image); ?>" alt="<?php echo esc_attr($attorney->name); ?>">
                                <?php else : ?>
                                    <div class="attorney-placeholder">
                                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#6c757d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                                <?php endif; ?>
                            </div>
                            
                            <div class="attorney-info">
                                <div class="attorney-header">
                                    <h3><?php echo esc_html($attorney->name); ?></h3>
                                    <span class="certification-badge certification-<?php echo esc_attr(strtolower($attorney->certification_level)); ?>">
                                        <?php echo esc_html($attorney->certification_level); ?> Certified
                                    </span>
                                </div>
                                
                                <?php if ($attorney->firm_name) : ?>
                                    <p class="firm-name"><?php echo esc_html($attorney->firm_name); ?></p>
                                <?php endif; ?>
                                
                                <div class="attorney-location">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.3639 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#6c757d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#6c757d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <span>
                                        <?php
                                        $location_info = bepc_get_attorney_location($attorney->city_id, $attorney->state_id);
                                        echo esc_html($location_info['city'] . ', ' . $location_info['state']);
                                        ?>
                                    </span>
                                </div>
                                
                                <?php if ($attorney->years_experience) : ?>
                                    <div class="attorney-experience">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 2V6L15 4L12 2Z" stroke="#6c757d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M12 6V22" stroke="#6c757d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M7 12L12 17L17 12" stroke="#6c757d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        <span><?php echo esc_html($attorney->years_experience); ?> years experience</span>
                                    </div>
                                <?php endif; ?>
                                
                                <?php if ($attorney->bio) : ?>
                                    <p class="attorney-bio"><?php echo esc_html(wp_trim_words($attorney->bio, 25)); ?></p>
                                <?php endif; ?>
                                
                                <?php if ($attorney->specializations) : ?>
                                    <div class="attorney-specializations">
                                        <h4>Specializations:</h4>
                                        <div class="specialization-tags">
                                            <?php
                                            $specializations = json_decode($attorney->specializations, true);
                                            if ($specializations) {
                                                foreach ($specializations as $spec) {
                                                    echo '<span class="specialization-tag">' . esc_html($spec) . '</span>';
                                                }
                                            }
                                            ?>
                                        </div>
                                    </div>
                                <?php endif; ?>
                                
                                <div class="attorney-actions">
                                    <a href="/attorney/<?php echo esc_attr($attorney->slug); ?>/bitcoin-estate-planning/<?php echo esc_attr($location_info['state_code']); ?>/" class="btn btn-primary">View Profile</a>
                                    <?php if ($attorney->contact_info) : ?>
                                        <?php
                                        $contact = json_decode($attorney->contact_info, true);
                                        if (isset($contact['phone'])) :
                                        ?>
                                            <a href="tel:<?php echo esc_attr($contact['phone']); ?>" class="btn btn-outline">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30511 3.09849 2.44779 2.85669 2.63503 2.65162C2.82226 2.44655 3.05023 2.28271 3.30421 2.17052C3.5582 2.05833 3.83276 2.00026 4.10999 2H7.10999C7.59531 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04207 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.89391 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5865 14.4865 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 21.005 16.92H22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                                Call
                                            </a>
                                        <?php endif; ?>
                                    <?php endif; ?>
                                </div>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
                
                <div class="pagination">
                    <!-- Pagination would go here -->
                </div>
                
            <?php else : ?>
                <div class="no-results">
                    <div class="no-results-icon">
                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#6c757d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M21 21L16.65 16.65" stroke="#6c757d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <h3>No attorneys found</h3>
                    <p>Try adjusting your search criteria or <a href="/find-attorney/">browse all attorneys</a>.</p>
                </div>
            <?php endif; ?>
        </div>

        <div class="why-certified">
            <div class="why-certified-content">
                <h2>Why Choose BEPC Certified Attorneys?</h2>
                <div class="benefits-grid">
                    <div class="benefit-item">
                        <div class="benefit-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#1B365D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <h3>Specialized Training</h3>
                        <p>Completed rigorous BEPC certification program covering Bitcoin technology, security, and legal frameworks</p>
                    </div>
                    
                    <div class="benefit-item">
                        <div class="benefit-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L3 7L12 12L21 7L12 2Z" stroke="#1B365D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M3 17L12 22L21 17" stroke="#1B365D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M3 12L12 17L21 12" stroke="#1B365D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <h3>KEEP Protocol Compliance</h3>
                        <p>Follows industry-standard security protocols for key management and estate planning execution</p>
                    </div>
                    
                    <div class="benefit-item">
                        <div class="benefit-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#1B365D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <h3>Ongoing Education</h3>
                        <p>Maintains current knowledge through continuing education and stays updated on regulatory changes</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>

<?php get_footer(); ?>