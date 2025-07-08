import { prisma } from './prisma'
import { mockLocation, mockAttorney, mockCities, mockStates } from './mockData'

export class DatabaseError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'DatabaseError'
  }
}

// Cache database availability status for 5 minutes
let dbAvailable: boolean | null = null
let lastCheck = 0
const DB_CHECK_INTERVAL = 5 * 60 * 1000 // 5 minutes

// Helper to check if database is available
export async function isDatabaseAvailable(): Promise<boolean> {
  const now = Date.now()
  
  // Return cached result if checked recently
  if (dbAvailable !== null && now - lastCheck < DB_CHECK_INTERVAL) {
    return dbAvailable
  }

  try {
    // Skip database check during build time
    if (process.env.NODE_ENV === 'production' && !process.env.DATABASE_URL) {
      console.log('No DATABASE_URL provided, using mock data')
      dbAvailable = false
      lastCheck = now
      return false
    }

    // Try to connect to database
    await prisma.$connect()
    // Test with a simple query
    await prisma.$queryRaw`SELECT 1`
    dbAvailable = true
    lastCheck = now
    return true
  } catch (error) {
    console.log('Database not available:', error)
    dbAvailable = false
    lastCheck = now
    return false
  }
}

// Safe database queries with fallbacks
export const safeDb = {
  city: {
    async findFirst(args: any) {
      try {
        const result = await prisma.city.findFirst(args)
        return result
      } catch (error) {
        console.log('Database error in city.findFirst, returning mock data')
        // Return mock data based on the query
        if (args?.where?.citySlug && args?.where?.state?.stateCode) {
          return {
            ...mockLocation,
            citySlug: args.where.citySlug,
            state: {
              ...mockLocation.state,
              stateCode: args.where.state.stateCode,
            },
          }
        }
        return null
      }
    },
    async findMany(args?: any) {
      try {
        const result = await prisma.city.findMany(args)
        return result
      } catch (error) {
        console.log('Database error in city.findMany, returning mock data')
        return mockCities
      }
    },
  },
  attorney: {
    async findMany(args?: any) {
      try {
        const result = await prisma.attorney.findMany(args)
        return result
      } catch (error) {
        console.log('Database error in attorney.findMany, returning empty array')
        return []
      }
    },
    async count(args?: any) {
      try {
        const result = await prisma.attorney.count(args)
        return result
      } catch (error) {
        console.log('Database error in attorney.count, returning 0')
        return 0
      }
    },
  },
  state: {
    async findMany(args?: any) {
      try {
        const result = await prisma.state.findMany(args)
        return result
      } catch (error) {
        console.log('Database error in state.findMany, returning mock data')
        return mockStates
      }
    },
  },
}