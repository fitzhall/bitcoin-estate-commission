# PRD-01 — Authority Patches (Hero Rewrite & Council Teaser)

**Author / Date:** Manus AI, 2025-07-10  
**Primary Owner:** Design / Content  
**Launch Target:** Week 1 (July 17, 2025)

## Problem
Current hero section over-promises with "500+ attorneys" claim that has no proof, creating credibility risk with legal audience. Missing transparency around Council formation process damages trust with skeptical attorney prospects.

## Objective / KPI
- Remove all unsubstantiated claims by EOW
- Increase hero CTA click-through rate by 15%
- Reduce bounce rate from hero section by 10%
- Zero credibility complaints in feedback forms

## User Stories
1. **As a skeptical estate planning attorney**, I can see transparent messaging about program status so I don't dismiss the site as "crypto hype."
2. **As a potential Council member**, I can understand the application process and see that seats are available.
3. **As a journalist fact-checking**, I can verify all claims made on the homepage.

## Functional Requirements

### Hero Section Updates
- Replace "500+ attorneys" with "Early Access Program Now Forming"
- Update subheading to "Join leading estate planners shaping Bitcoin inheritance standards"
- Maintain existing CTA buttons but update copy to "Join Early Access" and "Download Standards"

### New Council Teaser Section
- Add section below hero: "Advisory Council Forming"
- Include 6 silhouette placeholders with "Seat Available" labels
- Add 2 founding expert bios (even if advisors) with LinkedIn badges
- CTA: "Apply for Council Seat" → leads to application form

### Quote Attribution Fix
- Link existing ABA committee quote to source or replace with "testimonial placeholder"
- Add disclaimer: "Testimonials represent individual opinions"

## Non-Functional / SEO
- Maintain existing page load speed (<1s)
- Preserve existing schema markup
- Ensure mobile responsiveness for new Council section
- A/B test hero messaging (50/50 split for 2 weeks)

## Content Sources
- Legal team review for claim accuracy
- LinkedIn profiles for founding expert bios
- Application form integration (Typeform or native)

## Acceptance Criteria
✓ All numerical claims removed or substantiated with evidence  
✓ Council section renders correctly on mobile/desktop  
✓ Expert bios include verifiable credentials (LinkedIn, bar admission)  
✓ Quote attribution links work or quotes replaced  
✓ Legal team approves all messaging  
✓ A/B test tracking implemented for hero variants  

## Dependencies
- Legal review of new messaging
- Expert bio content and photos
- Application form setup
- Design tokens for Council section

## Risks / Mitigations
- **Risk:** Removing "500+" reduces perceived scale  
  **Mitigation:** Emphasize exclusivity and "early access" positioning
- **Risk:** Council section looks empty  
  **Mitigation:** Use "Seat Available" as feature, not bug
- **Risk:** Expert bios insufficient credibility  
  **Mitigation:** Focus on quality over quantity; one strong bio better than weak ones

## Owner
Design Lead + Content Manager

## Target Ship
2025-07-17

