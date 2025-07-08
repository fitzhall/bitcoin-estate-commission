import Link from 'next/link'

export function ExtendedContent() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* The Bitcoin Inheritance Crisis */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">The Bitcoin Inheritance Crisis No One Talks About</h2>
            <div className="prose prose-lg text-gray-700">
              <p>
                Every day, Bitcoin worth millions becomes permanently inaccessible. Not because of market crashes or hacking, 
                but because of something far more preventable: inadequate estate planning.
              </p>
              <p>
                Traditional estate planning, perfected over centuries, fails catastrophically when applied to Bitcoin. 
                Why? Because Bitcoin operates on fundamentally different principles than any asset in human history.
              </p>
              <p>
                With traditional assets, courts can intervene. Banks can be compelled. Assets can be recovered. 
                But with Bitcoin, when private keys are lost, the assets are gone forever. No court order, no legal 
                document, no amount of money can recover them.
              </p>
              <p>
                This isn't theoretical. Our research into 200+ Bitcoin inheritance cases revealed a pattern of 
                preventable losses that should alarm every Bitcoin holder and estate planning attorney.
              </p>
            </div>
          </div>

          {/* Why Traditional Estate Planning Fails */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Why Traditional Estate Planning Fails for Bitcoin</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Traditional Assets</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Centralized control (banks, brokers)</li>
                  <li>• Court intervention possible</li>
                  <li>• Recovery mechanisms exist</li>
                  <li>• Professional custodians available</li>
                  <li>• Established legal frameworks</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Bitcoin</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Decentralized (no intermediaries)</li>
                  <li>• Courts cannot compel access</li>
                  <li>• Lost keys = lost forever</li>
                  <li>• Self-custody required</li>
                  <li>• Evolving legal landscape</li>
                </ul>
              </div>
            </div>
            <div className="prose prose-lg text-gray-700">
              <p>
                This fundamental difference means that estate planning attorneys, no matter how skilled in traditional 
                planning, face an entirely new set of challenges with Bitcoin. The strategies that work for stocks, 
                real estate, and bank accounts can actually make Bitcoin less secure or completely inaccessible to heirs.
              </p>
            </div>
          </div>

          {/* The KEEP Framework Solution */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">The KEEP Framework: Your Complete Bitcoin Protection System</h2>
            <div className="prose prose-lg text-gray-700 mb-8">
              <p>
                The KEEP framework ensures comprehensive Bitcoin estate planning through four essential pillars. 
                This holistic approach protects your Bitcoin wealth for generations, addressing both the technical 
                and legal complexities unique to digital assets.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-primary text-white text-3xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  K
                </div>
                <h3 className="font-bold mb-2 text-center">Keep it Secure</h3>
                <p className="text-sm text-gray-600">Implement robust security measures to protect Bitcoin assets during your lifetime and beyond</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-primary text-white text-3xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  E
                </div>
                <h3 className="font-bold mb-2 text-center">Establish Legal Protection</h3>
                <p className="text-sm text-gray-600">Create legally binding frameworks ensuring Bitcoin transfers according to your wishes</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-primary text-white text-3xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  E
                </div>
                <h3 className="font-bold mb-2 text-center">Ensure Access Through Governance</h3>
                <p className="text-sm text-gray-600">Design clear governance structures enabling beneficiary access when needed</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-primary text-white text-3xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  P
                </div>
                <h3 className="font-bold mb-2 text-center">Plan for the Future</h3>
                <p className="text-sm text-gray-600">Create adaptable strategies that evolve with technology and family circumstances</p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <p className="text-lg font-semibold text-blue-900 mb-2">
                Why KEEP Works Where Others Fail
              </p>
              <p className="text-gray-700">
                Traditional estate planning focuses on legal documents alone. The KEEP framework integrates 
                security, legal protection, governance, and future planning into one comprehensive system. 
                This ensures your Bitcoin remains both secure today and accessible to your beneficiaries tomorrow.
              </p>
            </div>
          </div>

          {/* Who Needs Bitcoin Estate Planning */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Who Needs Bitcoin Estate Planning?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="border-2 border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Early Bitcoin Adopters</h3>
                <p className="text-gray-700 mb-4">
                  Purchased Bitcoin before 2017 and now hold significant wealth that needs protection.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Average holdings: 10-100 BTC</li>
                  <li>• Often use complex storage</li>
                  <li>• Need dynasty planning</li>
                </ul>
              </div>
              
              <div className="border-2 border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Corporate Executives</h3>
                <p className="text-gray-700 mb-4">
                  Receive Bitcoin as compensation or hold corporate treasury Bitcoin.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Complex tax situations</li>
                  <li>• Regulatory compliance needs</li>
                  <li>• Succession planning required</li>
                </ul>
              </div>
              
              <div className="border-2 border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Bitcoin Businesses</h3>
                <p className="text-gray-700 mb-4">
                  Miners, exchanges, and Bitcoin companies with operational holdings.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Business continuity planning</li>
                  <li>• Key person protection</li>
                  <li>• Multi-signature requirements</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Common Mistakes */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Fatal Mistakes in Bitcoin Estate Planning</h2>
            <div className="space-y-6">
              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <h3 className="font-bold text-red-900 mb-2">Mistake #1: Storing Private Keys in a Will</h3>
                <p className="text-gray-700">
                  Wills become public record during probate. Including private keys exposes Bitcoin to theft. 
                  Yet 31% of DIY Bitcoin estate plans make this critical error.
                </p>
              </div>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <h3 className="font-bold text-red-900 mb-2">Mistake #2: Over-Relying on Hardware Wallets</h3>
                <p className="text-gray-700">
                  Hardware wallets can fail, PINs can be forgotten, and manufacturers discontinue support. 
                  Without proper backup procedures, hardware wallets become single points of failure.
                </p>
              </div>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <h3 className="font-bold text-red-900 mb-2">Mistake #3: Incomplete Access Instructions</h3>
                <p className="text-gray-700">
                  Telling heirs you have Bitcoin without complete recovery instructions is like leaving 
                  them a treasure map with missing pieces. Technical details matter.
                </p>
              </div>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <h3 className="font-bold text-red-900 mb-2">Mistake #4: Ignoring Tax Implications</h3>
                <p className="text-gray-700">
                  Bitcoin inheritance can trigger massive tax liabilities. Without proper planning, 
                  heirs may be forced to liquidate at unfavorable times just to pay taxes.
                </p>
              </div>
            </div>
          </div>

          {/* The Path Forward */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Your Path to Bitcoin Estate Security</h2>
            <div className="bg-gradient-to-r from-primary to-primary-light text-white p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-bold mb-4">For Bitcoin Holders</h3>
              <p className="text-xl mb-6">
                Don't let your Bitcoin become part of the $140 billion at risk. Work with a BEPC-certified 
                attorney who understands both the technical and legal aspects of Bitcoin inheritance.
              </p>
              <Link href="/find-attorney" className="btn btn-secondary btn-lg">
                Find a Certified Attorney
              </Link>
            </div>
            
            <div className="bg-gradient-to-r from-secondary to-secondary-dark text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">For Estate Planning Attorneys</h3>
              <p className="text-xl mb-6">
                Join the 500+ attorneys preparing for the greatest wealth transfer in history. Get certified 
                before your competitors and capture the growing Bitcoin estate planning market.
              </p>
              <Link href="/certification" className="btn btn-primary btn-lg bg-white text-primary hover:bg-gray-100">
                Get BEPC Certified
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}