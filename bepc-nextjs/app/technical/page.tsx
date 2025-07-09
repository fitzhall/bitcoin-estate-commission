import { Metadata } from 'next'
import Link from 'next/link'
import { EmailCapture } from '@/components/EmailCapture'

export const metadata: Metadata = {
  title: 'Technical Implementation - Bitcoin Estate Planning Commission',
  description: 'Technical guides, security protocols, and implementation frameworks for Bitcoin estate planning.',
  openGraph: {
    title: 'Bitcoin Estate Planning Technical Guides',
    description: 'Comprehensive technical implementation resources for secure Bitcoin inheritance solutions.',
    type: 'website',
  }
}

export default function TechnicalPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-12 md:py-20">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Coming March 2025
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Technical Implementation
            </h1>
            
            <p className="text-xl text-gray-700 mb-8">
              Advanced technical guides and security protocols for Bitcoin estate planning are launching soon.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Coming Technical Resources</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Implementation Guides</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Multi-Signature Wallet Setup
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Hardware Wallet Integration
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Time-Locked Transactions
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Security Protocols</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Key Distribution Strategies
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Emergency Access Procedures
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Security Audit Checklists
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <EmailCapture
            source="technical-coming-soon"
            variant="hero"
            title="Get Early Access to Technical Guides"
            description="Be notified when technical implementation resources launch."
            buttonText="Notify Me"
          />

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Learn about our technical framework:
            </p>
            <Link
              href="/standards/keep-protocol"
              className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
            >
              Explore KEEP Protocol
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export const dynamic = 'force-static'