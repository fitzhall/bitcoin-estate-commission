# Database Connection Troubleshooting

## Current Error: Authentication Failed

This means the password in your connection string is incorrect or the connection format needs adjustment.

## Solutions to Try:

### 1. Verify Your Password
- Go to Supabase Dashboard → Settings → Database
- Find your database password (you may need to reset it if you forgot)
- Make sure there are no special characters that need escaping

### 2. Try the Pooled Connection (Recommended for Vercel)
Instead of port 5432, use port 6543 with pgbouncer:

```
DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.aeubpxjfmjgumxoybptx.supabase.co:6543/postgres?pgbouncer=true"
```

### 3. Try with SSL Mode
Add SSL mode to your connection:

```
DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.aeubpxjfmjgumxoybptx.supabase.co:5432/postgres?sslmode=require"
```

### 4. Use Connection String from Supabase
1. Go to your Supabase project
2. Settings → Database
3. Look for "Connection string" section
4. There might be multiple options:
   - Direct connection (port 5432)
   - Pooled connection (port 6543) - Better for serverless
   - Connection string with SSL

### 5. Reset Your Database Password
If unsure about the password:
1. Supabase Dashboard → Settings → Database
2. Click "Reset database password"
3. Copy the new password
4. Update your .env file

### 6. Check for Special Characters
If your password contains special characters like `@`, `#`, `$`, etc., they need to be URL encoded:
- `@` becomes `%40`
- `#` becomes `%23`
- `$` becomes `%24`

Example:
```
# If password is: my@pass#word
DATABASE_URL="postgresql://postgres:my%40pass%23word@db.aeubpxjfmjgumxoybptx.supabase.co:5432/postgres"
```

## Test Your Connection

After updating .env, test with:
```bash
npx prisma db push
```

If it still fails, try getting the exact connection string from Supabase's "Connection Pooling" section.