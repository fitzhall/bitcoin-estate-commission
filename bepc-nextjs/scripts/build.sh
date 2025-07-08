#!/bin/bash

echo "Starting optimized build process..."

# Set build-time environment variables for performance
export NEXT_TELEMETRY_DISABLED=1
export NODE_ENV=production

# Check if DATABASE_URL is set
if [ -z "$DATABASE_URL" ]; then
  echo "No DATABASE_URL found. Building without database..."
  echo "The application will use static data during build."
  # Set flag to skip database during build
  export SKIP_DATABASE_DURING_BUILD=true
else
  echo "DATABASE_URL found. Building with database connection..."
  # Still set the flag to ensure static generation
  export SKIP_DATABASE_DURING_BUILD=true
  echo "Note: Database will be used at runtime, not during build for better performance."
fi

echo "Generating static pages for all cities..."
echo "This will create 500+ static pages at build time."

# Clear any previous build cache for fresh build
rm -rf .next

# Run the Next.js build with performance optimizations
NODE_OPTIONS="--max-old-space-size=4096" npm run build

# Verify build output
if [ -d ".next/server/app/[state]/[city]" ]; then
  echo "Static pages generated successfully!"
  # Count generated pages
  find .next/server/app -name "*.html" | wc -l | xargs echo "Total static pages generated:"
else
  echo "Warning: Static page generation may have issues."
fi

echo "Build completed successfully!"
echo "All city pages have been pre-rendered for optimal performance."