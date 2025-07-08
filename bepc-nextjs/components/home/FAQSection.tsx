import Link from 'next/link'
import { FAQSchema } from '@/components/SchemaMarkup'

const faqs = [
  {
    question: "What happens to my Bitcoin when I die without proper estate planning?",
    answer: "Without proper estate planning, your Bitcoin becomes permanently inaccessible. Unlike traditional assets, Bitcoin cannot be recovered through court orders or bank interventions. If your private keys are lost or unknown to your heirs, the Bitcoin is lost forever. This is why specialized Bitcoin estate planning with a BEPC-certified attorney is critical."
  },
  {
    question: "How is Bitcoin estate planning different from traditional estate planning?",
    answer: "Bitcoin estate planning requires understanding both legal frameworks and technical aspects of cryptocurrency. Traditional estate planning relies on centralized institutions that can be compelled by courts. Bitcoin's decentralized nature means that without proper key management and transfer protocols, assets become permanently inaccessible. BEPC-certified attorneys understand these unique challenges."
  },
  {
    question: "What is the KEEP Framework?",
    answer: "The KEEP framework is our comprehensive Bitcoin estate planning system built on four essential pillars: Keep it Secure (robust security measures), Establish Legal Protection (legally binding frameworks), Ensure Access Through Governance (clear succession procedures), and Plan for the Future (adaptable strategies). This holistic approach ensures your Bitcoin wealth is protected for generations."
  },
  {
    question: "How much does Bitcoin estate planning cost?",
    answer: "Bitcoin estate planning costs vary based on complexity and asset value. Basic plans for simple holdings typically range from $2,500-$5,000. Complex plans involving multiple wallets, business holdings, or dynasty trusts can range from $10,000-$25,000. BEPC-certified attorneys provide transparent pricing based on your specific needs."
  },
  {
    question: "Can I just leave my private keys in a safety deposit box?",
    answer: "Simply storing private keys in a safety deposit box is risky and insufficient. Banks can restrict access, boxes can be sealed during probate, and physical storage can degrade. Additionally, your heirs need technical knowledge to use the keys. Proper Bitcoin estate planning includes secure storage, clear instructions, and legal frameworks to ensure successful transfer."
  },
  {
    question: "What is BEPC certification?",
    answer: "BEPC (Bitcoin Estate Planning Commission) certification is a comprehensive credential for attorneys specializing in cryptocurrency estate planning. It requires 40+ hours of training covering Bitcoin technology, security protocols, tax implications, and specialized legal frameworks. Only BEPC-certified attorneys have demonstrated competency in both legal and technical aspects."
  },
  {
    question: "How do I find a qualified Bitcoin estate planning attorney?",
    answer: "Use the BEPC attorney directory to find certified professionals in your area. Look for attorneys with specific Bitcoin estate planning experience, technical competency, and proper certifications. Avoid general estate planners who lack cryptocurrency expertise, as mistakes in Bitcoin planning can result in permanent loss."
  },
  {
    question: "What happens if I lose my private keys?",
    answer: "If you lose your private keys, your Bitcoin is permanently inaccessible - there is no recovery mechanism. This is why proper Bitcoin estate planning includes redundancy, secure backup procedures, and emergency access protocols. BEPC-certified attorneys help create systems that protect against loss while maintaining security."
  },
  {
    question: "Do I need to update my estate plan when I buy more Bitcoin?",
    answer: "Yes, you should update your estate plan when you acquire significant Bitcoin holdings or change storage methods. Regular reviews ensure all assets are properly documented and transfer mechanisms remain current. BEPC-certified attorneys recommend annual reviews or updates after major transactions."
  },
  {
    question: "Can Bitcoin be held in a trust?",
    answer: "Yes, Bitcoin can and should be held in properly structured trusts for estate planning purposes. However, traditional trust language is insufficient for digital assets. BEPC-certified attorneys create specialized Bitcoin trusts with proper technical provisions, multi-signature implementations, and clear succession protocols."
  },
  {
    question: "What are the tax implications of inheriting Bitcoin?",
    answer: "Bitcoin inheritance triggers several tax considerations including stepped-up basis, estate taxes for large holdings, and potential state taxes. Proper planning can minimize tax liability through strategies like grantor retained annuity trusts (GRATs) or charitable remainder trusts. BEPC-certified attorneys coordinate with tax professionals for comprehensive planning."
  },
  {
    question: "How long does Bitcoin estate planning take?",
    answer: "The timeline depends on complexity. Basic Bitcoin estate plans can be completed in 2-4 weeks. Complex plans involving multiple beneficiaries, business entities, or sophisticated trust structures may take 6-8 weeks. The process includes initial consultation, asset inventory, document drafting, technical implementation, and beneficiary education."
  }
]

export function FAQSection() {
  return (
    <section className="py-20 bg-gray-50">
      <FAQSchema questions={faqs} />
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions About Bitcoin Estate Planning
          </h2>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm">
                <details className="group">
                  <summary className="px-6 py-4 cursor-pointer list-none flex items-center justify-between hover:bg-gray-50 transition-colors">
                    <h3 className="text-lg font-semibold pr-8">{faq.question}</h3>
                    <svg
                      className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 mb-6">
              Have more questions about protecting your Bitcoin legacy?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/find-attorney" className="btn btn-primary btn-lg">
                Find a Certified Attorney
              </Link>
              <Link href="/resources/guide" className="btn btn-outline btn-lg">
                Read Our Complete Guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}