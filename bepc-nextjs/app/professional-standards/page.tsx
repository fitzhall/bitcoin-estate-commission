import { Metadata } from 'next'
import Link from 'next/link'
import { getPagesByCategory } from '@/lib/programmatic-content'
import { EmailCapture } from '@/components/EmailCapture'

export const metadata: Metadata = {
  title: 'Professional Standards - Bitcoin Estate Planning Commission',
  description: 'Official professional standards, certification requirements, and best practices for Bitcoin estate planning practitioners.',
  openGraph: {
    title: 'Professional Standards for Bitcoin Estate Planning',
    description: 'Comprehensive professional standards and certification framework for attorneys specializing in Bitcoin inheritance planning.',
    type: 'website',
  }
}

export default function ProfessionalStandardsPage() {
  const pages = getPagesByCategory('professional-standards')

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-white py-12 md:py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Official BEPC Standards
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional Standards
            </h1>
            
            <p className="text-xl text-gray-700 mb-8">
              The definitive framework for Bitcoin estate planning excellence. 
              Establish your expertise with BEPC certification and professional standards.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/certification"
                className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Get Certified
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/get-standards"
                className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-primary border-2 border-primary font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Download Standards PDF
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-12 md:py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            {/* Key Features */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">3-Level Certification</h3>
                <p className="text-gray-600">Foundation, Advanced, and Expert tracks with 40-80 hours of specialized training</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">KEEP Protocol</h3>
                <p className="text-gray-600">Master the official Key Emergency Estate Protocol framework</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Best Practices</h3>
                <p className="text-gray-600">Industry-leading standards developed with ACTEC Fellows</p>
              </div>
            </div>

            {/* Professional Standards Content */}
            <h2 className="text-3xl font-bold text-center mb-8">Explore Professional Standards</h2>
            
            <div className="grid gap-6">
              {pages.map((page) => (
                <Link
                  key={page.slug}
                  href={`/professional-standards/${page.slug}`}
                  className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {page.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {page.metaDescription}
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <span className="flex items-center mr-4">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                          {page.wordCount?.toLocaleString()} words
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          Updated {new Date(page.lastUpdated).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Coming Soon Notice for Other Categories */}
            <div className="mt-12 p-8 bg-gray-50 rounded-lg text-center">
              <h3 className="text-2xl font-semibold mb-4">More Resources Coming Soon</h3>
              <p className="text-gray-600 mb-6">
                We're expanding our professional standards library with educational resources, 
                technical guides, and compliance frameworks.
              </p>
              <EmailCapture
                source="professional-standards-landing"
                variant="compact"
                title="Get Notified When New Resources Launch"
                description="Be the first to access new professional standards content."
                buttonText="Notify Me"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Force static generation
export const dynamic = 'force-static'