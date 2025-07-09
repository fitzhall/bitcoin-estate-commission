import { Suspense } from 'react'
import Link from 'next/link'

function ThankYouContent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Check Your Email!
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            We've sent you the <strong>Bitcoin Estate Planning Standards (Early Access Draft)</strong> - it should arrive in your inbox within the next few minutes.
          </p>

          {/* Download backup button */}
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold text-orange-800 mb-3">
              Don't see the email? Download directly:
            </h2>
            <a 
              href="/downloads/bitcoin-estate-planning-standards-draft.pdf"
              className="inline-flex items-center bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-orange-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Standards PDF
            </a>
          </div>

          {/* What's Next */}
          <div className="text-left space-y-4 mb-8">
            <h2 className="text-xl font-semibold text-gray-900">What's Next?</h2>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-semibold text-sm">1</span>
                </div>
                <p className="text-gray-700">Review the standards and identify gaps in your current estate planning</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-semibold text-sm">2</span>
                </div>
                <p className="text-gray-700">Watch for our email series with implementation guides</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-semibold text-sm">3</span>
                </div>
                <p className="text-gray-700">Connect with a BEPC-certified attorney in your area</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/find-attorney"
              className="bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Find Your Attorney
            </Link>
            <Link 
              href="/"
              className="border border-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Back to Home
            </Link>
          </div>

          {/* Social Proof */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Join <strong>500+ attorneys</strong> and <strong>thousands of Bitcoin holders</strong> building the future of digital asset estate planning.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThankYouContent />
    </Suspense>
  )
}

export const metadata = {
  title: 'Thank You | Bitcoin Estate Planning Commission',
  description: 'Thank you for downloading the Bitcoin Estate Planning Standards. Check your email for your copy.',
  robots: 'noindex, nofollow'
} 