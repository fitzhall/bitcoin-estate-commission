import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getStateData, getAllStates } from '@/lib/state-data'
import { BreadcrumbSchema, FAQSchema } from '@/components/SchemaMarkup'

interface Props {
  params: {
    state: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const stateData = getStateData(params.state)
  
  if (!stateData) {
    return {
      title: 'State Not Found',
    }
  }

  return {
    title: `Bitcoin Estate Planning Attorneys in ${stateData.name} | BEPC Certified`,
    description: `Find BEPC certified Bitcoin estate planning attorneys in ${stateData.name}. ${stateData.rufadaa.adopted ? 'RUFADAA compliant' : 'Expert'} cryptocurrency inheritance planning and digital asset protection.`,
    openGraph: {
      title: `Bitcoin Estate Planning in ${stateData.name}`,
      description: `Expert Bitcoin estate planning attorneys throughout ${stateData.name}. State-specific cryptocurrency inheritance laws and certified professionals.`,
      type: 'website',
    },
  }
}

export const dynamic = 'force-static'
export const revalidate = 86400

export async function generateStaticParams() {
  return getAllStates().map((state) => ({
    state: state.slug,
  }))
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

export default async function StatePage({ params }: Props) {
  const stateData = getStateData(params.state)
  
  if (!stateData) {
    notFound()
  }

  const faqData = {
    questions: stateData.faqs.map(faq => ({
      question: faq.question,
      answer: faq.answer
    }))
  }

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://bitcoinestatecommission.org' },
          { name: 'Find Attorney', url: 'https://bitcoinestatecommission.org/find-attorney' },
          { name: stateData.name, url: `https://bitcoinestatecommission.org/attorneys/${stateData.slug}` },
        ]}
      />
      
      <FAQSchema {...faqData} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-light text-white py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Bitcoin Estate Planning Attorneys in {stateData.name}
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Expert cryptocurrency inheritance planning with {stateData.rufadaa.adopted ? 'RUFADAA compliance' : 'state-specific expertise'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/find-attorney" className="btn btn-secondary btn-lg">
                Find Your Attorney
              </Link>
              <a href="#rufadaa" className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary">
                {stateData.name} Digital Asset Laws
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* State Overview */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg">
              <h2>Bitcoin Estate Planning in {stateData.name}</h2>
              <p className="lead">{stateData.intro}</p>
              
              {stateData.stats && (
                <div className="grid md:grid-cols-3 gap-6 my-8 not-prose">
                  <div className="bg-blue-50 p-6 rounded-lg text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {stateData.stats.bitcoinBusinesses}+
                    </div>
                    <p className="text-sm text-gray-600">Bitcoin Businesses</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {stateData.stats.lawFirms.toLocaleString()}+
                    </div>
                    <p className="text-sm text-gray-600">Law Firms</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {stateData.stats.estatePlanners.toLocaleString()}+
                    </div>
                    <p className="text-sm text-gray-600">Estate Planners</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* RUFADAA Status */}
      <section id="rufadaa" className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Digital Asset Laws in {stateData.name}
            </h2>
            <RufadaaTable state={stateData} />
            
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-6">
                Understanding {stateData.name}'s digital asset laws is crucial for proper Bitcoin estate planning
              </p>
              <Link href="/education/understanding-rufadaa" className="btn btn-primary">
                Learn More About RUFADAA
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {stateData.faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Protect Your Bitcoin Legacy in {stateData.name}
            </h2>
            <p className="text-xl mb-8">
              Connect with a BEPC certified attorney who understands both {stateData.name} law and Bitcoin technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/find-attorney" className="btn btn-secondary btn-lg">
                Find Your {stateData.name} Attorney
              </Link>
              <Link href="/get-standards" className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary">
                Download BEPC Standards
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}