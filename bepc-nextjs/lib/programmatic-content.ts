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