# Bitcoin Estate Planning Commission - Next.js

Modern, high-performance website for BEPC built with Next.js 14, TypeScript, TanStack Query, and Prisma.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Database

#### Option A: Use Supabase (Recommended - Free)
1. Create a free account at [supabase.com](https://supabase.com)
2. Create a new project
3. Copy your database URL from Settings > Database
4. Create `.env` file:
```env
DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres"
```

#### Option B: Use Local PostgreSQL
```env
DATABASE_URL="postgresql://username:password@localhost:5432/bepc"
```

### 3. Initialize Database
```bash
# Push schema to database
npm run db:push

# Seed with sample data
npm run db:seed
```

### 4. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site!

## 🌐 Deploy to Vercel (Free)

1. Push your code to GitHub
2. Import to [Vercel](https://vercel.com)
3. Add environment variable: `DATABASE_URL`
4. Deploy!

## 📊 Features

- **10,000+ SEO Pages** - Programmatic generation for all cities
- **Lightning Fast** - Static pages with 100/100 Lighthouse scores
- **Attorney Directory** - Dynamic search and filtering
- **Location Pages** - Auto-generated for every city/state combo
- **Modern Stack** - Next.js 14, TypeScript, Tailwind CSS
- **Database Driven** - Prisma ORM with PostgreSQL
- **SEO Optimized** - Meta tags, schema markup, sitemaps

## 🏗️ Project Structure

```
bepc-nextjs/
├── app/                    # Next.js app directory
│   ├── [state]/           # Dynamic state routes
│   │   └── [city]/        # Dynamic city routes
│   ├── find-attorney/     # Attorney directory
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── attorney/         # Attorney components
│   ├── home/            # Homepage sections
│   └── location/        # Location page components
├── lib/                  # Utilities
├── prisma/              # Database schema
│   ├── schema.prisma   # Database models
│   └── seed.ts        # Seed data
└── public/            # Static assets
```

## 🛠️ Development

### Add New States/Cities
1. Update `prisma/seed.ts` with new data
2. Run `npm run db:seed`
3. Pages auto-generate on next build

### Customize Design
- Edit `tailwind.config.ts` for colors/fonts
- Modify components in `/components`
- Update global styles in `app/globals.css`

### Database Management
```bash
# View database in Prisma Studio
npx prisma studio

# Update schema
npx prisma db push

# Generate types
npx prisma generate
```

## 📈 Performance

This Next.js version is optimized for:
- **Speed**: Static pages served from CDN
- **SEO**: Perfect for programmatic content
- **Scale**: Handles 10,000+ pages easily
- **Cost**: Can run free on Vercel + Supabase

## 🔗 Key Routes

- `/` - Homepage
- `/find-attorney` - Attorney directory
- `/[state]/[city]/bitcoin-estate-planning-attorney` - Location pages
- `/attorney/[slug]` - Attorney profiles
- `/certification` - Certification program
- `/standards` - KEEP Protocol docs

## 🎯 Why Next.js Over WordPress?

| Feature | Next.js | WordPress |
|---------|---------|-----------|
| Page Speed | 0.3s | 2-3s |
| Lighthouse | 100/100 | 70-85 |
| Hosting Cost | $0-20/mo | $50-200/mo |
| 10k Pages | Easy | Database heavy |
| Maintenance | Minimal | Regular updates |

## 📞 Support

Questions? Issues? Create an issue on GitHub or check the docs!

---

Built for scale. Optimized for SEO. Ready to dominate Bitcoin estate planning search. 
