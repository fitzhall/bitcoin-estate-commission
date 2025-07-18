import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { stateRegulations } from '@/lib/content-data'
import { safeDb } from '@/lib/database'
import { getCitiesByState } from '@/lib/cities-data'
import { BreadcrumbSchema, FAQSchema } from '@/components/SchemaMarkup'
import { getStateData } from '@/lib/state-data'
import { loadStateContent } from '@/lib/content-loader'
import ReactMarkdown from 'react-markdown'

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

function RufadaaTable({ state }: { state: ReturnType<typeof getStateData> }) {
  if (!state) return null

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="bg-primary text-white p-4">
        <h3 className="text-xl font-bold">RUFADAA Status in {state.name}</h3>
      </div>
      <div className="p-6">
        <div className="grid gap-4">
          <div className="flex justify-between items-start border-b pb-3">
            <span className="font-semibold text-gray-700">Adoption Status:</span>
            <span className={`font-bold ${state.rufadaa.adopted ? 'text-green-600' : 'text-orange-600'}`}>
              {state.rufadaa.status}
            </span>
          </div>
          
          {state.rufadaa.adoptionDate && (
            <div className="flex justify-between items-start border-b pb-3">
              <span className="font-semibold text-gray-700">Adoption Date:</span>
              <span>{new Date(state.rufadaa.adoptionDate).toLocaleDateString()}</span>
            </div>
          )}
          
          {state.rufadaa.citation && (
            <div className="flex justify-between items-start border-b pb-3">
              <span className="font-semibold text-gray-700">Legal Citation:</span>
              <span className="text-sm font-mono">{state.rufadaa.citation}</span>
            </div>
          )}
          
          {state.rufadaa.courtApprovalThreshold && (
            <div className="flex justify-between items-start border-b pb-3">
              <span className="font-semibold text-gray-700">Court Approval:</span>
              <span className="text-sm">{state.rufadaa.courtApprovalThreshold}</span>
            </div>
          )}
          
          {state.rufadaa.keyProvisions && state.rufadaa.keyProvisions.length > 0 && (
            <div>
              <p className="font-semibold text-gray-700 mb-2">Key Provisions:</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                {state.rufadaa.keyProvisions.map((provision, index) => (
                  <li key={index}>{provision}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
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
  const rufadaaData = getStateData(normalizedState)
  
  // Load rich content for enhanced states
  const stateContent = await loadStateContent(normalizedState)
  const hasEnhancedContent = ['ny', 'ca', 'tx', 'fl', 'sd', 'il', 'wa', 'nv', 'wy', 'de'].includes(normalizedState)

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

  const faqData = rufadaaData ? {
    questions: rufadaaData.faqs.map(faq => ({
      question: faq.question,
      answer: faq.answer
    }))
  } : null

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://bitcoinestatecommission.org' },
          { name: stateName, url: `https://bitcoinestatecommission.org/${normalizedState}/bitcoin-estate-planning` },
        ]}
      />
      
      {faqData && <FAQSchema {...faqData} />}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-dark to-primary py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white drop-shadow-lg">
              Bitcoin Estate Planning Attorneys in {stateName}
            </h1>
            <p className="text-xl text-white/90 mb-8 drop-shadow-md">
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

      {/* State Content - Rich content for pilot states, template for others */}
      {hasEnhancedContent && stateContent ? (
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <ReactMarkdown
                  components={{
                    h1: ({ children }) => <h1 className="text-4xl font-bold mb-8">{children}</h1>,
                    h2: ({ children }) => <h2 className="text-3xl font-bold mt-12 mb-6">{children}</h2>,
                    h3: ({ children }) => <h3 className="text-2xl font-bold mt-8 mb-4">{children}</h3>,
                    h4: ({ children }) => <h4 className="text-xl font-bold mt-6 mb-3">{children}</h4>,
                    p: ({ children }) => <p className="mb-6 text-gray-700 leading-relaxed">{children}</p>,
                    ul: ({ children }) => <ul className="mb-6 ml-6 list-disc space-y-2">{children}</ul>,
                    ol: ({ children }) => <ol className="mb-6 ml-6 list-decimal space-y-2">{children}</ol>,
                    li: ({ children }) => <li className="text-gray-700">{children}</li>,
                    strong: ({ children }) => <strong className="font-semibold text-gray-900">{children}</strong>,
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-4 border-primary pl-6 my-6 italic text-gray-700">
                        {children}
                      </blockquote>
                    ),
                    a: ({ href, children }) => (
                      <Link href={href || '#'} className="text-primary hover:text-primary-dark underline">
                        {children}
                      </Link>
                    ),
                  }}
                >
                  {stateContent}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg">
                <h2>Bitcoin Estate Planning in {stateName}: What You Need to Know</h2>
                <p>
                  {rufadaaData 
                    ? rufadaaData.intro
                    : `${stateName} residents holding Bitcoin and other cryptocurrencies face unique estate planning challenges. With proper planning through a BEPC certified attorney, you can ensure your digital assets are protected and properly transferred to your beneficiaries.`
                  }
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
      )}

      {/* RUFADAA Status Section - Only for non-pilot states */}
      {!hasEnhancedContent && rufadaaData && (
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Digital Asset Laws in {stateName}
              </h2>
              <RufadaaTable state={rufadaaData} />
              
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-6">
                  Understanding {stateName}'s digital asset laws is crucial for proper Bitcoin estate planning
                </p>
                <Link href="/education/understanding-rufadaa" className="btn btn-primary">
                  Learn More About RUFADAA
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

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

      {/* State-Specific Content - Only for non-pilot states */}
      {!hasEnhancedContent && (
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

            {/* FAQ Section - Only for non-pilot states */}
            {!hasEnhancedContent && rufadaaData && rufadaaData.faqs.length > 0 && (
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-8">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                  {rufadaaData.faqs.map((faq, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                      <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

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
      )}
    </>
  )
}