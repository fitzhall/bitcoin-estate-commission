PRD-01 — "Authority Patch" Launch

Version 1.0 – 2025-07-10
Author: Manus AI (draft for review)
Target release: Week 1 sprint (ship by 2025-07-17)

⸻

1 Problem Statement

Early-stage visitors (especially attorneys) land on bitcoinestatecommission.org and ask:
"Who exactly is behind this? Why should I trust it?"

Gaps:
	1.	Hero copy claims "500+ attorneys" with zero proof, triggering skepticism.
	2.	Council bios & founder credentials are absent, creating credibility vacuum.
	3.	Quotations / stats appear without citations, risking false-endorsement claims.

Result: lower email conversions, higher bounce, and ammunition for "crypto hype" dismissal.

⸻

2 Objective + KPI

Objective: Establish immediate perceived legitimacy so attorneys feel safe downloading the Standards and joining the waitlist.

KPI	Current	Target (post-launch)
Homepage bounce rate	~65%	< 50%
Draft Standards download CR	~8%	≥ 15%
Avg. time on homepage	~35s	> 60s
Council interest form fills	0/week	5+/week

⸻

3 User Stories
	1.	Attorney Jessica arrives via Google, skims hero, and within 5 seconds understands this is a neutral standards body (not just a vendor) → she clicks Download Draft Standards.
	2.	Journalist Evan researching "Bitcoin inheritance standards" sees named experts + source links and cites the commission without fact-checking hurdles.
	3.	Prospective council lawyer sees an explicit "Council seats open" panel and submits the interest form instead of exiting.

⸻

4 Functional Requirements

4.1 Hero Section 2.0

Element	Requirement
H1	"The Bitcoin Estate Planning Commission"
Sub-headline	"Setting the professional standard that protects $471B in digital family wealth."
Stat replacement	Replace "500+ attorneys" with "Early Access Program Now Forming"
CTA #1	Primary button "📄 Download Draft Standards" → modal form (name + email + role radio).
CTA #2	Secondary text link "Apply for Council (Limited Seats)" → jump to Council Teaser.
Visual	Commission seal (SVG) + minimal background; keep CLS < 0.1

4.2 Council Teaser Block

Element	Requirement
Placement	Directly below hero
Copy	"We are onboarding 3-5 founding Council experts to guide Bitcoin estate planning standards..."
Cards	3 silhouette cards labeled "Seat Available – Estate Attorney," "Seat Available – Digital Custody Expert," "Seat Available – Tax Counsel."
Apply CTA	Button → /council-interest form (existing HubSpot form)
Founding bios	Add 2 actual expert bios (even if advisors) with LinkedIn badges

4.3 Authority Ribbon

Strip across top of fold:

"Referenced by ABA ethics panels • Quoted in Bloomberg Law • Aligned with RUFADAA (50 states)"

Each phrase links to a verifiable external source or is removed until source ready. Hard requirement: no unlinked claims.

4.4 Evidence Links Fix
	•	Any statistic or quote displayed must include an inline superscript "↗" linking to PDF or news article.
	•	If source not yet live, move content to draft; do not show on production.
	•	Add disclaimer: "Testimonials represent individual opinions"

⸻

5 Non-Functional Requirements

Area	Requirement
SEO	Preserve existing H1-H3 order; add Organization JSON-LD (legalName, url, logo).
Performance	New assets < 200 KB; Largest Contentful Paint < 2s mobile.
Accessibility	Button contrasts ≥ 4.5:1; alt text on seal.
Tracking	GTM event for standards_download, council_interest_click.
A/B Testing	50/50 split on hero messaging for 2 weeks

⸻

6 Acceptance Criteria (Done Definition)
	1.	Homepage on staging displays new hero copy and dual CTAs; no layout shift > 0.1 CLS.
	2.	Council Teaser block visible with three "Seat Available" cards; Apply CTA correctly routes to form.
	3.	Every statistic/quote on homepage has working outbound link (opens new tab).
	4.	GA event fires on Standards modal submit and Council Apply click.
	5.	Lighthouse mobile score ≥ 80, accessibility ≥ 90.
	6.	QA: attorney-reviewer signs off that no claim is misleading.
	7.	Stakeholder walk-through recording completed & posted to Slack.
	8.	2 founding expert bios include verifiable credentials (LinkedIn, bar admission).

⸻

7 Dependencies
	•	Content team: final hero copy, Council teaser text, vetted citations, expert bios.
	•	Design: SVG seal asset @2×; responsive hero layout; Council card design.
	•	Engineering: modal form hookup to MailerLite list standards_download; JSON-LD snippet injection.
	•	Legal/PR: approve outbound citations list; review expert bio accuracy.

⸻

8 Risks & Mitigation

Risk	Likelihood	Impact	Mitigation
Missing credible bios by launch	Med	Medium	Use "Seat Available" placeholders; don't fabricate.
Performance regression via large hero image	Low	Low	Serve compressed SVG; pre-connect fonts.
Quote source not publicly accessible	Med	High	Swap to data point with available source or remove.
"Early Access" reduces perceived scale	Med	Low	Emphasize exclusivity positioning; quality over quantity.

⸻

9 Post-Launch Metrics Review
	•	Review GA & Hotjar after 7 days; compare KPIs vs baseline.
	•	If bounce > 55%, schedule A/B on hero headline.
	•	Monitor Council interest form completion rate; optimize if <3/week.

⸻

— End PRD-01

