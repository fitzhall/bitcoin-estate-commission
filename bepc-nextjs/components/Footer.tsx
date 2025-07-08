import Link from 'next/link'

const footerLinks = {
  forAttorneys: [
    { name: 'Certification Program', href: '/certification' },
    { name: 'Professional Standards', href: '/standards' },
    { name: 'CLE Courses', href: '/education/cle' },
    { name: 'Legal Templates', href: '/resources/templates' },
    { name: 'Apply Now', href: '/certification/apply' },
  ],
  forFamilies: [
    { name: 'Find Certified Attorney', href: '/find-attorney' },
    { name: 'Planning Guide', href: '/resources/guide' },
    { name: 'Calculator Tools', href: '/resources/tools' },
    { name: 'Case Studies', href: '/research/case-studies' },
    { name: 'All Resources', href: '/resources' },
  ],
  standards: [
    { name: 'KEEP Protocol', href: '/standards/keep-protocol' },
    { name: 'Guidelines', href: '/standards/guidelines' },
    { name: 'Compliance', href: '/standards/compliance' },
    { name: 'Industry Reports', href: '/research/reports' },
    { name: 'Latest News', href: '/news' },
  ],
  about: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Mission', href: '/about/mission' },
    { name: 'Leadership', href: '/about/team' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
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
              Standards & Research
            </h3>
            <ul className="space-y-2">
              {footerLinks.standards.map((link) => (
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
              About BEPC
            </h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
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
          <div className="text-center">
            <p className="text-sm text-gray-300">
              © {new Date().getFullYear()} Bitcoin Estate Planning Commission. All rights reserved.
            </p>
            <p className="mt-2 text-sm text-gray-400">
              The global authority for <span className="text-accent-light">Bitcoin</span> estate planning standards and certification.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}