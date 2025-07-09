# ConvertKit Email Integration

## Setup Complete ✅

Your ConvertKit integration is now configured with:

### Features:
- **Automatic segmentation** based on user type (attorney vs Bitcoin holder)
- **Location tracking** (state and city tags)
- **Source tracking** (which page they signed up from)
- **Custom fields** for detailed subscriber data

### How It Works:

1. **User submits email** on your site
2. **Data saved to Supabase** database (for your records)
3. **Subscriber added to ConvertKit** with:
   - Tags: `attorney` or `hodler`/`bitcoin_holder`
   - Location tags: `state_ca`, `state_tx`, etc.
   - Custom fields: user_type, state, city, source

### ConvertKit Configuration:

The integration will:
- Find your "bepc collection" form automatically
- Add subscribers with appropriate tags
- Trigger any automations you've set up in ConvertKit

### To Complete Setup in ConvertKit:

1. **Create an automation** in ConvertKit:
   - Trigger: When subscriber joins "bepc collection" form
   - Action: Send email with PDF download link

2. **Create segments**:
   - Attorneys: Tag is "attorney"
   - Bitcoin Holders: Tag is "hodler" or "bitcoin_holder"

3. **Set up welcome email** with:
   - Download link to Bitcoin Estate Planning Standards PDF
   - Different messaging for attorneys vs holders

### Environment Variables for Vercel:

Add these to your Vercel project:
```
CONVERTKIT_API_KEY=XiRFjW6FSmiZbzZdan5kMQ
CONVERTKIT_API_SECRET=XiRFjW6FSmiZbzZdan5kMQ
```

### Testing:

1. Test locally with `npm run dev`
2. Submit an email through any form
3. Check:
   - Supabase database (Subscriber table)
   - ConvertKit subscribers list
   - Tags and segments applied correctly

### Troubleshooting:

If subscribers aren't appearing in ConvertKit:
1. Check browser console for errors
2. Check Vercel function logs
3. Verify API key is correct
4. Check ConvertKit form name matches "bepc collection"