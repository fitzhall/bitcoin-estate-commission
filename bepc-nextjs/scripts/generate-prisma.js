#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Check if we're in a build environment without DATABASE_URL
const isDatabaseRequired = process.env.DATABASE_URL || process.env.NODE_ENV === 'development';

console.log('Checking Prisma generation requirements...');

if (!isDatabaseRequired) {
  console.log('No DATABASE_URL found, skipping Prisma client generation for build.');
  
  // Create a minimal Prisma client file to prevent import errors
  const clientPath = path.join(__dirname, '..', 'node_modules', '@prisma', 'client');
  const indexPath = path.join(clientPath, 'index.js');
  const dtsPath = path.join(clientPath, 'index.d.ts');
  
  // Ensure directory exists
  if (!fs.existsSync(clientPath)) {
    fs.mkdirSync(clientPath, { recursive: true });
  }
  
  // Create minimal client files
  const minimalClient = `
// Minimal Prisma Client for build without database
class PrismaClient {
  constructor(options) {
    this.options = options;
  }
  
  async $connect() {
    throw new Error('Database not configured');
  }
  
  async $disconnect() {
    return;
  }
  
  async $queryRaw() {
    throw new Error('Database not configured');
  }
}

module.exports = { PrismaClient };
`;

  const minimalTypes = `
// Minimal Prisma Client types for build without database
export class PrismaClient {
  constructor(options?: any);
  $connect(): Promise<void>;
  $disconnect(): Promise<void>;
  $queryRaw(query: any, ...values: any[]): Promise<any>;
}
`;

  fs.writeFileSync(indexPath, minimalClient);
  fs.writeFileSync(dtsPath, minimalTypes);
  
  console.log('Created minimal Prisma client for build.');
} else {
  console.log('DATABASE_URL found, generating full Prisma client...');
  
  try {
    execSync('npx prisma generate', { stdio: 'inherit' });
    console.log('Prisma client generated successfully.');
  } catch (error) {
    console.error('Failed to generate Prisma client:', error.message);
    process.exit(1);
  }
}