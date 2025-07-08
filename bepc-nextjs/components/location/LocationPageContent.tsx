'use client'

import Link from 'next/link'
import { formatNumber } from '@/lib/utils'
import { AttorneyCard } from '@/components/attorney/AttorneyCard'
import { LocalBusinessSchema, BreadcrumbSchema } from '@/components/SchemaMarkup'
import { familyGuideContent } from '@/lib/content-data'
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
                  Bitcoin estate planning in {cityName}, {stateName} requires specialized knowledge of both 
                  cryptocurrency technology and local regulations. With an estimated {formatNumber(location.population * 0.15)} 
                  cryptocurrency holders in {cityName} and billions in digital assets at risk, proper estate 
                  planning has never been more critical.
                </p>

                <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
                  <h3 className="text-xl font-bold text-red-900 mb-3">The Cost of Poor Planning</h3>
                  <p className="text-red-800">
                    Without proper Bitcoin estate planning, families in {stateName} face an average of 
                    $45,000 in probate costs and 18-24 months of legal battles. Don't let your family 
                    become another statistic.
                  </p>
                </div>

                <h3>Bitcoin Estate Planning Laws in {stateName}</h3>
                <p>{location.state.probateLawsSummary}</p>
                
                {location.state.estateTaxExemption > 0 && (
                  <div className="bg-blue-50 p-4 rounded-lg my-4">
                    <p className="mb-2">
                      <strong>Estate Tax Exemption:</strong> ${formatNumber(location.state.estateTaxExemption)}
                    </p>
                    <p className="text-sm text-gray-700">
                      {stateName} residents with cryptocurrency holdings above this threshold need advanced 
                      tax planning strategies to minimize estate tax liability.
                    </p>
                  </div>
                )}
                
                {location.state.regulatoryNotes && (
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
                    <p className="font-semibold text-yellow-900">Important {stateName} Requirements:</p>
                    <p className="text-yellow-800">{location.state.regulatoryNotes}</p>
                  </div>
                )}

                <h3>The KEEP Protocol Advantage in {cityName}</h3>
                <p>
                  BEPC certified attorneys in {cityName} implement the Key Emergency Estate Protocol (KEEP), 
                  providing:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>24-hour emergency response for beneficiaries</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Multi-signature security preventing single points of failure</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Compliance with {stateName} digital asset regulations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Annual security audits and updates</span>
                  </li>
                </ul>

                <h3>Local {cityName} Cryptocurrency Market</h3>
                <div className="grid grid-cols-2 gap-4 my-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{formatNumber(location.population)}</div>
                    <div className="text-sm text-gray-600">Population</div>
                    <div className="text-xs text-gray-500 mt-1">
                      Est. {formatNumber(location.population * 0.15)} crypto holders
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-primary">${formatNumber(location.medianIncome)}</div>
                    <div className="text-sm text-gray-600">Median Income</div>
                    <div className="text-xs text-gray-500 mt-1">
                      {location.medianIncome > 80000 ? 'High' : 'Moderate'} wealth concentration
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{formatNumber(location.bitcoinBusinessesCount)}</div>
                    <div className="text-sm text-gray-600">Bitcoin Businesses</div>
                    <div className="text-xs text-gray-500 mt-1">
                      Active crypto ecosystem
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{formatNumber(location.lawFirmsCount)}</div>
                    <div className="text-sm text-gray-600">Law Firms</div>
                    <div className="text-xs text-gray-500 mt-1">
                      Only {attorneys.length} BEPC certified
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-primary to-secondary text-white p-6 rounded-lg my-8">
                  <h4 className="text-xl font-bold mb-3">Don't Wait Until It's Too Late</h4>
                  <p className="mb-4">
                    Every day without proper Bitcoin estate planning puts your family's financial future at risk. 
                    In {cityName} alone, an estimated ${formatNumber(location.population * 0.15 * 5000)} in 
                    cryptocurrency remains vulnerable to permanent loss.
                  </p>
                  <Link href="#cta" className="inline-flex items-center bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                    Find Your BEPC Attorney Now
                    <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
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

              {/* Horror Stories Section */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-8">Real Stories: The Cost of Poor Planning</h2>
                <div className="space-y-6">
                  {familyGuideContent.horrorStories.slice(0, 2).map((story) => (
                    <div key={story.id} className="bg-gray-50 border-l-4 border-red-500 p-6 rounded-lg">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{story.title}</h4>
                      <p className="text-gray-700 mb-4">{story.details}</p>
                      <div className="bg-white p-4 rounded border border-gray-200">
                        <p className="font-semibold text-gray-900 mb-1">Key Lesson:</p>
                        <p className="text-gray-700">{story.lesson}</p>
                        <p className="text-primary font-semibold mt-2">
                          Prevention: {story.preventionTip}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-gray-600">
                  These are just a few examples of the {familyGuideContent.statistics.overview.percentageAtRisk} of 
                  cryptocurrency holders who lack proper estate planning. Don't let your family become another statistic.
                </p>
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