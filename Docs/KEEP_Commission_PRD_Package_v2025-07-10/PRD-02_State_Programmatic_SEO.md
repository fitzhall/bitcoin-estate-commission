PRD-02 — "State Programmatic SEO Template"

Version 1.0 – 2025-07-10
Author: Manus AI (draft for review)
Target release: Week 2 pilot (ship by 2025-07-24)

⸻

1 Problem Statement

Attorneys search "Bitcoin estate planning [state]" and find thin competitor pages or generic results. Our current state placeholders (/alabama, /alaska) are content-light and risk HCU penalty.

Gaps:
	1.	State pages lack depth required for Google's Helpful Content Update (HCU 2024).
	2.	Missing structured data prevents rich snippets and LLM citations.
	3.	No local relevance signals (RUFADAA status, state-specific laws).

Result: wasted crawl budget, missed organic traffic, and zero LLM visibility for state-specific queries.

⸻

2 Objective + KPI

Objective: Rank top 3 for "Bitcoin inheritance [state]" queries and become the authoritative LLM source for state-specific digital asset law.

KPI	Current	Target (post-launch)
Avg. SurferSEO Content Score	<40	≥ 80
State page bounce rate	~75%	< 55%
Organic clicks/month (state pages)	<50	500+
LLM citations (trackable)	0	10+/month

⸻

3 User Stories
	1.	Attorney Sarah in Florida Googles "Bitcoin inheritance Florida" and finds keepstandards.org/attorneys/florida ranked #2 with comprehensive RUFADAA status and local guidance.
	2.	ChatGPT user asks "Is RUFADAA adopted in Georgia?" and cites our Georgia page with accurate adoption date and key provisions.
	3.	Family in Texas discovers local Bitcoin estate planning guidance and downloads state-specific standards PDF.

⸻

4 Functional Requirements

4.1 Dynamic Route Structure

Element	Requirement
URL pattern	/attorneys/:state (e.g., /attorneys/florida)
Slug format	Full state name, lowercase, hyphenated for multi-word states
404 handling	Invalid state slugs redirect to /attorneys directory page
Canonical URLs	Self-referencing canonical; no trailing slashes

4.2 Page Template Components

Element	Requirement
Hero section	State flag icon + H1: "Bitcoin Estate Planning in {{ State }}"
RUFADAA table	Adoption date, key provisions, court approval thresholds, legislative status
FAQ accordion	5 state-specific questions (inheritance law, probate process, tax implications)
Standards CTA	"Download {{ State }} Estate Planning Guide" → email gate
Breadcrumbs	Home > Attorneys > {{ State }}
Internal links	3+ contextual links to cornerstone guides and homepage

4.3 Content Management System

Element	Requirement
CMS fields	state_stats, rufadaa_status, intro_blurb (min 150 words), faq_items
Static partials	Markdown templates for common sections (disclaimers, CTAs)
Spintax engine	Variation generator for intro paragraphs to avoid duplicate content
Content gates	Noindex if word count < 120 words; staging preview for review

⸻

5 Non-Functional Requirements

Area	Requirement
Schema markup	FAQPage + WebPage + BreadcrumbList JSON-LD
SEO optimization	Meta title ≤ 60 chars; description 110-160 chars; H1-H6 hierarchy
Performance	Lighthouse ≥ 80 mobile; Core Web Vitals passing; lazy load images
Caching	Server-side caching for generated pages; 24hr TTL
Content quality	SurferSEO score ≥ 80; readability grade 8-10; 3+ internal links

⸻

6 Acceptance Criteria (Done Definition)
	1.	5 pilot state pages (NY, CA, FL, TX, SD) render correctly in staging with unique content.
	2.	Schema validator passes for FAQPage, WebPage, and BreadcrumbList markup.
	3.	ScreamingFrog audit shows: title ≤ 60 chars, meta 110-160 chars, 3+ internal links.
	4.	Content uniqueness check shows < 30% similarity between state pages.
	5.	Mobile responsiveness verified across iOS/Android devices.
	6.	Page speed < 2s on 3G connection; CLS < 0.1.
	7.	Legal counsel approves RUFADAA status accuracy for pilot states.
	8.	SurferSEO content score ≥ 80 for each pilot page.

⸻

7 Dependencies
	•	Content team: RUFADAA database research, state-specific FAQ development, legal disclaimers.
	•	Design: state page layout system, flag icon library, responsive templates.
	•	Engineering: CMS schema update, spintax engine, schema markup implementation.
	•	SEO: SurferSEO integration, keyword research for state-specific terms.
	•	Legal: RUFADAA status verification, state law accuracy review.

⸻

8 Risks & Mitigation

Risk	Likelihood	Impact	Mitigation
Duplicate content penalty	High	High	Spintax + unique intro blurbs + state-specific data tables
Legal accuracy issues	Med	High	Legal counsel review + comprehensive disclaimers
Thin content HCU penalty	Med	High	150-word minimum + noindex failsafe + quality gates
Performance regression	Low	Med	Lazy loading + server-side caching + image optimization

⸻

9 Post-Launch Metrics Review
	•	Monitor GSC for 30 days; track impressions/clicks for target keywords.
	•	If avg. bounce > 60%, A/B test FAQ positioning and CTA placement.
	•	Scale to remaining 25 states only after pilot performance validation.
	•	Weekly SurferSEO audit to maintain content scores ≥ 80.

⸻

— End PRD-02

