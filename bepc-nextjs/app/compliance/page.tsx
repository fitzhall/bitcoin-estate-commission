import { Metadata } from 'next'
import Link from 'next/link'
import { EmailCapture } from '@/components/EmailCapture'

export const metadata: Metadata = {
  title: 'Regulatory Compliance - Bitcoin Estate Planning Commission',
  description: 'Regulatory frameworks, compliance procedures, and legal guidelines for Bitcoin estate planning.',
  openGraph: {
    title: 'Bitcoin Estate Planning Compliance Resources',
    description: 'Comprehensive regulatory compliance guidance for Bitcoin inheritance and estate planning.',
    type: 'website',
  }
}

export default function CompliancePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-12 md:py-20">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Coming April 2025
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Regulatory Compliance
            </h1>
            
            <p className="text-xl text-gray-700 mb-8">
              Comprehensive compliance frameworks and regulatory guidelines for Bitcoin estate planning are launching soon.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Upcoming Compliance Resources</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Regulatory Frameworks</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    State-by-State Compliance Guide
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Federal Tax Compliance
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    AML/KYC Requirements
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Professional Guidelines</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Ethics and Professional Conduct
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Liability Protection Strategies
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Compliance Audit Procedures
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <EmailCapture
            source="compliance-coming-soon"
            variant="hero"
            title="Stay Updated on Compliance Resources"
            description="Get notified when regulatory compliance guides launch."
            buttonText="Notify Me"
          />

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Start with our professional standards:
            </p>
            <Link
              href="/professional-standards"
              className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
            >
              View Professional Standards
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