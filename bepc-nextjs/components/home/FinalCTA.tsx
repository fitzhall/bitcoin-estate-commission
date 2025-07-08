import Link from 'next/link'

export function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary-light to-accent/20 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <div className="container text-center relative z-10">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Protect Your <span className="text-accent-light">Bitcoin</span> Legacy?
        </h2>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Join thousands of families and attorneys who trust BEPC for Bitcoin estate planning.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/find-attorney" className="btn bg-accent hover:bg-accent-dark text-white btn-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
            Find Certified Attorney
          </Link>
          <Link href="/certification" className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-accent transition-all">
            Become Certified
          </Link>
        </div>
      </div>
    </section>
  )
}