import { Metadata } from 'next'
import Link from 'next/link'
import { OrganizationSchema } from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Bitcoin Estate Planning Certification | BEPC',
  description: 'Why 500+ estate attorneys are getting Bitcoin certified before their competition. Comprehensive training, professional certification, and ongoing education.',
  keywords: 'bitcoin estate planning certification, cryptocurrency attorney certification, BEPC certification, bitcoin inheritance training',
}

export default function CertificationPage() {
  return (
    <>
      <OrganizationSchema />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-light text-white py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Why 500+ Estate Attorneys Are Getting Bitcoin Certified Before Their Competition
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              The comprehensive certification program for attorneys who want to master Bitcoin estate planning
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/certification/apply" className="btn btn-secondary btn-lg">
                Apply for Certification
              </Link>
              <Link href="#curriculum" className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary">
                View Curriculum
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Opening Hook */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-8">
              <p className="text-lg font-medium text-gray-900 mb-4">
                "A simple question is separating successful estate attorneys from those losing $50M+ in potential fees..."
              </p>
              <p className="text-xl font-bold text-gray-900 mb-4">
                "How do you properly draft multisig provisions in a dynasty trust?"
              </p>
              <p className="text-gray-700">
                If you paused even for a second, you're not alone. 89% of estate attorneys surveyed couldn't answer this basic Bitcoin estate planning question.
              </p>
              <p className="text-gray-700 mt-4">
                But here's what's interesting: The 11% who could answer are charging 3x higher fees and have 6-month waiting lists.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              The $50 Million Question Every Estate Attorney Faces
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-red-600">Without Bitcoin Certification</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>Turn away wealthy Bitcoin clients</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>Risk malpractice from technical errors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>Lose to tech-savvy competitors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>Miss the digital wealth transfer wave</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-green-600">With BEPC Certification</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Command 3x higher fees confidently</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Attract high-net-worth Bitcoin clients</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Lead your market in digital assets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Build 6-figure Bitcoin practices</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Levels */}
      <section id="levels" className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            Three Certification Levels to Match Your Journey
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Foundation */}
            <div className="border-2 border-gray-200 rounded-lg p-8 hover:border-green-500 transition-colors">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <span className="text-2xl font-bold text-green-600">F</span>
                </div>
                <h3 className="text-2xl font-bold">Foundation</h3>
                <p className="text-gray-600">Essential Bitcoin Estate Planning</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <p className="font-semibold">Requirements:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• 40 hours initial training</li>
                  <li>• Basic cryptocurrency exam</li>
                  <li>• 10 supervised cases</li>
                  <li>• Annual CLE requirements</li>
                </ul>
              </div>
              
              <div className="space-y-4 mb-8">
                <p className="font-semibold">You'll Master:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Bitcoin fundamentals for attorneys</li>
                  <li>• Wallet types and security basics</li>
                  <li>• Simple will provisions</li>
                  <li>• Client intake procedures</li>
                </ul>
              </div>
              
              <Link href="/certification/apply?level=foundation" className="btn btn-outline btn-md w-full">
                Start with Foundation
              </Link>
            </div>

            {/* Advanced */}
            <div className="border-2 border-primary rounded-lg p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                  MOST POPULAR
                </span>
              </div>
              
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <span className="text-2xl font-bold text-primary">A</span>
                </div>
                <h3 className="text-2xl font-bold">Advanced</h3>
                <p className="text-gray-600">Complex Bitcoin Planning</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <p className="font-semibold">Requirements:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Foundation + 2 years experience</li>
                  <li>• 80 hours advanced training</li>
                  <li>• Technical competency exam</li>
                  <li>• 25 completed cases</li>
                </ul>
              </div>
              
              <div className="space-y-4 mb-8">
                <p className="font-semibold">You'll Master:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Multi-signature implementations</li>
                  <li>• Complex trust structures</li>
                  <li>• Tax optimization strategies</li>
                  <li>• KEEP Framework integration</li>
                </ul>
              </div>
              
              <Link href="/certification/apply?level=advanced" className="btn btn-primary btn-md w-full">
                Apply for Advanced
              </Link>
            </div>

            {/* Expert */}
            <div className="border-2 border-gray-200 rounded-lg p-8 hover:border-secondary transition-colors">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                  <span className="text-2xl font-bold text-secondary">E</span>
                </div>
                <h3 className="text-2xl font-bold">Expert</h3>
                <p className="text-gray-600">Industry Leadership</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <p className="font-semibold">Requirements:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Advanced + 5 years experience</li>
                  <li>• 120 hours specialized training</li>
                  <li>• Published research/speaking</li>
                  <li>• 50+ completed cases</li>
                </ul>
              </div>
              
              <div className="space-y-4 mb-8">
                <p className="font-semibold">You'll Master:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Dynasty trust optimization</li>
                  <li>• International planning</li>
                  <li>• Regulatory compliance</li>
                  <li>• Practice development</li>
                </ul>
              </div>
              
              <Link href="/certification/apply?level=expert" className="btn btn-secondary btn-md w-full">
                Qualify for Expert
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section id="curriculum" className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Comprehensive Curriculum Designed by Industry Leaders
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-6">Technical Mastery</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Bitcoin technology fundamentals</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Wallet types and security protocols</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Multi-signature implementation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Key management best practices</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-6">Legal Excellence</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Digital asset estate planning law</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Tax optimization strategies</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Trust and will provisions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Regulatory compliance</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Link href="/certification/curriculum" className="btn btn-primary btn-lg">
                View Complete Curriculum
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              What BEPC Certification Gives You
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  feature: "40-hour comprehensive curriculum",
                  benefit: "Master every aspect of Bitcoin estate planning",
                  outcome: "Command premium fees with confidence"
                },
                {
                  feature: "Multisig trust template library",
                  benefit: "Draft complex Bitcoin trusts in minutes, not hours",
                  outcome: "Increase capacity while reducing errors"
                },
                {
                  feature: "Ongoing regulatory updates",
                  benefit: "Stay current with evolving Bitcoin estate law",
                  outcome: "Avoid malpractice from outdated practices"
                },
                {
                  feature: "BEPC attorney directory listing",
                  benefit: "Get found by high-net-worth Bitcoin clients",
                  outcome: "Build a six-figure Bitcoin practice"
                },
                {
                  feature: "Quarterly mastermind sessions",
                  benefit: "Learn from top Bitcoin estate planners",
                  outcome: "Stay ahead of market trends"
                }
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <div className="grid md:grid-cols-3 gap-4 items-center">
                    <div>
                      <p className="font-semibold text-gray-900">Feature:</p>
                      <p className="text-gray-700">{item.feature}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Benefit:</p>
                      <p className="text-gray-700">{item.benefit}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Outcome:</p>
                      <p className="text-primary font-semibold">{item.outcome}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">
              Join 500+ Attorneys Building the Future
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <p className="text-gray-600">Founding Network Members</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-primary mb-2">40</div>
                <p className="text-gray-600">Hours of Expert Training</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-primary mb-2">3x</div>
                <p className="text-gray-600">Average Fee Increase</p>
              </div>
            </div>
            
            <div className="bg-primary text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">
                Limited Founding Member Spots Available
              </h3>
              <p className="text-xl mb-6">
                Join now to lock in founding member benefits and pricing
              </p>
              <Link href="/certification/apply" className="btn btn-secondary btn-lg">
                Apply for Certification Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}