import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { safeDb } from '@/lib/database'
import { US_MAJOR_CITIES } from '@/lib/cities-data'
import { LocationPageContent } from '@/components/location/LocationPageContent'

interface Props {
  params: {
    state: string
    city: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Normalize to lowercase for consistency
  const state = params.state.toLowerCase()
  const city = params.city.toLowerCase()
  
  try {
    const location = await safeDb.city.findFirst({
      where: {
        citySlug: city,
        state: { stateCode: state }
      },
      include: { state: true }
    })

    if (!location) {
      return {
        title: `Bitcoin Estate Planning Attorney in ${city}, ${state.toUpperCase()}`,
        description: `Find BEPC certified Bitcoin estate planning attorneys. Expert cryptocurrency inheritance planning and digital asset protection.`,
      }
    }

    const cityName = location.cityName
    const stateName = (location as any).state?.stateName || state.toUpperCase()

    return {
      title: `Bitcoin Estate Planning Attorney in ${cityName}, ${stateName} | BEPC Certified`,
      description: `Find BEPC certified Bitcoin estate planning attorneys in ${cityName}, ${stateName}. Expert cryptocurrency inheritance planning, digital asset protection, and tax optimization. Free consultation available.`,
      openGraph: {
        title: `Bitcoin Estate Planning Attorney in ${cityName}, ${stateName}`,
        description: `Expert Bitcoin estate planning attorneys in ${cityName}. Certified professionals specializing in cryptocurrency inheritance.`,
        type: 'website',
      },
    }
  } catch (error) {
    console.error('Error generating metadata:', error)
    // Return fallback metadata
    return {
      title: `Bitcoin Estate Planning Attorney in ${city}, ${state.toUpperCase()}`,
      description: `Find BEPC certified Bitcoin estate planning attorneys. Expert cryptocurrency inheritance planning and digital asset protection.`,
    }
  }
}

// Force static generation at build time - NO ISR
export const dynamic = 'force-static'
export const revalidate = false // Disable ISR completely

export async function generateStaticParams() {
  // Always use static city data to ensure all 500+ cities are created at build time
  // This ensures consistent static generation regardless of database availability
  console.log(`Generating static params for ${US_MAJOR_CITIES.length} cities`)
  
  return US_MAJOR_CITIES.map((city) => ({
    state: city.state,
    city: city.city,
  }))
}

export default async function LocationPage({ params }: Props) {
  // Normalize state to lowercase to handle case-insensitive URLs
  const state = params.state.toLowerCase()
  const city = params.city.toLowerCase()
  
  // Find the city data from our static list first
  const staticCityData = US_MAJOR_CITIES.find(
    c => c.state === state && c.city === city
  )
  
  if (!staticCityData) {
    notFound()
  }
  
  // Create base location data from static data
  const baseLocationData: any = {
    id: `${state}-${city}`,
    cityName: staticCityData.name,
    citySlug: city,
    population: staticCityData.population,
    stateId: state,
    medianIncome: 75000,
    bitcoinBusinessesCount: Math.floor(staticCityData.population / 10000),
    lawFirmsCount: Math.floor(staticCityData.population / 2000),
    latitude: null,
    longitude: null,
    createdAt: new Date(),
    updatedAt: new Date(),
    state: {
      id: state,
      stateName: state.toUpperCase(),
      stateCode: state.toUpperCase(),
      bitcoinAdoptionRate: 15.5, // Default adoption rate
      probateLawsSummary: `${state.toUpperCase()} follows standard probate procedures with specific provisions for digital assets.`,
      estateTaxExemption: 12920000, // Federal exemption as default
      regulatoryNotes: null,
    },
    attorneys: [],
  }
  
  // Try to enhance with database data if available, but don't block
  let location = baseLocationData
  let attorneys: any[] = []
  let nearbyCities: any[] = []
  
  // Skip database entirely to ensure no runtime execution
  if (false && process.env.DATABASE_URL) {
    try {
      // Use Promise.race to ensure we don't wait too long
      const dbPromise = safeDb.city.findFirst({
        where: {
          citySlug: city,
          state: { stateCode: state.toUpperCase() }
        },
        include: {
          state: true,
          attorneys: {
            where: { verifiedStatus: true },
            orderBy: [
              { featured: 'desc' },
              { certificationLevel: 'desc' },
              { yearsExperience: 'desc' }
            ],
            take: 10, // Limit attorneys to improve performance
          },
        },
      })
      
      const timeoutPromise = new Promise((resolve) => 
        setTimeout(() => resolve(null), 3000) // 3 second timeout to prevent 500 errors
      )
      
      const dbResult = await Promise.race([dbPromise, timeoutPromise])
      
      if (dbResult) {
        location = dbResult as any
        attorneys = (location as any).attorneys || []
        
        // Get nearby cities with timeout
        const nearbyCitiesPromise = safeDb.city.findMany({
          where: {
            stateId: location.stateId,
            NOT: { id: location.id },
          },
          orderBy: { population: 'desc' },
          take: 5,
          select: {
            id: true,
            cityName: true,
            citySlug: true,
            stateId: true,
          },
        })
        
        const nearbyCitiesResult = await Promise.race([
          nearbyCitiesPromise,
          new Promise(resolve => setTimeout(() => resolve([]), 2000))
        ])
        
        nearbyCities = nearbyCitiesResult as any[]
      }
    } catch (error) {
      console.log('Using static data due to database error:', error)
    }
  }
  
  // Get nearby cities from static data if not from database
  if (nearbyCities.length === 0) {
    nearbyCities = US_MAJOR_CITIES
      .filter(c => c.state === state && c.city !== city)
      .slice(0, 5)
      .map(c => ({
        id: `${c.state}-${c.city}`,
        cityName: c.name,
        citySlug: c.city,
        stateId: c.state,
      }))
  }
  
  return (
    <LocationPageContent
      location={location}
      attorneys={attorneys}
      nearbyCities={nearbyCities}
    />
  )
}