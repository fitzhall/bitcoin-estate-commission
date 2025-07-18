// Mock data for when database is unavailable during build
export const mockLocation = {
  id: 'mock-id',
  cityName: 'San Francisco',
  citySlug: 'san-francisco',
  population: 870000,
  stateId: 'ca-id',
  medianIncome: 112000,
  bitcoinBusinessesCount: 50,
  lawFirmsCount: 200,
  latitude: 37.7749,
  longitude: -122.4194,
  createdAt: new Date(),
  updatedAt: new Date(),
  state: {
    id: 'ca-id',
    stateName: 'California',
    stateCode: 'CA',
    population: 39500000,
    bitcoinAdoptionRate: 0.15,
    estateTaxExemption: 12920000,
    probateLawsSummary: 'California probate laws...',
    regulatoryNotes: 'California cryptocurrency regulations...',
    majorCities: ['Los Angeles', 'San Francisco', 'San Diego'],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  attorneys: [],
}

export const mockAttorney = {
  id: 'mock-attorney-id',
  name: 'John Doe',
  slug: 'john-doe',
  firmName: 'Doe & Associates',
  cityId: 'mock-city-id',
  city: {
    id: 'mock-city-id',
    cityName: 'San Francisco',
    citySlug: 'san-francisco',
    population: 870000,
    stateId: 'ca-id',
    medianIncome: 112000,
    bitcoinBusinessesCount: 50,
    lawFirmsCount: 200,
    latitude: 37.7749,
    longitude: -122.4194,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  stateId: 'ca-id', 
  state: {
    id: 'ca-id',
    stateName: 'California',
    stateCode: 'CA',
    population: 39500000,
    bitcoinAdoptionRate: 0.15,
    estateTaxExemption: 12920000,
    probateLawsSummary: 'California probate laws...',
    regulatoryNotes: 'California cryptocurrency regulations...',
    majorCities: ['Los Angeles', 'San Francisco', 'San Diego'],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  bio: 'Experienced attorney specializing in Bitcoin estate planning.',
  profileImage: null,
  certificationLevel: 'CERTIFIED',
  yearsExperience: 10,
  specializations: ['Estate Planning', 'Digital Assets'],
  contactInfo: {
    email: 'john@example.com',
    phone: '555-1234',
    address: '123 Main St',
    website: 'https://example.com',
  },
  clientReviews: [],
  verifiedStatus: true,
  featured: false,
  createdAt: new Date(),
  updatedAt: new Date(),
}

export const mockCities = [
  {
    id: 'sf-id',
    cityName: 'San Francisco',
    citySlug: 'san-francisco',
    population: 870000,
    stateId: 'ca-id',
    medianIncome: 112000,
    bitcoinBusinessesCount: 50,
    lawFirmsCount: 200,
    latitude: 37.7749,
    longitude: -122.4194,
    createdAt: new Date(),
    updatedAt: new Date(),
    state: {
      id: 'ca-id',
      stateName: 'California',
      stateCode: 'CA',
      population: 39500000,
      bitcoinAdoptionRate: 0.15,
      estateTaxExemption: 12920000,
      probateLawsSummary: 'California probate laws...',
      regulatoryNotes: 'California cryptocurrency regulations...',
      majorCities: ['Los Angeles', 'San Francisco', 'San Diego'],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  },
  {
    id: 'la-id',
    cityName: 'Los Angeles',
    citySlug: 'los-angeles',
    population: 3900000,
    stateId: 'ca-id',
    medianIncome: 89000,
    bitcoinBusinessesCount: 75,
    lawFirmsCount: 500,
    latitude: 34.0522,
    longitude: -118.2437,
    createdAt: new Date(),
    updatedAt: new Date(),
    state: {
      id: 'ca-id',
      stateName: 'California',
      stateCode: 'CA',
      population: 39500000,
      bitcoinAdoptionRate: 0.15,
      estateTaxExemption: 12920000,
      probateLawsSummary: 'California probate laws...',
      regulatoryNotes: 'California cryptocurrency regulations...',
      majorCities: ['Los Angeles', 'San Francisco', 'San Diego'],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  },
]

export const mockStates = [
  {
    id: 'ca-id',
    stateName: 'California',
    stateCode: 'CA',
    population: 39500000,
    bitcoinAdoptionRate: 0.15,
    estateTaxExemption: 12920000,
    probateLawsSummary: 'California probate laws...',
    regulatoryNotes: 'California cryptocurrency regulations...',
    majorCities: ['Los Angeles', 'San Francisco', 'San Diego'],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'ny-id',
    stateName: 'New York',
    stateCode: 'NY',
    population: 19500000,
    bitcoinAdoptionRate: 0.12,
    estateTaxExemption: 6580000,
    probateLawsSummary: 'New York probate laws...',
    regulatoryNotes: 'New York cryptocurrency regulations...',
    majorCities: ['New York City', 'Buffalo', 'Rochester'],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]