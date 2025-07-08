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
        <div className="bg-gray-50 rounded-lg p-12 text-center">
          <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <h3 className="text-xl font-semibold mb-2">No attorneys found</h3>
          <p className="text-gray-600 mb-6">
            Try adjusting your search criteria or browse all attorneys
          </p>
          <Link href="/find-attorney" className="btn btn-primary">
            View All Attorneys
          </Link>
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