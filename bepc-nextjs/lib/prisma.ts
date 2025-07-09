import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// Mock Prisma client that never connects to database
class MockPrismaClient {
  city = {
    findFirst: async () => null,
    findMany: async () => [],
    count: async () => 0,
  }
  attorney = {
    findFirst: async () => null,
    findMany: async () => [],
    count: async () => 0,
  }
  state = {
    findFirst: async () => null,
    findMany: async () => [],
    count: async () => 0,
  }
  subscriber = {
    findFirst: async () => null,
    findMany: async () => [],
    create: async (data: any) => ({ id: '1', ...data }),
    update: async (data: any) => ({ id: '1', ...data }),
    count: async () => 0,
  }
  $queryRaw = async () => null
  $disconnect = async () => {}
}

// Create a Prisma client instance only if DATABASE_URL is provided
export const prisma = globalForPrisma.prisma ?? (() => {
  // During build time or when DATABASE_URL is not set, return mock client
  if (!process.env.DATABASE_URL || process.env.SKIP_DATABASE_DURING_BUILD === 'true') {
    console.log('DATABASE_URL not provided, using mock client')
    return new MockPrismaClient() as any
  }
  
  return new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
    // Optimize connection pooling
    datasources: {
      db: {
        url: process.env.DATABASE_URL + '?connection_limit=10&pool_timeout=10&connect_timeout=10',
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