#!/bin/bash

echo "Starting build process..."

# Check if DATABASE_URL is set
if [ -z "$DATABASE_URL" ]; then
  echo "No DATABASE_URL found. Building without database..."
  echo "The application will use mock data during build."
else
  echo "DATABASE_URL found. Building with database connection..."
fi

# Run the Next.js build
npm run build

echo "Build completed successfully!"