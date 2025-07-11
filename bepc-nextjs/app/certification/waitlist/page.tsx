import { Metadata } from 'next'
import Link from 'next/link'
import { CertificationWaitlistForm } from '@/components/CertificationWaitlistForm'

export const metadata: Metadata = {
  title: 'Join the Waitlist - Bitcoin Estate Planning Certification | BEPC',
  description: 'Be among the first to access the comprehensive Bitcoin Estate Planning Certification when it launches in Q4 2024. Early bird pricing available.',
  keywords: 'bitcoin estate planning certification waitlist, cryptocurrency attorney training, BEPC certification 2024',
}

export default function CertificationWaitlistPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-dark to-primary py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-accent text-white px-6 py-3 rounded-full inline-block font-semibold mb-6">
              Launching Q4 2024
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white drop-shadow-lg">
              Bitcoin Estate Planning Certification Program
            </h1>
            <p className="text-xl text-white/90 mb-8 drop-shadow-md max-w-3xl mx-auto">
              Join the waitlist to be notified when enrollment opens for the premier certification program in Bitcoin estate planning
            </p>
          </div>
        </div>
      </section>

      {/* Waitlist Form - Moved to top for immediate visibility */}
      <section className="py-16 bg-gray-50" id="waitlist">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Join the Certification Waitlist
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Be among the first to know when enrollment opens. No obligation, unsubscribe anytime.
            </p>
            
            <CertificationWaitlistForm />
            
            <p className="text-sm text-gray-500 text-center mt-8">
              By joining the waitlist, you'll receive updates about the certification program 
              and exclusive pre-launch educational content. We respect your privacy and will 
              never share your information.
            </p>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why 500+ Attorneys Are Already on the Waitlist
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl text-accent mb-4">$140B+</div>
                <h3 className="text-xl font-bold mb-2">Market Opportunity</h3>
                <p className="text-gray-600">Bitcoin wealth requiring proper estate planning</p>
              </div>
              <div className="text-center">
                <div className="text-4xl text-accent mb-4">3x</div>
                <h3 className="text-xl font-bold mb-2">Higher Fees</h3>
                <p className="text-gray-600">Average fee premium for Bitcoin-certified attorneys</p>
              </div>
              <div className="text-center">
                <div className="text-4xl text-accent mb-4">89%</div>
                <h3 className="text-xl font-bold mb-2">Unprepared</h3>
                <p className="text-gray-600">Attorneys who can't properly handle Bitcoin estates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Comprehensive Curriculum Preview
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">Technical Foundations</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Bitcoin fundamentals for estate planners</li>
                  <li>• Multi-signature wallet implementation</li>
                  <li>• Hardware wallet security protocols</li>
                  <li>• Key management best practices</li>
                  <li>• Recovery procedures and fail-safes</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">Legal Framework</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• RUFADAA compliance in all 50 states</li>
                  <li>• Digital asset trust structures</li>
                  <li>• Tax optimization strategies</li>
                  <li>• Cross-border considerations</li>
                  <li>• Regulatory compliance updates</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">Practice Development</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Client acquisition strategies</li>
                  <li>• Fee structure optimization</li>
                  <li>• Risk management protocols</li>
                  <li>• Marketing to Bitcoin holders</li>
                  <li>• Building strategic partnerships</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">Advanced Topics</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Lightning Network integration</li>
                  <li>• DeFi and smart contracts</li>
                  <li>• NFT estate planning</li>
                  <li>• Mining operation succession</li>
                  <li>• Emerging technology updates</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Benefits */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Exclusive Waitlist Benefits
            </h2>
            
            <div className="bg-blue-50 rounded-lg p-8 mb-12">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <span className="text-green-500 text-2xl mr-3">✓</span>
                  <div>
                    <h4 className="font-bold mb-1">Early Bird Pricing</h4>
                    <p className="text-gray-700">Save $1,000 off standard enrollment</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 text-2xl mr-3">✓</span>
                  <div>
                    <h4 className="font-bold mb-1">Priority Enrollment</h4>
                    <p className="text-gray-700">First access when registration opens</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 text-2xl mr-3">✓</span>
                  <div>
                    <h4 className="font-bold mb-1">Free Pre-Launch Content</h4>
                    <p className="text-gray-700">Monthly educational resources until launch</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 text-2xl mr-3">✓</span>
                  <div>
                    <h4 className="font-bold mb-1">Founding Member Status</h4>
                    <p className="text-gray-700">Lifetime benefits and recognition</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Form */}
      <section className="py-16 bg-gray-50" id="waitlist">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Join the Certification Waitlist
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Be among the first to know when enrollment opens. No obligation, unsubscribe anytime.
            </p>
            
            <CertificationWaitlistForm />
            
            <p className="text-sm text-gray-500 text-center mt-8">
              By joining the waitlist, you'll receive updates about the certification program 
              and exclusive pre-launch educational content. We respect your privacy and will 
              never share your information.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">When will the certification launch?</h3>
                <p className="text-gray-700">
                  We're targeting Q1 2025 for the official launch. Waitlist members will receive 
                  first notification and early bird pricing at least 30 days before public enrollment.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">What are the prerequisites?</h3>
                <p className="text-gray-700">
                  Active bar membership and at least 2 years of estate planning experience. 
                  No prior Bitcoin knowledge required - we'll teach you everything you need.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">How long is the program?</h3>
                <p className="text-gray-700">
                  The core certification is a 12-week intensive program with live sessions, 
                  self-paced modules, and practical workshops. Expect 5-7 hours per week commitment.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">Is CLE credit available?</h3>
                <p className="text-gray-700">
                  Yes, we're pursuing CLE accreditation in all 50 states. Most attorneys can 
                  expect to earn 15-20 CLE credits, including ethics and technology credits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Don't Let Your Competition Get Certified First
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              Join 500+ forward-thinking attorneys preparing for the Bitcoin wealth transfer
            </p>
            <Link href="#waitlist" className="btn btn-secondary btn-lg">
              Join the Waitlist Now
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}