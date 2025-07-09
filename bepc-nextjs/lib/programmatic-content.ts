// Programmatic SEO Content Management System
// This file manages the topic-based content for Phase 1

export interface TopicPage {
  slug: string
  title: string
  metaDescription: string
  category: 'professional-standards' | 'education' | 'technical' | 'compliance'
  keywords: string[]
  contentFile?: string // Path to markdown file
  wordCount?: number
  lastUpdated: string
  status: 'published' | 'draft'
  schemaType: 'Course' | 'HowTo' | 'Article' | 'ProfessionalService'
}

// Phase 1: Professional Standards Content (First 5 pages ready)
export const programmaticPages: TopicPage[] = [
  // Professional Standards Pillar
  {
    slug: 'bitcoin-estate-planning-certification',
    title: 'Bitcoin Estate Planning Certification Overview',
    metaDescription: 'Comprehensive guide to BEPC certification for estate planning attorneys. Learn about the three-level certification framework, KEEP Protocol training, and professional standards.',
    category: 'professional-standards',
    keywords: ['bitcoin estate planning certification', 'BEPC certification', 'cryptocurrency estate planning certification', 'digital asset estate planning certification'],
    contentFile: '01_Bitcoin_Estate_Planning_Certification_Overview.md',
    wordCount: 3200,
    lastUpdated: '2025-01-09',
    status: 'published',
    schemaType: 'Course'
  },
  {
    slug: 'bepc-professional-standards-framework',
    title: 'BEPC Professional Standards Framework',
    metaDescription: 'Official professional standards for Bitcoin estate planning practitioners. Core competencies, ethical guidelines, and quality assurance requirements.',
    category: 'professional-standards',
    keywords: ['bitcoin estate planning standards', 'BEPC professional standards', 'cryptocurrency estate planning ethics', 'digital asset professional standards'],
    contentFile: '02_BEPC_Professional_Standards_Framework.md',
    wordCount: 3400,
    lastUpdated: '2025-01-09',
    status: 'published',
    schemaType: 'ProfessionalService'
  },
  {
    slug: 'keep-protocol-implementation-guide',
    title: 'KEEP Protocol Implementation Guide',
    metaDescription: 'Complete implementation guide for the Key Emergency Estate Protocol (KEEP). Multi-signature setup, execution triggers, and estate documentation mapping.',
    category: 'professional-standards',
    keywords: ['KEEP Protocol implementation', 'bitcoin inheritance protocol', 'cryptocurrency estate protocol', 'multi-signature inheritance'],
    contentFile: '03_KEEP_Protocol_Implementation_Guide.md',
    wordCount: 3600,
    lastUpdated: '2025-01-09',
    status: 'published',
    schemaType: 'HowTo'
  },
  {
    slug: 'bitcoin-estate-planning-best-practices',
    title: 'Bitcoin Estate Planning Best Practices',
    metaDescription: 'Professional best practices for Bitcoin estate planning. Client assessment, security implementation, legal integration, and quality assurance guidelines.',
    category: 'professional-standards',
    keywords: ['bitcoin estate planning best practices', 'cryptocurrency inheritance best practices', 'digital asset estate planning guidelines'],
    contentFile: '04_Bitcoin_Estate_Planning_Best_Practices.md',
    wordCount: 3500,
    lastUpdated: '2025-01-09',
    status: 'published',
    schemaType: 'Article'
  },
  {
    slug: 'professional-certification-requirements',
    title: 'Professional Certification Requirements',
    metaDescription: 'Detailed requirements for BEPC certification levels. 40-hour foundation, 80-hour advanced training, and expert-level contribution pathways.',
    category: 'professional-standards',
    keywords: ['BEPC certification requirements', 'bitcoin estate planning certification levels', 'cryptocurrency estate planning training'],
    contentFile: '05_Professional_Certification_Requirements.md',
    wordCount: 3300,
    lastUpdated: '2025-01-09',
    status: 'published',
    schemaType: 'Course'
  },
  {
    slug: 'continuing-education-standards',
    title: 'Continuing Education Standards',
    metaDescription: 'Continuing education requirements for BEPC certified professionals. Annual training requirements, approved education sources, and specialized learning tracks.',
    category: 'professional-standards',
    keywords: ['BEPC continuing education', 'bitcoin estate planning CE requirements', 'cryptocurrency professional development', 'digital asset training requirements'],
    contentFile: '06_Continuing_Education_Standards.md',
    wordCount: 3400,
    lastUpdated: '2025-01-09',
    status: 'published',
    schemaType: 'Course'
  },
  {
    slug: 'professional-development-pathway',
    title: 'Professional Development Pathway',
    metaDescription: 'Comprehensive professional development pathway for Bitcoin estate planning attorneys. Career progression, specialization tracks, and expert certification pathways.',
    category: 'professional-standards',
    keywords: ['BEPC professional development', 'bitcoin estate planning career path', 'cryptocurrency attorney specialization', 'digital asset career progression'],
    contentFile: '07_Professional_Development_Pathway.md',
    wordCount: 3500,
    lastUpdated: '2025-01-09',
    status: 'published',
    schemaType: 'Course'
  },
  {
    slug: 'bitcoin-estate-planning-ethics',
    title: 'Bitcoin Estate Planning Ethics',
    metaDescription: 'Ethical guidelines for Bitcoin estate planning professionals. Client confidentiality, fiduciary duties, conflict management, and professional responsibilities.',
    category: 'professional-standards',
    keywords: ['bitcoin estate planning ethics', 'cryptocurrency fiduciary duties', 'digital asset professional ethics', 'BEPC ethical guidelines'],
    contentFile: '08_Bitcoin_Estate_Planning_Ethics.md',
    wordCount: 3300,
    lastUpdated: '2025-01-09',
    status: 'published',
    schemaType: 'Article'
  },
  {
    slug: 'quality-assurance-framework',
    title: 'Quality Assurance Framework',
    metaDescription: 'Comprehensive quality assurance framework for Bitcoin estate planning services. Professional audits, peer review processes, and continuous improvement standards.',
    category: 'professional-standards',
    keywords: ['BEPC quality assurance', 'bitcoin estate planning quality standards', 'cryptocurrency service quality', 'digital asset practice management'],
    contentFile: '09_Quality_Assurance_Framework.md',
    wordCount: 3600,
    lastUpdated: '2025-01-09',
    status: 'published',
    schemaType: 'ProfessionalService'
  },
  {
    slug: 'professional-liability-management',
    title: 'Professional Liability Management',
    metaDescription: 'Managing professional liability in Bitcoin estate planning. Risk assessment, insurance requirements, error prevention, and liability protection strategies.',
    category: 'professional-standards',
    keywords: ['bitcoin estate planning liability', 'cryptocurrency malpractice prevention', 'digital asset professional insurance', 'BEPC liability management'],
    contentFile: '10_Professional_Liability_Management.md',
    wordCount: 3500,
    lastUpdated: '2025-01-09',
    status: 'published',
    schemaType: 'Article'
  },
  {
    slug: 'professional-recognition-awards',
    title: 'Professional Recognition Awards',
    metaDescription: 'BEPC professional recognition and awards program. Excellence awards, innovation recognition, and community leadership honors for Bitcoin estate planning professionals.',
    category: 'professional-standards',
    keywords: ['BEPC professional awards', 'bitcoin estate planning recognition', 'cryptocurrency professional excellence', 'digital asset leadership awards'],
    contentFile: '11_Professional_Recognition_Awards.md',
    wordCount: 3400,
    lastUpdated: '2025-01-09',
    status: 'published',
    schemaType: 'Article'
  },
  {
    slug: 'professional-networking-community',
    title: 'Professional Networking Community',
    metaDescription: 'Building professional networks in Bitcoin estate planning. BEPC community resources, regional chapters, mentorship programs, and collaboration opportunities.',
    category: 'professional-standards',
    keywords: ['BEPC professional network', 'bitcoin estate planning community', 'cryptocurrency attorney networking', 'digital asset professional resources'],
    contentFile: '12_Professional_Networking_Community.md',
    wordCount: 3500,
    lastUpdated: '2025-01-09',
    status: 'published',
    schemaType: 'ProfessionalService'
  },
  {
    slug: 'professional-practice-management',
    title: 'Professional Practice Management',
    metaDescription: 'Practice management guide for Bitcoin estate planning firms. Client onboarding, service delivery, technology integration, and operational excellence.',
    category: 'professional-standards',
    keywords: ['bitcoin estate planning practice management', 'cryptocurrency law firm operations', 'digital asset service delivery', 'BEPC practice standards'],
    contentFile: '13_Professional_Practice_Management.md',
    wordCount: 3600,
    lastUpdated: '2025-01-09',
    status: 'published',
    schemaType: 'HowTo'
  },
  {
    slug: 'professional-marketing-branding',
    title: 'Professional Marketing & Branding',
    metaDescription: 'Marketing and branding guidelines for BEPC certified professionals. Ethical marketing, brand standards, client acquisition, and professional positioning.',
    category: 'professional-standards',
    keywords: ['BEPC marketing guidelines', 'bitcoin estate planning branding', 'cryptocurrency attorney marketing', 'digital asset professional positioning'],
    contentFile: '14_Professional_Marketing_Branding.md',
    wordCount: 3500,
    lastUpdated: '2025-01-09',
    status: 'published',
    schemaType: 'Article'
  },
  {
    slug: 'professional-future-innovation',
    title: 'Professional Future Innovation',
    metaDescription: 'Future of Bitcoin estate planning profession. Emerging technologies, evolving standards, innovation frameworks, and long-term professional development.',
    category: 'professional-standards',
    keywords: ['bitcoin estate planning future', 'cryptocurrency profession innovation', 'digital asset industry evolution', 'BEPC future standards'],
    contentFile: '15_Professional_Future_Innovation.md',
    wordCount: 3700,
    lastUpdated: '2025-01-09',
    status: 'published',
    schemaType: 'Article'
  },
  
  // Placeholder for future content - to show the structure
  // Education Pillar (Coming in Phase 1B)
  {
    slug: 'bitcoin-estate-planning-cle-course',
    title: 'Bitcoin Estate Planning CLE Course',
    metaDescription: 'Comprehensive CLE course for attorneys. Earn continuing education credits while mastering Bitcoin estate planning fundamentals.',
    category: 'education',
    keywords: ['bitcoin estate planning CLE', 'cryptocurrency CLE course', 'digital asset continuing education'],
    wordCount: 0,
    lastUpdated: '2025-01-09',
    status: 'draft',
    schemaType: 'Course'
  },
  
  // Technical Pillar (Coming in Phase 1C)
  {
    slug: 'bitcoin-multisig-inheritance-setup',
    title: 'Bitcoin Multisig Inheritance Setup Guide',
    metaDescription: 'Technical guide for implementing multi-signature Bitcoin inheritance solutions. Hardware wallet configuration and key distribution strategies.',
    category: 'technical',
    keywords: ['bitcoin multisig inheritance', 'multi-signature wallet setup', 'cryptocurrency inheritance security'],
    wordCount: 0,
    lastUpdated: '2025-01-09',
    status: 'draft',
    schemaType: 'HowTo'
  },
  
  // Compliance Pillar (Coming in Phase 1D)
  {
    slug: 'bitcoin-estate-planning-regulations',
    title: 'Bitcoin Estate Planning Regulatory Framework',
    metaDescription: 'Comprehensive guide to Bitcoin estate planning regulations. Federal guidelines, state requirements, and compliance procedures.',
    category: 'compliance',
    keywords: ['bitcoin estate planning regulations', 'cryptocurrency inheritance law', 'digital asset compliance'],
    wordCount: 0,
    lastUpdated: '2025-01-09',
    status: 'draft',
    schemaType: 'Article'
  }
]

// Helper functions
export function getPageBySlug(category: string, slug: string): TopicPage | undefined {
  return programmaticPages.find(page => 
    page.category === category && page.slug === slug && page.status === 'published'
  )
}

export function getPagesByCategory(category: string): TopicPage[] {
  return programmaticPages.filter(page => 
    page.category === category && page.status === 'published'
  )
}

export function getAllPublishedPages(): TopicPage[] {
  return programmaticPages.filter(page => page.status === 'published')
}

// Get related pages for a specific page
export function getRelatedPages(currentPage: TopicPage, limit: number = 4): TopicPage[] {
  return programmaticPages
    .filter(page => 
      page.category === currentPage.category && 
      page.slug !== currentPage.slug && 
      page.status === 'published'
    )
    .slice(0, limit)
}