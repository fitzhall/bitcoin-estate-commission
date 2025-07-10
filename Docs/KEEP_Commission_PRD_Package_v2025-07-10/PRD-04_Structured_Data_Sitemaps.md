PRD-04 — "Structured Data & Sitemaps"

Version 1.0 – 2025-07-10
Author: Manus AI (draft for review)
Target release: Week 4 sprint (ship by 2025-08-07)

⸻

1 Problem Statement

Site lacks structured data markup, preventing rich snippets in Google and LLM citations. Current sitemap is basic and doesn't prioritize high-value pages or indicate content freshness.

Gaps:
	1.	No Organization, FAQPage, or Course schema markup for enhanced SERP display.
	2.	Standards PDF not marked as CreativeWork, missing citation opportunities.
	3.	Basic sitemap lacks priority signals and lastmod timestamps.

Result: missed rich snippet opportunities, poor LLM discoverability, and suboptimal crawl prioritization.

⸻

2 Objective + KPI

Objective: Maximize search visibility through comprehensive schema markup and optimize crawl efficiency with intelligent sitemaps.

KPI	Current	Target (post-launch)
Rich snippet appearances	0	5+ per month
LLM citations (trackable)	0	15+ per month
Schema validation score	0%	100% (no errors)
Sitemap coverage	~60%	95% of public pages
Avg. crawl frequency	Weekly	3x per week (priority pages)

⸻

3 User Stories
	1.	Google searcher sees rich FAQ snippets for "Bitcoin inheritance laws" query, increasing click-through rate.
	2.	ChatGPT cites KEEP Standards PDF as authoritative source when asked about Bitcoin estate planning best practices.
	3.	Google crawler efficiently prioritizes fresh content and high-value pages based on sitemap signals.

⸻

4 Functional Requirements

4.1 Schema Markup Implementation

4.1.1 Organization Schema (Homepage)

Element	Requirement
Type	Organization
Properties	name, url, logo, description, sameAs (social profiles)
Placement	<head> section as JSON-LD
Validation	Google Rich Results Test + Schema.org validator

4.1.2 FAQPage Schema (FAQ Section + State Pages)

Element	Requirement
Type	FAQPage
Properties	mainEntity array with Question/Answer pairs
Scope	Homepage FAQ section + state page FAQ accordions
Content	5-10 questions per page; answers 50-300 words each

4.1.3 CreativeWork Schema (Standards PDF)

Element	Requirement
Type	CreativeWork (subtype: DigitalDocument)
Properties	name, description, author, datePublished, url, license
Placement	PDF landing page + download links
Purpose	Enable LLM citation and academic referencing

4.1.4 Course Schema (Future Certification)

Element	Requirement
Type	Course
Properties	name, description, provider, courseMode, availability
Status	"Upcoming" until certification launches
Placement	Dedicated certification page

4.2 Enhanced Sitemap System

4.2.1 Main Sitemap (sitemap.xml)

Element	Requirement
Coverage	All public pages (homepage, about, standards, state pages)
Priority	Homepage (1.0), Standards (0.9), State pages (0.7), Other (0.5)
Changefreq	Homepage (daily), Standards (weekly), State pages (monthly)
Lastmod	Dynamic timestamps based on content updates

4.2.2 State Pages Sitemap (sitemap_states.xml)

Element	Requirement
Scope	All /attorneys/:state pages
Auto-generation	Nightly rebuild as new state pages added
Indexing	Reference from main sitemap.xml
Validation	XML schema compliance + Google Search Console submission

4.3 Technical Implementation

Element	Requirement
JSON-LD format	All schema markup in JSON-LD (not microdata/RDFa)
Dynamic generation	Schema generated server-side with current data
Validation pipeline	Automated testing in CI/CD for schema errors
Monitoring	Weekly schema validation reports + error alerts

⸻

5 Non-Functional Requirements

Area	Requirement
Performance	Schema markup adds <5KB per page; no render blocking
Validation	100% schema.org compliance; zero Google Rich Results errors
Maintenance	Automated sitemap generation; manual schema review quarterly
Monitoring	Google Search Console integration; weekly crawl reports

⸻

6 Acceptance Criteria (Done Definition)
	1.	All schema types validate 100% in Google Rich Results Test and Schema.org validator.
	2.	Organization schema appears correctly in Google Knowledge Panel preview.
	3.	FAQ schema generates rich snippets in Google SERP testing tool.
	4.	Standards PDF schema enables proper citation format for academic use.
	5.	Main sitemap includes all public pages with correct priority/changefreq values.
	6.	State sitemap auto-generates nightly and updates when new pages added.
	7.	Google Search Console shows improved crawl frequency for priority pages.
	8.	Zero schema validation errors in automated testing pipeline.

⸻

7 Dependencies
	•	Content team: FAQ content optimization, Standards PDF metadata, schema content review.
	•	Engineering: JSON-LD implementation, sitemap generation, validation pipeline.
	•	SEO: Priority/changefreq strategy, Google Search Console setup, monitoring dashboard.
	•	Design: Rich snippet preview testing, SERP appearance optimization.

⸻

8 Risks & Mitigation

Risk	Likelihood	Impact	Mitigation
Schema markup errors	Med	Med	Automated validation in CI/CD; manual review process
Performance impact	Low	Low	Lightweight JSON-LD; performance monitoring
Rich snippets not appearing	Med	Low	Conservative implementation; Google guidelines compliance
Sitemap crawl issues	Low	Med	XML validation; Google Search Console monitoring

⸻

9 Post-Launch Metrics Review
	•	Weekly Google Search Console monitoring for rich snippet appearances.
	•	Monthly schema validation audit using automated tools.
	•	Quarterly review of crawl frequency and indexing performance.
	•	Track LLM citations through mention monitoring tools (Google Alerts, Brand24).
	•	A/B test FAQ schema content for optimal rich snippet performance.

⸻

— End PRD-04

