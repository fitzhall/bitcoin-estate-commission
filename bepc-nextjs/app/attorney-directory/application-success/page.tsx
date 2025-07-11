import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Application Received | BEPC Attorney Directory',
  description: 'Thank you for applying to the Bitcoin Estate Planning Commission attorney directory.',
}

export default function ApplicationSuccess() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold mb-4">Application Received!</h1>
            <p className="text-xl text-gray-600 mb-8">
              Thank you for applying to the BEPC Attorney Directory
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-8 text-left">
            <h2 className="text-2xl font-bold mb-4">What Happens Next?</h2>
            <ol className="space-y-4 text-gray-700">
              <li className="flex">
                <span className="font-bold mr-3">1.</span>
                <div>
                  <strong>Application Review</strong> - Our team will review your application within 48 hours
                </div>
              </li>
              <li className="flex">
                <span className="font-bold mr-3">2.</span>
                <div>
                  <strong>Verification</strong> - We'll verify your bar membership and credentials
                </div>
              </li>
              <li className="flex">
                <span className="font-bold mr-3">3.</span>
                <div>
                  <strong>Welcome Email</strong> - You'll receive onboarding information and next steps
                </div>
              </li>
              <li className="flex">
                <span className="font-bold mr-3">4.</span>
                <div>
                  <strong>Profile Setup</strong> - Complete your directory profile with photo and bio
                </div>
              </li>
            </ol>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h3 className="font-bold mb-2">Check Your Email</h3>
            <p className="text-gray-700">
              We've sent a confirmation email with additional resources about Bitcoin estate planning 
              and information about BEPC certification opportunities.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">While You Wait...</h3>
            <p className="text-gray-600">
              Explore our resources to enhance your Bitcoin estate planning knowledge:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/education" className="btn btn-primary">
                Browse Education Resources
              </Link>
              <Link href="/standards/keep-protocol" className="btn btn-outline">
                Learn About KEEP Protocol
              </Link>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t">
            <p className="text-sm text-gray-600">
              Questions about your application? Contact us at{' '}
              <a href="mailto:directory@bitcoinestatecommission.org" className="text-primary hover:underline">
                directory@bitcoinestatecommission.org
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}