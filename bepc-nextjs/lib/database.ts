import { prisma } from './prisma'
import { mockLocation, mockAttorney, mockCities, mockStates } from './mockData'

export class DatabaseError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'DatabaseError'
  }
}

// Cache database availability status for 30 seconds in production
let dbAvailable: boolean | null = null
let lastCheck = 0
const DB_CHECK_INTERVAL = process.env.NODE_ENV === 'production' ? 30 * 1000 : 5 * 60 * 1000 // 30s in prod, 5m in dev

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

    // Skip connection attempt during build
    if (process.env.VERCEL_ENV || process.env.CI || process.env.NEXT_PHASE === 'phase-production-build' || process.env.SKIP_DATABASE_DURING_BUILD === 'true') {
      console.log('Build environment detected, skipping database connection')
      dbAvailable = false
      lastCheck = now
      return false
    }

    // Try to connect to database with shorter timeout
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Database connection timeout')), 2000) // Reduced from 5s to 2s
    )
    
    try {
      // Don't connect if already connected
      if (prisma) {
        // Test with a simple query
        await Promise.race([
          prisma.$queryRaw`SELECT 1`,
          timeoutPromise
        ])
        dbAvailable = true
        lastCheck = now
        return true
      }
    } catch (timeoutError) {
      throw timeoutError
    }
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
          const includeState = args?.include?.state
          const mockCity = {
            ...mockLocation,
            citySlug: args.where.citySlug,
          }
          
          if (includeState) {
            return {
              ...mockCity,
              state: {
                ...mockLocation.state,
                stateCode: args.where.state.stateCode,
              },
            }
          }
          
          return mockCity
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
        const includeState = args?.include?.state
        if (includeState) {
          return mockCities.map(city => ({
            ...city,
            state: mockStates.find(s => s.id === city.stateId) || mockStates[0]
          }))
        }
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