import { Metadata } from 'next'
import Link from 'next/link'
import { EmailCapture } from '@/components/EmailCapture'

export const metadata: Metadata = {
  title: 'Education - Bitcoin Estate Planning Commission',
  description: 'Professional education, CLE courses, and training programs for Bitcoin estate planning practitioners.',
  openGraph: {
    title: 'Bitcoin Estate Planning Education',
    description: 'Comprehensive educational resources and CLE courses for attorneys specializing in Bitcoin inheritance planning.',
    type: 'website',
  }
}

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-12 md:py-20">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Coming February 2025
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Educational Resources
            </h1>
            
            <p className="text-xl text-gray-700 mb-8">
              Comprehensive CLE courses and professional training programs for Bitcoin estate planning are launching soon.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">What's Coming</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">CLE Courses</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Bitcoin Estate Planning Fundamentals (8 CLE hours)
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    KEEP Protocol Implementation (12 CLE hours)
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Advanced Multi-Sig Strategies (6 CLE hours)
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Training Programs</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    40-Hour Foundation Certification
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    80-Hour Advanced Practitioner Track
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Expert-Level Case Study Workshops
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <EmailCapture
            source="education-coming-soon"
            variant="hero"
            title="Be First to Access Educational Resources"
            description="Get notified when CLE courses and training programs launch."
            buttonText="Notify Me"
          />

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              In the meantime, explore our professional standards:
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