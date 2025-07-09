import { Metadata } from 'next'
import Link from 'next/link'
import { LeadMagnetCTA } from '@/components/LeadMagnetCTA'

export const metadata: Metadata = {
  title: 'KEEP Protocol - Key Emergency Estate Protocol | BEPC',
  description: 'Learn about the KEEP Protocol - the professional standard for Bitcoin inheritance ensuring 24-hour emergency access while maintaining security.',
}

export default function KEEPProtocolPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-12 md:py-20">
        <div className="container max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Professional Standard
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The KEEP Protocol
            </h1>
            
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Key Emergency Estate Protocol - The professional standard ensuring your beneficiaries 
              can access Bitcoin inheritance within 24 hours while maintaining security during your lifetime.
            </p>
          </div>

          {/* What is KEEP */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">What is the KEEP Protocol?</h2>
            <p className="text-gray-700 mb-6">
              The Key Emergency Estate Protocol (KEEP) is a comprehensive framework developed by the 
              Bitcoin Estate Planning Commission to solve the fundamental challenge of Bitcoin inheritance: 
              how to ensure beneficiaries can access digital assets after death while maintaining 
              absolute security during the owner's lifetime.
            </p>
            
            <div className="bg-primary/5 border-l-4 border-primary p-6 mb-8">
              <p className="text-gray-800 italic">
                "Traditional estate planning fails with Bitcoin because there's no bank to call, 
                no password reset, and no customer service. KEEP provides the professional standard 
                for secure Bitcoin inheritance."
              </p>
              <p className="text-sm text-gray-600 mt-2">
                - BEPC Standards Committee
              </p>
            </div>
          </div>

          {/* Core Components */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Core Components of KEEP</h2>
            
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-accent font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Multi-Signature Security</h3>
                    <p className="text-gray-700">
                      Utilizes 2-of-3 or 3-of-5 multi-signature wallets to prevent single points of failure. 
                      Keys are distributed among trusted parties, attorneys, and secure locations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-accent font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Time-Locked Transactions</h3>
                    <p className="text-gray-700">
                      Implements Bitcoin's native time-lock features to create automatic inheritance 
                      transfers that activate after a specified period of inactivity.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-accent font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Emergency Access Procedures</h3>
                    <p className="text-gray-700">
                      Detailed protocols for beneficiaries to access funds within 24 hours of verification, 
                      including legal documentation requirements and verification processes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-accent font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Annual Security Reviews</h3>
                    <p className="text-gray-700">
                      Mandatory yearly audits of security arrangements, key holder verification, 
                      and updates to beneficiary information and access procedures.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Benefits of KEEP Protocol</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">For Bitcoin Holders</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Peace of mind knowing assets are secure</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">No risk of premature access</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Flexibility to update arrangements</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Professional documentation</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">For Beneficiaries</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">24-hour emergency access guarantee</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Clear instructions and procedures</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Legal protection and documentation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Professional support available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Implementation Requirements */}
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Implementation Requirements</h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-primary font-bold mr-3">•</span>
                <div>
                  <strong className="text-gray-900">Hardware Wallets:</strong>
                  <span className="text-gray-700"> Minimum of 3 hardware wallets for multi-signature setup</span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-primary font-bold mr-3">•</span>
                <div>
                  <strong className="text-gray-900">Legal Documentation:</strong>
                  <span className="text-gray-700"> Comprehensive estate planning documents referencing digital assets</span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-primary font-bold mr-3">•</span>
                <div>
                  <strong className="text-gray-900">Key Holders:</strong>
                  <span className="text-gray-700"> Trusted individuals or institutions to hold backup keys</span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-primary font-bold mr-3">•</span>
                <div>
                  <strong className="text-gray-900">Annual Maintenance:</strong>
                  <span className="text-gray-700"> Commitment to yearly security reviews and updates</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary to-primary-light text-white rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4">Ready to Implement KEEP Protocol?</h2>
            <p className="mb-6">
              Download the complete Bitcoin Estate Planning Standards to get detailed implementation 
              guides, templates, and best practices for the KEEP Protocol.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/get-standards" className="inline-flex items-center justify-center bg-white text-primary hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg transition-colors">
                Download Standards
              </Link>
              <Link href="/find-attorney" className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-6 py-3 rounded-lg transition-colors">
                Find KEEP-Certified Attorney
              </Link>
            </div>
          </div>

          {/* Additional Resources */}
          <div className="border-t pt-8">
            <h3 className="text-lg font-semibold mb-4">Additional Resources</h3>
            <div className="space-y-2">
              <Link href="/standards" className="text-primary hover:underline block">
                → View All Bitcoin Estate Planning Standards
              </Link>
              <Link href="/certification" className="text-primary hover:underline block">
                → Attorney Certification Program
              </Link>
              <Link href="/resources" className="text-primary hover:underline block">
                → Resource Library
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}