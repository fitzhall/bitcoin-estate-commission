#!/bin/bash

echo "🚀 Setting up Supabase Database..."

# Check if DATABASE_URL contains placeholder
if grep -q "\[YOUR-PASSWORD\]" .env; then
    echo "❌ Error: Please replace [YOUR-PASSWORD] in .env with your actual password"
    echo "📝 Edit .env and update the DATABASE_URL"
    exit 1
fi

echo "📦 Installing dependencies..."
npm install

echo "🔨 Generating Prisma Client..."
npx prisma generate

echo "🗄️  Pushing schema to Supabase..."
npx prisma db push

if [ $? -eq 0 ]; then
    echo "✅ Database setup complete!"
    echo "📊 Opening Prisma Studio to verify connection..."
    npx prisma studio
else
    echo "❌ Database setup failed. Please check your connection string."
    exit 1
fi