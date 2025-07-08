import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create states
  const states = await Promise.all([
    prisma.state.create({
      data: {
        stateName: 'California',
        stateCode: 'ca',
        population: 39538223,
        bitcoinAdoptionRate: 15.2,
        estateTaxExemption: 12920000,
        probateLawsSummary: 'California has specific digital asset laws under the Revised Uniform Fiduciary Access to Digital Assets Act. Probate process typically takes 9-18 months.',
        regulatoryNotes: 'California requires specific language in estate planning documents for digital assets.',
        majorCities: ['Los Angeles', 'San Francisco', 'San Diego', 'San Jose', 'Sacramento'],
      },
    }),
    prisma.state.create({
      data: {
        stateName: 'Texas',
        stateCode: 'tx',
        population: 29145505,
        bitcoinAdoptionRate: 18.5,
        estateTaxExemption: 0,
        probateLawsSummary: 'Texas has no state estate tax. Digital assets are governed by the Texas Estates Code Chapter 2001.',
        regulatoryNotes: 'Texas is crypto-friendly with clear digital asset inheritance laws.',
        majorCities: ['Houston', 'Dallas', 'Austin', 'San Antonio', 'Fort Worth'],
      },
    }),
    prisma.state.create({
      data: {
        stateName: 'New York',
        stateCode: 'ny',
        population: 20201249,
        bitcoinAdoptionRate: 12.8,
        estateTaxExemption: 6580000,
        probateLawsSummary: 'New York has strict BitLicense requirements. Estate tax applies to estates over $6.58 million.',
        regulatoryNotes: 'Complex regulatory environment for cryptocurrency businesses and inheritance.',
        majorCities: ['New York City', 'Buffalo', 'Rochester', 'Albany', 'Syracuse'],
      },
    }),
    prisma.state.create({
      data: {
        stateName: 'Florida',
        stateCode: 'fl',
        population: 21538187,
        bitcoinAdoptionRate: 16.7,
        estateTaxExemption: 0,
        probateLawsSummary: 'Florida has no state estate tax. The Florida Fiduciary Access to Digital Assets Act governs digital inheritance.',
        regulatoryNotes: 'Crypto-friendly state with growing Bitcoin adoption.',
        majorCities: ['Miami', 'Tampa', 'Orlando', 'Jacksonville', 'Fort Lauderdale'],
      },
    }),
    prisma.state.create({
      data: {
        stateName: 'Illinois',
        stateCode: 'il',
        population: 12812508,
        bitcoinAdoptionRate: 11.3,
        estateTaxExemption: 4000000,
        probateLawsSummary: 'Illinois has state estate tax for estates over $4 million. Digital assets covered under state fiduciary laws.',
        regulatoryNotes: 'Moderate regulatory approach to cryptocurrency.',
        majorCities: ['Chicago', 'Aurora', 'Rockford', 'Joliet', 'Naperville'],
      },
    }),
  ])

  // Create cities for California
  const californiaCities = await Promise.all([
    prisma.city.create({
      data: {
        cityName: 'Los Angeles',
        citySlug: 'los-angeles',
        stateId: states[0].id,
        population: 3971883,
        medianIncome: 62142,
        bitcoinBusinessesCount: 156,
        lawFirmsCount: 2847,
        latitude: 34.0522,
        longitude: -118.2437,
      },
    }),
    prisma.city.create({
      data: {
        cityName: 'San Francisco',
        citySlug: 'san-francisco',
        stateId: states[0].id,
        population: 881549,
        medianIncome: 112449,
        bitcoinBusinessesCount: 287,
        lawFirmsCount: 1923,
        latitude: 37.7749,
        longitude: -122.4194,
      },
    }),
    prisma.city.create({
      data: {
        cityName: 'San Diego',
        citySlug: 'san-diego',
        stateId: states[0].id,
        population: 1423851,
        medianIncome: 79646,
        bitcoinBusinessesCount: 98,
        lawFirmsCount: 1456,
        latitude: 32.7157,
        longitude: -117.1611,
      },
    }),
  ])

  // Create cities for Texas
  const texasCities = await Promise.all([
    prisma.city.create({
      data: {
        cityName: 'Houston',
        citySlug: 'houston',
        stateId: states[1].id,
        population: 2320268,
        medianIncome: 52338,
        bitcoinBusinessesCount: 189,
        lawFirmsCount: 2134,
        latitude: 29.7604,
        longitude: -95.3698,
      },
    }),
    prisma.city.create({
      data: {
        cityName: 'Dallas',
        citySlug: 'dallas',
        stateId: states[1].id,
        population: 1343573,
        medianIncome: 52580,
        bitcoinBusinessesCount: 167,
        lawFirmsCount: 1876,
        latitude: 32.7767,
        longitude: -96.7970,
      },
    }),
    prisma.city.create({
      data: {
        cityName: 'Austin',
        citySlug: 'austin',
        stateId: states[1].id,
        population: 978908,
        medianIncome: 71576,
        bitcoinBusinessesCount: 234,
        lawFirmsCount: 1234,
        latitude: 30.2672,
        longitude: -97.7431,
      },
    }),
  ])

  // Create legal topics
  const topics = await Promise.all([
    prisma.legalTopic.create({
      data: {
        topicName: 'Bitcoin Trust Planning',
        topicSlug: 'bitcoin-trust-planning',
        subtopics: ['Revocable Trusts', 'Irrevocable Trusts', 'Dynasty Trusts', 'Asset Protection Trusts'],
        description: 'Comprehensive planning for Bitcoin holdings in trust structures',
        complexityLevel: 'High',
        averageCostRange: '$5,000 - $25,000',
        timeRequirements: '2-6 weeks',
        riskFactors: ['Key management', 'Trustee expertise', 'Tax implications'],
      },
    }),
    prisma.legalTopic.create({
      data: {
        topicName: 'Cryptocurrency Inheritance',
        topicSlug: 'cryptocurrency-inheritance',
        subtopics: ['Direct Transfer', 'Probate Process', 'Beneficiary Designation', 'Joint Ownership'],
        description: 'Planning for the transfer of cryptocurrency assets upon death',
        complexityLevel: 'Medium',
        averageCostRange: '$2,500 - $10,000',
        timeRequirements: '1-3 weeks',
        riskFactors: ['Access loss', 'Security breaches', 'Legal compliance'],
      },
    }),
    prisma.legalTopic.create({
      data: {
        topicName: 'Digital Asset Probate',
        topicSlug: 'digital-asset-probate',
        subtopics: ['Court Procedures', 'Asset Recovery', 'Valuation', 'Distribution'],
        description: 'Navigating probate court for digital asset distribution',
        complexityLevel: 'High',
        averageCostRange: '$10,000 - $50,000',
        timeRequirements: '6-18 months',
        riskFactors: ['Court delays', 'Asset volatility', 'Technical challenges'],
      },
    }),
  ])

  // Create sample attorneys
  await Promise.all([
    prisma.attorney.create({
      data: {
        name: 'Sarah Johnson',
        slug: 'sarah-johnson',
        firmName: 'Johnson Bitcoin Law',
        cityId: californiaCities[1].id, // San Francisco
        stateId: states[0].id, // California
        certificationLevel: 'Expert',
        specializations: ['Bitcoin Trust Planning', 'Multisig Estate Planning'],
        yearsExperience: 12,
        contactInfo: {
          email: 'sarah@johnsonbitcoinlaw.com',
          phone: '(415) 555-0123',
        },
        bio: 'Sarah Johnson is a leading expert in Bitcoin estate planning with over 12 years of experience in cryptocurrency law.',
        verifiedStatus: true,
        featured: true,
      },
    }),
    prisma.attorney.create({
      data: {
        name: 'Michael Chen',
        slug: 'michael-chen',
        firmName: 'Chen & Associates',
        cityId: texasCities[2].id, // Austin
        stateId: states[1].id, // Texas
        certificationLevel: 'Advanced',
        specializations: ['Cryptocurrency Inheritance', 'Bitcoin Tax Planning'],
        yearsExperience: 8,
        contactInfo: {
          email: 'mchen@chenlaw.com',
          phone: '(512) 555-0456',
        },
        bio: 'Michael Chen specializes in cryptocurrency inheritance and tax planning for high-net-worth individuals.',
        verifiedStatus: true,
        featured: false,
      },
    }),
    prisma.attorney.create({
      data: {
        name: 'David Williams',
        slug: 'david-williams',
        firmName: 'Williams Digital Estate Law',
        cityId: californiaCities[0].id, // Los Angeles
        stateId: states[0].id, // California
        certificationLevel: 'Expert',
        specializations: ['Digital Asset Probate', 'Bitcoin Trust Planning'],
        yearsExperience: 15,
        contactInfo: {
          email: 'dwilliams@williamslaw.com',
          phone: '(310) 555-0789',
        },
        bio: 'David Williams has handled numerous complex digital asset probate cases and is recognized as a thought leader in the field.',
        verifiedStatus: true,
        featured: true,
      },
    }),
  ])

  console.log('Seed data created successfully!')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })