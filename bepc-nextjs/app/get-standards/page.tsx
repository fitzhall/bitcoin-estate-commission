import { Metadata } from 'next'
import { EmailCapture } from '@/components/EmailCapture'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Download Bitcoin Estate Planning Standards - BEPC',
  description: 'Get early access to the comprehensive Bitcoin Estate Planning Standards. Join 500+ attorneys and thousands of Bitcoin holders securing their digital legacy.',
  openGraph: {
    title: 'Free: Bitcoin Estate Planning Standards (2025 Draft)',
    description: 'The definitive guide to securing your Bitcoin inheritance. Research-based standards used by attorneys nationwide.',
    type: 'website',
  }
}

export default function GetStandardsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Compelling Value Prop */}
      <section className="py-12 md:py-20">
        <div className="container max-w-4xl">
          {/* Trust Badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Trusted by 500+ Attorneys Nationwide
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-center text-gray-900 mb-6">
            The Bitcoin Estate Planning Standards
            <span className="block text-2xl md:text-3xl text-gray-600 font-normal mt-4">
              2025 Early Access Draft
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            The comprehensive framework preventing $4.6 billion in annual Bitcoin inheritance losses. 
            Get the exact standards used by BEPC certified attorneys to protect digital wealth.
          </p>

          {/* Value Proposition Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Complete Framework</h3>
              <p className="text-gray-600 text-sm">
                47-page comprehensive guide covering every aspect of Bitcoin estate planning
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">KEEP Protocol</h3>
              <p className="text-gray-600 text-sm">
                Key Emergency Estate Protocol ensuring 24-hour beneficiary access
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Expert Reviewed</h3>
              <p className="text-gray-600 text-sm">
                Developed with input from estate attorneys, tax experts, and technologists
              </p>
            </div>
          </div>

          {/* Email Capture Form */}
          <EmailCapture 
            source="get-standards-page"
            variant="hero"
            title="Get Your Free Copy Now"
            description="Join thousands securing their Bitcoin legacy with professional standards"
            buttonText="Download Standards (PDF)"
            className="mb-12"
          />

          {/* What's Inside Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              What You'll Learn Inside
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Multi-Signature Security</h4>
                    <p className="text-sm text-gray-600">How to prevent single points of failure in Bitcoin inheritance</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Tax Optimization Strategies</h4>
                    <p className="text-sm text-gray-600">Legal methods to minimize estate tax on digital assets</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Emergency Access Protocols</h4>
                    <p className="text-sm text-gray-600">24-hour beneficiary access without compromising security</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">State-Specific Requirements</h4>
                    <p className="text-sm text-gray-600">Compliance with digital asset laws in all 50 states</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Trust Structure Templates</h4>
                    <p className="text-sm text-gray-600">Pre-drafted language for Bitcoin-specific trusts</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Hardware Wallet Integration</h4>
                    <p className="text-sm text-gray-600">Best practices for cold storage in estate planning</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Annual Review Checklist</h4>
                    <p className="text-sm text-gray-600">Keep your Bitcoin estate plan current and secure</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Real Case Studies</h4>
                    <p className="text-sm text-gray-600">Learn from actual Bitcoin inheritance successes and failures</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="bg-gradient-to-r from-primary to-primary-light text-white rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-center mb-8">
              Trusted by Professionals Nationwide
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-white/90">Attorneys Reviewing</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">47</div>
                <div className="text-white/90">Pages of Standards</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">$140B</div>
                <div className="text-white/90">Bitcoin Protected</div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <blockquote className="text-center">
                <p className="text-lg italic mb-4">
                  "These standards are the most comprehensive framework I've seen for Bitcoin estate planning. 
                  Every attorney dealing with digital assets needs this."
                </p>
                <cite className="text-white/80">
                  — Sarah Johnson, Estate Planning Attorney, San Francisco
                </cite>
              </blockquote>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-4 max-w-3xl mx-auto">
              <details className="bg-white rounded-lg shadow-sm border border-gray-100">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:text-primary">
                  Who are these standards for?
                </summary>
                <div className="px-6 pb-4 text-gray-600">
                  <p>The Bitcoin Estate Planning Standards are designed for:</p>
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>Bitcoin holders wanting to protect their digital legacy</li>
                    <li>Estate planning attorneys expanding into cryptocurrency</li>
                    <li>Financial advisors with crypto-holding clients</li>
                    <li>Family members concerned about Bitcoin inheritance</li>
                  </ul>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-sm border border-gray-100">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:text-primary">
                  Is this really free?
                </summary>
                <div className="px-6 pb-4 text-gray-600">
                  Yes! The early access draft is completely free. We believe everyone should have access to 
                  professional Bitcoin estate planning standards. The final version will be available to 
                  BEPC certified attorneys.
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-sm border border-gray-100">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:text-primary">
                  How is this different from generic estate planning?
                </summary>
                <div className="px-6 pb-4 text-gray-600">
                  Traditional estate planning doesn't address the unique challenges of Bitcoin: private keys, 
                  multi-signature wallets, hardware security, and blockchain-specific tax implications. These 
                  standards were created specifically for digital assets.
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-sm border border-gray-100">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:text-primary">
                  Do I need an attorney to use these standards?
                </summary>
                <div className="px-6 pb-4 text-gray-600">
                  While the standards provide valuable information for Bitcoin holders, we strongly recommend 
                  working with a BEPC certified attorney to implement them properly. Complex estates especially 
                  benefit from professional guidance.
                </div>
              </details>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Don't Let Your Bitcoin Become Lost Forever
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              4 million Bitcoin are already lost forever. Without proper estate planning, 
              your digital wealth could join them. Get the standards now and protect your legacy.
            </p>
            
            <EmailCapture 
              source="get-standards-page-bottom"
              variant="inline"
              title="Download Your Free Copy"
              description="Enter your email to receive the Bitcoin Estate Planning Standards instantly"
              buttonText="Get Standards Now"
            />

            <p className="text-sm text-gray-500 mt-8">
              Questions? <Link href="/contact" className="text-primary hover:underline">Contact us</Link> or 
              {' '}<Link href="/find-attorney" className="text-primary hover:underline">find a certified attorney</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}