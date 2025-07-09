import { Metadata } from 'next'
import Link from 'next/link'
import { LeadMagnetCTA } from '@/components/LeadMagnetCTA'

export const metadata: Metadata = {
  title: 'About BEPC - Bitcoin Estate Planning Commission',
  description: 'Learn about the Bitcoin Estate Planning Commission, our mission to protect digital wealth, and our team of experts.',
}

export default function AboutPage() {
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
              Coming Soon
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6">
            About the Bitcoin Estate Planning Commission
          </h1>

          <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            We're building the global authority for Bitcoin estate planning standards, 
            certification, and professional education.
          </p>

          {/* Coming Soon Content */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 mb-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Full About Page Launching Soon
              </h2>

              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                We're putting the finishing touches on our comprehensive About page, which will include:
              </p>

              <div className="grid md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto mb-8">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Our Mission & Vision</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Leadership Team</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Advisory Board</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Our Story</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Partnerships</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Impact Metrics</span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-500 mb-8">
                Expected launch: Q1 2025
              </p>
            </div>
          </div>

          {/* Quick Links While Waiting */}
          <div className="bg-gray-50 rounded-lg p-8 text-center mb-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              While You're Waiting
            </h3>
            <p className="text-gray-600 mb-6">
              Get started with these essential resources:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-standards" className="btn btn-primary">
                Download Standards
              </Link>
              <Link href="/find-attorney" className="btn btn-outline">
                Find an Attorney
              </Link>
            </div>
          </div>

          {/* Email Capture */}
          <LeadMagnetCTA variant="banner" className="mb-8" />

          {/* Contact Info */}
          <div className="text-center text-gray-600">
            <p className="mb-2">Have questions in the meantime?</p>
            <p>
              Email us at{' '}
              <a href="mailto:info@bitcoinestatecommission.org" className="text-primary hover:underline">
                info@bitcoinestatecommission.org
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}