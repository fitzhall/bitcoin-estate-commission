import Link from 'next/link'

export function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary-light text-white">
      <div className="container text-center">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Protect Your Bitcoin Legacy?
        </h2>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Join thousands of families and attorneys who trust BEPC for Bitcoin estate planning.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/find-attorney" className="btn btn-secondary btn-lg">
            Find Certified Attorney
          </Link>
          <Link href="/certification" className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary">
            Become Certified
          </Link>
        </div>
      </div>
    </section>
  )
}