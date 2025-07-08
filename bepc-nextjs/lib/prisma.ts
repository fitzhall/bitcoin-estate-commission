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
    // Optimize connection pooling
    datasources: {
      db: {
        url: process.env.DATABASE_URL + '?connection_limit=5&pool_timeout=2&connect_timeout=2',
      }
    },
  })
})()

// Always reuse the same instance in production for connection pooling
if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
} else {
  // In production, ensure we reuse the same client
  globalForPrisma.prisma = prisma
}

// Gracefully handle shutdown to close connections
if (process.env.NODE_ENV === 'production') {
  process.on('beforeExit', async () => {
    await prisma.$disconnect()
  })
}