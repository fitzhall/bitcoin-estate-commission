# Supabase Database Setup Guide

## Prerequisites
- A Supabase account (free tier is fine)
- Your Supabase project created

## Step 1: Get Your Database URL

1. Go to your [Supabase Dashboard](https://app.supabase.com)
2. Select your project
3. Click on **Settings** (gear icon) in the left sidebar
4. Click on **Database**
5. Find the **Connection string** section
6. Copy the URI (it looks like: `postgresql://postgres:[YOUR-PASSWORD]@db.xxxxxxxxxxxx.supabase.co:5432/postgres`)

## Step 2: Configure Your Environment

1. Open the `.env` file in this directory
2. Replace the DATABASE_URL with your actual connection string
3. Replace `[YOUR-PASSWORD]` with your database password
4. Replace `[YOUR-PROJECT-REF]` with your project reference

Example:
```
DATABASE_URL="postgresql://postgres:mypassword123@db.abcdefghijklmnop.supabase.co:5432/postgres"
```

## Step 3: Install Dependencies

```bash
npm install
```

## Step 4: Generate Prisma Client

```bash
npx prisma generate
```

## Step 5: Push Schema to Supabase

```bash
npx prisma db push
```

This will create all the tables in your Supabase database.

## Step 6: Verify Connection

```bash
npx prisma studio
```

This opens Prisma Studio in your browser where you can see your database tables.

## Step 7: Update Vercel Environment Variables

1. Go to your Vercel project dashboard
2. Go to Settings → Environment Variables
3. Add `DATABASE_URL` with your Supabase connection string
4. Remove or set to `false`:
   - `SKIP_DATABASE_DURING_BUILD`
   - `SKIP_ENV_VALIDATION`

## Troubleshooting

### Connection Pool Issues
If you get connection errors on Vercel, use the pooled connection:
```
DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:6543/postgres?pgbouncer=true"
```
Note the port change from 5432 to 6543.

### SSL Issues
If you get SSL errors, add `?sslmode=require`:
```
DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres?sslmode=require"
```

### Prisma Connection Limit
For serverless environments, add connection limits:
```
DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:6543/postgres?pgbouncer=true&connection_limit=1"
```

## Next Steps

Once connected, you can:
- Run `npm run dev` to start development with database
- Email captures will be saved to the Subscriber table
- Attorney and location data can be added via Prisma Studio or seed scripts