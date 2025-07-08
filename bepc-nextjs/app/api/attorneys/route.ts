import { NextRequest, NextResponse } from 'next/server'
import { safeDb } from '@/lib/database'

export const dynamic = 'force-dynamic'

// Add caching headers for API responses
export async function GET(request: NextRequest) {
  try {
    // Set cache headers for API responses
    const headers = new Headers()
    headers.set('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=300')
    const searchParams = request.nextUrl.searchParams
    const location = searchParams.get('location')
    const specialization = searchParams.get('specialization')
    const certification = searchParams.get('certification')
    const limit = parseInt(searchParams.get('limit') || '20')
    const offset = parseInt(searchParams.get('offset') || '0')

    const where: any = {
      verifiedStatus: true,
    }

    if (certification) {
      where.certificationLevel = certification
    }

    // Location search
    if (location) {
      where.OR = [
        { city: { cityName: { contains: location, mode: 'insensitive' } } },
        { city: { citySlug: { contains: location, mode: 'insensitive' } } },
        { state: { stateName: { contains: location, mode: 'insensitive' } } },
        { state: { stateCode: { contains: location, mode: 'insensitive' } } },
      ]
    }

    const [attorneys, total] = await Promise.all([
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

    // Filter by specialization if needed
    let results = attorneys
    if (specialization) {
      const specializationName = specialization.replace(/-/g, ' ')
      results = attorneys.filter((attorney) => {
        const specs = attorney.specializations as string[] || []
        return specs.some(spec => 
          spec.toLowerCase().includes(specializationName.toLowerCase())
        )
      })
    }

    return NextResponse.json({
      attorneys: results,
      total: specialization ? results.length : total,
      limit,
      offset,
    }, { headers })
  } catch (error) {
    console.error('Error fetching attorneys:', error)
    // Return empty results on error to avoid breaking the UI
    return NextResponse.json(
      { attorneys: [], total: 0, limit, offset, error: 'Failed to fetch attorneys' },
      { status: 200, headers }
    )
  }
}