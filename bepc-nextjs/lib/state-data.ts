// State-specific data for programmatic SEO pages
// RUFADAA (Revised Uniform Fiduciary Access to Digital Assets Act) status

export interface StateData {
  name: string
  code: string
  slug: string
  rufadaa: {
    adopted: boolean
    adoptionDate?: string
    status: 'Adopted' | 'Pending' | 'Not Adopted' | 'Modified Version'
    keyProvisions?: string[]
    courtApprovalThreshold?: string
    legislativeStatus?: string
    citation?: string
  }
  intro: string
  faqs: Array<{
    question: string
    answer: string
  }>
  stats?: {
    bitcoinBusinesses?: number
    lawFirms?: number
    estatePlanners?: number
  }
}

// Pilot states data
export const stateData: Record<string, StateData> = {
  'ny': {
    name: 'New York',
    code: 'NY',
    slug: 'ny',
    rufadaa: {
      adopted: true,
      adoptionDate: '2016-09-29',
      status: 'Adopted',
      keyProvisions: [
        'Fiduciaries can access digital assets with user consent',
        'Clear procedures for estate representatives to manage cryptocurrency',
        'Protection for custodian compliance with fiduciary requests',
        'Specific provisions for transfer-on-death digital assets',
        'Part of the 98% of U.S. jurisdictions with RUFADAA'
      ],
      courtApprovalThreshold: 'Court approval required for assets over $50,000',
      legislativeStatus: 'AB A9910A',
      citation: 'New York Estates, Powers and Trusts Law Article 13-A'
    },
    intro: `New York has been at the forefront of digital asset legislation, adopting RUFADAA in 2016. For Bitcoin holders in the Empire State, this provides a clear legal framework for estate planning. However, the complexity of New York's financial regulations requires specialized expertise to ensure proper compliance and asset protection.`,
    faqs: [
      {
        question: 'Is Bitcoin inheritance taxable in New York?',
        answer: 'Yes, Bitcoin is subject to New York estate tax for estates exceeding $6.58 million (2024). The state imposes taxes ranging from 3.06% to 16% on estates above this threshold. Additionally, beneficiaries may owe capital gains tax on appreciation after inheritance.'
      },
      {
        question: 'How does RUFADAA protect Bitcoin estates in New York?',
        answer: 'RUFADAA gives estate executors legal authority to access and manage digital assets, including Bitcoin wallets and exchange accounts. This prevents asset loss due to lack of access while protecting privacy through consent requirements.'
      },
      {
        question: 'Do I need a special Bitcoin clause in my New York will?',
        answer: 'Yes, specific digital asset clauses are highly recommended. These should include wallet access instructions, key storage locations, and clear authorization for fiduciaries to manage cryptocurrency holdings under NY EPTL § 13-A.'
      },
      {
        question: 'What happens to Bitcoin in New York probate?',
        answer: 'Bitcoin passes through probate like other assets unless held in a trust or with transfer-on-death provisions. New York probate can take 7-12 months, during which Bitcoin remains inaccessible without proper planning.'
      },
      {
        question: 'Can New York attorneys handle Bitcoin estate planning?',
        answer: 'While any licensed attorney can draft estate documents, Bitcoin requires specialized knowledge. BEPC certified attorneys combine New York estate law expertise with cryptocurrency technical competency for comprehensive planning.'
      }
    ],
    stats: {
      bitcoinBusinesses: 450,
      lawFirms: 12000,
      estatePlanners: 3500
    }
  },
  
  'ca': {
    name: 'California',
    code: 'CA',
    slug: 'ca',
    rufadaa: {
      adopted: true,
      adoptionDate: '2016-09-24',
      status: 'Modified Version',
      keyProvisions: [
        'Enhanced privacy protections beyond standard RUFADAA',
        'Explicit consent required for content access',
        'Catalog information accessible to fiduciaries',
        'Special provisions for minors\' digital assets',
        'Part of the 98% of U.S. jurisdictions with RUFADAA'
      ],
      courtApprovalThreshold: 'No specific threshold - fiduciary discretion applies',
      legislativeStatus: 'AB-691',
      citation: 'California Probate Code Part 20 (Sections 870-884)'
    },
    intro: `California is among the 98% of U.S. jurisdictions that have adopted RUFADAA, providing a robust legal framework for Bitcoin inheritance. The state's modified version offers some of the strongest digital asset protections in the nation, with enhanced privacy requirements that align perfectly with cryptocurrency holders' values. California's tech-forward approach and large Bitcoin community make specialized estate planning essential.`,
    faqs: [
      {
        question: 'How does California\'s RUFADAA differ from other states?',
        answer: 'California added stronger privacy protections, requiring explicit consent for accessing digital asset content. Fiduciaries can access catalog information (like account existence) but need specific authorization for content like private keys or transaction history.'
      },
      {
        question: 'Is Bitcoin community property in California?',
        answer: 'Yes, Bitcoin acquired during marriage is generally community property, owned 50/50 by spouses. This affects estate planning significantly, as surviving spouses may already own half of Bitcoin holdings. Proper characterization is crucial for tax and distribution planning.'
      },
      {
        question: 'What are California\'s Bitcoin inheritance tax implications?',
        answer: 'California has no state estate tax, but beneficiaries may owe capital gains tax on appreciation. The step-up in basis at death can provide significant tax savings. Federal estate tax applies to estates over $13.61 million (2024).'
      },
      {
        question: 'Can I use a revocable trust for Bitcoin in California?',
        answer: 'Yes, revocable trusts are excellent for Bitcoin estate planning in California. They avoid probate, provide privacy, and allow detailed instructions for digital asset management. The trust must specifically address cryptocurrency and include technical access provisions.'
      },
      {
        question: 'What happens if I die without Bitcoin estate planning in California?',
        answer: 'Without proper planning, Bitcoin may be lost forever. California intestacy laws determine beneficiaries, but technical access is the challenge. Exchange-held Bitcoin might be recoverable through probate, but self-custody Bitcoin requires private keys that courts cannot recover.'
      }
    ],
    stats: {
      bitcoinBusinesses: 1200,
      lawFirms: 45000,
      estatePlanners: 8500
    }
  },
  
  'fl': {
    name: 'Florida',
    code: 'FL',
    slug: 'fl',
    rufadaa: {
      adopted: true,
      adoptionDate: '2016-07-01',
      status: 'Adopted',
      keyProvisions: [
        'Full RUFADAA implementation',
        'Fiduciary access to manage digital property',
        'User direction takes precedence',
        'Protection for custodians who comply',
        'Part of the 98% of U.S. jurisdictions with RUFADAA'
      ],
      courtApprovalThreshold: 'Summary administration available for estates under $75,000',
      legislativeStatus: 'SB 494',
      citation: 'Florida Statutes Chapter 740'
    },
    intro: `Florida was among the first wave of states joining the 98% of U.S. jurisdictions with RUFADAA, adopting comprehensive digital asset laws in 2016. Combined with no state income tax and strong asset protection laws, Florida offers an exceptional environment for Bitcoin estate planning. The state's large retiree population and wealth concentration make specialized cryptocurrency inheritance strategies essential.`,
    faqs: [
      {
        question: 'How does Florida\'s lack of income tax affect Bitcoin inheritance?',
        answer: 'Florida has no state income or estate tax, providing significant advantages. Beneficiaries avoid state-level capital gains tax on inherited Bitcoin appreciation. However, federal estate and capital gains taxes still apply, making tax planning crucial for large estates.'
      },
      {
        question: 'Can Florida homestead protection apply to Bitcoin proceeds?',
        answer: 'No, Florida\'s homestead protection doesn\'t directly cover Bitcoin. However, proper planning can convert Bitcoin to protected assets. This requires careful structuring to maintain creditor protection while ensuring cryptocurrency accessibility for beneficiaries.'
      },
      {
        question: 'What are Florida\'s digital asset access laws for fiduciaries?',
        answer: 'Under Florida Statutes Chapter 740, fiduciaries have the same access rights to digital assets as physical assets, with user consent. This includes accessing Bitcoin exchanges, wallets, and related accounts, provided proper documentation exists.'
      },
      {
        question: 'How long does Bitcoin probate take in Florida?',
        answer: 'Florida probate typically takes 6-12 months for formal administration. Summary administration (for estates under $75,000 or after 2 years) can be completed in 2-3 months. Proper Bitcoin estate planning can avoid probate entirely through trusts or beneficiary designations.'
      },
      {
        question: 'Do Florida attorneys need special certification for Bitcoin planning?',
        answer: 'While not legally required, Bitcoin\'s technical complexity makes specialized knowledge essential. BEPC certification ensures attorneys understand both Florida estate law and cryptocurrency technology, providing comprehensive protection for digital assets.'
      }
    ],
    stats: {
      bitcoinBusinesses: 850,
      lawFirms: 25000,
      estatePlanners: 5500
    }
  },
  
  'tx': {
    name: 'Texas',
    code: 'TX',
    slug: 'tx',
    rufadaa: {
      adopted: true,
      adoptionDate: '2017-09-01',
      status: 'Adopted',
      keyProvisions: [
        'Comprehensive digital asset fiduciary access',
        'Strong property rights alignment',
        'Business digital asset provisions',
        'Clear custodian compliance procedures',
        'Part of the 98% of U.S. jurisdictions with RUFADAA'
      ],
      courtApprovalThreshold: 'Independent administration available with minimal court oversight',
      legislativeStatus: 'SB 1193',
      citation: 'Texas Estates Code Chapter 2001'
    },
    intro: `Texas joined the 98% of U.S. jurisdictions with RUFADAA in 2017, extending its strong property rights tradition to digital assets. The state's business-friendly environment, lack of income tax, and growing Bitcoin mining industry create unique opportunities for cryptocurrency estate planning. Texas's independent administration procedures offer efficient estate settlement for properly structured Bitcoin inheritances.`,
    faqs: [
      {
        question: 'How does Texas\'s community property law affect Bitcoin?',
        answer: 'In Texas, Bitcoin acquired during marriage is presumed community property. This means spouses own it equally, affecting estate planning significantly. Proper characterization and documentation of separate vs. community Bitcoin is essential for accurate distribution and tax planning.'
      },
      {
        question: 'What are the tax advantages of Bitcoin inheritance in Texas?',
        answer: 'Texas has no state income or estate tax, offering significant advantages. Beneficiaries pay no state-level capital gains tax on inherited Bitcoin. Federal taxes still apply, but Texas\'s tax-friendly environment maximizes wealth transfer to heirs.'
      },
      {
        question: 'Can I use independent administration for Bitcoin estates in Texas?',
        answer: 'Yes, Texas\'s independent administration allows executors to manage estates with minimal court oversight. This is ideal for Bitcoin estates, enabling faster access to digital assets. Proper will drafting with independent administration provisions is crucial.'
      },
      {
        question: 'How does Texas RUFADAA protect Bitcoin inheritance?',
        answer: 'Texas Estates Code Chapter 2001 grants fiduciaries clear authority to access and manage digital assets. This includes Bitcoin wallets, exchange accounts, and related digital property. The law protects custodians who comply with proper requests, ensuring smooth asset transfer.'
      },
      {
        question: 'What happens to abandoned Bitcoin in Texas?',
        answer: 'Texas unclaimed property laws could theoretically apply to abandoned Bitcoin, though practical enforcement is complex. After 3-5 years of inactivity, digital assets might escheat to the state. Proper estate planning prevents this scenario entirely.'
      }
    ],
    stats: {
      bitcoinBusinesses: 750,
      lawFirms: 35000,
      estatePlanners: 6000
    }
  },
  
  'sd': {
    name: 'South Dakota',
    code: 'SD',
    slug: 'sd',
    rufadaa: {
      adopted: true,
      adoptionDate: '2017-07-01',
      status: 'Adopted',
      keyProvisions: [
        'Dynasty trust compatibility',
        'Strong privacy protections',
        'Directed trust provisions for digital assets',
        'Flexible fiduciary access rules',
        'Part of the 98% of U.S. jurisdictions with RUFADAA'
      ],
      courtApprovalThreshold: 'Simplified procedures for small estates under $50,000',
      legislativeStatus: 'HB1080',
      citation: 'South Dakota Codified Laws Title 55, Chapter 19'
    },
    intro: `South Dakota is part of the 98% of U.S. jurisdictions that have adopted RUFADAA, combining this digital asset framework with the nation's most advanced trust laws. The state's perpetual dynasty trusts, unmatched privacy protections, and lack of state income tax create the ideal environment for multi-generational Bitcoin wealth preservation. These advantages are available to residents and non-residents alike.`,
    faqs: [
      {
        question: 'Why is South Dakota popular for Bitcoin dynasty trusts?',
        answer: 'South Dakota allows perpetual dynasty trusts with no rule against perpetuities, perfect for long-term Bitcoin holding. Combined with no state income tax, directed trust options, and strong privacy laws, it\'s ideal for multi-generational cryptocurrency wealth preservation.'
      },
      {
        question: 'Can non-residents use South Dakota for Bitcoin estate planning?',
        answer: 'Yes, non-residents can establish South Dakota trusts for Bitcoin holdings. This requires a South Dakota trustee and following specific statutory requirements. Many choose South Dakota for its favorable trust laws and tax benefits, regardless of residency.'
      },
      {
        question: 'How do directed trusts work for Bitcoin in South Dakota?',
        answer: 'Directed trusts separate investment management from trust administration. You can appoint a cryptocurrency expert as investment advisor while using a South Dakota trust company for administration. This structure optimizes both Bitcoin management and legal compliance.'
      },
      {
        question: 'What privacy protections exist for Bitcoin trusts in South Dakota?',
        answer: 'South Dakota offers exceptional privacy through sealed court proceedings and limited disclosure requirements. Trust details remain private, protecting Bitcoin holdings from public scrutiny. This privacy extends to beneficiaries and trust terms.'
      },
      {
        question: 'How does South Dakota handle Bitcoin keys in trust structures?',
        answer: 'South Dakota\'s flexible trust laws accommodate various key management structures. Options include trustee custody, directed advisor control, or multi-signature arrangements. The state\'s modern statutes specifically contemplate digital asset management within trust frameworks.'
      }
    ],
    stats: {
      bitcoinBusinesses: 50,
      lawFirms: 500,
      estatePlanners: 150
    }
  }
}

// Helper function to get state data by various formats
export function getStateData(stateIdentifier: string): StateData | null {
  // Try direct lookup first
  if (stateData[stateIdentifier]) {
    return stateData[stateIdentifier]
  }
  
  // Try lowercase
  const lowercase = stateIdentifier.toLowerCase()
  if (stateData[lowercase]) {
    return stateData[lowercase]
  }
  
  // Try by state code
  const byCode = Object.values(stateData).find(
    state => state.code.toLowerCase() === lowercase
  )
  if (byCode) {
    return byCode
  }
  
  // Try by state name
  const byName = Object.values(stateData).find(
    state => state.name.toLowerCase() === lowercase.replace('-', ' ')
  )
  
  return byName || null
}

// Get all states
export function getAllStates(): StateData[] {
  return Object.values(stateData)
}

// Generate intro with spintax variation
export function generateStateIntro(state: StateData, variation: number = 0): string {
  const templates = [
    `${state.name} residents holding Bitcoin and other cryptocurrencies need specialized estate planning to protect their digital wealth. As part of the 98% of U.S. jurisdictions with RUFADAA, ${state.name} provides a robust legal framework ensuring your digital assets transfer smoothly to beneficiaries.`,
    `Protecting Bitcoin investments in ${state.name} requires understanding both state law and cryptocurrency technology. ${state.name} joins 49 other jurisdictions in adopting RUFADAA, providing clear legal guidelines for digital asset inheritance and fiduciary access.`,
    `Estate planning for Bitcoin in ${state.name} benefits from the state's adoption of RUFADAA, joining the national consensus that covers 98% of U.S. jurisdictions. This established legal framework ensures your cryptocurrency legacy passes securely to future generations.`
  ]
  
  return templates[variation % templates.length]
}