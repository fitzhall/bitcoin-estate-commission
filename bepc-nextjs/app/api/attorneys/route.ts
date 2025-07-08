import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
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
      prisma.attorney.findMany({
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
      prisma.attorney.count({ where }),
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
    })
  } catch (error) {
    console.error('Error fetching attorneys:', error)
    return NextResponse.json(
      { error: 'Failed to fetch attorneys' },
      { status: 500 }
    )
  }
}