'use client'

import Link from 'next/link'
import { formatNumber } from '@/lib/utils'
import { AttorneyCard } from '@/components/attorney/AttorneyCard'
import { LocalBusinessSchema, BreadcrumbSchema } from '@/components/SchemaMarkup'
import type { City, State, Attorney } from '@prisma/client'

interface Props {
  location: City & { state: State }
  attorneys: Attorney[]
  nearbyCities: City[]
}

export function LocationPageContent({ location, attorneys, nearbyCities }: Props) {
  const cityName = location.cityName
  const stateName = location.state.stateName
  const stateCode = location.state.stateCode

  return (
    <div className="min-h-screen bg-white">
      <LocalBusinessSchema
        cityName={cityName}
        stateName={stateName}
        stateCode={stateCode}
        latitude={location.latitude}
        longitude={location.longitude}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://bitcoinestateplanning.org' },
          { name: 'Find Attorney', url: 'https://bitcoinestateplanning.org/find-attorney' },
          { name: stateName, url: `https://bitcoinestateplanning.org/${stateCode}` },
          { name: cityName, url: `https://bitcoinestateplanning.org/${stateCode}/${location.citySlug}/bitcoin-estate-planning-attorney` },
        ]}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-12">
        <div className="container">
          <nav className="mb-6 text-sm">
            <ol className="flex items-center space-x-2 text-gray-600">
              <li><Link href="/" className="hover:text-primary">Home</Link></li>
              <li>/</li>
              <li><Link href="/find-attorney" className="hover:text-primary">Find Attorney</Link></li>
              <li>/</li>
              <li><Link href={`/${stateCode}`} className="hover:text-primary">{stateName}</Link></li>
              <li>/</li>
              <li className="text-gray-900">{cityName}</li>
            </ol>
          </nav>

          <h1 className="text-4xl font-bold mb-4">
            Bitcoin Estate Planning Attorney in {cityName}, {stateName}
          </h1>
          <p className="text-xl text-gray-600">
            Find BEPC certified attorneys specializing in Bitcoin and cryptocurrency estate planning
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">
                {formatNumber(location.bitcoinBusinessesCount)}
              </div>
              <div className="text-sm text-gray-600">Bitcoin Businesses</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">
                {formatNumber(location.lawFirmsCount)}
              </div>
              <div className="text-sm text-gray-600">Law Firms</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">
                {attorneys.length}
              </div>
              <div className="text-sm text-gray-600">Certified Attorneys</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">
                {location.state.bitcoinAdoptionRate.toFixed(1)}%
              </div>
              <div className="text-sm text-gray-600">Bitcoin Adoption</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Content Column */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none mb-12">
                <h2>Why Choose a BEPC Certified Attorney in {cityName}?</h2>
                <p>
                  Bitcoin estate planning requires specialized knowledge of cryptocurrency technology, 
                  tax implications, and regulatory compliance. Our certified attorneys in {cityName} 
                  have completed rigorous training in the BEPC certification program and stay current 
                  with evolving digital asset laws.
                </p>

                <h3>Bitcoin Estate Planning Laws in {stateName}</h3>
                <p>{location.state.probateLawsSummary}</p>
                
                {location.state.estateTaxExemption > 0 && (
                  <p>
                    <strong>Estate Tax Exemption:</strong> ${formatNumber(location.state.estateTaxExemption)}
                  </p>
                )}
                
                {location.state.regulatoryNotes && (
                  <p>
                    <strong>Regulatory Notes:</strong> {location.state.regulatoryNotes}
                  </p>
                )}

                <h3>Local {cityName} Bitcoin Estate Planning Statistics</h3>
                <ul>
                  <li>Population: {formatNumber(location.population)}</li>
                  <li>Median Income: ${formatNumber(location.medianIncome)}</li>
                  <li>Bitcoin Businesses: {formatNumber(location.bitcoinBusinessesCount)}</li>
                  <li>Law Firms: {formatNumber(location.lawFirmsCount)}</li>
                </ul>
              </div>

              {/* Attorneys Section */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-8">
                  Certified Attorneys in {cityName}
                </h2>
                
                {attorneys.length > 0 ? (
                  <div className="grid gap-6">
                    {attorneys.map((attorney) => (
                      <AttorneyCard key={attorney.id} attorney={attorney} />
                    ))}
                  </div>
                ) : (
                  <div className="bg-gray-50 rounded-lg p-8 text-center">
                    <p className="text-gray-600 mb-4">
                      No certified attorneys currently listed in {cityName}.
                    </p>
                    <Link href="/find-attorney" className="btn btn-primary">
                      Search All Attorneys
                    </Link>
                  </div>
                )}
              </div>

              {/* Cost Estimates */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6">
                  Local Cost Estimates for {cityName}
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Basic Will with Bitcoin Provisions</h4>
                    <p className="text-2xl font-bold text-primary mb-2">$1,500 - $3,500</p>
                    <p className="text-sm text-gray-600">
                      Simple estate planning with cryptocurrency inheritance instructions
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Comprehensive Estate Plan</h4>
                    <p className="text-2xl font-bold text-primary mb-2">$5,000 - $15,000</p>
                    <p className="text-sm text-gray-600">
                      Trust-based planning with advanced Bitcoin protection strategies
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Complex Digital Asset Planning</h4>
                    <p className="text-2xl font-bold text-primary mb-2">$10,000 - $50,000</p>
                    <p className="text-sm text-gray-600">
                      Multi-generational planning with advanced structures
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-6">
                  *Costs vary based on complexity and attorney experience. Consultation required for accurate estimates.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* CTA Card */}
              <div className="bg-primary text-white rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">
                  Ready to Protect Your Bitcoin Legacy?
                </h3>
                <p className="mb-6">
                  Connect with a BEPC certified attorney in {cityName} today.
                </p>
                <Link href="/find-attorney" className="btn btn-secondary btn-lg w-full">
                  Find Attorney
                </Link>
              </div>

              {/* Nearby Cities */}
              {nearbyCities.length > 0 && (
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-4">
                    Other Cities in {stateName}
                  </h3>
                  <ul className="space-y-2">
                    {nearbyCities.map((city) => (
                      <li key={city.id}>
                        <Link
                          href={`/${stateCode}/${city.citySlug}/bitcoin-estate-planning-attorney`}
                          className="text-primary hover:text-primary-dark"
                        >
                          {city.cityName}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}