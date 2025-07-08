import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// Create a Prisma client instance only if DATABASE_URL is provided
export const prisma = globalForPrisma.prisma ?? (() => {
  // During build time or when DATABASE_URL is not set, create a minimal client
  if (!process.env.DATABASE_URL) {
    console.log('DATABASE_URL not provided, database features will be limited')
    // Return a minimal client that won't attempt to connect
    return new PrismaClient({
      datasources: {
        db: {
          url: process.env.DATABASE_URL || 'postgresql://user:pass@localhost:5432/db?schema=public'
        }
      },
      log: ['error'],
    })
  }
  
  return new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  })
})()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma