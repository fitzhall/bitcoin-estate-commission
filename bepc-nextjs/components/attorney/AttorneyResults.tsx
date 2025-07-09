import { safeDb } from '@/lib/database'
import { AttorneyCard } from './AttorneyCard'
import Link from 'next/link'

interface Props {
  searchParams: {
    location?: string
    specialization?: string
    certification?: string
    page?: string
  }
}

export async function AttorneyResults({ searchParams }: Props) {
  const page = parseInt(searchParams.page || '1')
  const limit = 12
  const offset = (page - 1) * limit

  // Build where clause
  const where: any = {
    verifiedStatus: true,
  }

  let attorneys = []
  let totalCount = 0

  try {

  if (searchParams.certification) {
    where.certificationLevel = searchParams.certification
  }

  // For location and specialization, we'll need to do more complex queries

  if (searchParams.location || searchParams.specialization) {
    // Complex query with joins
    const locationFilter = searchParams.location
      ? {
          OR: [
            { city: { cityName: { contains: searchParams.location, mode: 'insensitive' } } },
            { city: { citySlug: { contains: searchParams.location, mode: 'insensitive' } } },
            { state: { stateName: { contains: searchParams.location, mode: 'insensitive' } } },
            { state: { stateCode: { contains: searchParams.location, mode: 'insensitive' } } },
          ],
        }
      : {}

    const [results, count] = await Promise.all([
      safeDb.attorney.findMany({
        where: {
          ...where,
          ...locationFilter,
        },
        include: {
          city: true,
          state: true,
        },
        orderBy: [
          { featured: 'desc' },
          { certificationLevel: 'desc' },
          { yearsExperience: 'desc' },
        ],
        take: limit,
        skip: offset,
      }),
      safeDb.attorney.count({
        where: {
          ...where,
          ...locationFilter,
        },
      }),
    ])

    // Filter by specialization in memory if needed
    if (searchParams.specialization) {
      const specializationName = searchParams.specialization.replace(/-/g, ' ')
      attorneys = results.filter((attorney) => {
        const specs = attorney.specializations as string[] || []
        return specs.some(spec => 
          spec.toLowerCase().includes(specializationName.toLowerCase())
        )
      })
      totalCount = attorneys.length
    } else {
      attorneys = results
      totalCount = count
    }
  } else {
    // Simple query
    const [results, count] = await Promise.all([
      safeDb.attorney.findMany({
        where,
        include: {
          city: true,
          state: true,
        },
        orderBy: [
          { featured: 'desc' },
          { certificationLevel: 'desc' },
          { yearsExperience: 'desc' },
        ],
        take: limit,
        skip: offset,
      }),
      safeDb.attorney.count({ where }),
    ])
    
    attorneys = results
    totalCount = count
  }
  } catch (error) {
    console.log('Database error:', error)
    // Return empty results if database is not ready
  }

  const totalPages = Math.ceil(totalCount / limit)

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Search Results</h2>
        <p className="text-gray-600">
          {totalCount} {totalCount === 1 ? 'attorney' : 'attorneys'} found
        </p>
      </div>

      {attorneys.length > 0 ? (
        <>
          <div className="grid gap-6">
            {attorneys.map((attorney) => (
              <AttorneyCard key={attorney.id} attorney={attorney} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-8 flex justify-center">
              <nav className="flex gap-2">
                {page > 1 && (
                  <Link
                    href={`/find-attorney?${buildQueryString(searchParams, page - 1)}`}
                    className="px-4 py-2 border rounded hover:bg-gray-50"
                  >
                    Previous
                  </Link>
                )}
                
                {Array.from({ length: totalPages }, (_, i) => i + 1)
                  .filter(p => p === 1 || p === totalPages || Math.abs(p - page) <= 2)
                  .map((p, index, array) => (
                    <div key={p} className="flex items-center gap-2">
                      {index > 0 && array[index - 1] < p - 1 && (
                        <span className="px-2">...</span>
                      )}
                      <Link
                        href={`/find-attorney?${buildQueryString(searchParams, p)}`}
                        className={`px-4 py-2 border rounded ${
                          p === page
                            ? 'bg-primary text-white'
                            : 'hover:bg-gray-50'
                        }`}
                      >
                        {p}
                      </Link>
                    </div>
                  ))}
                
                {page < totalPages && (
                  <Link
                    href={`/find-attorney?${buildQueryString(searchParams, page + 1)}`}
                    className="px-4 py-2 border rounded hover:bg-gray-50"
                  >
                    Next
                  </Link>
                )}
              </nav>
            </div>
          )}
        </>
      ) : (
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-12 text-center">
          <div className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold inline-flex items-center mb-6">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Directory Launching Soon
          </div>
          
          <h3 className="text-2xl font-bold mb-4">Attorney Directory Coming Q1 2025</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We're building a comprehensive directory of BEPC certified Bitcoin estate planning attorneys. 
            The first certified attorneys will be listed here after our certification program launches.
          </p>
          
          <div className="bg-white rounded-lg p-6 mb-8 max-w-xl mx-auto">
            <h4 className="font-semibold text-gray-900 mb-3">While You Wait:</h4>
            <ul className="text-left space-y-2 text-gray-700">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-accent mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Download our Bitcoin Estate Planning Standards
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-accent mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Learn about the certification requirements
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-accent mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Join the early interest list for updates
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-standards" className="btn btn-primary">
              Get Standards Guide
            </Link>
            <Link href="/certification" className="btn btn-outline">
              Learn About Certification
            </Link>
          </div>
          
          <p className="text-sm text-gray-500 mt-8">
            Are you an attorney? <Link href="/certification/apply" className="text-primary hover:underline">Apply for early certification</Link>
          </p>
        </div>
      )}
    </div>
  )
}

function buildQueryString(params: any, page: number) {
  const query = new URLSearchParams()
  if (params.location) query.set('location', params.location)
  if (params.specialization) query.set('specialization', params.specialization)
  if (params.certification) query.set('certification', params.certification)
  if (page > 1) query.set('page', page.toString())
  return query.toString()
}