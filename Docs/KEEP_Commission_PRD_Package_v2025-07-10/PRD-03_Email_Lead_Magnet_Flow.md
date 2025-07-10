PRD-03 — "Email Lead Magnet Flow Upgrade"

Version 1.0 – 2025-07-10
Author: Manus AI (draft for review)
Target release: Week 3 sprint (ship by 2025-07-31)

⸻

1 Problem Statement

Current Standards PDF download is buried mid-page with weak conversion. No email nurture sequence exists to convert downloads into licensing prospects or Council applicants.

Gaps:
	1.	Download CTA placement reduces visibility and conversion potential.
	2.	No segmentation between attorneys, families, and other prospects.
	3.	Missing automated nurture sequence to build trust and drive demos.

Result: low email capture rate (~6.5%), poor lead qualification, and missed conversion opportunities.

⸻

2 Objective + KPI

Objective: Maximize email capture with prominent above-fold placement and convert downloads into qualified licensing prospects through targeted nurture sequences.

KPI	Current	Target (post-launch)
Standards download conversion	6.5%	≥ 15%
Email list growth	~40/month	150+/month
Demo booking rate (attorneys)	<1%	≥ 8%
Email open rate (sequence)	N/A	≥ 55%
Click-through rate (sequence)	N/A	≥ 12%

⸻

3 User Stories
	1.	Attorney Jennifer visits homepage, immediately sees prominent Standards download, provides email + role, and receives targeted attorney nurture sequence leading to demo booking.
	2.	Family member David downloads Standards, gets family-focused emails about heir protection, and refers to estate planning attorney in network.
	3.	Consultant Maria downloads Standards, receives "Other" sequence, and applies for Council expert position.

⸻

4 Functional Requirements

4.1 Inline Form Above Fold

Element	Requirement
Placement	Hero section, below headline but above secondary CTAs
Form fields	Name (required), Email (required), Role (radio: Attorney/Family/Other)
CTA copy	"📄 Download Draft Standards (32-page PDF)"
Visual design	Prominent but not overwhelming; matches brand colors
Validation	Real-time email validation; required field indicators
Thank you	Modal confirmation with download link + "Check email for bonus content"

4.2 Email Automation Sequences

4.2.1 Attorney Sequence (5 emails, 7-day intervals)

Email	Subject	Content Focus	CTA
1	"Your Standards PDF + Quick-Start Checklist"	Delivery + implementation checklist	Download checklist
2	"Case Study: Lost 7 BTC Because..."	Real loss story + prevention	Read full case study
3	"30-Min Standards Walk-Through (This Week)"	Invite to live demo webinar	Register for webinar
4	"KEEP Licensing: Your Malpractice Shield"	Soft pitch licensing benefits	Schedule demo call
5	"Final Check: Are You Protected?"	Survey + direct offer	Book consultation

4.2.2 Family Sequence (5 emails, 5-day intervals)

Email	Subject	Content Focus	CTA
1	"Your Bitcoin Estate Guide + Heir Checklist"	Delivery + family checklist	Download checklist
2	"The $2M Inheritance That Vanished"	Family loss story + prevention	Read protection guide
3	"Find Qualified Bitcoin Estate Attorneys"	Directory preview + value	Search directory
4	"Protect Your Family's Digital Wealth"	Educational content + tools	Download toolkit
5	"Your Next Step: Professional Guidance"	Attorney referral + consultation	Find local attorney

4.2.3 Other Sequence (3 emails, 10-day intervals)

Email	Subject	Content Focus	CTA
1	"Your Standards PDF + Expert Resources"	Delivery + additional resources	Access resource library
2	"Join the Bitcoin Estate Planning Council"	Council application invitation	Apply for Council
3	"Partnership Opportunities Available"	Business development outreach	Schedule partnership call

4.3 ESP Integration & Tracking

Element	Requirement
Platform	MailerLite or ConvertKit (existing integration)
Tagging	Auto-tag by role: 'attorney-new', 'family-new', 'other-new'
UTM tracking	All links: utm_source=standards&utm_campaign=sequence_[role]
Analytics	Track open rates, click rates, conversion rates by sequence
CRM sync	Qualified leads (demo bookings) sync to HubSpot/Pipedrive

⸻

5 Non-Functional Requirements

Area	Requirement
Email deliverability	SPF, DKIM, DMARC configured; sender reputation monitoring
Mobile optimization	All emails responsive; CTA buttons ≥ 44px touch target
Compliance	GDPR/CAN-SPAM compliant; unsubscribe in every email
Performance	Form submission < 2s; email delivery < 5 minutes
A/B testing	Subject line testing for each sequence; 20% test split

⸻

6 Acceptance Criteria (Done Definition)
	1.	Inline form renders above fold on homepage with proper validation and styling.
	2.	All three email sequences configured in ESP with correct triggers and timing.
	3.	Role-based tagging works correctly; test submissions create proper tags.
	4.	UTM tracking implemented on all email links; GA events fire correctly.
	5.	Mobile email templates render properly across iOS/Android/Gmail/Outlook.
	6.	Unsubscribe links work; compliance footer included in all emails.
	7.	Demo booking integration works for attorney sequence (calendly/hubspot).
	8.	A/B testing framework operational for subject line optimization.

⸻

7 Dependencies
	•	Content team: Email copy for all sequences, case studies, checklists, subject line variants.
	•	Design: Email templates, inline form design, mobile optimization.
	•	Engineering: Form integration, ESP API setup, UTM tracking, CRM sync.
	•	Marketing: ESP account setup, deliverability configuration, analytics dashboard.
	•	Sales: Demo booking process, lead qualification criteria, follow-up procedures.

⸻

8 Risks & Mitigation

Risk	Likelihood	Impact	Mitigation
Low email deliverability	Med	High	Proper authentication setup; gradual volume ramp; reputation monitoring
Form abandonment	Med	Med	Minimal required fields; real-time validation; progress indicators
Sequence fatigue	Low	Med	Value-first content; clear unsubscribe; engagement monitoring
CRM sync failures	Low	High	Webhook backup; manual sync process; error monitoring

⸻

9 Post-Launch Metrics Review
	•	Daily monitoring for first week: form conversion, email delivery rates.
	•	Weekly sequence performance review: open rates, click rates, unsubscribe rates.
	•	Monthly cohort analysis: download-to-demo conversion by role segment.
	•	A/B test subject lines monthly; implement winning variants.
	•	Quarterly sequence optimization based on engagement data.

⸻

— End PRD-03

