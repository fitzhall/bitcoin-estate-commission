import Link from 'next/link'
import { InlineStandardsForm } from './InlineStandardsForm'

const stats = [
  { 
    value: '$140B+', 
    label: 'Bitcoin at Risk',
    source: 'Based on Chainalysis 2023 report on lost Bitcoin'
  },
  { 
    value: '89%', 
    label: 'Attorneys Unprepared',
    source: 'BEPC survey of 500+ estate planning attorneys, 2024'
  },
  { 
    value: '4M', 
    label: 'Coins Could Be Lost',
    source: 'Estimated from on-chain analysis of dormant wallets'
  },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-light text-white">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <div className="container relative py-24 sm:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            The Professional Standard for <span className="text-accent">Bitcoin</span> Estate Planning
          </h1>
          <p className="mb-10 text-xl text-gray-200 sm:text-2xl">
            Join leading estate planners shaping Bitcoin inheritance standards
          </p>
          
          {/* Inline Standards Form - Above the fold */}
          <div className="mb-10">
            <InlineStandardsForm />
          </div>
          
          <div className="mb-10 flex flex-wrap justify-center gap-8 sm:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center group relative">
                <div className="text-4xl font-bold text-accent sm:text-5xl">
                  {stat.value}
                  <span className="text-xs align-super cursor-help">*</span>
                </div>
                <div className="mt-1 text-sm text-gray-200 sm:text-base">
                  {stat.label}
                </div>
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  {stat.source}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                    <div className="border-4 border-transparent border-t-gray-900"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/certification/apply" className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary">
              Become Certified
            </Link>
            <Link href="/find-attorney" className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary">
              Find an Attorney
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}