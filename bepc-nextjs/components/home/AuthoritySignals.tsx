const signals = [
  {
    icon: (
      <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: '200+ Cases Analyzed',
    description: 'Extensive research into Bitcoin inheritance failures and solutions',
  },
  {
    icon: (
      <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Expert Network Forming',
    description: 'Leading estate planning experts shaping professional standards',
  },
  {
    icon: (
      <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Research-Based Standards',
    description: 'First comprehensive framework based on real inheritance case studies',
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