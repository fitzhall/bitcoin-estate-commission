import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { LocationPageContent } from '@/components/location/LocationPageContent'

interface Props {
  params: {
    state: string
    city: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state, city } = params
  
  const location = await prisma.city.findFirst({
    where: {
      citySlug: city,
      state: { stateCode: state }
    },
    include: { state: true }
  })

  if (!location) {
    return {
      title: 'Location Not Found',
    }
  }

  const cityName = location.cityName
  const stateName = location.state.stateName

  return {
    title: `Bitcoin Estate Planning Attorney in ${cityName}, ${stateName} | BEPC Certified`,
    description: `Find BEPC certified Bitcoin estate planning attorneys in ${cityName}, ${stateName}. Expert cryptocurrency inheritance planning, digital asset protection, and tax optimization. Free consultation available.`,
    openGraph: {
      title: `Bitcoin Estate Planning Attorney in ${cityName}, ${stateName}`,
      description: `Expert Bitcoin estate planning attorneys in ${cityName}. Certified professionals specializing in cryptocurrency inheritance.`,
      type: 'website',
    },
  }
}

export async function generateStaticParams() {
  const cities = await prisma.city.findMany({
    include: { state: true },
  })

  return cities.map((city) => ({
    state: city.state.stateCode,
    city: city.citySlug,
  }))
}

export default async function LocationPage({ params }: Props) {
  const { state, city } = params

  const location = await prisma.city.findFirst({
    where: {
      citySlug: city,
      state: { stateCode: state }
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
      },
    },
  })

  if (!location) {
    notFound()
  }

  // Get nearby cities
  const nearbyCities = await prisma.city.findMany({
    where: {
      stateId: location.stateId,
      NOT: { id: location.id },
    },
    orderBy: { population: 'desc' },
    take: 5,
  })

  return (
    <LocationPageContent
      location={location}
      attorneys={location.attorneys}
      nearbyCities={nearbyCities}
    />
  )
}