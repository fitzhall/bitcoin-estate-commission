# Deployment Guide

This Next.js application is configured to deploy on Vercel without requiring a database during the build process.

## Deployment Steps

### 1. Deploy to Vercel (No Database Required)

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Deploy without setting any environment variables
4. The application will use mock data during build and initial deployment

### 2. Set Up Database (Post-Deployment)

After successful deployment, you can set up a PostgreSQL database:

#### Option A: Using Supabase (Recommended - Free Tier Available)

1. Create a free account at [supabase.com](https://supabase.com)
2. Create a new project
3. Go to Settings → Database
4. Copy the connection string
5. In Vercel, go to your project settings → Environment Variables
6. Add `DATABASE_URL` with your Supabase connection string
7. Redeploy your application

#### Option B: Using Vercel Postgres

1. In your Vercel dashboard, go to the Storage tab
2. Create a new Postgres database
3. The `DATABASE_URL` will be automatically added to your environment variables
4. Redeploy your application

### 3. Initialize Database Schema

After setting up your database:

1. Install dependencies locally:
   ```bash
   npm install
   ```

2. Set your DATABASE_URL in `.env.local`:
   ```
   DATABASE_URL="your-database-connection-string"
   ```

3. Run Prisma migrations:
   ```bash
   npx prisma migrate deploy
   npx prisma generate
   ```

4. (Optional) Seed the database with initial data:
   ```bash
   npx prisma db seed
   ```

## Environment Variables

The following environment variables are optional:

- `DATABASE_URL`: PostgreSQL connection string (optional - app works without it)
- `NEXTAUTH_SECRET`: For authentication features (optional)
- `NEXTAUTH_URL`: Your deployment URL (optional)

## How It Works

The application uses a safe database wrapper (`lib/database.ts`) that:

1. Checks if a database connection is available
2. Falls back to mock data if the database is unavailable
3. Allows the site to build and deploy without a database
4. Seamlessly switches to real data once the database is connected

## Troubleshooting

### Build Errors Related to Database

If you see database-related build errors:

1. Ensure you're using the `safeDb` wrapper instead of direct `prisma` calls
2. Check that all database queries have proper error handling
3. Verify that `generateStaticParams` functions return empty arrays when the database is unavailable

### Database Connection Issues

If the database isn't connecting after deployment:

1. Verify the `DATABASE_URL` is correctly set in Vercel environment variables
2. Check that the database is accessible from Vercel's servers
3. Ensure the database SSL settings are correct (Supabase requires SSL)

### Performance

The application caches database availability checks for 5 minutes to improve performance. If you've just added a database, it may take up to 5 minutes for the application to start using it.