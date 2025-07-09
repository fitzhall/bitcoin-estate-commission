import Link from 'next/link'

// List of all US states
const US_STATES = [
  { code: 'al', name: 'Alabama' },
  { code: 'ak', name: 'Alaska' },
  { code: 'az', name: 'Arizona' },
  { code: 'ar', name: 'Arkansas' },
  { code: 'ca', name: 'California' },
  { code: 'co', name: 'Colorado' },
  { code: 'ct', name: 'Connecticut' },
  { code: 'de', name: 'Delaware' },
  { code: 'fl', name: 'Florida' },
  { code: 'ga', name: 'Georgia' },
  { code: 'hi', name: 'Hawaii' },
  { code: 'id', name: 'Idaho' },
  { code: 'il', name: 'Illinois' },
  { code: 'in', name: 'Indiana' },
  { code: 'ia', name: 'Iowa' },
  { code: 'ks', name: 'Kansas' },
  { code: 'ky', name: 'Kentucky' },
  { code: 'la', name: 'Louisiana' },
  { code: 'me', name: 'Maine' },
  { code: 'md', name: 'Maryland' },
  { code: 'ma', name: 'Massachusetts' },
  { code: 'mi', name: 'Michigan' },
  { code: 'mn', name: 'Minnesota' },
  { code: 'ms', name: 'Mississippi' },
  { code: 'mo', name: 'Missouri' },
  { code: 'mt', name: 'Montana' },
  { code: 'ne', name: 'Nebraska' },
  { code: 'nv', name: 'Nevada' },
  { code: 'nh', name: 'New Hampshire' },
  { code: 'nj', name: 'New Jersey' },
  { code: 'nm', name: 'New Mexico' },
  { code: 'ny', name: 'New York' },
  { code: 'nc', name: 'North Carolina' },
  { code: 'nd', name: 'North Dakota' },
  { code: 'oh', name: 'Ohio' },
  { code: 'ok', name: 'Oklahoma' },
  { code: 'or', name: 'Oregon' },
  { code: 'pa', name: 'Pennsylvania' },
  { code: 'ri', name: 'Rhode Island' },
  { code: 'sc', name: 'South Carolina' },
  { code: 'sd', name: 'South Dakota' },
  { code: 'tn', name: 'Tennessee' },
  { code: 'tx', name: 'Texas' },
  { code: 'ut', name: 'Utah' },
  { code: 'vt', name: 'Vermont' },
  { code: 'va', name: 'Virginia' },
  { code: 'wa', name: 'Washington' },
  { code: 'wv', name: 'West Virginia' },
  { code: 'wi', name: 'Wisconsin' },
  { code: 'wy', name: 'Wyoming' }
]

export function StateDirectory() {
  // Schema markup for better SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Bitcoin Estate Planning Attorneys by State",
    "description": "Directory of BEPC certified Bitcoin estate planning attorneys organized by US state",
    "numberOfItems": US_STATES.length,
    "itemListElement": US_STATES.map((state, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `https://bitcoinestatecommission.org/${state.code}/bitcoin-estate-planning`,
      "name": `Bitcoin Estate Planning in ${state.name}`
    }))
  };

  return (
    <section className="py-16 bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="container">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Find Bitcoin Estate Planning Attorneys by State
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select your state to find BEPC certified attorneys specializing in cryptocurrency inheritance planning
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {US_STATES.map((state) => (
              <Link
                key={state.code}
                href={`/${state.code}/bitcoin-estate-planning`}
                className="bg-white p-4 rounded-lg text-center hover:shadow-md transition-shadow group"
              >
                <span className="text-gray-700 group-hover:text-primary font-medium">
                  {state.name}
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Can't find a BEPC certified attorney in your area?
            </p>
            <Link href="/find-attorney" className="btn btn-primary">
              Search All Attorneys
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}