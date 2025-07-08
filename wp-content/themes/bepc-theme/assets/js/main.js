/**
 * Bitcoin Estate Planning Commission Theme JavaScript
 *
 * @package BEPC
 */

(function($) {
    'use strict';

    // DOM Ready
    $(document).ready(function() {
        initializeTheme();
        setupMenuToggle();
        setupAjaxSearch();
        setupFormValidation();
        setupAnalytics();
        setupPerformanceOptimizations();
    });

    /**
     * Initialize theme functionality
     */
    function initializeTheme() {
        // Smooth scrolling for anchor links
        $('a[href^="#"]').on('click', function(e) {
            e.preventDefault();
            const target = $(this.getAttribute('href'));
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 100
                }, 500);
            }
        });

        // Lazy loading for images
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }

        // Initialize tooltips
        $('[data-tooltip]').hover(
            function() {
                const tooltip = $('<div class="tooltip">' + $(this).data('tooltip') + '</div>');
                $('body').append(tooltip);
                tooltip.css({
                    position: 'absolute',
                    top: $(this).offset().top - tooltip.outerHeight() - 10,
                    left: $(this).offset().left + $(this).outerWidth() / 2 - tooltip.outerWidth() / 2
                }).fadeIn(200);
            },
            function() {
                $('.tooltip').remove();
            }
        );
    }

    /**
     * Setup mobile menu toggle
     */
    function setupMenuToggle() {
        const menuToggle = $('.menu-toggle');
        const navigation = $('.main-navigation');
        
        menuToggle.on('click', function() {
            const isExpanded = $(this).attr('aria-expanded') === 'true';
            $(this).attr('aria-expanded', !isExpanded);
            navigation.toggleClass('menu-open');
        });

        // Close menu when clicking outside
        $(document).on('click', function(e) {
            if (!$(e.target).closest('.site-header').length) {
                menuToggle.attr('aria-expanded', 'false');
                navigation.removeClass('menu-open');
            }
        });

        // Close menu on escape key
        $(document).on('keydown', function(e) {
            if (e.keyCode === 27) {
                menuToggle.attr('aria-expanded', 'false');
                navigation.removeClass('menu-open');
            }
        });
    }

    /**
     * Setup AJAX search functionality
     */
    function setupAjaxSearch() {
        const searchForm = $('#searchform');
        const searchResults = $('#search-results');
        let searchTimeout;

        if (searchForm.length) {
            const searchInput = searchForm.find('input[type="search"]');
            
            searchInput.on('input', function() {
                const query = $(this).val().trim();
                
                clearTimeout(searchTimeout);
                
                if (query.length < 3) {
                    searchResults.hide();
                    return;
                }
                
                searchTimeout = setTimeout(function() {
                    performSearch(query);
                }, 300);
            });
        }

        function performSearch(query) {
            $.ajax({
                url: bepc_ajax.ajax_url,
                type: 'POST',
                data: {
                    action: 'bepc_search',
                    query: query,
                    nonce: bepc_ajax.nonce
                },
                beforeSend: function() {
                    searchResults.html('<div class="search-loading">Searching...</div>').show();
                },
                success: function(response) {
                    if (response.success) {
                        searchResults.html(response.data).show();
                    } else {
                        searchResults.html('<div class="search-error">Search failed. Please try again.</div>').show();
                    }
                },
                error: function() {
                    searchResults.html('<div class="search-error">Search failed. Please try again.</div>').show();
                }
            });
        }
    }

    /**
     * Setup form validation
     */
    function setupFormValidation() {
        const forms = $('form[data-validate]');
        
        forms.each(function() {
            const form = $(this);
            const submitButton = form.find('button[type="submit"]');
            
            form.on('submit', function(e) {
                e.preventDefault();
                
                if (validateForm(form)) {
                    submitForm(form);
                }
            });
            
            // Real-time validation
            form.find('input, textarea, select').on('blur', function() {
                validateField($(this));
            });
        });

        function validateForm(form) {
            let isValid = true;
            
            form.find('[required]').each(function() {
                if (!validateField($(this))) {
                    isValid = false;
                }
            });
            
            return isValid;
        }

        function validateField(field) {
            const value = field.val().trim();
            const fieldType = field.attr('type');
            let isValid = true;
            let errorMessage = '';
            
            // Required field check
            if (field.attr('required') && !value) {
                isValid = false;
                errorMessage = 'This field is required.';
            }
            
            // Email validation
            else if (fieldType === 'email' && value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    isValid = false;
                    errorMessage = 'Please enter a valid email address.';
                }
            }
            
            // Phone validation
            else if (fieldType === 'tel' && value) {
                const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
                if (!phoneRegex.test(value)) {
                    isValid = false;
                    errorMessage = 'Please enter a valid phone number.';
                }
            }
            
            // Update field display
            field.removeClass('field-error field-success');
            field.next('.field-error-message').remove();
            
            if (!isValid) {
                field.addClass('field-error');
                field.after('<div class="field-error-message">' + errorMessage + '</div>');
            } else if (value) {
                field.addClass('field-success');
            }
            
            return isValid;
        }

        function submitForm(form) {
            const formData = new FormData(form[0]);
            const submitButton = form.find('button[type="submit"]');
            const originalText = submitButton.text();
            
            formData.append('action', 'bepc_form_submit');
            formData.append('nonce', bepc_ajax.nonce);
            
            $.ajax({
                url: bepc_ajax.ajax_url,
                type: 'POST',
                data: formData,
                processData: false,
                contentType: false,
                beforeSend: function() {
                    submitButton.text('Submitting...').prop('disabled', true);
                },
                success: function(response) {
                    if (response.success) {
                        form.html('<div class="form-success">' + response.data + '</div>');
                        trackEvent('Form', 'Submit', form.attr('id'));
                    } else {
                        showFormError(form, response.data);
                    }
                },
                error: function() {
                    showFormError(form, 'There was an error submitting the form. Please try again.');
                },
                complete: function() {
                    submitButton.text(originalText).prop('disabled', false);
                }
            });
        }

        function showFormError(form, message) {
            form.find('.form-error').remove();
            form.prepend('<div class="form-error">' + message + '</div>');
        }
    }

    /**
     * Setup analytics tracking
     */
    function setupAnalytics() {
        // Track external links
        $('a[href^="http"]').not('a[href*="' + window.location.hostname + '"]').on('click', function() {
            const url = $(this).attr('href');
            trackEvent('External Link', 'Click', url);
        });

        // Track downloads
        $('a[href$=".pdf"], a[href$=".doc"], a[href$=".docx"], a[href$=".zip"]').on('click', function() {
            const file = $(this).attr('href');
            trackEvent('Download', 'Click', file);
        });

        // Track attorney contact clicks
        $('.attorney-card .btn-primary').on('click', function() {
            const attorneyName = $(this).closest('.attorney-card').find('h3').text();
            trackEvent('Attorney Contact', 'Click', attorneyName);
        });

        // Track search usage
        $('#searchform').on('submit', function() {
            const query = $(this).find('input[type="search"]').val();
            trackEvent('Search', 'Submit', query);
        });
    }

    /**
     * Performance optimizations
     */
    function setupPerformanceOptimizations() {
        // Preload critical resources
        const criticalLinks = [
            '/find-attorney/',
            '/certification/',
            '/resources/guide/'
        ];
        
        criticalLinks.forEach(link => {
            const linkEl = document.createElement('link');
            linkEl.rel = 'prefetch';
            linkEl.href = link;
            document.head.appendChild(linkEl);
        });

        // Optimize images
        $('img').each(function() {
            const img = $(this);
            
            // Add loading attribute
            if (!img.attr('loading')) {
                img.attr('loading', 'lazy');
            }
            
            // Add alt text if missing
            if (!img.attr('alt')) {
                img.attr('alt', '');
            }
        });

        // Debounce scroll events
        let scrollTimeout;
        $(window).on('scroll', function() {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(handleScroll, 10);
        });

        function handleScroll() {
            const scrollTop = $(window).scrollTop();
            
            // Header scroll effect
            if (scrollTop > 100) {
                $('.site-header').addClass('scrolled');
            } else {
                $('.site-header').removeClass('scrolled');
            }
            
            // Progress bar (if exists)
            const progressBar = $('.reading-progress');
            if (progressBar.length) {
                const docHeight = $(document).height();
                const windowHeight = $(window).height();
                const scrollPercent = (scrollTop / (docHeight - windowHeight)) * 100;
                progressBar.css('width', scrollPercent + '%');
            }
        }
    }

    /**
     * Track events for analytics
     */
    function trackEvent(category, action, label) {
        if (typeof gtag !== 'undefined') {
            gtag('event', action, {
                event_category: category,
                event_label: label
            });
        }
    }

    /**
     * Initialize on window load
     */
    $(window).on('load', function() {
        // Remove loading states
        $('body').removeClass('loading');
        
        // Initialize any remaining components
        initializeCalculators();
        setupLocationSearch();
    });

    /**
     * Initialize calculator tools
     */
    function initializeCalculators() {
        const calculators = $('.calculator-tool');
        
        calculators.each(function() {
            const calculator = $(this);
            const form = calculator.find('form');
            
            form.on('submit', function(e) {
                e.preventDefault();
                runCalculation(calculator);
            });
        });

        function runCalculation(calculator) {
            const formData = calculator.find('form').serialize();
            const calculatorType = calculator.data('calculator');
            
            $.ajax({
                url: bepc_ajax.ajax_url,
                type: 'POST',
                data: formData + '&action=bepc_calculator&calculator=' + calculatorType + '&nonce=' + bepc_ajax.nonce,
                success: function(response) {
                    if (response.success) {
                        calculator.find('.calculator-results').html(response.data).show();
                        trackEvent('Calculator', 'Use', calculatorType);
                    }
                }
            });
        }
    }

    /**
     * Setup location-based search
     */
    function setupLocationSearch() {
        const locationSearch = $('#location-search');
        
        if (locationSearch.length) {
            locationSearch.on('input', function() {
                const query = $(this).val();
                
                if (query.length >= 2) {
                    searchLocations(query);
                }
            });
        }

        function searchLocations(query) {
            $.ajax({
                url: bepc_ajax.ajax_url,
                type: 'POST',
                data: {
                    action: 'bepc_location_search',
                    query: query,
                    nonce: bepc_ajax.nonce
                },
                success: function(response) {
                    if (response.success) {
                        displayLocationResults(response.data);
                    }
                }
            });
        }

        function displayLocationResults(results) {
            const resultsContainer = $('#location-results');
            resultsContainer.html(results).show();
            
            // Handle result clicks
            resultsContainer.find('.location-result').on('click', function() {
                const location = $(this).data('location');
                window.location.href = location;
            });
        }
    }

})(jQuery);