# Vercel Environment Variables Setup

Now that your database is connected locally, you need to add these environment variables to Vercel:

## Required Environment Variables

### 1. DATABASE_URL
For production on Vercel, use the pooled connection (port 6543):
```
DATABASE_URL=postgresql://postgres:Wegonshine1*@db.aeubpxjfmjgumxoybptx.supabase.co:6543/postgres?pgbouncer=true
```

### 2. Update Build Settings
Change these to false or remove them:
```
SKIP_DATABASE_DURING_BUILD=false
SKIP_ENV_VALIDATION=false
```

## Steps to Add in Vercel:

1. Go to your Vercel project dashboard
2. Click on "Settings" tab
3. Click on "Environment Variables" in the sidebar
4. Add the following:

| Variable Name | Value | Environment |
|--------------|-------|-------------|
| DATABASE_URL | postgresql://postgres:Wegonshine1*@db.aeubpxjfmjgumxoybptx.supabase.co:6543/postgres?pgbouncer=true | Production, Preview, Development |
| SKIP_DATABASE_DURING_BUILD | false | Production, Preview, Development |

## Important Notes:

- We're using port 6543 (pooled connection) instead of 5432 for better performance on Vercel
- The `?pgbouncer=true` parameter is important for serverless environments
- Your password is already URL-safe (the * character doesn't need encoding)

## After Adding Variables:

1. Trigger a new deployment in Vercel
2. Your site will now:
   - Save email captures to the database
   - Have full database functionality
   - Be ready for attorney data

## Email Service Configuration

Add these ConvertKit environment variables:
```
CONVERTKIT_API_KEY=XiRFjW6FSmiZbzZdan5kMQ
CONVERTKIT_API_SECRET=XiRFjW6FSmiZbzZdan5kMQ
```

This enables:
- Automatic email capture to ConvertKit
- User segmentation (attorneys vs holders)
- Location-based tagging
- Welcome email automation