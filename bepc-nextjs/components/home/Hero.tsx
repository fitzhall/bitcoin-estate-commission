import Link from 'next/link'

const stats = [
  { value: '$140B', label: 'Lost Forever' },
  { value: '20%', label: 'Of All Bitcoin' },
  { value: '4M', label: 'Coins Inaccessible' },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-light text-white">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <div className="container relative py-24 sm:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            The Global Authority for Bitcoin Estate Planning
          </h1>
          <p className="mb-10 text-xl text-gray-200 sm:text-2xl">
            Protecting $2.3 trillion in Bitcoin wealth through professional standards, 
            certification, and expert legal guidance.
          </p>
          
          <div className="mb-10 flex flex-wrap justify-center gap-8 sm:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-secondary sm:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-gray-200 sm:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/find-attorney" className="btn btn-secondary btn-lg">
              Find Certified Attorney
            </Link>
            <Link href="/certification" className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary">
              Get Certified
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}