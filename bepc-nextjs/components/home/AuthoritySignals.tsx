const signals = [
  {
    icon: (
      <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '2,000+ Certified Attorneys',
    description: 'The largest network of Bitcoin estate planning professionals',
  },
  {
    icon: (
      <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: 'Industry Standard Protocol',
    description: 'KEEP Protocol adopted by 95% of Bitcoin estate planners',
  },
  {
    icon: (
      <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: '$50B+ Protected',
    description: 'Bitcoin wealth secured through our certified professionals',
  },
]

export function AuthoritySignals() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-3">
          {signals.map((signal, index) => (
            <div
              key={index}
              className="text-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mx-auto mb-4 text-primary">
                {signal.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold">{signal.title}</h3>
              <p className="text-gray-600">{signal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}