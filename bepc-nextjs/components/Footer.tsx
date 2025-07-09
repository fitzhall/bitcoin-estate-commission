import Link from 'next/link'

const footerLinks = {
  forAttorneys: [
    { name: 'Certification Program', href: '/certification' },
    { name: 'Professional Standards', href: '/standards' },
    { name: 'Apply Now', href: '/certification/apply' },
    { name: 'Download Standards', href: '/get-standards' },
  ],
  forFamilies: [
    { name: 'Find Certified Attorney', href: '/find-attorney' },
    { name: 'All Resources', href: '/resources' },
    { name: 'Download Guide', href: '/get-standards' },
  ],
  resources: [
    { name: 'Bitcoin Estate Standards', href: '/standards' },
    { name: 'Resource Library', href: '/resources' },
    { name: 'About BEPC', href: '/about' },
  ],
  legal: [
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Contact Us', href: 'mailto:info@bitcoinestatecommission.org' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent-light">
              For Attorneys
            </h3>
            <ul className="space-y-2">
              {footerLinks.forAttorneys.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-accent-light transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent-light">
              For Families
            </h3>
            <ul className="space-y-2">
              {footerLinks.forFamilies.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-accent-light transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent-light">
              Resources
            </h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-accent-light transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent-light">
              Legal
            </h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-accent-light transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-700 pt-8">
          {/* Professional Disclaimers */}
          <div className="mb-8 bg-primary-dark/50 rounded-lg p-6 border border-gray-700">
            <h4 className="text-sm font-semibold text-accent-light mb-3 uppercase tracking-wider">
              Important Legal Disclaimers
            </h4>
            <div className="space-y-2 text-xs text-gray-400">
              <p>
                <strong className="text-gray-300">No Legal Advice:</strong> The information provided on this website is for general informational purposes only and does not constitute legal, tax, or financial advice. Always consult with qualified professionals before making decisions about estate planning or cryptocurrency management.
              </p>
              <p>
                <strong className="text-gray-300">No Attorney-Client Relationship:</strong> Use of this website or communication with BEPC does not create an attorney-client relationship. BEPC is not a law firm and does not provide legal services.
              </p>
              <p>
                <strong className="text-gray-300">No Guarantees:</strong> BEPC certification and standards are educational tools. Results depend on proper implementation by qualified professionals. No specific outcomes are guaranteed.
              </p>
              <p>
                <strong className="text-gray-300">Independent Professionals:</strong> Attorneys listed in our directory are independent professionals. BEPC does not endorse or guarantee their services. Users should conduct their own due diligence.
              </p>
            </div>
          </div>

          {/* Copyright and Links */}
          <div className="text-center">
            <p className="text-sm text-gray-300">
              © {new Date().getFullYear()} Bitcoin Estate Planning Commission. All rights reserved.
            </p>
            <p className="mt-2 text-sm text-gray-400">
              The global authority for <span className="text-accent-light">Bitcoin</span> estate planning standards and certification.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs">
              <Link href="/terms" className="text-gray-400 hover:text-accent-light transition-colors">
                Terms of Service
              </Link>
              <span className="text-gray-600">•</span>
              <Link href="/privacy" className="text-gray-400 hover:text-accent-light transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-600">•</span>
              <a href="mailto:legal@bitcoinestatecommission.org" className="text-gray-400 hover:text-accent-light transition-colors">
                Legal Inquiries
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}