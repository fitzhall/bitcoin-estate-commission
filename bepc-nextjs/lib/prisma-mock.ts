// Mock data for when database is not available
export const mockCities = [
  {
    id: '1',
    cityName: 'San Francisco',
    citySlug: 'san-francisco',
    stateId: '1',
    population: 881549,
    medianIncome: 112449,
    bitcoinBusinessesCount: 287,
    lawFirmsCount: 1923,
    latitude: 37.7749,
    longitude: -122.4194,
    createdAt: new Date(),
    updatedAt: new Date(),
    state: {
      id: '1',
      stateName: 'California',
      stateCode: 'ca',
      population: 39538223,
      bitcoinAdoptionRate: 15.2,
      estateTaxExemption: 12920000,
      probateLawsSummary: 'California has specific digital asset laws.',
      regulatoryNotes: 'California requires specific language in estate planning documents.',
      majorCities: ['Los Angeles', 'San Francisco', 'San Diego'],
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  },
  {
    id: '2',
    cityName: 'Austin',
    citySlug: 'austin',
    stateId: '2',
    population: 978908,
    medianIncome: 71576,
    bitcoinBusinessesCount: 234,
    lawFirmsCount: 1234,
    latitude: 30.2672,
    longitude: -97.7431,
    createdAt: new Date(),
    updatedAt: new Date(),
    state: {
      id: '2',
      stateName: 'Texas',
      stateCode: 'tx',
      population: 29145505,
      bitcoinAdoptionRate: 18.5,
      estateTaxExemption: 0,
      probateLawsSummary: 'Texas has no state estate tax.',
      regulatoryNotes: 'Texas is crypto-friendly with clear digital asset inheritance laws.',
      majorCities: ['Houston', 'Dallas', 'Austin'],
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  }
]

export const mockAttorneys = [
  {
    id: '1',
    name: 'Sarah Johnson',
    slug: 'sarah-johnson',
    firmName: 'Johnson Bitcoin Law',
    cityId: '1',
    stateId: '1',
    certificationLevel: 'Expert',
    specializations: ['Bitcoin Trust Planning', 'Multisig Estate Planning'],
    yearsExperience: 12,
    contactInfo: { email: 'sarah@example.com', phone: '(415) 555-0123' },
    bio: 'Leading expert in Bitcoin estate planning.',
    clientReviews: [],
    verifiedStatus: true,
    featured: true,
    profileImage: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  }
]