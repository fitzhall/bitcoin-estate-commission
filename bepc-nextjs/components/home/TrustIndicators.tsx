const testimonials = [
  {
    quote: "The BEPC has established the gold standard for Bitcoin estate planning education and certification.",
    author: "American Bar Association Estate Planning Committee",
  },
  {
    quote: "Leading the way in cryptocurrency inheritance planning standards and attorney education.",
    author: "Legal Tech News",
  },
  {
    quote: "BEPC certified attorneys are the most qualified professionals for Bitcoin estate planning.",
    author: "Cryptocurrency Estate Planning Institute",
  },
]

export function TrustIndicators() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow text-center border-2 border-transparent hover:border-accent/20"
            >
              <svg className="h-10 w-10 text-accent mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-gray-600 italic mb-6">
                "{testimonial.quote}"
              </p>
              <cite className="text-sm font-semibold text-accent-dark not-italic">
                — {testimonial.author}
              </cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}