import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'You\'re on the Waitlist! | BEPC Certification',
  description: 'Thank you for joining the Bitcoin Estate Planning Certification waitlist.',
}

export default function WaitlistSuccess() {
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
            <h1 className="text-4xl font-bold mb-4">You're on the Waitlist!</h1>
            <p className="text-xl text-gray-600 mb-8">
              We'll notify you as soon as enrollment opens for the Bitcoin Estate Planning Certification
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-8 text-left">
            <h2 className="text-2xl font-bold mb-4">What Happens Next?</h2>
            <ol className="space-y-4 text-gray-700">
              <li className="flex">
                <span className="font-bold mr-3">1.</span>
                <div>
                  <strong>Welcome Email</strong> - Check your inbox for confirmation and your first educational resource
                </div>
              </li>
              <li className="flex">
                <span className="font-bold mr-3">2.</span>
                <div>
                  <strong>Monthly Updates</strong> - Receive exclusive pre-launch content and Bitcoin estate planning insights
                </div>
              </li>
              <li className="flex">
                <span className="font-bold mr-3">3.</span>
                <div>
                  <strong>Early Access</strong> - Get first notification when enrollment opens with special pricing
                </div>
              </li>
              <li className="flex">
                <span className="font-bold mr-3">4.</span>
                <div>
                  <strong>Launch Event</strong> - Invitation to our exclusive virtual launch event for waitlist members
                </div>
              </li>
            </ol>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h3 className="font-bold mb-2">While You Wait...</h3>
            <p className="text-gray-700 mb-4">
              Start building your Bitcoin knowledge with our free educational resources:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/education" className="btn btn-primary">
                Browse Free Resources
              </Link>
              <Link href="/standards" className="btn btn-outline">
                Download Standards Guide
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Share with Colleagues</h3>
            <p className="text-gray-600">
              Know other attorneys who should be preparing for the Bitcoin wealth transfer?
            </p>
            <div className="flex gap-4 justify-center mt-4">
              <a
                href={`https://twitter.com/intent/tweet?text=I just joined the waitlist for the Bitcoin Estate Planning Certification! Don't let your competition get certified first. Join me: https://bitcoinestatecommission.org/certification/waitlist`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-outline"
              >
                Share on Twitter
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=https://bitcoinestatecommission.org/certification/waitlist`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-outline"
              >
                Share on LinkedIn
              </a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t">
            <p className="text-sm text-gray-600">
              Questions? Contact us at{' '}
              <a href="mailto:certification@bitcoinestatecommission.org" className="text-primary hover:underline">
                certification@bitcoinestatecommission.org
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}