import { Metadata } from 'next'
import Link from 'next/link'
import { getAllStates } from '@/lib/state-data'

export const metadata: Metadata = {
  title: 'Bitcoin Estate Planning Attorneys by State | BEPC',
  description: 'Find BEPC certified Bitcoin estate planning attorneys in your state. Browse our directory of cryptocurrency inheritance experts across the United States.',
}

export default function AttorneysPage() {
  const states = getAllStates()
  
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-light text-white py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Find Bitcoin Estate Planning Attorneys by State
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Connect with BEPC certified attorneys who understand cryptocurrency inheritance laws in your state
            </p>
          </div>
        </div>
      </section>

      {/* Featured States */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured States with RUFADAA Adoption
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {states.map((state) => (
              <Link
                key={state.slug}
                href={`/attorneys/${state.slug}`}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{state.name}</h3>
                  <span className={`px-2 py-1 text-xs rounded ${
                    state.rufadaa.adopted 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-orange-100 text-orange-800'
                  }`}>
                    {state.rufadaa.status}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  {state.rufadaa.adopted 
                    ? `RUFADAA adopted ${state.rufadaa.adoptionDate ? new Date(state.rufadaa.adoptionDate).getFullYear() : ''}`
                    : 'Digital asset laws pending'
                  }
                </p>
                {state.stats && (
                  <div className="text-xs text-gray-500">
                    <p>{state.stats.bitcoinBusinesses}+ Bitcoin businesses</p>
                    <p>{state.stats.estatePlanners.toLocaleString()}+ Estate planners</p>
                  </div>
                )}
                <p className="text-primary font-semibold mt-4">
                  View Attorneys →
                </p>
              </Link>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-gray-600 mb-6">
              Additional states coming soon as our network expands
            </p>
            <Link href="/certification/become-certified" className="btn btn-primary">
              Become a Certified Attorney
            </Link>
          </div>
        </div>
      </section>

      {/* Why State-Specific */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why State-Specific Bitcoin Estate Planning Matters
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Digital Asset Laws Vary</h3>
                <p className="text-gray-700 mb-4">
                  Each state has different laws regarding digital assets. RUFADAA adoption, 
                  implementation details, and court procedures vary significantly across states.
                </p>
                <p className="text-gray-700">
                  Working with an attorney who understands your state's specific requirements 
                  ensures compliance and validity of your Bitcoin estate plan.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Tax Implications Differ</h3>
                <p className="text-gray-700 mb-4">
                  State tax laws dramatically impact Bitcoin inheritance. Some states have no 
                  estate tax, while others impose significant levies on digital asset transfers.
                </p>
                <p className="text-gray-700">
                  BEPC certified attorneys understand both federal and state tax implications, 
                  helping structure your plan for maximum benefit to beneficiaries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Protect Your Bitcoin Legacy?
            </h2>
            <p className="text-xl mb-8">
              Find a BEPC certified attorney in your state who understands both cryptocurrency and local laws
            </p>
            <Link href="/find-attorney" className="btn btn-secondary btn-lg">
              Search for Attorneys
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}