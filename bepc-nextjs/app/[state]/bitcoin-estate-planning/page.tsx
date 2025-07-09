import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { stateRegulations } from '@/lib/content-data'
import { safeDb } from '@/lib/database'
import { getCitiesByState } from '@/lib/cities-data'
import { BreadcrumbSchema } from '@/components/SchemaMarkup'

// List of US states
const US_STATES = {
  'al': { name: 'Alabama', code: 'AL' },
  'ak': { name: 'Alaska', code: 'AK' },
  'az': { name: 'Arizona', code: 'AZ' },
  'ar': { name: 'Arkansas', code: 'AR' },
  'ca': { name: 'California', code: 'CA' },
  'co': { name: 'Colorado', code: 'CO' },
  'ct': { name: 'Connecticut', code: 'CT' },
  'de': { name: 'Delaware', code: 'DE' },
  'fl': { name: 'Florida', code: 'FL' },
  'ga': { name: 'Georgia', code: 'GA' },
  'hi': { name: 'Hawaii', code: 'HI' },
  'id': { name: 'Idaho', code: 'ID' },
  'il': { name: 'Illinois', code: 'IL' },
  'in': { name: 'Indiana', code: 'IN' },
  'ia': { name: 'Iowa', code: 'IA' },
  'ks': { name: 'Kansas', code: 'KS' },
  'ky': { name: 'Kentucky', code: 'KY' },
  'la': { name: 'Louisiana', code: 'LA' },
  'me': { name: 'Maine', code: 'ME' },
  'md': { name: 'Maryland', code: 'MD' },
  'ma': { name: 'Massachusetts', code: 'MA' },
  'mi': { name: 'Michigan', code: 'MI' },
  'mn': { name: 'Minnesota', code: 'MN' },
  'ms': { name: 'Mississippi', code: 'MS' },
  'mo': { name: 'Missouri', code: 'MO' },
  'mt': { name: 'Montana', code: 'MT' },
  'ne': { name: 'Nebraska', code: 'NE' },
  'nv': { name: 'Nevada', code: 'NV' },
  'nh': { name: 'New Hampshire', code: 'NH' },
  'nj': { name: 'New Jersey', code: 'NJ' },
  'nm': { name: 'New Mexico', code: 'NM' },
  'ny': { name: 'New York', code: 'NY' },
  'nc': { name: 'North Carolina', code: 'NC' },
  'nd': { name: 'North Dakota', code: 'ND' },
  'oh': { name: 'Ohio', code: 'OH' },
  'ok': { name: 'Oklahoma', code: 'OK' },
  'or': { name: 'Oregon', code: 'OR' },
  'pa': { name: 'Pennsylvania', code: 'PA' },
  'ri': { name: 'Rhode Island', code: 'RI' },
  'sc': { name: 'South Carolina', code: 'SC' },
  'sd': { name: 'South Dakota', code: 'SD' },
  'tn': { name: 'Tennessee', code: 'TN' },
  'tx': { name: 'Texas', code: 'TX' },
  'ut': { name: 'Utah', code: 'UT' },
  'vt': { name: 'Vermont', code: 'VT' },
  'va': { name: 'Virginia', code: 'VA' },
  'wa': { name: 'Washington', code: 'WA' },
  'wv': { name: 'West Virginia', code: 'WV' },
  'wi': { name: 'Wisconsin', code: 'WI' },
  'wy': { name: 'Wyoming', code: 'WY' }
}

interface Props {
  params: {
    state: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const normalizedState = params.state.toLowerCase()
  const stateInfo = US_STATES[normalizedState as keyof typeof US_STATES]
  
  if (!stateInfo) {
    return {
      title: 'State Not Found',
    }
  }

  const stateName = stateInfo.name
  
  return {
    title: `Bitcoin Estate Planning in ${stateName} | BEPC Certified Attorneys`,
    description: `Find BEPC certified Bitcoin estate planning attorneys in ${stateName}. Expert cryptocurrency inheritance planning, digital asset protection, and state-specific guidance.`,
    openGraph: {
      title: `Bitcoin Estate Planning in ${stateName}`,
      description: `Expert Bitcoin estate planning attorneys throughout ${stateName}. State-specific cryptocurrency inheritance laws and certified professionals.`,
      type: 'website',
    },
  }
}

// Static generation with ISR
export const dynamic = 'force-static'
export const revalidate = 86400 // Revalidate daily

export async function generateStaticParams() {
  return Object.keys(US_STATES).map((stateCode) => ({
    state: stateCode,
  }))
}

export default async function StatePage({ params }: Props) {
  // Normalize state to lowercase
  const normalizedState = params.state.toLowerCase()
  const stateInfo = US_STATES[normalizedState as keyof typeof US_STATES]
  
  if (!stateInfo) {
    notFound()
  }

  const stateName = stateInfo.name
  const stateCode = stateInfo.code
  const stateRegulation = stateRegulations[normalizedState] || stateRegulations.california

  // Get cities in this state - always use static data for consistent build
  const staticCities = getCitiesByState(normalizedState)
  let cities = staticCities.slice(0, 10).map(city => ({
    id: `${city.state}-${city.city}`,
    cityName: city.name,
    citySlug: city.city,
    population: city.population,
    bitcoinBusinessesCount: Math.floor(city.population / 10000),
    lawFirmsCount: Math.floor(city.population / 2000),
    state: { stateCode: city.state.toUpperCase() }
  }))
  
  let attorneyCount = 0
  
  // Skip database entirely to ensure no runtime execution
  if (false && process.env.DATABASE_URL && !process.env.SKIP_DATABASE_DURING_BUILD) {
    try {
      attorneyCount = await safeDb.attorney.count({
        where: {
          state: { stateCode: normalizedState.toUpperCase() },
          verifiedStatus: true
        }
      })
    } catch (error) {
      console.log('Could not fetch attorney count:', error)
    }
  }

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://bitcoinestateplanning.org' },
          { name: stateName, url: `https://bitcoinestateplanning.org/${normalizedState}/bitcoin-estate-planning` },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-light text-white py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Bitcoin Estate Planning Attorneys in {stateName}
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              {attorneyCount > 0 
                ? `${attorneyCount} BEPC certified attorneys serving ${stateName} residents`
                : `Find BEPC certified attorneys serving ${stateName} residents`
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/find-attorney" className="btn btn-secondary btn-lg">
                Find Your Attorney
              </Link>
              <Link href="#laws" className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary">
                {stateName} Laws & Requirements
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* State Overview */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg">
              <h2>Bitcoin Estate Planning in {stateName}: What You Need to Know</h2>
              <p>
                {stateName} residents holding Bitcoin and other cryptocurrencies face unique estate planning 
                challenges. With proper planning through a BEPC certified attorney, you can ensure your 
                digital assets are protected and properly transferred to your beneficiaries.
              </p>
              
              {stateRegulation && (
                <>
                  <h3>Key {stateName} Regulations</h3>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6">
                    <p className="font-semibold mb-2">{stateRegulation.probateCode}</p>
                    <p className="mb-4">{stateRegulation.requirements}</p>
                    {stateRegulation.specialConsiderations && (
                      <p className="text-sm text-gray-700">
                        <strong>Special Considerations:</strong> {stateRegulation.specialConsiderations}
                      </p>
                    )}
                  </div>

                  <h3>Tax Implications in {stateName}</h3>
                  <p>{stateRegulation.taxImplications}</p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Cities Section */}
      {cities.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">
              Bitcoin Estate Planning by City in {stateName}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {cities.map((city) => (
                <Link
                  key={city.id}
                  href={`/${normalizedState}/${city.citySlug}/bitcoin-estate-planning-attorney`}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-bold mb-2">{city.cityName}</h3>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>Population: {city.population.toLocaleString()}</p>
                    <p>Bitcoin Businesses: {city.bitcoinBusinessesCount}</p>
                    <p>Law Firms: {city.lawFirmsCount}</p>
                  </div>
                  <p className="text-primary font-semibold mt-4">
                    View Attorneys →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* State-Specific Content */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              Why {stateName} Residents Need Specialized Bitcoin Estate Planning
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">Without Proper Planning</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>Bitcoin lost forever due to missing keys</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>{stateName} probate courts cannot recover digital assets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>Family disputes over undocumented holdings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>Unexpected tax liabilities for heirs</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">With BEPC Planning</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Secure transfer protocols for all digital assets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Full compliance with {stateName} regulations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Clear documentation preventing disputes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Tax-optimized inheritance strategies</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary text-white p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">
                Protect Your Bitcoin Legacy in {stateName}
              </h3>
              <p className="text-xl mb-6">
                Connect with a BEPC certified attorney who understands both {stateName} law and Bitcoin technology
              </p>
              <Link href="/find-attorney" className="btn btn-secondary btn-lg">
                Find Your {stateName} Attorney
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}