import { Metadata } from 'next'
import Link from 'next/link'
import { LeadMagnetCTA } from '@/components/LeadMagnetCTA'

export const metadata: Metadata = {
  title: 'Resources - Bitcoin Estate Planning Commission',
  description: 'Access tools, guides, templates, and educational resources for Bitcoin estate planning.',
}

export default function ResourcesPage() {
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
            Bitcoin Estate Planning Resources
          </h1>

          <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            Comprehensive tools and guides for securing your digital legacy
          </p>

          {/* Coming Soon Content */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 mb-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Resource Library Launching Soon
              </h2>

              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                We're building a comprehensive resource library with everything you need for Bitcoin estate planning:
              </p>

              <div className="grid md:grid-cols-3 gap-6 text-left max-w-3xl mx-auto mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Templates</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Estate planning checklists</li>
                    <li>• Bitcoin inventory forms</li>
                    <li>• Beneficiary worksheets</li>
                    <li>• Security protocols</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Guides</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Family conversations</li>
                    <li>• Hardware wallet setup</li>
                    <li>• Multi-sig strategies</li>
                    <li>• Tax optimization</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Tools</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Estate value calculator</li>
                    <li>• Security audit tool</li>
                    <li>• Attorney matcher</li>
                    <li>• Planning timeline</li>
                  </ul>
                </div>
              </div>

              <p className="text-sm text-gray-500 mb-8">
                Expected launch: February 2025
              </p>
            </div>
          </div>

          {/* Available Now */}
          <div className="bg-gradient-to-r from-primary to-primary-light text-white rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-center mb-4">
              Available Now
            </h3>
            <p className="text-center text-white/90 mb-6 max-w-2xl mx-auto">
              While we build out our full resource library, get started with our flagship guide:
            </p>
            <div className="text-center">
              <h4 className="text-xl font-semibold mb-2">
                Bitcoin Estate Planning Standards (2025 Draft)
              </h4>
              <p className="text-white/80 mb-6">
                The comprehensive framework used by 500+ attorneys nationwide
              </p>
              <Link href="/get-standards" className="inline-flex items-center bg-white text-primary hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg transition-colors">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Free Standards
              </Link>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="text-center mb-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Be First to Access New Resources
            </h3>
            <p className="text-gray-600 mb-6">
              Get notified when we launch new tools, templates, and guides.
            </p>
            <LeadMagnetCTA variant="inline" />
          </div>

          {/* Contact */}
          <div className="text-center text-gray-600">
            <p className="mb-2">Need immediate assistance?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/find-attorney" className="text-primary hover:underline">
                Find a certified attorney
              </Link>
              <span className="hidden sm:inline">•</span>
              <a href="mailto:resources@bitcoinestatecommission.org" className="text-primary hover:underline">
                resources@bitcoinestatecommission.org
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}