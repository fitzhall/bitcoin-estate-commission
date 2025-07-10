import { Metadata } from 'next'
import { Suspense } from 'react'
import Link from 'next/link'
import { AttorneySearch } from '@/components/attorney/AttorneySearch'
import { AttorneyResults } from '@/components/attorney/AttorneyResults'

// Force static generation at build time
export const dynamic = 'force-static'
export const revalidate = 3600 // Revalidate hourly

export const metadata: Metadata = {
  title: 'Find a Certified Bitcoin Estate Planning Attorney',
  description: 'Connect with BEPC certified attorneys specializing in Bitcoin and cryptocurrency estate planning. Search by location, specialization, and certification level.',
}

interface SearchParams {
  location?: string
  specialization?: string
  certification?: string
  page?: string
}

export default function FindAttorneyPage({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="container py-12">
          <h1 className="text-4xl font-bold mb-4">
            Find a Certified Bitcoin Estate Planning Attorney
          </h1>
          <p className="text-xl text-gray-600">
            Connect with BEPC certified attorneys specializing in Bitcoin and cryptocurrency estate planning
          </p>
        </div>
      </div>

      <div className="container py-8">
        <Suspense fallback={<div className="bg-white rounded-lg shadow-sm p-6 animate-pulse h-32" />}>
          <AttorneySearch />
        </Suspense>
        
        <Suspense fallback={<AttorneyResultsSkeleton />}>
          <AttorneyResults searchParams={searchParams} />
        </Suspense>
      </div>

      <section className="bg-gray-100 py-16 mt-12">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            Browse by State
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            <Link href="/ny/bitcoin-estate-planning" className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow text-center">
              <span className="font-semibold">New York</span>
            </Link>
            <Link href="/ca/bitcoin-estate-planning" className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow text-center">
              <span className="font-semibold">California</span>
            </Link>
            <Link href="/fl/bitcoin-estate-planning" className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow text-center">
              <span className="font-semibold">Florida</span>
            </Link>
            <Link href="/tx/bitcoin-estate-planning" className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow text-center">
              <span className="font-semibold">Texas</span>
            </Link>
            <Link href="/sd/bitcoin-estate-planning" className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow text-center">
              <span className="font-semibold">South Dakota</span>
            </Link>
          </div>
          <p className="text-center mt-6 text-gray-600">
            More states coming soon. <Link href="/certification/become-certified" className="text-primary hover:underline">Become a certified attorney</Link>
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose BEPC Certified Attorneys?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Specialized Training</h3>
              <p className="text-gray-600">
                Completed rigorous BEPC certification program covering Bitcoin technology, security, and legal frameworks
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">KEEP Protocol Compliance</h3>
              <p className="text-gray-600">
                Follows industry-standard security protocols for key management and estate planning execution
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Ongoing Education</h3>
              <p className="text-gray-600">
                Maintains current knowledge through continuing education and stays updated on regulatory changes
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function AttorneyResultsSkeleton() {
  return (
    <div className="space-y-4 mt-8">
      {[1, 2, 3].map((i) => (
        <div key={i} className="bg-white rounded-lg p-6 animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="flex gap-2">
            <div className="h-10 bg-gray-200 rounded w-32"></div>
            <div className="h-10 bg-gray-200 rounded w-24"></div>
          </div>
        </div>
      ))}
    </div>
  )
}