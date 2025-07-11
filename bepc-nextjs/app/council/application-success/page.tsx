import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Application Submitted | Bitcoin Estate Planning Council',
  description: 'Thank you for applying to the BEPC Advisory Council. Your application has been received.',
}

export default function ApplicationSuccessPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <div className="mb-8">
              <svg className="w-20 h-20 text-primary mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            
            <h1 className="text-3xl font-bold mb-4">Application Submitted Successfully</h1>
            
            <p className="text-xl text-gray-700 mb-8">
              Thank you for applying to the Bitcoin Estate Planning Council Advisory Board.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h2 className="font-semibold text-lg mb-3">What Happens Next?</h2>
              <ol className="text-left text-gray-700 space-y-2">
                <li className="flex">
                  <span className="font-semibold mr-2">1.</span>
                  <span>Your application will be reviewed by our selection committee</span>
                </li>
                <li className="flex">
                  <span className="font-semibold mr-2">2.</span>
                  <span>Applications are reviewed quarterly</span>
                </li>
                <li className="flex">
                  <span className="font-semibold mr-2">3.</span>
                  <span>Selected candidates will be contacted for interviews</span>
                </li>
                <li className="flex">
                  <span className="font-semibold mr-2">4.</span>
                  <span>Final decisions will be communicated within 90 days</span>
                </li>
              </ol>
            </div>
            
            <p className="text-gray-600 mb-8">
              In the meantime, we encourage you to explore our professional resources and 
              stay updated on Bitcoin estate planning best practices.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/education"
                className="btn btn-primary"
              >
                Explore Resources
              </Link>
              <Link 
                href="/"
                className="btn btn-outline"
              >
                Return Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}