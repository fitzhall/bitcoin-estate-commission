import { Metadata } from 'next'
import Link from 'next/link'
import { CertificationWaitlistForm } from '@/components/CertificationWaitlistForm'

export const metadata: Metadata = {
  title: 'Apply for Certification - Bitcoin Estate Planning Commission',
  description: 'Apply for BEPC certification and join the network of specialized Bitcoin estate planning attorneys.',
}

export default function CertificationApplyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="py-20">
        <div className="container max-w-4xl">
          {/* Coming Soon Badge */}
          <div className="text-center mb-8">
            <span className="inline-flex items-center bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Applications Opening Soon
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6">
            BEPC Certification Application
          </h1>

          <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            Join the elite network of Bitcoin estate planning professionals
          </p>

          {/* Coming Soon Content */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 mb-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Certification Program Launching Q4 2025
              </h2>

              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                We're finalizing our comprehensive certification program to ensure the highest standards 
                for Bitcoin estate planning professionals.
              </p>

              {/* What to Expect */}
              <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left max-w-2xl mx-auto">
                <h3 className="font-semibold text-gray-900 mb-4">What the Certification Includes:</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <strong className="text-gray-900">Comprehensive Training</strong>
                      <p className="text-sm text-gray-600">40+ hours of Bitcoin-specific estate planning education</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <strong className="text-gray-900">KEEP Protocol Certification</strong>
                      <p className="text-sm text-gray-600">Master the Keep Bitcoin Safe protocol</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <strong className="text-gray-900">Practice Resources</strong>
                      <p className="text-sm text-gray-600">Templates, tools, and ongoing support</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <strong className="text-gray-900">Network Access</strong>
                      <p className="text-sm text-gray-600">Join our exclusive professional community</p>
                    </div>
                  </div>
                </div>
              </div>


              <p className="text-sm text-gray-500">
                Expected launch: Q4 2025 • Limited spots available
              </p>
            </div>
          </div>

          {/* Waitlist Form */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-3">
              Join the Certification Waitlist
            </h2>
            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
              Be among the first to know when applications open and receive priority consideration for the inaugural cohort.
            </p>
            <CertificationWaitlistForm />
          </div>

          {/* Requirements Preview */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Certification Requirements (Preview)
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Prerequisites</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Active bar membership</li>
                  <li>• 3+ years estate planning experience</li>
                  <li>• Professional liability insurance</li>
                  <li>• Clean disciplinary record</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Program Investment</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• $2,995 certification fee</li>
                  <li>• 40 hours of training</li>
                  <li>• Annual renewal: $495</li>
                  <li>• CLE credits included</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Alternative Actions */}
          <div className="text-center">
            <p className="text-gray-600 mb-6">
              While you wait for applications to open:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-standards" className="btn btn-primary">
                Download Standards
              </Link>
              <Link href="/certification" className="btn btn-outline">
                Learn More About Certification
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}